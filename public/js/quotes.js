let quotes = [
  {
    person: 'Connor',
    quote: {
      dutch: 'Tijdens de OWee kwam ik vaak bij de Bolk om te ontspannen, of juist om iets ongelofelijk mafs te doen. Sindsdien is er weinig veranderd.',
      english: 'I often came to the Bolk to relax during the OWee, or to do something completely daft. Nothing really changed since then.'
    }
  },
  {
    person: 'Luc',
    quote: {
      dutch: 'Iedereen is knettergek op zijn eigen manier, iedereen is zichzelf, maar staan open voor anderen.',
      english: 'Everyone here is completely crazy in their own way, everyone is themselves, but open for others.'
    }
  },
  {
    person: 'Deww',
    quote: {
      dutch: 'De Bolk is gewoon top kek.',
      english: 'The Bolk is just peak cool.'
    }
  },
  {
    person: 'Ivo',
    quote: {
      dutch: 'Omdat als je hier lid bent je nog steeds goed kan studeren.',
      english: 'Because you\'re still able to study while being a member.'
    }
  },
  {
    person: 'Christiaan',
    quote: {
      dutch: 'Omdat iedereen elkaar kent.',
      english: 'Because everyone knows each-other.'
    }
  },
  {
    person: 'Vasco',
    quote: {
      dutch: 'Omdat je bij de Bolk alles kan maken.',
      english: 'Because you can make anything at the Bolk.'
    }
  },
  {
    person: 'Pia',
    quote: {
      dutch: 'Omdat je bij deze vereniging zowel een BlikBierKwartier als een Spa kan hebben.',
      english: 'Because you can have a Spa as well as a Canned Beer Drive at this association.'
    }
  },
  {
    person: 'Mees',
    quote: {
      dutch: 'De Bolk heeft mijn nieuwe fiets onomkeerbaar bekladderd tijdens de OWee. rip. Twee drankjes later was ik lid.',
      english: 'The Bolk irreversibly plastered my new bike during the OWee. rip. Two drinks later I found myself a member.'
    }
  },
  {
    person: 'Linda',
    quote: {
      dutch: 'Voornamelijk omdat ik merkte dat mensen hier ook gewoon een beetje spelletjes spelen. Bij 3D twister ben ik hier terrecht gekomen, heb ik mijn bril verloren en ben ik hier blijven hangen.',
      english: 'Primarely because I noticed the people here also just play boardgames. I arrived at 3D twister, lost my glasses and stayed hanging around.'
    }
  },
  {
    person: 'Looka',
    quote: {
      dutch: 'Omdat ik elke avond van de OWee bij de Bolk belandde vanwege de toffe mensen. En natuurlijk de tosti\'s.',
      english: 'Because I found myself at the Bolk ever evening during the OWee because of the great people. Also the sandwiches of course.'
    }
  },
  {
    person: 'Douwe',
    quote: {
      dutch: 'Bolk is love, Bolk is life.',
      english: 'Bolk is love, Bolk is life.'
    }
  },
  {
    person: 'Kilian',
    quote: {
      dutch: 'Gezellige mensen, leuke activiteiten.',
      english: 'Friendly people, fun activities.'
    }
  },
  {
    person: 'Simon',
    quote: {
        dutch: 'Ik heb me ingeschreven en dat bleek een goed idee te zijn.',
        english: 'I signed up and that turned out to be a good idea.'
    }
  },
  {
    person: 'Isa',
    quote: {
      dutch: 'Ik heb 3D twister gespeeld, daarna bier gedronken en heb me de volgende dag ingeschreven.',
      english: 'I played 3D twister, drank some beers and signed up the next day.'
    }
  },
  {
    person: 'Marisa',
    quote: {
      dutch: 'Een combinatie van hartelijke gezelligheid en spelletjes.',
      english: 'A combination of friendly ambience and boardgames.'
    }
  },
  {
    person: 'Luka',
    quote: {
      dutch: 'Omdat je moeder.',
      english: 'Because your mother.'
    }
  },
  {
    person: 'Bas',
    quote: {
      dutch: 'De vier-uur cup a soup was wel een uitdaging.',
      english: 'The four \'O clock cup-a-soup turned out to be a good challenge.'
    }
  },
  {
    person: 'Matthijs',
    quote: {
      dutch: 'Van alle bezochten verenigingen vond ik deze het best op onder andere de gezelschapsmentaliteit, openheid en hoe de communicatie met de andere leden hier gehouden wordt.',
      english: 'Of all the associations I visited, I like this one the best because of the friendly mentality, openness en how the communication with other members goes.'
    }
  },
  {
    person: 'Jasper',
    quote: {
      dutch: 'Kom dan!',
      english: 'Come then!'
    }
  },
  {
    person: 'Brendan',
    quote: {
      dutch: 'Leuke mensen.',
      english: 'Fun folk.'
    }
  },
  {
    person: 'Stephen',
    quote: {
      dutch: 'Leek mij wel grappig.',
      english: 'I thought it was funny.'
    }
  },
  {
    person: 'Flip',
    quote: {
      dutch: 'Hoewel iedereen vet passief-agresieve grappen maakt, is het een plek waar je zonder zorgen jezelf kan zijn.',
      english: 'Even though everyone makes incredibly passive-aggressive jokes, it\'s a place where you can be yourself without worries.'
    }
  },
  {
    person: 'Melody',
    quote: {
      dutch: 'Ik werd meegesleept naar de BeginBBQ door studiegenoten en vond het vet gaaf. Ben sindsdien blijven plakken.',
      english: 'I was dragged to the Beginning BBQ by classmates and though it was incredibly cool. Stuck around since then.'
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
    div.innerHTML = getTemplate(quote.person, quote.quote.dutch);
    container.append(div);
  }
}

function renderQuotes() {
  shuffleQuotes();
  shuffleQuotes();
  shuffleQuotes();
  shuffleQuotes();
  getQuotesHTML();
  slides = document.getElementsByClassName('quote');
  showSlides(1);
  interval = setInterval(moveSlides, 13200, 5, true);
}

function moveSlides(n, auto = false) {
  while (document.getElementsByClassName('active').length > 0) {
    let elem = document.getElementsByClassName('active')[0];
    elem.style.order = '';
    elem.classList.remove('active');
  }
  showSlides(slideIndex += n);
  if (!auto) {
    clearInterval(interval);
    setTimeout(function () {
      setInterval(moveSlides, 2640, 5, true);
    }, 128000)
  }
}

function showSlides(direction) {
  for (let i = 0; i < 5; i++) {
    if (slideIndex + i >= slides.length) slideIndex = -i;
    else if (slideIndex + i < 0) slideIndex = slides.length - 5 + i;

    slides[slideIndex + i].classList.add('active');
    slides[slideIndex + i].style.order = i.toString();
  }
}
