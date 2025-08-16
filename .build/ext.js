"use strict";
var __StripeExtExports = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/@stripe/ui-extension-sdk/version.js
  var require_version = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/version.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SDK_VERSION = void 0;
      exports.SDK_VERSION = "9.0.0";
    }
  });

  // node_modules/@stripe/ui-extension-sdk/ui/index.js
  var require_ui = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TableRow = exports.Table = exports.TableHeaderCell = exports.TableHead = exports.TableFooter = exports.TableCell = exports.TableBody = exports.Tab = exports.TabPanels = exports.TabPanel = exports.TabList = exports.Switch = exports.StripeFileUploader = exports.Spinner = exports.Sparkline = exports.SignInView = exports.SettingsView = exports.Select = exports.Radio = exports.PropertyList = exports.PropertyListItem = exports.PlatformConfigurationView = exports.OnboardingView = exports.Menu = exports.MenuItem = exports.MenuGroup = exports.List = exports.ListItem = exports.Link = exports.LineChart = exports.Inline = exports.Img = exports.Icon = exports.FormFieldGroup = exports.FocusView = exports.Divider = exports.DetailPageModule = exports.DateField = exports.ContextView = exports.Chip = exports.ChipList = exports.Checkbox = exports.Button = exports.ButtonGroup = exports.Box = exports.BarChart = exports.Banner = exports.Badge = exports.Accordion = exports.AccordionItem = void 0;
      exports.Tooltip = exports.TextField = exports.TextArea = exports.TaskList = exports.TaskListItem = exports.Tabs = void 0;
      var jsx_runtime_1 = __require("react/jsx-runtime");
      var react_1 = __require("@remote-ui/react");
      var version_1 = require_version();
      var withSdkProps = (Component) => {
        const wrappedComponentName = Component.displayName || Component.toString();
        const WithSdkProps = (props) => (0, jsx_runtime_1.jsx)(Component, __spreadProps(__spreadValues({}, props), { wrappedComponentName, sdkVersion: version_1.SDK_VERSION, schemaVersion: "v9" }));
        WithSdkProps.wrappedComponentName = wrappedComponentName;
        return WithSdkProps;
      };
      var defineComponent = (name, fragmentProps, wrapWithSdkProps) => {
        const remoteComponent = (0, react_1.createRemoteReactComponent)(name, {
          fragmentProps
        });
        if (!wrapWithSdkProps) {
          return remoteComponent;
        }
        return withSdkProps(remoteComponent);
      };
      exports.AccordionItem = defineComponent("AccordionItem", ["title", "actions", "media", "subtitle"], true);
      exports.Accordion = defineComponent("Accordion", [], true);
      exports.Badge = defineComponent("Badge", [], true);
      exports.Banner = defineComponent("Banner", ["actions", "description", "title"], true);
      exports.BarChart = defineComponent("BarChart", [], true);
      exports.Box = defineComponent("Box", [], true);
      exports.ButtonGroup = defineComponent("ButtonGroup", ["menuTrigger"], true);
      exports.Button = defineComponent("Button", [], true);
      exports.Checkbox = defineComponent("Checkbox", ["label"], true);
      exports.ChipList = defineComponent("ChipList", [], true);
      exports.Chip = defineComponent("Chip", [], true);
      exports.ContextView = defineComponent("ContextView", ["actions", "banner", "footerContent", "primaryAction", "secondaryAction"], true);
      exports.DateField = defineComponent("DateField", ["label"], true);
      exports.DetailPageModule = defineComponent("DetailPageModule", [], true);
      exports.Divider = defineComponent("Divider", [], true);
      exports.FocusView = defineComponent("FocusView", ["footerContent", "primaryAction", "secondaryAction"], true);
      exports.FormFieldGroup = defineComponent("FormFieldGroup", [], true);
      exports.Icon = defineComponent("Icon", [], true);
      exports.Img = defineComponent("Img", [], true);
      exports.Inline = defineComponent("Inline", [], true);
      exports.LineChart = defineComponent("LineChart", [], true);
      exports.Link = defineComponent("Link", [], true);
      exports.ListItem = defineComponent("ListItem", ["icon", "image", "secondaryTitle", "title", "value"], true);
      exports.List = defineComponent("List", [], true);
      exports.MenuGroup = defineComponent("MenuGroup", ["title"], true);
      exports.MenuItem = defineComponent("MenuItem", [], true);
      exports.Menu = defineComponent("Menu", ["trigger"], true);
      exports.OnboardingView = defineComponent("OnboardingView", ["error"], true);
      exports.PlatformConfigurationView = defineComponent("PlatformConfigurationView", [], true);
      exports.PropertyListItem = defineComponent("PropertyListItem", ["label", "value"], true);
      exports.PropertyList = defineComponent("PropertyList", [], true);
      exports.Radio = defineComponent("Radio", ["label"], true);
      exports.Select = defineComponent("Select", ["label"], true);
      exports.SettingsView = defineComponent("SettingsView", [], true);
      exports.SignInView = defineComponent("SignInView", ["descriptionActionContents", "footerContent"], true);
      exports.Sparkline = defineComponent("Sparkline", [], true);
      exports.Spinner = defineComponent("Spinner", [], true);
      exports.StripeFileUploader = defineComponent("StripeFileUploader", [], true);
      exports.Switch = defineComponent("Switch", ["label"], true);
      exports.TabList = defineComponent("TabList", [], true);
      exports.TabPanel = defineComponent("TabPanel", [], true);
      exports.TabPanels = defineComponent("TabPanels", [], true);
      exports.Tab = defineComponent("Tab", [], true);
      exports.TableBody = defineComponent("TableBody", [], true);
      exports.TableCell = defineComponent("TableCell", [], true);
      exports.TableFooter = defineComponent("TableFooter", [], true);
      exports.TableHead = defineComponent("TableHead", [], true);
      exports.TableHeaderCell = defineComponent("TableHeaderCell", [], true);
      exports.Table = defineComponent("Table", [], true);
      exports.TableRow = defineComponent("TableRow", [], true);
      exports.Tabs = defineComponent("Tabs", [], true);
      exports.TaskListItem = defineComponent("TaskListItem", [], true);
      exports.TaskList = defineComponent("TaskList", [], true);
      exports.TextArea = defineComponent("TextArea", ["label"], true);
      exports.TextField = defineComponent("TextField", ["label"], true);
      exports.Tooltip = defineComponent("Tooltip", ["trigger"], true);
    }
  });

  // .build/manifest.js
  var manifest_exports = {};
  __export(manifest_exports, {
    BUILD_TIME: () => BUILD_TIME,
    CustomerDetails: () => CustomerDetails_default,
    default: () => manifest_default
  });

  // src/views/CustomerDetails.tsx
  var import_react = __require("react");
  var import_ui = __toESM(require_ui());

  // src/views/brand_icon.svg
  var brand_icon_default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjIxOCA5LjEwMjg1QzI0LjQwMDggOC45OTQyMiAyNC41NTc3IDguODQ4ODcgMjQuNjgyIDguNjc3OTdMMTcuNTE1NSA0LjQxODA5QzE2LjU3NzcgMy44NjA2NCAxNS40MjIzIDMuODYwNjQgMTQuNDg0NSA0LjQxODA5TDcuMzE3OTggOC42Nzc5N0M3LjQ0MjI5IDguODQ4ODcgNy41OTkyNCA4Ljk5NDIyIDcuNzgxOTkgOS4xMDI4NUwxNS4yNTA5IDEzLjU0MjVDMTUuNzE2MyAxMy44MTkyIDE2LjI4MzcgMTMuODE5MiAxNi43NDkxIDEzLjU0MjVMMjQuMjE4IDkuMTAyODVaIiBmaWxsPSIjNkE3MzgzIi8+CjxwYXRoIGQ9Ik0yNi41IDExLjU2MDNDMjYuNSAxMS40MjE1IDI2LjQ5MSAxMS4yODQxIDI2LjQ3MzYgMTEuMTQ4NkMyNi4yNTI5IDExLjM0NzkgMjYuMDExMyAxMS41MjY4IDI1Ljc1MDkgMTEuNjgxN0wxOC4yODIgMTYuMTIxM0MxNi44NzE4IDE2Ljk1OTYgMTUuMTI4MiAxNi45NTk2IDEzLjcxOCAxNi4xMjEzTDYuMjQ5MSAxMS42ODE3QzUuOTg4NjYgMTEuNTI2OCA1Ljc0NzEgMTEuMzQ3OSA1LjUyNjQ0IDExLjE0ODZDNS41MDg5NSAxMS4yODQxIDUuNSAxMS40MjE1IDUuNSAxMS41NjAzVjIwLjQzOTdDNS41IDIxLjU1NDYgNi4wNzc3MiAyMi41ODQ4IDcuMDE1NTQgMjMuMTQyM0wxNC40ODQ1IDI3LjU4MTlDMTUuNDIyMyAyOC4xMzk0IDE2LjU3NzcgMjguMTM5NCAxNy41MTU1IDI3LjU4MTlMMjQuOTg0NSAyMy4xNDIzQzI1LjkyMjMgMjIuNTg0OCAyNi41IDIxLjU1NDYgMjYuNSAyMC40Mzk3VjExLjU2MDNaIiBmaWxsPSIjNkE3MzgzIi8+Cjwvc3ZnPgo=";

  // src/views/CustomerDetails.tsx
  var import_jsx_runtime = __require("react/jsx-runtime");
  var CustomerDetails = ({
    userContext,
    environment
  }) => {
    var _a;
    const [attributionData, setAttributionData] = (0, import_react.useState)([]);
    const [loading, setLoading] = (0, import_react.useState)(true);
    const [error, setError] = (0, import_react.useState)(null);
    const customerId = (_a = environment.objectContext) == null ? void 0 : _a.id;
    (0, import_react.useEffect)(() => {
      const fetchAttributionData = () => __async(void 0, null, function* () {
        if (!customerId) {
          setLoading(false);
          return;
        }
        try {
          const mockData = [
            {
              date: "2024-01-15",
              campaign: "YouTube Video: Building SaaS",
              short_code: "ytb-123",
              amount: "$49.99",
              source: "Direct link click"
            },
            {
              date: "2024-01-10",
              campaign: "Blog Post: Marketing Tips",
              short_code: "blog-456",
              amount: "$29.99",
              source: "Email campaign"
            }
          ];
          setAttributionData(mockData);
          setLoading(false);
        } catch (err) {
          setError("Failed to load attribution data");
          setLoading(false);
        }
      });
      fetchAttributionData();
    }, [customerId]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.ContextView, {
      title: "Sales Attribution",
      brandColor: "#7C3AED",
      brandIcon: brand_icon_default,
      externalLink: {
        label: "Pepperlytics Dashboard",
        href: "https://app.pepperlytics.com"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
        css: { stack: "y", gap: "large" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
            css: { font: "heading" },
            children: "Marketing Attribution"
          }),
          loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
            css: { align: "center", padding: "large" },
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Spinner, {
              size: "large"
            })
          }) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
            css: { color: "critical", padding: "medium" },
            children: error
          }) : attributionData.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
            css: { color: "info", padding: "medium" },
            children: "No attribution data found for this customer."
          }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Table, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.TableHeader, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.TableHeaderCell, {
                    children: "Date"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.TableHeaderCell, {
                    children: "Campaign"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.TableHeaderCell, {
                    children: "Amount"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.TableHeaderCell, {
                    children: "Source"
                  })
                ]
              }),
              attributionData.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.TableRow, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.TableCell, {
                    children: item.date
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.TableCell, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
                      css: { stack: "y", gap: "small" },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                          children: item.campaign
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Badge, {
                          type: "neutral",
                          children: item.short_code
                        })
                      ]
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.TableCell, {
                    css: { font: "heading" },
                    children: item.amount
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.TableCell, {
                    children: item.source
                  })
                ]
              }, index))
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Divider, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
            css: { color: "info", fontSize: "small" },
            children: [
              "Track marketing attribution and campaign performance with",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Link, {
                external: true,
                href: "https://app.pepperlytics.com",
                target: "_blank",
                children: "Pepperlytics"
              }),
              ". This shows which campaigns and links led to this customer's purchases."
            ]
          })
        ]
      })
    });
  };
  var CustomerDetails_default = CustomerDetails;

  // .build/manifest.js
  __reExport(manifest_exports, __toESM(require_version()));
  var BUILD_TIME = "2025-08-13 01:22:34.331354 -0500 EST m=+1.359667668";
  var manifest_default = {
    "id": "com.pepperlytics.sales-tracker",
    "version": "1.0.1",
    "name": "Pepperlytics Sales Tracker",
    "icon": "icon.png",
    "permissions": [
      {
        "permission": "charge_read",
        "purpose": "Read payment data to track and attribute sales to marketing campaigns"
      },
      {
        "permission": "checkout_session_read",
        "purpose": "Access checkout session data for sales attribution and tracking"
      },
      {
        "permission": "customer_read",
        "purpose": "Read customer information to enhance sales tracking and attribution"
      },
      {
        "permission": "payment_intent_read",
        "purpose": "Access payment intent data for comprehensive sales tracking"
      }
    ],
    "connect_permissions": null,
    "ui_extension": {
      "views": [
        {
          "viewport": "stripe.dashboard.customer.detail",
          "component": "CustomerDetails"
        }
      ],
      "content_security_policy": {
        "connect-src": null,
        "image-src": null,
        "purpose": ""
      }
    },
    "distribution_type": "private"
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWkvaW5kZXguanMiLCAibWFuaWZlc3QuanMiLCAiLi4vc3JjL3ZpZXdzL0N1c3RvbWVyRGV0YWlscy50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TREtfVkVSU0lPTiA9IHZvaWQgMDtcbmV4cG9ydHMuU0RLX1ZFUlNJT04gPSAnOS4wLjAnO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UYWJsZVJvdyA9IGV4cG9ydHMuVGFibGUgPSBleHBvcnRzLlRhYmxlSGVhZGVyQ2VsbCA9IGV4cG9ydHMuVGFibGVIZWFkID0gZXhwb3J0cy5UYWJsZUZvb3RlciA9IGV4cG9ydHMuVGFibGVDZWxsID0gZXhwb3J0cy5UYWJsZUJvZHkgPSBleHBvcnRzLlRhYiA9IGV4cG9ydHMuVGFiUGFuZWxzID0gZXhwb3J0cy5UYWJQYW5lbCA9IGV4cG9ydHMuVGFiTGlzdCA9IGV4cG9ydHMuU3dpdGNoID0gZXhwb3J0cy5TdHJpcGVGaWxlVXBsb2FkZXIgPSBleHBvcnRzLlNwaW5uZXIgPSBleHBvcnRzLlNwYXJrbGluZSA9IGV4cG9ydHMuU2lnbkluVmlldyA9IGV4cG9ydHMuU2V0dGluZ3NWaWV3ID0gZXhwb3J0cy5TZWxlY3QgPSBleHBvcnRzLlJhZGlvID0gZXhwb3J0cy5Qcm9wZXJ0eUxpc3QgPSBleHBvcnRzLlByb3BlcnR5TGlzdEl0ZW0gPSBleHBvcnRzLlBsYXRmb3JtQ29uZmlndXJhdGlvblZpZXcgPSBleHBvcnRzLk9uYm9hcmRpbmdWaWV3ID0gZXhwb3J0cy5NZW51ID0gZXhwb3J0cy5NZW51SXRlbSA9IGV4cG9ydHMuTWVudUdyb3VwID0gZXhwb3J0cy5MaXN0ID0gZXhwb3J0cy5MaXN0SXRlbSA9IGV4cG9ydHMuTGluayA9IGV4cG9ydHMuTGluZUNoYXJ0ID0gZXhwb3J0cy5JbmxpbmUgPSBleHBvcnRzLkltZyA9IGV4cG9ydHMuSWNvbiA9IGV4cG9ydHMuRm9ybUZpZWxkR3JvdXAgPSBleHBvcnRzLkZvY3VzVmlldyA9IGV4cG9ydHMuRGl2aWRlciA9IGV4cG9ydHMuRGV0YWlsUGFnZU1vZHVsZSA9IGV4cG9ydHMuRGF0ZUZpZWxkID0gZXhwb3J0cy5Db250ZXh0VmlldyA9IGV4cG9ydHMuQ2hpcCA9IGV4cG9ydHMuQ2hpcExpc3QgPSBleHBvcnRzLkNoZWNrYm94ID0gZXhwb3J0cy5CdXR0b24gPSBleHBvcnRzLkJ1dHRvbkdyb3VwID0gZXhwb3J0cy5Cb3ggPSBleHBvcnRzLkJhckNoYXJ0ID0gZXhwb3J0cy5CYW5uZXIgPSBleHBvcnRzLkJhZGdlID0gZXhwb3J0cy5BY2NvcmRpb24gPSBleHBvcnRzLkFjY29yZGlvbkl0ZW0gPSB2b2lkIDA7XG5leHBvcnRzLlRvb2x0aXAgPSBleHBvcnRzLlRleHRGaWVsZCA9IGV4cG9ydHMuVGV4dEFyZWEgPSBleHBvcnRzLlRhc2tMaXN0ID0gZXhwb3J0cy5UYXNrTGlzdEl0ZW0gPSBleHBvcnRzLlRhYnMgPSB2b2lkIDA7XG5jb25zdCBqc3hfcnVudGltZV8xID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJAcmVtb3RlLXVpL3JlYWN0XCIpO1xuY29uc3QgdmVyc2lvbl8xID0gcmVxdWlyZShcIi4uL3ZlcnNpb25cIik7XG5jb25zdCB3aXRoU2RrUHJvcHMgPSAoQ29tcG9uZW50KSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50LnRvU3RyaW5nKCk7XG4gICAgY29uc3QgV2l0aFNka1Byb3BzID0gKHByb3BzKSA9PiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShDb21wb25lbnQsIHsgLi4ucHJvcHMsIHdyYXBwZWRDb21wb25lbnROYW1lOiB3cmFwcGVkQ29tcG9uZW50TmFtZSwgc2RrVmVyc2lvbjogdmVyc2lvbl8xLlNES19WRVJTSU9OLCBzY2hlbWFWZXJzaW9uOiBcInY5XCIgfSkpO1xuICAgIFdpdGhTZGtQcm9wcy53cmFwcGVkQ29tcG9uZW50TmFtZSA9IHdyYXBwZWRDb21wb25lbnROYW1lO1xuICAgIHJldHVybiBXaXRoU2RrUHJvcHM7XG59O1xuY29uc3QgZGVmaW5lQ29tcG9uZW50ID0gKG5hbWUsIGZyYWdtZW50UHJvcHMsIHdyYXBXaXRoU2RrUHJvcHMpID0+IHtcbiAgICBjb25zdCByZW1vdGVDb21wb25lbnQgPSAoMCwgcmVhY3RfMS5jcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCkobmFtZSwge1xuICAgICAgICBmcmFnbWVudFByb3BzLFxuICAgIH0pO1xuICAgIGlmICghd3JhcFdpdGhTZGtQcm9wcykge1xuICAgICAgICByZXR1cm4gcmVtb3RlQ29tcG9uZW50O1xuICAgIH1cbiAgICByZXR1cm4gd2l0aFNka1Byb3BzKHJlbW90ZUNvbXBvbmVudCk7XG59O1xuZXhwb3J0cy5BY2NvcmRpb25JdGVtID0gZGVmaW5lQ29tcG9uZW50KCdBY2NvcmRpb25JdGVtJywgWyd0aXRsZScsICdhY3Rpb25zJywgJ21lZGlhJywgJ3N1YnRpdGxlJ10sIHRydWUpO1xuZXhwb3J0cy5BY2NvcmRpb24gPSBkZWZpbmVDb21wb25lbnQoJ0FjY29yZGlvbicsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQmFkZ2UgPSBkZWZpbmVDb21wb25lbnQoJ0JhZGdlJywgW10sIHRydWUpO1xuZXhwb3J0cy5CYW5uZXIgPSBkZWZpbmVDb21wb25lbnQoJ0Jhbm5lcicsIFsnYWN0aW9ucycsICdkZXNjcmlwdGlvbicsICd0aXRsZSddLCB0cnVlKTtcbmV4cG9ydHMuQmFyQ2hhcnQgPSBkZWZpbmVDb21wb25lbnQoJ0JhckNoYXJ0JywgW10sIHRydWUpO1xuZXhwb3J0cy5Cb3ggPSBkZWZpbmVDb21wb25lbnQoJ0JveCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQnV0dG9uR3JvdXAgPSBkZWZpbmVDb21wb25lbnQoJ0J1dHRvbkdyb3VwJywgWydtZW51VHJpZ2dlciddLCB0cnVlKTtcbmV4cG9ydHMuQnV0dG9uID0gZGVmaW5lQ29tcG9uZW50KCdCdXR0b24nLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkNoZWNrYm94ID0gZGVmaW5lQ29tcG9uZW50KCdDaGVja2JveCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLkNoaXBMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdDaGlwTGlzdCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQ2hpcCA9IGRlZmluZUNvbXBvbmVudCgnQ2hpcCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuQ29udGV4dFZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ0NvbnRleHRWaWV3JywgWydhY3Rpb25zJywgJ2Jhbm5lcicsICdmb290ZXJDb250ZW50JywgJ3ByaW1hcnlBY3Rpb24nLCAnc2Vjb25kYXJ5QWN0aW9uJ10sIHRydWUpO1xuZXhwb3J0cy5EYXRlRmllbGQgPSBkZWZpbmVDb21wb25lbnQoJ0RhdGVGaWVsZCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLkRldGFpbFBhZ2VNb2R1bGUgPSBkZWZpbmVDb21wb25lbnQoJ0RldGFpbFBhZ2VNb2R1bGUnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkRpdmlkZXIgPSBkZWZpbmVDb21wb25lbnQoJ0RpdmlkZXInLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkZvY3VzVmlldyA9IGRlZmluZUNvbXBvbmVudCgnRm9jdXNWaWV3JywgWydmb290ZXJDb250ZW50JywgJ3ByaW1hcnlBY3Rpb24nLCAnc2Vjb25kYXJ5QWN0aW9uJ10sIHRydWUpO1xuZXhwb3J0cy5Gb3JtRmllbGRHcm91cCA9IGRlZmluZUNvbXBvbmVudCgnRm9ybUZpZWxkR3JvdXAnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkljb24gPSBkZWZpbmVDb21wb25lbnQoJ0ljb24nLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkltZyA9IGRlZmluZUNvbXBvbmVudCgnSW1nJywgW10sIHRydWUpO1xuZXhwb3J0cy5JbmxpbmUgPSBkZWZpbmVDb21wb25lbnQoJ0lubGluZScsIFtdLCB0cnVlKTtcbmV4cG9ydHMuTGluZUNoYXJ0ID0gZGVmaW5lQ29tcG9uZW50KCdMaW5lQ2hhcnQnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkxpbmsgPSBkZWZpbmVDb21wb25lbnQoJ0xpbmsnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLkxpc3RJdGVtID0gZGVmaW5lQ29tcG9uZW50KCdMaXN0SXRlbScsIFsnaWNvbicsICdpbWFnZScsICdzZWNvbmRhcnlUaXRsZScsICd0aXRsZScsICd2YWx1ZSddLCB0cnVlKTtcbmV4cG9ydHMuTGlzdCA9IGRlZmluZUNvbXBvbmVudCgnTGlzdCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuTWVudUdyb3VwID0gZGVmaW5lQ29tcG9uZW50KCdNZW51R3JvdXAnLCBbJ3RpdGxlJ10sIHRydWUpO1xuZXhwb3J0cy5NZW51SXRlbSA9IGRlZmluZUNvbXBvbmVudCgnTWVudUl0ZW0nLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLk1lbnUgPSBkZWZpbmVDb21wb25lbnQoJ01lbnUnLCBbJ3RyaWdnZXInXSwgdHJ1ZSk7XG5leHBvcnRzLk9uYm9hcmRpbmdWaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdPbmJvYXJkaW5nVmlldycsIFsnZXJyb3InXSwgdHJ1ZSk7XG5leHBvcnRzLlBsYXRmb3JtQ29uZmlndXJhdGlvblZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ1BsYXRmb3JtQ29uZmlndXJhdGlvblZpZXcnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlByb3BlcnR5TGlzdEl0ZW0gPSBkZWZpbmVDb21wb25lbnQoJ1Byb3BlcnR5TGlzdEl0ZW0nLCBbJ2xhYmVsJywgJ3ZhbHVlJ10sIHRydWUpO1xuZXhwb3J0cy5Qcm9wZXJ0eUxpc3QgPSBkZWZpbmVDb21wb25lbnQoJ1Byb3BlcnR5TGlzdCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuUmFkaW8gPSBkZWZpbmVDb21wb25lbnQoJ1JhZGlvJywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydHMuU2VsZWN0ID0gZGVmaW5lQ29tcG9uZW50KCdTZWxlY3QnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0cy5TZXR0aW5nc1ZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ1NldHRpbmdzVmlldycsIFtdLCB0cnVlKTtcbmV4cG9ydHMuU2lnbkluVmlldyA9IGRlZmluZUNvbXBvbmVudCgnU2lnbkluVmlldycsIFsnZGVzY3JpcHRpb25BY3Rpb25Db250ZW50cycsICdmb290ZXJDb250ZW50J10sIHRydWUpO1xuZXhwb3J0cy5TcGFya2xpbmUgPSBkZWZpbmVDb21wb25lbnQoJ1NwYXJrbGluZScsIFtdLCB0cnVlKTtcbmV4cG9ydHMuU3Bpbm5lciA9IGRlZmluZUNvbXBvbmVudCgnU3Bpbm5lcicsIFtdLCB0cnVlKTtcbmV4cG9ydHMuU3RyaXBlRmlsZVVwbG9hZGVyID0gZGVmaW5lQ29tcG9uZW50KCdTdHJpcGVGaWxlVXBsb2FkZXInLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlN3aXRjaCA9IGRlZmluZUNvbXBvbmVudCgnU3dpdGNoJywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydHMuVGFiTGlzdCA9IGRlZmluZUNvbXBvbmVudCgnVGFiTGlzdCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFiUGFuZWwgPSBkZWZpbmVDb21wb25lbnQoJ1RhYlBhbmVsJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJQYW5lbHMgPSBkZWZpbmVDb21wb25lbnQoJ1RhYlBhbmVscycsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFiID0gZGVmaW5lQ29tcG9uZW50KCdUYWInLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYmxlQm9keSA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVCb2R5JywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJsZUNlbGwgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlQ2VsbCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFibGVGb290ZXIgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlRm9vdGVyJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJsZUhlYWQgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlSGVhZCcsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFibGVIZWFkZXJDZWxsID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZUhlYWRlckNlbGwnLCBbXSwgdHJ1ZSk7XG5leHBvcnRzLlRhYmxlID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZScsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFibGVSb3cgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlUm93JywgW10sIHRydWUpO1xuZXhwb3J0cy5UYWJzID0gZGVmaW5lQ29tcG9uZW50KCdUYWJzJywgW10sIHRydWUpO1xuZXhwb3J0cy5UYXNrTGlzdEl0ZW0gPSBkZWZpbmVDb21wb25lbnQoJ1Rhc2tMaXN0SXRlbScsIFtdLCB0cnVlKTtcbmV4cG9ydHMuVGFza0xpc3QgPSBkZWZpbmVDb21wb25lbnQoJ1Rhc2tMaXN0JywgW10sIHRydWUpO1xuZXhwb3J0cy5UZXh0QXJlYSA9IGRlZmluZUNvbXBvbmVudCgnVGV4dEFyZWEnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0cy5UZXh0RmllbGQgPSBkZWZpbmVDb21wb25lbnQoJ1RleHRGaWVsZCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnRzLlRvb2x0aXAgPSBkZWZpbmVDb21wb25lbnQoJ1Rvb2x0aXAnLCBbJ3RyaWdnZXInXSwgdHJ1ZSk7XG4iLCAiLy8gQVVUT0dFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbmltcG9ydCBDdXN0b21lckRldGFpbHMgZnJvbSAnLi4vc3JjL3ZpZXdzL0N1c3RvbWVyRGV0YWlscyc7XG5cbmV4cG9ydCAqIGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uJztcbmV4cG9ydCBjb25zdCBCVUlMRF9USU1FID0gJzIwMjUtMDgtMTMgMDE6MjI6MzQuMzMxMzU0IC0wNTAwIEVTVCBtPSsxLjM1OTY2NzY2OCc7XG5cbmV4cG9ydCB7IFxuICBDdXN0b21lckRldGFpbHNcdFxuIH07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJpZFwiOiBcImNvbS5wZXBwZXJseXRpY3Muc2FsZXMtdHJhY2tlclwiLFxuICBcInZlcnNpb25cIjogXCIxLjAuMVwiLFxuICBcIm5hbWVcIjogXCJQZXBwZXJseXRpY3MgU2FsZXMgVHJhY2tlclwiLFxuICBcImljb25cIjogXCJpY29uLnBuZ1wiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjaGFyZ2VfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCBwYXltZW50IGRhdGEgdG8gdHJhY2sgYW5kIGF0dHJpYnV0ZSBzYWxlcyB0byBtYXJrZXRpbmcgY2FtcGFpZ25zXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImNoZWNrb3V0X3Nlc3Npb25fcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiQWNjZXNzIGNoZWNrb3V0IHNlc3Npb24gZGF0YSBmb3Igc2FsZXMgYXR0cmlidXRpb24gYW5kIHRyYWNraW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImN1c3RvbWVyX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlJlYWQgY3VzdG9tZXIgaW5mb3JtYXRpb24gdG8gZW5oYW5jZSBzYWxlcyB0cmFja2luZyBhbmQgYXR0cmlidXRpb25cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicGF5bWVudF9pbnRlbnRfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiQWNjZXNzIHBheW1lbnQgaW50ZW50IGRhdGEgZm9yIGNvbXByZWhlbnNpdmUgc2FsZXMgdHJhY2tpbmdcIlxuICAgIH1cbiAgXSxcbiAgXCJjb25uZWN0X3Blcm1pc3Npb25zXCI6IG51bGwsXG4gIFwidWlfZXh0ZW5zaW9uXCI6IHtcbiAgICBcInZpZXdzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInN0cmlwZS5kYXNoYm9hcmQuY3VzdG9tZXIuZGV0YWlsXCIsXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiQ3VzdG9tZXJEZXRhaWxzXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcIjoge1xuICAgICAgXCJjb25uZWN0LXNyY1wiOiBudWxsLFxuICAgICAgXCJpbWFnZS1zcmNcIjogbnVsbCxcbiAgICAgIFwicHVycG9zZVwiOiBcIlwiXG4gICAgfVxuICB9LFxuICBcImRpc3RyaWJ1dGlvbl90eXBlXCI6IFwicHJpdmF0ZVwiXG59O1xuIiwgImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIEJveCxcbiAgQmFkZ2UsXG4gIENvbnRleHRWaWV3LFxuICBEaXZpZGVyLFxuICBJbmxpbmUsXG4gIExpbmssXG4gIFNwaW5uZXIsXG4gIFRhYmxlLFxuICBUYWJsZUNlbGwsXG4gIFRhYmxlSGVhZGVyLFxuICBUYWJsZUhlYWRlckNlbGwsXG4gIFRhYmxlUm93LFxufSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpXCI7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dFwiO1xuXG5pbXBvcnQgQnJhbmRJY29uIGZyb20gXCIuL2JyYW5kX2ljb24uc3ZnXCI7XG5cbi8qKlxuICogVGhpcyBpcyBhIHZpZXcgdGhhdCBpcyByZW5kZXJlZCBpbiB0aGUgU3RyaXBlIGRhc2hib2FyZCdzIGN1c3RvbWVyIGRldGFpbCBwYWdlLlxuICogSW4gc3RyaXBlLWFwcC5qc29uLCB0aGlzIHZpZXcgaXMgY29uZmlndXJlZCB3aXRoIHN0cmlwZS5kYXNoYm9hcmQuY3VzdG9tZXIuZGV0YWlsIHZpZXdwb3J0LlxuICovXG5jb25zdCBDdXN0b21lckRldGFpbHMgPSAoe1xuICB1c2VyQ29udGV4dCxcbiAgZW52aXJvbm1lbnQsXG59OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgY29uc3QgW2F0dHJpYnV0aW9uRGF0YSwgc2V0QXR0cmlidXRpb25EYXRhXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIC8vIEdldCBjdXN0b21lciBJRCBmcm9tIGVudmlyb25tZW50XG4gIGNvbnN0IGN1c3RvbWVySWQgPSBlbnZpcm9ubWVudC5vYmplY3RDb250ZXh0Py5pZDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoQXR0cmlidXRpb25EYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCFjdXN0b21lcklkKSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd291bGQgY2FsbCB5b3VyIFBlcHBlcmx5dGljcyBBUEkgdG8gZ2V0IGF0dHJpYnV0aW9uIGRhdGFcbiAgICAgICAgLy8gRm9yIG5vdywgc2hvd2luZyBtb2NrIGRhdGEgc3RydWN0dXJlXG4gICAgICAgIGNvbnN0IG1vY2tEYXRhID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGU6IFwiMjAyNC0wMS0xNVwiLFxuICAgICAgICAgICAgY2FtcGFpZ246IFwiWW91VHViZSBWaWRlbzogQnVpbGRpbmcgU2FhU1wiLFxuICAgICAgICAgICAgc2hvcnRfY29kZTogXCJ5dGItMTIzXCIsXG4gICAgICAgICAgICBhbW91bnQ6IFwiJDQ5Ljk5XCIsXG4gICAgICAgICAgICBzb3VyY2U6IFwiRGlyZWN0IGxpbmsgY2xpY2tcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0ZTogXCIyMDI0LTAxLTEwXCIsIFxuICAgICAgICAgICAgY2FtcGFpZ246IFwiQmxvZyBQb3N0OiBNYXJrZXRpbmcgVGlwc1wiLFxuICAgICAgICAgICAgc2hvcnRfY29kZTogXCJibG9nLTQ1NlwiLFxuICAgICAgICAgICAgYW1vdW50OiBcIiQyOS45OVwiLFxuICAgICAgICAgICAgc291cmNlOiBcIkVtYWlsIGNhbXBhaWduXCJcbiAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICAgIFxuICAgICAgICBzZXRBdHRyaWJ1dGlvbkRhdGEobW9ja0RhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzZXRFcnJvcihcIkZhaWxlZCB0byBsb2FkIGF0dHJpYnV0aW9uIGRhdGFcIik7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaEF0dHJpYnV0aW9uRGF0YSgpO1xuICB9LCBbY3VzdG9tZXJJZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHRWaWV3XG4gICAgICB0aXRsZT1cIlNhbGVzIEF0dHJpYnV0aW9uXCJcbiAgICAgIGJyYW5kQ29sb3I9XCIjN0MzQUVEXCJcbiAgICAgIGJyYW5kSWNvbj17QnJhbmRJY29ufVxuICAgICAgZXh0ZXJuYWxMaW5rPXt7XG4gICAgICAgIGxhYmVsOiBcIlBlcHBlcmx5dGljcyBEYXNoYm9hcmRcIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL2FwcC5wZXBwZXJseXRpY3MuY29tXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiBcInlcIiwgZ2FwOiBcImxhcmdlXCIgfX0+XG4gICAgICAgIDxCb3ggY3NzPXt7IGZvbnQ6IFwiaGVhZGluZ1wiIH19Pk1hcmtldGluZyBBdHRyaWJ1dGlvbjwvQm94PlxuICAgICAgICBcbiAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgPEJveCBjc3M9e3sgYWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmc6IFwibGFyZ2VcIiB9fT5cbiAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkgOiBlcnJvciA/IChcbiAgICAgICAgICA8Qm94IGNzcz17eyBjb2xvcjogXCJjcml0aWNhbFwiLCBwYWRkaW5nOiBcIm1lZGl1bVwiIH19PlxuICAgICAgICAgICAge2Vycm9yfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApIDogYXR0cmlidXRpb25EYXRhLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8Qm94IGNzcz17eyBjb2xvcjogXCJpbmZvXCIsIHBhZGRpbmc6IFwibWVkaXVtXCIgfX0+XG4gICAgICAgICAgICBObyBhdHRyaWJ1dGlvbiBkYXRhIGZvdW5kIGZvciB0aGlzIGN1c3RvbWVyLlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgIDxUYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ2VsbD5EYXRlPC9UYWJsZUhlYWRlckNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUhlYWRlckNlbGw+Q2FtcGFpZ248L1RhYmxlSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ2VsbD5BbW91bnQ8L1RhYmxlSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ2VsbD5Tb3VyY2U8L1RhYmxlSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICB7YXR0cmlidXRpb25EYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2l0ZW0uZGF0ZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6IFwieVwiLCBnYXA6IFwic21hbGxcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEJveD57aXRlbS5jYW1wYWlnbn08L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9XCJuZXV0cmFsXCI+e2l0ZW0uc2hvcnRfY29kZX08L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjc3M9e3sgZm9udDogXCJoZWFkaW5nXCIgfX0+e2l0ZW0uYW1vdW50fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2l0ZW0uc291cmNlfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgKX1cblxuICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICBcbiAgICAgICAgPEJveCBjc3M9e3sgY29sb3I6IFwiaW5mb1wiLCBmb250U2l6ZTogXCJzbWFsbFwiIH19PlxuICAgICAgICAgIFRyYWNrIG1hcmtldGluZyBhdHRyaWJ1dGlvbiBhbmQgY2FtcGFpZ24gcGVyZm9ybWFuY2Ugd2l0aHtcIiBcIn1cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgZXh0ZXJuYWxcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FwcC5wZXBwZXJseXRpY3MuY29tXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUGVwcGVybHl0aWNzXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIC4gVGhpcyBzaG93cyB3aGljaCBjYW1wYWlnbnMgYW5kIGxpbmtzIGxlZCB0byB0aGlzIGN1c3RvbWVyJ3MgcHVyY2hhc2VzLlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGV4dFZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lckRldGFpbHM7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQSxhQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsY0FBUSxjQUFjO0FBQ3RCLGNBQVEsY0FBYztBQUFBO0FBQUE7OztBQ0h0QjtBQUFBO0FBQUE7QUFDQSxhQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsY0FBUSxXQUFXLFFBQVEsUUFBUSxRQUFRLGtCQUFrQixRQUFRLFlBQVksUUFBUSxjQUFjLFFBQVEsWUFBWSxRQUFRLFlBQVksUUFBUSxNQUFNLFFBQVEsWUFBWSxRQUFRLFdBQVcsUUFBUSxVQUFVLFFBQVEsU0FBUyxRQUFRLHFCQUFxQixRQUFRLFVBQVUsUUFBUSxZQUFZLFFBQVEsYUFBYSxRQUFRLGVBQWUsUUFBUSxTQUFTLFFBQVEsUUFBUSxRQUFRLGVBQWUsUUFBUSxtQkFBbUIsUUFBUSw0QkFBNEIsUUFBUSxpQkFBaUIsUUFBUSxPQUFPLFFBQVEsV0FBVyxRQUFRLFlBQVksUUFBUSxPQUFPLFFBQVEsV0FBVyxRQUFRLE9BQU8sUUFBUSxZQUFZLFFBQVEsU0FBUyxRQUFRLE1BQU0sUUFBUSxPQUFPLFFBQVEsaUJBQWlCLFFBQVEsWUFBWSxRQUFRLFVBQVUs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
