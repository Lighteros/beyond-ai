import { a as E } from "./chunk-LHQEWHTT.mjs";
import { e as w } from "./chunk-X3BFD5XN.mjs";
import {
  $ as T,
  Fa as S,
  Ga as Z,
  Ia as l,
  Ka as N,
  Ma as q,
  Na as z,
  Oa as U,
  P as L,
  Q as G,
  Y as F,
  c as t,
  ca as O,
  fa as H,
  g as R,
  ga as g,
  ja as B,
  k,
  m as D,
  o as _,
  p as M,
  pa as V,
  sa as I,
  t as e,
  u as n,
  x as C,
  y as r,
  z as P,
} from "./chunk-RBQJDO3X.mjs";
import { g as v } from "./chunk-HGKSM6ZA.mjs";
v();
v();
Z.loadFonts([]);
var X = [{ explicitInter: !0, fonts: [] }],
  A = [
    '.framer-cmUJb .framer-styles-preset-bsthcd:not(.rich-text-wrapper), .framer-cmUJb .framer-styles-preset-bsthcd.rich-text-wrapper a { --framer-link-current-text-color: var(--token-577e863d-991d-4965-9c80-895f52c445cd, #b1f002) /* {"name":"green-neon"} */; --framer-link-current-text-decoration: none; --framer-link-hover-text-color: var(--token-577e863d-991d-4965-9c80-895f52c445cd, #b1f002) /* {"name":"green-neon"} */; --framer-link-hover-text-decoration: none; --framer-link-text-color: #575757; --framer-link-text-decoration: none; }',
  ],
  Q = "framer-cmUJb";
var ie = z(E),
  le = z(w),
  fe = ["RAPk0R7Br", "VRsnRDtwz"],
  me = "framer-66hEy",
  oe = { RAPk0R7Br: "framer-v-1r94lvu", VRsnRDtwz: "framer-v-ybwnsp" };
function h(f, ...i) {
  let o = {};
  return i?.forEach((m) => m && Object.assign(o, f[m])), o;
}
var se = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  ce = (f, i) => `translateX(-50%) ${i}`,
  de = ({ value: f, children: i }) => {
    let o = k(C),
      m = f ?? o.transition,
      s = _(() => ({ ...o, transition: m }), [JSON.stringify(m)]);
    return e(C.Provider, { value: s, children: i });
  },
  he = r(t),
  pe = { "Variant 1": "RAPk0R7Br", "Variant 2": "VRsnRDtwz" },
  ye = ({ height: f, id: i, width: o, ...m }) => {
    var s, p;
    return {
      ...m,
      variant:
        (p = (s = pe[m.variant]) !== null && s !== void 0 ? s : m.variant) !==
          null && p !== void 0
          ? p
          : "RAPk0R7Br",
    };
  },
  xe = (f, i) => i.join("-") + f.layoutDependency,
  ge = R(function (f, i) {
    let { activeLocale: o, setLocale: m } = G(),
      { style: s, className: p, layoutId: b, variant: W, ...J } = ye(f),
      {
        baseVariant: c,
        classNames: Y,
        gestureVariant: d,
        setGestureState: y,
        setVariant: ve,
        variants: j,
      } = S({
        cycleOrder: fe,
        defaultVariant: "RAPk0R7Br",
        variant: W,
        variantClassNames: oe,
      }),
      a = xe(f, j),
      K = M(null),
      we = L(),
      $ = D(),
      ee = [Q],
      Ee = H();
    return e(P, {
      id: b ?? $,
      children: e(he, {
        animate: j,
        initial: !1,
        children: e(de, {
          value: se,
          children: e(r.div, {
            ...J,
            className: O(me, ...ee, "framer-1r94lvu", p, Y),
            "data-framer-name": "Variant 1",
            layoutDependency: a,
            layoutId: "RAPk0R7Br",
            onHoverEnd: () => y({ isHovered: !1 }),
            onHoverStart: () => y({ isHovered: !0 }),
            onTap: () => y({ isPressed: !1 }),
            onTapCancel: () => y({ isPressed: !1 }),
            onTapStart: () => y({ isPressed: !0 }),
            ref: i ?? K,
            style: { backgroundColor: "rgb(14, 14, 14)", ...s },
            ...h({ VRsnRDtwz: { "data-framer-name": "Variant 2" } }, c, d),
            children: e(r.div, {
              className: "framer-1gcgnm",
              "data-framer-name": "Footer",
              layoutDependency: a,
              layoutId: "bbmOsq_b8",
              children: n(r.div, {
                className: "framer-1jo8n16",
                "data-framer-name": "Container",
                layoutDependency: a,
                layoutId: "UVmV2v9HO",
                children: [
                  n(r.div, {
                    className: "framer-14jzwz7",
                    "data-framer-name": "Container",
                    layoutDependency: a,
                    layoutId: "AJTPgaDxk",
                    children: [
                      n(r.div, {
                        className: "framer-1rfqnir",
                        layoutDependency: a,
                        layoutId: "fVs6oy_dE",
                        children: [
                          e(N, {
                            className: "framer-1i6gi3l",
                            "data-framer-name": "new beyond wordmark",
                            fill: "rgba(0,0,0,1)",
                            intrinsicHeight: 29,
                            intrinsicWidth: 127,
                            layoutDependency: a,
                            layoutId: "S69gthp80",
                            svg: `<svg width="127" height="29" viewBox="0 0 127 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3178_116)" filter="url(#filter0_d_3178_116)">
<path d="M47.7344 0.380859H54.0942C56.2654 0.380859 57.8493 0.882682 58.8462 1.88974C59.843 2.8968 60.3414 4.44323 60.3414 6.52904V7.59754C60.3414 8.97329 60.1161 10.093 59.6723 10.9601C59.2251 11.8272 58.5423 12.4485 57.624 12.8308V12.9059C59.7167 13.6194 60.7647 15.4765 60.7647 18.4806V20.7712C60.7647 22.8331 60.2219 24.4069 59.1363 25.489C58.0508 26.5712 56.4599 27.1106 54.3673 27.1106H47.7378V0.380859H47.7344ZM53.5992 11.2673C54.4424 11.2673 55.074 11.0523 55.4973 10.6187C55.9172 10.1852 56.1288 9.46145 56.1288 8.44074V6.95234C56.1288 5.98625 55.9581 5.28643 55.6133 4.85288C55.2685 4.41933 54.7257 4.20427 53.985 4.20427H51.9538V11.2707H53.6026L53.5992 11.2673ZM54.3639 23.2974C55.1047 23.2974 55.6543 23.0994 56.0127 22.7068C56.3712 22.3108 56.5487 21.6315 56.5487 20.662V18.3304C56.5487 17.1083 56.337 16.2617 55.9172 15.7906C55.4973 15.3195 54.8009 15.0839 53.8279 15.0839H51.9504V23.294H54.3639V23.2974Z" fill="#B1F002"/>
<path d="M61.3008 0.380859H72.7949V4.20085H65.5134V11.2673H71.2997V15.0873H65.5134V23.2974H72.7949V27.1174H61.3008V0.380859Z" fill="#B1F002"/>
<path d="M77.1597 15.7359L72.0664 0.380859H76.5487L79.4231 10.1954H79.4982L82.3725 0.380859H86.4725L81.3757 15.7359V27.1174H77.1597V15.7359Z" fill="#B1F002"/>
<path d="M87.1215 25.7431C86.0223 24.5722 85.4727 22.9166 85.4727 20.7795V6.72169C85.4727 4.58468 86.0223 2.929 87.1215 1.75809C88.2207 0.587166 89.8047 0 91.8735 0C93.9422 0 95.5262 0.587166 96.6254 1.75809C97.7246 2.929 98.2742 4.58468 98.2742 6.72169V20.7761C98.2742 22.9131 97.7246 24.5688 96.6254 25.7397C95.5262 26.9107 93.9422 27.4978 91.8735 27.4978C89.8047 27.4978 88.2207 26.9141 87.1215 25.7397V25.7431ZM94.0583 21.0458V6.45542C94.0583 4.69733 93.3311 3.81999 91.8735 3.81999C90.4158 3.81999 89.6886 4.69733 89.6886 6.45542V21.0458C89.6886 22.8039 90.4158 23.6812 91.8735 23.6812C93.3311 23.6812 94.0583 22.8039 94.0583 21.0458Z" fill="#B1F002"/>
<path d="M99.1953 0.380859H104.483L108.583 16.3846H108.658V0.380859H112.413V27.1174H108.085L103.026 7.60096H102.95V27.1174H99.1953V0.380859Z" fill="#B1F002"/>
<path d="M113.641 0.380859H120.079C122.175 0.380859 123.745 0.940716 124.793 2.06043C125.841 3.18014 126.364 4.82216 126.364 6.98648V20.5084C126.364 22.6727 125.841 24.3147 124.793 25.4344C123.745 26.5541 122.175 27.114 120.079 27.114H113.641V0.380859ZM120 23.2974C120.69 23.2974 121.219 23.0926 121.591 22.6863C121.96 22.2801 122.148 21.6178 122.148 20.6995V6.79872C122.148 5.88042 121.963 5.22157 121.591 4.81192C121.223 4.40568 120.69 4.20085 120 4.20085H117.853V23.2974H120Z" fill="#B1F002"/>
<path d="M33.7531 14.251C33.9306 14.251 34.1116 14.251 34.2925 14.251L34.2549 18.2143C31.9575 18.1973 29.9741 18.3168 28.1921 18.5864C26.3862 18.863 25.5703 19.2316 25.0685 19.9963C24.396 21.0239 24.0307 22.5225 24.0102 24.3318L20.0469 24.2874C20.0742 21.6861 20.6511 19.5116 21.7538 17.8252C23.2012 15.6131 25.4167 14.9986 27.5947 14.6674C29.4449 14.3841 31.4659 14.2441 33.7531 14.2441V14.251Z" fill="#B1F002"/>
<path d="M40.0992 18.2558C39.6315 22.0928 37.6038 26.2918 33.7667 27.7153C30.6192 28.9135 27.1201 28.398 23.9453 28.3332L23.9829 24.3698C25.5225 24.3186 26.9904 24.3118 28.3695 24.1991C30.5543 24.0353 32.8518 23.6085 33.7462 21.3623C34.1593 20.4372 34.2856 19.4267 34.2344 18.1875L40.1026 18.2524L40.0992 18.2558Z" fill="#B1F002"/>
<path d="M33.7531 14.2507C33.9306 14.2507 34.1116 14.2507 34.2925 14.2507L34.2549 10.2874C31.9575 10.3044 29.9741 10.185 28.1921 9.91528C26.3862 9.63876 25.5703 9.27008 25.0685 8.50539C24.396 7.47785 24.0307 5.97921 24.0102 4.16992L20.0469 4.2143C20.0742 6.81558 20.6511 8.99015 21.7538 10.6765C23.2012 12.8887 25.4167 13.5031 27.5947 13.8343C29.4449 14.1176 31.4659 14.2576 33.7531 14.2576V14.2507Z" fill="#B1F002"/>
<path d="M40.0992 10.2468C39.6315 6.40977 37.6038 2.21084 33.7667 0.787308C30.6192 -0.410921 27.1201 0.104556 23.9453 0.169418L23.9829 4.13279C25.5225 4.184 26.9904 4.19082 28.3695 4.30348C30.5543 4.46734 32.8518 4.89406 33.7462 7.14031C34.1593 8.06544 34.2856 9.07591 34.2344 10.3151L40.1026 10.2502L40.0992 10.2468Z" fill="#B1F002"/>
<path d="M6.33625 14.251C6.15873 14.251 5.9778 14.251 5.79688 14.251L5.83443 18.2143C8.13189 18.1973 10.1153 18.3168 11.8973 18.5864C13.7031 18.863 14.519 19.2316 15.0208 19.9963C15.6934 21.0239 16.0586 22.5225 16.0791 24.3318L20.0425 24.2874C20.0152 21.6861 19.4383 19.5116 18.3356 17.8252C16.8882 15.6131 14.6726 14.9986 12.4947 14.6674C10.6444 14.3841 8.62347 14.2441 6.33625 14.2441V14.251Z" fill="#B1F002"/>
<path d="M-0.00830499 18.2558C0.45938 22.0928 2.48715 26.2918 6.32422 27.7153C9.4717 28.9135 12.9708 28.398 16.1456 28.3332L16.108 24.3698C14.5684 24.3186 13.1005 24.3118 11.7214 24.1991C9.53656 24.0353 7.2391 23.6085 6.3447 21.3623C5.93163 20.4372 5.80532 19.4267 5.85653 18.1875L-0.0117188 18.2524L-0.00830499 18.2558Z" fill="#B1F002"/>
<path d="M6.33625 14.2488C6.15873 14.2488 5.9778 14.2488 5.79688 14.2488L5.83443 10.2854C8.13189 10.3025 10.1153 10.183 11.8973 9.91332C13.7031 9.63681 14.519 9.26812 15.0208 8.50344C15.6934 7.4759 16.0586 5.97726 16.0791 4.16797L20.0425 4.21235C20.0152 6.81363 19.4383 8.98819 18.3356 10.6746C16.8882 12.8867 14.6726 13.5012 12.4947 13.8323C10.6444 14.1157 8.62347 14.2556 6.33625 14.2556V14.2488Z" fill="#B1F002"/>
<path d="M-0.00830499 10.2447C0.45938 6.40768 2.48715 2.20534 6.32422 0.78522C9.4717 -0.413009 12.9742 0.0990544 16.1456 0.163916L16.108 4.12729C14.5684 4.17849 13.1005 4.18532 11.7214 4.29798C9.53656 4.46184 7.2391 4.88856 6.3447 7.13481C5.93163 8.05994 5.80532 9.07041 5.85653 10.3096L-0.0117188 10.2447H-0.00830499Z" fill="#B1F002"/>
</g>
<defs>
<filter id="filter0_d_3178_116" x="-1.47292" y="0" width="129.313" height="31.4439" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.47292"/>
<feGaussianBlur stdDeviation="0.736459"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3178_116"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3178_116" result="shape"/>
</filter>
<clipPath id="clip0_3178_116">
<rect width="126.367" height="28.498" fill="white"/>
</clipPath>
</defs>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          e(l, {
                            __fromCanvasComponent: !0,
                            children: e(t, {
                              children: e(r.p, {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO0dlaXN0IFJlZ3VsYXI=",
                                  "--framer-font-family":
                                    '"Geist Regular", "Geist Regular Placeholder", sans-serif',
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-5f775928-41ea-4fe0-af0d-fb6cc34398b3, rgb(161, 161, 161)))",
                                },
                                children: "AI Powered by Decentralized Compute",
                              }),
                            }),
                            className: "framer-1q04rgz",
                            "data-framer-name":
                              "The future of Gaming and Compute",
                            fonts: ["CUSTOM;Geist Regular"],
                            layoutDependency: a,
                            layoutId: "S3eqoWYPf",
                            style: {
                              "--extracted-r6o4lv":
                                "var(--token-5f775928-41ea-4fe0-af0d-fb6cc34398b3, rgb(161, 161, 161))",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...h(
                              {
                                VRsnRDtwz: {
                                  children: e(t, {
                                    children: e(r.p, {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0dlaXN0IFJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Geist Regular", "Geist Regular Placeholder", sans-serif',
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, var(--token-5f775928-41ea-4fe0-af0d-fb6cc34398b3, rgb(161, 161, 161)))",
                                      },
                                      children:
                                        "AI Powered by Decentralized Compute",
                                    }),
                                  }),
                                },
                              },
                              c,
                              d
                            ),
                          }),
                        ],
                      }),
                      n(r.div, {
                        className: "framer-1bm9vlj",
                        "data-framer-name": "Container",
                        layoutDependency: a,
                        layoutId: "BDucxMPEO",
                        children: [
                          n(r.div, {
                            className: "framer-16ridl",
                            "data-framer-name": "Container",
                            layoutDependency: a,
                            layoutId: "wHSYfTGan",
                            children: [
                              e(r.div, {
                                className: "framer-e2324q",
                                "data-framer-name": "Container",
                                layoutDependency: a,
                                layoutId: "c7XLaWFXV",
                                style: { opacity: 0.4 },
                                ...h(
                                  { VRsnRDtwz: { transformTemplate: ce } },
                                  c,
                                  d
                                ),
                                children: e(l, {
                                  __fromCanvasComponent: !0,
                                  children: e(t, {
                                    children: e(r.p, {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0dlaXN0IE1lZGl1bQ==",
                                        "--framer-font-family":
                                          '"Geist Medium", "Geist Medium Placeholder", sans-serif',
                                        "--framer-font-size": "15.5px",
                                        "--framer-line-height": "22.4px",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                      },
                                      children: "Navigate",
                                    }),
                                  }),
                                  className: "framer-10uuyb1",
                                  "data-framer-name": "Navigate",
                                  fonts: ["CUSTOM;Geist Medium"],
                                  layoutDependency: a,
                                  layoutId: "R9ekew5GS",
                                  style: {
                                    "--extracted-r6o4lv": "rgb(255, 255, 255)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "center",
                                  withExternalLayout: !0,
                                }),
                              }),
                              n(r.div, {
                                className: "framer-igbd8k",
                                "data-framer-name": "List",
                                layoutDependency: a,
                                layoutId: "sO0I12evr",
                                children: [
                                  e(I, {
                                    links: [
                                      {
                                        href: { webPageId: "bJPk_W2Lr" },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: "bJPk_W2Lr" },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (x) =>
                                      e(g, {
                                        children: e(r.div, {
                                          className: "framer-a49k1x-container",
                                          layoutDependency: a,
                                          layoutId: "ClqO2rmTU-container",
                                          children: e(E, {
                                            height: "100%",
                                            id: "ClqO2rmTU",
                                            k3CUfO8DL: x[0],
                                            layoutId: "ClqO2rmTU",
                                            style: { height: "100%" },
                                            variant: "tiR11pkuv",
                                            width: "100%",
                                            WILyiXxUs: "Network",
                                            ...h(
                                              {
                                                VRsnRDtwz: { k3CUfO8DL: x[1] },
                                              },
                                              c,
                                              d
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  e(r.div, {
                                    className: "framer-1kglx29",
                                    "data-framer-name": "Item",
                                    layoutDependency: a,
                                    layoutId: "WCNLxSGdl",
                                    children: e(I, {
                                      links: [
                                        {
                                          href: { webPageId: "nOf5rOPWv" },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: "nOf5rOPWv" },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (x) =>
                                        e(g, {
                                          children: e(r.div, {
                                            className:
                                              "framer-1cyepbl-container",
                                            layoutDependency: a,
                                            layoutId: "Vmw2CJeP0-container",
                                            children: e(E, {
                                              height: "100%",
                                              id: "Vmw2CJeP0",
                                              k3CUfO8DL: x[0],
                                              layoutId: "Vmw2CJeP0",
                                              style: { height: "100%" },
                                              variant: "tiR11pkuv",
                                              width: "100%",
                                              WILyiXxUs: "Gaming",
                                              ...h(
                                                {
                                                  VRsnRDtwz: {
                                                    k3CUfO8DL: x[1],
                                                  },
                                                },
                                                c,
                                                d
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          n(r.div, {
                            className: "framer-1pbboyq",
                            "data-framer-name": "Container",
                            layoutDependency: a,
                            layoutId: "zbfS5_XeT",
                            style: { opacity: 0.1 },
                            children: [
                              e(r.div, {
                                className: "framer-18hgfru",
                                "data-framer-name": "Container",
                                layoutDependency: a,
                                layoutId: "hnpUrnjCK",
                                children: e(l, {
                                  __fromCanvasComponent: !0,
                                  children: e(t, {
                                    children: e(r.p, {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0dlaXN0IE1lZGl1bQ==",
                                        "--framer-font-family":
                                          '"Geist Medium", "Geist Medium Placeholder", sans-serif',
                                        "--framer-font-size": "15.5px",
                                        "--framer-line-height": "22.4px",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                      },
                                      children: "Documentation",
                                    }),
                                  }),
                                  className: "framer-zg25el",
                                  "data-framer-name": "Navigate",
                                  fonts: ["CUSTOM;Geist Medium"],
                                  layoutDependency: a,
                                  layoutId: "FDGsXVwNz",
                                  style: {
                                    "--extracted-r6o4lv": "rgb(255, 255, 255)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "center",
                                  withExternalLayout: !0,
                                }),
                              }),
                              n(r.div, {
                                className: "framer-faiffh",
                                "data-framer-name": "List",
                                layoutDependency: a,
                                layoutId: "E9F2QMUUW",
                                children: [
                                  e(r.div, {
                                    className: "framer-1epfzyz",
                                    "data-framer-name": "Item",
                                    layoutDependency: a,
                                    layoutId: "czrt5Vzbw",
                                    children: e(l, {
                                      __fromCanvasComponent: !0,
                                      children: e(t, {
                                        children: e(r.p, {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0dlaXN0IFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Geist Regular", "Geist Regular Placeholder", sans-serif',
                                            "--framer-font-size": "13.67px",
                                            "--framer-line-height": "19.6px",
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                          },
                                          children: "Developer Docs",
                                        }),
                                      }),
                                      className: "framer-2gu8r",
                                      "data-framer-name":
                                        "Link \u2192 Developer",
                                      fonts: ["CUSTOM;Geist Regular"],
                                      layoutDependency: a,
                                      layoutId: "i79Ce4Iuc",
                                      style: {
                                        "--extracted-r6o4lv":
                                          "rgb(255, 255, 255)",
                                        "--framer-paragraph-spacing": "0px",
                                      },
                                      verticalAlignment: "center",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e(r.div, {
                                    className: "framer-fo8wvs",
                                    "data-framer-name": "Item",
                                    layoutDependency: a,
                                    layoutId: "iwhGjyMen",
                                    children: e(l, {
                                      __fromCanvasComponent: !0,
                                      children: e(t, {
                                        children: e(r.p, {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0dlaXN0IFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Geist Regular", "Geist Regular Placeholder", sans-serif',
                                            "--framer-font-size": "13.23px",
                                            "--framer-line-height": "19.6px",
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                          },
                                          children: "White Paper",
                                        }),
                                      }),
                                      className: "framer-1a81rw6",
                                      "data-framer-name":
                                        "Link \u2192 Compute Fast Grants",
                                      fonts: ["CUSTOM;Geist Regular"],
                                      layoutDependency: a,
                                      layoutId: "DZC66HPFc",
                                      style: {
                                        "--extracted-r6o4lv":
                                          "rgb(255, 255, 255)",
                                        "--framer-paragraph-spacing": "0px",
                                      },
                                      verticalAlignment: "center",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          n(r.div, {
                            className: "framer-aium8z",
                            "data-framer-name": "Container",
                            layoutDependency: a,
                            layoutId: "pn4mL_ZLP",
                            style: { opacity: 0.1 },
                            children: [
                              e(r.div, {
                                className: "framer-1521fjh",
                                "data-framer-name": "Container",
                                layoutDependency: a,
                                layoutId: "x7DUYssLQ",
                                style: { opacity: 0.4 },
                                children: e(l, {
                                  __fromCanvasComponent: !0,
                                  children: e(t, {
                                    children: e(r.p, {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0dlaXN0IE1lZGl1bQ==",
                                        "--framer-font-family":
                                          '"Geist Medium", "Geist Medium Placeholder", sans-serif',
                                        "--framer-font-size": "15.5px",
                                        "--framer-line-height": "22.4px",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                      },
                                      children: "Company",
                                    }),
                                  }),
                                  className: "framer-1qdoeop",
                                  "data-framer-name": "Navigate",
                                  fonts: ["CUSTOM;Geist Medium"],
                                  layoutDependency: a,
                                  layoutId: "XoTvfQwO4",
                                  style: {
                                    "--extracted-r6o4lv": "rgb(255, 255, 255)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "center",
                                  withExternalLayout: !0,
                                }),
                              }),
                              n(r.div, {
                                className: "framer-10hj2vn",
                                "data-framer-name": "List",
                                layoutDependency: a,
                                layoutId: "Lu5_ijgH3",
                                children: [
                                  e(r.div, {
                                    className: "framer-1r8ljrf",
                                    "data-framer-name": "Item",
                                    layoutDependency: a,
                                    layoutId: "SbhBkECdT",
                                    children: e(l, {
                                      __fromCanvasComponent: !0,
                                      children: e(t, {
                                        children: e(r.p, {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0dlaXN0IFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Geist Regular", "Geist Regular Placeholder", sans-serif',
                                            "--framer-font-size": "13.67px",
                                            "--framer-line-height": "19.6px",
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                          },
                                          children: "Careers",
                                        }),
                                      }),
                                      className: "framer-x9q25r",
                                      "data-framer-name":
                                        "Link \u2192 Developer",
                                      fonts: ["CUSTOM;Geist Regular"],
                                      layoutDependency: a,
                                      layoutId: "ZNqTsIUnn",
                                      style: {
                                        "--extracted-r6o4lv":
                                          "rgb(255, 255, 255)",
                                        "--framer-paragraph-spacing": "0px",
                                      },
                                      verticalAlignment: "center",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e(r.div, {
                                    className: "framer-136ml0g",
                                    "data-framer-name": "Item",
                                    layoutDependency: a,
                                    layoutId: "bd36j9jad",
                                    children: e(l, {
                                      __fromCanvasComponent: !0,
                                      children: e(t, {
                                        children: e(r.p, {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0dlaXN0IFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Geist Regular", "Geist Regular Placeholder", sans-serif',
                                            "--framer-font-size": "13.23px",
                                            "--framer-line-height": "19.6px",
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                          },
                                          children: "Contact",
                                        }),
                                      }),
                                      className: "framer-19rucw",
                                      "data-framer-name":
                                        "Link \u2192 Compute Fast Grants",
                                      fonts: ["CUSTOM;Geist Regular"],
                                      layoutDependency: a,
                                      layoutId: "THznnaecQ",
                                      style: {
                                        "--extracted-r6o4lv":
                                          "rgb(255, 255, 255)",
                                        "--framer-paragraph-spacing": "0px",
                                      },
                                      verticalAlignment: "center",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      n(r.div, {
                        className: "framer-zvalmj",
                        "data-framer-name": "Frame 1000004383",
                        layoutDependency: a,
                        layoutId: "Mf9LteCzY",
                        children: [
                          e(g, {
                            children: e(r.div, {
                              className: "framer-vugh0-container",
                              layoutDependency: a,
                              layoutId: "cPI3T1NrK-container",
                              children: e(w, {
                                bAPh2Ub2_: "Twitter",
                                height: "100%",
                                id: "cPI3T1NrK",
                                layoutId: "cPI3T1NrK",
                                MVSX0a6r9: "https://x.com/BeyondAI_ETH",
                                sfcY1BU4U: "twitter",
                                width: "100%",
                                YxxazTIHA: "Twitter",
                                z3BCPRZMy: !0,
                              }),
                            }),
                          }),
                          e(g, {
                            children: e(r.div, {
                              className: "framer-16f8yp6-container",
                              layoutDependency: a,
                              layoutId: "bCJvHWD2B-container",
                              children: e(w, {
                                bAPh2Ub2_: "Whitepaper",
                                height: "100%",
                                id: "bCJvHWD2B",
                                layoutId: "bCJvHWD2B",
                                MVSX0a6r9: "https://docs.trybeyondai.cc",
                                sfcY1BU4U: "book",
                                width: "100%",
                                YxxazTIHA: "Whitepaper",
                                z3BCPRZMy: !1,
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  n(r.div, {
                    className: "framer-ip6lss",
                    layoutDependency: a,
                    layoutId: "sBZBX5v9g",
                    children: [
                      e(r.div, {
                        className: "framer-13sgldp",
                        "data-framer-name": "Container",
                        layoutDependency: a,
                        layoutId: "YkemhCc9K",
                        children: e(l, {
                          __fromCanvasComponent: !0,
                          children: e(t, {
                            children: e(r.p, {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO0dlaXN0IE1lZGl1bQ==",
                                "--framer-font-family":
                                  '"Geist Medium", "Geist Medium Placeholder", sans-serif',
                                "--framer-font-size": "14.88px",
                                "--framer-line-height": "19.2px",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                              },
                              children: "\xA9 2025 Beyond Network, Inc.",
                            }),
                          }),
                          className: "framer-ao3j9h",
                          "data-framer-name": "\xA9 2025 Beyond, Inc.",
                          fonts: ["CUSTOM;Geist Medium"],
                          layoutDependency: a,
                          layoutId: "PgmOq8s1w",
                          style: {
                            "--extracted-r6o4lv": "rgb(255, 255, 255)",
                            "--framer-paragraph-spacing": "0px",
                          },
                          verticalAlignment: "center",
                          withExternalLayout: !0,
                          ...h(
                            {
                              VRsnRDtwz: {
                                children: e(t, {
                                  children: e(r.p, {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0dlaXN0IE1lZGl1bQ==",
                                      "--framer-font-family":
                                        '"Geist Medium", "Geist Medium Placeholder", sans-serif',
                                      "--framer-font-size": "14.88px",
                                      "--framer-line-height": "19.2px",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                    },
                                    children: "\xA9 2025 Beyond Network, Inc.",
                                  }),
                                }),
                              },
                            },
                            c,
                            d
                          ),
                        }),
                      }),
                      n(r.div, {
                        className: "framer-120wisx",
                        "data-framer-name": "Paragraph",
                        layoutDependency: a,
                        layoutId: "kktbdOpSo",
                        children: [
                          n(r.div, {
                            className: "framer-195chtz",
                            "data-framer-name": "Frame 1000004386",
                            layoutDependency: a,
                            layoutId: "mprIdTat3",
                            children: [
                              e(N, {
                                className: "framer-13qu2nl",
                                "data-framer-name": "clarity:heart-solid",
                                fill: "rgba(0,0,0,1)",
                                intrinsicHeight: 13,
                                intrinsicWidth: 13,
                                layoutDependency: a,
                                layoutId: "zATJSHopb",
                                svg: `<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_179_156)">
<path d="M11.9171 2.75802C11.4333 1.76497 10.0394 0.952467 8.41798 1.42552C7.6432 1.64932 6.96722 2.12925 6.50048 2.78691C6.03374 2.12925 5.35776 1.64932 4.58298 1.42552C2.95798 0.959689 1.5677 1.76497 1.08381 2.75802C0.404925 4.1483 0.686592 5.71191 1.92159 7.40552C2.88937 8.7308 4.27243 10.0741 6.2802 11.6341C6.34365 11.6836 6.42182 11.7105 6.50229 11.7105C6.58275 11.7105 6.66092 11.6836 6.72437 11.6341C8.72854 10.0777 10.1152 8.74524 11.083 7.40552C12.3144 5.71191 12.596 4.1483 11.9171 2.75802Z" fill="#7C7C7C"/>
</g>
<defs>
<clipPath id="clip0_179_156">
<rect width="13" height="13" fill="white"/>
</clipPath>
</defs>
</svg>
`,
                                withExternalLayout: !0,
                              }),
                              e(l, {
                                __fromCanvasComponent: !0,
                                children: e(t, {
                                  children: e(r.p, {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0dlaXN0IE1lZGl1bQ==",
                                      "--framer-font-family":
                                        '"Geist Medium", "Geist Medium Placeholder", sans-serif',
                                      "--framer-font-size": "14px",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, rgb(123, 123, 123))",
                                    },
                                    children: "Made with love @ Beyond-AI",
                                  }),
                                }),
                                className: "framer-qgku2k",
                                "data-framer-name": "Made with love in house",
                                fonts: ["CUSTOM;Geist Medium"],
                                layoutDependency: a,
                                layoutId: "djotj0qRI",
                                style: {
                                  "--extracted-r6o4lv": "rgb(123, 123, 123)",
                                  "--framer-paragraph-spacing": "0px",
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
      }),
    });
  }),
  ue = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-66hEy.framer-a7j9v4, .framer-66hEy .framer-a7j9v4 { display: block; }",
    ".framer-66hEy.framer-1r94lvu { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 24px 48px 24px 48px; position: relative; width: 1315px; }",
    ".framer-66hEy .framer-1gcgnm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-66hEy .framer-1jo8n16 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-66hEy .framer-14jzwz7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-66hEy .framer-1rfqnir { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 8px 0px 0px; position: relative; width: 334px; }",
    ".framer-66hEy .framer-1i6gi3l { flex: none; height: 29px; position: relative; width: 127px; }",
    ".framer-66hEy .framer-1q04rgz, .framer-66hEy .framer-ao3j9h { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-66hEy .framer-1bm9vlj { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 123px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-66hEy .framer-16ridl, .framer-66hEy .framer-1pbboyq, .framer-66hEy .framer-aium8z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: visible; padding: 0px 0px 18.010000228881836px 0px; position: relative; width: min-content; }",
    ".framer-66hEy .framer-e2324q, .framer-66hEy .framer-18hgfru, .framer-66hEy .framer-1521fjh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-66hEy .framer-10uuyb1, .framer-66hEy .framer-zg25el, .framer-66hEy .framer-2gu8r, .framer-66hEy .framer-1a81rw6, .framer-66hEy .framer-1qdoeop, .framer-66hEy .framer-x9q25r, .framer-66hEy .framer-19rucw, .framer-66hEy .framer-qgku2k { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-66hEy .framer-igbd8k, .framer-66hEy .framer-faiffh, .framer-66hEy .framer-10hj2vn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-66hEy .framer-a49k1x-container { flex: none; height: 23px; position: relative; width: auto; }",
    ".framer-66hEy .framer-1kglx29, .framer-66hEy .framer-fo8wvs, .framer-66hEy .framer-136ml0g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 1.7899999618530273px 0px 1.0099999904632568px 0px; position: relative; width: min-content; }",
    ".framer-66hEy .framer-1cyepbl-container { flex: none; height: 20px; position: relative; width: auto; }",
    ".framer-66hEy .framer-1epfzyz, .framer-66hEy .framer-1r8ljrf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 1.809999942779541px 0px 0.9900000095367432px 0px; position: relative; width: min-content; }",
    ".framer-66hEy .framer-zvalmj { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 326px; }",
    ".framer-66hEy .framer-vugh0-container, .framer-66hEy .framer-16f8yp6-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-66hEy .framer-ip6lss { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-66hEy .framer-13sgldp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-66hEy .framer-120wisx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 2px 0px 2px 0px; position: relative; width: 100%; }",
    ".framer-66hEy .framer-16fv9br { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-66hEy .framer-y26xw1, .framer-66hEy .framer-14x2lrl { flex: none; height: 17px; position: relative; white-space: pre; width: auto; }",
    ".framer-66hEy .framer-195chtz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-66hEy .framer-13qu2nl { flex: none; height: 13px; position: relative; width: 13px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-66hEy.framer-1r94lvu, .framer-66hEy .framer-1gcgnm, .framer-66hEy .framer-1jo8n16, .framer-66hEy .framer-14jzwz7, .framer-66hEy .framer-1rfqnir, .framer-66hEy .framer-1bm9vlj, .framer-66hEy .framer-16ridl, .framer-66hEy .framer-e2324q, .framer-66hEy .framer-igbd8k, .framer-66hEy .framer-1kglx29, .framer-66hEy .framer-1pbboyq, .framer-66hEy .framer-18hgfru, .framer-66hEy .framer-faiffh, .framer-66hEy .framer-1epfzyz, .framer-66hEy .framer-fo8wvs, .framer-66hEy .framer-aium8z, .framer-66hEy .framer-1521fjh, .framer-66hEy .framer-10hj2vn, .framer-66hEy .framer-1r8ljrf, .framer-66hEy .framer-136ml0g, .framer-66hEy .framer-zvalmj, .framer-66hEy .framer-ip6lss, .framer-66hEy .framer-13sgldp, .framer-66hEy .framer-16fv9br, .framer-66hEy .framer-195chtz { gap: 0px; } .framer-66hEy.framer-1r94lvu > *, .framer-66hEy .framer-1rfqnir > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-66hEy.framer-1r94lvu > :first-child, .framer-66hEy .framer-1gcgnm > :first-child, .framer-66hEy .framer-1jo8n16 > :first-child, .framer-66hEy .framer-1rfqnir > :first-child, .framer-66hEy .framer-16ridl > :first-child, .framer-66hEy .framer-e2324q > :first-child, .framer-66hEy .framer-igbd8k > :first-child, .framer-66hEy .framer-1kglx29 > :first-child, .framer-66hEy .framer-1pbboyq > :first-child, .framer-66hEy .framer-18hgfru > :first-child, .framer-66hEy .framer-faiffh > :first-child, .framer-66hEy .framer-1epfzyz > :first-child, .framer-66hEy .framer-fo8wvs > :first-child, .framer-66hEy .framer-aium8z > :first-child, .framer-66hEy .framer-1521fjh > :first-child, .framer-66hEy .framer-10hj2vn > :first-child, .framer-66hEy .framer-1r8ljrf > :first-child, .framer-66hEy .framer-136ml0g > :first-child, .framer-66hEy .framer-zvalmj > :first-child, .framer-66hEy .framer-ip6lss > :first-child, .framer-66hEy .framer-13sgldp > :first-child { margin-top: 0px; } .framer-66hEy.framer-1r94lvu > :last-child, .framer-66hEy .framer-1gcgnm > :last-child, .framer-66hEy .framer-1jo8n16 > :last-child, .framer-66hEy .framer-1rfqnir > :last-child, .framer-66hEy .framer-16ridl > :last-child, .framer-66hEy .framer-e2324q > :last-child, .framer-66hEy .framer-igbd8k > :last-child, .framer-66hEy .framer-1kglx29 > :last-child, .framer-66hEy .framer-1pbboyq > :last-child, .framer-66hEy .framer-18hgfru > :last-child, .framer-66hEy .framer-faiffh > :last-child, .framer-66hEy .framer-1epfzyz > :last-child, .framer-66hEy .framer-fo8wvs > :last-child, .framer-66hEy .framer-aium8z > :last-child, .framer-66hEy .framer-1521fjh > :last-child, .framer-66hEy .framer-10hj2vn > :last-child, .framer-66hEy .framer-1r8ljrf > :last-child, .framer-66hEy .framer-136ml0g > :last-child, .framer-66hEy .framer-zvalmj > :last-child, .framer-66hEy .framer-ip6lss > :last-child, .framer-66hEy .framer-13sgldp > :last-child { margin-bottom: 0px; } .framer-66hEy .framer-1gcgnm > *, .framer-66hEy .framer-1jo8n16 > *, .framer-66hEy .framer-e2324q > *, .framer-66hEy .framer-1kglx29 > *, .framer-66hEy .framer-18hgfru > *, .framer-66hEy .framer-1epfzyz > *, .framer-66hEy .framer-fo8wvs > *, .framer-66hEy .framer-1521fjh > *, .framer-66hEy .framer-1r8ljrf > *, .framer-66hEy .framer-136ml0g > *, .framer-66hEy .framer-ip6lss > *, .framer-66hEy .framer-13sgldp > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-66hEy .framer-14jzwz7 > *, .framer-66hEy .framer-1bm9vlj > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-66hEy .framer-14jzwz7 > :first-child, .framer-66hEy .framer-1bm9vlj > :first-child, .framer-66hEy .framer-16fv9br > :first-child, .framer-66hEy .framer-195chtz > :first-child { margin-left: 0px; } .framer-66hEy .framer-14jzwz7 > :last-child, .framer-66hEy .framer-1bm9vlj > :last-child, .framer-66hEy .framer-16fv9br > :last-child, .framer-66hEy .framer-195chtz > :last-child { margin-right: 0px; } .framer-66hEy .framer-16ridl > *, .framer-66hEy .framer-1pbboyq > *, .framer-66hEy .framer-aium8z > * { margin: 0px; margin-bottom: calc(9.989999771118164px / 2); margin-top: calc(9.989999771118164px / 2); } .framer-66hEy .framer-igbd8k > *, .framer-66hEy .framer-faiffh > *, .framer-66hEy .framer-10hj2vn > * { margin: 0px; margin-bottom: calc(6.010000228881836px / 2); margin-top: calc(6.010000228881836px / 2); } .framer-66hEy .framer-zvalmj > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-66hEy .framer-16fv9br > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-66hEy .framer-195chtz > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } }",
    ".framer-66hEy.framer-v-ybwnsp.framer-1r94lvu { padding: 24px 16px 24px 16px; width: 456px; }",
    ".framer-66hEy.framer-v-ybwnsp .framer-14jzwz7 { align-content: center; align-items: center; flex-direction: column; gap: 20px; }",
    ".framer-66hEy.framer-v-ybwnsp .framer-1rfqnir { align-content: center; align-items: center; order: 0; width: 424px; }",
    ".framer-66hEy.framer-v-ybwnsp .framer-1bm9vlj { flex: none; gap: unset; height: min-content; justify-content: space-between; order: 2; width: 100%; }",
    ".framer-66hEy.framer-v-ybwnsp .framer-16ridl { display: block; height: 102px; padding: unset; width: 66px; }",
    ".framer-66hEy.framer-v-ybwnsp .framer-e2324q { left: 50%; position: absolute; top: 0px; }",
    ".framer-66hEy.framer-v-ybwnsp .framer-igbd8k { bottom: 18px; left: 0px; position: absolute; }",
    ".framer-66hEy.framer-v-ybwnsp .framer-1pbboyq, .framer-66hEy.framer-v-ybwnsp .framer-aium8z { height: min-content; }",
    ".framer-66hEy.framer-v-ybwnsp .framer-zvalmj { align-content: center; align-items: center; flex-direction: row; justify-content: center; order: 1; width: 424px; }",
    ".framer-66hEy.framer-v-ybwnsp .framer-120wisx { align-content: center; align-items: center; flex-direction: column; gap: 5px; justify-content: center; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-66hEy.framer-v-ybwnsp .framer-14jzwz7, .framer-66hEy.framer-v-ybwnsp .framer-1bm9vlj, .framer-66hEy.framer-v-ybwnsp .framer-16ridl, .framer-66hEy.framer-v-ybwnsp .framer-zvalmj, .framer-66hEy.framer-v-ybwnsp .framer-120wisx { gap: 0px; } .framer-66hEy.framer-v-ybwnsp .framer-14jzwz7 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-66hEy.framer-v-ybwnsp .framer-14jzwz7 > :first-child, .framer-66hEy.framer-v-ybwnsp .framer-120wisx > :first-child { margin-top: 0px; } .framer-66hEy.framer-v-ybwnsp .framer-14jzwz7 > :last-child, .framer-66hEy.framer-v-ybwnsp .framer-120wisx > :last-child { margin-bottom: 0px; } .framer-66hEy.framer-v-ybwnsp .framer-1bm9vlj > *, .framer-66hEy.framer-v-ybwnsp .framer-1bm9vlj > :first-child, .framer-66hEy.framer-v-ybwnsp .framer-1bm9vlj > :last-child, .framer-66hEy.framer-v-ybwnsp .framer-16ridl > *, .framer-66hEy.framer-v-ybwnsp .framer-16ridl > :first-child, .framer-66hEy.framer-v-ybwnsp .framer-16ridl > :last-child { margin: 0px; } .framer-66hEy.framer-v-ybwnsp .framer-zvalmj > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-66hEy.framer-v-ybwnsp .framer-zvalmj > :first-child { margin-left: 0px; } .framer-66hEy.framer-v-ybwnsp .framer-zvalmj > :last-child { margin-right: 0px; } .framer-66hEy.framer-v-ybwnsp .framer-120wisx > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } }",
    ...A,
  ],
  u = B(ge, ue, "framer-66hEy"),
  ke = u;
u.displayName = "bottomnav";
u.defaultProps = { height: 211, width: 1315 };
T(u, {
  variant: {
    options: ["RAPk0R7Br", "VRsnRDtwz"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: F.Enum,
  },
});
q(
  u,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Geist Regular",
          source: "custom",
          url: "/assets/r1pBWPtYfrTGa73mpatQ7nwipKI.woff",
        },
        {
          family: "Geist Medium",
          source: "custom",
          url: "/assets/RAunq9gIEfRZ9Vxar4zkftoSE.woff",
        },
      ],
    },
    ...ie,
    ...le,
    ...U(X),
  ],
  { supportsExplicitInterCodegen: !0 }
);
export { ke as a };
//# sourceMappingURL=chunk-EYVL7MLY.mjs.map
