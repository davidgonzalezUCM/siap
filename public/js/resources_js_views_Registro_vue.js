"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Registro_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Registro.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Registro.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_datepicker_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-datepicker-next */ "./node_modules/vue-datepicker-next/index.es.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Datepicker: vue_datepicker_next__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      vnombre: '',
      vapepat: '',
      vapemat: '',
      vpass: '',
      vconpass: '',
      vrut: '',
      vtelefono: '',
      vcorreo: '',
      vfecha: '',
      vciudad: '',
      vmotivo: '',
      usuarios: {},
      user: {}
    };
  },
  methods: {
    crearusuario: function crearusuario() {
      var _this = this;

      this.usuarios.rut_usuario = this.vrut, this.usuarios.contrasena = this.vpass, this.usuarios.nombre = this.vnombre, this.usuarios.apellido_pat = this.vapepat, this.usuarios.apellido_mat = this.vapemat, this.usuarios.fecha_nacimiento = this.vfecha, this.usuarios.correo = this.vcorreo, this.usuarios.telefono = this.vtelefono, this.usuarios.ciudad = this.vciudad, this.usuarios.motivo_consulta = this.vmotivo;
      this.axios.post('api/usuarios', this.usuarios)["catch"](function (err) {
        return console.log(err);
      })["finally"](function () {
        return _this.loading = false;
      });
      this.crearuser();
    },
    crearuser: function crearuser() {
      var _this2 = this;

      this.user.name = this.vrut, this.user.email = this.vcorreo, this.user.password = this.vpass, this.user.password_confirmation = this.vconpass, this.axios.post('api/registro', this.user)["catch"](function (err) {
        return console.log(err);
      })["finally"](function () {
        return _this2.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Registro.vue?vue&type=template&id=095a3a5c":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Registro.vue?vue&type=template&id=095a3a5c ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _resources_images_views_registro_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../resources/images/views/registro.png */ "./resources/images/views/registro.png");


var _hoisted_1 = {
  "class": "our-services"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "row mb-3"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Nombre Completo:", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "col"
};
var _hoisted_7 = {
  "class": "col"
};
var _hoisted_8 = {
  "class": "col"
};
var _hoisted_9 = {
  "class": "row mb-3"
};
var _hoisted_10 = {
  "class": "col"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Contraseña:", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "col"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Confirmar contraseña:", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "row mb-3"
};
var _hoisted_15 = {
  "class": "col"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Rut:", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "col"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Teléfono:", -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "row mb-3"
};
var _hoisted_20 = {
  "class": "col"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Correo electrónico:", -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "col"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Fecha de nacimento:", -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "row mb-3"
};
var _hoisted_25 = {
  "class": "col"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Ciudad:", -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "row mb-3"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Motivo de Consulta:", -1
/* HOISTED */
);

var _hoisted_29 = {
  "class": "col"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "submit",
  value: "Registrarme",
  "class": "modal-btn",
  "data-bs-toggle": "modal",
  "data-bs-target": "#hola"
}, null, -1
/* HOISTED */
);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  style: {
    "width": "80%",
    "display": "block",
    "margin": "auto"
  },
  src: _resources_images_views_registro_png__WEBPACK_IMPORTED_MODULE_1__["default"],
  alt: ""
})], -1
/* HOISTED */
);

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"modal\" tabindex=\"-1\" id=\"hola\"><div class=\"modal-dialog modal-dialog-centered\"><div class=\"modal-content\"><div class=\"modal-header\" style=\"background-color:#ced4da;\"><h5 class=\"modal-title\">Aviso</h5><button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button></div><div class=\"modal-body\"><p>Registro exitoso.</p></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-primary\" data-bs-dismiss=\"modal\">Aceptar</button></div></div></div></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_datepicker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("datepicker");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "col-md-6",
    onSubmit: _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.crearusuario && $options.crearusuario.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    placeholder: "Nombres",
    name: "Nombre",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.vnombre = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.vnombre]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    placeholder: "Apellido Paterno",
    name: "Apellido Paterno",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.vapepat = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.vapepat]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    placeholder: "Apellio Materno",
    name: "Apellido Materno",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.vapemat = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.vapemat]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    type: "password",
    name: "Contraseña",
    placeholder: "Contraseña",
    id: "",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.vpass = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.vpass]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    type: "password",
    name: "ConfContraseña",
    placeholder: "Vuelva a ingresar su contraseña",
    id: "",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.vconpass = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.vconpass]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    type: "text",
    placeholder: "Rut",
    name: "Rut",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.vrut = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.vrut]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    type: "text",
    placeholder: "Teléfono",
    name: "telefono",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.vtelefono = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.vtelefono]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    type: "email",
    placeholder: "Correo electrónico",
    name: "correo",
    id: "",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.vcorreo = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.vcorreo]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_datepicker, {
    value: $data.vfecha,
    "onUpdate:value": _cache[8] || (_cache[8] = function ($event) {
      return $data.vfecha = $event;
    }),
    editable: false,
    clearable: false,
    "value-type": "format",
    type: "date",
    format: "DD-MMM-YYYY",
    placeholder: "Fecha de nacimiento"
  }, null, 8
  /* PROPS */
  , ["value"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    type: "text",
    placeholder: "Ciudad",
    name: "ciudad",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.vciudad = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.vciudad]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control",
    style: {
      "resize": "none"
    },
    name: "motivo",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.vmotivo = $event;
    }),
    rows: "3",
    placeholder: "Motivo de consulta"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.vmotivo]])])]), _hoisted_30], 32
  /* HYDRATE_EVENTS */
  ), _hoisted_31])])]), _hoisted_32], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/images/views/registro.png":
/*!*********************************************!*\
  !*** ./resources/images/views/registro.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/registro.png?fd82ac26d479f715c1c1de96c8abc90d");

/***/ }),

/***/ "./resources/js/views/Registro.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Registro.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Registro_vue_vue_type_template_id_095a3a5c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registro.vue?vue&type=template&id=095a3a5c */ "./resources/js/views/Registro.vue?vue&type=template&id=095a3a5c");
/* harmony import */ var _Registro_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registro.vue?vue&type=script&lang=js */ "./resources/js/views/Registro.vue?vue&type=script&lang=js");
/* harmony import */ var D_UCM_Nuevo_siap_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_UCM_Nuevo_siap_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Registro_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Registro_vue_vue_type_template_id_095a3a5c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Registro.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Registro.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Registro.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Registro_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Registro_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Registro.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Registro.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Registro.vue?vue&type=template&id=095a3a5c":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Registro.vue?vue&type=template&id=095a3a5c ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Registro_vue_vue_type_template_id_095a3a5c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Registro_vue_vue_type_template_id_095a3a5c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Registro.vue?vue&type=template&id=095a3a5c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Registro.vue?vue&type=template&id=095a3a5c");


/***/ })

}]);