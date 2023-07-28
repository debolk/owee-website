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
  __name: "covid-19",
  __ssrInlineRender: true,
  setup(__props) {
    const language = useCookie("language", { maxAge: 100 * 24 * 60 * 60, default: () => {
      return "dutch";
    } });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "covid19" }, _attrs))}>`);
      if (unref(language) == "dutch") {
        _push(`<div class="content"><h2>Corona?</h2><p>Ook bij De Bolk wordt er rekening gehouden met de maatregelen omtrent COVID-19. Zo zal er tijdens de OWee en op reguliere avonden rekening gehouden met de (inmiddels welbekende) regels omtrent 1,5m afstand houden en hygi\xEBne.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(language) == "english") {
        _push(`<div class="content"><h2>Corona?</h2><p>At De Bolk we follow the Dutch rules concerning COVID-19. During the OWee we will follow the (well-known) rules about 1,5m distance and hygi\xEBne, this also applies to the regular evenings at De Bolk. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="upsidedowntriangles"></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/covid-19.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=covid-19-812e47eb.mjs.map
