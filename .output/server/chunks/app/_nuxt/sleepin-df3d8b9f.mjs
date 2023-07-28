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
  __name: "sleepin",
  __ssrInlineRender: true,
  setup(__props) {
    const language = useCookie("language", { maxAge: 100 * 24 * 60 * 60, default: () => {
      return "dutch";
    } });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "sleepin" }, _attrs))}>`);
      if (unref(language) == "dutch") {
        _push(`<div class="content"><h2>KAN IK HIER BLIJVEN SLAPEN TIJDENS DE OWEE?</h2><p>Delft is de beste plaats om te blijven slapen tijdens de OWee. Zo kan je alle activiteiten maximaal meepakken. Helaas is het elk jaar weer een flinke opgave om alle aankomende eerstejaars een slaapplek te bezorgen. Voor degenen die niet in studentenhuizen kunnen worden ingedeeld betekent dit helaas dat ze in de gymzaal moeten slapen. Heb jij geen zin om massaal in de sportzaal te slapen? Of heb je echt een hekel aan je huidige slaapadres? Je kunt ook gezellig in een studentenhuis van De Bolk overnachten!</p><p>Er zijn een aantal Bolkhuizen waar jij een slaapplaats kunt krijgen, o.a. het aan de soci\xEBteit verbonden Bolkhuisch, verkozen tot studentenhuis van het jaar 2011!</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(language) == "english") {
        _push(`<div class="content"><h2>CAN I STAY HERE DURING THE OWEE?</h2><p>Delft is the best place to stay during the OWee. This way you can fully benefit from all activities. Unfortunately, every year it is quite a task to give all future first-years a place to sleep. For those who can not be placed in student houses, this unfortunately means that they have to sleep at the gym. Do not you feel like sleeping en masse at the gym? Or do you really dislike your current sleep address? You can spend the night in a student house at The Bolk!</p><p>There are a number of Bolkhouses where you can get a place to sleep, including the Bolkhuisch attached to the club, voted student house of the year in 2011!</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sleepin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sleepin-df3d8b9f.mjs.map
