import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { resolveDirective, unref, mergeProps, useSSRContext } from 'vue';
import { u as useCookie } from './cookie-0c62e30a.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrGetDirectiveProps, ssrRenderAttr } from 'vue/server-renderer';
import { useMq } from 'vue3-mq';
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
import 'vue3-smooth-scroll';
import 'vue3-carousel';

const _imports_0 = "" + buildAssetsURL("united-kingdom.1a55a5ce.svg");
const _imports_1 = "" + buildAssetsURL("netherlands.e3f35579.svg");
const __default__ = {
  data() {
    return {
      burger: false
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const mq = useMq();
    const language = useCookie("language", { maxAge: 100 * 24 * 60 * 60, default: () => {
      return "dutch";
    } });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_smooth_scroll = resolveDirective("smooth-scroll");
      _push(`<div${ssrRenderAttrs(_attrs)}><nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation"><div class="navbar-brand">`);
      if (_ctx.$device.isMobile) {
        _push(`<h2 class="navtitle">ALS EEN VIS IN HET WATER!</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a role="button" class="${ssrRenderClass([{ "is-active": _ctx.burger }, "navbar-burger"])}"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></a></div><div class="${ssrRenderClass([{ "is-down": _ctx.burger, "navmenusmall": unref(mq).current !== "threecards" && unref(mq).current !== "fourcards" && unref(mq).current !== "desktop" }, "navbar-menu is-active"])}">`);
      if (unref(language) === "dutch") {
        _push(`<div class="navbar-start"><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({ href: "#imageheader" }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>HOME</a></div><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({ href: "#main" }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>OWEE</a></div><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({ href: "#vereniging" }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>VERENIGING</a></div><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({ href: "#schema" }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>PROGRAMMA</a></div><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({ href: "#sleepin" }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>SLEEP-INN</a></div><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({ href: "#kmt" }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>KMT</a></div><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({ href: "#quotes" }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>QUOTES</a></div><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({ href: "#contact" }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>CONTACT</a></div><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({
          href: "https://website.debolk.nl/inschrijven",
          target: "_blank"
        }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>SCHRIJF JE IN!</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(language) === "english") {
        _push(`<div class="navbar-start"><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({ href: "#imageheader" }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>HOME</a></div><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({ href: "#main" }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>OWEE</a></div><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({ href: "#vereniging" }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>ASSOCIATION</a></div><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({ href: "#schema" }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>SCHEDULE</a></div><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({ href: "#sleepin" }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>SLEEP-INN</a></div><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({ href: "#kmt" }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>KMT</a></div><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({ href: "#quotes" }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>QUOTES</a></div><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({ href: "#contact" }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>CONTACT</a></div><div class="menuitemcontainer"><a${ssrRenderAttrs(mergeProps({
          href: "https://website.debolk.nl/sign-up",
          target: "_blank"
        }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))}>SIGN UP!</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="navbar-end">`);
      if (unref(language) == "dutch") {
        _push(`<div class="navbar-start"><div class="menuitemcontainer"><a><img${ssrRenderAttr("src", _imports_0)} class="flag"> ENGLISH</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(language) == "english") {
        _push(`<div class="navbar-start"><div class="menuitemcontainer"><a><img${ssrRenderAttr("src", _imports_1)} class="flag"> NEDERLANDS</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></nav></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=navbar-91bc2054.mjs.map
