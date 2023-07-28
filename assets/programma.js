// elke activiteit heeft 5 variabelen:
// begintid (start),
// eindtid (end),
// titel (titel),
// beschrijving (beschrijving),
// of hij 'links', 'rechts' of in het 'midden' moet worden weergegeven (lokatie)
export default {
  maandag: {
    begintijd: 1700,
    planning: [
      {
        titel: {
          dutch: 'Pimp je Fiets',
          english: 'Pimp my Bike'
        },
        start: 1700,
        end: 1800,
        beschrijving: {
          dutch: 'Is jouw nieuwe (of oude) fiets ook nog zo saai en lastig herkenbaar? Geef hem wat flair met verf, stickers, googly eyes (!) en een gezonde hoeveelheid glitters. Niemand die jouw fiets nog durft te stelen, en jij hoeft je geen zorgen meer te maken dat je hem niet kan vinden in de overvolle fietsenstalling.',
          english: 'Is your new (or old) bike boring or difficult to find? Here you can pimp your bike using an assortment of awesome decorations like paint, stickers, googly eyes (!) and a healthy amount of glitter. No one will ever dare to steal your bike again and you don’t have to worry about losing it anymore.'
        },
        lokatie: 'links'
      },
      {
        titel: {
          dutch: 'Kinky knopen',
          english: 'Kinky knots'
        },
        start: 1700,
        end: 1800,
        beschrijving: {
          dutch: '',
          english: ''
        },
        lokatie: 'rechts'
      },
      {
        titel: {
          dutch: 'Eten @Bolk',
          english: 'Dinner @Bolk'
        },
        start: 1800,
        end: 1930,
        beschrijving: {
          dutch: 'Eten bij de Bolk is echt mega lekker en gazellig, kom lekker eten!',
          english: 'Dinner with the Bolk is really good, come and have a good meal!'
        },
        lokatie: 'midden'
      },
      {
        titel: {
          dutch: 'Weerwolven',
          english: 'Werewolves'
        },
        start: 1930,
        end: 2100,
        beschrijving: {
          dutch: '',
          english: ''
        },
        lokatie: 'links'
      },
      {
        titel: {
          dutch: 'Badeendjes vissen',
          english: 'Rubber Duck fishing'
        },
        start: 2000,
        end: 2200,
        beschrijving: {
          dutch: '',
          english: ''
        },
        lokatie: 'rechts'
      },
      {
        titel: {
          dutch: 'Preimeppen',
          english: 'Leek whopping'
        },
        start: 2100,
        end: 2130,
        beschrijving: {
          dutch: 'Wat zou jij doen als je tientallen kilo’s prei rond hebt slingeren? Kapot slaan tegen je medestudenten natuurlijk! Kom naar de Bolk, claim je prei en verlies een aantal vrienden in dit geweldige idee wat nooit fout kan gaan.',
          english: 'What would you do in case you have access to tens of kilos of leek? Hit your fellow students of course! Visit the Bolk, claim your leek and lose a couple of friends during this awesome idea that can’t possibly go wrong.'
        },
        lokatie: 'links'
      },
      {
        titel: {
          dutch: 'BADEENDfeest',
          english: 'RUBBER DUCK party'
        },
        start: 2130,
        end: 400,
        beschrijving: {
          dutch: '',
          english: ''
        },
        lokatie: 'midden'
      },
      {
        titel: {
          dutch: '4 uur cup-a-soup',
          english: '4 O\' Clock cup-a-soup'
        },
        start: 400,
        end: 415,
        beschrijving: {
          dutch: 'Beetje moe? Wil je je weer levend voelen, als herboren? Neem dan een 4 uur Cup-a-Soup, dat zouden meer mensen moeten doen!',
          english: 'Tired after a long night? Wanna feel alive, like you were born again? Then enjoy a nice cup-a-soup!'
        },
        lokatie: 'midden'
      }
    ]
  },

  dinsdag: {
    begintijd: 1700,
    planning: [
      {
        titel: {
          dutch: 'Mega spellen',
          english: 'Mega games'
        },
        start: 1700,
        end: 1800,
        beschrijving: {
          dutch: 'Geven Vier op een rij en Jenga jou nostalgische gevoelens? Kom het spelen in het MEGA. Zorg ervoor dat je overwinning ook van een afstand te bewonderen is of daag je vrienden uit voor een rematch. Of probeer iets anders en ga spijkerslaan. Iedereen om een GROTE boomstronk, spijkers en hamers, dit kan alleen maar voor ENORM veel plezier zorgen!',
          english: 'Do Connect Four and Jenga give you nostalgic feelings? Play it in MEGA. Make sure that your victory can also be admired from a distance or challenge your friends to a rematch. Or try something different and play Nail Stump. Everyone around a BIG tree stump, nails and hammers, this can only lead to a HUGE amount of fun!'
        },
        lokatie: 'midden'
      },
      {
        titel: {
          dutch: 'Eten @Bolk',
          english: 'Dinner @Bolk'
        },
        start: 1800,
        end: 2000,
        beschrijving: {
          dutch: 'Eten bij de Bolk is echt mega lekker en gazellig, kom lekker eten!',
          english: 'Dinner with the Bolk is really good, come and have a good meal!'
        },
        lokatie: 'midden'
      },
      {
        titel: {
          dutch: 'Mattenfort bouwen',
          english: 'Build a Mattress fort'
        },
        start: 2000,
        end: 2200,
        beschrijving: {
          dutch: '',
          english: ''
        },
        lokatie: 'rechts'
      },
      {
        titel: {
          dutch: 'Kijken hoe het Klinkt',
          english: 'See how it Sounds'
        },
        start: 2100,
        end: 2200,
        beschrijving: {
          dutch: 'Weet jij hoe een wasmachine klinkt als het van 4 meter valt op de grond? Kom er hier achter!',
          english: 'Do you know what sound a washing machine makes when it falls 4 meters to the ground? Come and find out here!'
        },
        lokatie: 'links'
      },
      {
        titel: {
          dutch: 'Speciaalbier proeverij',
          english: 'Craft beer tasting'
        },
        start: 2200,
        end: 2300,
        beschrijving: {
          dutch: 'Bier is er in allerlei soorten en maten. Hou je van een zoet biertje of juist eentje met een bittertje? Wil jij dat je bier zonder toevoegingen is gemaakt, of vind je het niet erg als er peper in zit? Hou je van koffie en bier? Dan kan dat ook! Het Bolksch BierbrouwersGilde kan je er van alles over vertellen tijdens deze speciaalbierproeverij!',
          english: 'Craft beers come in many shapes and sizes. Do you like a sweet or a bitter pint? Or don’t you mind if it is brewed with pepper or coffee beans? The Bolksch BierbrouwersGilde (Craft Beer Brewing Guild of the Bolk) can tell you a ton of information with every sip you take.'
        },
        lokatie: 'links'
      },
      {
        titel: {
          dutch: '3D-Twister',
          english: '3D-Twister'
        },
        start: 2200,
        end: 2300,
        beschrijving: {
          dutch: '',
          english: ''
        },
        lokatie: 'rechts'
      },
      {
        titel: {
          dutch: 'Irish Hour',
          english: 'Irish Hour'
        },
        start: 2300,
        end: 2400,
        beschrijving: {
          dutch: '',
          english: ''
        },
        lokatie: 'links'
      },
      {
        titel: {
          dutch: 'Retro gamen',
          english: 'Retro gaming'
        },
        start: 2230,
        end: 2400,
        beschrijving: {
          dutch: 'Ken jij je klassiekers nog? Daag je vrienden uit in een potje Mario Kart, Super Smash of andere spelletjes!',
          english: 'Do you know your classics? Challenge your friends in a game of Mario Kart, Super Smash and many more games!'
        },
        lokatie: 'rechts'
      },
      {
        titel: {
          dutch: 'Karaoke',
          english: 'Karaoke'
        },
        start: 2400,
        end: 400,
        beschrijving: {
          dutch: 'Wil jij een hele avond de leukste nummers mee blèren? Kom dan naar de karaoke en schreeuw de longen uit je lijf.',
          english: 'Do you want to sing to all your favorite songs? Then go to the karaoke and sing till your throat hurts.'
        },
        lokatie: 'midden'
      },
      {
        titel: {
          dutch: '4 uur cup-a-soup',
          english: '4 O\' Clock cup-a-soup'
        },
        start: 400,
        end: 415,
        beschrijving: {
          dutch: 'Beetje moe? Wil je je weer levend voelen, als herboren? Neem dan een 4 uur Cup-a-Soup, dat zouden meer mensen moeten doen!',
          english: 'Tired after a long night? Wanna feel alive, like you were born again? Then enjoy a nice cup-a-soup!'
        },
        lokatie: 'midden'
      }
    ]
  },

  woensdag: {
    begintijd: 1700,
    planning: [
      {
        titel: {
          dutch: 'D&D one shot',
          english: 'D&D one shot'
        },
        start: 1700,
        end: 1900,
        beschrijving: {
          dutch: '',
          english: ''
        },
        lokatie: 'midden'
      },
      {
        titel: {
          dutch: 'Eten @Bolk',
          english: 'Dinner @Bolk'
        },
        start: 1900,
        end: 2030,
        beschrijving: {
          dutch: 'Eten bij de Bolk is echt mega lekker en gazellig, kom lekker eten!',
          english: 'Dinner with the Bolk is really good, come and have a good meal!'
        },
        lokatie: 'midden'
      },
      {
        titel: {
          dutch: 'Botter Rossen',
          english: 'Botter Ross Paiting'
        },
        start: 2030,
        end: 2230,
        beschrijving: {
          dutch: '',
          english: ''
        },
        lokatie: 'midden'
      },
      {
        titel: {
          dutch: 'Bierviltjesoorlog',
          english: 'Coaster War'
        },
        start: 2230,
        end: 30,
        beschrijving: {
          dutch: 'Tijdens een bierviltjesoorlog ga je met een net niet oneindige voorraad bierviltjes gooien. Gooi ze op je vrienden en/of je mentor. Alles is toegestaan in een bierviltjesoorlog. “Bierviltjes! Bierviltjes overal! Dit is chaos!” - de enige overlevende vorig jaar',
          english: 'During this event you will be able to throw a nearly unlimited supply of beer mats. Throw them at anyone.  “Beer mats, Beer mats everywhere!” - last years only survivor.'
        },
        lokatie: 'links'
      },
      {
        titel: {
          dutch: 'Loco met Choco',
          english: 'Loco with Choco'
        },
        start: 2230,
        end: 2330,
        beschrijving: {
          dutch: 'Chocoladetaart, chocoladecake, chocoladekoekjes, chocoladecocktails, chocolademousse … Voor alle chocoladeliefhebbers hebben onze keukenprinsen en -prinsessen alles uit de kast gehaald om de meest chocola houdende baksels te creëren. Bestaat er iets als te veel chocola? Vind het uit!',
          english: 'Chocolate cake, chocolate biscuits, chocolate cocktails, chocolate mousse … For all chocolate lovers our kitchen princes and princesses have tried to create the most chocolate-containing pastry. Is there something like too much chocolate? Find it out!'
        },
        lokatie: 'rechts'
      },
      {
        titel: {
          dutch: 'Blikbier Lingo',
          english: 'Beer can Lingo'
        },
        start: 30,
        end: 130,
        beschrijving: {
          dutch: '',
          english: ''
        },
        lokatie: 'midden'
      },
      {
        titel: {
          dutch: 'Blikbierkwartier',
          english: 'Canned beer quarter'
        },
        start: 130,
        end: 230,
        beschrijving: {
          dutch: 'Is dit een BlikBierBorrel? Wist je dat er een auto in de soos stond? Kom zuipen ofzo.',
          english: 'Is this a CannedBeerDrink? Did you know there was a car in the soos? Come and drink or something.'
        },
        lokatie: 'midden'
      },
      {
        titel: {
          dutch: 'DIY kapsalon',
          english: 'DIY kapsalon'
        },
        start: 230,
        end: 400,
        beschrijving: {
          dutch: '',
          english: ''
        },
        lokatie: 'midden'
      },
      {
        titel: {
          dutch: '4 uur cup-a-soup',
          english: '4 \'O Clock cup-a-soup'
        },
        start: 400,
        end: 415,
        beschrijving: {
          dutch: 'Beetje moe? Wil je je weer levend voelen, als herboren? Neem dan een 4 uur Cup-a-Soup, dat zouden meer mensen moeten doen!',
          english: 'Tired after a long night? Wanna feel alive, like you were born again? Then enjoy a nice cup-a-soup!'
        },
        lokatie: 'midden'
      }
    ]
  },

  donderdag: {
    begintijd: 1700,
    planning: [
      {
        titel: {
          dutch: 'Spa',
          english: 'Spa'
        },
        start: 1700,
        end: 1800,
        beschrijving: {
          dutch: 'Ook zo moe van gisteren? Kom chillen met zwembadjes, gezichtscreme, gekoelde drankjes en je rustige zomerse muziek. ',
          english: 'Tired from yesterday? Come chill out at our spa with kiddie pools, face masks, cooled drinks and summery tunes.'
        },
        lokatie: 'links'
      },
      {
        titel: {
          dutch: 'VVThee',
          english: 'VVTea'
        },
        start: 1700,
        end: 1800,
        beschrijving: {
          dutch: '',
          english: ''
        },
        lokatie: 'rechts'
      },
      {
        titel: {
          dutch: 'Band in de soos',
          english: 'Band in the soos'
        },
        start: 2000,
        end: 2300,
        beschrijving: {
          dutch: 'Live muziek is leuk, maar het is nog veel leuker om live muziek op de oudste botter van Nederland te zien! Kom genieten van vrolijke bands en kom even bij van de heftige week feesten. Deze bruisende afsluiter zorgt voor een onvergetelijke week!',
          english: 'Live music is fun! Consider live music on a boat! I’M ON A BOAT! Take a look at me! Trui (the name of the boat) is the only botter that is managed by students and the oldest botter that has continuously sailed over the last century.'
        },
        lokatie: 'midden'
      }
    ]
  }
}
