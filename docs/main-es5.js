function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/city-search/city-search.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/city-search/city-search.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCitySearchCitySearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"column\" style=\"margin-bottom: 32px\">\n  <form #searchForm>\n    <mat-form-field appearance=\"outline\"\n      [ngClass]=\"search.value ? 'search-box-partial' : 'search-box-full'\">\n      <mat-label>Город иди почтовый индекс</mat-label>\n      <mat-icon matPrefix>search</mat-icon>\n      <input matInput aria-label=\"City or Zip\" [formControl]=\"search\" />\n      <mat-error *ngIf=\"search.invalid\"> Введите больше одного символа для поиска\n      </mat-error>\n    </mat-form-field>\n    <button mat-icon-button *ngIf=\"search.value\" class=\"clear-button\"\n      (click)=\"searchForm.reset(); search.reset();\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </form>\n  <div class=\"center\">\n    <mat-slide-toggle color=\"accent\" [(ngModel)]=\"useNgRx\"\n      (ngModelChange)=\"doSearch(search.value)\" [ngModelOptions]=\"{standalone: true}\">\n      {{useNgRx ? 'Использовать NgRX' : 'Использовать BehaviorSubject'}}\n    </mat-slide-toggle>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/current-weather/current-weather.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/current-weather/current-weather.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCurrentWeatherCurrentWeatherComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"current$ | async as current\">\n  <div fxLayout=\"row\">\n    <div fxFlex=\"66%\" class=\"mat-title no-margin\">{{ current.city }},\n      {{ current.country }}</div>\n    <div fxFlex class=\"mat-subheading-2 no-margin\">\n      {{ current.date | date: 'EEEE MMM d' }}{{ getOrdinal(current.date) }}\n    </div>\n  </div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-bottom: -48px;\">\n    <div fxFlex=\"55%\">\n      <img style=\"zoom: 175%; margin-bottom: 32px;\" [src]=\"current.image\"\n        [alt]=\"current.description\" />\n    </div>\n    <div fxFlex class=\"right no-margin\">\n      <p class=\"mat-display-3\">\n        {{ current.temperature | number: '1.0-0' }}\n        <span class=\"mat-display-1 unit\">°С;</span>\n      </p>\n    </div>\n  </div>\n  <div fxLayoutAlign=\"center \" class=\"mat-caption \">{{ current.description }}</div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/actions/search.actions.ts":
  /*!*******************************************!*\
    !*** ./src/app/actions/search.actions.ts ***!
    \*******************************************/

  /*! exports provided: SearchActions */

  /***/
  function srcAppActionsSearchActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchActions", function () {
      return SearchActions;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var SearchActions = {
      search: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Search] Search', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      weatherLoaded: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Search] CurrentWeather loaded', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])())
    };
    var all = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["union"])(SearchActions);
    /***/
  },

  /***/
  "./src/app/app-material.module.ts":
  /*!****************************************!*\
    !*** ./src/app/app-material.module.ts ***!
    \****************************************/

  /*! exports provided: AppMaterialModule */

  /***/
  function srcAppAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function () {
      return AppMaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");

    var modules = [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"]];

    var AppMaterialModule = function AppMaterialModule() {
      _classCallCheck(this, AppMaterialModule);
    };

    AppMaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: modules
    })], AppMaterialModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: "\n    <mat-toolbar color=\"primary\"> <span>Angular Forecast</span> </mat-toolbar>\n    <br />\n  \n    <div fxLayoutAlign=\"center\">\n      <app-city-search></app-city-search>\n    </div>\n    <div fxLayout=\"row\">\n      <div fxFlex></div>\n      <mat-card fxFlex=\"300px\">\n        <mat-card-header>\n          <mat-card-title><div class=\"mat-headline\">\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u043F\u043E\u0433\u043E\u0434\u0430</div></mat-card-title>\n        </mat-card-header>\n        <mat-card-content> <app-current-weather></app-current-weather> </mat-card-content>\n      </mat-card>\n      <div fxFlex></div>\n    </div>\n  "
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-material.module */
    "./src/app/app-material.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _city_search_city_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./city-search/city-search.component */
    "./src/app/city-search/city-search.component.ts");
    /* harmony import */


    var _current_weather_current_weather_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./current-weather/current-weather.component */
    "./src/app/current-weather/current-weather.component.ts");
    /* harmony import */


    var _effects_current_weather_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./effects/current-weather.effects */
    "./src/app/effects/current-weather.effects.ts");
    /* harmony import */


    var _reducers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./reducers */
    "./src/app/reducers/index.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _current_weather_current_weather_component__WEBPACK_IMPORTED_MODULE_14__["CurrentWeatherComponent"], _city_search_city_search_component__WEBPACK_IMPORTED_MODULE_13__["CitySearchComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _app_material_module__WEBPACK_IMPORTED_MODULE_11__["AppMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_16__["reducers"], {
        metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_16__["metaReducers"],
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_effects_current_weather_effects__WEBPACK_IMPORTED_MODULE_15__["CurrentWeatherEffects"]]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/city-search/city-search.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/city-search/city-search.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCitySearchCitySearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".search-box-partial {\n  width: 260px;\n}\n\n.search-box-full {\n  width: 300px;\n}\n\n.clear-button {\n  display: inline-block;\n  width: 40px;\n  color: gray;\n}\n\n.center {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0eS1zZWFyY2gvY2l0eS1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2l0eS1zZWFyY2gvY2l0eS1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYm94LXBhcnRpYWwge1xuICB3aWR0aDogMjYwcHg7XG59XG5cbi5zZWFyY2gtYm94LWZ1bGwge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5jbGVhci1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/city-search/city-search.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/city-search/city-search.component.ts ***!
    \******************************************************/

  /*! exports provided: CitySearchComponent */

  /***/
  function srcAppCitySearchCitySearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitySearchComponent", function () {
      return CitySearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_search_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../actions/search.actions */
    "./src/app/actions/search.actions.ts");
    /* harmony import */


    var _weather_weather_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../weather/weather.service */
    "./src/app/weather/weather.service.ts");

    var CitySearchComponent = /*#__PURE__*/function () {
      function CitySearchComponent(weatherService, store) {
        var _this = this;

        _classCallCheck(this, CitySearchComponent);

        this.weatherService = weatherService;
        this.store = store;
        this.useNgRx = false;
        this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]);
        this.search.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () {
          return !_this.search.invalid;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (searchValue) {
          return _this.doSearch(searchValue);
        })).subscribe();
      }

      _createClass(CitySearchComponent, [{
        key: "doSearch",
        value: function doSearch(searchValue) {
          var userInput = searchValue.split(',').map(function (s) {
            return s.trim();
          });
          var searchText = userInput[0];
          var country = userInput.length > 1 ? userInput[1] : undefined;

          if (this.useNgRx) {
            this.ngRxBasedSearch(searchText, country);
          } else {
            this.behaviorSubjectBasedSearch(searchText, country);
          }
        }
      }, {
        key: "behaviorSubjectBasedSearch",
        value: function behaviorSubjectBasedSearch(searchText, country) {
          this.weatherService.updateCurrentWeather(searchText, country);
        }
      }, {
        key: "ngRxBasedSearch",
        value: function ngRxBasedSearch(searchText, country) {
          this.store.dispatch(_actions_search_actions__WEBPACK_IMPORTED_MODULE_5__["SearchActions"].search({
            searchText: searchText,
            country: country
          }));
        }
      }]);

      return CitySearchComponent;
    }();

    CitySearchComponent.ctorParameters = function () {
      return [{
        type: _weather_weather_service__WEBPACK_IMPORTED_MODULE_6__["WeatherService"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    CitySearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-city-search',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./city-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/city-search/city-search.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./city-search.component.css */
      "./src/app/city-search/city-search.component.css"))["default"]]
    })], CitySearchComponent);
    /***/
  },

  /***/
  "./src/app/current-weather/current-weather.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/current-weather/current-weather.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCurrentWeatherCurrentWeatherComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".right {\n  text-align: right;\n}\n\n.no-margin {\n  margin-bottom: 0;\n}\n\n.unit {\n  vertical-align: super;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmVudC13ZWF0aGVyL2N1cnJlbnQtd2VhdGhlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY3VycmVudC13ZWF0aGVyL2N1cnJlbnQtd2VhdGhlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5uby1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udW5pdCB7XG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/current-weather/current-weather.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/current-weather/current-weather.component.ts ***!
    \**************************************************************/

  /*! exports provided: CurrentWeatherComponent */

  /***/
  function srcAppCurrentWeatherCurrentWeatherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentWeatherComponent", function () {
      return CurrentWeatherComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../reducers */
    "./src/app/reducers/index.ts");
    /* harmony import */


    var _weather_weather_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../weather/weather.service */
    "./src/app/weather/weather.service.ts");

    var CurrentWeatherComponent = /*#__PURE__*/function () {
      function CurrentWeatherComponent(weatherService, store) {
        _classCallCheck(this, CurrentWeatherComponent);

        this.weatherService = weatherService;
        this.store = store;
        this.current$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["selectCurrentWeather"])), this.weatherService.currentWeather$);
      } // Attribution: https://stackoverflow.com/a/44418732/178620


      _createClass(CurrentWeatherComponent, [{
        key: "getOrdinal",
        value: function getOrdinal(date) {
          var n = new Date(date).getDate();
          return n > 0 ? ['th', 'st', 'nd', 'rd'][n > 3 && n < 21 || n % 10 > 3 ? 0 : n % 10] : '';
        }
      }]);

      return CurrentWeatherComponent;
    }();

    CurrentWeatherComponent.ctorParameters = function () {
      return [{
        type: _weather_weather_service__WEBPACK_IMPORTED_MODULE_5__["WeatherService"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    CurrentWeatherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-current-weather',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./current-weather.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/current-weather/current-weather.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./current-weather.component.css */
      "./src/app/current-weather/current-weather.component.css"))["default"]]
    })], CurrentWeatherComponent);
    /***/
  },

  /***/
  "./src/app/effects/current-weather.effects.ts":
  /*!****************************************************!*\
    !*** ./src/app/effects/current-weather.effects.ts ***!
    \****************************************************/

  /*! exports provided: CurrentWeatherEffects */

  /***/
  function srcAppEffectsCurrentWeatherEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentWeatherEffects", function () {
      return CurrentWeatherEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_search_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../actions/search.actions */
    "./src/app/actions/search.actions.ts");
    /* harmony import */


    var _weather_weather_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../weather/weather.service */
    "./src/app/weather/weather.service.ts");

    var CurrentWeatherEffects = /*#__PURE__*/function () {
      function CurrentWeatherEffects(actions$, weatherService) {
        var _this2 = this;

        _classCallCheck(this, CurrentWeatherEffects);

        this.actions$ = actions$;
        this.weatherService = weatherService;
        this.getCurrentWeather$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
          return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_search_actions__WEBPACK_IMPORTED_MODULE_5__["SearchActions"].search), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
            return _this2.doSearch(action);
          }));
        });
      }

      _createClass(CurrentWeatherEffects, [{
        key: "doSearch",
        value: function doSearch(action) {
          return this.weatherService.getCurrentWeather(action.searchText, action.country).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (weather) {
            return _actions_search_actions__WEBPACK_IMPORTED_MODULE_5__["SearchActions"].weatherLoaded({
              current: weather
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
          }));
        }
      }]);

      return CurrentWeatherEffects;
    }();

    CurrentWeatherEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
      }, {
        type: _weather_weather_service__WEBPACK_IMPORTED_MODULE_6__["WeatherService"]
      }];
    };

    CurrentWeatherEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CurrentWeatherEffects);
    /***/
  },

  /***/
  "./src/app/postal-code/postal-code.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/postal-code/postal-code.service.ts ***!
    \****************************************************/

  /*! exports provided: PostalCodeService */

  /***/
  function srcAppPostalCodePostalCodeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostalCodeService", function () {
      return PostalCodeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var PostalCodeService = /*#__PURE__*/function () {
      function PostalCodeService(httpClient) {
        _classCallCheck(this, PostalCodeService);

        this.httpClient = httpClient;
      }

      _createClass(PostalCodeService, [{
        key: "resolvePostalCode",
        value: function resolvePostalCode(postalCode) {
          var uriParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('maxRows', '1').set('username', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].username).set('postalcode', postalCode);
          return this.httpClient.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl).concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].geonamesApi, ".geonames.org/postalCodeSearchJSON"), {
            params: uriParams
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (data) {
            return data.postalCodes;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["defaultIfEmpty"])(null));
        }
      }]);

      return PostalCodeService;
    }();

    PostalCodeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    PostalCodeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], PostalCodeService);
    /***/
  },

  /***/
  "./src/app/reducers/index.ts":
  /*!***********************************!*\
    !*** ./src/app/reducers/index.ts ***!
    \***********************************/

  /*! exports provided: reducers, selectCurrentWeather, logger, metaReducers */

  /***/
  function srcAppReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectCurrentWeather", function () {
      return selectCurrentWeather;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "logger", function () {
      return logger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return metaReducers;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _search_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./search.reducer */
    "./src/app/reducers/search.reducer.ts");

    var reducers = {
      search: _search_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]
    };
    var selectCurrentWeather = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(function (state) {
      return state.search.current;
    }, function (current) {
      return current;
    });

    function logger(reducer) {
      return function (state, action) {
        var result = reducer(state, action);
        console.groupCollapsed(action.type);
        console.log('prev state', state);
        console.log('action', action);
        console.log('next state', result);
        console.groupEnd();
        return result;
      };
    }

    var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [logger] : [];
    /***/
  },

  /***/
  "./src/app/reducers/search.reducer.ts":
  /*!********************************************!*\
    !*** ./src/app/reducers/search.reducer.ts ***!
    \********************************************/

  /*! exports provided: initialState, reducer */

  /***/
  function srcAppReducersSearchReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions_search_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/search.actions */
    "./src/app/actions/search.actions.ts");
    /* harmony import */


    var _weather_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../weather/weather.service */
    "./src/app/weather/weather.service.ts");

    var initialState = {
      current: _weather_weather_service__WEBPACK_IMPORTED_MODULE_2__["defaultWeather"]
    };
    var searchReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_search_actions__WEBPACK_IMPORTED_MODULE_1__["SearchActions"].weatherLoaded, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        current: action.current
      });
    }));

    function reducer(state, action) {
      return searchReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/weather/weather.service.ts":
  /*!********************************************!*\
    !*** ./src/app/weather/weather.service.ts ***!
    \********************************************/

  /*! exports provided: defaultWeather, WeatherService */

  /***/
  function srcAppWeatherWeatherServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultWeather", function () {
      return defaultWeather;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherService", function () {
      return WeatherService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _postal_code_postal_code_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../postal-code/postal-code.service */
    "./src/app/postal-code/postal-code.service.ts");

    var defaultWeather = {
      city: '--',
      country: '--',
      date: Date.now(),
      image: '',
      temperature: 0,
      description: ''
    };

    var WeatherService = /*#__PURE__*/function () {
      function WeatherService(httpClient, postalCodeService) {
        _classCallCheck(this, WeatherService);

        this.httpClient = httpClient;
        this.postalCodeService = postalCodeService;
        this.currentWeather$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](defaultWeather);
      }

      _createClass(WeatherService, [{
        key: "getCurrentWeatherByCoords",
        value: function getCurrentWeatherByCoords(coords) {
          var uriParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('lat', coords.latitude.toString()).set('lon', coords.longitude.toString());
          return this.getCurrentWeatherHelper(uriParams);
        }
      }, {
        key: "updateCurrentWeather",
        value: function updateCurrentWeather(searchText, country) {
          var _this3 = this;

          this.getCurrentWeather(searchText, country).subscribe(function (weather) {
            return _this3.currentWeather$.next(weather);
          });
        }
      }, {
        key: "getCurrentWeather",
        value: function getCurrentWeather(searchText, country) {
          var _this4 = this;

          return this.postalCodeService.resolvePostalCode(searchText).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (postalCode) {
            if (postalCode) {
              return _this4.getCurrentWeatherByCoords({
                latitude: postalCode.lat,
                longitude: postalCode.lng
              });
            } else {
              var uriParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('q', country ? "".concat(searchText, ",").concat(country) : searchText);
              return _this4.getCurrentWeatherHelper(uriParams);
            }
          }));
        }
      }, {
        key: "getCurrentWeatherHelper",
        value: function getCurrentWeatherHelper(uriParams) {
          var _this5 = this;

          uriParams = uriParams.set('appid', _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].appId);
          return this.httpClient.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl, "api.openweathermap.org/data/2.5/weather"), {
            params: uriParams
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return _this5.transformToICurrentWeather(data);
          }));
        }
      }, {
        key: "transformToICurrentWeather",
        value: function transformToICurrentWeather(data) {
          return {
            city: data.name,
            country: data.sys.country,
            date: data.dt * 1000,
            image: "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl, "openweathermap.org/img/w/").concat(data.weather[0].icon, ".png"),
            temperature: this.convertKelvinToС(data.main.temp),
            description: data.weather[0].description
          };
        }
      }, {
        key: "convertKelvinTo\u0421",
        value: function convertKelvinTo(kelvin) {
          return kelvin - 273.15;
        }
      }]);

      return WeatherService;
    }();

    WeatherService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _postal_code_postal_code_service__WEBPACK_IMPORTED_MODULE_6__["PostalCodeService"]
      }];
    };

    WeatherService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], WeatherService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: false,
      appId: '01ff1417eeb4a81b09ac68b15958d453',
      username: 'forecast',
      baseUrl: 'http://',
      geonamesApi: 'api'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\INSTITUT\4kurs\angular-forecast\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map