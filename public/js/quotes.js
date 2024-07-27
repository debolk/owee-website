let quotes = [
  {
    person: 'Connor',
    quote: {
      nl: 'Tijdens de OWee kwam ik vaak bij de Bolk om te ontspannen, of juist om iets ongelofelijk mafs te doen. Sindsdien is er weinig veranderd.',
      en: 'I often came to the Bolk to relax during the OWee, or to do something completely daft. Nothing really changed since then.'
    }
  },
  {
    person: 'Luc',
    quote: {
      nl: 'Iedereen is knettergek op zijn eigen manier, iedereen is zichzelf, maar staan open voor anderen.',
      en: 'Everyone here is completely crazy in their own way, everyone is themselves, but open for others.'
    }
  },
  {
    person: 'Deww',
    quote: {
      nl: 'De Bolk is gewoon top kek.',
      en: 'The Bolk is just peak cool.'
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
    person: 'Christiaan',
    quote: {
      nl: 'Omdat iedereen elkaar kent.',
      en: 'Because everyone knows each-other.'
    }
  },
  {
    person: 'Vasco',
    quote: {
      nl: 'Omdat je bij de Bolk alles kan maken.',
      en: 'Because you can make anything at the Bolk.'
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
    person: 'Mees',
    quote: {
      nl: 'De Bolk heeft mijn nieuwe fiets onomkeerbaar bekladderd tijdens de OWee. rip. Twee drankjes later was ik lid.',
      en: 'The Bolk irreversibly plastered my new bike during the OWee. rip. Two drinks later I found myself a member.'
    }
  },
  {
    person: 'Linda',
    quote: {
      nl: 'Voornamelijk omdat ik merkte dat mensen hier ook gewoon een beetje spelletjes spelen. Bij 3D twister ben ik hier terrecht gekomen, heb ik mijn bril verloren en ben ik hier blijven hangen.',
      en: 'Primarely because I noticed the people here also just play boardgames. I arrived at 3D twister, lost my glasses and stayed hanging around.'
    }
  },
  {
    person: 'Looka',
    quote: {
      nl: 'Omdat ik elke avond van de OWee bij de Bolk belandde vanwege de toffe mensen. En natuurlijk de tosti\'s.',
      en: 'Because I found myself at the Bolk ever evening during the OWee because of the great people. Also the sandwiches of course.'
    }
  },
  {
    person: 'Douwe',
    quote: {
      nl: 'Bolk is love, Bolk is life.',
      en: 'Bolk is love, Bolk is life.'
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
      nl: 'Van alle bezochten verenigingen vond ik deze het best op onder andere de gezelschapsmentaliteit, openheid en hoe de communicatie met de andere leden hier gehouden wordt.',
      en: 'Of all the associations I visited, I like this one the best because of the friendly mentality, openness en how the communication with other members goes.'
    }
  },
  {
    person: 'Jasper',
    quote: {
      nl: 'Kom dan!',
      en: 'Come then!'
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
    person: 'Stephen',
    quote: {
      nl: 'Leek mij wel grappig.',
      en: 'I thought it was funny.'
    }
  },
  {
    person: 'Flip',
    quote: {
      nl: 'Hoewel iedereen vet passief-agresieve grappen maakt, is het een plek waar je zonder zorgen jezelf kan zijn.',
      en: 'Even though everyone makes incredibly passive-aggressive jokes, it\'s a place where you can be yourself without worries.'
    }
  },
  {
    person: 'Melody',
    quote: {
      nl: 'Ik werd meegesleept naar de BeginBBQ door studiegenoten en vond het vet gaaf. Ben sindsdien blijven plakken.',
      en: 'I was dragged to the Beginning BBQ by classmates and though it was incredibly cool. Stuck around since then.'
    }
  }
]

let templ = '<img src="./images/quotes/{NAME}.jpg"><p>{QUOTE}</p><br><p class="name">- {NAME}</p>'

let slideIndex = 0;

let slides = [];

let interval;

function shuffleQuotes(){
  quotes = quotes.sort( () => Math.random() - 0.5);
}

function getTemplate(name, quote){
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

  shuffleQuotes();
  shuffleQuotes();
  shuffleQuotes();
  shuffleQuotes();
  getQuotesHTML();
  slides = document.getElementsByClassName('quote');
  let amount = 5;
  if (matchMedia("only screen and (max-device-width: 640px)").matches) amount = 1;
  showSlides(1, amount);
  interval = setInterval(moveSlides, 13200, 5, true);
}

function moveSlides(n, auto = false) {
  if (matchMedia("only screen and (max-device-width: 640px)").matches &&
    n !== -1 && n !== 1) n /= 5;

  while (document.getElementsByClassName('active').length > 0) {
    let elem = document.getElementsByClassName('active')[0];
    elem.style.order = '';
    elem.classList.remove('active');
  }
  showSlides(slideIndex += n, n);
  if (!auto) {
    clearInterval(interval);
    setTimeout(function () {
      setInterval(moveSlides, 2640, Math.abs(n), true);
    }, 128000)
  }
}

function showSlides(direction, amount = 5) {
  amount = Math.abs(amount);
  for (let i = 0; i < amount; i++) {
    if (slideIndex + i >= slides.length) slideIndex = -i;
    else if (slideIndex + i < 0) slideIndex = slides.length - amount + i;

    slides[slideIndex + i].classList.add('active');
    slides[slideIndex + i].style.order = i.toString();
  }
}
