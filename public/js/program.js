let program;

function getTimeDif(start, end) {
  return end < start
    ? convertTime(end + 2400) - convertTime(start) : convertTime(end) - convertTime(start);
}

function formatTime(time) {
  time = time.toString().padStart(4, '0');
  return time.substring(0,2) + ':' + time.substring(2);
}

function convertTime(time) {
  let h = Math.floor(time/100);
  let m60 = (time % 100)/60;
  return h + m60;
}

function getHoursMinutes(increment) {
  let time_array = [];
  let start = convertTime(program.start_time);
  for (let i = 0; i <= getTimeDif(program.start_time, program.end_time) ; i += convertTime(increment)) {
    let h = start + Math.floor(i);
    let m = (i - h + start) * 60;

    if (h >= 24) h -= 24;
    time_array.push(h.toString() + ":" + m.toString().padEnd(2, '0'));
  }
  return time_array;
}

function populateDay(element, day_duration, plan) {
  for (let act of plan){
    let act_duration = getTimeDif(act.start, act.end);
    let height = act_duration / day_duration * 100;

    let act_node = document.createElement("div");
    act_node.classList.add("activity");
    act_node.classList.add(act.alignment);
    if (act.triple) act_node.classList.add("triple");
    act_node.style.height = `calc(${height}% - 6px)`;

    let top = act.start >= program.start_time ?
      (convertTime(act.start) - convertTime(program.start_time))/day_duration * 100
      : (convertTime(act.start) - convertTime(program.start_time) + 24)/day_duration * 100;
    act_node.style.top = `calc(${top}%)`;

	if (act.color_shift) {
		act_node.classList.add('color_shift');
		act_node.style.top = `calc(${top}% + 2px)`;
		act_node.style.height = `calc(${height}% - 10px)`
	}

    act_node.innerHTML = "<div id='activity-content'><h2>" + act.title[getCookie('lang')] + "</h2><p id='duration'>" + `${formatTime(act.start)}-${formatTime(act.end)}` + "</p><p id='description'>" + act.description[getCookie('lang')] + "</p></div>";
    element.appendChild(act_node)
  }
  return element;
}

function resizeText(rows = -1){
  let elements = document.getElementsByClassName("activity");

  let glob_max_font_size = 32;
  if (matchMedia("only screen and (max-device-width: 640px)").matches) glob_max_font_size = 128;

  for (let element of elements){
    let max_font_size = glob_max_font_size;
    if (element.clientHeight <= (element.parentElement.clientHeight/rows * 3)
      && element.classList.contains("triple")) max_font_size = 24;
    fitText(element, 0.6, {minFontSize: 6, maxFontSize: max_font_size});
  }

  let headers = document.getElementsByTagName('th');
  for (let head of headers){
    if (head.id !== 'time'){
        fitText(head, .64, {minFontSize: 10, maxFontSize: glob_max_font_size});
    }
  }

}

async function fetchProgram() {
  const response = await fetch("js/programme.json");
  return await response.json();
}

async function setupProgram() {
  program = await fetchProgram();
  // while (program === undefined) {
  //   console.log("Loading in program.json");
  // }
  let duration = getTimeDif(program.start_time, program.end_time);
  let rows = duration/convertTime(program.increment);
  let hnm = getHoursMinutes(program.increment);

  let element = document.getElementById("program-container");

  return [duration, rows, hnm, element];
}

function getActiveDay(){
  let now = new Date();
  let OWeeYear = 2025;
  let OWeeMonth = 8;
  let OWeeDays = [18, 19, 20, 21];

  if (now.getFullYear() === OWeeYear
    && now.getMonth() === OWeeMonth
    && OWeeDays.includes(now.getDate())){ // Current local time is during the OWee
    return OWeeDays.indexOf(now.getDate());
  } else { // OWee is not now, return 0 (Monday)
    return 0;
  }
}

function moveProgramme(n) {
  let elems = document.getElementsByClassName("program_day");
  let index = 0;

  for (let i = 0; i < elems.length; i++) {
    let elem = elems[i];
    if (elem.classList.contains("active")) {
      elem.classList.remove("active");
      index = i;
      break;
    }
  }
  if (index + n === elems.length){
    index = -1;
  } else if (index + n === -1){
    index = elems.length;
  }
  elems.item(index + n).classList.add("active");
  resizeText(elems.item(index + n).children.length);
}

async function renderDayMobile(day, plan, duration, rows, timetable) {
  let table = document.createElement('table');
  let headers = document.createElement('tr');
  let time_column = document.createElement('col');
  time_column.span = 1;
  time_column.id = "time";
  headers.innerHTML = `<th colspan="2">${day}</th>`
  table.append(headers, time_column);

  let day_node = document.createElement('td');
  day_node.rowSpan = rows;

  day_node = populateDay(day_node, duration, plan);

  for (let t of timetable) {
    let row = document.createElement("tr");
    let time = document.createElement("th");
    time.innerHTML = t;
    time.id = 'time';
    if (timetable[0] === t) row.append(time, day_node);
    else row.appendChild(time);
    table.appendChild(row);
  }
  table.classList.add("program_day");
  return table;
}

async function renderProgramMobile() {
  let [duration, rows, timetable, element] = await setupProgram();

  let prevTop = document.createElement("a");
  prevTop.classList.add("prev");
  prevTop.classList.add("selector_top");
  prevTop.innerHTML = "&#10094;";
  prevTop.onclick = moveProgramme.bind(prevTop, -1);

  let nextTop = document.createElement("a");
  nextTop.classList.add("next");
  nextTop.classList.add("selector_top");
  nextTop.innerHTML = "&#10095;";
  nextTop.onclick = moveProgramme.bind(nextTop, 1);

  let prevBottom = prevTop.cloneNode(true);
  let nextBottom = nextTop.cloneNode(true);
  prevBottom.classList.replace("selector_top", "selector_bottom");
  nextBottom.classList.replace("selector_top", "selector_bottom");

  element.append(prevTop, nextTop, prevBottom, nextBottom);

  if (getCookie('lang') === 'nl') {
    for (let day of [['Maandag', program.monday],
      ['Dinsdag', program.tuesday],
      ['Woensdag', program.wednesday],
      ['Donderdag', program.thursday]]) {
      let table = await renderDayMobile(day[0], day[1], duration, rows, timetable);
      element.appendChild(table);
    }
  } else {
    for (let day of [['Monday', program.monday],
      ['Tuesday', program.tuesday],
      ['Wednesday', program.wednesday],
      ['Thursday', program.thursday]]) {
      let table = await renderDayMobile(day[0], day[1], duration, rows, timetable);
      element.appendChild(table);
    }
  }
  setTimeout(resizeText, 250, rows);
  element.children.item(getActiveDay() + 4).classList.add("active");
}

async function renderProgramDesktop() {
  let [duration, rows, timetable, element] = await setupProgram();

  let table = document.createElement("table");
  let headers = document.createElement("tr");
  let time_column = document.createElement("col");
  time_column.span = 1;
  time_column.id = "time";

  if (getCookie('lang') == 'nl') {
    headers.innerHTML = "<th></th><th>Maandag</th><th>Dinsdag</th><th>Woensdag</th><th>Donderdag</th>";
  } else {
    headers.innerHTML = "<th></th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th>";
  }

  table.append(headers, time_column);

  let day = document.createElement("td");
  day.rowSpan = rows;

  let monday = populateDay(day.cloneNode(), duration, program.monday);
  let tuesday = populateDay(day.cloneNode(), duration, program.tuesday);
  let wednesday = populateDay(day.cloneNode(), duration, program.wednesday);
  let thursday = populateDay(day.cloneNode(), duration, program.thursday);

  for (let t of timetable){
    let row = document.createElement("tr");
    let time = document.createElement("th");
    time.innerHTML = t;
    time.id = 'time';
    if (timetable[0] === t) row.append(time, monday, tuesday, wednesday, thursday);
    else row.appendChild(time);
    table.appendChild(row);
  }

  element.appendChild(table);
  setTimeout(resizeText, 500, rows);
}

async function renderProgram() {
  if (document.getElementById('program-container') === null) {
    setTimeout(renderProgram, 10);
    return;
  }

  document.getElementById('program-container').innerHTML = '';
  if (matchMedia('only screen and (min-device-width: 961px)').matches) {
    renderProgramDesktop();
  } else {
    renderProgramMobile();
  }
}
