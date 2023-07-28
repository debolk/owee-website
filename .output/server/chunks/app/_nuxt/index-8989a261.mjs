import { useSSRContext } from 'vue';
import { u as useCookie } from './cookie-0c62e30a.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import imageheader from './imageheader-70f3f195.mjs';
import _sfc_main$7 from './quotes-6545ed3d.mjs';
import _sfc_main$3 from './vereniging-189b0d49.mjs';
import _sfc_main$2 from './maintext-514ca840.mjs';
import _sfc_main$4 from './schema-87e89be2.mjs';
import _sfc_main$5 from './sleepin-df3d8b9f.mjs';
import _sfc_main$6 from './kmt-a08532c9.mjs';
import _sfc_main$8 from './contact-cd3b6e64.mjs';
import _sfc_main$9 from './sponsors-20009a1a.mjs';
import _sfc_main$1 from './navbar-bc824dff.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';

const __default__ = {
  components: {
    imageheader,
    quotes: _sfc_main$7,
    vereniging: _sfc_main$3,
    schema: _sfc_main$4,
    maintext: _sfc_main$2,
    kmt: _sfc_main$6,
    contact: _sfc_main$8,
    navbar: _sfc_main$1,
    sleepin: _sfc_main$5,
    sponsors: _sfc_main$9
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useCookie("language", { maxAge: 100 * 24 * 60 * 60, default: () => {
      return "dutch";
    } });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!_ctx.$device.isMobile) {
        _push(`<div class="soosjes-links"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!_ctx.$device.isMobile) {
        _push(`<div class="soosjes-rechts"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(imageheader, null, null, _parent));
      _push(`<div class="triangles-primary"></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div class="triangles-secondary"></div>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<div class="triangles-primary"></div>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<div class="triangles-secondary"></div>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`<div class="triangles-primary"></div>`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`<div class="triangles-secondary"></div>`);
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`<div class="triangles-primary"></div>`);
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`<div class="triangles-secondary"></div>`);
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-8989a261.mjs.map
