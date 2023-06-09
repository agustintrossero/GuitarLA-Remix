var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 39,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 81,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("react"), import_react5 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-CK7YAHEO.css";

// app/components/header.jsx
var import_react3 = require("@remix-run/react");

// public/img/logo.svg
var logo_default = "/build/_assets/logo-YZ2KDQEU.svg";

// app/components/navegacion.jsx
var import_react2 = require("@remix-run/react");

// public/img/carrito.png
var carrito_default = "/build/_assets/carrito-2445OMQO.png";

// app/components/navegacion.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), Navegacion = () => {
  let location = (0, import_react2.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "navegacion", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/",
        className: location.pathname === "/" ? "active" : "",
        children: "Inicio"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 9,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/nosotros",
        className: location.pathname === "/nosotros" ? "active" : "",
        children: "Nosotros"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 13,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/guitarras",
        className: location.pathname === "/guitarras" ? "active" : "",
        children: "Tienda"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 17,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/blog",
        className: location.pathname === "/blog" ? "active" : "",
        children: "Blog"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 21,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/carrito",
        className: "carrito",
        img: !0,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: carrito_default, alt: "Imagen carrito" }, void 0, !1, {
          fileName: "app/components/navegacion.jsx",
          lineNumber: 30,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 25,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/navegacion.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}, navegacion_default = Navegacion;

// app/components/header.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "contenedor barra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "logo", src: logo_default, alt: "Imagen de logo" }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 11,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(navegacion_default, {}, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.jsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/header.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var header_default = Header;

// app/components/footer.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "contenedor contenido", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(navegacion_default, {}, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 8,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "copyright", children: [
    "Todos los derechos reservados ",
    new Date().getFullYear()
  ] }, void 0, !0, {
    fileName: "app/components/footer.jsx",
    lineNumber: 9,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/components/footer.jsx",
  lineNumber: 7,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/footer.jsx",
  lineNumber: 6,
  columnNumber: 5
}, this), footer_default = Footer;

// app/root.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function meta() {
  return {
    charset: "utf-8",
    title: "GuitarLA - Remix",
    viewport: "width=device-width,initial-scale=1"
  };
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap"
    },
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
}
function App() {
  let carritoLS = typeof window < "u" ? JSON.parse(localStorage.getItem("carrito")) ?? [] : null, [carrito, setCarrito] = (0, import_react4.useState)(carritoLS);
  return (0, import_react4.useEffect)(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react5.Outlet,
    {
      context: {
        agregarCarrito: (guitarra) => {
          if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
            let carritoActualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
            setCarrito(carritoActualizado);
          } else
            setCarrito([...carrito, guitarra]);
        },
        carrito,
        actualizarCantidad: (guitarra) => {
          let carritoActualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
          setCarrito(carritoActualizado);
        },
        eliminarGuitarra: (id) => {
          let carritoActualizado = carrito.filter((guitarraState) => guitarraState.id !== id);
          setCarrito(carritoActualizado);
        }
      }
    },
    void 0,
    !1,
    {
      fileName: "app/root.jsx",
      lineNumber: 92,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 91,
    columnNumber: 9
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 108,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 109,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 107,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(header_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 112,
        columnNumber: 17
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(footer_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 114,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 115,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 116,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 111,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 106,
    columnNumber: 9
  }, this);
}
function CatchBoundary() {
  let error = (0, import_react5.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 126,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: "/", className: "error-enlace", children: "Tal vez quieras volver a la p\xE1gina principal" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 127,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 125,
    columnNumber: 9
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 136,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: "/", className: "error-enlace", children: "Tal vez quieras volver a la p\xE1gina principal" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 137,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 135,
    columnNumber: 9
  }, this);
}

// app/routes/guitarras.jsx
var guitarras_exports = {};
__export(guitarras_exports, {
  default: () => guitarras_default2,
  links: () => links2
});
var import_react6 = require("@remix-run/react");

// app/styles/guitarras.css
var guitarras_default = "/build/_assets/guitarras-2S7L3QMU.css";

// app/routes/guitarras.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function links2() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    }
  ];
}
function Tienda() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_react6.Outlet,
    {
      context: (0, import_react6.useOutletContext)()
    },
    void 0,
    !1,
    {
      fileName: "app/routes/guitarras.jsx",
      lineNumber: 17,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/guitarras.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var guitarras_default2 = Tienda;

// app/routes/guitarras/$guitarraUrl.jsx
var guitarraUrl_exports = {};
__export(guitarraUrl_exports, {
  default: () => guitarraUrl_default,
  loader: () => loader,
  meta: () => meta2
});
var import_react7 = require("react"), import_react8 = require("@remix-run/react");

// app/models/guitarras.server.js
async function getGuitarras() {
  return await (await fetch(`${process.env.API_URL}/api/guitarras?populate=imagen`)).json();
}
async function getGuitarra(url) {
  return await (await fetch(`${process.env.API_URL}/api/guitarras?filters[url]=${url}&populate=imagen`)).json();
}

// app/routes/guitarras/$guitarraUrl.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
async function loader({ params }) {
  let { guitarraUrl } = params, guitarra = await getGuitarra(guitarraUrl);
  if (guitarra.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Guitarra No Encontrada"
    });
  return guitarra;
}
function meta2({ data }) {
  return data ? {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
  } : {
    title: "GuitarLA - Guitarra No Encontrada",
    description: "Guitarras, venta de guitarras, Guitarra No Encontrada"
  };
}
function Guitarra() {
  var _a, _b;
  let { agregarCarrito } = (0, import_react8.useOutletContext)(), [cantidad, setCantidad] = (0, import_react7.useState)(0), guitarra = (0, import_react8.useLoaderData)(), { imagen, nombre, descripcion, precio } = guitarra.data[0].attributes, handleSubmit = (e) => {
    var _a2, _b2;
    if (e.preventDefault(), cantidad < 1) {
      alert("Debes seleccionar una cantidad");
      return;
    }
    let guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: (_b2 = (_a2 = imagen == null ? void 0 : imagen.data) == null ? void 0 : _a2.attributes) == null ? void 0 : _b2.url,
      nombre,
      precio,
      cantidad
    };
    agregarCarrito(guitarraSeleccionada);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: (_b = (_a = imagen == null ? void 0 : imagen.data) == null ? void 0 : _a.attributes) == null ? void 0 : _b.url, alt: `Imagen de Guitarra ${nombre}`, className: "imagen" }, void 0, !1, {
      fileName: "app/routes/guitarras/$guitarraUrl.jsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { children: nombre }, void 0, !1, {
        fileName: "app/routes/guitarras/$guitarraUrl.jsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "texto", children: descripcion }, void 0, !1, {
        fileName: "app/routes/guitarras/$guitarraUrl.jsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "precio", children: precio }, void 0, !1, {
        fileName: "app/routes/guitarras/$guitarraUrl.jsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("form", { onSubmit: handleSubmit, className: "formulario", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "cantidad", children: "Cantidad" }, void 0, !1, {
          fileName: "app/routes/guitarras/$guitarraUrl.jsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "select",
          {
            onChange: (e) => setCantidad(parseInt(e.target.value)),
            id: "cantidad",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "", children: "-- Seleccione --" }, void 0, !1, {
                fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                lineNumber: 71,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "1", children: "1" }, void 0, !1, {
                fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                lineNumber: 72,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "2", children: "2" }, void 0, !1, {
                fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                lineNumber: 73,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "3", children: "3" }, void 0, !1, {
                fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                lineNumber: 74,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "4", children: "4" }, void 0, !1, {
                fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                lineNumber: 75,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "5", children: "5" }, void 0, !1, {
                fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                lineNumber: 76,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/guitarras/$guitarraUrl.jsx",
            lineNumber: 67,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "submit", value: "Agregar al carrito" }, void 0, !1, {
          fileName: "app/routes/guitarras/$guitarraUrl.jsx",
          lineNumber: 78,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/guitarras/$guitarraUrl.jsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/guitarras/$guitarraUrl.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/guitarras/$guitarraUrl.jsx",
    lineNumber: 58,
    columnNumber: 7
  }, this);
}
var guitarraUrl_default = Guitarra;

// app/routes/guitarras/index.jsx
var guitarras_exports2 = {};
__export(guitarras_exports2, {
  default: () => guitarras_default3,
  loader: () => loader2,
  meta: () => meta3
});
var import_react10 = require("@remix-run/react");

// app/components/guitarra.jsx
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Guitarra2({ guitarra }) {
  let { nombre, descripcion, imagen, precio, URL } = guitarra;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: imagen.data.attributes.formats.small.url, alt: `Imagen de Guitarra ${nombre}` }, void 0, !1, {
      fileName: "app/components/guitarra.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { children: guitarra.nombre }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 10,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "descripcion", children: descripcion }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 11,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "precio", children: precio }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react9.Link, { className: "enlace", to: `/guitarras/${URL}`, children: "Ver Producto" }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/guitarra.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/guitarra.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/listado-guitarras.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ListadoGuitarras({ guitarras }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "heading", children: "Nuestra Colecci\xF3n" }, void 0, !1, {
      fileName: "app/components/listado-guitarras.jsx",
      lineNumber: 6,
      columnNumber: 5
    }, this),
    guitarras.length && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "guitarras-grid", children: guitarras.map((guitarra) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      Guitarra2,
      {
        guitarra: guitarra.attributes
      },
      guitarra.id,
      !1,
      {
        fileName: "app/components/listado-guitarras.jsx",
        lineNumber: 10,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/listado-guitarras.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/listado-guitarras.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/guitarras/index.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function meta3() {
  return {
    title: "GuitarLA - Tienda de Guitarras",
    description: "Nuestra coleccion de Guitarras"
  };
}
async function loader2() {
  return (await getGuitarras()).data;
}
function Tienda2() {
  let guitarras = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    ListadoGuitarras,
    {
      guitarras
    },
    void 0,
    !1,
    {
      fileName: "app/routes/guitarras/index.jsx",
      lineNumber: 20,
      columnNumber: 7
    },
    this
  );
}
var guitarras_default3 = Tienda2;

// app/routes/nosotros.jsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => nosotros_default3,
  links: () => links3,
  meta: () => meta4
});

// public/img/nosotros.jpg
var nosotros_default = "/build/_assets/nosotros-55PFFMUZ.jpg";

// app/styles/nosotros.css
var nosotros_default2 = "/build/_assets/nosotros-Z33XYEZR.css";

// app/routes/nosotros.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function meta4() {
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: "Venta de guitarras. Blog de m\xFAsica"
  };
}
function links3() {
  return [
    {
      rel: "stylesheet",
      href: nosotros_default2
    },
    {
      rel: "preload",
      href: nosotros_default,
      as: "image"
    }
  ];
}
function Nosotros() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { className: "contenedor nosotros", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "heading", children: "Nosotros" }, void 0, !1, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: nosotros_default, alt: "imagen sobre nosotros" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }, void 0, !1, {
          fileName: "app/routes/nosotros.jsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }, void 0, !1, {
          fileName: "app/routes/nosotros.jsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/nosotros.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
var nosotros_default3 = Nosotros;

// app/routes/carrito.jsx
var carrito_exports = {};
__export(carrito_exports, {
  default: () => Carrito,
  links: () => links4,
  meta: () => meta5
});
var import_react11 = require("react"), import_react12 = require("@remix-run/react"), import_remix_utils = require("remix-utils");

// app/styles/carrito.css
var carrito_default2 = "/build/_assets/carrito-67D2AG4W.css";

// app/routes/carrito.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function links4() {
  return [
    {
      rel: "stylesheet",
      href: carrito_default2
    }
  ];
}
function meta5() {
  return {
    title: "GuitarLA - Carrito de Compras",
    description: "Venta de guitarras, m\xFAsica, blog, carrito de compras, tienda"
  };
}
function Carrito() {
  let [total, setTotal] = (0, import_react11.useState)(0), { carrito, actualizarCantidad, eliminarGuitarra } = (0, import_react12.useOutletContext)();
  return (0, import_react11.useEffect)(() => {
    let calculoTotal = carrito.reduce((total2, producto) => total2 + producto.cantidad * producto.precio, 0);
    setTotal(calculoTotal);
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_remix_utils.ClientOnly, { fallback: "cargando...", children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("main", { className: "contenedor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "heading", children: "Carrito de Compras" }, void 0, !1, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "carrito", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { children: "Articulos" }, void 0, !1, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 38,
          columnNumber: 21
        }, this),
        (carrito == null ? void 0 : carrito.length) === 0 ? "Carrito Vacio" : carrito == null ? void 0 : carrito.map((producto) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "producto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: producto.imagen, alt: `Producto - Guitarra tipo ${producto.nombre}` }, void 0, !1, {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 43,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 42,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "nombre", children: producto.nombre }, void 0, !1, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 46,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "cantidad", children: "Cantidad:" }, void 0, !1, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 47,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "select",
              {
                className: "select",
                value: producto.cantidad,
                onChange: (e) => actualizarCantidad(
                  {
                    cantidad: +e.target.value,
                    id: producto.id
                  }
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "1", children: "1" }, void 0, !1, {
                    fileName: "app/routes/carrito.jsx",
                    lineNumber: 57,
                    columnNumber: 41
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "2", children: "2" }, void 0, !1, {
                    fileName: "app/routes/carrito.jsx",
                    lineNumber: 58,
                    columnNumber: 41
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "3", children: "3" }, void 0, !1, {
                    fileName: "app/routes/carrito.jsx",
                    lineNumber: 59,
                    columnNumber: 41
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "4", children: "4" }, void 0, !1, {
                    fileName: "app/routes/carrito.jsx",
                    lineNumber: 60,
                    columnNumber: 41
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "5", children: "5" }, void 0, !1, {
                    fileName: "app/routes/carrito.jsx",
                    lineNumber: 61,
                    columnNumber: 41
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 48,
                columnNumber: 37
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "precio", children: [
              "$ ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: producto.precio }, void 0, !1, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 63,
                columnNumber: 61
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 63,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "subtotal", children: [
              "Subtotal: $ ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: producto.cantidad * producto.precio }, void 0, !1, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 64,
                columnNumber: 73
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 64,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 45,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "button",
            {
              type: "button",
              className: "btn_eliminar",
              onClick: () => eliminarGuitarra(producto.id),
              children: "X"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 66,
              columnNumber: 33
            },
            this
          )
        ] }, producto.id, !0, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 41,
          columnNumber: 29
        }, this))
      ] }, void 0, !0, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("aside", { className: "resumen", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { children: "Resumen del Pedido" }, void 0, !1, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 76,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: [
          "Total a pagar: $",
          total
        ] }, void 0, !0, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 77,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 75,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/carrito.jsx",
    lineNumber: 34,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/carrito.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  links: () => links5,
  loader: () => loader3,
  meta: () => meta6
});

// app/models/posts.server.js
async function getPosts() {
  return await (await fetch(`${process.env.API_URL}/api/posts?populate=imagen`)).json();
}
async function getPost(url) {
  return (await fetch(`${process.env.API_URL}/api/posts?filters[url]=${url}&populate=imagen`)).json();
}

// app/models/cursos.server.js
async function getCursos() {
  return await (await fetch(`${process.env.API_URL}/api/curso?populate=imagen`)).json();
}

// app/routes/index.jsx
var import_react14 = require("@remix-run/react");

// app/components/post.jsx
var import_react13 = require("@remix-run/react");

// app/utils/helpers.js
var formatearFecha = (fecha) => {
  let fechaNueva = new Date(fecha), opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

// app/components/post.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function post({ post: post2 }) {
  let { titulo, contenido, imagen, URL, publishedAt } = post2;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("article", { className: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { className: "imagen", src: imagen.data.attributes.formats.small.url, alt: `Imagen de Post ${titulo}` }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { children: titulo }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 11,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "resumen", children: contenido }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react13.Link, { className: "enlace", to: `/blog/${URL}`, children: "Leer Post" }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 14,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/post.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/post.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/listado-posts.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function ListadoPosts({ posts }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "heading", children: "Blog" }, void 0, !1, {
      fileName: "app/components/listado-posts.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "blog", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "blog-grid", children: posts.map((post2) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      post,
      {
        post: post2.attributes
      },
      post2.id,
      !1,
      {
        fileName: "app/components/listado-posts.jsx",
        lineNumber: 10,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/listado-posts.jsx",
      lineNumber: 8,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/listado-posts.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/listado-posts.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/curso.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Curso({ curso }) {
  let { contenido, imagen, titulo } = curso;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { className: "curso", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("style", { jsx: "true", children: `
                .curso {
                   background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${imagen.data.attributes.url})
                }
            ` }, void 0, !1, {
      fileName: "app/components/curso.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "contenedor curso-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "heading", children: titulo }, void 0, !1, {
        fileName: "app/components/curso.jsx",
        lineNumber: 15,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "texto", children: contenido }, void 0, !1, {
        fileName: "app/components/curso.jsx",
        lineNumber: 16,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/curso.jsx",
      lineNumber: 14,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/curso.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/curso.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

// app/styles/blog.css
var blog_default = "/build/_assets/blog-CERMTMSU.css";

// app/styles/curso.css
var curso_default = "/build/_assets/curso-7I26V4L6.css";

// app/routes/index.jsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function meta6() {
}
function links5() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    },
    {
      rel: "stylesheet",
      href: blog_default
    },
    {
      rel: "stylesheet",
      href: curso_default
    }
  ];
}
async function loader3() {
  let [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCursos()
  ]);
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  };
}
function Index() {
  let { guitarras, posts, curso } = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      ListadoGuitarras,
      {
        guitarras
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.jsx",
        lineNumber: 51,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      Curso,
      {
        curso: curso.attributes
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.jsx",
        lineNumber: 55,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      ListadoPosts,
      {
        posts
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.jsx",
        lineNumber: 59,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
var routes_default = Index;

// app/routes/blog.jsx
var blog_exports = {};
__export(blog_exports, {
  default: () => blog_default2,
  links: () => links6
});
var import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function links6() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
function Blog() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react15.Outlet, {}, void 0, !1, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 16,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var blog_default2 = Blog;

// app/routes/blog/$postUrl.jsx
var postUrl_exports = {};
__export(postUrl_exports, {
  default: () => Post,
  loader: () => loader4,
  meta: () => meta7
});
var import_react16 = require("@remix-run/react");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function meta7({ data }) {
  return data ? {
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    description: `Nuestra seleccion de Blogs, Blog ${data.data[0].attributes.titulo}`
  } : {
    title: "GuitarLA - Entrada No Encontrada",
    description: "Nuestra seleccion de Blogs, Blogs, Entrada No Encontrada"
  };
}
async function loader4({ params }) {
  let { postUrl } = params, post2 = await getPost(postUrl);
  if (post2.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Entrada No Encontrada"
    });
  return post2;
}
function Post() {
  var _a, _b, _c;
  let post2 = (0, import_react16.useLoaderData)(), { titulo, contenido, imagen, publishedAt } = (_a = post2 == null ? void 0 : post2.data[0]) == null ? void 0 : _a.attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("article", { className: "post mt-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { className: "imagen", src: (_c = (_b = imagen == null ? void 0 : imagen.data) == null ? void 0 : _b.attributes) == null ? void 0 : _c.url, alt: `Imagen de Post ${titulo}` }, void 0, !1, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h3", { children: titulo }, void 0, !1, {
        fileName: "app/routes/blog/$postUrl.jsx",
        lineNumber: 42,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, !1, {
        fileName: "app/routes/blog/$postUrl.jsx",
        lineNumber: 43,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "texto", children: contenido }, void 0, !1, {
        fileName: "app/routes/blog/$postUrl.jsx",
        lineNumber: 44,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog/$postUrl.jsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/routes/blog/index.jsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => blog_default3,
  loader: () => loader5,
  meta: () => meta8
});
var import_react17 = require("@remix-run/react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function meta8() {
  return {
    title: "GuitarLA - Nuestro Blog",
    description: "Nuestra seleccion de Blogs"
  };
}
async function loader5() {
  return (await getPosts()).data;
}
function Blog2() {
  let posts = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    ListadoPosts,
    {
      posts
    },
    void 0,
    !1,
    {
      fileName: "app/routes/blog/index.jsx",
      lineNumber: 20,
      columnNumber: 7
    },
    this
  );
}
var blog_default3 = Blog2;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "8d45d525", entry: { module: "/build/entry.client-R3HW2GKD.js", imports: ["/build/_shared/chunk-SZLBF35E.js", "/build/_shared/chunk-EETRBLDB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VPFDGAXU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-SAS4E7DL.js", imports: ["/build/_shared/chunk-D5XMEZOQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/$postUrl": { id: "routes/blog/$postUrl", parentId: "routes/blog", path: ":postUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/$postUrl-DPKCJUW5.js", imports: ["/build/_shared/chunk-R22AXYZC.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/index": { id: "routes/blog/index", parentId: "routes/blog", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/blog/index-TVFHJIUZ.js", imports: ["/build/_shared/chunk-KXBS3ZQJ.js", "/build/_shared/chunk-R22AXYZC.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/carrito": { id: "routes/carrito", parentId: "root", path: "carrito", index: void 0, caseSensitive: void 0, module: "/build/routes/carrito-MCBPHJOW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras": { id: "routes/guitarras", parentId: "root", path: "guitarras", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras-MXKZAL53.js", imports: ["/build/_shared/chunk-QTOC6O2R.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras/$guitarraUrl": { id: "routes/guitarras/$guitarraUrl", parentId: "routes/guitarras", path: ":guitarraUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras/$guitarraUrl-YJLGIZYH.js", imports: ["/build/_shared/chunk-JGUII2H5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras/index": { id: "routes/guitarras/index", parentId: "routes/guitarras", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/guitarras/index-YR46UI72.js", imports: ["/build/_shared/chunk-JGUII2H5.js", "/build/_shared/chunk-FHMVEO7X.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-CFYBK76M.js", imports: ["/build/_shared/chunk-D5XMEZOQ.js", "/build/_shared/chunk-KXBS3ZQJ.js", "/build/_shared/chunk-R22AXYZC.js", "/build/_shared/chunk-QTOC6O2R.js", "/build/_shared/chunk-FHMVEO7X.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-OCAMWIBA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-8D45D525.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/guitarras": {
    id: "routes/guitarras",
    parentId: "root",
    path: "guitarras",
    index: void 0,
    caseSensitive: void 0,
    module: guitarras_exports
  },
  "routes/guitarras/$guitarraUrl": {
    id: "routes/guitarras/$guitarraUrl",
    parentId: "routes/guitarras",
    path: ":guitarraUrl",
    index: void 0,
    caseSensitive: void 0,
    module: guitarraUrl_exports
  },
  "routes/guitarras/index": {
    id: "routes/guitarras/index",
    parentId: "routes/guitarras",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: guitarras_exports2
  },
  "routes/nosotros": {
    id: "routes/nosotros",
    parentId: "root",
    path: "nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: nosotros_exports
  },
  "routes/carrito": {
    id: "routes/carrito",
    parentId: "root",
    path: "carrito",
    index: void 0,
    caseSensitive: void 0,
    module: carrito_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/blog/$postUrl": {
    id: "routes/blog/$postUrl",
    parentId: "routes/blog",
    path: ":postUrl",
    index: void 0,
    caseSensitive: void 0,
    module: postUrl_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "routes/blog",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: blog_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
