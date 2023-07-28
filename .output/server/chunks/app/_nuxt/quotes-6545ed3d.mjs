import { resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useCookie } from './cookie-0c62e30a.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const quotes = "";
module.exports = [
  {
    person: "Connor",
    quote: "Tijdens de OWee kwam ik vaak bij de Bolk om te ontspannen, of juist om iets ongelofelijk mafs te doen. Sindsdien is er weinig veranderd."
  },
  {
    person: "Luc",
    quote: "Iedereen is knettergek op zijn eigen manier, iedereen is zichzelf, maar staan open voor anderen"
  },
  {
    person: "Deww",
    quote: "De Bolk is gewoon top kek."
  },
  {
    person: "Ivo",
    quote: "Omdat als je hier lid bent je nog steeds goed kan studeren."
  },
  {
    person: "Christiaan",
    quote: "Omdat iedereen elkaar kent."
  },
  {
    person: "Vasco",
    quote: "Omdat je bij de Bolk alles kan maken"
  },
  {
    person: "Pia",
    quote: "Omdat je bij deze vereniging zowel een BlikBierKwartier als een Spa kan hebben."
  },
  {
    person: "Mees",
    quote: "De Bolk heeft mijn nieuwe fiets onomkeerbaar bekladderd tijdens de OWee. rip. Twee drankjes later was ik lid."
  },
  {
    person: "Linda",
    quote: "Voornamelijk omdat ik merkte dat mensen hier ook gewoon een beetje spelletjes spelen. Bij 3D twister ben ik hier terrecht gekomen, heb ik mijn bril verloren en ben ik hier blijven hangen."
  },
  {
    person: "Looka",
    quote: "Omdat ik elke avond van de OWee bij de Bolk belandde vanwege de toffe mensen. En natuurlijk de tosti's."
  },
  {
    person: "Douwe",
    quote: "Bolk is love, Bolk is life."
  },
  {
    person: "Kilian",
    quote: "Gezellige mensen, leuke activiteiten."
  },
  {
    person: "Simon",
    quote: "Ik heb me ingeschreven en dat bleek een goed idee te zijn."
  },
  {
    person: "Isa",
    quote: "Ik heb 3D twister gespeeld, daarna bier gedronken en heb me de volgende dag ingeschreven."
  },
  {
    person: "Marisa",
    quote: "Een combinatie van hartelijke gezelligheid en spelletjes."
  },
  {
    person: "Luka",
    quote: "Omdat je moeder."
  },
  {
    person: "Bas",
    quote: "De vier-uur cup a soup was wel een uitdaging."
  },
  {
    person: "Mathijs",
    quote: "Van alle bezochten verenigingen vond ik deze het best op onder andere de gezelschapsmentaliteit, open en hoe de communicatie met de andere leden hier gehouden wordt."
  },
  {
    person: "Emilio",
    quote: "Ik wou iets te doen hebben en kwam toen Vink tegen."
  },
  {
    person: "Vink",
    quote: "Ik was bezopen en zag een boot."
  },
  {
    person: "Jasper",
    quote: "Kom dan!"
  },
  {
    person: "Brendan",
    quote: "Leuke mensen."
  },
  {
    person: "Stephen",
    quote: "Leek mij wel grappig."
  },
  {
    person: "Flip",
    quote: "Hoewel iedereen vet passief-agresieve grappen maakt, is het een plek waar je zonder zorgen jezelf kan zijn."
  },
  {
    person: "Miguel",
    quote: "Ik werd meegesleept naar de BeginBBQ door studiegenoten en vond het vet gaaf. Ben sindsdien blijven plakken."
  }
];
const __default__ = {
  data() {
    return {
      quotes: quotes.sort(function() {
        return 0.5 - Math.random();
      })
    };
  },
  computed: {
    cardsamount: function() {
      switch (this.$mq) {
        case "mobile":
          return 1;
        case "twocards":
          return 2;
        case "threecards":
          return 3;
        case "fourcards":
          return 4;
        case "fivecards":
          return 5;
        case "desktop":
          return 5;
      }
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "quotes",
  __ssrInlineRender: true,
  setup(__props) {
    const language = useCookie("language", { maxAge: 100 * 24 * 60 * 60, default: () => {
      return "dutch";
    } });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_carousel = resolveComponent("carousel");
      const _component_slide = resolveComponent("slide");
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "quotes" }, _attrs))}>`);
      if (unref(language) == "dutch") {
        _push(`<h2 style="${ssrRenderStyle({ "color": "#068b8c !important" })}">WAAROM BEN JIJ HIER LID GEWORDEN?</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(language) == "english") {
        _push(`<h2 style="${ssrRenderStyle({ "color": "#068b8c !important" })}">WHY DID YOU BECOME A MEMBER?</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_carousel, {
        class: "carousel",
        perPage: _ctx.cardsamount,
        paginationEnabled: false,
        load74e8: true,
        navigationEnabled: true,
        navigationClickTargetSize: 5,
        paginationActiveColor: "#068b8c",
        navigationPrevLabel: " ",
        navigationNextLabel: " "
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(quotes), (i, index) => {
              _push2(ssrRenderComponent(_component_slide, {
                class: "slide",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="slide-container"${_scopeId2}><img class="photo"${ssrRenderAttr("src", `/quotes/${i.person}.jpg`)}${_scopeId2}><p${_scopeId2}>&quot;${ssrInterpolate(i.quote)}&quot;</p><br${_scopeId2}><i${_scopeId2}> - ${ssrInterpolate(i.person)}</i></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "slide-container" }, [
                        createVNode("img", {
                          class: "photo",
                          src: `/quotes/${i.person}.jpg`
                        }, null, 8, ["src"]),
                        createVNode("p", null, '"' + toDisplayString(i.quote) + '"', 1),
                        createVNode("br"),
                        createVNode("i", null, " - " + toDisplayString(i.person), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(quotes), (i, index) => {
                return openBlock(), createBlock(_component_slide, {
                  class: "slide",
                  key: index
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "slide-container" }, [
                      createVNode("img", {
                        class: "photo",
                        src: `/quotes/${i.person}.jpg`
                      }, null, 8, ["src"]),
                      createVNode("p", null, '"' + toDisplayString(i.quote) + '"', 1),
                      createVNode("br"),
                      createVNode("i", null, " - " + toDisplayString(i.person), 1)
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/quotes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=quotes-6545ed3d.mjs.map
