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
  __name: "maintext",
  __ssrInlineRender: true,
  setup(__props) {
    const language = useCookie("language", { maxAge: 100 * 24 * 60 * 60, default: () => {
      return "dutch";
    } });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "main" }, _attrs))}>`);
      if (unref(language) == "dutch") {
        _push(`<div class="content"><h2>BEN JIJ ER AL KLAAR VOOR?</h2><p>De OWee markeert het begin van een nieuwe periode in je leven: je studententijd. Maar hoe gaat jouw studentenleven eruit zien?</p><p>Op 13 t/m 17 augustus is Delft een groot feest, speciaal voor jou als eerstejaars. De OWee is jouw moment om jezelf opnieuw uit te vinden en te ontdekken wat er nu echt bij jou past.</p><p>De hele week organiseert de Bolk speciaal voor jou allerlei gave activiteiten, zodat je helemaal uit je Bolk kan gaan om jou studietijd een onvergetelijke start te geven!</p><p>Benieuwd wat er allemaal te doen gaat zijn, en wat de Bolk allemaal te bieden heeft? Daar is deze website speciaal voor gebouwd! Kijk lekker rond, zet het in je agenda en kom langs tijdens de OWee!</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(language) == "english") {
        _push(`<div class="content"><h2>ARE YOU READY?</h2><p>The OWee marks the beginning of a new period in your life: your student days. But what does your student life look like?</p><p>On August 13th to the 17th, Delft is a big party, especially for you as a first-year student. The OWee is your time to reinvent yourself and discover what really fits you.</p><p>Curious what to do and what the Bolk has to offer? This website is especially built for that! Have a look around, mark the dates in your diary and visit us during the OWee.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content"><div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/fEYfhu617D8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/maintext.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=maintext-514ca840.mjs.map
