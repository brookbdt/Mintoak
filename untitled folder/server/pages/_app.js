(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,800];
exports.modules = {

/***/ 823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContext": () => (/* binding */ AppContext),
/* harmony export */   "default": () => (/* binding */ AppContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
class AppContextProvider extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    state = {};
    setStore = (value)=>{
        this.setState(value);
    };
    render() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
            value: {
                store: this.state,
                setStore: this.setStore
            },
            children: this.props.children
        }));
    }
};


/***/ }),

/***/ 528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(722);
// EXTERNAL MODULE: ./pages/AppContext.js
var AppContext = __webpack_require__(823);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/helpers/Image.js
var Image = __webpack_require__(450);
;// CONCATENATED MODULE: ./components/headers/DesktopHeader.js



function DesktopHeader(headerProps) {
    const { activeDesktopMenu , setActiveDesktopMenu  } = headerProps;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden desktop:flex",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                    src: "/images/logo.svg",
                    height: 53.79,
                    width: 270
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-full items-center justify-center hidden desktop:flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex px-26 h-full items-center cursor-pointer text-s20l24 text-0D0D0D",
                        children: "About Us"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex px-26 h-full items-center cursor-pointer text-s20l24 text-0D0D0D",
                        onMouseEnter: ()=>setActiveDesktopMenu("products")
                        ,
                        onMouseLeave: ()=>setActiveDesktopMenu("")
                        ,
                        children: [
                            "Products ",
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fa-solid ml-5 " + (activeDesktopMenu === "products" ? "fa-angle-up" : "fa-angle-down")
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex px-26 h-full items-center cursor-pointer text-s20l24 text-0D0D0D",
                        children: "Partner With Us"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex px-26 h-full items-center cursor-pointer text-s20l24 text-0D0D0D",
                        onMouseEnter: ()=>setActiveDesktopMenu("resources")
                        ,
                        onMouseLeave: ()=>setActiveDesktopMenu("")
                        ,
                        children: [
                            "Resources ",
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fa-solid ml-5 " + (activeDesktopMenu === "resources" ? "fa-angle-up" : "fa-angle-down")
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex px-26 h-full items-center cursor-pointer text-s20l24 text-0D0D0D",
                        children: "Careers"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex px-26 h-full items-center cursor-pointer text-s20l24 text-0D0D0D",
                        onMouseEnter: ()=>setActiveDesktopMenu("support")
                        ,
                        onMouseLeave: ()=>setActiveDesktopMenu("")
                        ,
                        children: [
                            "Support ",
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fa-solid ml-5 " + (activeDesktopMenu === "support" ? "fa-angle-up" : "fa-angle-down")
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/headers/MiniHeader.js



function MiniHeader(headerProps) {
    const iconSize = 20;
    const { showMobileMenu , setShowMobileMenu  } = headerProps;
    const { 0: activeMenu , 1: setActiveMenu  } = (0,external_react_.useState)("menu");
    const { 0: activeProductsMenu , 1: setActiveProductsMenu  } = (0,external_react_.useState)("");
    const renderPaymentsStack = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex pl-8 py-15 items-center justify-between cursor-pointer",
                    onClick: ()=>setActiveProductsMenu("ps")
                    ,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-s14l17 text-0D0D0D shrink-0",
                            children: "Payments Stack"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa-solid fa-angle-down text-8CC63E smooth " + (activeProductsMenu === "ps" ? "origin-center rotate-180" : "")
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "smooth " + (activeProductsMenu === "ps" ? "h-175" : "h-0"),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex pl-8 pb-15 items-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    src: "/images/icons/omni.svg",
                                    height: iconSize,
                                    width: iconSize
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s12l14 text-252525 shrink-0 ml-8",
                                    children: "OMNI"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex pl-8 pb-15 items-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    src: "/images/icons/mom.svg",
                                    height: iconSize,
                                    width: iconSize
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s12l14 text-252525 shrink-0 ml-8",
                                    children: "MOM"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex pl-8 pb-15 items-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    src: "/images/icons/pay_later.svg",
                                    height: iconSize,
                                    width: iconSize
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s12l14 text-252525 shrink-0 ml-8",
                                    children: "Pay Later"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex pl-8 pb-15 items-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    src: "/images/icons/acorn.svg",
                                    height: iconSize,
                                    width: iconSize
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s12l14 text-252525 shrink-0 ml-8",
                                    children: "ACORN"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex pl-8 pb-15 items-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    src: "/images/icons/connect.svg",
                                    height: iconSize,
                                    width: iconSize
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s12l14 text-252525 shrink-0 ml-8",
                                    children: "CONNECT"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-100% h-1 bg-8CC63E opacity-20"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex pl-8 py-15 items-center justify-between cursor-pointer",
                    onClick: ()=>setActiveProductsMenu("vas")
                    ,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-s14l17 text-0D0D0D shrink-0",
                            children: "Value Added Services"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa-solid fa-angle-down text-8CC63E smooth " + (activeProductsMenu === "vas" ? "origin-center rotate-180" : "")
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "smooth " + (activeProductsMenu === "vas" ? "h-315" : "h-0"),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex pl-8 pb-15 items-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    src: "/images/icons/iku.svg",
                                    height: iconSize,
                                    width: iconSize
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s12l14 text-252525 shrink-0 ml-8",
                                    children: "IKU"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex pl-8 pb-15 items-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    src: "/images/icons/oar.svg",
                                    height: iconSize,
                                    width: iconSize
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s12l14 text-252525 shrink-0 ml-8",
                                    children: "OAR"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex pl-8 pb-15 items-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    src: "/images/icons/aim.svg",
                                    height: iconSize,
                                    width: iconSize
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s12l14 text-252525 shrink-0 ml-8",
                                    children: "AIM"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex pl-8 pb-15 items-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    src: "/images/icons/mac.svg",
                                    height: iconSize,
                                    width: iconSize
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s12l14 text-252525 shrink-0 ml-8",
                                    children: "MAC"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex pl-8 pb-15 items-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    src: "/images/icons/uam.svg",
                                    height: iconSize,
                                    width: iconSize
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s12l14 text-252525 shrink-0 ml-8",
                                    children: "UAM"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex pl-8 pb-15 items-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    src: "/images/icons/bat.svg",
                                    height: iconSize,
                                    width: iconSize
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s12l14 text-252525 shrink-0 ml-8",
                                    children: "BAT"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex pl-8 pb-15 items-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    src: "/images/icons/far.svg",
                                    height: iconSize,
                                    width: iconSize
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s12l14 text-252525 shrink-0 ml-8",
                                    children: "FAR"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex pl-8 pb-15 items-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    src: "/images/icons/sam.svg",
                                    height: iconSize,
                                    width: iconSize
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s12l14 text-252525 shrink-0 ml-8",
                                    children: "SAM"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex pl-8 pb-15 items-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    src: "/images/icons/pam.svg",
                                    height: iconSize,
                                    width: iconSize
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s12l14 text-252525 shrink-0 ml-8",
                                    children: "PAM"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-100% h-1 bg-8CC63E opacity-20"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex pl-8 py-15 items-center justify-between cursor-pointer",
                    onClick: ()=>setActiveProductsMenu("ls")
                    ,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-s14l17 text-0D0D0D shrink-0",
                            children: "Lending Stack"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa-solid fa-angle-down text-8CC63E smooth " + (activeProductsMenu === "ls" ? "origin-center rotate-180" : "")
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "smooth " + (activeProductsMenu === "ls" ? "h-70" : "h-0"),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex pl-8 pb-15 items-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    src: "/images/icons/xsm.svg",
                                    height: iconSize,
                                    width: iconSize
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s12l14 text-252525 shrink-0 ml-8",
                                    children: "XSM"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex pl-8 pb-15 items-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    src: "/images/icons/xsc.svg",
                                    height: iconSize,
                                    width: iconSize
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s12l14 text-252525 shrink-0 ml-8",
                                    children: "XSC"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-100% h-1 bg-8CC63E opacity-20"
                })
            ]
        }));
    };
    const renderResources = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex pl-8 py-9 pt-15 items-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                            src: "/images/icons/blog.svg",
                            height: iconSize,
                            width: iconSize
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-s12l14 text-252525 shrink-0 ml-8",
                            children: "Blog"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex pl-8 py-9 items-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                            src: "/images/icons/case_studies.svg",
                            height: iconSize,
                            width: iconSize
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-s12l14 text-252525 shrink-0 ml-8",
                            children: "Case Studies"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex pl-8 py-9 items-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                            src: "/images/icons/in_the_media.svg",
                            height: iconSize,
                            width: iconSize
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-s12l14 text-252525 shrink-0 ml-8",
                            children: "In the media"
                        })
                    ]
                })
            ]
        }));
    };
    const renderSupport = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex pl-8 py-9 pt-15 items-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                            src: "/images/icons/faqs.svg",
                            height: iconSize,
                            width: iconSize
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-s12l14 text-252525 shrink-0 ml-8",
                            children: "FAQs"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex pl-8 py-9 items-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                            src: "/images/icons/contact_us.svg",
                            height: iconSize,
                            width: iconSize
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-s12l14 text-252525 shrink-0 ml-8",
                            children: "Contact Us"
                        })
                    ]
                })
            ]
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex desktop:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                    src: "/images/logo.svg",
                    height: 22,
                    width: 109
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: "fa-solid fa-bars flex desktop:hidden cursor-pointer",
                onClick: ()=>setShowMobileMenu(true)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "desktop:hidden absolute right-0 top-0 h-100vh smooth z-50 bg-E0EFD4 " + (showMobileMenu ? "w-237" : "w-0"),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex h-54 w-100% justify-end items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa-solid fa-xmark cursor-pointer mr-20",
                            onClick: ()=>{
                                setShowMobileMenu(false);
                                setActiveMenu("menu");
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mx-16 h-100% w-205",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center cursor-pointer",
                                onClick: ()=>{
                                    setActiveMenu("menu");
                                    setActiveProductsMenu("");
                                },
                                children: [
                                    activeMenu !== "menu" && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-angle-left text-8CC63E"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "ml-8 text-s12l14 text-525252 capitalize",
                                        children: activeMenu
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex pl-8 py-15 items-center justify-between cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s14l17 text-0D0D0D",
                                    children: "About Us"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-100% h-1 bg-8CC63E opacity-20"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex pl-8 py-15 items-center justify-between cursor-pointer",
                                onClick: ()=>setActiveMenu("products")
                                ,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-s14l17 text-0D0D0D",
                                        children: "Products"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-angle-right text-8CC63E"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-100% h-1 bg-8CC63E opacity-20"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex pl-8 py-15 items-center justify-between cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s14l17 text-0D0D0D",
                                    children: "Partner With Us"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-100% h-1 bg-8CC63E opacity-20"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex pl-8 py-15 items-center justify-between cursor-pointer",
                                onClick: ()=>setActiveMenu("resources")
                                ,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-s14l17 text-0D0D0D",
                                        children: "Resources"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-angle-right text-8CC63E"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-100% h-1 bg-8CC63E opacity-20"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex pl-8 py-15 items-center justify-between cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-s14l17 text-0D0D0D",
                                    children: "Careers"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-100% h-1 bg-8CC63E opacity-20"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex pl-8 py-15 items-center justify-between cursor-pointer",
                                onClick: ()=>setActiveMenu("support")
                                ,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-s14l17 text-0D0D0D",
                                        children: "Support"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-angle-right text-8CC63E"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-100% h-1 bg-8CC63E opacity-20"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute right-0 top-70 mx-16 h-100% smooth bg-E0EFD4 " + (activeMenu !== "menu" ? "w-205" : "w-0"),
                        children: activeMenu === "products" ? renderPaymentsStack() : activeMenu === "resources" ? renderResources() : activeMenu === "support" ? renderSupport() : null
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/headers/Header.js





function Header() {
    const iconSize = 48;
    const { 0: showMobileMenu , 1: setShowMobileMenu  } = (0,external_react_.useState)(false);
    const { 0: activeDesktopMenu , 1: setActiveDesktopMenu  } = (0,external_react_.useState)("");
    const headerProps = {
        showMobileMenu,
        setShowMobileMenu,
        activeDesktopMenu,
        setActiveDesktopMenu
    };
    const renderProducts = ()=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "absolute h-fit w-100% py-32 pl-65 bg-E0EFD4 z-50",
                onMouseEnter: ()=>setActiveDesktopMenu("products")
                ,
                onMouseLeave: ()=>setActiveDesktopMenu("")
                ,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-525252 text-s18l21_6 mb-9",
                        children: "Payments Stack"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/icons/omni.svg",
                                        height: iconSize,
                                        width: iconSize
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-14",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s20l24 text-252525 mb-5",
                                                children: "OMNI"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s16l19 text-525252",
                                                children: "Omni channel transactions with all payment modes"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/icons/mom.svg",
                                        height: iconSize,
                                        width: iconSize
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-14",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s20l24 text-252525 mb-5",
                                                children: "MOM"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s16l19 text-525252",
                                                children: "Instant merchant onboarding & management"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/icons/pay_later.svg",
                                        height: iconSize,
                                        width: iconSize
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-14",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s20l24 text-252525 mb-5",
                                                children: "Pay Later"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s16l19 text-525252",
                                                children: "Digital register for customer payment dues"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/icons/acorn.svg",
                                        height: iconSize,
                                        width: iconSize
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-14",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s20l24 text-252525 mb-5",
                                                children: "Acorn"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s16l19 text-525252",
                                                children: "Platform for all the processing"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/icons/connect.svg",
                                        height: iconSize,
                                        width: iconSize
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-14",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s20l24 text-252525 mb-5",
                                                children: "Connect"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s16l19 text-525252",
                                                children: "Payment and billing integrations"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-[calc(100%-176px)] ml-176 my-32 h-1 bg-A4D77A opacity-50"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-525252 text-s18l21_6 mb-9",
                        children: "Value Added Services"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/icons/iku.svg",
                                        height: iconSize,
                                        width: iconSize
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-14",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s20l24 text-252525 mb-5",
                                                children: "IKU"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s16l19 text-525252",
                                                children: "Instant customer segmentation & recognition"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/icons/oar.svg",
                                        height: iconSize,
                                        width: iconSize
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-14",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s20l24 text-252525 mb-5",
                                                children: "OAR"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s16l19 text-525252",
                                                children: "Offers and rewards for customers"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/icons/far.svg",
                                        height: iconSize,
                                        width: iconSize
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-14",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s20l24 text-252525 mb-5",
                                                children: "FAR"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s16l19 text-525252",
                                                children: "Customer feedback & ratings"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/icons/bat.svg",
                                        height: iconSize,
                                        width: iconSize
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-14",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s20l24 text-252525 mb-5",
                                                children: "BAT"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s16l19 text-525252",
                                                children: "Badges, awards and trophies for merchants"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/icons/uam.svg",
                                        height: iconSize,
                                        width: iconSize
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-14",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s20l24 text-252525 mb-5",
                                                children: "UAM"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s16l19 text-525252",
                                                children: "User access and profile management"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/icons/aim.svg",
                                        height: iconSize,
                                        width: iconSize
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-14",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s20l24 text-252525 mb-5",
                                                children: "AIM"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s16l19 text-525252",
                                                children: "Business analytics, insights and metrics"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/icons/mac.svg",
                                        height: iconSize,
                                        width: iconSize
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-14",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s20l24 text-252525 mb-5",
                                                children: "MAC"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s16l19 text-525252",
                                                children: "Marketing and campaigns for latest trends"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/icons/sam.svg",
                                        height: iconSize,
                                        width: iconSize
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-14",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s20l24 text-252525 mb-5",
                                                children: "SAM"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s16l19 text-525252",
                                                children: "Service analytics and management"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/icons/pam.svg",
                                        height: iconSize,
                                        width: iconSize
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-14",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s20l24 text-252525 mb-5",
                                                children: "PAM"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s16l19 text-525252",
                                                children: "Portfolio analytics and management"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-[calc(100%-176px)] ml-176 my-32 h-1 bg-A4D77A opacity-50"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-525252 text-s18l21_6 mb-9",
                        children: "Lending Stack"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/icons/xsm.svg",
                                        height: iconSize,
                                        width: iconSize
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-14",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s20l24 text-252525 mb-5",
                                                children: "XSM"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s16l19 text-525252",
                                                children: "Cross- sell to merchants"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/icons/xsc.svg",
                                        height: iconSize,
                                        width: iconSize
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-14",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s20l24 text-252525 mb-5",
                                                children: "XSC"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-s16l19 text-525252",
                                                children: "Cross- sell to customers"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        }));
    };
    const renderResources = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "absolute h-fit w-fit overflow-hidden right-317 px-24 bg-E0EFD4 z-50",
            onMouseEnter: ()=>setActiveDesktopMenu("resources")
            ,
            onMouseLeave: ()=>setActiveDesktopMenu("")
            ,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex py-10 pt-20 items-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                            src: "/images/icons/blog.svg",
                            height: iconSize,
                            width: iconSize
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-s20l24 text-252525 shrink-0 ml-10",
                            children: "Blog"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex py-10 items-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                            src: "/images/icons/case_studies.svg",
                            height: iconSize,
                            width: iconSize
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-s20l24 text-252525 shrink-0 ml-10",
                            children: "Case Studies"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex py-10 pb-20 items-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                            src: "/images/icons/in_the_media.svg",
                            height: iconSize,
                            width: iconSize
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-s20l24 text-252525 shrink-0 ml-10",
                            children: "In the media"
                        })
                    ]
                })
            ]
        }));
    };
    const renderSupport = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "absolute h-fit w-fit overflow-hidden right-[49.5px] px-24 bg-E0EFD4 z-50",
            onMouseEnter: ()=>setActiveDesktopMenu("support")
            ,
            onMouseLeave: ()=>setActiveDesktopMenu("")
            ,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex py-10 pt-20 items-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                            src: "/images/icons/faqs.svg",
                            height: iconSize,
                            width: iconSize
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-s20l24 text-252525 shrink-0 ml-10",
                            children: "FAQs"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex py-10 pb-20 items-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                            src: "/images/icons/contact_us.svg",
                            height: iconSize,
                            width: iconSize
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-s20l24 text-252525 shrink-0 ml-10",
                            children: "Contact Us"
                        })
                    ]
                })
            ]
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative flex items-center justify-between px-18 z-50 shadow-headerBoxShadow desktop:px-80 h-54 desktop:h-111 bg-E0EFD4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DesktopHeader, {
                        ...headerProps
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MiniHeader, {
                        ...headerProps
                    })
                ]
            }),
            activeDesktopMenu === "products" ? renderProducts() : activeDesktopMenu === "resources" ? renderResources() : activeDesktopMenu === "support" ? renderSupport() : null
        ]
    }));
};

;// CONCATENATED MODULE: ./components/footers/DesktopFooter.js



function DesktopFooter() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "hidden desktop:flex flex-col",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between items-center px-80 py-60",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-F1F1F1 text-s40l60",
                        children: [
                            "Ready to begin your journey with us?",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " Get onboard!"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "button w-216 h-54",
                        children: "Request A Demo"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-100% h-1 bg-E0E0E0"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between items-baseline p-80",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                src: "/images/logo_white.svg",
                                width: 250,
                                height: 50
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mt-50 text-F5FBF3 text-s20l24",
                                children: "Find us on"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex mt-15 w-150 justify-between cursor-pointer",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/social_media/insta.svg",
                                        width: 35,
                                        height: 35
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/social_media/facebook.svg",
                                        width: 35,
                                        height: 35
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        src: "/images/social_media/twitter.svg",
                                        width: 35,
                                        height: 35
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mt-50 text-FAFAFA text-s20l24",
                                children: [
                                    "\xa9 Mintoak, Inc. ",
                                    new Date().getFullYear(),
                                    ". "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s22l140_62 font-bold mb-20",
                                children: "Company"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s20l140_62 mb-15 cursor-pointer",
                                children: "About Us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s20l140_62 mb-15 cursor-pointer",
                                children: "Partner With Us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s20l140_62 mb-15 cursor-pointer",
                                children: "Careers"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s22l140_62 font-bold mb-20",
                                children: "Offerings"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s20l140_62 mb-15 cursor-pointer",
                                children: "Products"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s20l140_62 mb-15 cursor-pointer",
                                children: "Customise"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s20l140_62 mb-15 cursor-pointer",
                                children: "For Merchants"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s22l140_62 font-bold mb-20",
                                children: "Legal"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s20l140_62 mb-15 cursor-pointer",
                                children: "Privacy"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s20l140_62 mb-15 cursor-pointer",
                                children: "Website terms of use"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s20l140_62 mb-15 cursor-pointer",
                                children: "T & C"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s22l140_62 font-bold mb-20",
                                children: "Resources"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s20l140_62 mb-15 cursor-pointer",
                                children: "Blogs"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s20l140_62 mb-15 cursor-pointer",
                                children: "Case Studies"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s20l140_62 mb-15 cursor-pointer",
                                children: "News & Media"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s22l140_62 font-bold mb-20",
                                children: "Support"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s20l140_62 mb-15 cursor-pointer",
                                children: "FAQs"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-FAFAFA text-s20l140_62 mb-15 cursor-pointer",
                                children: "Contact Us"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/footers/MiniFooter.js



function MiniFooter() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex desktop:hidden flex-col items-center pb-60 w-100%",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-36 pb-0 w-100% flex flex-col items-center mobile:p-20",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-F1F1F1 text-s18l27",
                        children: "Ready to begin your journey with us? Get onboard!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mobile-button h-40 w-300 m-30 mobile:w-166 mobile:h-40",
                        children: "Request A Demo"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-100%",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-between cursor-pointer py-15",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-FAFAFA text-s14l17",
                                        children: "Company"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-angle-down text-F1F1F1"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-100% h-1 bg-8B8B8B"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-between cursor-pointer py-15",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-FAFAFA text-s14l17",
                                        children: "Offerings"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-angle-down text-F1F1F1"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-100% h-1 bg-8B8B8B"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-between cursor-pointer py-15",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-FAFAFA text-s14l17",
                                        children: "Legals"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-angle-down text-F1F1F1"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-100% h-1 bg-8B8B8B"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-between cursor-pointer py-15",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-FAFAFA text-s14l17",
                                        children: "Resources"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-angle-down text-F1F1F1"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-100% h-1 bg-8B8B8B"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-between cursor-pointer py-15",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-FAFAFA text-s14l17",
                                        children: "Support"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-angle-down text-F1F1F1"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-100% h-1 bg-E0E0E0 my-50"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                src: "/images/logo_white.svg",
                width: 150,
                height: 30
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-40 text-F5FBF3 text-s14l24",
                children: "Find us on"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex mt-17 w-160 justify-between cursor-pointer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                        src: "/images/social_media/insta.svg",
                        width: 24,
                        height: 24
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                        src: "/images/social_media/facebook.svg",
                        width: 24,
                        height: 24
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                        src: "/images/social_media/twitter.svg",
                        width: 24,
                        height: 24
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-70 text-FAFAFA text-s12l24",
                children: [
                    "\xa9 Mintoak, Inc. ",
                    new Date().getFullYear(),
                    ". "
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/footers/Footer.js




function Footer() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DesktopFooter, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(MiniFooter, {})
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(AppContext["default"], {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 722:
/***/ (() => {



/***/ }),

/***/ 725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 28:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,450], () => (__webpack_exec__(528)));
module.exports = __webpack_exports__;

})();