
// elke activiteit heeft 5 variabelen:
// begintid (start),
// eindtid (end),
// titel (titel),
// beschrijving (beschrijving),
// of hij 'links', 'rechts' of in het 'midden' moet worden weergegeven (lokatie)

module.exports = {
  zondagwoensdag: {
    begintijd: 2000,
    planning:[
      {
        titel: {
          dutch: 'Retrogamen',
          english: 'Retrogaming'
        },
        start: 2000,
        end: 2100,
        beschrijving: {
          dutch: 'Ken jij je klassiekers nog? Daag je vrienden uit in een potje Mario Kart, Super Smash of andere spelletjes!',
          english: 'Do you know your classics? Challenge your friends in a game of Mario Kart, Super Smash and many more games!'
        },
        lokatie: 'midden'
      },
      {
        titel: {
          dutch: 'Bob Rossen',
          english: 'Bob Rossing'
        },
        start: 2100,
        end: 2200,
        beschrijving: {
          dutch: 'Altijd al willen verven met de legendarische Bob Ross? Nu is je kans!',
          english: 'Have you ever wanted to paint along the legendary Bob Ross? Now is your chance!'
        },
        lokatie: 'midden'
      },
      {
        titel: {
          dutch: 'Mix je cocktailnight',
          english: 'Mix your cocktailnight'
        },
        start: 2200,
        end: 2400,
        beschrijving: {
		  dutch: 'De beroemde Bolksche Cocktailnight wordt weer een groot feest! Met een twist; je mag namelijk zelf een mojito maken! Ga een avondje helemaal los met je favoriete cocktails, zoals de Paarse Moederneuker of de Bananenboner, of je zelfgemaakte mojito! Natuurlijk zijn er ook alcoholvrije opties aanwezig.',
          english: 'The famous Bolkish Cocktailnight is going to be a huge party! With a twist; you can make your own mojito\'s! Go wild for a night with your favourite cocktails, like the Purple Motherfucker or the Bananaboner, or your selfmade mojito! Of course, there are also alcohol-free options available.'
        },
        lokatie: 'links'
      },
	  {
		titel: {
			dutch: 'High Tea',
			english: 'High Tea'
		},
		start: 2145,
		end: 2245,
		beschrijving: {
		  dutch: 'Wil jij ook lekker bij komen van een deze drukke week? Kom relaxed genieten van een theetje met een lekker koekje erbij!',
          english: 'Are you also tired from this busy week ? Come relax with a nice cup of tea and some cookies. '
		},
		lokatie: 'rechts'
	  },
      {
        titel: {
          dutch: 'Afsluit cup-a-soup',
          english: 'Closing cup-a-soup'
        },
        start: 2330,
        end: 2400,
        beschrijving: {
          dutch: 'Beetje moe? Wil je je weer levend voelen, als herboren? Neem dan een 4 uur Cup-a-Soup, dat zouden meer mensen moeten doen!',
          english: 'Tired after a long night? Wanna feel alive, like you were born again? Then enjoy a nice cup of soup!'
        },
        lokatie: 'rechts'
      }
    ]
  },

  maandagdonderdag: {
    begintijd: 2000,
    planning: [
      {
        titel: {
          dutch: 'Origami',
          english: 'Origami'
        },
        start: 2000,
        end: 2100,
        beschrijving: {
          dutch: 'Altijd al origami willen leren? Nu is je kans bij de Bolk!',
          english: 'Ever wanted to learn origami? Now is your chance!'
        },
        lokatie: 'links'
      },
	  {
		titel: {
		  dutch: 'Speciaalbierproeverij',
		  english: 'Specialty beer tasting'
		},
		start: 2015,
		end: 2045,
		beschrijving: {
		  dutch: 'Bier is er in allerlei soorten en maten. Hou je van een zoet biertje of juist eentje met een bittertje? Wil jij dat je bier zonder toevoegingen is gemaakt, of vind je het niet erg als er peper in zit? Hou je van koffie en bier? Dan kan dat ook! Het Bolksch Bierbrouwersgilde kan je er van alles over vertellen tijdens deze speciaalbierproeverij!',
          english: 'Craft beers come in many shapes and sizes. Do you like a sweet or a bitter pint? Do you like the German idea of the Reinheitsgebot? Or don’t you mind if it is brewed with pepper or coffee beans? The Bolksch Bierbrouwersgilde (Craft Beer Brewing Guild of the Bolk) can tell you a ton of information with every sip you take.'
		},
		lokatie: 'rechts'
	  },
      {
        titel: {
          dutch: 'Pubquiz',
          english: 'Pubquiz'
        },
        start: 2100,
        end: 2200,
        beschrijving: {
          dutch: 'Verbaas je vrienden met je superieure kennis over willekeurige trivia zoals: “Wisten jullie dat de ster die het dichtst bij de aarde staat de zon is?”, “Wisten jullie dat Lingo 5000 afleveringen telt?” en “Wisten jullie dat Willem van Oranje in het pand van De Bolk heeft overnacht?” Deze willekeurige bullshit kan jou een voorsprong geven op de overwinning van deze e-pi-sche pubquiz. Of kom langs om voor de gezelligheid en omdat je dingen wil leren ofzo.',
          english: '[In Dutch] Surprise your friends with your superior knowledge of random trivia. Or just come by to enjoy the atmosphere and learn a thing or two.'
        },
        lokatie: 'midden'
      },
      {
        titel: {
          dutch: 'Vuuruur',
          english: 'Fire hour'
        },
        start: 2200,
        end: 2300,
        beschrijving: {
		  dutch: 'Kom gezellig bij onze open haard met een biertje of een chocomel zitten. Disclaimer: het is geen echt vuur',
          english: 'Come and sit at out fireplace with a nice beer or a chocolate milk. Disclaimer: not a real fireplace'
        },
        lokatie: 'links'
      },
	  {
        titel: {
          dutch: 'Loco met choco',
          english: 'Loco with choco'
        },
        start: 2215,
        end: 2245,
        beschrijving: {
          dutch: 'Chocoladetaart, chocoladecake, chocoladekoekjes, chocoladecocktails, chocolademousse … Voor alle chocoladeliefhebbers hebben onze keukenprinsen en -prinsessen alles uit de kast gehaald om de meest chocola houdende baksels te creëren. Bestaat er iets als te veel chocola? Vind het uit!',
          english: 'Chocolate cake, chocolate biscuits, chocolate cocktails, chocolate mousse … For all chocolate lovers our kitchen princes and princesses have tried to create the most chocolate-containing pastry. Is there something like too much chocolate? Find it out!'
        },
        lokatie: 'rechts'
      },
      {
        titel: {
          dutch: 'Constructiewedstrijd',
          english: 'Construction Competition'
        },
        start: 2245,
        end: 2345,
        beschrijving: {
          dutch: 'Hoe hoog kan je een toren maken met alleen bierviltjes?',
          english: 'How high can you make a tower consisting of only coasters?'
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
          dutch: 'In dit uur is de muziek aangepast op de sfeer die wordt neergezet bij De Bolk! We gaan niet een uur lang alleen maar Ierse zinnen brabbelen of Drunken Lullabies luisteren (hij komt vast wel voorbij), maar waarschijnlijk roepen we wel willekeurige Ierse woorden naar elkaar toe tijdens dit Ierse uur! Drink Guinness en ga los! Proost!',
          english: '“San uair seo tá an ceol curtha in oiriúint don atmaisféar atá curtha síos ag De Bolk! Ní bhfaighidh muid ach abairtí Gaeilge ar feadh uair an chloig nó ní bheidh sé ag éisteacht le Lullabies Drunken (is dócha go dtéann sé), ach is dócha go bhfaighfimid focail Ghaeilge randamach lena chéile le linn na huaire Gaeilge seo! Dí Guinness agus dul! Slainte!”'
        },
        lokatie: 'links'
      },
      {
        titel: {
          dutch: 'Afsluit cup-a-soup',
          english: 'Closing cup-a-soup'
        },
        start: 2330,
        end: 2400,
        beschrijving: {
          dutch: 'Beetje moe? Wil je je weer levend voelen, als herboren? Neem dan een 4 uur Cup-a-Soup, dat zouden meer mensen moeten doen!',
          english: 'Tired after a long night? Wanna feel alive, like you were born again? Then enjoy a nice cup of soup!'
        },
        lokatie: 'rechts'
      }
    ]
  },

  dinsdagvrijdag: {
    begintijd: 2000,
    planning: [
      {
        titel: {
          dutch: 'Knoop je eigen sleutelhanger',
          english: 'Knot your own keychain'
        },
        start: 2000,
        end: 2100,
        beschrijving: {
          dutch: 'Vul je sleutelbos aan met je eigen kunstwerken. Laat zien welke knopen jij allemaal kent of breid je collectie uit. Gezellig? Natuurlijk! En dit alles op onze historische zeilboot.',
          english: 'Fill your bunch of keys with your own artworks. Show which knotting techniques you know or expand your collection. Cosy? Of course! And all this on our historic sailboat.'
        },
        lokatie: 'midden'
      },
      {
        titel: {
          dutch: 'Wolvenuurtje',
          english: 'Wolven hour'
        },
        start: 2100,
        end: 2200,
        beschrijving: {
          dutch: 'De volle maan staat aan de lucht, de Weerbolkers van Wakkerdam zijn (bloed)dorstig. Kom in één avond achter wie de weerwolven zijn en wie de burgers zijn tijdens het one night weerwolven.',
          english: 'The full moon has risen, the Werebolkers of Millers Hollow are (blood)thirsty. Find out who are werewolves and who are civilians in one night during one night werewolf.'
        },
        lokatie: 'links'
      },
	  {
		titel: {
			dutch: 'Tropisch Uurtje',
			english: 'Tropical Hour'
		},
		start: 2100,
		end: 2200,
		beschrijving: {
		  dutch: 'Ananas, kokosnoot, tropische muziek. Kom lekker vakantie vieren bij de Bolk!',
          english: 'Pineapple, coconut, tropical music. Come and have a nice vacation at the Bolk!'
		},
		lokatie: 'rechts'
	  },
      {
        titel: {
          dutch: 'Mix je cocktailnight',
          english: 'Mix your cocktailnight'
        },
        start: 2200,
        end: 2400,
        beschrijving: {
          dutch: 'De beroemde Bolksche Cocktailnight wordt weer een groot feest! Met een twist; je mag namelijk zelf een mojito maken! Ga een avondje helemaal los met je favoriete cocktails, zoals de Paarse Moederneuker of de Bananenboner, of je zelfgemaakte mojito! Natuurlijk zijn er ook alcoholvrije opties aanwezig.',
          english: 'The famous Bolkish Cocktailnight is going to be a huge party! With a twist; you can make your own mojito\'s! Go wild for a night with your favourite cocktails, like the Purple Motherfucker or the Bananaboner, or your selfmade mojito! Of course, there are also alcohol-free options available.'
        },
        lokatie: 'links'
      },
	  {
        titel: {
          dutch: 'Frietuur',
          english: 'Deep fry hour'
        },
        start: 2230,
        end: 2330,
        beschrijving: {
          dutch: 'Er is een feestje op de Bolk. En bij een feestje hoort natuurlijk gefrituurde meuk. Dat is iets wat we altijd wel op voorraad hebben. Kost geen geld, het hoort er nou eenmaal een beetje bij.',
          english: 'There is a party at the Bolk and every party needs deep fried shit. That is something we always have in stock. Free or charge, it’s just something we like to do.'
        },
        lokatie: 'rechts'
      },
      {
        titel: {
          dutch: 'Afsluit cup-a-soup',
          english: 'Closing cup-a-soup'
        },
        start: 2330,
        end: 2400,
        beschrijving: {
          dutch: 'Beetje moe? Wil je je weer levend voelen, als herboren? Neem dan een 4 uur Cup-a-Soup, dat zouden meer mensen moeten doen!',
          english: 'Tired after a long night? Wanna feel alive, like you were born again? Then enjoy a nice cup of soup!'
        },
        lokatie: 'rechts'
      }
    ]
  }
}
