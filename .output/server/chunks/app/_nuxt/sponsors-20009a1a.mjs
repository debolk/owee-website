import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { u as useCookie } from './cookie-0c62e30a.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
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
import 'cookie-es';
import '../server.mjs';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'v-smooth-scroll';
import 'vue3-mq';
import 'vue3-carousel';

const _imports_0 = "" + buildAssetsURL("mwtransportservice.2cb1f7ac.svg");
const _sfc_main = {
  __name: "sponsors",
  __ssrInlineRender: true,
  setup(__props) {
    const language = useCookie("language", { maxAge: 100 * 24 * 60 * 60, default: () => {
      return "dutch";
    } });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "sponsors" }, _attrs))}><div class="${ssrRenderClass([{ mobilesponsors: _ctx.$device.isMobile }, "sponsors"])}">`);
      if (unref(language) == "dutch") {
        _push(`<h2 style="${ssrRenderStyle({ "color": "#068b8c !important" })}">LIEVE MENSEN DIE ONS SPONSOREN</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(language) == "english") {
        _push(`<h2 style="${ssrRenderStyle({ "color": "#068b8c !important" })}">NICE PEOPLE THAT SPONSOR US</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a id="link" class="${ssrRenderClass([{ mobile: _ctx.$device.isMobile }, "left"])}" href="https://www.facebook.com/profile.php?id=100057201169713" target="_blank"><img class="${ssrRenderClass({ mobile: _ctx.$device.isMobile })}"${ssrRenderAttr("src", _imports_0)} alt="MW Transportservice"></a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sponsors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sponsors-20009a1a.mjs.map
