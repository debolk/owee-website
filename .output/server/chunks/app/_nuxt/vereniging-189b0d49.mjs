import { mergeProps, unref, useSSRContext } from 'vue';
import { u as useCookie } from './cookie-0c62e30a.mjs';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
import 'v-smooth-scroll';
import 'vue3-mq';
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

const _sfc_main = {
  __name: "vereniging",
  __ssrInlineRender: true,
  setup(__props) {
    const language = useCookie("language", { maxAge: 100 * 24 * 60 * 60, default: () => {
      return "dutch";
    } });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "vereniging" }, _attrs))}>`);
      if (unref(language) == "dutch") {
        _push(`<div class="content"><h2>WAT VOOR VERENIGING ZIJN WIJ?</h2><p>De Bolk, ook wel bekend als D.S.V. &quot;Nieuwe Delft&quot;, is een van de kleinere verenigingen in Delft waar alle leden elkaar kennen. Bij ons heerst dan ook een huiselijke en ongedwongen sfeer, waardoor je lekker jezelf kunt zijn. Het unieke aan onze vereniging is dat de leden heel divers zijn, maar wel open staan voor anderen. Op deze manier kun je in \xE9\xE9n week mee doen aan een biercantus en een debatavond, gevolgd door een weekend zeilen.</p><p>Onze soci\xEBteit ligt vlakbij het station en het centrum. Bolkers kun je meestal vinden aan de bar voor een (speciaal)biertje en een tosti of in de achterzaal voor een bord- of kaartspel.</p><p>Omdat De Bolk zo divers is, zijn er veel verschillende commissies. Samen houden zij onze mooie vereniging draaiende. In het tweede kwartaal van het collegejaar kun je zelf ook al een beetje commissie-ervaring opdoen in een eerstejaarscommissie. Verzorg bijvoorbeeld een maaltijd of organiseer een feest of zeilweekend voor je mede-eerstejaars! Hierna kun je besluiten of je graag deel uit wil maken van een van onze commissies. Kijk voor een overzicht van alle commissies even op de verenigingssite onder <a href="https://website.debolk.nl/commissies/" target="_blank">&quot;Commisies&quot;</a>.</p><p>We zijn ook actief in het varen met en onderhouden van onze botter Trui. Een botter is een zeilboot oorspronkelijk bedoeld om mee te vissen. Trui is gebouwd in 1875 en erkend als een varend monument. Tijdens de KennisMakingsTijd (KMT) zal je ook met Trui varen. Kijk voor meer informatie op haar website, <a href="http://www.bu130.nl" target="_blank">www.bu130.nl</a></p><p>Onze leden zijn niet alleen maar bezig met al deze gave dingen, we moeten natuurlijk ook studeren. Lid zijn bij de Bolk kun je prima combineren met je studie. Wij stellen geen verplichtingen die jou kunnen belemmeren om te studeren. Verder heb je als eerstejaars contact met alle leden van de Bolk, dus ook met de ouderejaars bij wie je terecht kunt voor hulp.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(language) == "english") {
        _push(`<div class="content"><h2>WHAT KIND OF ASSOCIATION ARE WE?</h2><p>The Bolk is one of the smaller associations in Delft where all members know each other. There is a homely and relaxed atmosphere, so you can be yourself. The unique thing about our association is that the members are very diverse, but are open to others. At one moment you can participate in a sing-along and a debate evening, and at another you can go sailing for the weekend.</p><p>Our club is located near the station and the city center. Bolkers can usually be found at the bar for a beer and a sandwich or in the back for a board game.</p><p>Because The Bolk is so diverse, there are many different committees. Together they keep our beautiful association going. In the second quarter of the academic year you can also gain some committee experience in a first-year committee. Take care of a meal or organize a party or a sailing weekend for your fellow freshmen! After this you can decide if you would like to be part of one of our committees. For an overview of all committees, check the association site: <a href="https://website.debolk.nl/commissies/" target="_blank">&quot;Commisies&quot;</a>.</p><p>We are also active in sailing and maintaining our botter Trui. A botter is a sailboat originally intended for fishing. Trui was built in 1875 and recognized as a sailing monument. During the KennisMakingsTijd (KMT) you will also sail with Trui. Look for more information on her website, <a href="http://www.bu130.nl" target="_blank">www.bu130.nl</a></p><p>Our members are not only concerned with all these cool things, we also have to study, of course. Being a member at the Bolk can easily be combined with your studies. We do not impose obligations that can impede you from studying. Furthermore, as a first-year you have contact with all members of the Bolk, and therefore with the senior students you can turn to for help.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vereniging.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=vereniging-189b0d49.mjs.map
