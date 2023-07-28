globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "device": {
      "enabled": true,
      "defaultUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36",
      "refreshOnResize": false
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/android-icon-192x192.png": {
    "type": "image/png",
    "etag": "\"2fd8-D89lQ9USL9L+wqiyQqLFx3wvJTA\"",
    "mtime": "2023-07-28T16:20:54.481Z",
    "size": 12248,
    "path": "../public/android-icon-192x192.png"
  },
  "/apple-icon-180x180.png": {
    "type": "image/png",
    "etag": "\"2c84-jFIx5PMSGW/vvcFcHJE2s7S0L64\"",
    "mtime": "2023-07-28T16:20:54.481Z",
    "size": 11396,
    "path": "../public/apple-icon-180x180.png"
  },
  "/browserconfig.xml": {
    "type": "application/xml",
    "etag": "\"119-hTOJtsQnOWWJnrEwLWZeuROV/Qw\"",
    "mtime": "2023-07-28T16:20:54.481Z",
    "size": 281,
    "path": "../public/browserconfig.xml"
  },
  "/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"613-2uMhp7rJHUGaDuJMmAjRdJL5HGU\"",
    "mtime": "2023-07-28T16:20:54.481Z",
    "size": 1555,
    "path": "../public/favicon-32x32.png"
  },
  "/favicon-96x96.png": {
    "type": "image/png",
    "etag": "\"157d-M0zKAL6emT3JpnoHsVx1o08K2Ds\"",
    "mtime": "2023-07-28T16:20:54.481Z",
    "size": 5501,
    "path": "../public/favicon-96x96.png"
  },
  "/favicon.svg": {
    "type": "image/svg+xml",
    "etag": "\"2171e-z1L4uB7WnGdhevhmYWTfYmeIum4\"",
    "mtime": "2023-07-28T16:20:54.481Z",
    "size": 136990,
    "path": "../public/favicon.svg"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": "\"2d0-0R/r+ecIqeEbruN+19xemZAlgL4\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 720,
    "path": "../public/manifest.json"
  },
  "/_nuxt/contact.5b3f69fb.js": {
    "type": "application/javascript",
    "etag": "\"7b4-TB0TAnMFeWYTqkKydUGD6Sw7k7Y\"",
    "mtime": "2023-07-28T16:20:54.475Z",
    "size": 1972,
    "path": "../public/_nuxt/contact.5b3f69fb.js"
  },
  "/_nuxt/contact.92b0844c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"247-P5zyU9iBw0yygPZ5YFNApqAL6fI\"",
    "mtime": "2023-07-28T16:20:54.475Z",
    "size": 583,
    "path": "../public/_nuxt/contact.92b0844c.css"
  },
  "/_nuxt/cookie.cb9ef82f.js": {
    "type": "application/javascript",
    "etag": "\"1cbc-ODBZxRNLALHBRLW3RKhKyG+ILUY\"",
    "mtime": "2023-07-28T16:20:54.475Z",
    "size": 7356,
    "path": "../public/_nuxt/cookie.cb9ef82f.js"
  },
  "/_nuxt/default.6de44eb1.js": {
    "type": "application/javascript",
    "etag": "\"bb-MtaIH0W4cBgywoR3xpvtQ2H6nwI\"",
    "mtime": "2023-07-28T16:20:54.475Z",
    "size": 187,
    "path": "../public/_nuxt/default.6de44eb1.js"
  },
  "/_nuxt/entry.cf351e42.js": {
    "type": "application/javascript",
    "etag": "\"2f367-qUgZuHpqakkCXk8U2fJV2V9yGrw\"",
    "mtime": "2023-07-28T16:20:54.475Z",
    "size": 193383,
    "path": "../public/_nuxt/entry.cf351e42.js"
  },
  "/_nuxt/error-404.783b97d7.js": {
    "type": "application/javascript",
    "etag": "\"1983-/KKK3/icjztFQSudOaipslZmYoY\"",
    "mtime": "2023-07-28T16:20:54.471Z",
    "size": 6531,
    "path": "../public/_nuxt/error-404.783b97d7.js"
  },
  "/_nuxt/error-404.7fc72018.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-iNt1cqPQ0WDudfCTZVQd31BeRGs\"",
    "mtime": "2023-07-28T16:20:54.471Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.7fc72018.css"
  },
  "/_nuxt/error-500.c5df6088.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-ByRo+49BgcevWdRjJy3CMx2IA5k\"",
    "mtime": "2023-07-28T16:20:54.471Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.c5df6088.css"
  },
  "/_nuxt/error-500.e443317e.js": {
    "type": "application/javascript",
    "etag": "\"756-4kdd7PJdb+XHd+VahmdV8D3n+Cg\"",
    "mtime": "2023-07-28T16:20:54.471Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.e443317e.js"
  },
  "/_nuxt/facebook.bed82655.svg": {
    "type": "image/svg+xml",
    "etag": "\"5f1-eeR6bJKaYefrQLUWsoYxQ9ABPFE\"",
    "mtime": "2023-07-28T16:20:54.471Z",
    "size": 1521,
    "path": "../public/_nuxt/facebook.bed82655.svg"
  },
  "/_nuxt/header.d616ff8f.jpg": {
    "type": "image/jpeg",
    "etag": "\"38298-IQHsj0zplPAJEXPDg8yUr0BF6ss\"",
    "mtime": "2023-07-28T16:20:54.471Z",
    "size": 230040,
    "path": "../public/_nuxt/header.d616ff8f.jpg"
  },
  "/_nuxt/imageheader.0d3eb0dd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f1-7V6rNebc/Uz9swmBbtmz464LG7M\"",
    "mtime": "2023-07-28T16:20:54.471Z",
    "size": 497,
    "path": "../public/_nuxt/imageheader.0d3eb0dd.css"
  },
  "/_nuxt/imageheader.dd909006.js": {
    "type": "application/javascript",
    "etag": "\"191-eNjOyfAYzwOhMYQ0qA5dt9UxJns\"",
    "mtime": "2023-07-28T16:20:54.471Z",
    "size": 401,
    "path": "../public/_nuxt/imageheader.dd909006.js"
  },
  "/_nuxt/index.4310e3b5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"58a-2QRf2QZCUivUD+Ik8Nb1tCLNEzY\"",
    "mtime": "2023-07-28T16:20:54.471Z",
    "size": 1418,
    "path": "../public/_nuxt/index.4310e3b5.css"
  },
  "/_nuxt/index.ecb737a1.js": {
    "type": "application/javascript",
    "etag": "\"5c2-NcHM2hIeFUyI461Nb6/K0cYL5rA\"",
    "mtime": "2023-07-28T16:20:54.471Z",
    "size": 1474,
    "path": "../public/_nuxt/index.ecb737a1.js"
  },
  "/_nuxt/instagram.aa9c1646.svg": {
    "type": "image/svg+xml",
    "etag": "\"1601-Jk6Vz/CUo97ErQv8jPbFCG6e5XY\"",
    "mtime": "2023-07-28T16:20:54.471Z",
    "size": 5633,
    "path": "../public/_nuxt/instagram.aa9c1646.svg"
  },
  "/_nuxt/kmt.79fc0cf0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"67-Y0baf78BpDMHEN0RpvuCZdZYaAw\"",
    "mtime": "2023-07-28T16:20:54.471Z",
    "size": 103,
    "path": "../public/_nuxt/kmt.79fc0cf0.css"
  },
  "/_nuxt/kmt.da5cc75e.js": {
    "type": "application/javascript",
    "etag": "\"96c-Uu8HSAiOsIoVVCO95Ddf0J0Gizw\"",
    "mtime": "2023-07-28T16:20:54.471Z",
    "size": 2412,
    "path": "../public/_nuxt/kmt.da5cc75e.js"
  },
  "/_nuxt/logo.1e2073ca.svg": {
    "type": "image/svg+xml",
    "etag": "\"14271-wVVZJOvawQhHjlPZkE+0TRs5sbo\"",
    "mtime": "2023-07-28T16:20:54.471Z",
    "size": 82545,
    "path": "../public/_nuxt/logo.1e2073ca.svg"
  },
  "/_nuxt/maintext.1c5dd9e3.js": {
    "type": "application/javascript",
    "etag": "\"846-dT1gxfOOW8e5c1/qoXCO+laqMao\"",
    "mtime": "2023-07-28T16:20:54.471Z",
    "size": 2118,
    "path": "../public/_nuxt/maintext.1c5dd9e3.js"
  },
  "/_nuxt/maintext.50b407da.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"160-vBu7Q0qoQCzzN/rOaSnck1Tvah4\"",
    "mtime": "2023-07-28T16:20:54.471Z",
    "size": 352,
    "path": "../public/_nuxt/maintext.50b407da.css"
  },
  "/_nuxt/mwtransportservice.2cb1f7ac.svg": {
    "type": "image/svg+xml",
    "etag": "\"5024fb-ym5eYz1ZR7Upe3fB1Si67WBqoKY\"",
    "mtime": "2023-07-28T16:20:54.468Z",
    "size": 5252347,
    "path": "../public/_nuxt/mwtransportservice.2cb1f7ac.svg"
  },
  "/_nuxt/navbar.41aa6fa6.js": {
    "type": "application/javascript",
    "etag": "\"1121-ONay3fbDAtYRy2VkiUqrzi8684E\"",
    "mtime": "2023-07-28T16:20:54.468Z",
    "size": 4385,
    "path": "../public/_nuxt/navbar.41aa6fa6.js"
  },
  "/_nuxt/navbar.b17ecea5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"311-L7YojuUJ82Syv869u79OY1zxSgQ\"",
    "mtime": "2023-07-28T16:20:54.468Z",
    "size": 785,
    "path": "../public/_nuxt/navbar.b17ecea5.css"
  },
  "/_nuxt/netherlands.e3f35579.svg": {
    "type": "image/svg+xml",
    "etag": "\"347-CY4+WRerhHpZ5aUKznbqJayP784\"",
    "mtime": "2023-07-28T16:20:54.468Z",
    "size": 839,
    "path": "../public/_nuxt/netherlands.e3f35579.svg"
  },
  "/_nuxt/quotes.43db8493.js": {
    "type": "application/javascript",
    "etag": "\"ef3-Ohijwjpywzcged4OKoNR4Pk84B4\"",
    "mtime": "2023-07-28T16:20:54.468Z",
    "size": 3827,
    "path": "../public/_nuxt/quotes.43db8493.js"
  },
  "/_nuxt/quotes.50674737.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d9-2Jy5pCnNU4REUFFlQlVmmAgG8Iw\"",
    "mtime": "2023-07-28T16:20:54.465Z",
    "size": 729,
    "path": "../public/_nuxt/quotes.50674737.css"
  },
  "/_nuxt/schema.d1467ad8.js": {
    "type": "application/javascript",
    "etag": "\"3eaf-9+49AMThoohedY/WAiEJAk2EFKA\"",
    "mtime": "2023-07-28T16:20:54.465Z",
    "size": 16047,
    "path": "../public/_nuxt/schema.d1467ad8.js"
  },
  "/_nuxt/schema.eedcfa32.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5c1-1/INBFsoKYv0ht1K8SkLaO+a+As\"",
    "mtime": "2023-07-28T16:20:54.465Z",
    "size": 1473,
    "path": "../public/_nuxt/schema.eedcfa32.css"
  },
  "/_nuxt/sleepin.2a2fc065.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2-eSDQBP6o9bNg23IIaWME4egYJI8\"",
    "mtime": "2023-07-28T16:20:54.465Z",
    "size": 226,
    "path": "../public/_nuxt/sleepin.2a2fc065.css"
  },
  "/_nuxt/sleepin.bcdbfece.js": {
    "type": "application/javascript",
    "etag": "\"785-X+XyCBmWt15Bc7VfSsjXCPFibOA\"",
    "mtime": "2023-07-28T16:20:54.465Z",
    "size": 1925,
    "path": "../public/_nuxt/sleepin.bcdbfece.js"
  },
  "/_nuxt/soos.d27e01f3.svg": {
    "type": "image/svg+xml",
    "etag": "\"7e88-3Xl7dF4zagjnTxboWg+Chhy3npQ\"",
    "mtime": "2023-07-28T16:20:54.465Z",
    "size": 32392,
    "path": "../public/_nuxt/soos.d27e01f3.svg"
  },
  "/_nuxt/sponsors.638b0c94.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"23c-MDoIqFui3SSZHlgLL6gHConYWgw\"",
    "mtime": "2023-07-28T16:20:54.465Z",
    "size": 572,
    "path": "../public/_nuxt/sponsors.638b0c94.css"
  },
  "/_nuxt/sponsors.7e18bd32.js": {
    "type": "application/javascript",
    "etag": "\"385-LmF9m8TWCnUCTNNP0ZBTChpZjpw\"",
    "mtime": "2023-07-28T16:20:54.465Z",
    "size": 901,
    "path": "../public/_nuxt/sponsors.7e18bd32.js"
  },
  "/_nuxt/triangle-primary.e81447b7.svg": {
    "type": "image/svg+xml",
    "etag": "\"785-ocV3ZVOtGh2eQxPc0OFhC2EdhJk\"",
    "mtime": "2023-07-28T16:20:54.465Z",
    "size": 1925,
    "path": "../public/_nuxt/triangle-primary.e81447b7.svg"
  },
  "/_nuxt/triangle-secondary.ff209aed.svg": {
    "type": "image/svg+xml",
    "etag": "\"786-pu+oXa8dWcAXrZq3EjrWU6a5b70\"",
    "mtime": "2023-07-28T16:20:54.465Z",
    "size": 1926,
    "path": "../public/_nuxt/triangle-secondary.ff209aed.svg"
  },
  "/_nuxt/united-kingdom.1a55a5ce.svg": {
    "type": "image/svg+xml",
    "etag": "\"a27-cjWevzB8wgqhMSavesfBkywwjI8\"",
    "mtime": "2023-07-28T16:20:54.465Z",
    "size": 2599,
    "path": "../public/_nuxt/united-kingdom.1a55a5ce.svg"
  },
  "/_nuxt/vereniging.2654afbb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"98-qKD/+D3M6Cea8Ar8WroLvnrmmGY\"",
    "mtime": "2023-07-28T16:20:54.465Z",
    "size": 152,
    "path": "../public/_nuxt/vereniging.2654afbb.css"
  },
  "/_nuxt/vereniging.6cc11e8a.js": {
    "type": "application/javascript",
    "etag": "\"11c2-596wZqyx2Fh/JcQ6KMGtZlVg/rE\"",
    "mtime": "2023-07-28T16:20:54.465Z",
    "size": 4546,
    "path": "../public/_nuxt/vereniging.6cc11e8a.js"
  },
  "/_nuxt/wikipedia.ebec8258.svg": {
    "type": "image/svg+xml",
    "etag": "\"3053a-DLYsMv+F5PUlOVd+UUYysE4G0kc\"",
    "mtime": "2023-07-28T16:20:54.465Z",
    "size": 197946,
    "path": "../public/_nuxt/wikipedia.ebec8258.svg"
  },
  "/fonts/BIERSTADT_B.ttf": {
    "type": "font/ttf",
    "etag": "\"135b0-llr2NKbsBJRpGzfH3GA/Sho9mjw\"",
    "mtime": "2023-07-28T16:20:54.481Z",
    "size": 79280,
    "path": "../public/fonts/BIERSTADT_B.ttf"
  },
  "/fonts/BIERSTADT_BI.ttf": {
    "type": "font/ttf",
    "etag": "\"13d7c-yWHrpnz6zREDND08d9w8I+Gc0bQ\"",
    "mtime": "2023-07-28T16:20:54.481Z",
    "size": 81276,
    "path": "../public/fonts/BIERSTADT_BI.ttf"
  },
  "/fonts/BTTF.ttf": {
    "type": "font/ttf",
    "etag": "\"52a4-hLaPtfzSXKOq72kFMst7INYuLsc\"",
    "mtime": "2023-07-28T16:20:54.481Z",
    "size": 21156,
    "path": "../public/fonts/BTTF.ttf"
  },
  "/fonts/Bob_Sponge.ttf": {
    "type": "font/ttf",
    "etag": "\"338c-zcuvQvDNagfmB8JlZOs9LIzgd+w\"",
    "mtime": "2023-07-28T16:20:54.481Z",
    "size": 13196,
    "path": "../public/fonts/Bob_Sponge.ttf"
  },
  "/fonts/STL.otf": {
    "type": "font/otf",
    "etag": "\"6aa3c-R8CP+MPwk/cFg2yQIRUg5GnQQs0\"",
    "mtime": "2023-07-28T16:20:54.481Z",
    "size": 436796,
    "path": "../public/fonts/STL.otf"
  },
  "/js/fitty.min.js": {
    "type": "application/javascript",
    "etag": "\"e24-6GOgAHpt61uAL/ZD5u6m27/5ggI\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 3620,
    "path": "../public/js/fitty.min.js"
  },
  "/quotes/Bas.jpg": {
    "type": "image/jpeg",
    "etag": "\"1deac-R/ageWx2vY/QTsI3n7BrMkh8UsI\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 122540,
    "path": "../public/quotes/Bas.jpg"
  },
  "/quotes/Brendan.jpg": {
    "type": "image/jpeg",
    "etag": "\"60f6e-Ys9eIPfFtWQ3fF2+oELfNQoLaDM\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 397166,
    "path": "../public/quotes/Brendan.jpg"
  },
  "/quotes/Christiaan.jpg": {
    "type": "image/jpeg",
    "etag": "\"3b5e-L/z4xVtpmrHsgg3aWnYENSbxVE8\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 15198,
    "path": "../public/quotes/Christiaan.jpg"
  },
  "/quotes/Connor.jpg": {
    "type": "image/jpeg",
    "etag": "\"36b7-JLiszKQMOs7E0T+5iUwry6yG0W8\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 14007,
    "path": "../public/quotes/Connor.jpg"
  },
  "/quotes/Deime.jpg": {
    "type": "image/jpeg",
    "etag": "\"2b81-T3c80I06X9NQbRFlGXs3QOQN97Y\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 11137,
    "path": "../public/quotes/Deime.jpg"
  },
  "/quotes/Deww.jpg": {
    "type": "image/jpeg",
    "etag": "\"463f-NMbxqJYUCaLtZm7QikxzyppJz1Y\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 17983,
    "path": "../public/quotes/Deww.jpg"
  },
  "/quotes/Douwe.jpg": {
    "type": "image/jpeg",
    "etag": "\"319e-jNFeZPX6IXxaFtmumiDXmmXeZdc\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 12702,
    "path": "../public/quotes/Douwe.jpg"
  },
  "/quotes/Emilio.jpg": {
    "type": "image/jpeg",
    "etag": "\"93c0-2/UFu/y3l1aVFLAjVLb1Wd/EAgs\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 37824,
    "path": "../public/quotes/Emilio.jpg"
  },
  "/quotes/Flip.jpg": {
    "type": "image/jpeg",
    "etag": "\"31428-olNZwa1s8ajtUGTVX2tN/eQwULM\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 201768,
    "path": "../public/quotes/Flip.jpg"
  },
  "/quotes/Isa.jpg": {
    "type": "image/jpeg",
    "etag": "\"1eb70-q+atXTMJSqmwUds48QA6JXjstN4\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 125808,
    "path": "../public/quotes/Isa.jpg"
  },
  "/quotes/Ivo.jpg": {
    "type": "image/jpeg",
    "etag": "\"5183-F4/7F4HrImyiTwBd8JGnZrEJ6A0\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 20867,
    "path": "../public/quotes/Ivo.jpg"
  },
  "/quotes/Jasper.jpg": {
    "type": "image/jpeg",
    "etag": "\"3fbe8-CWe/cWuLu4QGAk4h+L4tvqAfEtk\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 261096,
    "path": "../public/quotes/Jasper.jpg"
  },
  "/quotes/Kilian.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c7eb-dAcRLkvdiC99UrNcUqTqMpTe7V8\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 116715,
    "path": "../public/quotes/Kilian.jpg"
  },
  "/quotes/Linda.jpg": {
    "type": "image/jpeg",
    "etag": "\"5437-MPq75alawup4YdNuTO0IRpYz7oE\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 21559,
    "path": "../public/quotes/Linda.jpg"
  },
  "/quotes/Looka.jpg": {
    "type": "image/jpeg",
    "etag": "\"4cd2-/8v1g54vQXzewssJYYlN/NtC4us\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 19666,
    "path": "../public/quotes/Looka.jpg"
  },
  "/quotes/Luc.jpg": {
    "type": "image/jpeg",
    "etag": "\"4509-Le69qqvAcMxZqp+jUxzVkVtrIOs\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 17673,
    "path": "../public/quotes/Luc.jpg"
  },
  "/quotes/Luka.jpg": {
    "type": "image/jpeg",
    "etag": "\"2cbbf-HsNdcG+6JZl3SK0uBFN+M3/i/HY\"",
    "mtime": "2023-07-28T16:20:54.478Z",
    "size": 183231,
    "path": "../public/quotes/Luka.jpg"
  },
  "/quotes/Marisa.jpg": {
    "type": "image/jpeg",
    "etag": "\"184cf-wB65+rPS4mxY6LKr27h2bjuwFRg\"",
    "mtime": "2023-07-28T16:20:54.475Z",
    "size": 99535,
    "path": "../public/quotes/Marisa.jpg"
  },
  "/quotes/Mathijs.jpg": {
    "type": "image/jpeg",
    "etag": "\"4f1e9-t4sXDN77S7EWocIlTOO5erbYa4U\"",
    "mtime": "2023-07-28T16:20:54.475Z",
    "size": 324073,
    "path": "../public/quotes/Mathijs.jpg"
  },
  "/quotes/Mees.jpg": {
    "type": "image/jpeg",
    "etag": "\"375b-w38+oUKVaT26KQbpt4xJClVWr/c\"",
    "mtime": "2023-07-28T16:20:54.475Z",
    "size": 14171,
    "path": "../public/quotes/Mees.jpg"
  },
  "/quotes/Miguel.jpg": {
    "type": "image/jpeg",
    "etag": "\"27894-1/2yDJUYHDERJeHObNk6gXY0MoI\"",
    "mtime": "2023-07-28T16:20:54.475Z",
    "size": 161940,
    "path": "../public/quotes/Miguel.jpg"
  },
  "/quotes/Pia.jpg": {
    "type": "image/jpeg",
    "etag": "\"3fa6-mtcPHbAy7as8FkKUSSmmEikqFnw\"",
    "mtime": "2023-07-28T16:20:54.475Z",
    "size": 16294,
    "path": "../public/quotes/Pia.jpg"
  },
  "/quotes/Simon.jpg": {
    "type": "image/jpeg",
    "etag": "\"3f072-QoOzTXcKBQFy/ouU9NNvQuEZ1jo\"",
    "mtime": "2023-07-28T16:20:54.475Z",
    "size": 258162,
    "path": "../public/quotes/Simon.jpg"
  },
  "/quotes/Stephen.jpg": {
    "type": "image/jpeg",
    "etag": "\"3d01a-GFghNLvKIFGK6erM0rUzTqZHoA0\"",
    "mtime": "2023-07-28T16:20:54.475Z",
    "size": 249882,
    "path": "../public/quotes/Stephen.jpg"
  },
  "/quotes/Vasco.jpg": {
    "type": "image/jpeg",
    "etag": "\"2e83-KcIPDZA09ioJT6wtjVNNZt+aJfU\"",
    "mtime": "2023-07-28T16:20:54.475Z",
    "size": 11907,
    "path": "../public/quotes/Vasco.jpg"
  },
  "/quotes/Vink.jpg": {
    "type": "image/jpeg",
    "etag": "\"f931-UHYOhjN80UAxSZsbzExMQNrqEok\"",
    "mtime": "2023-07-28T16:20:54.475Z",
    "size": 63793,
    "path": "../public/quotes/Vink.jpg"
  },
  "/quotes/Wuis.jpg": {
    "type": "image/jpeg",
    "etag": "\"4ddd2-alWT1uX3kHEOzK9R+HcAbOLV+X0\"",
    "mtime": "2023-07-28T16:20:54.475Z",
    "size": 318930,
    "path": "../public/quotes/Wuis.jpg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_WmgiQk = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_WmgiQk, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_WmgiQk, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
