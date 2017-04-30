webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MainPage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MainPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_MainPage__);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'MainPage',
    component: __WEBPACK_IMPORTED_MODULE_2__components_MainPage___default.a
  }]
}));

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(31)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_material___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_material__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_material_dist_vue_material_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_material_dist_vue_material_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_material_dist_vue_material_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_material___default.a);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_drawer__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_drawer_util__ = __webpack_require__(1);
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Header',

  mounted() {},

  data() {
    return {};
  }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_WaterMap_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_WaterMap_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_WaterMap_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MainPage',
  components: { Header: __WEBPACK_IMPORTED_MODULE_0__components_Header_vue___default.a, WaterMap: __WEBPACK_IMPORTED_MODULE_1__components_WaterMap_vue___default.a },

  data() {
    return {};
  },

  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    }
  }
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

var L = __webpack_require__(34);
L.Icon.Default.imagePath = 'node_modules/leaflet/dist/images/';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'WaterMap',

  mounted() {
    this.map = L.map('map');
    this.map.setView([48.7611542, 9.1943309], 13);
    this.map.scrollWheelZoom.disable();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  },

  data() {
    return {};
  }
});

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(30)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  "data-v-72f7e4ae",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(28)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  "data-v-2be0d649",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(29)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  "data-v-61da84a6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-page"
  }, [_c('div', {
    staticClass: "phone-viewport"
  }, [_c('md-toolbar', [_c('md-button', {
    staticClass: "md-icon-button",
    nativeOn: {
      "click": function($event) {
        _vm.toggleLeftSidenav($event)
      }
    }
  }, [_c('md-icon', [_vm._v("menu")])], 1), _vm._v(" "), _c('span', {
    staticClass: "whata-logo whata-logo-small"
  }), _vm._v(" "), _c('h2', {
    staticClass: "md-title"
  }, [_vm._v("Whata "), _c('span', {
    staticClass: "md-subheading"
  }, [_vm._v("save the planet - classify water")])]), _vm._v(" "), _c('span', {
    staticStyle: {
      "flex": "1"
    }
  }), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button"
  }, [_c('md-icon', [_vm._v("search")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button"
  }, [_c('md-icon', [_vm._v("filter_list")])], 1)], 1), _vm._v(" "), _c('div', [_c('WaterMap')], 1), _vm._v(" "), _c('md-sidenav', {
    ref: "leftSidenav",
    staticClass: "md-left",
    on: {
      "open": function($event) {
        _vm.open('Left')
      },
      "close": function($event) {
        _vm.close('Left')
      }
    }
  }, [_c('md-toolbar', {
    staticClass: "md-large"
  }, [_c('div', {
    staticClass: "md-toolbar-container"
  }, [_c('h3', {
    staticClass: "md-title"
  }, [_vm._v("Sidenav content")])])]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!")])], 1)], 1)])
},staticRenderFns: []}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "water-map"
  }, [_c('div', {
    attrs: {
      "id": "map"
    }
  })])
}]}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('h1', {
    staticClass: "mdc-typography--display1"
  }, [_vm._v("Whata")]), _vm._v(" "), _c('h2', {
    staticClass: "mdc-typography--display5"
  }, [_vm._v("save the planet - classify water")])])
}]}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ })
],[21]);
//# sourceMappingURL=app.58a1a3faadd664b16ebb.js.map