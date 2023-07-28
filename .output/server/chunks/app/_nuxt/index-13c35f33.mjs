import imageheader from './imageheader-88e7b6ef.mjs';
import _sfc_main$1 from './quotes-cb5c100b.mjs';
import _sfc_main$2 from './vereniging-68073538.mjs';
import _sfc_main$4 from './maintext-36bc4ca9.mjs';
import _sfc_main$3 from './schema-0149aaa7.mjs';
import _sfc_main$8 from './sleepin-fed959f6.mjs';
import _sfc_main$5 from './kmt-7b28c25f.mjs';
import _sfc_main$6 from './contact-d00de8e4.mjs';
import _sfc_main$9 from './sponsors-0a6befa7.mjs';
import _sfc_main$7 from './navbar-91bc2054.mjs';
import { resolveComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import './cookie-0c62e30a.mjs';
import 'cookie-es';
import 'vue3-mq';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue3-smooth-scroll';
import 'vue3-carousel';

const _sfc_main = {
  components: {
    imageheader,
    quotes: _sfc_main$1,
    vereniging: _sfc_main$2,
    schema: _sfc_main$3,
    maintext: _sfc_main$4,
    kmt: _sfc_main$5,
    contact: _sfc_main$6,
    navbar: _sfc_main$7,
    sleepin: _sfc_main$8,
    sponsors: _sfc_main$9
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_navbar = resolveComponent("navbar");
  const _component_imageheader = resolveComponent("imageheader");
  const _component_maintext = resolveComponent("maintext");
  const _component_vereniging = resolveComponent("vereniging");
  const _component_schema = resolveComponent("schema");
  const _component_sleepin = resolveComponent("sleepin");
  const _component_kmt = resolveComponent("kmt");
  const _component_quotes = resolveComponent("quotes");
  const _component_contact = resolveComponent("contact");
  const _component_sponsors = resolveComponent("sponsors");
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
  _push(ssrRenderComponent(_component_navbar, null, null, _parent));
  _push(ssrRenderComponent(_component_imageheader, null, null, _parent));
  _push(`<div class="triangles-primary"></div>`);
  _push(ssrRenderComponent(_component_maintext, null, null, _parent));
  _push(`<div class="triangles-secondary"></div>`);
  _push(ssrRenderComponent(_component_vereniging, null, null, _parent));
  _push(`<div class="triangles-primary"></div>`);
  _push(ssrRenderComponent(_component_schema, null, null, _parent));
  _push(`<div class="triangles-secondary"></div>`);
  _push(ssrRenderComponent(_component_sleepin, null, null, _parent));
  _push(`<div class="triangles-primary"></div>`);
  _push(ssrRenderComponent(_component_kmt, null, null, _parent));
  _push(`<div class="triangles-secondary"></div>`);
  _push(ssrRenderComponent(_component_quotes, null, null, _parent));
  _push(`<div class="triangles-primary"></div>`);
  _push(ssrRenderComponent(_component_contact, null, null, _parent));
  _push(`<div class="triangles-secondary"></div>`);
  _push(ssrRenderComponent(_component_sponsors, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-13c35f33.mjs.map
