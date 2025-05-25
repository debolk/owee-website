const program = {
  start_time: 1600,
  end_time: 430,
  increment: 30, //minutes
  monday: [
    {
      title: {
        nl: 'Spelletjesmiddag',
        en: 'Afternoon boardgames'
      },
      start: 1700,
      end: 1800,
      alignment: 'center',
      description: {
        nl: 'Ben je op zoek naar lekker rustig spelletjes spelen? Dan ben je van harte welkom om met je groepje/Bolkers/random mensen een spel te spelen uit onze uitgebreide spelletjeskast.',
        en: 'Are you looking for having a nice, quiet time of boardgames? Then you are welcome to play a game from our extensive game collection, together with your OWee-group/Bolkers/random people.'
      }
    },
    {
      title: {
        nl: 'Eten @ Bolk',
        en: 'Dinner @ Bolk'
      },
      start: 1800,
      end: 2000,
      alignment: 'center',
      description: {
        nl: 'Eten bij de Bolk is echt mega lekker en gazellig, kom lekker eten!',
        en: 'Dinner with the Bolk is really good, come and have a good meal!'
      }
    },
    {
      title: {
        nl: 'Weerwolven',
        en: 'Werewolves'
      },
      start: 2000,
      end: 2100,
      alignment: 'center',
      description: {
        nl: '... van Wakkerdam: Speel met bolkers One Night Weerwolven, een bliksemsnelle en meer interactieve versie van het orginele Weerwolven',
        en: '... of Wakkerdam: Play One Night Werewolves with us, a lightning fast and more interactive versie of the original Werewolves'}
    },
    {
      title: {
        nl: 'Preimeppen',
        en: 'Whack a Leek'
      },
      start: 2100,
      end: 2200,
      alignment: 'center',
      description: {
        nl: 'Wat zou jij doen als je tientallen kilo’s prei rond hebt slingeren? Kapot slaan tegen je medestudenten natuurlijk! Kom naar de Bolk, claim je prei en verlies een aantal vrienden in dit geweldige idee wat nooit fout kan gaan',
        en: 'What would you do in case you have access to tens of kilos of leek? Hit your fellow students of course! Visit the Bolk, claim your leek and lose a couple of friends during this awesome idea that can’t possibly go wrong'
      }
    },
    {
      title: {
          nl: 'Dungeons and Dragons',
          en: 'Dungeons and Dragons'
      },
      start: 2200,
      end: 100,
      alignment: 'left',
      description: {
        nl: 'We hebben veel enthousiaste DM’s op de Bolk, die graag een leuke oneshot voor jullie neerzetten. Laat je met je groepje meenemen naar verre werelden en voel je vrij om op je eigen manier te roleplayen ^^',
        en: 'We\'ve got lots of enthousiastic DM\'s at the Bolk that would love to DM an oneshot for you. Come visit faraway worlds with your group and feel free to roleplay in your own way ^^'
      }
    },
    {
      title: {
        nl: 'Retrogames',
        en: 'Retrogames'
      },
      start: 2200,
      end: 2400,
      alignment: 'right',
      description: {
        nl: '',
        en: ''
      }
    },
    {
      title: {
        nl: 'Kapla',
        en: 'Kapla'
      },
      start: 2400,
      end: 200,
      alignment: 'right',
      description: {
        nl: 'Wil jij je weer een kind voelen? Of wil je gewoon leuk bouwen? Kom dan bij ons met Kapla bouwen! Bouw zelf een brug, huis, Eiffeltoren, of iets anders. Het enige limiet is je fantasie!',
        en: 'Do you want to let out your inner kid? Do you want to practice your civil engineering skills? Then come and build Kapla with us! Build a bridge, house, Eiffel Tower, or something else. The only limit is your imagination!'
      }
    },
    {
      title: {
        nl: 'DIY Kapsalon',
        en: 'DIY Kapsalon'
      },
      start: 200,
      end: 400,
      alignment: 'center',
      description: {
        nl: 'Kom een kapsalon bouwen uit onze selectie van ingrediënten. Maak je kapsalon een perfecte creatie, of een vreemde combinatie van smaken die niet samen zouden moeten gaan',
        en: 'Come and build your own kapsalon from our selection of ingredients. Make it a perfect creation, or a weird combinatie of tastes that shouldn\'t go together'
      }
    },
    {
      title: {
        nl: '4 uur cup-a-soup',
        en: '4 \'O clock cup-a-soup'
      },
      start: 400,
      end: 430,
      alignment: 'center',
      description: {
        nl: 'Beetje moe? Wil je je weer levend voelen, als herboren? Neem dan een 4 uur Cup-a-Soup, dat zouden meer mensen moeten doen!',
        en: 'Tired after a long night? Wanna feel alive, like you were born again? Then enjoy a nice cup-a-soup!'
      }
    }
  ],
  tuesday: [
    {
      title: {
        nl: 'Pokkehandtas',
        en: 'Pokkehandtas'
      },
      start: 1600,
      end: 1800,
      alignment: 'center',
      description: {
        nl: '',
        en: ''
      }
    },
    {
      title: {
        nl: 'Eten @ Bolk',
        en: 'Dinner @ Bolk'
      },
      start: 1800,
      end: 2000,
      alignment: 'center',
      description: {
        nl: 'Eten bij de Bolk is echt mega lekker en gazellig, kom lekker eten!',
        en: 'Dinner with the Bolk is really good, come and have a good meal!'
      }
    },
    {
      title: {
        nl: 'Dozenfort-Bierviltjesoorlog',
        en: 'Boxfort-Beer coaster war'
      },
      start: 2000,
      end: 2100,
      alignment: 'center',
      description: {
        nl: 'Eerst ga je een dozenfort bouwen daarna ga je tijdens een bierviltjesoorlog ga je met een net niet oneindige voorraad bierviltjes gooien vanuit de relatieve veiligheid van je fort. Gooi ze op je vrienden en/of je mentor. Alles is toegestaan in een bierviltjesoorlog. “Bierviltjes! Bierviltjes overal! Dit is chaos!” - de enige overlevende vorig jaar',
        en: 'First you\'re building a cartboard fortress, then you will be able to throw a nearly unlimited supply of coasters from the relative safety of your fortress. Throw them at anyone.  “Beer mats, Beer mats everywhere!” - last year\'s only survivor.'
      }
    },
    {
      title: {
        nl: 'Spelletjesavond',
        en: 'Gamenight'
      },
      start: 2100,
      end: 2400,
      alignment: 'center',
      description: {
        nl: 'Ben je op zoek naar lekker rustig spelletjes spelen? Dan ben je van harte welkom om met je groepje/Bolkers/random mensen een spel te spelen uit onze uitgebreide spelletjeskast.',
        en: 'Are you looking for having a nice, quiet time of boardgames? Then you are welcome to play a game from our extensive game collection, together with your OWee-group/Bolkers/random people.'
      }
    },
    {
      title: {
        nl: 'Karaoke-Cocktailnight',
        en: 'Karaoke-Cocktailnight'
      },
      start: 2400,
      end: 400,
      alignment: 'center',
      description: {
        nl: 'Wil jij een hele avond de leukste nummers mee blèren? Kom dan naar de karaoke en schreeuw de longen uit je lijf met een lekker cock- of mocktail!',
        en: 'Do you want to belt out the best songs all evening long? Then come to the karaoke and sing your lungs out with a tasty cock- or mocktail!'
      }
    },
    {
      title: {
        nl: '4 uur cup-a-soup',
        en: '4 \'O clock cup-a-soup'
      },
      start: 400,
      end: 430,
      alignment: 'center',
      description: {
        nl: 'Beetje moe? Wil je je weer levend voelen, als herboren? Neem dan een 4 uur Cup-a-Soup, dat zouden meer mensen moeten doen!',
        en: 'Tired after a long night? Wanna feel alive, like you were born again? Then enjoy a nice cup-a-soup!'
      }
    }
  ],
  wednesday: [
    {
      title: {
        nl: 'Dungeons and Dragons',
        en: 'Dungeons and Dragons'
      },
      start: 1600,
      end: 2000,
      alignment: 'center',
      description: {
        nl: 'We hebben veel enthousiaste DM’s op de Bolk, die graag een leuke oneshot voor jullie neerzetten. Laat je met je groepje meenemen naar verre werelden en voel je vrij om op je eigen manier te roleplayen ^^',
        en: 'We\'ve got lots of enthousiastic DM\'s at the Bolk that would love to DM an oneshot for you. Come visit faraway worlds with your group and feel free to roleplay in your own way ^^'
      }
    },
    {
      title: {
        nl: 'Eten @ Bolk',
        en: 'Dinner @ Bolk'
      },
      start: 2000,
      end: 2200,
      alignment: 'center',
      description: {
        nl: 'Eten bij de Bolk is echt mega lekker en gazellig, kom lekker eten!',
        en: 'Dinner with the Bolk is really good, come and have a good meal!'
      }
    },
    {
      title: {
        nl: 'Kijken hoe het klinkt',
        en: 'See how it sounds'
      },
      start: 2200,
      end: 2300,
      alignment: 'center',
      description: {
        nl: 'Weet jij hoe een wasmachine klinkt als het van 4 meter valt op de grond? Kom er hier achter!',
        en: 'Do you know what sound a washing machine makes when it falls 4 meters to the ground? Come and find out here!'
      }
    },
    {
      title: {
        nl: 'Speciaalbier proeverij',
        en: 'Craft beer tasting'
      },
      start: 2300,
      end: 100,
      alignment: 'left',
      description: {
        nl: 'Bier is er in allerlei soorten en maten. Hou je van een zoet biertje of juist eentje met een bittertje? Wil jij dat je bier zonder toevoegingen is gemaakt, of vind je het niet erg als er peper in zit? Hou je van koffie en bier? Dan kan dat ook! Het Bolksch BierbrouwersGilde kan je er van alles over vertellen tijdens deze speciaalbierproeverij!',
        en: 'Craft beers come in many shapes and sizes. Do you like a sweet or a bitter pint? Or don’t you mind if it is brewed with pepper or coffee beans? The Bolksch BierbrouwersGilde (Craft Beer Brewing Guild of the Bolk) can tell you a ton of information with every sip you take!'
      }
    },
    {
      title: {
        nl: 'Kroegsport',
        en: 'Bar sports'
      },
      start: 2300,
      end: 100,
      alignment: 'right',
      description: {
        nl: '',
        en: ''
      }
    },
    {
      title: {
        nl: 'BlikBierKwartier',
        en: 'Canned Beer Drive'
      },
      start: 100,
      end: 230,
      alignment: 'center',
      description: {
        nl: 'Is dit een BlikBierBorrel? Wist je dat er een auto in de soos stond? Kom zuipen ofzo.',
        en: 'Is this a CannedBeerDrink? Did you know there was a car in the soos? Come and drink or something.'
      }
    },
    {
      title: {
        nl: 'Ochtendgymnastiek',
        en: 'Morning calisthenics'
      },
      start: 230,
      end: 400,
      alignment: 'center',
      description: {
        nl: '',
        en: ''
      }
    },
    {
      title: {
        nl: '4 uur cup-a-soup',
        en: '4 \'O clock cup-a-soup'
      },
      start: 400,
      end: 430,
      alignment: 'center',
      description: {
        nl: 'Beetje moe? Wil je je weer levend voelen, als herboren? Neem dan een 4 uur Cup-a-Soup, dat zouden meer mensen moeten doen!',
        en: 'Tired after a long night? Wanna feel alive, like you were born again? Then enjoy a nice cup-a-soup!'
      }
    }
  ],
  thursday: [
    {
      title: {
        nl: 'Chillûûûh',
        en: 'Chillllll'
      },
      start: 1600,
      end: 1800,
      alignment: 'center',
      description: {
        nl: 'Ook zo moe van deze week? Kom lekker chillen met onze leden, zwembadjes, koude drankjes en spelletjes.',
        en: 'Are you also so tired from this week? Come and chill out at with us, tiny swimming pools, cool drinks and some boardgames.'
      }
    },
    {
      title: {
        nl: 'Eten @ Bolk',
        en: 'Dinner @ Bolk'
      },
      start: 1800,
      end: 2000,
      alignment: 'center',
      description: {
        nl: 'Eten bij de Bolk is echt mega lekker en gazellig, kom lekker eten! <br><b>Schrijf je in op <a href="https://noms.debolk.nl">noms.debolk.nl</a></b>',
        en: 'Dinner with the Bolk is really good, come and have a good meal! <br><b>Sign up at <a href="https://noms.debolk.nl">noms.debolk.nl</a></b>'
      }
    },
    {
      title: {
        nl: 'Band op de Boot',
        en: 'Band on the Boat'
      },
      start: 2000,
      end: 2400,
      alignment: 'center',
      description: {
        nl: 'Er zullen live bands optreden op onze boot! Kom gezellig van hun performance genieten!',
        en: 'Bands will be performing live on our boat! Come and enjoy their performance!'
      }
    }
  ]
}

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
      && element.classList.contains("center")) max_font_size /= 2;
    fitText(element, .9, {minFontSize: 10, maxFontSize: max_font_size});
  }

  let headers = document.getElementsByTagName('th');
  for (let head of headers){
    if (head.id !== 'time'){
        fitText(head, .64, {minFontSize: 10, maxFontSize: glob_max_font_size});
    }
  }

}

function setupProgram() {
  let duration = getTimeDif(program.start_time, program.end_time);
  let rows = duration/convertTime(program.increment);
  let hnm = getHoursMinutes(program.increment);

  let element = document.getElementById("program-container");

  return [duration, rows, hnm, element];
}

function renderDayMobile(day, plan, duration, rows, timetable) {
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
  return table;
}

function renderProgramMobile() {
  let [duration, rows, timetable, element] = setupProgram();

  if(getCookie('lang') === 'nl') {
    for (let day of [['Maandag', program.monday],
      ['Dinsdag', program.tuesday],
      ['Woensdag', program.wednesday],
      ['Donderdag', program.thursday]]){
      let table = renderDayMobile(day[0], day[1], duration, rows, timetable);
      element.appendChild(table);
    }
  } else {
    for (let day of [['Monday', program.monday],
      ['Tuesday', program.tuesday],
      ['Wednesday', program.wednesday],
      ['Thursday', program.thursday]]){
      let table = renderDayMobile(day[0], day[1], duration, rows, timetable);
      element.appendChild(table);
    }
  }
  setTimeout(resizeText, 500, rows);
}

function renderProgramDesktop() {
  let [duration, rows, timetable, element] = setupProgram();

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
  if (matchMedia('only screen and (max-device-width: 640px)').matches) {
    renderProgramMobile();
  } else {
    renderProgramDesktop();
  }
}
