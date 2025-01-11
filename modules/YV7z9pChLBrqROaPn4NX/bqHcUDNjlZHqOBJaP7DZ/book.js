let r;
var s = (o) => {
  if (!r) {
    const n = o.forwardRef(
      ({ color: e = "currentColor", size: t = 24, ...d }, i) =>
        o.createElement(
          "svg",
          {
            ref: i,
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: t,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...d,
          },
          o.createElement("path", { d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20" }),
          o.createElement("path", {
            d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
          })
        )
    );
    (n.displayName = "Book"), (r = n);
  }
  return r;
};
export { s as default };
