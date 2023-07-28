import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { u as useCookie } from './cookie-0c62e30a.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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

const _imports_0 = "" + buildAssetsURL("instagram.aa9c1646.svg");
const _imports_1 = "" + buildAssetsURL("facebook.bed82655.svg");
const _imports_2 = "" + buildAssetsURL("wikipedia.ebec8258.svg");
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const language = useCookie("language");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "contact" }, _attrs))}><div class="content">`);
      if (unref(language) == "dutch") {
        _push(`<h2>WAAR KAN JE ONS VINDEN?</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(language) == "english") {
        _push(`<h2>WHERE CAN YOU FIND US?</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ mobile: _ctx.$device.isMobile }, "floatleft"])}"><p> De Bolk (D.S.V. &quot;Nieuwe Delft&quot;)<br> Buitenwatersloot 1-3<br> 2613 TA Delft </p><p> Telefoon/Phone: 015 212 6012<br> E-mail: <a href="mailto:owee@nieuwedelft.nl">owee@nieuwedelft.nl</a><br> Website: <a href="http://www.debolk.nl" target="_blank">www.debolk.nl</a></p><div class="socials"><a href="https://www.instagram.com/dsv.nieuwebolk/" target="_blank" class="button2"><img${ssrRenderAttr("src", _imports_0)} alt="Instagram icon" width="50" height="50"></a><a href="https://www.facebook.com/debolk" target="_blank" class="button2"><img${ssrRenderAttr("src", _imports_1)} alt="Facebook icon" width="50" height="50"></a><a href="https://nl.wikipedia.org/wiki/D.S.V._Nieuwe_Delft" target="_blank" class="button2"><img${ssrRenderAttr("src", _imports_2)} alt="Wikipedia icon" width="50" height="50"></a></div></div><iframe class="${ssrRenderClass({ mobile: _ctx.$device.isMobile })}" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1736.582321526495!2d4.353183702808223!3d52.00873160295196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b5c6c9c297dd%3A0x4f0f19d2b4b48a70!2sDe%20Bolk%20(D.S.V.%20%22Nieuwe%20Delft%22)!5e0!3m2!1snl!2snl!4v1656592715654!5m2!1snl!2snl" width="400" height="300" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-cd3b6e64.mjs.map
