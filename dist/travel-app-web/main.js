(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/users/user-edit/user-edit.component */ "./src/app/components/users/user-edit/user-edit.component.ts");
/* harmony import */ var _components_trips_trip_detail_trip_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/trips/trip-detail/trip-detail.component */ "./src/app/components/trips/trip-detail/trip-detail.component.ts");
/* harmony import */ var _components_pois_poi_detail_poi_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pois/poi-detail/poi-detail.component */ "./src/app/components/pois/poi-detail/poi-detail.component.ts");
/* harmony import */ var _components_pois_poi_create_poi_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pois/poi-create/poi-create.component */ "./src/app/components/pois/poi-create/poi-create.component.ts");
/* harmony import */ var _components_misc_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/misc/login/login.component */ "./src/app/components/misc/login/login.component.ts");
/* harmony import */ var _components_users_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users/user-detail/user-detail.component */ "./src/app/components/users/user-detail/user-detail.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_misc_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/misc/home/home.component */ "./src/app/components/misc/home/home.component.ts");
/* harmony import */ var _components_pois_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pois/list/list.component */ "./src/app/components/pois/list/list.component.ts");
/* harmony import */ var _components_users_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/users/user-create/user-create.component */ "./src/app/components/users/user-create/user-create.component.ts");
/* harmony import */ var _shared_guards_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/guards/is-authenticated.guard */ "./src/app/shared/guards/is-authenticated.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', canActivate: [_shared_guards_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_11__["IsAuthenticatedGuard"]], component: _components_misc_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'route', canActivate: [_shared_guards_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_11__["IsAuthenticatedGuard"]], component: _components_pois_list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"] },
    { path: 'profile/:id', canActivate: [_shared_guards_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_11__["IsAuthenticatedGuard"]], component: _components_users_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailComponent"] },
    { path: 'profile/:id/edit', canActivate: [_shared_guards_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_11__["IsAuthenticatedGuard"]], component: _components_users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_0__["UserEditComponent"] },
    { path: 'login', component: _components_misc_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'pois', canActivate: [_shared_guards_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_11__["IsAuthenticatedGuard"]], component: _components_pois_poi_create_poi_create_component__WEBPACK_IMPORTED_MODULE_3__["PoiCreateComponent"] },
    { path: 'pois/:id', canActivate: [_shared_guards_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_11__["IsAuthenticatedGuard"]], component: _components_pois_poi_detail_poi_detail_component__WEBPACK_IMPORTED_MODULE_2__["PoiDetailComponent"] },
    { path: 'register', component: _components_users_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_10__["UserCreateComponent"] },
    { path: 'trips/:id', canActivate: [_shared_guards_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_11__["IsAuthenticatedGuard"]], component: _components_trips_trip_detail_trip_detail_component__WEBPACK_IMPORTED_MODULE_1__["TripDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:focus {\n  outline: none;\n}\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'travel-app-web';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _components_trips_trip_detail_trip_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/trips/trip-detail/trip-detail.component */ "./src/app/components/trips/trip-detail/trip-detail.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_misc_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/misc/header/header.component */ "./src/app/components/misc/header/header.component.ts");
/* harmony import */ var _components_users_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/users/user-detail/user-detail.component */ "./src/app/components/users/user-detail/user-detail.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/fesm5/agm-direction.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_misc_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/misc/home/home.component */ "./src/app/components/misc/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_pois_list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pois/list/list.component */ "./src/app/components/pois/list/list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_misc_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/misc/login/login.component */ "./src/app/components/misc/login/login.component.ts");
/* harmony import */ var _components_pois_poi_form_poi_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pois/poi-form/poi-form.component */ "./src/app/components/pois/poi-form/poi-form.component.ts");
/* harmony import */ var _components_pois_poi_create_poi_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pois/poi-create/poi-create.component */ "./src/app/components/pois/poi-create/poi-create.component.ts");
/* harmony import */ var _components_pois_poi_detail_poi_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pois/poi-detail/poi-detail.component */ "./src/app/components/pois/poi-detail/poi-detail.component.ts");
/* harmony import */ var _components_users_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/users/user-create/user-create.component */ "./src/app/components/users/user-create/user-create.component.ts");
/* harmony import */ var _components_reviews_review_create_review_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/reviews/review-create/review-create.component */ "./src/app/components/reviews/review-create/review-create.component.ts");
/* harmony import */ var _components_reviews_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/reviews/review-list/review-list.component */ "./src/app/components/reviews/review-list/review-list.component.ts");
/* harmony import */ var _shared_pipes_pois_filter_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/pipes/pois-filter.pipe */ "./src/app/shared/pipes/pois-filter.pipe.ts");
/* harmony import */ var _shared_pipes_poi_rating_filter_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/pipes/poi-rating-filter.pipe */ "./src/app/shared/pipes/poi-rating-filter.pipe.ts");
/* harmony import */ var _components_trips_trip_create_trip_create_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/trips/trip-create/trip-create.component */ "./src/app/components/trips/trip-create/trip-create.component.ts");
/* harmony import */ var _components_trips_trip_form_trip_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/trips/trip-form/trip-form.component */ "./src/app/components/trips/trip-form/trip-form.component.ts");
/* harmony import */ var _components_users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/users/user-edit/user-edit.component */ "./src/app/components/users/user-edit/user-edit.component.ts");
/* harmony import */ var _components_trips_trip_list_trip_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/trips/trip-list/trip-list.component */ "./src/app/components/trips/trip-list/trip-list.component.ts");
/* harmony import */ var _components_pois_poi_list_text_poi_list_text_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/pois/poi-list-text/poi-list-text.component */ "./src/app/components/pois/poi-list-text/poi-list-text.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_misc_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _components_misc_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_pois_list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"],
                _components_misc_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _components_users_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailComponent"],
                _components_pois_poi_form_poi_form_component__WEBPACK_IMPORTED_MODULE_15__["PoiFormComponent"],
                _components_pois_poi_create_poi_create_component__WEBPACK_IMPORTED_MODULE_16__["PoiCreateComponent"],
                _components_pois_poi_detail_poi_detail_component__WEBPACK_IMPORTED_MODULE_17__["PoiDetailComponent"],
                _components_users_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_18__["UserCreateComponent"],
                _components_reviews_review_create_review_create_component__WEBPACK_IMPORTED_MODULE_19__["ReviewCreateComponent"],
                _components_reviews_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_20__["ReviewListComponent"],
                _shared_pipes_pois_filter_pipe__WEBPACK_IMPORTED_MODULE_21__["PoisFilterPipe"],
                _shared_pipes_poi_rating_filter_pipe__WEBPACK_IMPORTED_MODULE_22__["PoiRatingFilterPipe"],
                _components_trips_trip_create_trip_create_component__WEBPACK_IMPORTED_MODULE_23__["TripCreateComponent"],
                _components_trips_trip_form_trip_form_component__WEBPACK_IMPORTED_MODULE_24__["TripFormComponent"],
                _components_trips_trip_detail_trip_detail_component__WEBPACK_IMPORTED_MODULE_0__["TripDetailComponent"],
                _components_users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_25__["UserEditComponent"],
                _components_trips_trip_list_trip_list_component__WEBPACK_IMPORTED_MODULE_26__["TripListComponent"],
                _components_pois_poi_list_text_poi_list_text_component__WEBPACK_IMPORTED_MODULE_27__["PoiListTextComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].mapApi,
                    libraries: ['places']
                }),
                agm_direction__WEBPACK_IMPORTED_MODULE_7__["AgmDirectionModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/misc/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/misc/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"javascript:;\">\n    WAYFINDER\n  </a>\n\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" aria-controls=\"menuCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n\n  <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"!isNavbarCollapsed\"  id=\"menuCollapse\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item dropdown\" ngbDropdown *ngIf=\"user\">\n        <a class=\"nav-link dropdown-toggle\" id=\"menuDropdown\" ngbDropdownToggle>Me</a>\n        <div class=\"dropdown-menu bg-dark\" ngbDropdownMenu aria-labelledby=\"menuDropdown\">\n          <ul class=\"dropdown-nav\">\n            <li class=\"nav-item\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\">\n              <a class=\"dropdown-item nav-link\" [routerLink]=\"['profile', user.id]\">\n                My profile\n              </a>\n            </li>\n            <li class=\"nav-item\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\">\n              <a class=\"dropdown-item nav-link\" [routerLink]=\"['/trips']\">\n                My trips\n              </a>\n            </li>\n        </ul>\n      </div>\n      </li>\n      <li class=\"nav-item\"(click)=\"isNavbarCollapsed = !isNavbarCollapsed\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">new trip</a>\n      </li>\n      <li class=\"nav-item\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\"  >\n        <a class=\"nav-link\" [routerLink]=\"['/pois']\" >new POI</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!user\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!user\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"user\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\">\n        <button class=\"nav-link btn btn-link\" (click)=\"onClickLogout()\">Logout</button>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/misc/header/header.component.less":
/*!**************************************************************!*\
  !*** ./src/app/components/misc/header/header.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item {\n  cursor: pointer;\n}\n.dropdown-menu.bg-dark,\n.dropdown-menu.bg-dark .dropdown-item {\n  border: none;\n}\nbutton:focus {\n  outline: none;\n}\n@media screen and (max-width: 991px) {\n  .navbar-collapse {\n    position: absolute;\n    background-color: #343a40 !important;\n    width: 100%;\n    top: 50px;\n    left: 0;\n    right: 0;\n    z-index: 99;\n  }\n  .navbar-collapse ul {\n    padding: 0 15px 10px;\n  }\n  .navbar-collapse ul li {\n    list-style-type: none;\n  }\n  .dropdown-menu {\n    padding: 0 15px;\n  }\n  .dropdown-menu .dropdown-nav {\n    padding: 0;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/misc/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/misc/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sessionService.user;
        this.onUserChanges = this.sessionService.onUserChanges()
            .subscribe(function (user) { return _this.user = user; });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.onUserChanges.unsubscribe();
    };
    HeaderComponent.prototype.onClickLogout = function () {
        var _this = this;
        this.sessionService.logout()
            .subscribe(function () {
            _this.router.navigate(['/login']);
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/misc/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.less */ "./src/app/components/misc/header/header.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/misc/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/misc/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"hero\">\n  <div class=\"container my-3 home-container\">\n    <h2>Create your trip</h2>\n    <form  #tripForm=\"ngForm\">\n        <div class=\"form-group mb-2\">\n          <input type=\"text\" class=\"form-control\" id=\"origin\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" #originSearch placeholder=\"origin\">  \n        </div>\n        <div class=\"form-group mb-2\">\n          <input type=\"text\" class=\"form-control\" id=\"destination\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" #destinationSearch placeholder=\"destination\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary mb-2W btn-block\" [routerLink]=\"['/route']\" routerLinkActive=\"router-link-active\">Go</button>\n      </form>\n  </div>\n</div>\n\n<!-- <div class=\"col-12\" >\n  <button type=\"submit\" class=\"btn btn-primary btn-block\" [routerLink]=\"['/login']\">Login</button>\n  <hr>\n  <a class=\"btn btn-success btn-block\" [routerLink]=\"['/register']\">Register</a>\n</div> -->\n\n"

/***/ }),

/***/ "./src/app/components/misc/home/home.component.less":
/*!**********************************************************!*\
  !*** ./src/app/components/misc/home/home.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngb-carousel {\n  height: 80vh;\n  position: relative;\n}\nngb-carousel img {\n  width: 100%;\n  max-height: 80vh;\n}\n#hero {\n  height: 87vh;\n  background-image: url('pexels-photo-248159.jpeg');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  padding-bottom: 20px;\n}\n#hero h2 {\n  color: white;\n}\n#hero button {\n  background: #6D4654;\n}\n"

/***/ }),

/***/ "./src/app/components/misc/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/misc/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/map.service */ "./src/app/shared/services/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/// <reference types="@types/googlemaps" />
var HomeComponent = /** @class */ (function () {
    function HomeComponent(mapsAPILoader, ngZone, mapService) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.mapService = mapService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.mapService.autoCompleteCityOrigin(this.searchElement);
        this.mapService.autoCompleteCityDestination(this.searchElement2);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('originSearch'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "searchElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('destinationSearch'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "searchElement2", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/misc/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/app/components/misc/home/home.component.less")]
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_0__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _shared_services_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/misc/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/misc/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/misc/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/misc/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form #userForm=\"ngForm\" (ngSubmit)=\"onClickLogin()\">\n  <div class=\"form-group\">\n    <label>Email address</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" name=\"email\" [(ngModel)]=\"user.email\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"user.password\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form> -->\n<div class=\"container my-3\">\n  <h2>\n      Login\n  </h2>\n  <form (ngSubmit)=\"onClickLogin(loginForm)\" #loginForm=\"ngForm\">\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-user\"></i></span>\n      </div>\n      <input type=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': apiError || email.errors && email.touched }\"\n        placeholder=\"Email\" name=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required email>\n      <div class=\"invalid-feedback\" *ngIf=\"email.errors && email.touched && email.errors.required\">\n        Please chose an email.\n      </div>\n      <div class=\"invalid-feedback\" *ngIf=\"email.errors && email.touched && email.errors.email\">\n        Please enter valid email.\n      </div>\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-lock\"></i></span>\n      </div>\n      <input type=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': apiError || password.errors && password.touched }\"\n        placeholder=\"password\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required>\n      <div class=\"invalid-feedback\" *ngIf=\"password.errors && password.touched && password.errors.required\">\n        Please enter your password.\n      </div>\n      <div class=\"invalid-feedback\" *ngIf=\"apiError\">\n        {{ apiError.message }}\n      </div>\n    </div>\n    <div class=\"form-actions\">\n      <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!loginForm.valid\">Login</button>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/misc/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/misc/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
        this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__["User"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onClickLogin = function (loginForm) {
        var _this = this;
        if (loginForm.valid) {
            this.sessionService.authenticate(this.user)
                .subscribe(function (user) {
                _this.router.navigate(['/']);
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/misc/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/misc/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/pois/list/list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/pois/list/list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-direction [origin]=\"origin\" [destination]=\"destination\">\n  </agm-direction>\n<div *ngFor=\"let poi of pois | poisFilter:searchPattern | poiRatingFilter:searchPatternRating\">\n  <agm-marker *ngIf=\"poi.location.length === 2\"\n    [latitude]=\"poi.location[0]\" [longitude]=\"poi.location[1]\" (markerClick)=\"onClickAddPoi(poi)\"  [ngbCollapse]=\"!formIsCollapsed\"></agm-marker>\n</div>\n</agm-map>\n\n<div class=\"container my-3\">\n\n  <div class=\"filters-wrap my-3 card\">\n    <div class=\"card-header\" (click)=\"filtersIsCollapsed = !filtersIsCollapsed\"\n    [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"filtersIsCollapsed\">\n        Show filters <i class=\"fa fa-caret-down\"></i>\n    </div>\n    <div id=\"filtersIsCollapsed\" [ngbCollapse]=\"!filtersIsCollapsed\" class=\"mt-3 card-body\">\n\n      <div class=\"form-group inline-select\">\n        <label for=\"poiTypeSelect\">Types of POIs</label>\n        <select multiple class=\"form-control\" id=\"poiTypeSelect\" [(ngModel)]=\"searchPattern\" name=\"searchPattern\">\n          <option value=\"Museum\" class=\"form-control\">Museum</option>\n          <option value=\"Town\" class=\"form-control\">Town</option>\n          <option value=\"Scenary\" class=\"form-control\">Scenary</option>\n          <option value=\"Monument\" class=\"form-control\">Monument</option>\n          <option value=\"Walk\" class=\"form-control\">Walk</option>\n        </select>\n      </div>\n    \n      <p>Rating</p>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"searchPatternRating\" id=\"inlineRadio1\" value=\"1\" [(ngModel)]=\"searchPatternRating\">\n        <label class=\"form-check-label\" for=\"inlineRadio1\">1</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"searchPatternRating\" id=\"inlineRadio2\" value=\"2\" [(ngModel)]=\"searchPatternRating\">\n        <label class=\"form-check-label\" for=\"inlineRadio2\">2</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"searchPatternRating\" id=\"inlineRadio3\" value=\"3\" [(ngModel)]=\"searchPatternRating\">\n        <label class=\"form-check-label\" for=\"inlineRadio3\">3</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"searchPatternRating\" id=\"inlineRadio3\" value=\"4\" [(ngModel)]=\"searchPatternRating\">\n        <label class=\"form-check-label\" for=\"inlineRadio3\">4</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"searchPatternRating\" id=\"inlineRadio3\" value=\"5\" [(ngModel)]=\"searchPatternRating\">\n        <label class=\"form-check-label\" for=\"inlineRadio3\">5</label>\n      </div>\n\n    </div>\n  </div>\n  \n  <div class=\"form-wrap\">\n\n    <button class=\"btn btn-primary\" (click)=\"formIsCollapsed = !formIsCollapsed\"\n      [attr.aria-expanded]=\"!formIsCollapsed\" aria-controls=\"formCollapse\">Create trip</button>\n    \n    <div id=\"formCollapse\" [ngbCollapse]=\"!formIsCollapsed\" class=\"mt-3\">\n      <app-trip-create [tripPois]=\"tripPois\"></app-trip-create>\n    </div>\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pois/list/list.component.less":
/*!**********************************************************!*\
  !*** ./src/app/components/pois/list/list.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px;\n}\n"

/***/ }),

/***/ "./src/app/components/pois/list/list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/pois/list/list.component.ts ***!
  \********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _shared_services_review_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/services/review.service */ "./src/app/shared/services/review.service.ts");
/* harmony import */ var _shared_services_poi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/poi.service */ "./src/app/shared/services/poi.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/map.service */ "./src/app/shared/services/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = /** @class */ (function () {
    function ListComponent(mapService, poiService, reviewService) {
        this.mapService = mapService;
        this.poiService = poiService;
        this.reviewService = reviewService;
        this.origin = this.mapService.getOrigin();
        this.destination = this.mapService.getDestination();
        this.pois = [];
        this.tripPois = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.poiService.list().subscribe(function (pois) {
            _this.pois = pois;
            _this.pois.map(function (p) {
                _this.reviewService.list(p.id).subscribe(function (reviews) {
                    var reviewNumber = reviews.length;
                    if (reviewNumber !== 0) {
                        return p.rating = p.rating / reviewNumber;
                    }
                    else {
                        return;
                    }
                });
            });
        });
    };
    ListComponent.prototype.onClickAddPoi = function (poi) {
        this.tripPois.push(poi);
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/pois/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.less */ "./src/app/components/pois/list/list.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_services_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"], _shared_services_poi_service__WEBPACK_IMPORTED_MODULE_1__["PoiService"], _shared_services_review_service__WEBPACK_IMPORTED_MODULE_0__["ReviewService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/components/pois/poi-create/poi-create.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/pois/poi-create/poi-create.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-poi-form (poiSubmit)=\"onSubmitCreatePoiForm($event)\"></app-poi-form>\n"

/***/ }),

/***/ "./src/app/components/pois/poi-create/poi-create.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/components/pois/poi-create/poi-create.component.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pois/poi-create/poi-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/pois/poi-create/poi-create.component.ts ***!
  \********************************************************************/
/*! exports provided: PoiCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoiCreateComponent", function() { return PoiCreateComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_poi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/poi.service */ "./src/app/shared/services/poi.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _poi_form_poi_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../poi-form/poi-form.component */ "./src/app/components/pois/poi-form/poi-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PoiCreateComponent = /** @class */ (function () {
    function PoiCreateComponent(poiService, router) {
        this.poiService = poiService;
        this.router = router;
    }
    PoiCreateComponent.prototype.ngOnInit = function () {
    };
    PoiCreateComponent.prototype.onSubmitCreatePoiForm = function (poi) {
        var _this = this;
        this.poiService.create(poi)
            .subscribe(function (poi) {
            _this.poiFormComponent.reset();
            _this.router.navigate(['/pois', poi.id]);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_poi_form_poi_form_component__WEBPACK_IMPORTED_MODULE_3__["PoiFormComponent"]),
        __metadata("design:type", _poi_form_poi_form_component__WEBPACK_IMPORTED_MODULE_3__["PoiFormComponent"])
    ], PoiCreateComponent.prototype, "poiFormComponent", void 0);
    PoiCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-poi-create',
            template: __webpack_require__(/*! ./poi-create.component.html */ "./src/app/components/pois/poi-create/poi-create.component.html"),
            styles: [__webpack_require__(/*! ./poi-create.component.less */ "./src/app/components/pois/poi-create/poi-create.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_services_poi_service__WEBPACK_IMPORTED_MODULE_1__["PoiService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], PoiCreateComponent);
    return PoiCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/pois/poi-detail/poi-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/pois/poi-detail/poi-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-3\">\n\n  <p>\n    {{poi.name}}\n  </p>\n\n  <p>\n    {{poi.location}}\n  </p>\n\n  <div *ngFor=\"let image of poi.gallery\" >\n    <img [src]=\"image\">\n  </div>\n\n  <p>\n      {{poi.poiType}}\n  </p>\n    \n\n  <app-review-create></app-review-create>\n\n  <app-review-list></app-review-list>\n\n</div>"

/***/ }),

/***/ "./src/app/components/pois/poi-detail/poi-detail.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/components/pois/poi-detail/poi-detail.component.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pois/poi-detail/poi-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/pois/poi-detail/poi-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: PoiDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoiDetailComponent", function() { return PoiDetailComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_poi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/poi.service */ "./src/app/shared/services/poi.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_poi_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/models/poi.model */ "./src/app/shared/models/poi.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PoiDetailComponent = /** @class */ (function () {
    function PoiDetailComponent(poiService, route) {
        this.poiService = poiService;
        this.route = route;
        this.poi = new _shared_models_poi_model__WEBPACK_IMPORTED_MODULE_3__["Poi"]();
    }
    PoiDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) { return params.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (poiId) { return _this.poiService.get(poiId); })).subscribe(function (poi) { return _this.poi = poi; });
    };
    PoiDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-poi-detail',
            template: __webpack_require__(/*! ./poi-detail.component.html */ "./src/app/components/pois/poi-detail/poi-detail.component.html"),
            styles: [__webpack_require__(/*! ./poi-detail.component.less */ "./src/app/components/pois/poi-detail/poi-detail.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_services_poi_service__WEBPACK_IMPORTED_MODULE_1__["PoiService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], PoiDetailComponent);
    return PoiDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/pois/poi-form/poi-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/pois/poi-form/poi-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-3\">\n  <div class=\"row mb-5\">\n    <div class=\"col-12\">\n      <form (ngSubmit)=\"onSubmitPoiForm()\" #poiForm=\"ngForm\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-font\"></i></span>\n          </div>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': name.touched && name.errors}\" placeholder=\"Title\"\n            name=\"name\" [(ngModel)]=\"poi.name\" #name=\"ngModel\" required>\n          <div class=\"invalid-feedback\" *ngIf=\"name.errors && name.touched && name.errors.required\">\n            Please enter a title.\n          </div>\n        </div>\n        \n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-edit\"></i></span>\n          </div>\n          <textarea type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': description.touched && description.errors}\" placeholder=\"Describe your point of interest\"\n            name=\"description\" [(ngModel)]=\"poi.description\" #description=\"ngModel\"></textarea>\n          <div class=\"invalid-feedback\" *ngIf=\"description.errors && description.touched && description.errors.required\">\n            Please enter a description.\n          </div>\n        </div>\n\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-map-marker\"></i></span>\n          </div>\n          <input type=\"text\" class=\"form-control\" id=\"location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" #location placeholder=\"location\">\n        </div>\n\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-tag\"></i></span>\n          </div>\n          <select  class=\"form-control\" placeholder=\"test\" id=\"poiType\" [(ngModel)]=\"poi.poiType\" #poiType=\"ngModel\" name=\"poiType\" >\n            <!-- <option value=\"\">Select a type</option> -->\n            <option value=\"Museum\" class=\"form-control\">Museum</option>\n            <option value=\"Town\" class=\"form-control\">Town</option>\n            <option value=\"Scenary\" class=\"form-control\">Scenary</option>\n            <option value=\"Monument\" class=\"form-control\">Monument</option>\n            <option value=\"Walk\" class=\"form-control\">Walk</option>\n\n          </select>\n\n        </div>\n        \n        <!-- <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-gears\"></i></span>\n          </div>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Tag\" name=\"tag\" #tag>\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"onClickAddTag(tag)\"><i class=\"fa fa-plus\"></i></button>\n          </div>\n        </div>\n        \n        <div class=\"input-group mb-3\" *ngFor=\"let tag of poi.tags\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-gear\"></i></span>\n          </div>\n          <input type=\"text\" class=\"form-control\" name=\"tags\" [value]=\"tag\" disabled readonly>\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-danger\" type=\"button\" (click)=\"onClickRemoveTag(tag)\"><i class=\"fa fa-minus\"></i></button>\n          </div>\n        </div> -->\n\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-file-o\"></i></span>\n          </div>\n          <div class=\"custom-file\">\n            <input type=\"file\" name=\"gallery\" class=\"custom-file-input\" #poiFiles multiple (change)=\"onChangeGalleryFile(poiFiles)\">\n            <label class=\"custom-file-label\">Choose files</label>\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"poiFiles.errors\">\n            Please choose a file.\n          </div>\n        </div>\n        <!-- \n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-find\"></i></span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search by title...\" name=\"searchPattern\" [(ngModel)]=\"searchPattern\">\n      </div>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-find\"></i></span>\n        </div>\n        <select [(ngModel)]=\"searchField\">\n          <option value=\"title\">Title</option>\n          <option value=\"summary\">Summary</option>\n        </select>\n\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"card-group\">\n        <div class=\"card\" *ngFor=\"let film of films | filmF      <div class=\"row mt-3 mb-3\">\n          <div class=\"col-3\" *ngFor=\"let previewImage of previewImages\">\n            <img class=\"card-img-top img-thumbnail\" [src]=\"previewImage\" (error)=\"onImgPreviewError(image)\" #image>\n          </div>\n        </div> -->\n\n        <div class=\"form-actions\">\n          <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!poiForm.valid\">Create</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pois/poi-form/poi-form.component.less":
/*!******************************************************************!*\
  !*** ./src/app/components/pois/poi-form/poi-form.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pois/poi-form/poi-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/pois/poi-form/poi-form.component.ts ***!
  \****************************************************************/
/*! exports provided: PoiFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoiFormComponent", function() { return PoiFormComponent; });
/* harmony import */ var _shared_models_poi_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/models/poi.model */ "./src/app/shared/models/poi.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _shared_services_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/map.service */ "./src/app/shared/services/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/// <reference types="@types/googlemaps" />
var PoiFormComponent = /** @class */ (function () {
    function PoiFormComponent(mapsAPILoader, ngZone, mapService) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.mapService = mapService;
        this.poi = new _shared_models_poi_model__WEBPACK_IMPORTED_MODULE_0__["Poi"]();
        this.poiSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PoiFormComponent.prototype.ngOnInit = function () {
        this.mapService.autoCompleteAddress(this.searchElement);
    };
    PoiFormComponent.prototype.onSubmitPoiForm = function () {
        if (this.poiForm.valid) {
            this.poi.location[0] = this.mapService.locationCoordinates.lat;
            this.poi.location[1] = this.mapService.locationCoordinates.lng;
            console.log(this.poi);
            this.poiSubmit.emit(this.poi);
        }
    };
    PoiFormComponent.prototype.reset = function () {
        this.poi = new _shared_models_poi_model__WEBPACK_IMPORTED_MODULE_0__["Poi"]();
        this.poiForm.reset();
    };
    PoiFormComponent.prototype.onChangeGalleryFile = function (image) {
        if (image.files) {
            for (var i = 0; i < image.files.length; i++) {
                this.poi.gallery.push(image.files[i]);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _shared_models_poi_model__WEBPACK_IMPORTED_MODULE_0__["Poi"])
    ], PoiFormComponent.prototype, "poi", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PoiFormComponent.prototype, "poiSubmit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('poiForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], PoiFormComponent.prototype, "poiForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('location'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PoiFormComponent.prototype, "searchElement", void 0);
    PoiFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-poi-form',
            template: __webpack_require__(/*! ./poi-form.component.html */ "./src/app/components/pois/poi-form/poi-form.component.html"),
            styles: [__webpack_require__(/*! ./poi-form.component.less */ "./src/app/components/pois/poi-form/poi-form.component.less")]
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _shared_services_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]])
    ], PoiFormComponent);
    return PoiFormComponent;
}());



/***/ }),

/***/ "./src/app/components/pois/poi-list-text/poi-list-text.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/pois/poi-list-text/poi-list-text.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let poi of pois\">\n  <p>\n    {{ poi.name }}\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/components/pois/poi-list-text/poi-list-text.component.less":
/*!****************************************************************************!*\
  !*** ./src/app/components/pois/poi-list-text/poi-list-text.component.less ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pois/poi-list-text/poi-list-text.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/pois/poi-list-text/poi-list-text.component.ts ***!
  \**************************************************************************/
/*! exports provided: PoiListTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoiListTextComponent", function() { return PoiListTextComponent; });
/* harmony import */ var _shared_services_review_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/services/review.service */ "./src/app/shared/services/review.service.ts");
/* harmony import */ var _shared_services_poi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/poi.service */ "./src/app/shared/services/poi.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PoiListTextComponent = /** @class */ (function () {
    function PoiListTextComponent(poiService, reviewService) {
        this.poiService = poiService;
        this.reviewService = reviewService;
        this.pois = [];
        this.inUserProfile = false;
    }
    PoiListTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.poiService.list().subscribe(function (pois) {
            if (!_this.inUserProfile) {
                _this.pois = pois;
            }
            _this.pois.map(function (p) {
                _this.reviewService.list(p.id).subscribe(function (reviews) {
                    var reviewNumber = reviews.length;
                    if (reviewNumber !== 0) {
                        return p.rating = p.rating / reviewNumber;
                    }
                    else {
                        return;
                    }
                });
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Array)
    ], PoiListTextComponent.prototype, "pois", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean)
    ], PoiListTextComponent.prototype, "inUserProfile", void 0);
    PoiListTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-poi-list-text',
            template: __webpack_require__(/*! ./poi-list-text.component.html */ "./src/app/components/pois/poi-list-text/poi-list-text.component.html"),
            styles: [__webpack_require__(/*! ./poi-list-text.component.less */ "./src/app/components/pois/poi-list-text/poi-list-text.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_services_poi_service__WEBPACK_IMPORTED_MODULE_1__["PoiService"], _shared_services_review_service__WEBPACK_IMPORTED_MODULE_0__["ReviewService"]])
    ], PoiListTextComponent);
    return PoiListTextComponent;
}());



/***/ }),

/***/ "./src/app/components/reviews/review-create/review-create.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/reviews/review-create/review-create.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container mx-auto my-3\">\n    <div class=\"row justify-content-around\">\n        <div class=\"col-sm-6\">\n          <h4>Reviews</h4>\n            <form #reviewForm=\"ngForm\" (ngSubmit)=\"onSubmitCreateReview(reviewForm)\" >\n                <div class=\"form-group\">\n                    <input type=\"number\" name=\"rating\" placeholder=\"rating\" [(ngModel)]=\"review.rating\" >\n                </div>\n    \n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" [ngClass]=\"{ 'is-invalid': apiError || title.errors && title.touched }\" name=\"title\" placeholder=\"title\" [(ngModel)]=\"review.title\" #title=\"ngModel\" required title>\n            </div>\n\n            <div class=\"form-group\">\n                <textarea class=\"form-control\" name=\"description\" id=\"description\" rows=\"5\" [ngClass]=\"{ 'is-invalid': apiError || description.errors && description.touched }\" name=\"description\" placeholder=\"description\" [(ngModel)]=\"review.description\" #description=\"ngModel\" required description></textarea>\n            </div>\n\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!reviewForm.valid\">Create</button>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/reviews/review-create/review-create.component.less":
/*!*******************************************************************************!*\
  !*** ./src/app/components/reviews/review-create/review-create.component.less ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/reviews/review-create/review-create.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/reviews/review-create/review-create.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ReviewCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewCreateComponent", function() { return ReviewCreateComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_models_review_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/models/review.model */ "./src/app/shared/models/review.model.ts");
/* harmony import */ var _shared_services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/review.service */ "./src/app/shared/services/review.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewCreateComponent = /** @class */ (function () {
    function ReviewCreateComponent(reviewService, route) {
        this.reviewService = reviewService;
        this.route = route;
        this.review = new _shared_models_review_model__WEBPACK_IMPORTED_MODULE_1__["Review"]();
    }
    ReviewCreateComponent.prototype.ngOnInit = function () {
    };
    ReviewCreateComponent.prototype.onSubmitCreateReview = function (reviewForm) {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) { return _this.poiId = params.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (poiId) { return _this.reviewService.create(_this.review, poiId); })).subscribe(function (review) {
            reviewForm.reset();
        });
    };
    ReviewCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-review-create',
            template: __webpack_require__(/*! ./review-create.component.html */ "./src/app/components/reviews/review-create/review-create.component.html"),
            styles: [__webpack_require__(/*! ./review-create.component.less */ "./src/app/components/reviews/review-create/review-create.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_services_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], ReviewCreateComponent);
    return ReviewCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/reviews/review-list/review-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/reviews/review-list/review-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mx-auto my-3\" *ngFor=\"let review of reviews\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"d-flex justify-content-between align-items-center\">\n          <div class=\"\">\n            {{ review.title }}\n          </div>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <blockquote class=\"blockquote mb-0\">\n          <p>\n            {{ review.description }}\n          </p>\n        </blockquote>\n          - {{review.name}}       \n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/reviews/review-list/review-list.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/components/reviews/review-list/review-list.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/reviews/review-list/review-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/reviews/review-list/review-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReviewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewListComponent", function() { return ReviewListComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/review.service */ "./src/app/shared/services/review.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewListComponent = /** @class */ (function () {
    function ReviewListComponent(reviewService, route) {
        this.reviewService = reviewService;
        this.route = route;
        this.reviews = [];
    }
    ReviewListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (params) { return _this.poiId = params.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (poiId) { return _this.reviewService.list(poiId); })).subscribe(function (reviews) {
            _this.reviews = reviews;
        });
    };
    ReviewListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-review-list',
            template: __webpack_require__(/*! ./review-list.component.html */ "./src/app/components/reviews/review-list/review-list.component.html"),
            styles: [__webpack_require__(/*! ./review-list.component.less */ "./src/app/components/reviews/review-list/review-list.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_services_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ReviewListComponent);
    return ReviewListComponent;
}());



/***/ }),

/***/ "./src/app/components/trips/trip-create/trip-create.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/trips/trip-create/trip-create.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-trip-form (tripSubmit)=\"onSubmitCreateTripForm($event)\" [tripPois]=\"tripPois\"></app-trip-form>\n\n"

/***/ }),

/***/ "./src/app/components/trips/trip-create/trip-create.component.less":
/*!*************************************************************************!*\
  !*** ./src/app/components/trips/trip-create/trip-create.component.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/trips/trip-create/trip-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/trips/trip-create/trip-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: TripCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripCreateComponent", function() { return TripCreateComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_trip_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/trip.service */ "./src/app/shared/services/trip.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TripCreateComponent = /** @class */ (function () {
    function TripCreateComponent(tripService, router) {
        this.tripService = tripService;
        this.router = router;
        this.tripPois = [];
    }
    TripCreateComponent.prototype.ngOnInit = function () {
    };
    TripCreateComponent.prototype.onSubmitCreateTripForm = function (trip) {
        var _this = this;
        this.tripService.create(trip)
            .subscribe(function (trip) {
            _this.router.navigate(['trips', trip.id]);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Array)
    ], TripCreateComponent.prototype, "tripPois", void 0);
    TripCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-trip-create',
            template: __webpack_require__(/*! ./trip-create.component.html */ "./src/app/components/trips/trip-create/trip-create.component.html"),
            styles: [__webpack_require__(/*! ./trip-create.component.less */ "./src/app/components/trips/trip-create/trip-create.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_services_trip_service__WEBPACK_IMPORTED_MODULE_1__["TripService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], TripCreateComponent);
    return TripCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/trips/trip-detail/trip-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/trips/trip-detail/trip-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-wrap\">\n  <h2 class=\"card-title\">{{trip.name}}</h2>\n</div>\n\n<div class=\"container my-3\">\n  <div class=\"card-body\">\n    <p class=\"card-text\">{{trip.description}}</p>\n    <a href=\"#\" class=\"card-link\">See POIs</a>\n    <a href=\"#\" class=\"card-link\">Another link</a>\n  </div>\n\n\n  <div *ngFor=\"let image of trip.gallery\" >\n    <img [src]=\"image\">\n  </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/components/trips/trip-detail/trip-detail.component.less":
/*!*************************************************************************!*\
  !*** ./src/app/components/trips/trip-detail/trip-detail.component.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner-wrap {\n  background-image: url('banner1.jpg');\n}\n"

/***/ }),

/***/ "./src/app/components/trips/trip-detail/trip-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/trips/trip-detail/trip-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: TripDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailComponent", function() { return TripDetailComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_models_trip_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/models/trip.model */ "./src/app/shared/models/trip.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_trip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/services/trip.service */ "./src/app/shared/services/trip.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TripDetailComponent = /** @class */ (function () {
    function TripDetailComponent(tripService, route) {
        this.tripService = tripService;
        this.route = route;
        this.trip = new _shared_models_trip_model__WEBPACK_IMPORTED_MODULE_1__["Trip"]();
    }
    TripDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (params) { return params.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (tripId) { return _this.tripService.get(tripId); })).subscribe(function (trip) { return _this.trip = trip; });
    };
    TripDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-trip-detail',
            template: __webpack_require__(/*! ./trip-detail.component.html */ "./src/app/components/trips/trip-detail/trip-detail.component.html"),
            styles: [__webpack_require__(/*! ./trip-detail.component.less */ "./src/app/components/trips/trip-detail/trip-detail.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_services_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], TripDetailComponent);
    return TripDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/trips/trip-form/trip-form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/trips/trip-form/trip-form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-5\">\n  <div class=\"col-12\">\n    <h4>Create your trip</h4>\n    <form (ngSubmit)=\"onSubmitTripForm()\" #tripForm=\"ngForm\">\n\n      <div class=\"input-group sm-card mb-2\">\n        <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-map-marker\"></i></span>\n        </div>\n        <div class=\"form-control h-auto\">\n          <div class=\"placeholder-text\" *ngIf=\"tripPois.length <= 0\">\n            (Stops will appear here as you click and save a pin)\n          </div>\n          <h4 *ngFor=\"let tripPoi of tripPois\" class=\"d-inline\">\n              <span class=\"badge badge-light\">{{ tripPoi.name }}</span>\n          </h4>\n        </div>\n      </div>\n      \n      <div class=\"input-group mb-2\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\"><i class=\"fa fa-font\"></i></span>\n        </div>\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': name.touched && name.errors}\" placeholder=\"Name your trip here\"\n          name=\"name\" [(ngModel)]=\"trip.name\" #name=\"ngModel\" required>\n        <div class=\"invalid-feedback\" *ngIf=\"name.errors && name.touched && name.errors.required\">\n          Give your trip a name.\n        </div>\n      </div>\n      \n      <div class=\"input-group mb-2\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\"><i class=\"fa fa-edit\"></i></span>\n        </div>\n        <textarea type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': description.touched && description.errors}\" placeholder=\"You can put a description of your trip here\"\n          name=\"description\" [(ngModel)]=\"trip.description\" #description=\"ngModel\"></textarea>\n        <div class=\"invalid-feedback\" *ngIf=\"description.errors && description.touched && description.errors.required\">\n          \n        </div>\n      </div>\n                  \n\n      <!-- <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\"><i class=\"fa fa-file-o\"></i></span>\n        </div>\n        <div class=\"custom-file\">\n          <input type=\"file\" name=\"gallery\" class=\"custom-file-input\" #tripFiles multiple (change)=\"onChangeGalleryFile(tripFiles)\">\n          <label class=\"custom-file-label\">Choose files</label>\n        </div>\n        <div class=\"invalid-feedback\" *ngIf=\"tripFiles.errors\">\n          Please choose a file.\n        </div>\n      </div> -->\n\n      <div class=\"form-actions\">\n        <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!tripForm.valid\">Create</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/trips/trip-form/trip-form.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/components/trips/trip-form/trip-form.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/trips/trip-form/trip-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/trips/trip-form/trip-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: TripFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripFormComponent", function() { return TripFormComponent; });
/* harmony import */ var _shared_services_map_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/services/map.service */ "./src/app/shared/services/map.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_trip_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/models/trip.model */ "./src/app/shared/models/trip.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripFormComponent = /** @class */ (function () {
    function TripFormComponent(mapService) {
        this.mapService = mapService;
        this.tripPois = [];
        this.trip = new _shared_models_trip_model__WEBPACK_IMPORTED_MODULE_3__["Trip"]();
        this.tripSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    TripFormComponent.prototype.ngOnInit = function () {
    };
    TripFormComponent.prototype.onSubmitTripForm = function () {
        if (this.tripForm.valid) {
            this.trip.originLocation[0] = this.mapService.origin.lat;
            this.trip.originLocation[1] = this.mapService.origin.lng;
            this.trip.destinationLocation[0] = this.mapService.destination.lat;
            this.trip.destinationLocation[1] = this.mapService.destination.lng;
            var tripPoiId = this.tripPois.map(function (tripPoi) { return tripPoi.id; });
            this.trip.pois = tripPoiId;
            this.tripSubmit.emit(this.trip);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Array)
    ], TripFormComponent.prototype, "tripPois", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", _shared_models_trip_model__WEBPACK_IMPORTED_MODULE_3__["Trip"])
    ], TripFormComponent.prototype, "trip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tripForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], TripFormComponent.prototype, "tripForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], TripFormComponent.prototype, "tripSubmit", void 0);
    TripFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-trip-form',
            template: __webpack_require__(/*! ./trip-form.component.html */ "./src/app/components/trips/trip-form/trip-form.component.html"),
            styles: [__webpack_require__(/*! ./trip-form.component.less */ "./src/app/components/trips/trip-form/trip-form.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_services_map_service__WEBPACK_IMPORTED_MODULE_0__["MapService"]])
    ], TripFormComponent);
    return TripFormComponent;
}());



/***/ }),

/***/ "./src/app/components/trips/trip-list/trip-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/trips/trip-list/trip-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let trip of trips\">\n  {{ trip.name }}\n</div>\n"

/***/ }),

/***/ "./src/app/components/trips/trip-list/trip-list.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/components/trips/trip-list/trip-list.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/trips/trip-list/trip-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/trips/trip-list/trip-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: TripListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripListComponent", function() { return TripListComponent; });
/* harmony import */ var _shared_services_trip_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/services/trip.service */ "./src/app/shared/services/trip.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripListComponent = /** @class */ (function () {
    function TripListComponent(tripService) {
        this.tripService = tripService;
        this.trips = [];
        this.inUserProfile = false;
    }
    TripListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tripService.list()
            .subscribe(function (trips) {
            if (!_this.inUserProfile) {
                _this.trips = trips;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], TripListComponent.prototype, "trips", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], TripListComponent.prototype, "inUserProfile", void 0);
    TripListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trip-list',
            template: __webpack_require__(/*! ./trip-list.component.html */ "./src/app/components/trips/trip-list/trip-list.component.html"),
            styles: [__webpack_require__(/*! ./trip-list.component.less */ "./src/app/components/trips/trip-list/trip-list.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_services_trip_service__WEBPACK_IMPORTED_MODULE_0__["TripService"]])
    ], TripListComponent);
    return TripListComponent;
}());



/***/ }),

/***/ "./src/app/components/users/user-create/user-create.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/users/user-create/user-create.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container my-3\">\n  <form class=\"col-12 mx-auto\" #registerForm=\"ngForm\" (ngSubmit)=\"onSubmitCreateUser(registerForm)\" >\n    <h2>\n        Register\n    </h2>\n    <div class=\"input-group mb-2\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\n      </div>\n      <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': apiError || firstName.errors && firstName.touched }\" name=\"firstName\" placeholder=\"Name\" [(ngModel)]=\"user.firstName\" #firstName=\"ngModel\" required firstName>\n    </div>\n\n    <div class=\"input-group mb-2\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\n      </div>\n      <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': apiError || surname.errors && surname.touched }\" name=\"surname\" placeholder=\"Last name\" [(ngModel)]=\"user.surname\" #surname=\"ngModel\" required surname>\n    </div>\n\n    <div class=\"input-group mb-2\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\"> <i class=\"fa fa-envelope\"></i> </span>\n      </div>\n      <input type=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': apiError || email.errors && email.touched }\" name=\"email\" placeholder=\"user@example.org\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required email>\n    </div>\n\n    <div class=\"input-group mb-2\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n      </div>\n      <input type=\"password\" class=\"form-control\"[ngClass]=\"{ 'is-invalid': apiError || password.errors && password.touched }\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required password>\n    </div>\n\n    <div class=\"\">\n\n      <button class=\"btn btn-success mb-2 btn-block\" type=\"submit\" [disabled]=\"!registerForm.valid\">Register</button>\n\n      <hr>\n    </div>\n\n  </form>\n</div>\n\n\n "

/***/ }),

/***/ "./src/app/components/users/user-create/user-create.component.less":
/*!*************************************************************************!*\
  !*** ./src/app/components/users/user-create/user-create.component.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/user-create/user-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/users/user-create/user-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    UserCreateComponent.prototype.ngOnInit = function () {
    };
    UserCreateComponent.prototype.onSubmitCreateUser = function (registerForm) {
        var _this = this;
        if (registerForm.valid) {
            this.userService.create(this.user).subscribe(function (user) {
                _this.user = user;
                _this.router.navigate(['profile', _this.user.id]);
            });
        }
    };
    UserCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! ./user-create.component.html */ "./src/app/components/users/user-create/user-create.component.html"),
            styles: [__webpack_require__(/*! ./user-create.component.less */ "./src/app/components/users/user-create/user-create.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/users/user-detail/user-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/users/user-detail/user-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    width: 100%;\n}\n\n.imgRound {\n    width:74px;\n    height:74px;\n    border-radius:37px;\n}\n\n.profileContainer{\n    height: 100px;\n    border-bottom-color: blue;\n}\n\n.background {\n    background-color: pink;\n    opacity: 0.5;\n    height: 100px;\n\n}\n\n.profileButton {\n    font-size: 20px;\n    color: pink;\n}\n\n\n"

/***/ }),

/***/ "./src/app/components/users/user-detail/user-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/users/user-detail/user-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profileContainer\">\n    <div class=\"background\">\n        </div>\n\n        <div class=\"container my-3\">\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <img [src]=\"user.image\" alt=\"\" class=\"imgRound\">\n                </div>\n                <div class=\"col-6\">\n                        <h4 class=\"m-0\">{{ user.firstName }} {{ user.surname }}</h4>\n                </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <p class=\"badge badge-success mx-3 role m-0 role\"><i class=\"fa fa-star\"></i>&nbsp;New traveller</p>\n                </div>\n                <div class=\"col-8\">\n                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis luctus semper, cursus vestibulum at sed taciti platea magna molestie.</p>\n                </div>\n\n\n        </div>\n       \n\n        <div class=\"container my-3\">\n            <a [routerLink]=\"['edit']\">Edit Profile</a>\n        </div>\n\n\n    </div>\n</div>\n\n    \n    <div class=\"container my-3\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <button type=\"button\" class=\"profileButton\" (click)=\"onClickShowTrips()\">Your Trips</button>\n                <div *ngIf=\"showTrips\">\n                    <app-trip-list [trips]=\"userTrips\" [inUserProfile]=\"inUserProfile\"></app-trip-list>\n                </div>\n            </div>\n                <div class=\"col\">\n            <div class=\"col\">\n                <button type=\"button\" class=\"profileButton\" (click)=\"onClickShowPois()\">Your Pois</button>\n                <div *ngIf=\"showTrips\"></div>\n                    <app-poi-list-text [pois]=\"userPois\" [inUserProfile]=\"inUserProfile\"></app-poi-list-text>\n                </div>\n            </div>\n        </div>\n    \n    </div> \n\n"

/***/ }),

/***/ "./src/app/components/users/user-detail/user-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/users/user-detail/user-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(userService, sessionService, route) {
        this.userService = userService;
        this.sessionService = sessionService;
        this.route = route;
        this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__["User"]();
        this.userTrips = [];
        this.userPois = [];
        this.inUserProfile = true;
        this.showTrips = true;
        this.showPois = false;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sessionService.getItemLocalStorage();
        var userId = this.user.id;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (params) { return _this.userId = params.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (userId) { return _this.userService.getUserInfo(userId); })).subscribe(function (userInfo) {
            _this.userTrips = userInfo.trips;
            _this.userPois = userInfo.pois;
        });
    };
    UserDetailComponent.prototype.onClickShowTrips = function () {
        this.showTrips = true;
        this.showPois = false;
    };
    UserDetailComponent.prototype.onClickShowPois = function () {
        this.showPois = true;
        this.showTrips = false;
    };
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/components/users/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.css */ "./src/app/components/users/user-detail/user-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/users/user-edit/user-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/users/user-edit/user-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form class=\"col-12 mx-auto\" #editForm=\"ngForm\" (ngSubmit)=\"onClickEditUser(editForm)\">\n    <h2>\n      Edit profile\n  </h2>\n\n  <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\"><i class=\"fa fa-file-o\"></i></span>\n      </div>\n      <div class=\"custom-file\">\n        <input type=\"file\" name=\"image\" class=\"custom-file-input\" #image (change)=\"onChangeImage(image)\">\n        <label class=\"custom-file-label\">Choose file</label>\n      </div>\n      <div class=\"invalid-feedback\" *ngIf=\"image.errors\">\n        Please choose a file.\n      </div>\n    </div>\n\n  <div class=\"input-group mb-2\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\"> <i class=\"fas fa-user\"></i> </span>\n    </div>\n    <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': apiError || firstName.errors && firstName.touched }\" name=\"firstName\" placeholder=\"Name\" [(ngModel)]=\"user.firstName\" #firstName=\"ngModel\" required firstName>\n  </div>\n\n  <div class=\"input-group mb-2\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\"> <i class=\"fas fa-user\"></i> </span>\n    </div>\n    <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': apiError || surname.errors && surname.touched }\" name=\"surname\" placeholder=\"Last name\" [(ngModel)]=\"user.surname\" #surname=\"ngModel\" required surname>\n  </div>\n\n  <div class=\"input-group mb-2\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\"> <i class=\"fas fa-envelope\"></i> </span>\n    </div>\n    <input type=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': apiError || email.errors && email.touched }\" name=\"email\" placeholder=\"user@exaple.org\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required email>\n  </div>\n\n  <div>\n    <button class=\"btn btn-success mb-2 btn-block\" type=\"submit\">Save changes</button>\n    <hr>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/components/users/user-edit/user-edit.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/components/users/user-edit/user-edit.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/user-edit/user-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/user-edit/user-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/models/user.model */ "./src/app/shared/models/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(userService, sessionService, router) {
        this.userService = userService;
        this.sessionService = sessionService;
        this.router = router;
        this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.user = this.sessionService.user;
    };
    UserEditComponent.prototype.onChangeImage = function (image) {
        if (image.files) {
            this.user.image = image.files[0];
        }
    };
    UserEditComponent.prototype.onClickEditUser = function (editForm) {
        var _this = this;
        if (editForm.valid) {
            var userId = this.user.id;
            this.userService.edit(userId, this.user).subscribe(function (user) {
                _this.router.navigate(['/profile', _this.user.id]);
            });
        }
    };
    UserEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/components/users/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.less */ "./src/app/components/users/user-edit/user-edit.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/shared/guards/is-authenticated.guard.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/guards/is-authenticated.guard.ts ***!
  \*********************************************************/
/*! exports provided: IsAuthenticatedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAuthenticatedGuard", function() { return IsAuthenticatedGuard; });
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IsAuthenticatedGuard = /** @class */ (function () {
    function IsAuthenticatedGuard(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    IsAuthenticatedGuard.prototype.canActivate = function (next, state) {
        var isAuth = this.sessionService.isAuthenticated();
        if (!isAuth) {
            this.router.navigate(['/login']);
        }
        return isAuth;
    };
    IsAuthenticatedGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_session_service__WEBPACK_IMPORTED_MODULE_0__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IsAuthenticatedGuard);
    return IsAuthenticatedGuard;
}());



/***/ }),

/***/ "./src/app/shared/models/api-error.model.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/api-error.model.ts ***!
  \**************************************************/
/*! exports provided: ApiError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiError", function() { return ApiError; });
var ApiError = /** @class */ (function () {
    function ApiError() {
        this.errors = [];
    }
    return ApiError;
}());



/***/ }),

/***/ "./src/app/shared/models/coordinates.model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/models/coordinates.model.ts ***!
  \****************************************************/
/*! exports provided: Coordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coordinates", function() { return Coordinates; });
var Coordinates = /** @class */ (function () {
    function Coordinates() {
    }
    return Coordinates;
}());



/***/ }),

/***/ "./src/app/shared/models/poi.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/poi.model.ts ***!
  \********************************************/
/*! exports provided: Poi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poi", function() { return Poi; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ "./src/app/shared/models/user.model.ts");

var Poi = /** @class */ (function () {
    function Poi() {
        this.location = [];
        this.gallery = [];
        this.tags = [];
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_0__["User"]();
    }
    Poi.prototype.asFormData = function () {
        var data = new FormData();
        for (var _i = 0, _a = this.location; _i < _a.length; _i++) {
            var location_1 = _a[_i];
            data.append('location', location_1.toString());
        }
        data.append('poiType', this.poiType);
        data.append('name', this.name);
        data.append('description', this.description);
        for (var _b = 0, _c = this.tags; _b < _c.length; _b++) {
            var tag = _c[_b];
            data.append('tag', tag);
        }
        // data.append('rating', this.rating.toString());
        for (var _d = 0, _e = this.gallery; _d < _e.length; _d++) {
            var file = _e[_d];
            data.append('file', file);
        }
        return data;
    };
    return Poi;
}());



/***/ }),

/***/ "./src/app/shared/models/review.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/review.model.ts ***!
  \***********************************************/
/*! exports provided: Review */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
/* harmony import */ var _poi_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poi.model */ "./src/app/shared/models/poi.model.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.model */ "./src/app/shared/models/user.model.ts");


var Review = /** @class */ (function () {
    function Review() {
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.poi = new _poi_model__WEBPACK_IMPORTED_MODULE_0__["Poi"]();
    }
    return Review;
}());



/***/ }),

/***/ "./src/app/shared/models/trip.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/trip.model.ts ***!
  \*********************************************/
/*! exports provided: Trip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trip", function() { return Trip; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ "./src/app/shared/models/user.model.ts");

var Trip = /** @class */ (function () {
    function Trip() {
        this.originLocation = [];
        this.destinationLocation = [];
        this.gallery = [];
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_0__["User"]();
        this.pois = [];
    }
    Trip.prototype.asFormData = function () {
        var data = new FormData();
        for (var _i = 0, _a = this.originLocation; _i < _a.length; _i++) {
            var originLocation = _a[_i];
            data.append('originLocation', originLocation.toString());
        }
        for (var _b = 0, _c = this.destinationLocation; _b < _c.length; _b++) {
            var destinationLocation = _c[_b];
            data.append('destinationLocation', destinationLocation.toString());
        }
        data.append('name', this.name);
        data.append('description', this.description);
        for (var _d = 0, _e = this.pois; _d < _e.length; _d++) {
            var poi = _e[_d];
            data.append('poi', poi);
        }
        for (var _f = 0, _g = this.gallery; _f < _g.length; _f++) {
            var file = _g[_f];
            data.append('file', file);
        }
        return data;
    };
    return Trip;
}());



/***/ }),

/***/ "./src/app/shared/models/user.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/user.model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.tags = [];
    }
    User.prototype.asFormData = function () {
        var data = new FormData();
        data.append('firstName', this.firstName);
        data.append('surname', this.surname);
        data.append('image', this.image);
        data.append('password', this.password);
        data.append('email', this.email);
        // for (const tag of this.tags) {
        //     data.append('tag', tag);
        //     }
        data.append('rating', this.rating.toString());
        data.append('role', this.role);
        return data;
    };
    return User;
}());



/***/ }),

/***/ "./src/app/shared/pipes/poi-rating-filter.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/poi-rating-filter.pipe.ts ***!
  \********************************************************/
/*! exports provided: PoiRatingFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoiRatingFilterPipe", function() { return PoiRatingFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PoiRatingFilterPipe = /** @class */ (function () {
    function PoiRatingFilterPipe() {
    }
    PoiRatingFilterPipe.prototype.transform = function (pois, pattern) {
        if (!pois) {
            return [];
        }
        else if (!pattern) {
            return pois;
        }
        return pois.filter(function (poi) { return (poi.rating >= pattern); });
    };
    PoiRatingFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'poiRatingFilter'
        })
    ], PoiRatingFilterPipe);
    return PoiRatingFilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/pois-filter.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/pois-filter.pipe.ts ***!
  \**************************************************/
/*! exports provided: PoisFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoisFilterPipe", function() { return PoisFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PoisFilterPipe = /** @class */ (function () {
    function PoisFilterPipe() {
    }
    PoisFilterPipe.prototype.transform = function (pois, pattern, field) {
        if (field === void 0) { field = 'poiType'; }
        if (!pois) {
            return [];
        }
        else if (!pattern) {
            return pois;
        }
        return pois.filter(function (poi) { return (pattern.indexOf(poi[field]) !== -1); });
    };
    PoisFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'poisFilter'
        })
    ], PoisFilterPipe);
    return PoisFilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/base-api.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/base-api.service.ts ***!
  \*****************************************************/
/*! exports provided: BaseApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseApiService", function() { return BaseApiService; });
/* harmony import */ var _models_api_error_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/api-error.model */ "./src/app/shared/models/api-error.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");




var BaseApiService = /** @class */ (function () {
    function BaseApiService() {
    }
    BaseApiService.prototype.handleError = function (error) {
        console.error('An error occurred:', error);
        var apiError = new _models_api_error_model__WEBPACK_IMPORTED_MODULE_0__["ApiError"]();
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('Client error:', error.error.message);
            apiError.message = 'Something bad happened; please try again later.';
            apiError.status = 500;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + JSON.stringify(error.error)));
            apiError.message = error.error.message;
            apiError.errors = error.error.errors;
            apiError.status = error.status;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(apiError);
    };
    BaseApiService.BASE_API = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApi;
    BaseApiService.defaultOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json'),
        withCredentials: true
    };
    return BaseApiService;
}());



/***/ }),

/***/ "./src/app/shared/services/map.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/map.service.ts ***!
  \************************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _models_coordinates_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/coordinates.model */ "./src/app/shared/models/coordinates.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/// <reference types="@types/googlemaps" />
var MapService = /** @class */ (function () {
    function MapService(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.origin = new _models_coordinates_model__WEBPACK_IMPORTED_MODULE_0__["Coordinates"]();
        this.destination = new _models_coordinates_model__WEBPACK_IMPORTED_MODULE_0__["Coordinates"]();
        this.locationCoordinates = new _models_coordinates_model__WEBPACK_IMPORTED_MODULE_0__["Coordinates"]();
    }
    MapService_1 = MapService;
    MapService.prototype.autoCompleteCityOrigin = function (searchElement) {
        var _this = this;
        this.mapsAPILoader.load()
            .then(function () {
            var autocomplete = new google.maps.places.Autocomplete(searchElement.nativeElement, { types: ['(cities)'] });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    _this.origin.lat = place.geometry.location.lat();
                    _this.origin.lng = place.geometry.location.lng();
                    _this.saveCoordinates(MapService_1.ORIGIN_KEY, _this.origin);
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    };
    MapService.prototype.autoCompleteCityDestination = function (searchElement) {
        var _this = this;
        this.mapsAPILoader.load()
            .then(function () {
            var autocomplete = new google.maps.places.Autocomplete(searchElement.nativeElement, { types: ['(cities)'] });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    _this.destination.lat = place.geometry.location.lat();
                    _this.destination.lng = place.geometry.location.lng();
                    _this.saveCoordinates(MapService_1.DESTINATION_KEY, _this.destination);
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    };
    MapService.prototype.autoCompleteAddress = function (searchElement) {
        var _this = this;
        this.mapsAPILoader.load()
            .then(function () {
            var autocomplete = new google.maps.places.Autocomplete(searchElement.nativeElement);
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    _this.locationCoordinates.lat = place.geometry.location.lat();
                    _this.locationCoordinates.lng = place.geometry.location.lng();
                    _this.saveCoordinates(MapService_1.DESTINATION_KEY, _this.destination);
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    };
    MapService.prototype.saveCoordinates = function (pointKey, pointValue) {
        localStorage.setItem(pointKey, JSON.stringify(pointValue));
    };
    MapService.prototype.getOrigin = function () {
        return JSON.parse(localStorage.getItem(MapService_1.ORIGIN_KEY));
    };
    MapService.prototype.getDestination = function () {
        return JSON.parse(localStorage.getItem(MapService_1.DESTINATION_KEY));
    };
    var MapService_1;
    MapService.ORIGIN_KEY = 'origin';
    MapService.DESTINATION_KEY = 'destination';
    MapService = MapService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/shared/services/poi.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/poi.service.ts ***!
  \************************************************/
/*! exports provided: PoiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoiService", function() { return PoiService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_poi_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/poi.model */ "./src/app/shared/models/poi.model.ts");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-api.service */ "./src/app/shared/services/base-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PoiService = /** @class */ (function (_super) {
    __extends(PoiService, _super);
    function PoiService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.pois = [];
        return _this;
    }
    PoiService_1 = PoiService;
    PoiService.prototype.list = function () {
        var _this = this;
        return this.http.get(PoiService_1.POI_API + "/list", _base_api_service__WEBPACK_IMPORTED_MODULE_3__["BaseApiService"].defaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (pois) {
            pois = pois.map(function (poi) { return Object.assign(new _models_poi_model__WEBPACK_IMPORTED_MODULE_2__["Poi"](), poi); });
            _this.pois = pois;
            return pois;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    };
    PoiService.prototype.get = function (poiId) {
        return this.http.get(PoiService_1.POI_API + "/" + poiId, _base_api_service__WEBPACK_IMPORTED_MODULE_3__["BaseApiService"].defaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (poi) {
            poi = Object.assign(new _models_poi_model__WEBPACK_IMPORTED_MODULE_2__["Poi"](), poi);
            return poi;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    };
    PoiService.prototype.create = function (poi) {
        var _this = this;
        return this.http.post(PoiService_1.POI_API, poi.asFormData(), { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (poi) {
            poi = Object.assign(new _models_poi_model__WEBPACK_IMPORTED_MODULE_2__["Poi"](), poi);
            _this.pois.push(poi);
            return poi;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    };
    var PoiService_1;
    PoiService.POI_API = _base_api_service__WEBPACK_IMPORTED_MODULE_3__["BaseApiService"].BASE_API + "/pois";
    PoiService = PoiService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PoiService);
    return PoiService;
}(_base_api_service__WEBPACK_IMPORTED_MODULE_3__["BaseApiService"]));



/***/ }),

/***/ "./src/app/shared/services/review.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/review.service.ts ***!
  \***************************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_review_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/review.model */ "./src/app/shared/models/review.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-api.service */ "./src/app/shared/services/base-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReviewService = /** @class */ (function (_super) {
    __extends(ReviewService, _super);
    function ReviewService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.reviews = [];
        _this.reviewsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        return _this;
    }
    ReviewService_1 = ReviewService;
    ReviewService.prototype.create = function (review, poiId) {
        var _this = this;
        return this.http.post(ReviewService_1.REVIEW_API + "/" + poiId, review, _base_api_service__WEBPACK_IMPORTED_MODULE_4__["BaseApiService"].defaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (review) {
            Object.assign(new _models_review_model__WEBPACK_IMPORTED_MODULE_2__["Review"](), review);
            _this.reviews.push(review);
            _this.notifyReviewChanges();
            return review;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    };
    ReviewService.prototype.list = function (poiId) {
        var _this = this;
        return this.http.get(ReviewService_1.REVIEW_API + "/" + poiId + "/list", _base_api_service__WEBPACK_IMPORTED_MODULE_4__["BaseApiService"].defaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (reviews) {
            reviews = reviews.map(function (review) { return Object.assign(new _models_review_model__WEBPACK_IMPORTED_MODULE_2__["Review"](), review); });
            _this.reviews = reviews;
            _this.reviewsNumber = _this.reviews.length;
            _this.notifyReviewChanges();
            return reviews;
        }));
    };
    ReviewService.prototype.onReviewChanges = function () {
        return this.reviewsSubject.asObservable();
    };
    ReviewService.prototype.notifyReviewChanges = function () {
        this.reviewsSubject.next(this.reviews);
    };
    ReviewService.prototype.reviewNumber = function () {
        return this.reviews.length;
    };
    var ReviewService_1;
    ReviewService.REVIEW_API = _base_api_service__WEBPACK_IMPORTED_MODULE_4__["BaseApiService"].BASE_API + "/reviews";
    ReviewService = ReviewService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ReviewService);
    return ReviewService;
}(_base_api_service__WEBPACK_IMPORTED_MODULE_4__["BaseApiService"]));



/***/ }),

/***/ "./src/app/shared/services/session.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/session.service.ts ***!
  \****************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-api.service */ "./src/app/shared/services/base-api.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SessionService = /** @class */ (function (_super) {
    __extends(SessionService, _super);
    function SessionService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.user = null;
        _this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        var userData = localStorage.getItem(SessionService_1.CURRENT_USER_KEY);
        if (userData) {
            _this.user = Object.assign(new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](), JSON.parse(userData));
        }
        _this.notifyUserChanges();
        return _this;
    }
    SessionService_1 = SessionService;
    SessionService.prototype.authenticate = function (user) {
        var _this = this;
        return this.http.post(SessionService_1.SESSIONS_API, user, _base_api_service__WEBPACK_IMPORTED_MODULE_0__["BaseApiService"].defaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            _this.doAuthenticate(user);
            return user;
        }));
    };
    SessionService.prototype.isAuthenticated = function () {
        return this.user ? true : false;
    };
    SessionService.prototype.logout = function () {
        var _this = this;
        return this.http.delete(SessionService_1.SESSIONS_API, _base_api_service__WEBPACK_IMPORTED_MODULE_0__["BaseApiService"].defaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return _this.doLogout(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    SessionService.prototype.doAuthenticate = function (user) {
        this.user = user;
        localStorage.setItem(SessionService_1.CURRENT_USER_KEY, JSON.stringify(this.user));
        this.notifyUserChanges();
    };
    SessionService.prototype.getItemLocalStorage = function () {
        return JSON.parse(localStorage.getItem(SessionService_1.CURRENT_USER_KEY));
    };
    SessionService.prototype.onUserChanges = function () {
        return this.userSubject.asObservable();
    };
    SessionService.prototype.notifyUserChanges = function () {
        this.userSubject.next(this.user);
    };
    SessionService.prototype.doLogout = function () {
        this.user = null;
        localStorage.removeItem(SessionService_1.CURRENT_USER_KEY);
        this.notifyUserChanges();
    };
    var SessionService_1;
    SessionService.SESSIONS_API = _base_api_service__WEBPACK_IMPORTED_MODULE_0__["BaseApiService"].BASE_API + "/sessions";
    SessionService.CURRENT_USER_KEY = 'current-user';
    SessionService = SessionService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SessionService);
    return SessionService;
}(_base_api_service__WEBPACK_IMPORTED_MODULE_0__["BaseApiService"]));



/***/ }),

/***/ "./src/app/shared/services/trip.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/trip.service.ts ***!
  \*************************************************/
/*! exports provided: TripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripService", function() { return TripService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-api.service */ "./src/app/shared/services/base-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_trip_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/trip.model */ "./src/app/shared/models/trip.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TripService = /** @class */ (function (_super) {
    __extends(TripService, _super);
    function TripService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.trips = [];
        return _this;
    }
    TripService_1 = TripService;
    TripService.prototype.create = function (trip) {
        return this.http.post(TripService_1.TRIP_API, trip, _base_api_service__WEBPACK_IMPORTED_MODULE_2__["BaseApiService"].defaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (trip) { return Object.assign(new _models_trip_model__WEBPACK_IMPORTED_MODULE_4__["Trip"](), trip); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    };
    TripService.prototype.get = function (tripId) {
        return this.http.get(TripService_1.TRIP_API + "/" + tripId, _base_api_service__WEBPACK_IMPORTED_MODULE_2__["BaseApiService"].defaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (trip) { return Object.assign(new _models_trip_model__WEBPACK_IMPORTED_MODULE_4__["Trip"](), trip); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    };
    TripService.prototype.list = function () {
        var _this = this;
        return this.http.get(TripService_1.TRIP_API + "/list", _base_api_service__WEBPACK_IMPORTED_MODULE_2__["BaseApiService"].defaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (trips) {
            trips = trips.map(function (trip) { return Object.assign(new _models_trip_model__WEBPACK_IMPORTED_MODULE_4__["Trip"](), trip); });
            _this.trips = trips;
            return trips;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    };
    var TripService_1;
    TripService.TRIP_API = _base_api_service__WEBPACK_IMPORTED_MODULE_2__["BaseApiService"].BASE_API + "/trips";
    TripService = TripService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TripService);
    return TripService;
}(_base_api_service__WEBPACK_IMPORTED_MODULE_2__["BaseApiService"]));



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _models_poi_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/poi.model */ "./src/app/shared/models/poi.model.ts");
/* harmony import */ var _models_trip_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/trip.model */ "./src/app/shared/models/trip.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-api.service */ "./src/app/shared/services/base-api.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.user = null;
        return _this;
    }
    UserService_1 = UserService;
    UserService.prototype.getUserInfo = function (userId) {
        var _this = this;
        return this.http.get(UserService_1.USER_API + "/" + userId, _base_api_service__WEBPACK_IMPORTED_MODULE_3__["BaseApiService"].defaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userInfo) {
            _this.user = userInfo.user;
            _this.userPois = userInfo.pois.map(function (poi) { return Object.assign(new _models_poi_model__WEBPACK_IMPORTED_MODULE_0__["Poi"](), poi); });
            _this.userTrips = userInfo.trips.map(function (trip) { return Object.assign(new _models_trip_model__WEBPACK_IMPORTED_MODULE_1__["Trip"](), trip); });
            return userInfo;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserService.prototype.create = function (user) {
        var _this = this;
        return this.http.post(UserService_1.USER_API, user, _base_api_service__WEBPACK_IMPORTED_MODULE_3__["BaseApiService"].defaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            Object.assign(new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](), user);
            return _this.user = user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserService.prototype.detail = function (userId) {
        return this.http.get(UserService_1.USER_API + "/" + userId, _base_api_service__WEBPACK_IMPORTED_MODULE_3__["BaseApiService"].defaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) { return Object.assign(new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](), user); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserService.prototype.edit = function (userId, user) {
        var _this = this;
        return this.http.post(UserService_1.USER_API + "/" + userId, user.asFormData(), { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            Object.assign(new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](), user);
            _this.upDateUser(user);
            return user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserService.prototype.upDateUser = function (user) {
        this.user = user;
        localStorage.setItem(UserService_1.CURRENT_USER_KEY, JSON.stringify(this.user));
    };
    var UserService_1;
    UserService.USER_API = _base_api_service__WEBPACK_IMPORTED_MODULE_3__["BaseApiService"].BASE_API + "/users";
    UserService.CURRENT_USER_KEY = 'current-user';
    UserService = UserService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], UserService);
    return UserService;
}(_base_api_service__WEBPACK_IMPORTED_MODULE_3__["BaseApiService"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseApi: 'http://localhost:3000',
    mapApi: 'AIzaSyAEkL-jlLHB19M2VVbD52QgO2VkeMERovI'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/marta/Documents/Ironhack/Proyecto3/travel-app-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map