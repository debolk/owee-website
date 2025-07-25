#!/usr/bin/env python3
import json, sys
import pandas as pd
from datetime import datetime
from openpyxl import load_workbook
from os import path, system

class Programme:
  def __init__(self, start, end, time_increment):
    self.start_time = start
    self.end_time = end
    self.increment = time_increment
    self.monday = set()
    self.tuesday = set()
    self.wednesday = set()
    self.thursday = set()

    self._dirty = False
    self._database = None

  def __str__(self):
    return f"Programme <start_time: {self.start_time}, end_time: {self.end_time}, increment: {self.increment}, activities: {{monday: {len(self.monday)}, tuesday: {len(self.tuesday)}, wednesday: {len(self.wednesday)}, thursday: {len(self.thursday)}}}>"

  def _get_list(self, day):
    if day == "ma":
      return self.monday
    elif day == "di":
      return self.tuesday
    elif day == "wo":
      return self.wednesday
    elif day == "do":
      return self.thursday

  def add_activity(self, day, act):
    self._get_list(day).add(act)

  def __contains__(self, act):
    if type(act) == tuple:
      for a in self._get_list(act[1]):
        if a.title["nl"] == act[0]:
          return True
    else:
      sets = {*self.monday, *self.tuesday, *self.wednesday, *self.thursday}
      for a in sets:
        if a == act:
          return True
    return False

  def open_database(self, json_file):
    with open(json_file) as data:
      self._database = json.load(data)

  def write_database(self, json_file):
    if self._dirty:
      with open(json_file, 'wt') as db:
        json.dump(self._database, db, indent='\t', ensure_ascii=False)
      self._dirty = False

  def sort_day(a):
    return f"{a.start:4d}{alignments.index(a.alignment)}".replace(' ', 'z')

  def write(self):
    d = self.__dict__
    del d['_dirty']
    del d['_database']
    d['monday'] = sorted(list(self.monday), key=Programme.sort_day)
    d['tuesday'] = sorted(list(self.tuesday), key=Programme.sort_day)
    d['wednesday'] = sorted(list(self.wednesday), key=Programme.sort_day)
    d['thursday'] = sorted(list(self.thursday), key=Programme.sort_day)

    with open(path.join(script_path, "../public/js/programme.json"), "wt") as output:
      json.dump(self.__dict__, output, indent='\t', default=lambda o: o.__dict__, ensure_ascii=False)


  class Activity:
    def __init__(self, programme, title, start, end, alignment):
      self.start = start
      self.end = end
      self.alignment = alignment
      self.color_shift = "(VVT)" in title
      self.triple = False
      self.title = {
        "nl": title,
        "en": ''}

      self._object = title.lower().replace(' ', '_')
      self._programme = programme
      self.__translate_title()
      self.__translate_description()

    def __str__(self):
      return f"Activity <start: {self.start}, end: {self.end}, alignment: {self.alignment}, color_shift: {self.color_shift}, {self.triple}, title: {self.title}, description: {self.description}>"

    def __eq__(self, other):
      return other.start == self.start and other.title["nl"] == self.title["nl"] and other.end == self.end

    def __hash__(self):
      return hash(tuple(self.to_dict()))

    def __translate_title(self):
      if self._object in self._programme._database["translations"]:
        self.title["en"] = self._programme._database["translations"][self._object]
      else:
        self.title["en"] = input(f"Please provide a translation for \"{self.title["nl"]}\": ")
        self._programme._database["translations"][self._object] = self.title["en"]
        self._programme._dirty = True

    def __translate_description(self):
      if self._object in self._programme._database["descriptions"] and self._programme._database["descriptions"][self._object]["nl"] != '' and self._programme._database["descriptions"][self._object]["en"] != '':
        self.description = self._programme._database["descriptions"][self._object]
      else:
        self.description = {}
        nl = input(f"Please provide a Dutch description for \"{self.title["nl"]}\": ")
        en = input(f"Please provide an English description for \"{self.title["en"]}\": ")
        self.description["nl"] = nl
        self.description["en"] = en
        if nl != "" or en != "":
          self._programme._database["descriptions"][self._object] = self.description
          self._programme._dirty = True

    def to_dict(self):
      d = self.__dict__
      del d["_object"]
      del d["_programme"]
      return d

def _offset_refs(cell_refs):
  dref = []
  for ref in cell_refs:
    dref.append((ref[0] - 2, ref[1] - 1))
  return dref

def merge_cells(dataframe, file_path):
  workbook = load_workbook(file_path)
  for merged_cell in workbook[sheet_name].merged_cells:
    refs = tuple(merged_cell.cells)

    try:
      mcell_tup = _offset_refs(refs)
      value = dataframe.iloc[mcell_tup[0]]
      for subcell in mcell_tup[1:]:
        dataframe.iloc[subcell] = value
    except IndexError:
      print("Index out of bounds")

  return dataframe

def get_timings(df):
  start = df.iloc[0,0]
  end = df.iloc[-1, 1]

  now = datetime.now()
  start_inc = now.replace(hour=df.iloc[0, 1].hour, minute=df.iloc[0, 1].minute) - now.replace(hour=start.hour, minute=start.minute)

  return int(start.strftime("%H%M")), int(end.strftime("%H%M")), int(start_inc.total_seconds()/60)

def get_amount(df, cols, row):
  items = set()
  for col in cols:
    items.add(str(df.iloc[row, col]))
  return len(items)

script_path = path.dirname(path.abspath(__file__))
excel_file = path.join(script_path, "programme.xlsx")
json_file = path.join(script_path, "database.json")
sheet_name = "programme"

sheet_dict = {
  "start": 0,
  "end": 1,
  "ma": (2, 3, 4),
  "di": (5, 6, 7),
  "wo": (8, 9, 10),
  "do": (11, 12, 13)
  }

alignments = ['left', 'center', 'right']

if __name__ == "__main__":
  df = pd.read_excel(excel_file, usecols="A:N", sheet_name=sheet_name, na_values="")
  df = merge_cells(df, excel_file)
  p = Programme(*get_timings(df))
  p.open_database(json_file)
  print(df)

  for i in sheet_dict.items():
    if type(i[1]) == int: # skip single columns for parsing
      continue

    prev_row = [("", 0, 0), ("", 0, 0), ("", 0, 0)] #(title, start, row)
    for row in range(df.shape[0]):
      end = int(df.iloc[row, sheet_dict["end"]].strftime("%H%M"))

      # print("\n")
      for col in i[1]:
        index = i[1].index(col)
        title = str(df.iloc[row, col]).strip()
        # print(prev_row)
        # print(start, title)
        # print(title != "nan", (row == df.shape[0] - 1 or str(df.iloc[row + 1, col]).strip() != title), (index == 0 or prev_row[index] != prev_row[index - 1]))

        if title != "nan" and (row == df.shape[0] - 1 or str(df.iloc[row + 1, col]).strip() != title) and (title, i[0]) not in p:
          align = "center"
          if prev_row[index][0] != title:
            start = int(df.iloc[row, sheet_dict["start"]].strftime("%H%M"))
            amnt = get_amount(df, i[1], row)

          else:
            start = int(df.iloc[prev_row[index][1], sheet_dict["start"]].strftime("%H%M"))
            amnt = get_amount(df, i[1], prev_row[index][1])

          if amnt > 1 and get_amount(df, i[1], row) > 1:
            align = alignments[index]

          a = Programme.Activity(p, title, start, end, align)
          a.triple = amnt == 3
          p.add_activity(i[0], a)

        if prev_row[index][0] == title:
          continue

        prev_row[index] = (title, row)


  p.write_database(json_file)
  p.write()
