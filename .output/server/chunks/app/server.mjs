import { hasInjectionContext, getCurrentInstance, version, inject, ref, watchEffect, watch, useSSRContext, createApp, reactive, unref, provide, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, toRef, shallowRef, shallowReactive, isReadonly, defineAsyncComponent, isRef, isShallow, isReactive, toRaw, withCtx, mergeProps, nextTick, defineComponent, computed, h, Suspense, Transition } from 'vue';
import { $fetch } from 'ofetch';
import { createHooks } from 'hookable';
import { getContext, executeAsync } from 'unctx';
import { createMemoryHistory, createRouter, START_LOCATION, useRoute as useRoute$1, RouterView } from 'vue-router';
import { createError as createError$1, sanitizeStatusCode } from 'h3';
import { withQuery, hasProtocol, parseURL, joinURL } from 'ufo';
import { renderSSRHead } from '@unhead/ssr';
import { getActiveHead, createServerHead as createServerHead$1 } from 'unhead';
import { defineHeadPlugin } from '@unhead/shared';
import VueSmoothScroll from 'vue3-smooth-scroll';
import { Carousel, Slide } from 'vue3-carousel';
import { Vue3Mq } from 'vue3-mq';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
import { defu } from 'defu';
import { a as useRuntimeConfig$1 } from '../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.6.5";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => callWithNuxt(nuxtApp, fn),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const parallels = [];
  const errors = [];
  for (const plugin2 of plugins2) {
    const promise = applyPlugin(nuxtApp, plugin2);
    if (plugin2.parallel) {
      parallels.push(promise.catch((e) => errors.push(e)));
    } else {
      await promise;
    }
  }
  await Promise.all(parallels);
  if (errors.length) {
    throw errors[0];
  }
}
/*! @__NO_SIDE_EFFECTS__ */
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
/*! @__NO_SIDE_EFFECTS__ */
function useNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
/*! @__NO_SIDE_EFFECTS__ */
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
/*! @__NO_SIDE_EFFECTS__ */
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options == null ? void 0 : options.open) {
    return Promise.resolve();
  }
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, fullPath);
      async function redirect(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    const error = useError();
    if (false)
      ;
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const _routes = [
  {
    name: "contact",
    path: "/contact",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/contact-d00de8e4.mjs').then((m) => m.default || m)
  },
  {
    name: "imageheader",
    path: "/imageheader",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/imageheader-88e7b6ef.mjs').then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-13c35f33.mjs').then((m) => m.default || m)
  },
  {
    name: "kmt",
    path: "/kmt",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/kmt-7b28c25f.mjs').then((m) => m.default || m)
  },
  {
    name: "maintext",
    path: "/maintext",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/maintext-36bc4ca9.mjs').then((m) => m.default || m)
  },
  {
    name: "navbar",
    path: "/navbar",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/navbar-91bc2054.mjs').then((m) => m.default || m)
  },
  {
    name: "quotes",
    path: "/quotes",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/quotes-cb5c100b.mjs').then((m) => m.default || m)
  },
  {
    name: "schema",
    path: "/schema",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/schema-0149aaa7.mjs').then((m) => m.default || m)
  },
  {
    name: "sleepin",
    path: "/sleepin",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/sleepin-fed959f6.mjs').then((m) => m.default || m)
  },
  {
    name: "sponsors",
    path: "/sponsors",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/sponsors-0a6befa7.mjs').then((m) => m.default || m)
  },
  {
    name: "vereniging",
    path: "/vereniging",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/vereniging-68073538.mjs').then((m) => m.default || m)
  }
];
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [], "noscript": [] };
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(from, to) {
  const samePageComponent = to.matched.every((comp, index) => {
    var _a, _b, _c;
    return ((_a = comp.components) == null ? void 0 : _a.default) === ((_c = (_b = from.matched[index]) == null ? void 0 : _b.components) == null ? void 0 : _c.default);
  });
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(from.params) !== JSON.stringify(to.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b;
    let __temp, __restore;
    let routerBase = useRuntimeConfig().app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        var _a2;
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
        return (_a2 = routerOptions.scrollBehavior) == null ? void 0 : _a2.call(routerOptions, to, START_LOCATION, startPosition || savedPosition);
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const initialLayout = useState("_layout");
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout.value;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          if (Array.isArray(componentMiddleware)) {
            for (const entry2 of componentMiddleware) {
              middlewareEntries.add(entry2);
            }
          } else {
            middlewareEntries.add(componentMiddleware);
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(() => {
      delete nuxtApp._processingMiddleware;
    });
    router.afterEach(async (to, _from, failure) => {
      var _a2;
      delete nuxtApp._processingMiddleware;
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0 && !((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
const Vue3 = version.startsWith("3");
const headSymbol = "usehead";
function injectHead() {
  return getCurrentInstance() && inject(headSymbol) || getActiveHead();
}
function vueInstall(head) {
  const plugin2 = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin2.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1({
    ...options,
    plugins: [
      VueReactiveUseHeadPlugin(),
      ...(options == null ? void 0 : options.plugins) || []
    ]
  });
  head.install = vueInstall(head);
  return head;
}
function VueReactiveUseHeadPlugin() {
  return defineHeadPlugin({
    hooks: {
      "entries:resolve": function(ctx) {
        for (const entry2 of ctx.entries)
          entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
      }
    }
  });
}
function clientUseHead(input, options = {}) {
  const head = injectHead();
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
function serverUseHead(input, options = {}) {
  const head = injectHead();
  return head.push(input, options);
}
function useHead(input, options = {}) {
  var _a;
  const head = injectHead();
  if (head) {
    const isBrowser = !!((_a = head.resolvedOptions) == null ? void 0 : _a.document);
    if (options.mode === "server" && isBrowser || options.mode === "client" && !isBrowser)
      return;
    return isBrowser ? clientUseHead(input, options) : serverUseHead(input, options);
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  setup(nuxtApp) {
    const createHead = createServerHead;
    const head = createHead();
    head.push(appHead);
    nuxtApp.vueApp.use(head);
    {
      nuxtApp.ssrContext.renderMeta = async () => {
        const meta = await renderSSRHead(head);
        return {
          ...meta,
          bodyScriptsPrepend: meta.bodyTagsOpen,
          // resolves naming difference with NuxtMeta and Unhead
          bodyScripts: meta.bodyTags
        };
      };
    }
  }
});
function useRequestHeaders(include) {
  var _a;
  const headers = ((_a = useNuxtApp().ssrContext) == null ? void 0 : _a.event.node.req.headers) ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.map((key) => key.toLowerCase()).filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const REGEX_MOBILE1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
const REGEX_MOBILE2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
function isMobile(a) {
  return REGEX_MOBILE1.test(a) || REGEX_MOBILE2.test(a.slice(0, 4));
}
const REGEX_MOBILE_OR_TABLET1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
const REGEX_MOBILE_OR_TABLET2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
const REGEX_CRAWLER = /Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|YandexBot|YandexImages|YandexAccessibilityBot|YandexMobileBot|YandexMetrika|YandexTurbo|YandexImageResizer|YandexVideo|YandexAdNet|YandexBlogs|YandexCalendar|YandexDirect|YandexFavicons|YaDirectFetcher|YandexForDomain|YandexMarket|YandexMedia|YandexMobileScreenShotBot|YandexNews|YandexOntoDB|YandexPagechecker|YandexPartner|YandexRCA|YandexSearchShop|YandexSitelinks|YandexSpravBot|YandexTracker|YandexVertis|YandexVerticals|YandexWebmaster|YandexScreenshotBot|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|TurnitinBot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|seznambot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest.com.bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|pingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb.iss.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot.AraTurka.com|bot-pge.chlooe.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|Seekport Crawler|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider.com|GroupHigh\/|theoldreader.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|Curebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge/;
function isMobileOrTablet(a) {
  return REGEX_MOBILE_OR_TABLET1.test(a) || REGEX_MOBILE_OR_TABLET2.test(a.slice(0, 4));
}
function isIos(a) {
  return /iPad|iPhone|iPod/.test(a);
}
function isAndroid(a) {
  return /android/i.test(a);
}
function isWindows(a) {
  return /Windows/.test(a);
}
function isMacOS(a) {
  return /Mac OS X/.test(a);
}
const browsers = [
  { name: "Samsung", test: /SamsungBrowser/i },
  { name: "Edge", test: /edg([ea]|ios|)\//i },
  { name: "Firefox", test: /firefox|iceweasel|fxios/i },
  { name: "Chrome", test: /chrome|crios|crmo/i },
  { name: "Safari", test: /safari|applewebkit/i }
];
function getBrowserName(a) {
  for (const b of browsers) {
    if (b.test.test(a)) {
      return b.name;
    }
  }
  return "";
}
function generateFlags(headers, userAgent) {
  let mobile = false;
  let mobileOrTablet = false;
  let ios = false;
  let android = false;
  if (userAgent === "Amazon CloudFront") {
    if (headers["cloudfront-is-mobile-viewer"] === "true") {
      mobile = true;
      mobileOrTablet = true;
    }
    if (headers["cloudfront-is-tablet-viewer"] === "true") {
      mobile = false;
      mobileOrTablet = true;
    }
    if (headers["cloudfront-is-desktop-viewer"] === "true") {
      mobile = false;
      mobileOrTablet = false;
    }
    if (headers["cloudfront-is-ios-viewer"] === "true") {
      ios = true;
    }
    if (headers["cloudfront-is-android-viewer"] === "true") {
      android = true;
    }
  } else if (headers && headers["cf-device-type"]) {
    switch (headers["cf-device-type"]) {
      case "mobile":
        mobile = true;
        mobileOrTablet = true;
        break;
      case "tablet":
        mobile = false;
        mobileOrTablet = true;
        break;
      case "desktop":
        mobile = false;
        mobileOrTablet = false;
        break;
    }
  } else {
    mobile = isMobile(userAgent);
    mobileOrTablet = isMobileOrTablet(userAgent);
    ios = isIos(userAgent);
    android = isAndroid(userAgent);
  }
  const windows = isWindows(userAgent);
  const macOS = isMacOS(userAgent);
  const browserName = getBrowserName(userAgent);
  const isSafari = browserName === "Safari";
  const isFirefox = browserName === "Firefox";
  const isEdge = browserName === "Edge";
  const isChrome = browserName === "Chrome";
  const isSamsung = browserName === "Samsung";
  const isCrawler = REGEX_CRAWLER.test(userAgent);
  return {
    userAgent,
    isMobile: mobile,
    isMobileOrTablet: mobileOrTablet,
    isTablet: !mobile && mobileOrTablet,
    isDesktop: !mobileOrTablet,
    isIos: ios,
    isAndroid: android,
    isWindows: windows,
    isMacOS: macOS,
    isApple: macOS || ios,
    isDesktopOrTablet: !mobile,
    isSafari,
    isFirefox,
    isEdge,
    isChrome,
    isSamsung,
    isCrawler
  };
}
const plugin_t2GMTTFnMT = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const DEFAULT_USER_AGENT = config.public.device.defaultUserAgent;
  const REFRESH_ON_RESIZE = config.public.device.refreshOnResize;
  if (nuxtApp.ssrContext) {
    const headers = useRequestHeaders();
    const userAgent2 = headers["user-agent"] || DEFAULT_USER_AGENT;
    const flags2 = reactive(generateFlags(headers, userAgent2));
    return {
      provide: {
        device: flags2
      }
    };
  }
  const userAgent = navigator.userAgent || DEFAULT_USER_AGENT;
  const flags = reactive(generateFlags({}, userAgent));
  if (REFRESH_ON_RESIZE) {
    window.addEventListener("resize", () => {
      setTimeout(() => {
        const newFlags = generateFlags({}, navigator.userAgent || DEFAULT_USER_AGENT);
        Object.entries(newFlags).forEach((entry2) => {
          const [key, value] = entry2;
          flags[key] = value;
        });
      }, 50);
    });
  }
  return {
    provide: {
      device: flags
    }
  };
});
const vue_smooth_scroll_1lTJx8nNoG = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSmoothScroll);
});
const vue_carousel_FfT98ZyCh0 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Carousel);
  nuxtApp.vueApp.use(Slide);
});
const vue_mq_qCRbiL90e7 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Mq, {
    breakpoints: {
      mobile: 0,
      twocards: 770,
      threecards: 1088,
      fourcards: 1300,
      desktop: 1500
    }
  });
});
const plugins = [
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  unhead_KgADcZ0jPj,
  plugin_t2GMTTFnMT,
  vue_smooth_scroll_1lTJx8nNoG,
  vue_carousel_FfT98ZyCh0,
  vue_mq_qCRbiL90e7
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
const layouts = {
  default: () => import('./_nuxt/default-21904a1d.mjs').then((m) => m.default || m)
};
const LayoutLoader = /* @__PURE__ */ defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => unref(props.name) ?? route.meta.layout ?? "default");
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            // @ts-expect-error seems to be an issue in vue types
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = /* @__PURE__ */ defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        // @ts-expect-error seems to be an issue in vue types
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const RouteProvider = /* @__PURE__ */ defineComponent({
  name: "RouteProvider",
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, {
                // @ts-expect-error seems to be an issue in vue types
                default: () => h(RouteProvider, {
                  key,
                  vnode: routeProps.Component,
                  route: routeProps.route,
                  renderKey: key,
                  trackRootNodes: hasTransition,
                  vnodeRef: pageRef
                })
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    (_error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/error-404-bf75b8af.mjs').then((r) => r.default || r));
    const _Error = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/error-500-8b5c91ad.mjs').then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = _sfc_main$1;
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/island-renderer-5f6c591d.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const { islandContext } = nuxtApp.ssrContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { _export_sfc as _, useHead as a, useRequestEvent as b, createError as c, useNuxtApp as d, entry$1 as default, navigateTo as n, useRouter as u };
//# sourceMappingURL=server.mjs.map
