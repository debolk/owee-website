let quotes = [
  {
    person: 'Floris',
    quote: {
      nl: 'Ik dacht dat ik geen lid wilde worden van een vereeniging maar toen kwam ik 1 avond op De Bolk met een vriend mee, en was lid aan het einde van de avond. Sindsdien geniet ik van een bodemloze put aan gezelligheid.',
      en: 'I thought I did not want to be part of an student assosiation, then I came to De Bolk for a single evening with a friend, and became a part of De Bolk before the end of the evening. Ever since then I am enyoing my evenings surrounded by nice people and good company.'
    }
  },
  {
    person: 'Lucas',
    quote: {
      nl: 'Ik dacht dat ik raar was, maar toen kwam ik er achter dat ik gewoon een Bolker was.',
      en: 'I always thought I was odd, but as it turns out I was just a Bolker.'
    }
  },
  {
    person: 'Esther',
    quote: {
      nl: 'De Bolk is een plek waar ik altijd lekker mezelf kan zijn en het is één grote vriendengroep waarmee ik altijd wat leuks kan gaan doen :)',
      en: 'De Bolk is a place where I always feel free to be myself and it\'s a big friend group I can always hang out with :)'
    }
  },
  {
    person: 'Ivo',
    quote: {
      nl: 'Omdat als je hier lid bent je nog steeds goed kan studeren.',
      en: 'Because you\'re still able to study while being a member.'
    }
  },
  {
    person: 'Pia',
    quote: {
      nl: 'Omdat je bij deze vereniging zowel een BlikBierKwartier als een Spa kan hebben.',
      en: 'Because you can have a Spa as well as a Canned Beer Drive at this association.'
    }
  },
  {
    person: 'Kilian',
    quote: {
      nl: 'Gezellige mensen, leuke activiteiten.',
      en: 'Friendly people, fun activities.'
    }
  },
  {
    person: 'Simon',
    quote: {
      nl: 'Ik heb me ingeschreven en dat bleek een goed idee te zijn.',
      en: 'I signed up and that turned out to be a good idea.'
    }
  },
  {
    person: 'Isa',
    quote: {
      nl: 'Ik heb 3D twister gespeeld, daarna bier gedronken en heb me de volgende dag ingeschreven.',
      en: 'I played 3D twister, drank some beers and signed up the next day.'
    }
  },
  {
    person: 'Marisa',
    quote: {
      nl: 'Een combinatie van hartelijke gezelligheid en spelletjes.',
      en: 'A combination of friendly ambience and boardgames.'
    }
  },
  {
    person: 'Luka',
    quote: {
      nl: 'Omdat je moeder.',
      en: 'Because your mother.'
    }
  },
  {
    person: 'Bas',
    quote: {
      nl: 'De vier-uur cup a soup was wel een uitdaging.',
      en: 'The four \'O clock cup-a-soup turned out to be a good challenge.'
    }
  },
  {
    person: 'Matthijs',
    quote: {
      nl: 'Van alle bezochten verenigingen vond ik deze het best op onder andere de gezelschaps-mentaliteit, openheid en hoe de communicatie met de andere leden hier gehouden wordt.',
      en: 'Of all the associations I visited, I like this one the best because of the friendly mentality, openness en how the communication with other members goes.'
    }
  },
  {
    person: 'Jasper',
    quote: {
      nl: 'Ik zocht gezelligheid, een xxl vriendengroep',
      en: 'I was looking for good vibes, an xxl friendgroup'
    }
  },
  {
    person: 'Brendan',
    quote: {
      nl: 'Leuke mensen.',
      en: 'Fun folk.'
    }
  },
  {
    person: 'Melody',
    quote: {
      nl: 'Ik werd meegesleept naar de BeginBBQ door studiegenoten en vond het vet gaaf. Ben sindsdien blijven plakken.',
      en: 'I was dragged to the Beginning BBQ by classmates and though it was incredibly cool. Stuck around since then.'
    }
  },
  {
    person: 'Nienke',
    quote: {
      nl: 'Tijdens de OWee werd ik bij de Bolk het meest betrokken bij de gesprekken tussen leden.',
      en: 'During the OWee I was most involved with conversations between members at the Bolk.'
    }
  },
  {
    person: 'Wouter',
    quote: {
      nl: 'Gezellige mensen, veel spelletjes en goed eten.',
      en: 'Fun people, lots of boardgames en good food.'
    }
  },
  {
    person: 'Sean',
    quote: {
      nl: 'Tosti, pils en dom doen is een goede combo.',
      en: 'Grilled sandwiches, pilseners and being stupid is a good combo.'
    }
  },
  {
    person: 'Laurens',
    quote: {
      nl: 'De Bolk adviseerde mij de Bolk.',
      en: 'The Bolk adviced the Bolk.'
    }
  },
  {
    person: 'Zed',
    quote: {
      nl: 'Ik voelde me tijdens de OWee gelijk thuis bij de Bolk.',
      en: 'I immediately felt right at home at the Bolk during the OWee.'
    }
  },
  {
    person: 'Alice',
    quote: {
      nl: 'Tijdens de OWee was de Bolk absoluut het meest gezellig. Ik liep binnen en heb gelijk de hele avond nieuwe mensen ontmoet!',
      en: 'During the OWee the Bolk was absolutely the best. I entered and met new people the whole night!'
    }
  },
  {
    person: 'Rob',
    quote: {
      nl: 'Op dinsdag avonden worden altijd de beste keuzes gemaakt.',
      en: 'The best choices are always made on Tuesday nights.'
    }
  },
  {
    person: 'Daan',
    quote: {
      nl: 'Ik had het gevoel dat dit een plek was waar je jezelf kan zijn',
      en: 'I got the feeling that this was a place where you can be yourself'
    }
  },
  {
    person: 'Tram',
    quote: {
      nl: 'Gezelligheid en lekker eten zonder dwang',
      en: 'Good times and tasty food without pressure'
    }
  },
  {
    person: 'Anna',
    quote: {
      nl: 'Want mensen zijn gezellig ;)',
      en: 'Because people are nice ;)'
    }
  }
]

let templ = '<img src="images/quotes/{NAME}.jpg"><p>{QUOTE}</p><p class="name">- {NAME}</p>'

let slideIndex = 0;

let slides = [];

function shuffleQuotes() {
  quotes = quotes.sort(() => Math.random() - 0.5);
}

function getTemplate(name, quote) {
  return templ.replaceAll('{NAME}', name).replaceAll('{QUOTE}', quote);
}

function getQuotesHTML() {
  let container = document.getElementById('quotes-container');
  for (let quote of quotes) {
    let div = document.createElement('div');
    div.classList.add('quote', 'animate');
    div.innerHTML = getTemplate(quote.person, quote.quote[getCookie('lang')]);
    container.append(div);
  }
}

async function renderQuotes() {
  if (document.getElementById('quotes-container') === null) {
    setTimeout(renderQuotes, 10);
    return;
  }
  document.getElementById('quotes-container').innerHTML = '<a class="prev" onclick="moveSlides(-1)">&#10094;</a>\n' +
    '    <a class="next" onclick="moveSlides(1)">&#10095;</a>';

  shuffleQuotes();
  shuffleQuotes();
  shuffleQuotes();
  shuffleQuotes();
  getQuotesHTML();
  addListeners();

  slides = document.getElementsByClassName('quote');
  let amount = 1;
  if (matchMedia("(min-device-width:1281px)").matches) amount = 5;
  else if (matchMedia("(min-device-width:1025px)").matches) amount = 4;
  else if (matchMedia("(min-device-width:961px)").matches) amount = 3;
  else if (matchMedia("(min-device-width:641px)").matches) amount = 2;
  showSlides(1, amount);
  let interval = setInterval(moveSlides, 16400, 1, true);
  window.sessionStorage.setItem("quotes-interval", interval.toString());
}

function moveSlides(n, auto = false) {
  if (matchMedia("(min-device-width:1281px)").matches) {
    n = n * 5;
  } else if (matchMedia("(min-device-width:1025px)").matches) {
    n = n * 4;
  } else if (matchMedia("(min-device-width:961px)").matches) {
    n = n * 3;
  } else if (matchMedia("(min-device-width:641px)").matches) {
    n = n * 2;
  }

  while (document.getElementsByClassName('quote active').length > 0) {
    let elem = document.getElementsByClassName('quote active')[0];
    elem.style.order = '';
    elem.classList.remove('active');
  }

  showSlides(slideIndex += n, n);

  if (!auto) {
    clearInterval(Number(window.sessionStorage.getItem("quotes-interval")));

    let timeout = window.sessionStorage.getItem("quotes-timeout");
    if (timeout != null) {
      timeout = Number(timeout);
      clearTimeout(timeout);
      window.sessionStorage.removeItem("quotes-timeout");
    }

    timeout = setTimeout(function () {
      let interval = setInterval(moveSlides, 16400, 1, true);
      window.sessionStorage.setItem("quotes-interval", interval.toString());
    }, 1200000);
    window.sessionStorage.setItem("quotes-timeout", timeout.toString());
  }

}

function showSlides(direction, amount) {
  amount = Math.abs(amount);
  for (let i = 0; i < amount; i++) {
    if (slideIndex + i >= slides.length) slideIndex = -i;
    else if (slideIndex + i < 0) slideIndex = slides.length - amount + i;

    slides[slideIndex + i].classList.add('active');
    slides[slideIndex + i].style.order = i.toString();
  }
}


function addListeners() {
  const container = document.getElementById('quotes-container');

  let startX = 0;

  container.addEventListener("pointerdown", e => {
    startX = e.clientX;
  });

  container.addEventListener("pointerup", e => {
    const dx = e.clientX - startX;

    if (Math.abs(dx) < 50) return;

    if (dx < 0)
      moveSlides(1);
    else
      moveSlides(-1);
  });
}

