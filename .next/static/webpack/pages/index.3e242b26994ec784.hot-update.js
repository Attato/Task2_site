"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/header */ \"./components/header.jsx\");\n/* harmony import */ var components_GridItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/GridItem */ \"./components/GridItem.jsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar categories = [\n    {\n        name: \"SOFA\",\n        category: \"Design\",\n        className: \"grid__item img1\"\n    },\n    {\n        name: \"KeyBoard\",\n        category: \"Branding\",\n        className: \"grid__item img2\"\n    },\n    {\n        name: \"Work Media\",\n        category: \"Illustration\",\n        className: \"grid__item img3\"\n    },\n    {\n        name: \"DDDone\",\n        category: \"Motion\",\n        className: \"grid__item img4\"\n    },\n    {\n        name: \"Abtract\",\n        category: \"Design\",\n        className: \"grid__item img5\"\n    },\n    {\n        name: \"HandP\",\n        category: \"Branding\",\n        className: \"grid__item img6\"\n    },\n    {\n        name: \"Architect\",\n        category: \"Motion\",\n        className: \"grid__item img7\"\n    },\n    {\n        name: \"CalC\",\n        category: \"Design\",\n        className: \"grid__item img8\"\n    },\n    {\n        name: \"Sport\",\n        category: \"Branding\",\n        className: \"grid__item img9\"\n    }, \n];\nvar Index = function() {\n    var _this1 = _this;\n    var getFilteredList = function getFilteredList() {\n        if (!selectedCategory) {\n            return categoryList;\n        }\n        return categoryList.filter(function(item) {\n            return item.category === selectedCategory;\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), categoryList = ref[0], setCategoryList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), selectedCategory = ref1[0], setSelectedCategory = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCategoryList(categories);\n    }, []);\n    var filteredList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(getFilteredList, [\n        selectedCategory,\n        categoryList\n    ]);\n    var handleCategoryChange = function(event) {\n        setSelectedCategory(event.target.value);\n    };\n    var PAGE_SIZE = 2; // or whatever you like\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index1 = ref2[0], setIndex = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), visibleData = ref3[0], setVisibleData = ref3[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Jupiter Task\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"background-primary\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"section__start\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"section__start-header\",\n                                children: \"Portfolio\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"section__start-text\",\n                                children: [\n                                    \"Agency provides a full service range including technical skills, design, business \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 141\n                                    }, _this),\n                                    \" understanding.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"background-secondary\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"tabs__menu\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                className: \"tab\",\n                                onClick: handleCategoryChange,\n                                style: {\n                                    color: selectedCategory == \"\" ? \"#4de248\" : \"\"\n                                },\n                                value: \"\",\n                                children: \"Show All\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                className: \"tab\",\n                                onClick: handleCategoryChange,\n                                style: {\n                                    color: selectedCategory == \"Design\" ? \"#4de248\" : \"\"\n                                },\n                                value: \"Design\",\n                                children: \"Design\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                className: \"tab\",\n                                onClick: handleCategoryChange,\n                                style: {\n                                    color: selectedCategory == \"Branding\" ? \"#4de248\" : \"\"\n                                },\n                                value: \"Branding\",\n                                children: \"Branding\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                className: \"tab\",\n                                onClick: handleCategoryChange,\n                                style: {\n                                    color: selectedCategory == \"Illustration\" ? \"#4de248\" : \"\"\n                                },\n                                value: \"Illustration\",\n                                children: \"Illustration\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                className: \"tab\",\n                                onClick: handleCategoryChange,\n                                style: {\n                                    color: selectedCategory == \"Motion\" ? \"#4de248\" : \"\"\n                                },\n                                value: \"Motion\",\n                                children: \"Motion\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"layout__grid-items\",\n                        children: filteredList.map(function(element, index) {\n                            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(components_GridItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, element, {\n                                key: index,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 21\n                                },\n                                __self: _this1\n                            }));\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"section-load__more\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"load__more-button\",\n                            onClick: function() {\n                                return setIndex(index1 + 1);\n                            },\n                            children: \"Load More\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rde85\\\\OneDrive\\\\\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B\\\\Repositories\\\\JupiterTask\\\\pages\\\\index.jsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Index, \"/zfhlm3hlGOyjxMhM+yEwU74KgE=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7NkJBQzNGOzs7Ozs7cUJBQ0o7O29CQUNQLENBQ047Q0FDSjtHQXpES2QsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBMkRYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyJ1xyXG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnY29tcG9uZW50cy9HcmlkSXRlbSdcclxuXHJcbmNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgICB7IG5hbWU6IFwiU09GQVwiLCBjYXRlZ29yeTogXCJEZXNpZ25cIiwgY2xhc3NOYW1lOiBcImdyaWRfX2l0ZW0gaW1nMVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2V5Qm9hcmRcIiwgY2F0ZWdvcnk6IFwiQnJhbmRpbmdcIiwgY2xhc3NOYW1lOiBcImdyaWRfX2l0ZW0gaW1nMlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiV29yayBNZWRpYVwiLCBjYXRlZ29yeTogXCJJbGx1c3RyYXRpb25cIiwgY2xhc3NOYW1lOiBcImdyaWRfX2l0ZW0gaW1nM1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiREREb25lXCIsIGNhdGVnb3J5OiBcIk1vdGlvblwiLCBjbGFzc05hbWU6IFwiZ3JpZF9faXRlbSBpbWc0XCIgfSxcclxuICAgIHsgbmFtZTogXCJBYnRyYWN0XCIsIGNhdGVnb3J5OiBcIkRlc2lnblwiLCBjbGFzc05hbWU6IFwiZ3JpZF9faXRlbSBpbWc1XCIgfSxcclxuICAgIHsgbmFtZTogXCJIYW5kUFwiLCBjYXRlZ29yeTogXCJCcmFuZGluZ1wiLCBjbGFzc05hbWU6IFwiZ3JpZF9faXRlbSBpbWc2XCIgfSxcclxuICAgIHsgbmFtZTogXCJBcmNoaXRlY3RcIiwgY2F0ZWdvcnk6IFwiTW90aW9uXCIsIGNsYXNzTmFtZTogXCJncmlkX19pdGVtIGltZzdcIn0sXHJcbiAgICB7IG5hbWU6IFwiQ2FsQ1wiLCBjYXRlZ29yeTogXCJEZXNpZ25cIiwgY2xhc3NOYW1lOiBcImdyaWRfX2l0ZW0gaW1nOFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3BvcnRcIiwgY2F0ZWdvcnk6IFwiQnJhbmRpbmdcIiwgY2xhc3NOYW1lOiBcImdyaWRfX2l0ZW0gaW1nOVwiIH0sXHJcbl07XHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlMaXN0LCBzZXRDYXRlZ29yeUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRDYXRlZ29yeUxpc3QoY2F0ZWdvcmllcyk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB2YXIgZmlsdGVyZWRMaXN0ID0gdXNlTWVtbyhnZXRGaWx0ZXJlZExpc3QsIFtzZWxlY3RlZENhdGVnb3J5LCBjYXRlZ29yeUxpc3RdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYXRlZ29yeUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRGaWx0ZXJlZExpc3QoKSB7XHJcbiAgICAgICAgaWYgKCFzZWxlY3RlZENhdGVnb3J5KSB7XHJcbiAgICAgICAgICByZXR1cm4gY2F0ZWdvcnlMaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2F0ZWdvcnlMaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgUEFHRV9TSVpFID0gMiA7ICAvLyBvciB3aGF0ZXZlciB5b3UgbGlrZVxyXG4gICAgY29uc3QgW2luZGV4ICwgc2V0SW5kZXhdID0gdXNlU3RhdGUgKDApXHJcbiAgICBjb25zdCBbdmlzaWJsZURhdGEgLCBzZXRWaXNpYmxlRGF0YV0gPSB1c2VTdGF0ZSAoW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5KdXBpdGVyIFRhc2s8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX3N0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25fX3N0YXJ0LWhlYWRlclwiPlBvcnRmb2xpbzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VjdGlvbl9fc3RhcnQtdGV4dFwiPkFnZW5jeSBwcm92aWRlcyBhIGZ1bGwgc2VydmljZSByYW5nZSBpbmNsdWRpbmcgdGVjaG5pY2FsIHNraWxscywgZGVzaWduLCBidXNpbmVzcyA8YnI+PC9icj4gdW5kZXJzdGFuZGluZy48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic19fbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gY2xhc3NOYW1lPVwidGFiXCIgb25DbGljaz17aGFuZGxlQ2F0ZWdvcnlDaGFuZ2V9IHN0eWxlPXt7Y29sb3I6IHNlbGVjdGVkQ2F0ZWdvcnkgPT0gXCJcIiA/IFwiIzRkZTI0OFwiIDogXCJcIiB9fSB2YWx1ZT1cIlwiPlNob3cgQWxsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJ0YWJcIiBvbkNsaWNrPXtoYW5kbGVDYXRlZ29yeUNoYW5nZX0gc3R5bGU9e3tjb2xvcjogc2VsZWN0ZWRDYXRlZ29yeSA9PSBcIkRlc2lnblwiID8gXCIjNGRlMjQ4XCIgOiBcIlwiIH19IHZhbHVlPVwiRGVzaWduXCI+RGVzaWduPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJ0YWJcIiBvbkNsaWNrPXtoYW5kbGVDYXRlZ29yeUNoYW5nZX0gc3R5bGU9e3tjb2xvcjogc2VsZWN0ZWRDYXRlZ29yeSA9PSBcIkJyYW5kaW5nXCIgPyBcIiM0ZGUyNDhcIiA6IFwiXCIgfX0gdmFsdWU9XCJCcmFuZGluZ1wiPkJyYW5kaW5nPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJ0YWJcIiBvbkNsaWNrPXtoYW5kbGVDYXRlZ29yeUNoYW5nZX0gc3R5bGU9e3tjb2xvcjogc2VsZWN0ZWRDYXRlZ29yeSA9PSBcIklsbHVzdHJhdGlvblwiID8gXCIjNGRlMjQ4XCIgOiBcIlwiIH19IHZhbHVlPVwiSWxsdXN0cmF0aW9uXCI+SWxsdXN0cmF0aW9uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJ0YWJcIiBvbkNsaWNrPXtoYW5kbGVDYXRlZ29yeUNoYW5nZX0gc3R5bGU9e3tjb2xvcjogc2VsZWN0ZWRDYXRlZ29yeSA9PSBcIk1vdGlvblwiID8gXCIjNGRlMjQ4XCIgOiBcIlwiIH19IHZhbHVlPVwiTW90aW9uXCI+TW90aW9uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0X19ncmlkLWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICB7ZmlsdGVyZWRMaXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gey4uLmVsZW1lbnR9IGtleT17aW5kZXh9IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tbG9hZF9fbW9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibG9hZF9fbW9yZS1idXR0b25cIiBvbkNsaWNrPXsgKCkgPT4gc2V0SW5kZXggKGluZGV4KzEgKX0+TG9hZCBNb3JlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsIkhlYWQiLCJIZWFkZXIiLCJHcmlkSXRlbSIsImNhdGVnb3JpZXMiLCJuYW1lIiwiY2F0ZWdvcnkiLCJjbGFzc05hbWUiLCJJbmRleCIsImdldEZpbHRlcmVkTGlzdCIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJjYXRlZ29yeUxpc3QiLCJmaWx0ZXIiLCJpdGVtIiwic2V0Q2F0ZWdvcnlMaXN0Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsImZpbHRlcmVkTGlzdCIsImhhbmRsZUNhdGVnb3J5Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlBBR0VfU0laRSIsImluZGV4Iiwic2V0SW5kZXgiLCJ2aXNpYmxlRGF0YSIsInNldFZpc2libGVEYXRhIiwidGl0bGUiLCJkaXYiLCJoMSIsInNwYW4iLCJiciIsIm9wdGlvbiIsIm9uQ2xpY2siLCJzdHlsZSIsImNvbG9yIiwibWFwIiwiZWxlbWVudCIsImtleSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});