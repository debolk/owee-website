import { useSSRContext, mergeProps, unref } from 'vue';
import { u as useCookie } from './cookie-0c62e30a.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { useMq } from 'vue3-mq';
import 'cookie-es';
import 'h3';
import 'destr';
import 'ohash';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue3-smooth-scroll';
import 'vue3-carousel';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const programma = "";
module.exports = {
  maandag: {
    begintijd: 1600,
    planning: [
      {
        titel: {
          dutch: "Spelletjesuur",
          english: "Game Time"
        },
        start: 1600,
        end: 1800,
        beschrijving: {
          dutch: "Hoe lang geleden was het dat je een bordspel gespeelt hebt? Kom spellen spelen zoals Saboteurs, Cluedo of Machiavelli.",
          english: "How long ago was it you played a boardgame? Come and play games like Saboteurs, Cluedo or Machiavelli."
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Eten @Bolk",
          english: "Dinner @Bolk"
        },
        start: 1800,
        end: 2e3,
        beschrijving: {
          dutch: "Eten bij de Bolk is echt mega lekker en gazellig, kom lekker eten!",
          english: "Dinner with the Bolk is really good, come and have a good meal!"
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Megaspellen",
          english: "Mega games"
        },
        start: 2e3,
        end: 2200,
        beschrijving: {
          dutch: "Geven Vier op een rij en Jenga jou nostalgische gevoelens? Kom het spelen in het MEGA. Zorg ervoor dat je overwinning ook van een afstand te bewonderen is of daag je vrienden uit voor een rematch. Of probeer iets anders en ga spijkerslaan. Iedereen om een GROTE boomstronk, spijkers en hamers, dit kan alleen maar voor ENORM veel plezier zorgen!",
          english: "Do Connect Four and Jenga give you nostalgic feelings? Play it in MEGA. Make sure that your victory can also be admired from a distance or challenge your friends to a rematch. Or try something different and play Nail Stump. Everyone around a BIG tree stump, nails and hammers, this can only lead to a HUGE amount of fun!"
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Tijdreisfeest met Cocktails",
          english: "Timetravelparty met Cocktails"
        },
        start: 2200,
        end: 400,
        beschrijving: {
          dutch: "Altijd al willen weten hoe het was om te feesten in de middeleeuwen en de grote depressie? Of wil je simpelweg de mooie tijden van groep 8 herleven? Kom naar het tijdreisfeest en maak het mee!",
          english: "Have you ever wondered what it was like to party in the middle ages or the great depression? Or do you simply wish to relive the good days of primary school? Come to time traveling party and experience it for yourself!"
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "4 uur cup-a-soup",
          english: "4 O' Clock cup-a-soup"
        },
        start: 400,
        end: 415,
        beschrijving: {
          dutch: "Beetje moe? Wil je je weer levend voelen, als herboren? Neem dan een 4 uur Cup-a-Soup, dat zouden meer mensen moeten doen!",
          english: "Tired after a long night? Wanna feel alive, like you were born again? Then enjoy a nice cup-a-soup!"
        },
        lokatie: "midden"
      }
    ]
  },
  dinsdag: {
    begintijd: 1600,
    planning: [
      {
        titel: {
          dutch: "Bob Rossen",
          english: "Bob Rossing"
        },
        start: 1600,
        end: 1800,
        beschrijving: {
          dutch: "Altijd al willen kunsten met de legendarische Bob Ross? Nu is je kans!",
          english: "Have you ever wanted to paint along the legendary Bob Ross? Now is your chance!"
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Eten @Bolk",
          english: "Dinner @Bolk"
        },
        start: 1800,
        end: 2e3,
        beschrijving: {
          dutch: "Eten bij de Bolk is echt mega lekker en gazellig, kom lekker eten!",
          english: "Dinner with the Bolk is really good, come and have a good meal!"
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Pimp je Fiets",
          english: "Pimp your Bike"
        },
        start: 2e3,
        end: 2115,
        beschrijving: {
          dutch: "Is jouw nieuwe (of oude) fiets ook nog zo saai en lastig herkenbaar? Geef hem wat flair met verf, stickers, googly eyes (!) en een gezonde hoeveelheid glitters. Niemand die jouw fiets nog durft te stelen, en jij hoeft je geen zorgen meer te maken dat je hem niet kan vinden in de overvolle fietsenstalling.",
          english: "Is your new (or old) bike boring or difficult to find? Here you can pimp your bike using an assortment of awesome decorations like paint, stickers, googly eyes (!) and a healthy amount of glitter. No one will ever dare to steal your bike again and you don\u2019t have to worry about losing it anymore."
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Kijk hoe het Klinkt",
          english: "See how it Sounds"
        },
        start: 2115,
        end: 2200,
        beschrijving: {
          dutch: "Weet jij hoe een wasmachine klinkt als het van 4 meter valt op de grond? Kom er hier achter!",
          english: "Do you know what sound a washing machine makes when it falls 4 meters to the ground? Come and find out here!"
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Preimeppen",
          english: "Leek beating"
        },
        start: 2200,
        end: 2230,
        beschrijving: {
          dutch: "Wat zou jij doen als je tientallen kilo\u2019s prei rond hebt slingeren? Kapot slaan tegen je medestudenten natuurlijk! Kom naar de Bolk, claim je prei en verlies een aantal vrienden in dit geweldige idee wat nooit fout kan gaan.",
          english: "What would you do in case you have access to tens of kilos of leek? Hit your fellow students of course! Visit the Bolk, claim your leek and lose a couple of friends during this awesome idea that can\u2019t possibly go wrong."
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Loco met Choco",
          english: "Loco with Choco"
        },
        start: 2230,
        end: 2330,
        beschrijving: {
          dutch: "Chocoladetaart, chocoladecake, chocoladekoekjes, chocoladecocktails, chocolademousse \u2026 Voor alle chocoladeliefhebbers hebben onze keukenprinsen en -prinsessen alles uit de kast gehaald om de meest chocola houdende baksels te cre\xEBren. Bestaat er iets als te veel chocola? Vind het uit!",
          english: "Chocolate cake, chocolate biscuits, chocolate cocktails, chocolate mousse \u2026 For all chocolate lovers our kitchen princes and princesses have tried to create the most chocolate-containing pastry. Is there something like too much chocolate? Find it out!"
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Karaoke",
          english: "Karaoke"
        },
        start: 2330,
        end: 300,
        beschrijving: {
          dutch: "Wil jij een hele avond de leukste nummers mee bl\xE8ren? Kom dan naar de karaoke en schreeuw de longen uit je lijf.",
          english: "Do you want to sing to all your favorite songs? Then go to the karaoke and sing till your throat hurts."
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Frietuur",
          english: "Fries 'O Clock"
        },
        start: 300,
        end: 400,
        beschrijving: {
          dutch: "FRIET FRIET FRIET en ander spul!",
          english: "FRIES FRIES FRIES and other shit"
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "4 uur cup-a-soup",
          english: "4 O' Clock cup-a-soup"
        },
        start: 400,
        end: 415,
        beschrijving: {
          dutch: "Beetje moe? Wil je je weer levend voelen, als herboren? Neem dan een 4 uur Cup-a-Soup, dat zouden meer mensen moeten doen!",
          english: "Tired after a long night? Wanna feel alive, like you were born again? Then enjoy a nice cup-a-soup!"
        },
        lokatie: "midden"
      }
    ]
  },
  woensdag: {
    begintijd: 1600,
    planning: [
      {
        titel: {
          dutch: "Spelletjesuur",
          english: "Game Time"
        },
        start: 1600,
        end: 1800,
        beschrijving: {
          dutch: "Hoe lang geleden was het dat je een bordspel gespeelt hebt? Kom spellen spelen zoals Saboteurs, Cluedo of Machiavelli.",
          english: "How long ago was it you played a boardgame? Come and play games like Saboteurs, Cluedo or Machiavelli."
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Eten @Bolk",
          english: "Dinner @Bolk"
        },
        start: 1800,
        end: 2e3,
        beschrijving: {
          dutch: "Eten bij de Bolk is echt mega lekker en gazellig, kom lekker eten!",
          english: "Dinner with the Bolk is really good, come and have a good meal!"
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Retrogamen",
          english: "Retrogaming"
        },
        start: 2e3,
        end: 2100,
        beschrijving: {
          dutch: "Ken jij je klassiekers nog? Daag je vrienden uit in een potje Mario Kart, Super Smash of andere spelletjes!",
          english: "Do you know your classics? Challenge your friends in a game of Mario Kart, Super Smash and many more games!"
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Will it Sodastream?",
          english: "Will it Sodastream?"
        },
        start: 2100,
        end: 2200,
        beschrijving: {
          dutch: "Wat kan allemaal (succesvol) in een sodastream gepropt worden? Ervaar het zelf!",
          english: "What can be stuffed (succesfully) in a sodastream? Experience it yourself!"
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Bierviltjesoorlog",
          english: "Coaster War"
        },
        start: 2200,
        end: 2330,
        beschrijving: {
          dutch: "Tijdens een bierviltjesoorlog ga je met een net niet oneindige voorraad bierviltjes gooien. Gooi ze op je vrienden en/of je mentor. Alles is toegestaan in een bierviltjesoorlog. \u201CBierviltjes! Bierviltjes overal! Dit is chaos!\u201D ",
          english: "During this event you will be able to throw a nearly unlimited supply of beer mats. Throw them at anyone.  \u201CBeer mats, Beer mats everywhere!\u201D - last years only survivor."
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "SpeBi proeverij",
          english: "Specialty Beer Tasting"
        },
        start: 2330,
        end: 30,
        beschrijving: {
          dutch: "Bier is er in allerlei soorten en maten. Hou je van een zoet biertje of juist eentje met een bittertje? Wil jij dat je bier zonder toevoegingen is gemaakt, of vind je het niet erg als er peper in zit? Hou je van koffie en bier? Dan kan dat ook! Het Bolksch BierbrouwersGilde kan je er onder het genot van bijpassende tosti's van alles over vertellen tijdens deze tosti- en speciaalbierproeverij!",
          english: "Craft beers come in many shapes and sizes. Do you like a sweet or a bitter pint? Or don\u2019t you mind if it is brewed with pepper or coffee beans? The Bolksch BierbrouwersGilde (Craft Beer Brewing Guild of the Bolk) can tell you a ton of information with every sip you take with accompanying grilled sandwiches."
        },
        lokatie: "links"
      },
      {
        titel: {
          dutch: "Tosti proeverij",
          english: "Grilled Sandwich Tasting"
        },
        start: 2330,
        end: 30,
        beschrijving: {
          dutch: "Tosti's ken je. Ham, kaas op brood onder een tosti ijzer. Maar wist je dat je tosti's nog veel beter kunt maken? Kom tijdens de OWee dit soort hippe tosti's proeven met bijpassend speciaalbier tijdens de tosti- en speciaalbier proeverij.",
          english: "You know grilled sandwiches. Ham, cheese on bread under an iron. But did you know you can make them much better? Come and taste these sorts of hip grilled sandwiches with accompanying craft beer during the grilled sandwich and craftbeer tastery."
        },
        lokatie: "rechts"
      },
      {
        titel: {
          dutch: "Pubquiz",
          english: "Pubquiz"
        },
        start: 30,
        end: 130,
        beschrijving: {
          dutch: "Is dit een Ikea ding of een Kaas? Raad het correct in deze pubquiz en win prijzen!",
          english: "Is this an Ikea thing or a kind of Cheese? Guess correctly in this pubquiz and win prizes!"
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "DINSDAG",
          english: "TUESDAY"
        },
        start: 130,
        end: 230,
        beschrijving: {
          dutch: "dinsdag",
          english: "tuesday"
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Blikbierkwartier",
          english: "Canned Beer Drive"
        },
        start: 230,
        end: 300,
        beschrijving: {
          dutch: "Is dit een BlikBierBorrel? Wist je dat er een auto in de soos stond? Kom zuipen ofzo.",
          english: "Is this a CannedBeerDrink? Did you know there was a car in the soos? Come and drink or something."
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Frietuur",
          english: "Fries 'O Clock"
        },
        start: 300,
        end: 400,
        beschrijving: {
          dutch: "FRIET FRIET FRIET en ander spul!",
          english: "FRIES FRIES FRIES and other shit"
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "4 uur cup-a-soup",
          english: "4 'O Clock cup-a-soup"
        },
        start: 400,
        end: 415,
        beschrijving: {
          dutch: "Beetje moe? Wil je je weer levend voelen, als herboren? Neem dan een 4 uur Cup-a-Soup, dat zouden meer mensen moeten doen!",
          english: "Tired after a long night? Wanna feel alive, like you were born again? Then enjoy a nice cup-a-soup!"
        },
        lokatie: "midden"
      }
    ]
  },
  donderdag: {
    begintijd: 1600,
    planning: [
      {
        titel: {
          dutch: "Spa middag",
          english: "Spa day"
        },
        start: 1600,
        end: 1800,
        beschrijving: {
          dutch: "Ook zo moe van gisteren? Kom chillen met zwembadjes, gezichtscreme, gekoelde drankjes en je rustige zomerse muziek. ",
          english: "Tired from yesterday? Come chill out at our spa with kiddie pools, face masks, cooled drinks and summery tunes."
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Eten @Bolk",
          english: "Dinner @Bolk"
        },
        start: 1800,
        end: 2e3,
        beschrijving: {
          dutch: "Eten bij de Bolk is echt mega lekker en gazellig, kom lekker eten!",
          english: "Dinner with the Bolk is really good, come and have a good meal!"
        },
        lokatie: "midden"
      },
      {
        titel: {
          dutch: "Band op de Boot",
          english: "Band on the Boat"
        },
        start: 2e3,
        end: 2300,
        beschrijving: {
          dutch: "Live muziek is leuk, maar het is nog veel leuker om live muziek op de oudste botter van Nederland te zien! Kom genieten van vrolijke bands en kom even bij van de heftige week feesten. Deze bruisende afsluiter zorgt voor een onvergetelijke week!",
          english: "Live music is fun! Consider live music on a boat! I\u2019M ON A BOAT! Take a look at me! Trui (the name of the boat) is the only botter that is managed by students and the oldest botter that has continuously sailed over the last century."
        },
        lokatie: "midden"
      }
    ]
  }
};
const __default__$1 = {
  props: {
    dag: String
  },
  data() {
    return {
      vandaag: programma[this.dag].planning,
      modal: false,
      modalItem: {
        titel: {},
        beschrijving: {}
      }
    };
  },
  mounted() {
    fitty(".fitTitle", {
      minSize: 10,
      maxSize: 20,
      multiline: true
    });
    fitty(".fitTime", {
      minSize: 10,
      maxSize: 11,
      multiline: false
    });
  },
  computed: {
    grow() {
      return this.mq === "mobile" ? 1.4 : 1.4;
    },
    begintijd: function() {
      if (this.mq === "mobile") {
        return programma[this.dag].begintijd;
      }
      let s = Number.MAX_SAFE_INTEGER;
      for (let i in programma) {
        s = Math.min(programma[i].begintijd, s);
      }
      return s;
    }
  },
  methods: {
    openmodal(item) {
      this.modalItem = item;
      this.modal = true;
    },
    pad(n, width, z) {
      z = z || "0";
      n = n + "";
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    },
    timeToPx(time) {
      var b = new Date(0, 0, 0, Math.floor(this.begintijd / 100), this.begintijd % 100, 0);
      var d = 0;
      if (time < 1e3) {
        d = 1;
      }
      var t = new Date(0, 0, d, Math.floor(time / 100), time % 100, 0);
      var diff = Math.abs(b - t) / 6e4;
      return diff;
    }
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "programmas",
  __ssrInlineRender: true,
  setup(__props) {
    useMq();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "programma" }, _attrs))}><div class="container"><div class="days"${ssrRenderAttr("id", __props.dag)}><!--[-->`);
      ssrRenderList(_ctx.vandaag, (item, index) => {
        _push(`<div style="${ssrRenderStyle({ height: `${Math.max((_ctx.timeToPx(item.end) - _ctx.timeToPx(item.start)) * _ctx.grow, 40)}px`, top: `${_ctx.timeToPx(item.start) * _ctx.grow}px` })}" class="${ssrRenderClass([{ "leftevent": item.lokatie === "links", "rightevent": item.lokatie === "rechts" }, "event"])}"><div class="textcontainer"><span class="title fitTitle">${ssrInterpolate(item.titel[_ctx.language])}</span><br>`);
        if (!!item.neptijd) {
          _push(`<span class="time fitTime">${ssrInterpolate(`${item.nepstart} - ${item.nepend}`)}</span>`);
        } else {
          _push(`<span class="time fitTime">${ssrInterpolate(`${Math.floor(item.start / 100)}:${_ctx.pad(item.start % 100, 2)} - ${Math.floor(item.end / 100)}:${_ctx.pad(item.end % 100, 2)}`)}</span>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div><div class="${ssrRenderClass([{ "is-active": _ctx.modal }, "modal"])}"><div class="modal-background"></div><div class="modal-content"><div class="modaltitle">${ssrInterpolate(_ctx.modalItem.titel[_ctx.language])}</div>`);
      if (!!_ctx.modalItem.neptijd) {
        _push(`<span class="time">${ssrInterpolate(`${_ctx.modalItem.nepstart} - ${_ctx.modalItem.nepend}`)}</span>`);
      } else {
        _push(`<span class="time">${ssrInterpolate(`${Math.floor(_ctx.modalItem.start / 100)}:${_ctx.pad(_ctx.modalItem.start % 100, 2)} - ${Math.floor(_ctx.modalItem.end / 100)}:${_ctx.pad(_ctx.modalItem.end % 100, 2)}`)}</span>`);
      }
      _push(`<br><p>${_ctx.modalItem.beschrijving[_ctx.language]}</p></div><button class="modal-close is-large"></button></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/programmas.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const programmas = _sfc_main$1;
const __default__ = {
  data() {
    return {
      dagen: {
        dutch: ["maandag", "dinsdag", "woensdag", "donderdag"],
        english: ["Monday", "Tuesday", "Wednesday", "Thursday"]
      }
    };
  },
  components: {
    programmas
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "schema",
  __ssrInlineRender: true,
  setup(__props) {
    const mq = useMq();
    const language = useCookie("language", { maxAge: 100 * 24 * 60 * 60, default: () => {
      return "dutch";
    } });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "schema" }, _attrs))}><div class="content">`);
      if (unref(language) == "dutch") {
        _push(`<h2>WAT IS ER TE DOEN TIJDENS DE OWEE?</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(language) == "english") {
        _push(`<h2>WHAT IS THERE TO DO DURING THE OWEE?</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="columns"><div class="column"><div class="columns"><div class="column"><div class="${ssrRenderClass([{ "mobiledagcontainerparent": unref(mq) === "mobile" }, "dagcontainer"])}"><h3>${ssrInterpolate(_ctx.dagen[unref(language)][0])}</h3>`);
      _push(ssrRenderComponent(programmas, {
        dag: "maandag",
        class: { "mobiledagcontainer": unref(mq) === "mobile" }
      }, null, _parent));
      _push(`</div></div><div class="column"><div class="${ssrRenderClass([{ "mobiledagcontainerparent": unref(mq) === "mobile" }, "dagcontainer"])}"><h3>${ssrInterpolate(_ctx.dagen[unref(language)][1])}</h3>`);
      _push(ssrRenderComponent(programmas, {
        dag: "dinsdag",
        class: { "mobiledagcontainer": unref(mq) === "mobile" }
      }, null, _parent));
      _push(`</div></div><div class="column"><div class="${ssrRenderClass([{ "mobiledagcontainerparent": unref(mq) === "mobile" }, "dagcontainer"])}"><h3>${ssrInterpolate(_ctx.dagen[unref(language)][2])}</h3>`);
      _push(ssrRenderComponent(programmas, {
        dag: "woensdag",
        class: { "mobiledagcontainer": unref(mq) === "mobile" }
      }, null, _parent));
      _push(`</div></div><div class="column"><div class="${ssrRenderClass([{ "mobiledagcontainerparent": unref(mq) === "mobile" }, "dagcontainer"])}"><h3>${ssrInterpolate(_ctx.dagen[unref(language)][3])}</h3>`);
      _push(ssrRenderComponent(programmas, {
        dag: "donderdag",
        class: { "mobiledagcontainer": unref(mq) === "mobile" }
      }, null, _parent));
      _push(`</div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/schema.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=schema-0149aaa7.mjs.map
