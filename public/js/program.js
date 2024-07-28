const program = {
  start_time: 1600,
  end_time: 430,
  increment: 30, //minutes
  monday: [
    {
      title: {
        nl: '(Mega) spelletjes',
        en: '(Mega) boardgames'
      },
      start: 1600,
      end: 1800,
      alignment: 'left',
      description: {
        nl: '',
        en: 'Do Four in a Row and Jenga give you nostalgic feelings? Come play it in MEGA-Style. Ensure your victory can be admired even from a distance or challenge your friends to a rematch. This can only provide a HUGE amount of fun! <br> And are you rather looking for normal-sized games? Then you are also welcome to play a game from our extensive game collection, together with your OWee-group/Bolkers/random people.'
      }
    },
    {
        title: {
            nl: '3D-twister',
            en: '3D-twister'
        },
        start: 1600,
        end: 1800,
        alignment: 'right',
		color_shift: 'true',
        description: {
            nl: 'Het spel twister, wie kent het niet. Maar wat nu als de stippen niet alleen onder je op de mat liggen maar ook boven en naast je? Doe mee aan dit vrolijke spel en leer de botter van binnen kennen!',
            en: 'The game Twister, a classic. But how about when the dots are not only on the floor, but also on the ceiling and the walls? Participate in this fun game and get to know the Botter from the inside!'
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
        en: 'Whacking with a Leek'
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
            nl: 'Verhalen bij de olielamp',
            en: 'Stories beneath the oil lamp'
        },
        start: 2200,
        end: 2400,
        alignment: 'right',
		color_shift: 'true',
        description: {
            nl: 'Trui is een heerlijke plek om tot rust te komen. Droogvallend op het wad tussen de zeehonden kun je genieten van de mooiste zonsondergangen. Deze intieme sfeer en de gezelligheid ervaar je ook op onze Trui in Delft. Sluit aan boord je avond gezellig af met sterrenkijken, een leuk verhaal en een scheepsborreltje',
            en: 'Trui is an amazing place to calm down. Grounded in the Waddensea, between the seals, you can watch the most beautiful sunsets. This cozy environment can also be experienced on Trui in Delft! End your evening on board with a fun story and a sailors drink'
        }
    },
    {
      title: {
        nl: 'Throwback Party',
        en: 'Throwback Party'
      },
      start: 2200,
      end: 2300,
      alignment: 'center',
      description: {
        nl: 'Laat je terugnemen naar vroeger en ga los op de beste nummers uit je jeugd',
        en: 'Be transported to your past and party to the best songs from your youth'
      }
    },
    {
      title: {
        nl: 'Eurovisie Extravaganza',
        en: 'Eurovision Extravaganza'
      },
      start: 2300,
      end: 2400,
      alignment: 'center',
      description: {
        nl: 'Het wordt een glitterfestijn met de toppers van de afgelopen 68 Songfestivals',
        en: 'It will be a glitter party with the top songs from the past 68 years of Eurovision'
      }
    },
    {
      title: {
        nl: 'De Skihut',
        en: 'The Skihut'
      },
      start: 2400,
      end: 100,
      alignment: 'center',
      description: {
        nl: 'Après-ski in augustus? Jawohl! Geniet van de beste muziek die onze oosterburen te bieden hebben',
        en: 'Après ski in August? Jawohl! Enjoy the best music our eastern neighbours have to offer'
      }
    },
    {
      title: {
        nl: 'Frituur',
        en: 'Fried Hour'
      },
      start: 200,
      end: 300,
      alignment: 'center',
      description: {
        nl: 'Honger? Daar hebben we iets voor! Geniet van Brabants Beste Bangers met patat en andere frituursnacks',
        en: 'Hungry? We have the solution! Enjoy a midnight snack of fries and other fried snacks'
      }
    },
    {
      title: {
        nl: 'Brabants Beste Bangers',
        en: 'Brabant\'s Best Bangers'
      },
      start: 300,
      end: 400,
      alignment: 'center',
      description: {
        nl: 'Dans op de beste feestnummers van onder de rivieren, en stiekem misschien ook een paar van boven de rivieren',
        en: 'Dance to the best songs the Netherlands have to offer'
      }
    },
    {
      title: {
        nl: '',
        en: ''
      },
      start: 2200,
      end: 2300,
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
  tuesday: [
    {
      title: {
        nl: 'Pimp je fiets / Minecraft strijkkralen',
        en: 'Pimp your bike / Minecraft ironing beads'
      },
      start: 1600,
      end: 1800,
      alignment: 'left',
      description: {
        nl: 'Is jouw nieuwe (of oude) fiets ook nog zo saai en lastig herkenbaar? Geef hem wat flair met verf, stickers, googly eyes (!) en een gezonde hoeveelheid glitters. Niemand die jouw fiets nog durft te stelen, en jij hoeft je geen zorgen meer te maken dat je hem niet kan vinden in de overvolle fietsenstalling',
        en: 'Is your new (or old) bike boring or difficult to find? Here you can pimp your bike using an assortment of awesome decorations like paint, stickers, googly eyes (!) and a healthy amount of glitter. No one will ever dare to steal your bike again and you don’t have to worry about losing it anymore'
      }
    },
    {
        title: {
            nl: 'Escaperoom op Trui',
            en: 'Escaperoom op Trui'
        },
        start: 1600,
        end: 1800,
        alignment: 'right',
		color_shift: 'true',
        description: {
            nl: 'Wordt met je Oweegroepje opgesloten in ons vooronder en vind je weg weer naar buiten. Los puzzels op en werk goed samen. Zetten jullie de snelste tijd? <br><b>Let op! Voor deze activiteit moet je je vooraf aanmelden</b>',
            en: 'Get locked up with your OWee group and try to find your way back out. Solve puzzels and work together. Will your group be the fastest? <br><b>Watch out, you have to sign up beforehand for this activity</b>'
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
        nl: 'Partygames',
        en: 'Partygames'
      },
      start: 2000,
      end: 2100,
      alignment: 'left',
      description: {
        nl: '',
        en: ''
      }
    },
    {
      title: {
        nl: 'Kijken hoe het Klinkt',
        en: 'See how it Sounds'
      },
      start: 2100,
      end: 2200,
      alignment: 'left',
      description: {
        nl: 'Weet jij hoe een wasmachine klinkt als het van 4 meter valt op de grond? Kom er hier achter!',
        en: 'Do you know what sound a washing machine makes when it falls 4 meters to the ground? Come and find out here!'
      }
    },
	{
		title: {
			nl: 'Speurtocht op de Boot',
			en: 'Quest on the Boat'
		},
		start: 2000,
		end: 2200,
		alignment: 'right',
		color_shift: 'true',
		description: {
			nl: 'Onze oude boot heeft veel rare onderdelen. Wist je bijvoorbeeld dat je beter op dan onder de deken kunt liggen en wil je weten wie Dirk is? Kom dan langs voor onze speurtocht en leer de Trui en haar bemanning kennen!',
			en: 'Our old boat has many weird components. Do you want to know who "Dirk" is? Come join us for the quest on the boat and get to know Trui and her crew!'
		}
	},
    {
      title: {
        nl: 'Kroegsport',
        en: 'Bargames'
      },
      start: 2200,
      end: 2400,
      alignment: 'left',
      description: {
        nl: '',
        en: 'Play darts, shuffleboard, and many other games from the pub. And we also present “whack-a-nail”: a block of wood, some nails, a large hammer, and a lot of violence. Guaranteed fun!'
      }
    },
    {
      title: {
        nl: 'Speciaalbier proeverij',
        en: 'Tasting Craft Beer'
      },
      start: 2200,
      end: 2400,
      alignment: 'right',
      description: {
        nl: 'Bier is er in allerlei soorten en maten. Hou je van een zoet biertje of juist eentje met een bittertje? Wil jij dat je bier zonder toevoegingen is gemaakt, of vind je het niet erg als er peper in zit? Hou je van koffie en bier? Dan kan dat ook! Het Bolksch BierbrouwersGilde kan je er van alles over vertellen tijdens deze speciaalbierproeverij!',
        en: 'Craft beers come in many shapes and sizes. Do you like a sweet or a bitter pint? Or don’t you mind if it is brewed with pepper or coffee beans? The Bolksch BierbrouwersGilde (Craft Beer Brewing Guild of the Bolk) can tell you a ton of information with every sip you take!'
      }
    },
    {
      title: {
        nl: 'Karaoke ft. Oliebollen',
        en: 'Karoake ft. Oily Balls'
      },
      start: 2400,
      end: 400,
      alignment: 'center',
      description: {
        nl: '',
        en: 'Do you want to belt out the best songs all evening long? Then come to the karaoke and sing your lungs out! Featuring “oliebollen” to celebrate the new academic year'
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
        nl: 'Botter Rossen',
        en: 'Botter Ross'
      },
      start: 1700,
      end: 1800,
      alignment: 'right',
      color_shift: 'true',
      description: {
        nl: 'Botteraars kunnen goed beunen maar ook het wat fijnzinnigere werk is aan hun goed besteed. Stap aan boord voor deze creatieve activiteit en laat je door Vink meenemen naar de Waddenzee. <br><b>Let op! Deze activiteit heeft een vaste starttijd</b>',
        en: 'The sailors of Trui are great at building, but they can also flourish in the more fine arts. Get on board for this creative activity And let Vink take you on a trip to the beautiful Waddensea. <br><b>Watch out! This activity has a set starting time</b>'
      }
    },
    {
      title: {
        nl: 'DnD Oneshot',
        en: 'DnD Oneshot'
      },
      start: 1700,
      end: 1900,
      alignment: 'left',
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
      start: 1900,
      end: 2100,
      alignment: 'center',
      description: {
        nl: 'Eten bij de Bolk is echt mega lekker en gazellig, kom lekker eten!',
        en: 'Dinner with the Bolk is really good, come and have a good meal!'
      }
    },
    {
      title: {
        nl: 'Will it ...?',
        en: 'Will it ...?'
      },
      start: 2100,
      end: 2300,
      alignment: 'left',
      description: {
        nl: '',
          en: ''
      }
    },
	{
		title: {
			nl: 'Vooronder rave',
			en: 'Forecastle Rave'
		},
		start: 2100,
		end: 2300,
		alignment: 'right',
		color_shift: 'true',
		description: {
			nl: 'Deze avond toveren we Trui om tot een unieke ravecave. Met veel geluid, mooie lichtjes en onze eigen DJ-Blikbierman!',
			en: 'This night we transform Trui into a unique rave cave. With a lot of noise, beautiful lights and our own DJ Blikbierman!'
		}
	},
    {
      title: {
        nl: 'Dozenfort --> Bierviltjesoorlog',
        en: 'Cartboardfortress --> War \'o Coaster'
      },
      start: 2300,
      end: 2400,
      alignment: 'center',
      description: {
        nl: 'Eerst ga je een dozenfort bouwen daarna ga je tijdens een bierviltjesoorlog ga je met een net niet oneindige voorraad bierviltjes gooien vanuit de relatieve veiligheid van je fort. Gooi ze op je vrienden en/of je mentor. Alles is toegestaan in een bierviltjesoorlog. “Bierviltjes! Bierviltjes overal! Dit is chaos!” - de enige overlevende vorig jaar',
        en: 'First you\'re building a cartboard fortress, then you will be able to throw a nearly unlimited supply of coasters from the relative safety of your fortress. Throw them at anyone.  “Beer mats, Beer mats everywhere!” - last years only survivor.'
      }
    },
    {
      title: {
        nl: 'Kapla',
        en: 'Kapla'
      },
      start: 2400,
      end: 200,
      alignment: 'center',
      description: {
        nl: '',
        en: 'Do you want to let out your inner kid? Do you want to practice your civil engineering skills? Then come and build Kapla with us! Build a bridge, house, Eiffel Tower, or something else. The only limit is your imagination'
      }
    },
    {
      title: {
        nl: 'BlikBierKwartier',
        en: 'Canned Beer Drive'
      },
      start: 200,
      end: 230,
      alignment: 'center',
      description: {
        nl: 'Is dit een BlikBierBorrel? Wist je dat er een auto in de soos stond? Kom zuipen ofzo.',
        en: 'Is this a CannedBeerDrink? Did you know there was a car in the soos? Come and drink or something.'
      }
    },
    {
      title: {
        nl: 'DIY Kapsalon',
        en: 'DIY Kapsalon'
      },
      start: 230,
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
  thursday: [
    {
      title: {
        nl: 'Spa',
        en: 'Spa'
      },
      start: 1600,
      end: 1800,
      alignment: 'left',
      description: {
        nl: 'Ook zo moe van gisteren? Kom chillen met zwembadjes, gezichtscreme, gekoelde drankjes en je rustige zomerse muziek',
        en: 'Tired from yesterday? Come chill out at our spa with kiddie pools, face masks, cooled drinks and summery tunes'
      }
    },
	{
		title: {
			nl: 'VVThee',
			en: 'VVTea',
		},
		start: 1600,
		end: 1800,
		alignment: 'right',
		color_shift: 'true',
		description: {
			nl: 'Sluit je OWee relaxt af bij ons aan boord. De matjes liggen klaar, de thee is gezet en de koekjes zijn gebakken',
			en: 'End your OWee on a relaxing note on board. The tea and cookies are ready!'
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
        nl: '',
        en: ''
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

  let element = document.getElementById("program");

  return [duration, rows, hnm, element];
}

function renderDayMobile(day, plan, duration, rows, timetable) {
  let table = document.createElement('table');
  let headers = document.createElement('tr');
  let time_column = document.createElement('col');
  time_column.span = 1;
  time_column.id = "time";
  headers.innerHTML = `<th></th><th>${day}</th>`
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
  if (document.getElementById('program') === null) {
    setTimeout(renderProgram, 10);
    return;
  }

  document.getElementById('program').innerHTML = '';
  if (matchMedia('only screen and (max-device-width: 640px)').matches) {
    renderProgramMobile();
  } else {
    renderProgramDesktop();
  }
}
