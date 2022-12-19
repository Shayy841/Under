var n;
(n = function () {
  "use strict";
  const n = document.querySelector("#pointer");
  document.querySelector(".redirect__inner");
  const e = 250,
    i = 125,
    t = document.querySelector(".redirect__move");
  window.addEventListener("mousemove", (o) => {
    t.classList.contains("is-moved") || t.classList.add("is-moved"),
      window.innerWidth / 2 - o.clientX < e &&
      o.clientX - window.innerWidth / 2 < e &&
      window.innerHeight / 2 - o.clientY < e &&
      o.clientY - window.innerHeight / 2 < e
        ? (n.style = `\n      transform: translate(${
            window.innerWidth / 2 - i
          }px, ${window.innerHeight / 2 - i}px) scale(3);\n    `)
        : (n.style = `\n      transform: translate(${o.clientX - i}px, ${
            o.clientY - i
          }px) scale(1);\n    `);
  }),
    window.addEventListener("touchmove", (e) => {
      const { clientX: o, clientY: s } = e.touches[0];
      t.classList.contains("is-moved") || t.classList.add("is-moved"),
        window.innerWidth / 2 - o < i &&
        o - window.innerWidth / 2 < i &&
        window.innerHeight / 2 - s < i &&
        s - window.innerHeight / 2 < i
          ? (n.style = `\n      transform: translate(${
              window.innerWidth / 2 - i
            }px, ${window.innerHeight / 2 - i}px) scale(1.75);\n    `)
          : (n.style = `\n      transform: translate(${o - i}px, ${
              s - i
            }px) scale(1);\n    `);
    });
}),
  "function" == typeof define && define.amd ? define("404", n) : n();


