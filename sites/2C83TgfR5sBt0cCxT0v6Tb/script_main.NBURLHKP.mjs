import {
  Aa as w,
  H as R,
  I as f,
  K as t,
  L as F,
  M as b,
  N as _,
  O as v,
  Qa as S,
  S as k,
  X as E,
  Z as P,
  e as c,
  i as g,
  ma as z,
  qa as I,
} from "./chunk-RBQJDO3X.mjs";
import "./chunk-56PF657X.mjs";
import { e as a, g as m } from "./chunk-HGKSM6ZA.mjs";
m();
m();
var U = "default" in f ? R : f,
  p = {},
  H = U;
p.createRoot = H.createRoot;
p.hydrateRoot = H.hydrateRoot;
var O = p.createRoot,
  V = p.hydrateRoot;
var u = {
    bJPk_W2Lr: {
      elements: {},
      page: t(() =>
        import("./0Y_cC7rVUPZS3m54IbwY7mkP3GZvTxqZzrHgXvlUiqA.67OISPA6.mjs")
      ),
      path: "/",
    },
    nOf5rOPWv: {
      elements: { zG1lSi1Ej: "scroll-horizontal" },
      page: t(() =>
        import("./T_mth9e35ejbJFQUcUvPL3SJjun6Z8w7LT9r2g2oggE.5KU6PX24.mjs")
      ),
      path: "/gaming",
    },
    yLUuGi5Zf: {
      elements: { lfmWsq8et: "scroll-horizontal" },
      page: t(() =>
        import("./T0Mn2ndUMBJmWUy6bB1Spgngo7R_EAhkVs-rcO0s87k.CMZ3DW4D.mjs")
      ),
      path: "/oldHome",
    },
    KwLyZeygT: {
      elements: {},
      page: t(() =>
        import("./IXwOcJLyWI75XHhedOC5wxRWGn-L28C95jlxPvZQXO0.YELEPZ4Y.mjs")
      ),
      path: "/home3",
    },
    t3QCnhfQe: {
      elements: {},
      page: t(() =>
        import("./ZKy2wQqNjlTBT0PeyoaI-cX7LAf21umPPL1j5y-FCBk.5YI76NHB.mjs")
      ),
      path: "/privacy",
    },
    b2iH9sQHH: {
      elements: {},
      page: t(() =>
        import("./mABWYjJIZt0i0TrziMemp0cKX-ViGmTy7O9Ylgx3dMo.TCOFYKXK.mjs")
      ),
      path: "/terms",
    },
    DKb7tsKxS: {
      elements: {},
      page: t(() =>
        import("./9GhWYHIuruAWZK8SHPdpP0cvXXnRbsxX04jHRXDIgOM.OSZDXSGC.mjs")
      ),
      path: "/page",
    },
    l8E58yOtN: {
      elements: {},
      page: t(() =>
        import("./6m8UIZcY-su1TA4yC7scgmI2Qpt26lw3Skl8CkoFWrs.YAR4ZGQZ.mjs")
      ),
      path: "/blog",
    },
    P8pMlfGIo: {
      elements: {},
      page: t(() =>
        import("./0gX_hvH-4L38wjqiRORWzdlztlsUGE-0GyAOCJ4jYKA.ZGWQQYD6.mjs")
      ),
      path: "/404",
    },
    h95_wA1A_: {
      elements: {},
      page: t(() =>
        import("./4a3_Zl4gsZsUSd_yf3cUv6ECmipsEG8NyR2cM0egE-0.KQBGFDC7.mjs")
      ),
      path: "/accelerate.fun",
    },
    fX9yXfNDK: {
      collectionId: "XVqTA32yG",
      elements: {},
      page: t(() =>
        import("./dRFIRKoB2UMYCSO_Gq1KJXZxAAK02qxkD3fbAAZDtTA.UF64C6SZ.mjs")
      ),
      path: "/blog/:K2of11y4M",
    },
  },
  x = [{ code: "en", id: "default", name: "English", slug: "" }];
async function A({ routeId: o, pathVariables: n, localeId: r }) {
  await u[o].page.preload();
  let s = c(I, {
      isWebsite: !0,
      routeId: o,
      pathVariables: n,
      routes: u,
      collectionUtils: {
        XVqTA32yG: async () =>
          (
            await import(
              "./BKI_0vw_iQg0KjJ0P9qmVbql5Ujr7Ga7JnDuuTg6vNw.K7CHTHBT.mjs"
            )
          )?.utils,
      },
      framerSiteId:
        "3a2758cac50417bb0dee3327f27251a724d24490934b2e016581f4a028db8b77",
      notFoundPage: t(() =>
        import("./0gX_hvH-4L38wjqiRORWzdlztlsUGE-0GyAOCJ4jYKA.ZGWQQYD6.mjs")
      ),
      isReducedMotion: void 0,
      localeId: r,
      locales: x,
      preserveQueryParams: void 0,
    }),
    i = c(z, {
      children: s,
      value: {
        enableAsyncURLUpdates: !0,
        replaceNestedLinks: !0,
        useGranularSuspense: !0,
        wrapUpdatesInTransitions: !1,
      },
    });
  return c(F, { children: i, value: { routes: {} } });
}
var G = typeof document < "u";
if (G) {
  (a.__framer_importFromPackage = (n, r) => () =>
    c(E, {
      error: 'Package component not supported: "' + r + '" in "' + n + '"',
    })),
    (a.process = {
      ...a.process,
      env: { ...(a.process ? a.process.env : void 0), NODE_ENV: "production" },
    }),
    (a.__framer_events = a.__framer_events || []),
    P();
  let o = document.getElementById("main");
  "framerHydrateV2" in o.dataset ? M(!0, o) : M(!1, o);
}
function D() {
  G && a.__framer_events.push(arguments);
}
async function M(o, n) {
  try {
    let h = function (e, L) {
        let d = L?.componentStack;
        console.warn(
          "Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches.",
          e,
          d
        ),
          !(Math.random() > 0.01) &&
            D("published_site_load_recoverable_error", {
              message: String(e),
              componentStack: d,
              stack: d
                ? void 0
                : e instanceof Error && typeof e.stack == "string"
                ? e.stack
                : null,
            });
      },
      r,
      s,
      i,
      l;
    if (o) {
      let e = JSON.parse(n.dataset.framerHydrateV2);
      (r = e.routeId),
        (s = e.localeId),
        (i = e.pathVariables),
        (l = e.breakpoints);
    } else {
      let e = k(u, decodeURIComponent(location.pathname), !0, x);
      (r = e.routeId), (s = e.localeId), (i = e.pathVariables);
    }
    let y = await A({ routeId: r, localeId: s, pathVariables: i });
    o
      ? (S("framer-rewrite-breakpoints", () => {
          w(l), a.__framer_onRewriteBreakpoints?.(l);
        }),
        g(() => {
          b(), v(), _(), V(n, y, { onRecoverableError: h });
        }))
      : O(n, { onRecoverableError: h }).render(y);
  } catch (r) {
    throw (
      (D("published_site_load_error", {
        message: String(r),
        stack:
          r instanceof Error && typeof r.stack == "string" ? r.stack : null,
      }),
      r)
    );
  }
}
export { A as getPageRoot };
//# sourceMappingURL=script_main.NBURLHKP.mjs.map
