(function () {
  const A = window.AUTOR;
  const P = window.PROYECTOS || [];
  const $ = (s) => document.querySelector(s);
  const ruta = (p, archivo) => `proyectos/${p.id}/${archivo}`;

  function el(tag, attrs = {}, ...hijos) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v === undefined || v === null || v === false) continue;
      if (k === "class") n.className = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    }
    for (const h of hijos.flat()) if (h !== null && h !== undefined && h !== "") n.append(h);
    return n;
  }

  // Imagen con recuadro de aviso si el archivo aún no existe
  function imagen(src, alt) {
    const img = el("img", { src, alt, loading: "lazy" });
    img.addEventListener("error", () => {
      const nombre = src.split("/").pop();
      img.replaceWith(el("div", { class: "vacio" },
        el("span", {}, el("strong", {}, alt), `Agrega ${nombre} a la carpeta del proyecto`)));
    });
    return img;
  }

  function meta(p) {
    return el("div", { class: "meta" },
      el("span", { class: "area" }, p.area),
      el("span", {}, p.contexto),
      p.anio ? el("span", {}, p.anio) : null,
      p.estado === "En desarrollo" ? el("span", { class: "estado-dev" }, "En desarrollo") : null);
  }

  /* ---------- Página principal ---------- */
  function inicio() {
    $("#nombre").textContent = A.nombre;
    $("#titulo-autor").textContent = A.titulo;
    $("#intro").textContent = A.intro;
    $("#enlaces-autor").append(...A.enlaces.filter((e) => e.url).map((e) =>
      el("li", {}, el("a", { href: e.url }, e.texto))));
    $("#pie").textContent = `${A.nombre} · ${A.ubicacion}`;

    const areas = ["Todos", ...new Set(P.map((p) => p.area))];
    const filtros = $("#filtros");
    const lista = $("#lista");

    function pintar(area) {
      lista.replaceChildren(...P
        .filter((p) => area === "Todos" || p.area === area)
        .map((p) => el("a", {
          class: "proyecto" + (p.destacado && area === "Todos" ? " destacado" : ""),
          href: `proyecto.html?id=${encodeURIComponent(p.id)}`
        },
          el("div", { class: "marco" }, imagen(ruta(p, p.portada), p.titulo)),
          el("div", {}, el("h3", {}, p.titulo), el("p", {}, p.resumen), meta(p)))));
      filtros.querySelectorAll("button").forEach((b) =>
        b.setAttribute("aria-pressed", String(b.dataset.area === area)));
    }

    filtros.append(...areas.map((a) => el("button", {
      type: "button", "data-area": a, onclick: () => pintar(a)
    }, a)));
    pintar("Todos");
  }

  /* ---------- Página de detalle ---------- */
  function detalle() {
    const id = new URLSearchParams(location.search).get("id");
    const i = P.findIndex((p) => p.id === id);
    const main = $("#detalle");
    $("#marca").textContent = A.nombre;
    $("#pie").textContent = `${A.nombre} · ${A.ubicacion}`;

    if (i < 0) {
      main.replaceChildren(el("div", { class: "contenedor no-encontrado" },
        el("h1", {}, "Este proyecto no existe"),
        el("p", {}, "Revisa que el id del enlace coincida con uno de data/proyectos.js."),
        el("a", { href: "index.html" }, "Ver todos los proyectos")));
      return;
    }
    const p = P[i];
    document.title = `${p.titulo} · ${A.nombre}`;

    const visor = $("#visor");
    const abrir = (src, titulo) => {
      visor.querySelector("img").src = src;
      visor.querySelector("img").alt = titulo;
      visor.querySelector("span").textContent = titulo;
      visor.showModal();
    };

    const portadaImg = imagen(ruta(p, p.portada), p.titulo);
    portadaImg.addEventListener("click", () => abrir(ruta(p, p.portada), p.titulo));

    const enlaces = (p.enlaces || []).filter((e) => e.url);
    const lateral = el("aside", { class: "lateral" },
      el("h3", {}, "Contexto"), el("p", {}, p.contexto + (p.anio ? `, ${p.anio}` : "")),
      el("h3", {}, "Estado"), el("p", {}, p.estado),
      p.rol ? [el("h3", {}, "Mi rol"), el("p", {}, p.rol)] : null,
      el("h3", {}, "Tecnologías"),
      el("ul", { class: "chips" }, p.tecnologias.map((t) => el("li", {}, t))),
      enlaces.length ? [el("h3", {}, "Enlaces"),
        el("ul", { class: "lista-simple" }, enlaces.map((e) => el("li", {}, el("a", { href: e.url }, e.texto))))] : null);

    const galeria = el("div", { class: "galeria" }, p.galeria.map((g) =>
      el("figure", {},
        el("button", { type: "button", "aria-label": `Ampliar ${g.titulo}`, onclick: () => abrir(ruta(p, g.archivo), g.titulo) },
          imagen(ruta(p, g.archivo), g.titulo)),
        el("figcaption", {}, g.titulo))));

    const texto = el("div", { class: "texto" },
      el("h2", {}, "Descripción"),
      p.descripcion.map((t) => el("p", {}, t)),
      p.resultados && p.resultados.length
        ? [el("h2", {}, "Resultados"), el("ul", { class: "lista-simple" }, p.resultados.map((r) => el("li", {}, r)))]
        : null,
      el("h2", {}, "Resultado, esquemático y circuito impreso"),
      galeria);

    const ant = P[(i - 1 + P.length) % P.length];
    const sig = P[(i + 1) % P.length];

    main.replaceChildren(
      el("header", { class: "contenedor detalle-cabeza" },
        el("h1", {}, p.titulo), el("p", { class: "resumen" }, p.resumen), meta(p)),
      el("div", { class: "contenedor" }, el("div", { class: "portada" }, portadaImg)),
      el("div", { class: "contenedor cuerpo" }, texto, lateral),
      P.length > 1 ? el("nav", { class: "contenedor vecinos", "aria-label": "Otros proyectos" },
        el("a", { href: `proyecto.html?id=${ant.id}` }, el("small", {}, "Anterior"), el("strong", {}, ant.titulo)),
        el("a", { class: "sig", href: `proyecto.html?id=${sig.id}` }, el("small", {}, "Siguiente"), el("strong", {}, sig.titulo))) : null);

    visor.querySelector("button").addEventListener("click", () => visor.close());
    visor.addEventListener("click", (e) => { if (e.target === visor) visor.close(); });
  }

  document.body.dataset.pagina === "detalle" ? detalle() : inicio();
})();
