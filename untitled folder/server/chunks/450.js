"use strict";
exports.id = 450;
exports.ids = [450];
exports.modules = {

/***/ 175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "bl": () => (/* binding */ API),
  "nw": () => (/* binding */ domain),
  "Hv": () => (/* binding */ endpoints)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(725);
;// CONCATENATED MODULE: ./components/helpers/utils.js

const hasWindow = (/* unused pure expression or super */ null && ("undefined" !== "undefined"));
const useWindowSize = ()=>{
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
        width,
        height
    };
};
const Notification = ({ type , message , description =""  })=>{
    external_antd_.notification[type]({
        message,
        description
    });
};


;// CONCATENATED MODULE: ./components/helpers/API.js
// STRAPI PORTAL http://uat-content.mintoak.com/admin  rushabh@mindlogicsolutions.com / EÛ8×^û


const domain = "http://uat-content.mintoak.com";
const slug = "/";
const host = domain + slug;
(external_axios_default()).defaults.baseURL = host;
const API = ({ url , method ="get" , body ={} , headers ={}  })=>(external_axios_default())[method](url, headers, body).then((res)=>res.data
    ).catch((err)=>{
        Notification({
            type: "error",
            message: "Opps, Something went wrong!",
            description: err.message
        });
        return err;
    })
;
// API ENDPOINTS
const endpoints = {
    home_banner: "home-banner",
    metrics: "metrics",
    homepage_for_banks: "homepage-for-banks"
};



/***/ }),

/***/ 450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(175);




var ref, ref1;
const getImageUrl = (imageData)=>{
    if (imageData === null || imageData === void 0 ? void 0 : imageData.url) {
        return _API__WEBPACK_IMPORTED_MODULE_3__/* .domain */ .nw + (imageData === null || imageData === void 0 ? void 0 : imageData.url);
    }
    return;
};
function Image({ src ="" , type ="" , alt =(ref1 = (ref = (src === null || src === void 0 ? void 0 : src.url) ? src === null || src === void 0 ? void 0 : src.url : src) === null || ref === void 0 ? void 0 : ref.split("/")) === null || ref1 === void 0 ? void 0 : ref1.pop() , ...rest }) {
    if (src === null || src === void 0 ? void 0 : src.url) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: getImageUrl(src),
            alt: "mintOak " + alt,
            ...rest
        }));
    } else if (type === "img") {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: src,
            alt: "mintOak " + alt,
            ...rest
        }));
    } else if (src) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
            src: src,
            alt: "mintOak " + alt,
            ...rest
        }));
    } else {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}));
    }
};


/***/ })

};
;