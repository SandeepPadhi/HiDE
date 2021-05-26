(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/firepad/dist sync recursive":
/*!****************************************!*\
  !*** ./node_modules/firepad/dist sync ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/firepad/dist sync recursive";

/***/ }),

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _authentication_authguard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/authguard.service */ "./src/app/authentication/authguard.service.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/register/register.component */ "./src/app/authentication/register/register.component.ts");
/* harmony import */ var _authentication_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication/signin/signin.component */ "./src/app/authentication/signin/signin.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _newproject_newproject_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./newproject/newproject.component */ "./src/app/newproject/newproject.component.ts");












var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], pathMatch: 'full' },
    { path: 'signin', component: _authentication_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"] },
    { path: 'register', component: _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [_authentication_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_authentication_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/newproject', component: _newproject_newproject_component__WEBPACK_IMPORTED_MODULE_11__["NewprojectComponent"], canActivate: [_authentication_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard/project/:id', component: _project_project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"], canActivate: [_authentication_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'editor', component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorComponent"], canActivate: [_authentication_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#appNotify{\r\n  position: absolute;\r\n  top:-15%;\r\n  width: 40%;\r\n  height:15%;\r\n  left:30%;\r\n  z-index: 19;\r\n}\r\n#appLoading{\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  width: 100%;\r\n  height:100%;\r\n  z-index: 0;\r\n}\r\n#appHeader{\r\n  position: absolute;\r\n  top:-15%;\r\n  left:0;\r\n  width:100%;\r\n  height:15%;\r\n  z-index: 10;\r\n}\r\n#home{\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n#backgroundContainer{\r\n  position: absolute;\r\n  opacity: .5;\r\n  width:100%;\r\n  height:100%;\r\n  top:0;\r\n  left:0;\r\n  background-image: url('background.jpg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  -webkit-filter: blur(6px);\r\n          filter: blur(6px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixVQUFVO0VBQ1YsUUFBUTtFQUNSLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLEtBQUs7RUFDTCxNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtFQUNOLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsS0FBSztFQUNMLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsS0FBSztFQUNMLE1BQU07RUFDTix1Q0FBd0Q7RUFDeEQsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIseUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FwcE5vdGlmeXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOi0xNSU7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6MTUlO1xyXG4gIGxlZnQ6MzAlO1xyXG4gIHotaW5kZXg6IDE5O1xyXG59XHJcbiNhcHBMb2FkaW5ne1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG4jYXBwSGVhZGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6LTE1JTtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTUlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbiNob21le1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiNiYWNrZ3JvdW5kQ29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAuNTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgZmlsdGVyOiBibHVyKDZweCk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"backgroundContainer\"></div>\n<app-notify id=\"appNotify\"></app-notify>\n<app-loading [ngStyle]=\"{'z-index': (this.loadingStatus) ? 20 : 0 }\" id=\"appLoading\"></app-loading>\n<app-header id=\"appHeader\"></app-header>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(loadingService, router, commonService) {
        var _this = this;
        this.loadingService = loadingService;
        this.router = router;
        this.commonService = commonService;
        this.loadingStatus = false;
        console.log('AppComponent: constructor');
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url === '/') {
                    _this.commonService.headerVisibility(true, false, false);
                }
                else if (event.url.includes('/dashboard')) {
                    _this.commonService.headerVisibility(false, true, true);
                }
                else if (event.url === '/profile') {
                    _this.commonService.headerVisibility(true, false, false);
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingService.loadingStatus$.subscribe(function (status) {
            if (status.includes('show') || status.includes('change')) {
                // we have to do this due to strange Error-Expressionchangedafterithasbeenchecked
                setTimeout(function () {
                    _this.loadingStatus = true;
                });
            }
            else {
                setTimeout(function () {
                    _this.loadingStatus = false;
                });
            }
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");
/* harmony import */ var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify.service */ "./src/app/notify.service.ts");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _editor_editor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor/editor.service */ "./src/app/editor/editor.service.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _newproject_newproject_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./newproject/newproject.service */ "./src/app/newproject/newproject.service.ts");
/* harmony import */ var _header_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/notification.service */ "./src/app/header/notification.service.ts");
/* harmony import */ var _peer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./peer.service */ "./src/app/peer.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/footer/footer.component */ "./src/app/home/footer/footer.component.ts");
/* harmony import */ var _home_intro_intro_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/intro/intro.component */ "./src/app/home/intro/intro.component.ts");
/* harmony import */ var _authentication_signin_signin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./authentication/signin/signin.component */ "./src/app/authentication/signin/signin.component.ts");
/* harmony import */ var _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./authentication/register/register.component */ "./src/app/authentication/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");
/* harmony import */ var _notify_notify_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./notify/notify.component */ "./src/app/notify/notify.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _authentication_authguard_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./authentication/authguard.service */ "./src/app/authentication/authguard.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _dashboard_projectlist_projectlist_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dashboard/projectlist/projectlist.component */ "./src/app/dashboard/projectlist/projectlist.component.ts");
/* harmony import */ var _dashboard_projectlist_projectitem_projectitem_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dashboard/projectlist/projectitem/projectitem.component */ "./src/app/dashboard/projectlist/projectitem/projectitem.component.ts");
/* harmony import */ var _dashboard_stats_stats_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dashboard/stats/stats.component */ "./src/app/dashboard/stats/stats.component.ts");
/* harmony import */ var _dashboard_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dashboard/navigation/navigation.component */ "./src/app/dashboard/navigation/navigation.component.ts");
/* harmony import */ var _dashboard_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./dashboard/announcements/announcements.component */ "./src/app/dashboard/announcements/announcements.component.ts");
/* harmony import */ var _dashboard_announcements_announceitem_announceitem_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./dashboard/announcements/announceitem/announceitem.component */ "./src/app/dashboard/announcements/announceitem/announceitem.component.ts");
/* harmony import */ var _newproject_newproject_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./newproject/newproject.component */ "./src/app/newproject/newproject.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _editproject_editproject_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./editproject/editproject.component */ "./src/app/editproject/editproject.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _editor_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./editor/explorer/explorer.component */ "./src/app/editor/explorer/explorer.component.ts");
/* harmony import */ var _editor_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./editor/toolbar/toolbar.component */ "./src/app/editor/toolbar/toolbar.component.ts");
/* harmony import */ var _editor_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./editor/tabs/tabs.component */ "./src/app/editor/tabs/tabs.component.ts");
/* harmony import */ var _editor_tabs_texteditor_texteditor_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./editor/tabs/texteditor/texteditor.component */ "./src/app/editor/tabs/texteditor/texteditor.component.ts");
/* harmony import */ var _editor_tabs_nodeeditor_nodeeditor_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./editor/tabs/nodeeditor/nodeeditor.component */ "./src/app/editor/tabs/nodeeditor/nodeeditor.component.ts");
/* harmony import */ var _editor_console_console_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./editor/console/console.component */ "./src/app/editor/console/console.component.ts");
/* harmony import */ var _editor_textcomms_textcomms_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./editor/textcomms/textcomms.component */ "./src/app/editor/textcomms/textcomms.component.ts");
/* harmony import */ var _editor_sidepanel_sidepanel_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./editor/sidepanel/sidepanel.component */ "./src/app/editor/sidepanel/sidepanel.component.ts");
/* harmony import */ var _editor_statusbar_statusbar_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./editor/statusbar/statusbar.component */ "./src/app/editor/statusbar/statusbar.component.ts");
/* harmony import */ var _editor_explorer_tree_view_tree_view_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./editor/explorer/tree-view/tree-view.component */ "./src/app/editor/explorer/tree-view/tree-view.component.ts");


















// import { CodemirrorModule } from '@ctrl/ngx-codemirror';
// import { AceEditorModule } from 'ng2-ace-editor';

































var AppModule = /** @class */ (function () {
    function AppModule() {
        firebase__WEBPACK_IMPORTED_MODULE_30__["initializeApp"]({
            apiKey: 'AIzaSyDQP5Kougkw0LSqFkLKZ3PCkL8pSp48Abg',
            authDomain: 'hide-9d4ce.firebaseapp.com',
            databaseURL: 'https://hide-9d4ce.firebaseio.com',
            projectId: 'hide-9d4ce',
            storageBucket: 'hide-9d4ce.appspot.com'
        });
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
                _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
                _home_intro_intro_component__WEBPACK_IMPORTED_MODULE_21__["IntroComponent"],
                _authentication_signin_signin_component__WEBPACK_IMPORTED_MODULE_22__["SigninComponent"],
                _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_25__["LoadingComponent"],
                _notify_notify_component__WEBPACK_IMPORTED_MODULE_26__["NotifyComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["DashboardComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_28__["ProfileComponent"],
                _dashboard_projectlist_projectlist_component__WEBPACK_IMPORTED_MODULE_31__["ProjectlistComponent"],
                _dashboard_projectlist_projectitem_projectitem_component__WEBPACK_IMPORTED_MODULE_32__["ProjectitemComponent"],
                _dashboard_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_35__["AnnouncementsComponent"],
                _dashboard_stats_stats_component__WEBPACK_IMPORTED_MODULE_33__["StatsComponent"],
                _dashboard_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_34__["NavigationComponent"],
                _dashboard_announcements_announceitem_announceitem_component__WEBPACK_IMPORTED_MODULE_36__["AnnounceItemComponent"],
                _newproject_newproject_component__WEBPACK_IMPORTED_MODULE_37__["NewprojectComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_38__["ProjectComponent"],
                _editproject_editproject_component__WEBPACK_IMPORTED_MODULE_39__["EditprojectComponent"],
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_40__["EditorComponent"],
                _editor_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_41__["ExplorerComponent"],
                _editor_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_42__["ToolbarComponent"],
                _editor_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_43__["TabsComponent"],
                _editor_tabs_texteditor_texteditor_component__WEBPACK_IMPORTED_MODULE_44__["TexteditorComponent"],
                _editor_tabs_nodeeditor_nodeeditor_component__WEBPACK_IMPORTED_MODULE_45__["NodeeditorComponent"],
                _editor_console_console_component__WEBPACK_IMPORTED_MODULE_46__["ConsoleComponent"],
                _editor_textcomms_textcomms_component__WEBPACK_IMPORTED_MODULE_47__["TextcommsComponent"],
                _editor_sidepanel_sidepanel_component__WEBPACK_IMPORTED_MODULE_48__["SidepanelComponent"],
                _editor_statusbar_statusbar_component__WEBPACK_IMPORTED_MODULE_49__["StatusbarComponent"],
                _editor_explorer_tree_view_tree_view_component__WEBPACK_IMPORTED_MODULE_50__["TreeViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            ],
            providers: [
                _common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
                _authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
                _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
                _notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"],
                _authentication_authguard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuard"],
                _profile_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"],
                _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"],
                _newproject_newproject_service__WEBPACK_IMPORTED_MODULE_8__["NewprojectService"],
                _header_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"],
                _editor_editor_service__WEBPACK_IMPORTED_MODULE_5__["EditorService"],
                _peer_service__WEBPACK_IMPORTED_MODULE_10__["PeerService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/authentication/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(router) {
        var _this = this;
        this.router = router;
        this.registrationStatus = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.registrationStatus$ = this.registrationStatus.asObservable();
        this.signinStatus = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.signinStatus$ = this.signinStatus.asObservable();
        this.authStatus = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.authStatus$ = this.authStatus.asObservable();
        this.currentUsernameStatus = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.currentUsernameStatus$ = this.currentUsernameStatus.asObservable();
        console.log('AuthService: constructor');
        this.db = firebase__WEBPACK_IMPORTED_MODULE_3__["database"]();
        this.usersTable = this.db.ref().child('users');
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().onAuthStateChanged(function (authData) {
            console.log('AuthService: onAuthStateChanged');
            if (authData && authData.emailVerified) {
                console.log('AuthService: Already logged in');
                _this.currentUser = authData;
                console.log('AuthService: Querying Token');
                _this.currentUser.getIdToken()
                    .then(function (token) {
                    console.log('AuthService: got token');
                    _this.accessToken = token;
                    console.log('AuthService: published true');
                    _this.authStatus.next(true);
                })
                    .catch(function (error) {
                    console.log(error);
                    _this.authStatus.next(false);
                });
                console.log('AuthService: Querying Username');
                _this.db.ref('users').on('value', function (snapshot) {
                    console.log('AuthService: got username');
                    _this.currentUsername = Object.keys(snapshot.val()).find(function (key) { return snapshot.val()[key] === _this.currentUser.email; });
                    _this.currentUsernameStatus.next(_this.currentUsername);
                });
            }
            else {
                _this.authStatus.next(false);
            }
        });
    }
    AuthService.prototype.registerUser = function (username, email, password) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(email, password)
            .then(function (userCredential) {
            var _a;
            _this.usersTable.update((_a = {}, _a[username] = email, _a))
                .then(function (response) {
                firebase__WEBPACK_IMPORTED_MODULE_3__["database"]().ref('userdata/' + userCredential.user.uid)
                    .set({
                    description: 'No Description',
                    username: username
                })
                    .then(function () {
                    var _a;
                    firebase__WEBPACK_IMPORTED_MODULE_3__["database"]().ref('uids').update((_a = {}, _a[username] = userCredential.user.uid, _a));
                });
            })
                .catch(function (error) {
                console.log(error);
            });
            console.log(userCredential.user.uid);
            // send verification mail
            _this.currentUser = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
            _this.currentUser.sendEmailVerification().then(function () {
                // Email sent
                console.log('mail sent');
                // inform register component that mail has sent
                _this.registrationStatus.next('true');
            })
                .catch(function (error) {
                // cannot send verification mail
                _this.registrationStatus.next('false-Cannot send verification mail');
                console.log(error);
            });
        })
            .catch(function (error) {
            // cannot sign up new user
            _this.registrationStatus.next('false-Cannot signup new user');
            console.log(error);
        });
    };
    AuthService.prototype.signinUser = function (username, password) {
        var _this = this;
        // check username in users structure
        this.db.ref('users').child(username).once('value', function (snapshot) {
            var email = snapshot.val();
            if (email != null) {
                // check if user is verified
                firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(email, password)
                    .then(function (response) {
                    if (response) {
                        if (firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.emailVerified) {
                            _this.currentUser = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
                            firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.getIdToken()
                                .then(function (token) {
                                _this.accessToken = token;
                            });
                            _this.db.ref('users').on('value', function (snap) {
                                _this.currentUsername = Object.keys(snap.val()).find(function (key) { return snap.val()[key] === _this.currentUser.email; });
                            });
                            // redirect to dashboard
                            firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().setPersistence('local');
                            _this.router.navigate(['/dashboard']);
                        }
                        else {
                            _this.signinStatus.next('Email not verified, Check your mail for verification');
                            _this.currentUser = null;
                            _this.accessToken = null;
                        }
                    }
                })
                    .catch(function (error) {
                    _this.signinStatus.next('Username or Password Incorrect');
                    console.log(error);
                });
            }
            else {
                // user doesn't exist
                _this.signinStatus.next('User Doesn\'t Exist');
            }
        });
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        this.currentUser.getIdToken()
            .then(function (token) {
            _this.accessToken = token;
        })
            .catch(function (error) {
            console.log(error);
        });
        return this.accessToken;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.accessToken != null;
    };
    AuthService.prototype.logout = function () {
        console.log('AuthService: logout');
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signOut();
        this.accessToken = null;
        this.currentUser = null;
        this.router.navigate(['/']);
        this.currentUsername = null;
        console.log('AuthService: cleared all variables');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/authentication/authguard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/authentication/authguard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../notify.service */ "./src/app/notify.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService, notifyService) {
        this.router = router;
        this.authService = authService;
        this.notifyService = notifyService;
        this.visitedFlag = false;
        console.log('AuthGuard: constructor');
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        console.log('AuthGuard: canActivate called');
        if (!this.authService.isAuthenticated()) {
            console.log('AuthGuard: not already authenticated');
            if (this.visitedFlag && this.authService.isAuthenticated()) {
                console.log('AuthGuard: visitedFlag is true, allowing');
                return true;
            }
            return this.authService.authStatus$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (status) {
                console.log('AuthGuard: event from AuthService');
                if (status) {
                    _this.visitedFlag = true;
                    console.log('AuthGuard: authenticated');
                    return true;
                }
                console.log('AuthGuard: not authenticated');
                _this.notifyService.notify('Please log in first');
                _this.router.navigate(['/signin']);
            }));
        }
        else {
            console.log('AuthGuard: already authenticated');
            return true;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _notify_service__WEBPACK_IMPORTED_MODULE_1__["NotifyService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/authentication/register/register.component.css":
/*!****************************************************************!*\
  !*** ./src/app/authentication/register/register.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#registerFormContainer{\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: row;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height:70%;\r\n  top:15%;\r\n  left:0;\r\n}\r\n#registerForm{\r\n  display: flex;\r\n  height: 100%;\r\n  width: 30%;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n#formTitle{\r\n  font-size: 2em;\r\n  margin-bottom: 5vh;\r\n}\r\n.registerFormField{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width:100%;\r\n  padding-bottom: 1vh;\r\n}\r\n.formFieldText{\r\n  padding-top:1vh;\r\n  padding-bottom: 1vh;\r\n  padding-left:10%;\r\n  width: 100%;\r\n  text-align: left;\r\n  font-family: 'Azonix';\r\n  font-size: .8em;\r\n  color: #2f2f2f;\r\n}\r\n.textField{\r\n  width: 80%;\r\n  padding-top:1vh;\r\n  padding-bottom:1vh;\r\n  padding-left: 3vh;\r\n  padding-right: 3vh;\r\n  border-radius: 999px;\r\n  border: none;\r\n  text-align: left;\r\n  font-size: 1.3em;\r\n  border: 1px solid #000;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  transition: box-shadow .1s linear, -webkit-transform .1s linear;\r\n  transition: transform .1s linear, box-shadow .1s linear;\r\n  transition: transform .1s linear, box-shadow .1s linear, -webkit-transform .1s linear;\r\n}\r\n.textField:focus{\r\n  outline: none;\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  box-shadow: 0 0 10px .5px;\r\n}\r\n#registerSubmitContainer{\r\n  width: 100%;\r\n  padding-top:2vh;\r\n  padding-bottom: 2vh;\r\n}\r\n#registerSubmit{\r\n  padding-left: 4vh;\r\n  padding-right: 4vh;\r\n  padding-top: 1.5vh;\r\n  padding-bottom: 1.5vh;\r\n  font-family: 'Azonix';\r\n  background-color: rgba(0, 0, 0, 0);\r\n  border: 1px solid #000;\r\n  cursor: pointer;\r\n  transition: box-shadow .2s linear, -webkit-transform .2s linear;\r\n  transition: transform .2s linear, box-shadow .2s linear;\r\n  transition: transform .2s linear, box-shadow .2s linear, -webkit-transform .2s linear;\r\n}\r\n#registerSubmit:focus{\r\n  outline: none;\r\n  -webkit-transform:scale(1.1);\r\n          transform:scale(1.1);\r\n  box-shadow: 0 0 10px .5px;\r\n}\r\n#registerSubmit:hover{\r\n  -webkit-transform:scale(1.1);\r\n          transform:scale(1.1);\r\n  box-shadow: 0 0 10px .5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0VBQ1YsT0FBTztFQUNQLE1BQU07QUFDUjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsK0RBQXVEO0VBQXZELHVEQUF1RDtFQUF2RCxxRkFBdUQ7QUFDekQ7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsK0RBQXVEO0VBQXZELHVEQUF1RDtFQUF2RCxxRkFBdUQ7QUFDekQ7QUFDQTtFQUNFLGFBQWE7RUFDYiw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlZ2lzdGVyRm9ybUNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDo3MCU7XHJcbiAgdG9wOjE1JTtcclxuICBsZWZ0OjA7XHJcbn1cclxuI3JlZ2lzdGVyRm9ybXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMzAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI2Zvcm1UaXRsZXtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbn1cclxuLnJlZ2lzdGVyRm9ybUZpZWxke1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcclxufVxyXG4uZm9ybUZpZWxkVGV4dHtcclxuICBwYWRkaW5nLXRvcDoxdmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcclxuICBwYWRkaW5nLWxlZnQ6MTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdBem9uaXgnO1xyXG4gIGZvbnQtc2l6ZTogLjhlbTtcclxuICBjb2xvcjogIzJmMmYyZjtcclxufVxyXG4udGV4dEZpZWxke1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcGFkZGluZy10b3A6MXZoO1xyXG4gIHBhZGRpbmctYm90dG9tOjF2aDtcclxuICBwYWRkaW5nLWxlZnQ6IDN2aDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzdmg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBsaW5lYXIsIGJveC1zaGFkb3cgLjFzIGxpbmVhcjtcclxufVxyXG4udGV4dEZpZWxkOmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IC41cHg7XHJcbn1cclxuI3JlZ2lzdGVyU3VibWl0Q29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOjJ2aDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnZoO1xyXG59XHJcbiNyZWdpc3RlclN1Ym1pdHtcclxuICBwYWRkaW5nLWxlZnQ6IDR2aDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0dmg7XHJcbiAgcGFkZGluZy10b3A6IDEuNXZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjV2aDtcclxuICBmb250LWZhbWlseTogJ0F6b25peCc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGxpbmVhciwgYm94LXNoYWRvdyAuMnMgbGluZWFyO1xyXG59XHJcbiNyZWdpc3RlclN1Ym1pdDpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zZm9ybTpzY2FsZSgxLjEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IC41cHg7XHJcbn1cclxuI3JlZ2lzdGVyU3VibWl0OmhvdmVye1xyXG4gIHRyYW5zZm9ybTpzY2FsZSgxLjEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IC41cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/authentication/register/register.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/register/register.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"registerFormContainer\">\r\n<form id=\"registerForm\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" >\r\n  <div class=\"registerFormField\">\r\n      <div id=\"formTitle\" class=\"formFieldText\">Register</div>\r\n  </div>\r\n  <div class=\"registerFormField\">\r\n    <div class=\"formFieldText\">Username (alphanumeric)</div>\r\n    <input id=\"username\" name=\"username\" class=\"textField\" type=\"text\" ngModel/>\r\n  </div>\r\n  <div class=\"registerFormField\">\r\n    <div class=\"formFieldText\">E-mail</div>\r\n    <input id=\"email\" name=\"email\" class=\"textField\" type=\"email\" ngModel/>\r\n  </div>\r\n  <div class=\"registerFormField\">\r\n    <div class=\"formFieldText\">Password (alphanumeric with special symbols)</div>\r\n    <input id=\"password\" name=\"password\" class=\"textField\" type=\"password\" ngModel/>\r\n  </div>\r\n  <div class=\"registerFormField\">\r\n    <div class=\"formFieldText\">Verify Password</div>\r\n    <input id=\"repassword\" name=\"repassword\" class=\"textField\" type=\"password\" ngModel/>\r\n  </div>\r\n  <div id=\"registerSubmitContainer\">\r\n    <input id=\"registerSubmit\" type=\"submit\" [disabled]=\"!f.valid\" value=\"Sign Up\">\r\n  </div>\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/authentication/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/authentication/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notify.service */ "./src/app/notify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, loadingService, notifyService, router) {
        this.authService = authService;
        this.loadingService = loadingService;
        this.notifyService = notifyService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var username = form.value.username;
        var email = form.value.email;
        var password = form.value.password;
        this.authService.registerUser(username, email, password);
        this.loadingService.showLoadingWithMessage('Signing Up User ...');
        this.authService.registrationStatus$.subscribe(function (message) {
            _this.loadingService.removeLoading();
            if (message.includes('true')) {
                _this.notifyService.notify('Verification mail sent');
            }
            else {
                _this.notifyService.notify('Error ! Cannot Proceed');
            }
            _this.router.navigate(['/signin']);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/authentication/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/authentication/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"],
            _notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/authentication/signin/signin.component.css":
/*!************************************************************!*\
  !*** ./src/app/authentication/signin/signin.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#signinFormContainer{\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: row;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height:70%;\r\n  top:15%;\r\n  left:0;\r\n}\r\n#signinForm{\r\n  display: flex;\r\n  height: 100%;\r\n  width: 30%;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n#formTitle{\r\n  font-size: 2em;\r\n  margin-bottom: 5vh;\r\n}\r\n#registerLink{\r\n  font-family: 'Azonix';\r\n  font-size: .7em;\r\n  cursor: pointer;\r\n  margin-top: 3vh;\r\n  transition: text-shadow .1s linear, -webkit-transform .1s linear;\r\n  transition: transform .1s linear, text-shadow .1s linear;\r\n  transition: transform .1s linear, text-shadow .1s linear, -webkit-transform .1s linear;\r\n}\r\n#registerLink:hover{\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  text-shadow: 0 0 2px #000;\r\n}\r\n.signinFormField{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width:100%;\r\n  padding-bottom: 1vh;\r\n}\r\n.formFieldText{\r\n  padding-top:1vh;\r\n  padding-bottom: 1vh;\r\n  padding-left:10%;\r\n  width: 100%;\r\n  text-align: left;\r\n  font-family: 'Azonix';\r\n  font-size: .8em;\r\n  color: #2f2f2f;\r\n}\r\n.textField{\r\n  width: 80%;\r\n  padding-top:1vh;\r\n  padding-bottom:1vh;\r\n  padding-left: 3vh;\r\n  padding-right: 3vh;\r\n  border-radius: 999px;\r\n  border: none;\r\n  text-align: left;\r\n  font-size: 1.3em;\r\n  border: 1px solid #000;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  transition: box-shadow .1s linear, -webkit-transform .1s linear;\r\n  transition: transform .1s linear, box-shadow .1s linear;\r\n  transition: transform .1s linear, box-shadow .1s linear, -webkit-transform .1s linear;\r\n}\r\n.textField:focus{\r\n  outline: none;\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  box-shadow: 0 0 10px .5px;\r\n}\r\n#signinSubmitContainer{\r\n  width: 100%;\r\n  padding-top:2vh;\r\n  padding-bottom: 2vh;\r\n}\r\n#signinSubmit{\r\n  padding-left: 4vh;\r\n  padding-right: 4vh;\r\n  padding-top: 1.5vh;\r\n  padding-bottom: 1.5vh;\r\n  font-family: 'Azonix';\r\n  background-color: rgba(0, 0, 0, 0);\r\n  border: 1px solid #000;\r\n  cursor: pointer;\r\n  transition: box-shadow .2s linear, -webkit-transform .2s linear;\r\n  transition: transform .2s linear, box-shadow .2s linear;\r\n  transition: transform .2s linear, box-shadow .2s linear, -webkit-transform .2s linear;\r\n}\r\n#signinSubmit:focus{\r\n  outline: none;\r\n  -webkit-transform:scale(1.1);\r\n          transform:scale(1.1);\r\n  box-shadow: 0 0 10px .5px;\r\n}\r\n#signinSubmit:hover{\r\n  -webkit-transform:scale(1.1);\r\n          transform:scale(1.1);\r\n  box-shadow: 0 0 10px .5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFVBQVU7RUFDVixPQUFPO0VBQ1AsTUFBTTtBQUNSO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGVBQWU7RUFDZixnRUFBd0Q7RUFBeEQsd0RBQXdEO0VBQXhELHNGQUF3RDtBQUMxRDtBQUNBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQywrREFBdUQ7RUFBdkQsdURBQXVEO0VBQXZELHFGQUF1RDtBQUN6RDtBQUNBO0VBQ0UsYUFBYTtFQUNiLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZiwrREFBdUQ7RUFBdkQsdURBQXVEO0VBQXZELHFGQUF1RDtBQUN6RDtBQUNBO0VBQ0UsYUFBYTtFQUNiLDRCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWduaW5Gb3JtQ29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjcwJTtcclxuICB0b3A6MTUlO1xyXG4gIGxlZnQ6MDtcclxufVxyXG4jc2lnbmluRm9ybXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMzAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI2Zvcm1UaXRsZXtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbn1cclxuI3JlZ2lzdGVyTGlua3tcclxuICBmb250LWZhbWlseTogJ0F6b25peCc7XHJcbiAgZm9udC1zaXplOiAuN2VtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBsaW5lYXIsIHRleHQtc2hhZG93IC4xcyBsaW5lYXI7XHJcbn1cclxuI3JlZ2lzdGVyTGluazpob3ZlcntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggIzAwMDtcclxufVxyXG4uc2lnbmluRm9ybUZpZWxke1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcclxufVxyXG4uZm9ybUZpZWxkVGV4dHtcclxuICBwYWRkaW5nLXRvcDoxdmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcclxuICBwYWRkaW5nLWxlZnQ6MTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdBem9uaXgnO1xyXG4gIGZvbnQtc2l6ZTogLjhlbTtcclxuICBjb2xvcjogIzJmMmYyZjtcclxufVxyXG4udGV4dEZpZWxke1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcGFkZGluZy10b3A6MXZoO1xyXG4gIHBhZGRpbmctYm90dG9tOjF2aDtcclxuICBwYWRkaW5nLWxlZnQ6IDN2aDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzdmg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBsaW5lYXIsIGJveC1zaGFkb3cgLjFzIGxpbmVhcjtcclxufVxyXG4udGV4dEZpZWxkOmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IC41cHg7XHJcbn1cclxuI3NpZ25pblN1Ym1pdENvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDoydmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJ2aDtcclxufVxyXG4jc2lnbmluU3VibWl0e1xyXG4gIHBhZGRpbmctbGVmdDogNHZoO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDR2aDtcclxuICBwYWRkaW5nLXRvcDogMS41dmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXZoO1xyXG4gIGZvbnQtZmFtaWx5OiAnQXpvbml4JztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgbGluZWFyLCBib3gtc2hhZG93IC4ycyBsaW5lYXI7XHJcbn1cclxuI3NpZ25pblN1Ym1pdDpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zZm9ybTpzY2FsZSgxLjEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IC41cHg7XHJcbn1cclxuI3NpZ25pblN1Ym1pdDpob3ZlcntcclxuICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAuNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/authentication/signin/signin.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signin/signin.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"signinFormContainer\">\r\n  <form id=\"signinForm\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" >\r\n    <div class=\"signinFormField\">\r\n      <div id=\"formTitle\" class=\"formFieldText\">Sign in</div>\r\n    </div>\r\n    <div class=\"signinFormField\">\r\n      <div class=\"formFieldText\">Username (alphanumeric)</div>\r\n      <input id=\"username\" name=\"username\" class=\"textField\" type=\"text\" ngModel/>\r\n    </div>\r\n    <div class=\"signinFormField\">\r\n      <div class=\"formFieldText\">Password</div>\r\n      <input id=\"password\" name=\"password\" class=\"textField\" type=\"password\" ngModel/>\r\n    </div>\r\n    <div id=\"signinSubmitContainer\">\r\n      <input id=\"signinSubmit\" type=\"submit\" value=\"Sign In\">\r\n    </div>\r\n    <div id=\"registerLink\" (click)=\"dontHaveAccount()\">Don't have an Account ? Register Here</div>\r\n  </form>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/authentication/signin/signin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signin/signin.component.ts ***!
  \***********************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notify.service */ "./src/app/notify.service.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading.service */ "./src/app/loading.service.ts");






var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, router, notifyService, loadingService) {
        this.authService = authService;
        this.router = router;
        this.notifyService = notifyService;
        this.loadingService = loadingService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var username = form.value.username;
        var password = form.value.password;
        this.authService.signinUser(username, password);
        this.loadingService.showLoadingWithMessage('Signing User In ...');
        this.authService.signinStatus$.subscribe(function (message) {
            _this.loadingService.removeLoading();
            _this.notifyService.notify(message);
        });
    };
    SigninComponent.prototype.dontHaveAccount = function () {
        this.router.navigate(['/register']);
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/authentication/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/authentication/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"],
            _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CommonService = /** @class */ (function () {
    function CommonService() {
        this.headerStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.headerStatus$ = this.headerStatus.asObservable();
        this.isHeaderVisible = false;
    }
    CommonService.prototype.headerVisibility = function (action, headerToggle, opacityToggle) {
        this.isHeaderVisible = action;
        this.headerStatus.next([action, headerToggle, opacityToggle]);
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/dashboard/announcements/announceitem.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/announcements/announceitem.model.ts ***!
  \***************************************************************/
/*! exports provided: AnnounceItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnounceItem", function() { return AnnounceItem; });
var AnnounceItem = /** @class */ (function () {
    function AnnounceItem(from, project, message, date, time) {
        this.from = from;
        this.project = project;
        this.message = message;
        this.date = date;
        this.time = time;
    }
    return AnnounceItem;
}());



/***/ }),

/***/ "./src/app/dashboard/announcements/announceitem/announceitem.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/announcements/announceitem/announceitem.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#announceItemContain{\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  text-align: center;\r\n  align-items: center;\r\n  transition: height .1s ease;\r\n}\r\n#announceInfo{\r\n  max-width: 75%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: left;\r\n  align-items: center;\r\n}\r\n#announceProject{\r\n  width:100%;\r\n  height:70%;\r\n  font-family: 'Roboto';\r\n  font-weight: bold;\r\n}\r\n#announceMessage{\r\n  width:100%;\r\n  height: 30%;\r\n  font-family: 'Roboto';\r\n  font-size: .7em;\r\n}\r\n#announceDetail{\r\n  margin-left: 2%;\r\n  height: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: right;\r\n  align-items: center;\r\n}\r\n#announceDatetime{\r\n  width:100%;\r\n  height:50%;\r\n  font-family: 'Roboto';\r\n  font-size: 0.7em;\r\n}\r\n#announceFrom{\r\n  width:100%;\r\n  height: 50%;\r\n  font-family: 'Roboto';\r\n  font-size: 0.7em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Fubm91bmNlbWVudHMvYW5ub3VuY2VpdGVtL2Fubm91bmNlaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Fubm91bmNlbWVudHMvYW5ub3VuY2VpdGVtL2Fubm91bmNlaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Fubm91bmNlSXRlbUNvbnRhaW57XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IC4xcyBlYXNlO1xyXG59XHJcbiNhbm5vdW5jZUluZm97XHJcbiAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4jYW5ub3VuY2VQcm9qZWN0e1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjcwJTtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuI2Fubm91bmNlTWVzc2FnZXtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBmb250LXNpemU6IC43ZW07XHJcbn1cclxuI2Fubm91bmNlRGV0YWlse1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4jYW5ub3VuY2VEYXRldGltZXtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDo1MCU7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuI2Fubm91bmNlRnJvbXtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBmb250LXNpemU6IDAuN2VtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/announcements/announceitem/announceitem.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/announcements/announceitem/announceitem.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onClick()\" id=\"announceItemContain\">\n  <div id=\"announceInfo\">\n    <div id=\"announceProject\">{{ project }}</div>\n    <div #message id=\"announceMessage\"></div>\n  </div>\n  <div id=\"announceDetail\">\n    <div id=\"announceDatetime\">{{ date }}<br/>{{ time }}</div>\n    <div id=\"announceFrom\">{{ from }}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/announcements/announceitem/announceitem.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/announcements/announceitem/announceitem.component.ts ***!
  \********************************************************************************/
/*! exports provided: AnnounceItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnounceItemComponent", function() { return AnnounceItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnnounceItemComponent = /** @class */ (function () {
    function AnnounceItemComponent() {
        this.from = '';
        this.message = '';
        this.date = '';
        this.time = '';
        this.project = '';
        this.isMesHidden = false;
    }
    AnnounceItemComponent.prototype.ngOnInit = function () {
    };
    AnnounceItemComponent.prototype.ngAfterViewInit = function () {
        if (this.message.length > 50) {
            this.viewMessage.nativeElement.innerText = this.message.substr(0, 47).concat('...');
            this.isMesHidden = true;
        }
        else {
            this.viewMessage.nativeElement.innerText = this.message;
        }
    };
    AnnounceItemComponent.prototype.onClick = function () {
        if (this.isMesHidden) {
            this.isMesHidden = false;
            this.viewMessage.nativeElement.innerText = this.message;
        }
        else {
            if (this.message.length > 50) {
                this.viewMessage.nativeElement.innerText = this.message.substr(0, 47).concat('...');
                this.isMesHidden = true;
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AnnounceItemComponent.prototype, "from", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AnnounceItemComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AnnounceItemComponent.prototype, "date", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AnnounceItemComponent.prototype, "time", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AnnounceItemComponent.prototype, "project", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('message'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AnnounceItemComponent.prototype, "viewMessage", void 0);
    AnnounceItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-announceitem',
            template: __webpack_require__(/*! ./announceitem.component.html */ "./src/app/dashboard/announcements/announceitem/announceitem.component.html"),
            styles: [__webpack_require__(/*! ./announceitem.component.css */ "./src/app/dashboard/announcements/announceitem/announceitem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnnounceItemComponent);
    return AnnounceItemComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/announcements/announcements.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/announcements/announcements.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-scrollbar{\r\n  width: 10px;\r\n}\r\n::-webkit-scrollbar-track {\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: rgba(1, 255, 115, 0.719);\r\n  border-radius: 10px;\r\n}\r\n#announceContainer{\r\n  padding-top:5%;\r\n  height: 47.75vh;\r\n  display: flex;\r\n  justify-content: center;;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n#announceScrollContainer{\r\n  width:100%;\r\n  height:100%;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n.announceItemContainer{\r\n  width: 95%;\r\n  padding:2%;\r\n  background-color: #fff;\r\n  border: 1px solid #000;\r\n  cursor: pointer;\r\n}\r\n#noAnnouncements{\r\n  width: 100%;\r\n  font-family: 'Roboto';\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hbm5vdW5jZW1lbnRzL2Fubm91bmNlbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDI1NSwgMTE1LCAwLjcxOSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI2Fubm91bmNlQ29udGFpbmVye1xyXG4gIHBhZGRpbmctdG9wOjUlO1xyXG4gIGhlaWdodDogNDcuNzV2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jYW5ub3VuY2VTY3JvbGxDb250YWluZXJ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFubm91bmNlSXRlbUNvbnRhaW5lcntcclxuICB3aWR0aDogOTUlO1xyXG4gIHBhZGRpbmc6MiU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jbm9Bbm5vdW5jZW1lbnRze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/announcements/announcements.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/announcements/announcements.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"announceContainer\">\n  <div id=\"announceScrollContainer\">\n    <div id=\"noAnnouncements\">No Announcements</div>\n    <app-announceitem\n      class=\"announceItemContainer\"\n      *ngFor=\"let announce of announcements\"\n      [from]=\"announce.from\"\n      [message]=\"announce.message\"\n      [project]=\"announce.project\"\n      [date]=\"announce.date\"\n      [time]=\"announce.time\">\n    </app-announceitem>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/announcements/announcements.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/announcements/announcements.component.ts ***!
  \********************************************************************/
/*! exports provided: AnnouncementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsComponent", function() { return AnnouncementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AnnouncementsComponent = /** @class */ (function () {
    function AnnouncementsComponent(dashboardService, loadingService) {
        this.dashboardService = dashboardService;
        this.loadingService = loadingService;
        this.announcements = [];
    }
    AnnouncementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getAnnouncements$.subscribe(function (announcements) {
            _this.announcements = announcements;
            _this.loadingService.removeLoading();
        });
        this.dashboardService.getNewAnnouncement$.subscribe(function (newannouncement) {
            _this.announcements.push(newannouncement);
        });
        this.dashboardService.getAnnouncement();
        if (this.loadingService.isLoading) {
            this.loadingService.changeMessage('Loading Announcements ...');
        }
        else {
            this.loadingService.showLoadingWithMessage('Loading Announcements ...');
        }
    };
    AnnouncementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-announcements',
            template: __webpack_require__(/*! ./announcements.component.html */ "./src/app/dashboard/announcements/announcements.component.html"),
            styles: [__webpack_require__(/*! ./announcements.component.css */ "./src/app/dashboard/announcements/announcements.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"],
            _loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"]])
    ], AnnouncementsComponent);
    return AnnouncementsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n  box-sizing: border-box;\r\n}\r\n#navigationContainer{\r\n  opacity: .8;\r\n  grid-area: n;\r\n}\r\n#projectlistContainer{\r\n  opacity: .8;\r\n  grid-area: p;\r\n}\r\n#announcementsContainer{\r\n  opacity: .8;\r\n  grid-area: no;\r\n}\r\n#statsContainer{\r\n  opacity: .8;\r\n  grid-area: st;\r\n}\r\n#dashboardContainer{\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  width:100%;\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 6fr 3fr;\r\n  grid-template-rows: 1fr 1fr;\r\n  grid-template-areas:\r\n    'n p no'\r\n    'n p st';\r\n  grid-gap: 1.5vh;\r\n  padding:1.5vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsS0FBSztFQUNMLE1BQU07RUFDTixVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsMkJBQTJCO0VBQzNCOztZQUVVO0VBQ1YsZUFBZTtFQUNmLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4jbmF2aWdhdGlvbkNvbnRhaW5lcntcclxuICBvcGFjaXR5OiAuODtcclxuICBncmlkLWFyZWE6IG47XHJcbn1cclxuI3Byb2plY3RsaXN0Q29udGFpbmVye1xyXG4gIG9wYWNpdHk6IC44O1xyXG4gIGdyaWQtYXJlYTogcDtcclxufVxyXG4jYW5ub3VuY2VtZW50c0NvbnRhaW5lcntcclxuICBvcGFjaXR5OiAuODtcclxuICBncmlkLWFyZWE6IG5vO1xyXG59XHJcbiNzdGF0c0NvbnRhaW5lcntcclxuICBvcGFjaXR5OiAuODtcclxuICBncmlkLWFyZWE6IHN0O1xyXG59XHJcbiNkYXNoYm9hcmRDb250YWluZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAzZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnbiBwIG5vJ1xyXG4gICAgJ24gcCBzdCc7XHJcbiAgZ3JpZC1nYXA6IDEuNXZoO1xyXG4gIHBhZGRpbmc6MS41dmg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboardContainer\">\r\n    <div id=\"navigationContainer\">\r\n      <app-navigation id=\"navigation\"></app-navigation>\r\n    </div>\r\n    <div id=\"projectlistContainer\">\r\n      <app-projectlist id=\"projectlist\"></app-projectlist>\r\n    </div>\r\n    <div id=\"announcementsContainer\">\r\n      <app-announcements id=\"notifications\"></app-announcements>\r\n    </div>\r\n    <div id=\"statsContainer\">\r\n      <app-stats id=\"stats\"></app-stats>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(loadingService, router) {
        this.loadingService = loadingService;
        this.router = router;
        console.log('DashboardComponent: constructor');
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (this.loadingService.isLoading) {
            this.loadingService.changeMessage('Loading Dashboard ...');
        }
        else {
            this.loadingService.showLoadingWithMessage('Loading Dashboard ...');
        }
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _announcements_announceitem_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./announcements/announceitem.model */ "./src/app/dashboard/announcements/announceitem.model.ts");
/* harmony import */ var _projectlist_projectlistitem_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectlist/projectlistitem.model */ "./src/app/dashboard/projectlist/projectlistitem.model.ts");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);








var DashboardService = /** @class */ (function () {
    function DashboardService(authService, socketService) {
        var _this = this;
        this.authService = authService;
        this.socketService = socketService;
        this.getProjects = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getProjects$ = this.getProjects.asObservable();
        this.getAnnouncements = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getAnnouncements$ = this.getAnnouncements.asObservable();
        this.getNewAnnouncement = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getNewAnnouncement$ = this.getNewAnnouncement.asObservable();
        this.projectIdList = null;
        this.projectList = null;
        this.announcements = null;
        console.log('DashboardService: constructor');
        if (this.authService.currentUsername && this.authService.isAuthenticated()) {
            console.log('DashboardService: already authenticated');
            console.log('DashboardService: emitting token');
            this.socketService.announceUser(this.authService.currentUsername, this.authService.accessToken);
        }
        else {
            console.log('DashboardService: not already authenticated');
            console.log('DashboardService: subscribing to currentusername subject');
            this.authService.currentUsernameStatus$.subscribe(function (status) {
                console.log('DashboardService: event from AuthService');
                if (status) {
                    console.log('DashboardService: emitting token');
                    _this.socketService.announceUser(_this.authService.currentUsername, _this.authService.accessToken);
                }
            });
        }
        this.socketService.getNewAnnouncement$.subscribe(function (newannouncement) {
            _this.getNewAnnouncement.next(newannouncement);
        });
    }
    DashboardService.prototype.getProjectList = function () {
        var _this = this;
        if (this.authService.isAuthenticated()) {
            firebase__WEBPACK_IMPORTED_MODULE_7__["database"]().ref('dashboarddata/' + this.authService.currentUser.uid + '/projectlist').once('value', function (snapshot) {
                if (snapshot.val()) {
                    _this.projectIdList = [];
                    for (var i = 0; i < Object.keys(snapshot.val()).length; i++) {
                        _this.projectIdList.push(snapshot.val()[i]);
                    }
                    var getpromises = [];
                    _this.projectList = [];
                    for (var _i = 0, _a = _this.projectIdList; _i < _a.length; _i++) {
                        var projectid = _a[_i];
                        getpromises.push(firebase__WEBPACK_IMPORTED_MODULE_7__["database"]().ref('projects/' + projectid)
                            .once('value', function (snap) {
                            var project = snap.val();
                            var members = [];
                            if (project.members == null) {
                                project.members = [];
                            }
                            for (var i = 0; i < Object.keys(project.members).length; i++) {
                                members[i] = project.members[i];
                            }
                            _this.projectList.push(new _projectlist_projectlistitem_model__WEBPACK_IMPORTED_MODULE_3__["ProjectListItem"](project.title, project.description, project.status, project.startdate, project.deadline, members, project.leader, project.projectid));
                        })
                            .catch(function (error) {
                            console.log(error);
                        }));
                    }
                    Promise.all(getpromises)
                        .then(function () {
                        _this.getProjects.next(_this.projectList);
                    })
                        .catch(function (error) {
                        console.log(error);
                        _this.getProjects.next(_this.projectList);
                    });
                }
                else {
                    _this.getProjects.next(null);
                }
            })
                .catch(function (error) {
                console.log(error);
                _this.getProjects.next(null);
            });
        }
        else {
            this.getProjects.next(null);
        }
    };
    DashboardService.prototype.getAnnouncement = function () {
        var _this = this;
        if (this.authService.isAuthenticated()) {
            firebase__WEBPACK_IMPORTED_MODULE_7__["database"]().ref('dashboarddata/' + this.authService.currentUser.uid + '/announcements').once('value', function (snapshot) {
                if (snapshot.val()) {
                    _this.announcements = [];
                    for (var i = 0; i < Object.keys(snapshot.val()).length; i++) {
                        var announce = snapshot.val()[i];
                        _this.announcements.push(new _announcements_announceitem_model__WEBPACK_IMPORTED_MODULE_2__["AnnounceItem"](announce.from, announce.project, announce.message, announce.date, announce.time));
                    }
                    _this.getAnnouncements.next(_this.announcements);
                }
                else {
                    _this.getAnnouncements.next(null);
                }
            })
                .catch(function (error) {
                console.log(error);
                _this.getAnnouncements.next(null);
            });
        }
        else {
            this.getAnnouncements.next(null);
        }
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/dashboard/navigation/navigation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/navigation/navigation.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navContainer{\r\n  height: 97vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n.navControlItem{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  text-align: center;\r\n  width:80%;\r\n  height:6%;\r\n  margin-top: 10%;\r\n  background-color: #fff;\r\n  border-radius: 999px;\r\n  box-shadow: 0 0 7px .5px;\r\n  cursor: pointer;\r\n  transition: -webkit-transform .1s linear;\r\n  transition: transform .1s linear;\r\n  transition: transform .1s linear, -webkit-transform .1s linear;\r\n}\r\n.navControlItem:hover{\r\n  -webkit-transform: scale(1.05);\r\n          transform: scale(1.05);\r\n}\r\n.navControlIcon{\r\n  height: 0;\r\n  width: 30%;\r\n  padding-bottom: 30%;\r\n  margin-left:5%;\r\n  background-image: url('addProj.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 90%;\r\n  border-radius: 50%;\r\n}\r\n.navControlText{\r\n  font-family: 'Roboto';\r\n  font-weight: bold;\r\n  margin-right:20%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHdDQUFnQztFQUFoQyxnQ0FBZ0M7RUFBaEMsOERBQWdDO0FBQ2xDO0FBQ0E7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsb0NBQTJEO0VBQzNELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2Q29udGFpbmVye1xyXG4gIGhlaWdodDogOTd2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYXZDb250cm9sSXRlbXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOjgwJTtcclxuICBoZWlnaHQ6NiU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDdweCAuNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGxpbmVhcjtcclxufVxyXG4ubmF2Q29udHJvbEl0ZW06aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG4ubmF2Q29udHJvbEljb257XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwJTtcclxuICBtYXJnaW4tbGVmdDo1JTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWRkUHJvai5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDkwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLm5hdkNvbnRyb2xUZXh0e1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tcmlnaHQ6MjAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/navigation/navigation.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/navigation/navigation.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"navContainer\">\n  <div (click)=\"onNewProject()\" class=\"navControlItem\">\n    <div class=\"navControlIcon\"></div>\n    <div class=\"navControlText\">New</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/navigation/navigation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/navigation/navigation.component.ts ***!
  \**************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.onNewProject = function () {
        this.router.navigate(['/dashboard/newproject']);
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/dashboard/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/dashboard/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/projectlist/projectitem/projectitem.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/projectlist/projectitem/projectitem.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#projectItemContainer{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n  width:100%;\r\n  height:100%;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 7px .5px;\r\n  background-color: #fff;\r\n  cursor: pointer;\r\n}\r\n#projectItemContainer:hover > #projectActions > #projectActionEdit{\r\n  opacity: 1;\r\n}\r\n#projectDates{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-family: 'Roboto';\r\n  font-size: 0.7em;\r\n  font-weight: bold;\r\n  word-wrap: none;\r\n  padding-left:2%;\r\n}\r\n#projectInfo{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  text-align: left;\r\n  width:60%;\r\n  height:80%;\r\n  margin-left: 2%;\r\n}\r\n#projectTitle{\r\n  font-family: 'Roboto';\r\n  font-weight: bold;\r\n  font-size: 1.25em;\r\n}\r\n#projectDesc{\r\n  font-family: 'Roboto';\r\n  font-weight: bold;\r\n  font-size: 0.7em;\r\n}\r\n#projectCategory{\r\n  margin-left: 2%;\r\n  padding-top:1%;\r\n  padding-bottom: 1%;\r\n  padding-left: 2%;\r\n  padding-right: 2%;\r\n  width:10%;\r\n  font-family: 'Roboto';\r\n  font-weight: bold;\r\n  border-radius: 999px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2plY3RsaXN0L3Byb2plY3RpdGVtL3Byb2plY3RpdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9qZWN0bGlzdC9wcm9qZWN0aXRlbS9wcm9qZWN0aXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2plY3RJdGVtQ29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA3cHggLjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jcHJvamVjdEl0ZW1Db250YWluZXI6aG92ZXIgPiAjcHJvamVjdEFjdGlvbnMgPiAjcHJvamVjdEFjdGlvbkVkaXR7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4jcHJvamVjdERhdGVze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3b3JkLXdyYXA6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OjIlO1xyXG59XHJcbiNwcm9qZWN0SW5mb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDo2MCU7XHJcbiAgaGVpZ2h0OjgwJTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuI3Byb2plY3RUaXRsZXtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjI1ZW07XHJcbn1cclxuI3Byb2plY3REZXNje1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDAuN2VtO1xyXG59XHJcbiNwcm9qZWN0Q2F0ZWdvcnl7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIHBhZGRpbmctdG9wOjElO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcclxuICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gIHdpZHRoOjEwJTtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/projectlist/projectitem/projectitem.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/projectlist/projectitem/projectitem.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"projectItemContainer\">\n  <div id=\"projectDates\">\n    <div id=\"projectStartDate\">{{ projectStart }}</div>\n    <div id=\"projectEndDate\">{{ projectDead }}</div>\n  </div>\n  <div id=\"projectInfo\">\n    <div id=\"projectTitle\">{{ projectTitle }}</div>\n    <div id=\"projectDesc\">{{ projectDesc }}</div>\n  </div>\n  <div [ngStyle]=\"{'background-color': statusBackColor()}\" id=\"projectCategory\">{{ projectStatus }}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/projectlist/projectitem/projectitem.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/projectlist/projectitem/projectitem.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProjectitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectitemComponent", function() { return ProjectitemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectitemComponent = /** @class */ (function () {
    function ProjectitemComponent() {
        this.projectTitle = '';
        this.projectDesc = '';
        this.projectStatus = '';
        this.projectStart = '';
        this.projectDead = '';
    }
    ProjectitemComponent.prototype.ngOnInit = function () {
    };
    ProjectitemComponent.prototype.statusBackColor = function () {
        if (this.projectStatus === 'active') {
            return '#7FFF00';
        }
        else if (this.projectStatus === 'complete') {
            return '#FFA500';
        }
        else {
            return '#ff3232';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectitemComponent.prototype, "projectTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectitemComponent.prototype, "projectDesc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectitemComponent.prototype, "projectStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectitemComponent.prototype, "projectStart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectitemComponent.prototype, "projectDead", void 0);
    ProjectitemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projectitem',
            template: __webpack_require__(/*! ./projectitem.component.html */ "./src/app/dashboard/projectlist/projectitem/projectitem.component.html"),
            styles: [__webpack_require__(/*! ./projectitem.component.css */ "./src/app/dashboard/projectlist/projectitem/projectitem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectitemComponent);
    return ProjectitemComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/projectlist/projectlist.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/projectlist/projectlist.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#projectListContainer{\r\n  height: 97vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n#controlBar{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  text-align: center;\r\n  width:95%;\r\n  margin-top: 2%;\r\n  height:10%;\r\n}\r\n#searchBar{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  text-align: center;\r\n  height:75%;\r\n  margin-left: 2%;\r\n  width:60%;\r\n  background-color: #fff;\r\n  border-radius: 999px;\r\n  box-shadow: 0 0 7px .5px;\r\n}\r\n#searchBarIcon{\r\n  height:0;\r\n  width:5%;\r\n  padding-bottom: 5%;\r\n  margin-left:3%;\r\n  background-image: url('search.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n}\r\n#searchBarField{\r\n  margin-left:2%;\r\n  margin-right:2%;\r\n  flex-grow: 1;\r\n  height:80%;\r\n}\r\n#searchText{\r\n  width:100%;\r\n  height:100%;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  padding:5%;\r\n  padding-left: 0;\r\n  font-family: 'Roboto';\r\n  font-weight: bold;\r\n  font-size: 1.1em;\r\n  border:none;\r\n}\r\n#searchText:focus{\r\n  outline: none;\r\n}\r\n#sortBar{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  margin-left: 2%;\r\n  height:75%;\r\n  width:16%;\r\n  border-radius: 999px;\r\n  background-color: #fff;\r\n  box-shadow: 0 0 7px .5px;\r\n  cursor: pointer;\r\n}\r\n#sortText{\r\n  font-family: 'Roboto';\r\n  font-weight: bold;\r\n}\r\n#caret{\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);\r\n  transition: -webkit-transform .1s linear;\r\n  transition: transform .1s linear;\r\n  transition: transform .1s linear, -webkit-transform .1s linear;\r\n  margin-left: 7%;\r\n}\r\n#sortMenu{\r\n  position: absolute;\r\n  top:100%;\r\n  margin-top: 10%;\r\n  width: 100%;\r\n  display: flex;\r\n  opacity: 0;\r\n  flex-direction: column;\r\n  padding-bottom: 5%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 7px .5px;\r\n  transition: opacity .1s linear;\r\n  pointer-events: none;\r\n}\r\n#sortMenuItem{\r\n  font-family: 'Roboto';\r\n  font-weight: bold;\r\n  margin-top:5%;\r\n}\r\n#sortDirBar{\r\n  height:75%;\r\n  margin-left: 2%;\r\n  margin-right: 2%;\r\n  width:16%;\r\n  border-radius: 999px;\r\n  background-color: #fff;\r\n  box-shadow: 0 0 7px .5px;\r\n}\r\n#projectList{\r\n  flex-grow: 1;\r\n  width: 95%;\r\n  margin-bottom: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n#noProjects{\r\n  width: 100%;\r\n  font-family: 'Roboto';\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n.projectListItem{\r\n  width:96%;\r\n  height:12vh;\r\n  margin-bottom:1.5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2plY3RsaXN0L3Byb2plY3RsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUNBQTBEO0VBQzFELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLFVBQVU7RUFDVixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsd0NBQWdDO0VBQWhDLGdDQUFnQztFQUFoQyw4REFBZ0M7RUFDaEMsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3Byb2plY3RsaXN0L3Byb2plY3RsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvamVjdExpc3RDb250YWluZXJ7XHJcbiAgaGVpZ2h0OiA5N3ZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI2NvbnRyb2xCYXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6OTUlO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIGhlaWdodDoxMCU7XHJcbn1cclxuI3NlYXJjaEJhcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDo3NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIHdpZHRoOjYwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA3cHggLjVweDtcclxufVxyXG4jc2VhcmNoQmFySWNvbntcclxuICBoZWlnaHQ6MDtcclxuICB3aWR0aDo1JTtcclxuICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgbWFyZ2luLWxlZnQ6MyU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NlYXJjaC5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbn1cclxuI3NlYXJjaEJhckZpZWxke1xyXG4gIG1hcmdpbi1sZWZ0OjIlO1xyXG4gIG1hcmdpbi1yaWdodDoyJTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgaGVpZ2h0OjgwJTtcclxufVxyXG4jc2VhcmNoVGV4dHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgcGFkZGluZzo1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgYm9yZGVyOm5vbmU7XHJcbn1cclxuI3NlYXJjaFRleHQ6Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4jc29ydEJhcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBoZWlnaHQ6NzUlO1xyXG4gIHdpZHRoOjE2JTtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA3cHggLjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI3NvcnRUZXh0e1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4jY2FyZXR7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgbGluZWFyO1xyXG4gIG1hcmdpbi1sZWZ0OiA3JTtcclxufVxyXG4jc29ydE1lbnV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDoxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDdweCAuNXB4O1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzIGxpbmVhcjtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4jc29ydE1lbnVJdGVte1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOjUlO1xyXG59XHJcbiNzb3J0RGlyQmFye1xyXG4gIGhlaWdodDo3NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgd2lkdGg6MTYlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAwIDdweCAuNXB4O1xyXG59XHJcbiNwcm9qZWN0TGlzdHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNub1Byb2plY3Rze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnByb2plY3RMaXN0SXRlbXtcclxuICB3aWR0aDo5NiU7XHJcbiAgaGVpZ2h0OjEydmg7XHJcbiAgbWFyZ2luLWJvdHRvbToxLjUlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/projectlist/projectlist.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/projectlist/projectlist.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"projectListContainer\">\n  <div id=\"controlBar\">\n    <div id=\"searchBar\">\n      <div id=\"searchBarIcon\"></div>\n      <div id=\"searchBarField\">\n        <input (input)=\"onSearch($event.target.value)\" id=\"searchText\" type=\"search\" />\n      </div>\n    </div>\n    <div (click)=\"onSortClick()\" id=\"sortBar\">\n      <div id=\"sortText\">Sort By</div>\n      <div #caret id=\"caret\">&#x25b2;</div>\n        <div #sortMenu id=\"sortMenu\">\n          <div id=\"sortMenuItem\" (click)=\"onSort('date')\">Date</div>\n          <div id=\"sortMenuItem\" (click)=\"onSort('category')\">Category</div>\n          <div id=\"sortMenuItem\" (click)=\"onSort('name')\">Name</div>\n        </div>\n    </div>\n    <div id=\"sortDirBar\"></div>\n  </div>\n  <div id=\"projectList\" >\n    <div *ngIf=\"projectsVisible.length <= 0\" id=\"noProjects\">No Projects Yet</div>\n    <app-projectitem\n      *ngFor=\"let project of projectsVisible\"\n      [routerLink]=\"'/dashboard/project/' + project.projectid\"\n      class=\"projectListItem\"\n      [projectTitle]=\"project.title\"\n      [projectDesc]=\"project.description\"\n      [projectStatus]=\"project.status\"\n      [projectStart]=\"project.startdate\"\n      [projectDead]=\"project.deadline\">\n    </app-projectitem>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/projectlist/projectlist.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/projectlist/projectlist.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectlistComponent", function() { return ProjectlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ProjectlistComponent = /** @class */ (function () {
    function ProjectlistComponent(dashboardService, loadingService) {
        this.dashboardService = dashboardService;
        this.loadingService = loadingService;
        this.isSortMenuOpened = false;
        this.projects = [];
        this.projectsVisible = [];
    }
    ProjectlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getProjects$.subscribe(function (projects) {
            if (projects) {
                _this.projects = projects;
                _this.projectsVisible = projects;
            }
        });
        this.dashboardService.getProjectList();
        if (this.loadingService.isLoading) {
            this.loadingService.changeMessage('Loading Project List ...');
        }
        else {
            this.loadingService.showLoadingWithMessage('Loading Project List ...');
        }
    };
    ProjectlistComponent.prototype.onSearch = function (search) {
        if (search === '') {
            this.projectsVisible = this.projects;
            return;
        }
        this.projectsVisible = [];
        for (var i = 0; i < this.projects.length; i++) {
            if (this.projects[i].title.toLowerCase().includes(search.toLowerCase()) ||
                this.projects[i].description.toLowerCase().includes(search.toLowerCase())) {
                this.projectsVisible.push(this.projects[i]);
            }
        }
    };
    ProjectlistComponent.prototype.onSortClick = function () {
        this.isSortMenuOpened = !this.isSortMenuOpened;
        if (this.isSortMenuOpened) {
            this.sortMenu.nativeElement.style.opacity = '1';
            this.sortMenu.nativeElement.style.pointerEvents = 'all';
            this.caret.nativeElement.style.transform = 'rotate(180deg)';
        }
        else {
            this.sortMenu.nativeElement.style.opacity = '0';
            this.sortMenu.nativeElement.style.pointerEvents = 'none';
            this.caret.nativeElement.style.transform = 'rotate(90deg)';
        }
    };
    ProjectlistComponent.prototype.onSort = function (by) {
        if (by === 'name' || by === 'category') {
            this.projectsVisible = this.projectsVisible.sort(function (a, b) {
                var x = a.title.toLowerCase();
                var y = b.title.toLowerCase();
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
            });
        }
        else {
            this.projectsVisible = this.projectsVisible.sort(function (a, b) {
                return new Date(a.startdate).getTime() - new Date(b.startdate).getTime();
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('sortMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], ProjectlistComponent.prototype, "sortMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('caret'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], ProjectlistComponent.prototype, "caret", void 0);
    ProjectlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-projectlist',
            template: __webpack_require__(/*! ./projectlist.component.html */ "./src/app/dashboard/projectlist/projectlist.component.html"),
            styles: [__webpack_require__(/*! ./projectlist.component.css */ "./src/app/dashboard/projectlist/projectlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"],
            _loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"]])
    ], ProjectlistComponent);
    return ProjectlistComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/projectlist/projectlistitem.model.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/projectlist/projectlistitem.model.ts ***!
  \****************************************************************/
/*! exports provided: ProjectListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListItem", function() { return ProjectListItem; });
var ProjectListItem = /** @class */ (function () {
    function ProjectListItem(title, description, status, startdate, deadline, members, leader, projectid) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.startdate = startdate;
        this.deadline = deadline;
        this.members = members;
        this.leader = leader;
        this.projectid = projectid;
    }
    return ProjectListItem;
}());



/***/ }),

/***/ "./src/app/dashboard/stats/stats.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/stats/stats.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#statsContainer{\r\n  height: 47.75vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N0YXRzL3N0YXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3N0YXRzL3N0YXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3RhdHNDb250YWluZXJ7XHJcbiAgaGVpZ2h0OiA0Ny43NXZoO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/stats/stats.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/stats/stats.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"statsContainer\">test</div>\n"

/***/ }),

/***/ "./src/app/dashboard/stats/stats.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/stats/stats.component.ts ***!
  \****************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatsComponent = /** @class */ (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    StatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/dashboard/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.css */ "./src/app/dashboard/stats/stats.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/app/editor/console/console.component.css":
/*!******************************************************!*\
  !*** ./src/app/editor/console/console.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright (c) 2014 The xterm.js authors. All rights reserved.\n * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)\n * https://github.com/chjj/term.js\n * @license MIT\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n *\n * Originally forked from (with the author's permission):\n *   Fabrice Bellard's javascript vt100 for jslinux:\n *   http://bellard.org/jslinux/\n *   Copyright (c) 2011 Fabrice Bellard\n *   The original design remains. The terminal itself\n *   has been extended to include xterm CSI codes, among\n *   other features.\n */\n\n/**\n *  Default styles for xterm.js\n */\n\n.xterm {\n    -webkit-font-feature-settings: \"liga\" 0;\n            font-feature-settings: \"liga\" 0;\n    position: relative;\n    -moz-user-select: none;\n         user-select: none;\n    -ms-user-select: none;\n    -webkit-user-select: none;\n}\n\n.xterm.focus,\n.xterm:focus {\n    outline: none;\n}\n\n.xterm .xterm-helpers {\n    position: absolute;\n    top: 0;\n    /**\n     * The z-index of the helpers must be higher than the canvases in order for\n     * IMEs to appear on top.\n     */\n    z-index: 10;\n}\n\n.xterm .xterm-helper-textarea {\n    /*\n     * HACK: to fix IE's blinking cursor\n     * Move textarea out of the screen to the far left, so that the cursor is not visible.\n     */\n    position: absolute;\n    opacity: 0;\n    left: -9999em;\n    top: 0;\n    width: 0;\n    height: 0;\n    z-index: -10;\n    /** Prevent wrapping so the IME appears against the textarea at the correct position */\n    white-space: nowrap;\n    overflow: hidden;\n    resize: none;\n}\n\n.xterm .composition-view {\n    /* TODO: Composition position got messed up somewhere */\n    background: #000;\n    color: #FFF;\n    display: none;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 1;\n}\n\n.xterm .composition-view.active {\n    display: block;\n}\n\n.xterm .xterm-viewport {\n    /* On OS X this is required in order for the scroll bar to appear fully opaque */\n    background-color: #000;\n    overflow-y: scroll;\n    cursor: default;\n    position: absolute;\n    right: 0;\n    left: 0;\n    top: 0;\n    bottom: 0;\n}\n\n.xterm .xterm-screen {\n    position: relative;\n}\n\n.xterm .xterm-screen canvas {\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.xterm .xterm-scroll-area {\n    visibility: hidden;\n}\n\n.xterm-char-measure-element {\n    display: inline-block;\n    visibility: hidden;\n    position: absolute;\n    top: 0;\n    left: -9999em;\n    line-height: normal;\n}\n\n.xterm {\n    cursor: text;\n}\n\n.xterm.enable-mouse-events {\n    /* When mouse events are enabled (eg. tmux), revert to the standard pointer cursor */\n    cursor: default;\n}\n\n.xterm.xterm-cursor-pointer {\n    cursor: pointer;\n}\n\n.xterm.column-select.focus {\n    /* Column selection mode */\n    cursor: crosshair;\n}\n\n.xterm .xterm-accessibility,\n.xterm .xterm-message {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 100;\n    color: transparent;\n}\n\n.xterm .live-region {\n    position: absolute;\n    left: -9999px;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n}\n\n#consoleContainer{\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  width:100%;\r\n  height:100%;\r\n  background-color: black;\r\n}\n\n#terminal{\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy94dGVybS9kaXN0L3h0ZXJtLmNzcyIsInNyYy9hcHAvZWRpdG9yL2NvbnNvbGUvY29uc29sZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBK0JFOztBQUVGOztFQUVFOztBQUVGO0lBQ0ksdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsc0JBQWlCO1NBQWpCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOOzs7TUFHRTtJQUNGLFdBQVc7QUFDZjs7QUFFQTtJQUNJOzs7TUFHRTtJQUNGLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWixzRkFBc0Y7SUFDdEYsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdURBQXVEO0lBQ3ZELGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdGQUFnRjtJQUNoRixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxNQUFNO0lBQ04sU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvRkFBb0Y7SUFDcEYsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FDaEtBO0VBQ0Usa0JBQWtCO0VBQ2xCLEtBQUs7RUFDTCxNQUFNO0VBQ04sVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsS0FBSztFQUNMLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2NvbnNvbGUvY29uc29sZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgVGhlIHh0ZXJtLmpzIGF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxMywgQ2hyaXN0b3BoZXIgSmVmZnJleSAoTUlUIExpY2Vuc2UpXG4gKiBodHRwczovL2dpdGh1Yi5jb20vY2hqai90ZXJtLmpzXG4gKiBAbGljZW5zZSBNSVRcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIE9yaWdpbmFsbHkgZm9ya2VkIGZyb20gKHdpdGggdGhlIGF1dGhvcidzIHBlcm1pc3Npb24pOlxuICogICBGYWJyaWNlIEJlbGxhcmQncyBqYXZhc2NyaXB0IHZ0MTAwIGZvciBqc2xpbnV4OlxuICogICBodHRwOi8vYmVsbGFyZC5vcmcvanNsaW51eC9cbiAqICAgQ29weXJpZ2h0IChjKSAyMDExIEZhYnJpY2UgQmVsbGFyZFxuICogICBUaGUgb3JpZ2luYWwgZGVzaWduIHJlbWFpbnMuIFRoZSB0ZXJtaW5hbCBpdHNlbGZcbiAqICAgaGFzIGJlZW4gZXh0ZW5kZWQgdG8gaW5jbHVkZSB4dGVybSBDU0kgY29kZXMsIGFtb25nXG4gKiAgIG90aGVyIGZlYXR1cmVzLlxuICovXG5cbi8qKlxuICogIERlZmF1bHQgc3R5bGVzIGZvciB4dGVybS5qc1xuICovXG5cbi54dGVybSB7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcImxpZ2FcIiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnh0ZXJtLmZvY3VzLFxuLnh0ZXJtOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ueHRlcm0gLnh0ZXJtLWhlbHBlcnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgLyoqXG4gICAgICogVGhlIHotaW5kZXggb2YgdGhlIGhlbHBlcnMgbXVzdCBiZSBoaWdoZXIgdGhhbiB0aGUgY2FudmFzZXMgaW4gb3JkZXIgZm9yXG4gICAgICogSU1FcyB0byBhcHBlYXIgb24gdG9wLlxuICAgICAqL1xuICAgIHotaW5kZXg6IDEwO1xufVxuXG4ueHRlcm0gLnh0ZXJtLWhlbHBlci10ZXh0YXJlYSB7XG4gICAgLypcbiAgICAgKiBIQUNLOiB0byBmaXggSUUncyBibGlua2luZyBjdXJzb3JcbiAgICAgKiBNb3ZlIHRleHRhcmVhIG91dCBvZiB0aGUgc2NyZWVuIHRvIHRoZSBmYXIgbGVmdCwgc28gdGhhdCB0aGUgY3Vyc29yIGlzIG5vdCB2aXNpYmxlLlxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGxlZnQ6IC05OTk5ZW07XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICB6LWluZGV4OiAtMTA7XG4gICAgLyoqIFByZXZlbnQgd3JhcHBpbmcgc28gdGhlIElNRSBhcHBlYXJzIGFnYWluc3QgdGhlIHRleHRhcmVhIGF0IHRoZSBjb3JyZWN0IHBvc2l0aW9uICovXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuLnh0ZXJtIC5jb21wb3NpdGlvbi12aWV3IHtcbiAgICAvKiBUT0RPOiBDb21wb3NpdGlvbiBwb3NpdGlvbiBnb3QgbWVzc2VkIHVwIHNvbWV3aGVyZSAqL1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ueHRlcm0gLmNvbXBvc2l0aW9uLXZpZXcuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnh0ZXJtIC54dGVybS12aWV3cG9ydCB7XG4gICAgLyogT24gT1MgWCB0aGlzIGlzIHJlcXVpcmVkIGluIG9yZGVyIGZvciB0aGUgc2Nyb2xsIGJhciB0byBhcHBlYXIgZnVsbHkgb3BhcXVlICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG59XG5cbi54dGVybSAueHRlcm0tc2NyZWVuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi54dGVybSAueHRlcm0tc2NyZWVuIGNhbnZhcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xufVxuXG4ueHRlcm0gLnh0ZXJtLXNjcm9sbC1hcmVhIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi54dGVybS1jaGFyLW1lYXN1cmUtZWxlbWVudCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC05OTk5ZW07XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnh0ZXJtIHtcbiAgICBjdXJzb3I6IHRleHQ7XG59XG5cbi54dGVybS5lbmFibGUtbW91c2UtZXZlbnRzIHtcbiAgICAvKiBXaGVuIG1vdXNlIGV2ZW50cyBhcmUgZW5hYmxlZCAoZWcuIHRtdXgpLCByZXZlcnQgdG8gdGhlIHN0YW5kYXJkIHBvaW50ZXIgY3Vyc29yICovXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ueHRlcm0ueHRlcm0tY3Vyc29yLXBvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnh0ZXJtLmNvbHVtbi1zZWxlY3QuZm9jdXMge1xuICAgIC8qIENvbHVtbiBzZWxlY3Rpb24gbW9kZSAqL1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuXG4ueHRlcm0gLnh0ZXJtLWFjY2Vzc2liaWxpdHksXG4ueHRlcm0gLnh0ZXJtLW1lc3NhZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnh0ZXJtIC5saXZlLXJlZ2lvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC05OTk5cHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3h0ZXJtL2Rpc3QveHRlcm0uY3NzJztcclxuXHJcbiNjb25zb2xlQ29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4jdGVybWluYWx7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/editor/console/console.component.html":
/*!*******************************************************!*\
  !*** ./src/app/editor/console/console.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"consoleContainer\">\n  <div #consoleTerm id=\"terminal\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/console/console.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/editor/console/console.component.ts ***!
  \*****************************************************/
/*! exports provided: ConsoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleComponent", function() { return ConsoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xterm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xterm */ "./node_modules/xterm/lib/public/Terminal.js");
/* harmony import */ var xterm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xterm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xterm_lib_addons_fit_fit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xterm/lib/addons/fit/fit */ "./node_modules/xterm/lib/addons/fit/fit.js");
/* harmony import */ var xterm_lib_addons_fit_fit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xterm_lib_addons_fit_fit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editor.service */ "./src/app/editor/editor.service.ts");




xterm__WEBPACK_IMPORTED_MODULE_2__["Terminal"].applyAddon(xterm_lib_addons_fit_fit__WEBPACK_IMPORTED_MODULE_3__);


var ConsoleComponent = /** @class */ (function () {
    function ConsoleComponent(socketService, editorService) {
        var _this = this;
        this.socketService = socketService;
        this.editorService = editorService;
        this.currConsoleContainerHeight = null;
        this.editorService.resizeConsoleHeight$.subscribe(function (height) {
            _this.currConsoleContainerHeight = height;
            if (_this.term) {
                _this.term.resize(_this.term.cols, Math.floor(height / 17));
            }
        });
        this.editorService.resizeConsoleWidth$.subscribe(function (width) {
            if (_this.term) {
                _this.term.resize(Math.floor(width / 9.2), _this.term.rows);
            }
        });
    }
    ConsoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.term = new xterm__WEBPACK_IMPORTED_MODULE_2__["Terminal"]();
        this.term.open(this.terminalDiv.nativeElement);
        xterm_lib_addons_fit_fit__WEBPACK_IMPORTED_MODULE_3__["fit"](this.term);
        this.socketService.setTermSocket();
        this.socketService.getTermOutput$.subscribe(function (data) {
            _this.term.write(data);
        });
        this.term.on('data', function (data) {
            _this.socketService.sendTermOutput(data);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('consoleTerm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ConsoleComponent.prototype, "terminalDiv", void 0);
    ConsoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            selector: 'app-console',
            template: __webpack_require__(/*! ./console.component.html */ "./src/app/editor/console/console.component.html"),
            styles: [__webpack_require__(/*! ./console.component.css */ "./src/app/editor/console/console.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            _editor_service__WEBPACK_IMPORTED_MODULE_5__["EditorService"]])
    ], ConsoleComponent);
    return ConsoleComponent;
}());



/***/ }),

/***/ "./src/app/editor/editor.component.css":
/*!*********************************************!*\
  !*** ./src/app/editor/editor.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#editorMainContainer{\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top:0;\r\n  left:0;\r\n}\r\n#toolbarMainContainer{\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  width:100%;\r\n  height:10%;\r\n  background-color: #484848;\r\n  z-index: 6;\r\n}\r\n#sidepanelMainContainer{\r\n  position: absolute;\r\n  top:10%;\r\n  left:0;\r\n  width:4%;\r\n  height: 86%;\r\n  background-color: dimgray;\r\n  z-index: 4;\r\n}\r\n#explorerMainContainer{\r\n  position: absolute;\r\n  top:10%;\r\n  left:4%;\r\n  height:86%;\r\n  width:20%;\r\n  background-color: #7e7e7e;\r\n  z-index: 5;\r\n}\r\n#explorerBordertabs{\r\n  position: absolute;\r\n  width:5px;\r\n  background-color: black;\r\n  top:10%;\r\n  left:24%;\r\n  height: 86%;\r\n  cursor: ew-resize;\r\n  z-index: 5;\r\n}\r\n#tabsMainContainer{\r\n  position: absolute;\r\n  top:10%;\r\n  left: calc(24% + 5px);\r\n  height: 65%;\r\n  width: calc(76% - 5px);\r\n  background-color: lightgray;\r\n  z-index: 4;\r\n}\r\n#tabsBorderconsole{\r\n  position: absolute;\r\n  background-color: black;\r\n  height: 5px;\r\n  top: 75%;\r\n  left: calc(24% + 5px);\r\n  width: calc(76% - 5px);\r\n  cursor: ns-resize;\r\n  z-index: 5;\r\n}\r\n#consoleMainContainer{\r\n  position: absolute;\r\n  top: calc(75% + 5px);\r\n  left: calc(24% + 5px);\r\n  width: calc(76% - 5px);\r\n  height: calc(21% - 5px);\r\n  background-color: lightseagreen;\r\n  z-index: 4;\r\n}\r\n#textcommsMainContainer{\r\n  position: absolute;\r\n  top:94.5%;\r\n  left:75%;\r\n  width:25%;\r\n  height:55%;\r\n  background-color: lightslategrey;\r\n  z-index: 5;\r\n  transition: top .2s ease-out;\r\n  box-shadow: 0 0 10px 2px;\r\n  border-top-left-radius: 5vh;\r\n}\r\n#statusbarMainContainer{\r\n  position: absolute;\r\n  top:96%;\r\n  height: 4%;\r\n  width:100%;\r\n  left:0;\r\n  background-color: blueviolet;\r\n  z-index: 4;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osS0FBSztFQUNMLE1BQU07QUFDUjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLEtBQUs7RUFDTCxNQUFNO0VBQ04sVUFBVTtFQUNWLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixRQUFRO0VBQ1IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsT0FBTztFQUNQLFVBQVU7RUFDVixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLCtCQUErQjtFQUMvQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxVQUFVO0VBQ1YsVUFBVTtFQUNWLE1BQU07RUFDTiw0QkFBNEI7RUFDNUIsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2VkaXRvck1haW5Db250YWluZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbn1cclxuI3Rvb2xiYXJNYWluQ29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODQ4NDg7XHJcbiAgei1pbmRleDogNjtcclxufVxyXG4jc2lkZXBhbmVsTWFpbkNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjEwJTtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6NCU7XHJcbiAgaGVpZ2h0OiA4NiU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JheTtcclxuICB6LWluZGV4OiA0O1xyXG59XHJcbiNleHBsb3Jlck1haW5Db250YWluZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDoxMCU7XHJcbiAgbGVmdDo0JTtcclxuICBoZWlnaHQ6ODYlO1xyXG4gIHdpZHRoOjIwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U3ZTdlO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuI2V4cGxvcmVyQm9yZGVydGFic3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHRvcDoxMCU7XHJcbiAgbGVmdDoyNCU7XHJcbiAgaGVpZ2h0OiA4NiU7XHJcbiAgY3Vyc29yOiBldy1yZXNpemU7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG4jdGFic01haW5Db250YWluZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDoxMCU7XHJcbiAgbGVmdDogY2FsYygyNCUgKyA1cHgpO1xyXG4gIGhlaWdodDogNjUlO1xyXG4gIHdpZHRoOiBjYWxjKDc2JSAtIDVweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIHotaW5kZXg6IDQ7XHJcbn1cclxuI3RhYnNCb3JkZXJjb25zb2xle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBoZWlnaHQ6IDVweDtcclxuICB0b3A6IDc1JTtcclxuICBsZWZ0OiBjYWxjKDI0JSArIDVweCk7XHJcbiAgd2lkdGg6IGNhbGMoNzYlIC0gNXB4KTtcclxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcbiNjb25zb2xlTWFpbkNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiBjYWxjKDc1JSArIDVweCk7XHJcbiAgbGVmdDogY2FsYygyNCUgKyA1cHgpO1xyXG4gIHdpZHRoOiBjYWxjKDc2JSAtIDVweCk7XHJcbiAgaGVpZ2h0OiBjYWxjKDIxJSAtIDVweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcclxuICB6LWluZGV4OiA0O1xyXG59XHJcbiN0ZXh0Y29tbXNNYWluQ29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6OTQuNSU7XHJcbiAgbGVmdDo3NSU7XHJcbiAgd2lkdGg6MjUlO1xyXG4gIGhlaWdodDo1NSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyZXk7XHJcbiAgei1pbmRleDogNTtcclxuICB0cmFuc2l0aW9uOiB0b3AgLjJzIGVhc2Utb3V0O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1dmg7XHJcbn1cclxuI3N0YXR1c2Jhck1haW5Db250YWluZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDo5NiU7XHJcbiAgaGVpZ2h0OiA0JTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGxlZnQ6MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gIHotaW5kZXg6IDQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/editor/editor.component.html":
/*!**********************************************!*\
  !*** ./src/app/editor/editor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (mousemove)=\"mousePosition($event)\" id=\"editorMainContainer\">\n  <app-toolbar #toolbarMainContainer id=\"toolbarMainContainer\"></app-toolbar>\n  <app-sidepanel #sidepanelMainContainer id=\"sidepanelMainContainer\"></app-sidepanel>\n  <app-explorer #explorerMainContainer id=\"explorerMainContainer\"></app-explorer>\n  <div #explorerBordertabs id=\"explorerBordertabs\" (mouseup)=\"explorerTabsResizeEnd($event)\" (mousedown)=\"explorerTabsResizeStart($event)\"></div>\n  <app-tabs #tabsMainContainer id=\"tabsMainContainer\"></app-tabs>\n  <div #tabsBorderconsole id=\"tabsBorderconsole\" (mouseup)=\"tabsConsoleResizeEnd($event)\" (mousedown)=\"tabsConsoleResizeStart($event)\"></div>\n  <app-console #consoleMainContainer id=\"consoleMainContainer\"></app-console>\n  <app-textcomms #textcommsMainContainer id=\"textcommsMainContainer\"></app-textcomms>\n  <app-statusbar #statusbarMainContainer id=\"statusbarMainContainer\"></app-statusbar>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/editor.component.ts":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.service */ "./src/app/editor/editor.service.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _textcomms_textcomms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./textcomms/textcomms.component */ "./src/app/editor/textcomms/textcomms.component.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _peer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../peer.service */ "./src/app/peer.service.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/editor/tabs/tabs.component.ts");









var EditorComponent = /** @class */ (function () {
    function EditorComponent(commonService, editorService, loadingService, socketService, peerService) {
        var _this = this;
        this.commonService = commonService;
        this.editorService = editorService;
        this.loadingService = loadingService;
        this.socketService = socketService;
        this.peerService = peerService;
        this.width = 0;
        this.height = 0;
        this.isDragging = false;
        this.currentMousePos = { x: 0, y: 0 };
        this.explorerTabsResizing = false;
        this.tabsConsoleResizing = false;
        this.isTextCommsOpen = false;
        this.editorService.textCommsToggle$.subscribe(function () {
            _this.textCommsToggle();
        });
    }
    EditorComponent.prototype.beforeUnloadHandler = function () {
        this.socketService.sendProjectClosed(this.editorService.getProjectID());
        this.peerService.destroyPeer();
        this.socketService.sendPeerClosed(this.editorService.getProjectID());
        this.socketService.removeUser();
    };
    EditorComponent.prototype.ngOnInit = function () {
        this.commonService.headerVisibility(false, true, true);
        this.width = document.body.clientWidth;
        this.height = document.body.clientHeight;
    };
    EditorComponent.prototype.ngAfterViewInit = function () {
        this.socketService.sendProjectOpened(this.editorService.getProjectID());
    };
    EditorComponent.prototype.ngOnDestroy = function () {
        console.log('destroyed');
        this.socketService.sendProjectClosed(this.editorService.getProjectID());
        this.peerService.destroyPeer();
        this.socketService.sendPeerClosed(this.editorService.getProjectID());
    };
    EditorComponent.prototype.explorerTabsResizeStart = function (event) {
        this.isDragging = true;
        this.explorerTabsResizing = true;
    };
    EditorComponent.prototype.explorerTabsResizeEnd = function (event) {
        this.isDragging = false;
        this.explorerTabsResizing = false;
    };
    EditorComponent.prototype.tabsConsoleResizeStart = function (event) {
        this.isDragging = true;
        this.tabsConsoleResizing = true;
    };
    EditorComponent.prototype.tabsConsoleResizeEnd = function (event) {
        this.isDragging = false;
        this.tabsConsoleResizing = false;
    };
    EditorComponent.prototype.mousePosition = function (event) {
        if (this.isDragging) {
            this.currentMousePos.x = event.clientX;
            this.currentMousePos.y = event.clientY;
            if (this.explorerTabsResizing) {
                // check limits
                if (this.currentMousePos.x < ((this.width * 15) / 100) || this.currentMousePos.x > ((this.width * 50) / 100)) {
                    this.isDragging = false;
                    this.explorerTabsResizing = false;
                    return;
                }
                else {
                    this.explorerBordertabs.nativeElement.style.left = this.currentMousePos.x + 'px';
                    // resize elements
                    this.explorerMainContainer.nativeElement.style.width = (this.currentMousePos.x - parseInt(this.sidepanelMainContainer.nativeElement.clientWidth, 10)) + 'px';
                    this.tabsMainContainer.nativeElement.style.left = (this.currentMousePos.x + parseInt(this.explorerBordertabs.nativeElement.clientWidth, 10)) + 'px';
                    this.tabsMainContainer.nativeElement.style.width = (this.width - this.currentMousePos.x) + 'px';
                    this.tabsBorderconsole.nativeElement.style.left = (this.currentMousePos.x + parseInt(this.explorerBordertabs.nativeElement.clientWidth, 10)) + 'px';
                    this.tabsBorderconsole.nativeElement.style.width = (this.width - this.currentMousePos.x) + 'px';
                    this.consoleMainContainer.nativeElement.style.left = (this.currentMousePos.x + parseInt(this.explorerBordertabs.nativeElement.clientWidth, 10)) + 'px';
                    this.consoleMainContainer.nativeElement.style.width = (this.width - this.currentMousePos.x) + 'px';
                    this.editorService.resizeConsoleW(this.consoleMainContainer.nativeElement.style.width);
                    this.editorService.resizeTextEditor(this.tabsMainContainer.nativeElement.clientWidth, parseInt(this.tabsMainContainer.nativeElement.style.height, 10) - parseInt(this.tabsMainContainerComp.tabsHeaderScrollContainer.nativeElement.clientHeight, 10));
                }
            }
            else if (this.tabsConsoleResizing) {
                if (this.currentMousePos.y < ((this.height * 50) / 100) || this.currentMousePos.y > ((this.height * 90) / 100)) {
                    this.isDragging = false;
                    this.tabsConsoleResizing = false;
                    return;
                }
                else {
                    this.tabsBorderconsole.nativeElement.style.top = this.currentMousePos.y + 'px';
                    // resize elements
                    this.tabsMainContainer.nativeElement.style.height = (this.currentMousePos.y - parseInt(this.toolbarMainContainer.nativeElement.clientHeight, 10)) + 'px';
                    this.consoleMainContainer.nativeElement.style.top = (this.currentMousePos.y + parseInt(this.tabsBorderconsole.nativeElement.clientHeight, 10)) + 'px';
                    this.consoleMainContainer.nativeElement.style.height = (this.height - (this.currentMousePos.y + parseInt(this.tabsBorderconsole.nativeElement.clientHeight, 10) + this.statusbarMainContainer.nativeElement.clientHeight)) + 'px';
                    this.editorService.resizeConsoleH(this.consoleMainContainer.nativeElement.style.height);
                    this.editorService.resizeTextEditor(this.tabsMainContainer.nativeElement.clientWidth, parseInt(this.tabsMainContainer.nativeElement.style.height, 10) - parseInt(this.tabsMainContainerComp.tabsHeaderScrollContainer.nativeElement.clientHeight, 10));
                }
            }
        }
    };
    EditorComponent.prototype.textCommsToggle = function () {
        if (!this.isTextCommsOpen) {
            this.textcommsMainContainer.nativeElement.style.top = '45%';
            this.textcommsMainContainerComponent.noOfUnreadMessages = 0;
        }
        else {
            this.textcommsMainContainer.nativeElement.style.top = '94.5%';
        }
        this.isTextCommsOpen = !this.isTextCommsOpen;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('statusbarMainContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditorComponent.prototype, "statusbarMainContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toolbarMainContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditorComponent.prototype, "toolbarMainContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('explorerMainContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditorComponent.prototype, "explorerMainContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidepanelMainContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditorComponent.prototype, "sidepanelMainContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('explorerBordertabs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditorComponent.prototype, "explorerBordertabs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabsBorderconsole'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditorComponent.prototype, "tabsBorderconsole", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabsMainContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditorComponent.prototype, "tabsMainContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabsMainContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__["TabsComponent"])
    ], EditorComponent.prototype, "tabsMainContainerComp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('consoleMainContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditorComponent.prototype, "consoleMainContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textcommsMainContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditorComponent.prototype, "textcommsMainContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textcommsMainContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _textcomms_textcomms_component__WEBPACK_IMPORTED_MODULE_5__["TextcommsComponent"])
    ], EditorComponent.prototype, "textcommsMainContainerComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], EditorComponent.prototype, "beforeUnloadHandler", null);
    EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/editor/editor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"],
            _loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"],
            _peer_service__WEBPACK_IMPORTED_MODULE_7__["PeerService"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/editor/editor.service.ts":
/*!******************************************!*\
  !*** ./src/app/editor/editor.service.ts ***!
  \******************************************/
/*! exports provided: EditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return EditorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var EditorService = /** @class */ (function () {
    function EditorService() {
        this.projectID = '';
        this.resizeConsoleHeight = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.resizeConsoleHeight$ = this.resizeConsoleHeight.asObservable();
        this.resizeConsoleWidth = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.resizeConsoleWidth$ = this.resizeConsoleWidth.asObservable();
        this.resizeTextEditorWH = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.resizeTextEditorWH$ = this.resizeTextEditorWH.asObservable();
        this.textCommsToggle = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.textCommsToggle$ = this.textCommsToggle.asObservable();
        this.saveFile = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.saveFile$ = this.saveFile.asObservable();
        if (localStorage.getItem('projectid')) {
            this.projectID = localStorage.getItem('projectid');
        }
    }
    EditorService.prototype.setProjectID = function (projectID) {
        this.projectID = projectID;
        localStorage.setItem('projectid', this.projectID);
    };
    EditorService.prototype.getProjectID = function () {
        return this.projectID;
    };
    EditorService.prototype.resizeConsoleH = function (height) {
        this.resizeConsoleHeight.next(parseFloat(height));
    };
    EditorService.prototype.resizeConsoleW = function (width) {
        this.resizeConsoleWidth.next(parseFloat(width));
    };
    EditorService.prototype.resizeTextEditor = function (width, height) {
        this.resizeTextEditorWH.next({ width: width, height: height });
    };
    EditorService.prototype.onTextCommsToggle = function () {
        this.textCommsToggle.next();
    };
    EditorService.prototype.syncAll = function () {
        this.saveFile.next();
    };
    EditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditorService);
    return EditorService;
}());



/***/ }),

/***/ "./src/app/editor/explorer/explorer.component.css":
/*!********************************************************!*\
  !*** ./src/app/editor/explorer/explorer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#scrollContainer {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-x: scroll;\r\n  word-wrap: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2V4cGxvcmVyL2V4cGxvcmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9leHBsb3Jlci9leHBsb3Jlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Njcm9sbENvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgd29yZC13cmFwOiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/editor/explorer/explorer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/editor/explorer/explorer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"scrollContainer\">\r\n  <div id=\"scrollDiv\">\r\n    <app-tree-view [directories]=\"(this.projectConfig) ? this.projectConfig.directories : []\"></app-tree-view>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/editor/explorer/explorer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/editor/explorer/explorer.component.ts ***!
  \*******************************************************/
/*! exports provided: ExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerComponent", function() { return ExplorerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projectconfig_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projectconfig.model */ "./src/app/editor/projectconfig.model.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editor.service */ "./src/app/editor/editor.service.ts");






var ExplorerComponent = /** @class */ (function () {
    function ExplorerComponent(socketService, loadingService, editorService) {
        var _this = this;
        this.socketService = socketService;
        this.loadingService = loadingService;
        this.editorService = editorService;
        this.socketService.receiveFileStructure$.subscribe(function (data) {
            setTimeout(function () {
                _this.loadingService.removeLoading();
                _this.projectConfig = new _projectconfig_model__WEBPACK_IMPORTED_MODULE_2__["ProjectConfig"](data);
            }, 0);
        });
    }
    ExplorerComponent.prototype.ngOnInit = function () {
    };
    ExplorerComponent.prototype.ngAfterViewInit = function () {
        this.socketService.getExplorerStructure(this.editorService.getProjectID());
    };
    ExplorerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-explorer',
            template: __webpack_require__(/*! ./explorer.component.html */ "./src/app/editor/explorer/explorer.component.html"),
            styles: [__webpack_require__(/*! ./explorer.component.css */ "./src/app/editor/explorer/explorer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            _loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"],
            _editor_service__WEBPACK_IMPORTED_MODULE_5__["EditorService"]])
    ], ExplorerComponent);
    return ExplorerComponent;
}());



/***/ }),

/***/ "./src/app/editor/explorer/tree-view/tree-view.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/editor/explorer/tree-view/tree-view.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".treeFolderList {\r\n  font-family: 'Roboto';\r\n  list-style-type: none;\r\n  padding: 0;\r\n  padding-left: 2vw;\r\n  color: #c7c7c7;\r\n}\r\n\r\n.treeFolder {\r\n  cursor: pointer;\r\n  font-size: 0.9vw;\r\n  list-style: none;\r\n  font-weight: bold;\r\n  line-height: 3vh;\r\n  z-index: 5;\r\n}\r\n\r\n.treeFolder::before {\r\n  content: '';\r\n  display: inline-block;\r\n  height: 1vw;\r\n  width: 1vw;\r\n  margin-right: 0.6vw;\r\n  background-image: url('explorerFolder.png');\r\n  position: relative;\r\n  top: 0.2vw;\r\n  z-index: 5;\r\n}\r\n\r\n.folderName {\r\n  margin-bottom: .1vh;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.folderName:hover > .selectedStripFolder {\r\n  display: block;\r\n}\r\n\r\n.treeFileList {\r\n  list-style-type: none;\r\n}\r\n\r\n.fileIcon{\r\n  background-image: url('file.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 90%;\r\n}\r\n\r\n.treeFile {\r\n  font-weight: normal;\r\n}\r\n\r\n.treeFile:hover > .selectedStrip {\r\n  display: block;\r\n}\r\n\r\n.selectedStrip {\r\n  position: absolute;\r\n  width: 100%;\r\n  left: 0;\r\n  height: 3vh;\r\n  background-color: rgb(183, 255, 174);\r\n  opacity: 1;\r\n  display: none;\r\n}\r\n\r\n.selectedStripFolder {\r\n  position: absolute;\r\n  width: calc(100% + 2vw);\r\n  left: -2vw;\r\n  height: 3vh;\r\n  background-color: rgb(183, 255, 174);\r\n  opacity: 1;\r\n  display: none;\r\n}\r\n\r\n.entityNameDiv {\r\n  position: relative;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2V4cGxvcmVyL3RyZWUtdmlldy90cmVlLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDJDQUFxRTtFQUNyRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxpQ0FBMkQ7RUFDM0QsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxPQUFPO0VBQ1AsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2V4cGxvcmVyL3RyZWUtdmlldy90cmVlLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmVlRm9sZGVyTGlzdCB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMnZ3O1xyXG4gIGNvbG9yOiAjYzdjN2M3O1xyXG59XHJcblxyXG4udHJlZUZvbGRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMC45dnc7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogM3ZoO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi50cmVlRm9sZGVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDF2dztcclxuICB3aWR0aDogMXZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMC42dnc7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2V4cGxvcmVyRm9sZGVyLnBuZycpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDAuMnZ3O1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi5mb2xkZXJOYW1lIHtcclxuICBtYXJnaW4tYm90dG9tOiAuMXZoO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZm9sZGVyTmFtZTpob3ZlciA+IC5zZWxlY3RlZFN0cmlwRm9sZGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRyZWVGaWxlTGlzdCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbi5maWxlSWNvbntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmlsZS5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDkwJTtcclxufVxyXG4udHJlZUZpbGUge1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLnRyZWVGaWxlOmhvdmVyID4gLnNlbGVjdGVkU3RyaXAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5zZWxlY3RlZFN0cmlwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDN2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgzLCAyNTUsIDE3NCk7XHJcbiAgb3BhY2l0eTogMTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zZWxlY3RlZFN0cmlwRm9sZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDJ2dyk7XHJcbiAgbGVmdDogLTJ2dztcclxuICBoZWlnaHQ6IDN2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgzLCAyNTUsIDE3NCk7XHJcbiAgb3BhY2l0eTogMTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5lbnRpdHlOYW1lRGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/editor/explorer/tree-view/tree-view.component.html":
/*!********************************************************************!*\
  !*** ./src/app/editor/explorer/tree-view/tree-view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"treeFolderList\">\n  <li class=\"treeFolder\" *ngFor=\"let dir of directories\">\n      <span class=\"folderName\" (click)=\"dir.expanded = !dir.expanded\">\n        <div class=\"selectedStripFolder\"></div>\n        <div class=\"entityNameDiv\">{{ dir.name }}</div>\n      </span>\n      <div *ngIf=\"dir.expanded\">\n          <app-tree-view [directories]=\"dir.children.filter(this.filterDirectories)\"></app-tree-view>\n          <ul class=\"treeFileList\">\n              <li class=\"treeFile\" *ngFor=\"let file of dir.children.filter(this.filterFiles)\">\n                <div class=\"selectedStrip\"></div>\n                <div class=\"entityNameDiv\" (dblclick)=\"onFileClick(file.name, file.path)\">{{file.name}}</div>\n              </li>\n          </ul>\n      </div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/editor/explorer/tree-view/tree-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/editor/explorer/tree-view/tree-view.component.ts ***!
  \******************************************************************/
/*! exports provided: TreeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeViewComponent", function() { return TreeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../socket.service */ "./src/app/socket.service.ts");



var TreeViewComponent = /** @class */ (function () {
    function TreeViewComponent(socketService) {
        this.socketService = socketService;
    }
    TreeViewComponent.prototype.ngOnInit = function () {
    };
    TreeViewComponent.prototype.onFileClick = function (file, path) {
        this.socketService.requestFileContent(file, path);
    };
    TreeViewComponent.prototype.filterFiles = function (node) {
        return node.type === 'file';
    };
    TreeViewComponent.prototype.filterDirectories = function (node) {
        return node.type === 'directory';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TreeViewComponent.prototype, "directories", void 0);
    TreeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tree-view',
            template: __webpack_require__(/*! ./tree-view.component.html */ "./src/app/editor/explorer/tree-view/tree-view.component.html"),
            styles: [__webpack_require__(/*! ./tree-view.component.css */ "./src/app/editor/explorer/tree-view/tree-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]])
    ], TreeViewComponent);
    return TreeViewComponent;
}());



/***/ }),

/***/ "./src/app/editor/projectconfig.model.ts":
/*!***********************************************!*\
  !*** ./src/app/editor/projectconfig.model.ts ***!
  \***********************************************/
/*! exports provided: ProjectConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectConfig", function() { return ProjectConfig; });
var ProjectConfig = /** @class */ (function () {
    function ProjectConfig(structure) {
        console.log(structure);
        this.modifyDirectory([structure]);
        console.log(structure);
        this.directories = [structure];
    }
    ProjectConfig.prototype.modifyDirectory = function (nodes) {
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            if (node.type === 'directory') {
                node.expanded = false;
                this.modifyDirectory(node.children);
            }
        }
    };
    return ProjectConfig;
}());



/***/ }),

/***/ "./src/app/editor/sidepanel/sidepanel.component.css":
/*!**********************************************************!*\
  !*** ./src/app/editor/sidepanel/sidepanel.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidePanelContainer{\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n#sidePanelTopContainer{\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  width:100%;\r\n  height: 60%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n.sidePanelTopItem{\r\n  width:100%;\r\n  padding-bottom: 100%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 55%;\r\n  transition: background-color, box-shadow .1s linear;\r\n  cursor: pointer;\r\n}\r\n.sidePanelTopItem:hover{\r\n  background-color: rgb(122, 122, 122);\r\n  box-shadow: 0 0 5px .1px;\r\n}\r\n#explorerIcon{\r\n  background-image: url('explorer.png');\r\n  background-size: 50%;\r\n}\r\n#gitIcon{\r\n  background-image: url('github.png');\r\n}\r\n#sidePanelBottomContainer{\r\n  position: absolute;\r\n  top:60%;\r\n  left:0;\r\n  width:100%;\r\n  height: 40%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n.sidePanelBottomItem{\r\n  width:100%;\r\n  padding-bottom: 100%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 55%;\r\n  transition: background-color, box-shadow .1s linear;\r\n  cursor: pointer;\r\n}\r\n.sidePanelBottomItem:hover{\r\n  background-color: rgb(122, 122, 122);\r\n  box-shadow: 0 0 5px .1px;\r\n}\r\n#settingsIcon{\r\n  background-image: url('settingslarge.png');\r\n  background-size: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL3NpZGVwYW5lbC9zaWRlcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixLQUFLO0VBQ0wsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixLQUFLO0VBQ0wsTUFBTTtFQUNOLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixtREFBbUQ7RUFDbkQsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UscUNBQTREO0VBQzVELG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsbUNBQTBEO0FBQzVEO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsbURBQW1EO0VBQ25ELGVBQWU7QUFDakI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLDBDQUFpRTtFQUNqRSxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3Ivc2lkZXBhbmVsL3NpZGVwYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZGVQYW5lbENvbnRhaW5lcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4jc2lkZVBhbmVsVG9wQ29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zaWRlUGFuZWxUb3BJdGVte1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA1NSU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdyAuMXMgbGluZWFyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2lkZVBhbmVsVG9wSXRlbTpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxMjIsIDEyMik7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAuMXB4O1xyXG59XHJcbiNleHBsb3Jlckljb257XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2V4cGxvcmVyLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNTAlO1xyXG59XHJcbiNnaXRJY29ue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9naXRodWIucG5nJyk7XHJcbn1cclxuI3NpZGVQYW5lbEJvdHRvbUNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjYwJTtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6IDQwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2lkZVBhbmVsQm90dG9tSXRlbXtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNTUlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3cgLjFzIGxpbmVhcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNpZGVQYW5lbEJvdHRvbUl0ZW06aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMiwgMTIyLCAxMjIpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggLjFweDtcclxufVxyXG4jc2V0dGluZ3NJY29ue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zZXR0aW5nc2xhcmdlLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNTAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/editor/sidepanel/sidepanel.component.html":
/*!***********************************************************!*\
  !*** ./src/app/editor/sidepanel/sidepanel.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidePanelContainer\">\n  <div id=\"sidePanelTopContainer\">\n    <div id=\"explorerIcon\" class=\"sidePanelTopItem\"></div>\n    <div id=\"gitIcon\" class=\"sidePanelTopItem\"></div>\n  </div>\n  <div id=\"sidePanelBottomContainer\">\n    <div id=\"settingsIcon\" class=\"sidePanelBottomItem\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/sidepanel/sidepanel.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/editor/sidepanel/sidepanel.component.ts ***!
  \*********************************************************/
/*! exports provided: SidepanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidepanelComponent", function() { return SidepanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidepanelComponent = /** @class */ (function () {
    function SidepanelComponent() {
    }
    SidepanelComponent.prototype.ngOnInit = function () {
    };
    SidepanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidepanel',
            template: __webpack_require__(/*! ./sidepanel.component.html */ "./src/app/editor/sidepanel/sidepanel.component.html"),
            styles: [__webpack_require__(/*! ./sidepanel.component.css */ "./src/app/editor/sidepanel/sidepanel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidepanelComponent);
    return SidepanelComponent;
}());



/***/ }),

/***/ "./src/app/editor/statusbar/statusbar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/editor/statusbar/statusbar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9zdGF0dXNiYXIvc3RhdHVzYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/editor/statusbar/statusbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/editor/statusbar/statusbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  statusbar works!\n</p>\n"

/***/ }),

/***/ "./src/app/editor/statusbar/statusbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/editor/statusbar/statusbar.component.ts ***!
  \*********************************************************/
/*! exports provided: StatusbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusbarComponent", function() { return StatusbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatusbarComponent = /** @class */ (function () {
    function StatusbarComponent() {
    }
    StatusbarComponent.prototype.ngOnInit = function () {
    };
    StatusbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statusbar',
            template: __webpack_require__(/*! ./statusbar.component.html */ "./src/app/editor/statusbar/statusbar.component.html"),
            styles: [__webpack_require__(/*! ./statusbar.component.css */ "./src/app/editor/statusbar/statusbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatusbarComponent);
    return StatusbarComponent;
}());



/***/ }),

/***/ "./src/app/editor/tabs/nodeeditor/nodeeditor.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/editor/tabs/nodeeditor/nodeeditor.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainCanvas {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  background: radial-gradient(#000000, #101010, #202020, #303030);\r\n}\r\n#nodeEditorContainer {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n#toolboxContainer {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  text-align: center;\r\n  top: 0;\r\n  left: -20%;\r\n  width: 20%;\r\n  height: 100%;\r\n  background-color: #fff;\r\n  box-shadow: #353535 0px 0px 10px 2px;\r\n  z-index: 10;\r\n  transition-property: left;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\r\n}\r\n.toolboxItem {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 85%;\r\n  height: 5%;\r\n  margin-top: 3%;\r\n  background-color: #ccc;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: Arial;\r\n  font-size: .8em;\r\n  cursor: pointer;\r\n}\r\n#toolboxIcon{\r\n  position: absolute;\r\n  top:0;\r\n  left: 100%;\r\n  width: 2vh;\r\n  height: 2vh;\r\n  cursor: pointer;\r\n  background-image: url('tool.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 90%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL3RhYnMvbm9kZWVkaXRvci9ub2RlZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLCtEQUErRDtBQUNqRTtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLE1BQU07QUFDUjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixVQUFVO0VBQ1YsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixLQUFLO0VBQ0wsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlDQUEyRDtFQUMzRCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci90YWJzL25vZGVlZGl0b3Ivbm9kZWVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW5DYW52YXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCMwMDAwMDAsICMxMDEwMTAsICMyMDIwMjAsICMzMDMwMzApO1xyXG59XHJcbiNub2RlRWRpdG9yQ29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcbiN0b29sYm94Q29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogLTIwJTtcclxuICB3aWR0aDogMjAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6ICMzNTM1MzUgMHB4IDBweCAxMHB4IDJweDtcclxuICB6LWluZGV4OiAxMDtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG59XHJcbi50b29sYm94SXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgaGVpZ2h0OiA1JTtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICBmb250LXNpemU6IC44ZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiN0b29sYm94SWNvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDogMTAwJTtcclxuICB3aWR0aDogMnZoO1xyXG4gIGhlaWdodDogMnZoO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdG9vbC5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDkwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/editor/tabs/nodeeditor/nodeeditor.component.html":
/*!******************************************************************!*\
  !*** ./src/app/editor/tabs/nodeeditor/nodeeditor.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #nodeEditorContainer id=\"nodeEditorContainer\">\n  <div #toolboxContainer id=\"toolboxContainer\">\n    <div id=\"toolboxIcon\" (click)=\"toolboxClicked()\"></div>\n    <div class=\"toolboxItem\" draggable=\"true\">String</div>\n  </div>\n  <div id=\"nodeEditor\">\n    <canvas id=\"mainCanvas\" #canvas></canvas>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/tabs/nodeeditor/nodeeditor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/editor/tabs/nodeeditor/nodeeditor.component.ts ***!
  \****************************************************************/
/*! exports provided: NodeeditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeeditorComponent", function() { return NodeeditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NodeeditorComponent = /** @class */ (function () {
    function NodeeditorComponent() {
        this.aspect = null;
        this.isPlaying = false;
        this.content = '';
    }
    NodeeditorComponent_1 = NodeeditorComponent;
    NodeeditorComponent.resetContextAttr = function () {
        NodeeditorComponent_1.context.shadowColor = '#000';
        NodeeditorComponent_1.context.shadowBlur = 0;
        NodeeditorComponent_1.context.fillStyle = '#000';
        NodeeditorComponent_1.context.strokeStyle = '#000';
        NodeeditorComponent_1.context.lineWidth = '1';
        NodeeditorComponent_1.context.lineCap = 'butt';
        NodeeditorComponent_1.context.font = '15px Arial';
        NodeeditorComponent_1.context.lineStyle = '#000';
    };
    NodeeditorComponent.ultimateRedraw = function () {
        for (var i = 0; i < NodeeditorComponent_1.nodes.length; i++) {
            NodeeditorComponent_1.nodes[i].redraw();
        }
        for (var i = 0; i < NodeeditorComponent_1.connectors.length; i++) {
            NodeeditorComponent_1.connectors[i].redraw(NodeeditorComponent_1.connectors[i].terminalEnd.x, NodeeditorComponent_1.connectors[i].terminalEnd.y);
        }
    };
    NodeeditorComponent.getNewGUID = function () {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
    };
    NodeeditorComponent.getMousePos = function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };
    NodeeditorComponent.ultimateRedrawWithDelta = function (delta) {
        for (var i = 0; i < NodeeditorComponent_1.nodes.length; i++) {
            NodeeditorComponent_1.nodes[i].x = NodeeditorComponent_1.nodes[i].x + delta.x;
            NodeeditorComponent_1.nodes[i].y = NodeeditorComponent_1.nodes[i].y + delta.y;
            NodeeditorComponent_1.nodes[i].redraw();
        }
        for (var i = 0; i < NodeeditorComponent_1.connectors.length; i++) {
            NodeeditorComponent_1.connectors[i].redraw(NodeeditorComponent_1.connectors[i].terminalEnd.x, NodeeditorComponent_1.connectors[i].terminalEnd.y);
        }
    };
    NodeeditorComponent.prototype.ngOnInit = function () {
        this.content = this.tabName;
    };
    NodeeditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        NodeeditorComponent_1.canvasElement = this.canvas.nativeElement;
        this.canvas.nativeElement.width = this.nodeEditorContainer.nativeElement.clientWidth;
        this.canvas.nativeElement.height = this.nodeEditorContainer.nativeElement.clientHeight;
        this.canvas.nativeElement.height = this.canvas.nativeElement.clientHeight;
        NodeeditorComponent_1.context = this.canvas.nativeElement.getContext('2d');
        this.aspect = this.canvas.nativeElement.width / this.canvas.nativeElement.height;
        NodeeditorComponent_1.WIDTH = this.canvas.nativeElement.width;
        NodeeditorComponent_1.HEIGHT = this.canvas.nativeElement.height;
        console.log('Canvas Dimensions: ' +
            NodeeditorComponent_1.WIDTH +
            ' ' +
            NodeeditorComponent_1.HEIGHT);
        NodeeditorComponent_1.globalTootipFontSize = NodeeditorComponent_1.WIDTH * 0.012;
        NodeeditorComponent_1.globalTerminalOffset = NodeeditorComponent_1.WIDTH * 0.01;
        NodeeditorComponent_1.globalBaseHeight = NodeeditorComponent_1.WIDTH * 0.1 * 0.25;
        NodeeditorComponent_1.globalToggleButtonRadius = NodeeditorComponent_1.WIDTH * 0.007;
        NodeeditorComponent_1.globalConnectorBezeirOffset = NodeeditorComponent_1.WIDTH * 0.06;
        NodeeditorComponent_1.globalConnectorWidth = NodeeditorComponent_1.WIDTH * 0.006;
        NodeeditorComponent_1.context.roundRect = function (x, y, width, height, radius) {
            if (typeof radius === 'undefined') {
                radius = 5;
            }
            NodeeditorComponent_1.context.beginPath();
            NodeeditorComponent_1.context.moveTo(x - (width / 2) + radius, y - (height / 2));
            NodeeditorComponent_1.context.lineTo(x - (width / 2) + width - radius, y - (height / 2));
            NodeeditorComponent_1.context.quadraticCurveTo(x - (width / 2) + width, y - (height / 2), x - (width / 2) + width, y - (height / 2) + radius);
            NodeeditorComponent_1.context.lineTo(x - (width / 2) + width, y - (height / 2) + height - radius);
            NodeeditorComponent_1.context.quadraticCurveTo(x - (width / 2) + width, y - (height / 2) + height, x - (width / 2) + width - radius, y - (height / 2) + height);
            NodeeditorComponent_1.context.lineTo(x - (width / 2) + radius, y - (height / 2) + height);
            NodeeditorComponent_1.context.quadraticCurveTo(x - (width / 2), y - (height / 2) + height, x - (width / 2), y - (height / 2) + height - radius);
            NodeeditorComponent_1.context.lineTo(x - (width / 2), y - (height / 2) + radius);
            NodeeditorComponent_1.context.quadraticCurveTo(x - (width / 2), y - (height / 2), x - (width / 2) + radius, y - (height / 2));
            NodeeditorComponent_1.context.closePath();
        };
        document.addEventListener('dragstart', function (event) {
            event.dataTransfer.setData('Text', event.target.innerHTML);
        });
        this.canvas.nativeElement.addEventListener('dragover', function (event) {
            event.preventDefault();
        }, true);
        this.canvas.nativeElement.addEventListener('drop', function (event) {
            NodeeditorComponent_1.globalScaleRatio = (NodeeditorComponent_1.nodes.length > 0) ? NodeeditorComponent_1.nodes[0].scaleRatio : 1;
            event.preventDefault();
            var draggedItemText = event.dataTransfer.getData('Text');
            var pos = NodeeditorComponent_1.getMousePos(_this.canvas.nativeElement, event);
            if (draggedItemText === 'String') {
                var newBoolean = new VarString(pos.x, pos.y, NodeeditorComponent_1.WIDTH * 0.15 * NodeeditorComponent_1.globalScaleRatio, NodeeditorComponent_1.WIDTH * 0.1 * 0.4 * NodeeditorComponent_1.globalScaleRatio, NodeeditorComponent_1.nodes.length);
                NodeeditorComponent_1.nodes.push(newBoolean);
            }
            console.log(draggedItemText);
        }, true);
        this.canvas.nativeElement.addEventListener('click', function () { }, true);
        this.canvas.nativeElement.addEventListener('mousewheel', function (e) {
            if (e.wheelDelta < 0) {
                NodeeditorComponent_1.gSFactor = NodeeditorComponent_1.downScaleStep;
                // globalScaleDelta -= 1; //experimental
            }
            else if (e.wheelDelta > 0) {
                NodeeditorComponent_1.gSFactor = NodeeditorComponent_1.upScaleStep;
                // globalScaleDelta += 1; //experimental
            }
            // console.log(gSFactor);
            var pos = NodeeditorComponent_1.getMousePos(_this.canvas.nativeElement, e);
            NodeeditorComponent_1.globalTootipFontSize *= NodeeditorComponent_1.gSFactor;
            NodeeditorComponent_1.globalTerminalOffset *= NodeeditorComponent_1.gSFactor;
            NodeeditorComponent_1.globalBaseHeight *= NodeeditorComponent_1.gSFactor;
            NodeeditorComponent_1.globalToggleButtonRadius *= NodeeditorComponent_1.gSFactor;
            NodeeditorComponent_1.globalConnectorBezeirOffset *= NodeeditorComponent_1.gSFactor;
            NodeeditorComponent_1.globalConnectorWidth *= NodeeditorComponent_1.gSFactor;
            for (var l = 0; l < NodeeditorComponent_1.nodes.length; l++) {
                if (NodeeditorComponent_1.nodes[l].x > pos.x && NodeeditorComponent_1.nodes[l].y > pos.y) {
                    NodeeditorComponent_1.nodes[l].x = (pos.x + NodeeditorComponent_1.gSFactor * (Math.abs(pos.x - NodeeditorComponent_1.nodes[l].x)));
                    NodeeditorComponent_1.nodes[l].y = (pos.y + NodeeditorComponent_1.gSFactor * (Math.abs(pos.y - NodeeditorComponent_1.nodes[l].y)));
                }
                else if (NodeeditorComponent_1.nodes[l].x > pos.x && NodeeditorComponent_1.nodes[l].y < pos.y) {
                    NodeeditorComponent_1.nodes[l].x = (pos.x + NodeeditorComponent_1.gSFactor * (Math.abs(pos.x - NodeeditorComponent_1.nodes[l].x)));
                    NodeeditorComponent_1.nodes[l].y = (pos.y - NodeeditorComponent_1.gSFactor * (Math.abs(pos.y - NodeeditorComponent_1.nodes[l].y)));
                }
                else if (NodeeditorComponent_1.nodes[l].x < pos.x && NodeeditorComponent_1.nodes[l].y > pos.y) {
                    NodeeditorComponent_1.nodes[l].x = (pos.x - NodeeditorComponent_1.gSFactor * (Math.abs(pos.x - NodeeditorComponent_1.nodes[l].x)));
                    NodeeditorComponent_1.nodes[l].y = (pos.y + NodeeditorComponent_1.gSFactor * (Math.abs(pos.y - NodeeditorComponent_1.nodes[l].y)));
                }
                else if (NodeeditorComponent_1.nodes[l].x < pos.x && NodeeditorComponent_1.nodes[l].y < pos.y) {
                    NodeeditorComponent_1.nodes[l].x = (pos.x - NodeeditorComponent_1.gSFactor * (Math.abs(pos.x - NodeeditorComponent_1.nodes[l].x)));
                    NodeeditorComponent_1.nodes[l].y = (pos.y - NodeeditorComponent_1.gSFactor * (Math.abs(pos.y - NodeeditorComponent_1.nodes[l].y)));
                }
            }
            for (var i = 0; i < NodeeditorComponent_1.nodes.length; i++) {
                NodeeditorComponent_1.nodes[i].scale();
            }
            NodeeditorComponent_1.context.clearRect(0, 0, NodeeditorComponent_1.WIDTH, NodeeditorComponent_1.HEIGHT);
            NodeeditorComponent_1.ultimateRedraw();
        }, true);
        this.canvas.nativeElement.addEventListener('mousedown', function (event) {
            if (event.which === 1) {
                // console.log("mousedown");
                var inbounds = [];
                var pos = NodeeditorComponent_1.getMousePos(_this.canvas.nativeElement, event);
                for (var i = 0; i < NodeeditorComponent_1.nodes.length; i++) {
                    if (NodeeditorComponent_1.nodes[i].checkBounds(pos.x, pos.y)) {
                        inbounds.push(NodeeditorComponent_1.nodes[i]);
                    }
                }
                var highestOrder_1 = Math.max.apply(Math, inbounds.map(function (o) { return o.order; }));
                var node = inbounds.find(function (o) { return o.order === highestOrder_1; });
                if ((node != null) && (NodeeditorComponent_1.nodeDragFlag === 0) && !NodeeditorComponent_1.isContextMenuOpened) {
                    NodeeditorComponent_1.currentDragNode = node;
                    NodeeditorComponent_1.dragDelta.x = NodeeditorComponent_1.currentDragNode.x - pos.x;
                    NodeeditorComponent_1.dragDelta.y = NodeeditorComponent_1.currentDragNode.y - pos.y;
                }
                if (node != null && (node.type === 'Bitcrusher' || node.type === 'Moog' || node.type === 'Panner' || node.type === 'Oscillator' || node.type === 'FrequencyAnalyser' || node.type === 'WaveformAnalyser' || node.type === 'SpectrogramAnalyser')) {
                    var slider = null;
                    if ((slider = node.checkSliderBounds(pos.x, pos.y)) != null) {
                        NodeeditorComponent_1.currSlider = slider;
                        NodeeditorComponent_1.sliderDragFlag = 1;
                    }
                }
                if (node == null) {
                    NodeeditorComponent_1.panStart.x = pos.x;
                    NodeeditorComponent_1.panStart.y = pos.y;
                    NodeeditorComponent_1.panFlag = 1;
                }
            }
        }, true);
        this.canvas.nativeElement.addEventListener('mousemove', function (event) {
            // console.log("mousemove");
            NodeeditorComponent_1.mousePos = NodeeditorComponent_1.getMousePos(_this.canvas.nativeElement, event);
            if (NodeeditorComponent_1.terminalStartFlag === 1) {
                NodeeditorComponent_1.context.clearRect(0, 0, NodeeditorComponent_1.WIDTH, NodeeditorComponent_1.HEIGHT);
                NodeeditorComponent_1.currentConnector.redraw(NodeeditorComponent_1.mousePos.x, NodeeditorComponent_1.mousePos.y);
                NodeeditorComponent_1.ultimateRedraw();
            }
            if (NodeeditorComponent_1.currentDragNode != null && NodeeditorComponent_1.sliderDragFlag === 0 && !NodeeditorComponent_1.isContextMenuOpened) {
                NodeeditorComponent_1.nodeDragFlag = 1;
                NodeeditorComponent_1.currentDragNode.x = NodeeditorComponent_1.mousePos.x + NodeeditorComponent_1.dragDelta.x;
                NodeeditorComponent_1.currentDragNode.y = NodeeditorComponent_1.mousePos.y + NodeeditorComponent_1.dragDelta.y;
                NodeeditorComponent_1.context.clearRect(0, 0, NodeeditorComponent_1.WIDTH, NodeeditorComponent_1.HEIGHT);
                NodeeditorComponent_1.ultimateRedraw();
            }
            if (NodeeditorComponent_1.sliderDragFlag === 1) {
                NodeeditorComponent_1.currSlider.slide(NodeeditorComponent_1.mousePos.x);
                NodeeditorComponent_1.context.clearRect(0, 0, NodeeditorComponent_1.WIDTH, NodeeditorComponent_1.HEIGHT);
                NodeeditorComponent_1.ultimateRedraw();
            }
            if (NodeeditorComponent_1.panFlag === 1) {
                NodeeditorComponent_1.panDelta.x = NodeeditorComponent_1.mousePos.x - NodeeditorComponent_1.panStart.x;
                NodeeditorComponent_1.panDelta.y = NodeeditorComponent_1.mousePos.y - NodeeditorComponent_1.panStart.y;
                NodeeditorComponent_1.panStart.x = NodeeditorComponent_1.mousePos.x;
                NodeeditorComponent_1.panStart.y = NodeeditorComponent_1.mousePos.y;
                // redraw everything according to panDelta
                NodeeditorComponent_1.context.clearRect(0, 0, NodeeditorComponent_1.WIDTH, NodeeditorComponent_1.HEIGHT);
                NodeeditorComponent_1.ultimateRedrawWithDelta(NodeeditorComponent_1.panDelta);
            }
        }, true);
        this.canvas.nativeElement.addEventListener('mouseup', function (event) {
            var pos = NodeeditorComponent_1.getMousePos(_this.canvas.nativeElement, event);
            if (event.which === 1) {
                // console.log("mouseup");
                if (NodeeditorComponent_1.nodeDragFlag === 1) {
                    // console.log("node drag ended");
                    // node was being dragged
                    NodeeditorComponent_1.currentDragNode = null;
                    NodeeditorComponent_1.nodeDragFlag = 0;
                }
                else if (NodeeditorComponent_1.sliderDragFlag === 1) {
                    // console.log("slider drag ended");
                    // slider was being dragged
                    NodeeditorComponent_1.sliderDragFlag = 0;
                    NodeeditorComponent_1.currSlider = null;
                    NodeeditorComponent_1.currentDragNode = null;
                    NodeeditorComponent_1.context.clearRect(0, 0, NodeeditorComponent_1.WIDTH, NodeeditorComponent_1.HEIGHT);
                    NodeeditorComponent_1.ultimateRedraw();
                }
                else if (NodeeditorComponent_1.panFlag === 1) {
                    NodeeditorComponent_1.panFlag = 0;
                    NodeeditorComponent_1.panDelta.x = NodeeditorComponent_1.panDelta.y = NodeeditorComponent_1.panStart.x = NodeeditorComponent_1.panStart.y = 0;
                }
                else {
                    // something is not being dragged (which means something is clicked)
                    if (NodeeditorComponent_1.isContextMenuOpened) {
                        if (pos.x > (NodeeditorComponent_1.currentContextMenu.x - NodeeditorComponent_1.currentContextMenu.width / 2) && pos.x < (NodeeditorComponent_1.currentContextMenu.x + NodeeditorComponent_1.currentContextMenu.width / 2) && pos.y > (NodeeditorComponent_1.currentContextMenu.y - NodeeditorComponent_1.currentContextMenu.height / 2) && pos.y < (NodeeditorComponent_1.currentContextMenu.y + NodeeditorComponent_1.currentContextMenu.height / 2)) {
                            NodeeditorComponent_1.currentContextMenu.clicked(pos.x, pos.y);
                        }
                        NodeeditorComponent_1.isContextMenuOpened = false;
                        NodeeditorComponent_1.currentContextMenu = null;
                        NodeeditorComponent_1.currNodeInContextMenu = null;
                        NodeeditorComponent_1.context.clearRect(0, 0, NodeeditorComponent_1.WIDTH, NodeeditorComponent_1.HEIGHT);
                        NodeeditorComponent_1.ultimateRedraw();
                        return;
                    }
                    var inbounds = [];
                    for (var i = 0; i < NodeeditorComponent_1.nodes.length; i++) {
                        if (NodeeditorComponent_1.nodes[i].checkBounds(pos.x, pos.y)) {
                            inbounds.push(NodeeditorComponent_1.nodes[i]);
                        }
                    }
                    var highestOrder_2 = Math.max.apply(Math, inbounds.map(function (o) { return o.order; }));
                    var node = inbounds.find(function (o) { return o.order === highestOrder_2; });
                    if (node != null) {
                        node.clicked(pos.x, pos.y);
                    }
                    NodeeditorComponent_1.currentDragNode = null;
                }
            }
            else if (event.which === 3) {
                if (NodeeditorComponent_1.isContextMenuOpened) {
                    NodeeditorComponent_1.context.clearRect(0, 0, NodeeditorComponent_1.WIDTH, NodeeditorComponent_1.HEIGHT);
                    NodeeditorComponent_1.ultimateRedraw();
                }
                NodeeditorComponent_1.isContextMenuOpened = true;
                var inbounds = [];
                for (var i = 0; i < NodeeditorComponent_1.nodes.length; i++) {
                    if (NodeeditorComponent_1.nodes[i].checkBounds(pos.x, pos.y)) {
                        inbounds.push(NodeeditorComponent_1.nodes[i]);
                    }
                }
                var highestOrder_3 = Math.max.apply(Math, inbounds.map(function (o) { return o.order; }));
                var node = inbounds.find(function (o) { return o.order === highestOrder_3; });
                if (node != null) {
                    NodeeditorComponent_1.currNodeInContextMenu = node;
                    NodeeditorComponent_1.currentContextMenu = new ContextMenu(pos.x, pos.y, NodeeditorComponent_1.WIDTH * 0.07, NodeeditorComponent_1.WIDTH * 0.07 * 0.25, ['Delete']);
                }
            }
        }, true);
        this.canvas.nativeElement.addEventListener('contextmenu', function (event) { event.preventDefault(); }, true);
    };
    NodeeditorComponent.prototype.toolboxClicked = function () {
        NodeeditorComponent_1.isToolboxOpened = !NodeeditorComponent_1.isToolboxOpened;
        if (NodeeditorComponent_1.isToolboxOpened) {
            this.toolboxContainer.nativeElement.style.left = '0';
        }
        else {
            this.toolboxContainer.nativeElement.style.left = '-20%';
        }
    };
    var NodeeditorComponent_1;
    NodeeditorComponent.context = null;
    NodeeditorComponent.currNodeInContextMenu = null;
    NodeeditorComponent.WIDTH = null;
    NodeeditorComponent.HEIGHT = null;
    NodeeditorComponent.nodes = [];
    NodeeditorComponent.connectors = [];
    NodeeditorComponent.globalTootipFontSize = null;
    NodeeditorComponent.terminalStartFlag = 0;
    NodeeditorComponent.currentConnector = null;
    NodeeditorComponent.globalConnectorBezeirOffset = null;
    NodeeditorComponent.globalConnectorWidth = null;
    NodeeditorComponent.globalTerminalOffset = null;
    NodeeditorComponent.gSFactor = 1.0;
    NodeeditorComponent.canvasElement = null;
    NodeeditorComponent.isToolboxOpened = false;
    NodeeditorComponent.globalScaleRatio = 1;
    NodeeditorComponent.downScaleStep = 0.9;
    NodeeditorComponent.upScaleStep = 1.1;
    NodeeditorComponent.globalBaseHeight = null;
    NodeeditorComponent.globalToggleButtonRadius = null;
    NodeeditorComponent.nodeDragFlag = 0;
    NodeeditorComponent.isContextMenuOpened = false;
    NodeeditorComponent.currentDragNode = null;
    NodeeditorComponent.dragDelta = { x: 0, y: 0 };
    NodeeditorComponent.sliderDragFlag = 0;
    NodeeditorComponent.currSlider = null;
    NodeeditorComponent.panStart = { x: 0, y: 0 };
    NodeeditorComponent.panDelta = { x: 0, y: 0 };
    NodeeditorComponent.panFlag = 0;
    NodeeditorComponent.currentContextMenu = null;
    NodeeditorComponent.mousePos = {
        x: 0,
        y: 0
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nodeEditorContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NodeeditorComponent.prototype, "nodeEditorContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toolboxContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NodeeditorComponent.prototype, "toolboxContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NodeeditorComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NodeeditorComponent.prototype, "tabName", void 0);
    NodeeditorComponent = NodeeditorComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nodeeditor',
            template: __webpack_require__(/*! ./nodeeditor.component.html */ "./src/app/editor/tabs/nodeeditor/nodeeditor.component.html"),
            styles: [__webpack_require__(/*! ./nodeeditor.component.css */ "./src/app/editor/tabs/nodeeditor/nodeeditor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NodeeditorComponent);
    return NodeeditorComponent;
}());

var ContextMenu = /** @class */ (function () {
    function ContextMenu(x, y, width, baseHeight, operations) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.baseHeight = baseHeight;
        this.radius = this.baseHeight / 3;
        this.noOfOptions = operations.length;
        this.operations = operations;
        this.fontSize = this.baseHeight * 0.45;
        this.height = this.baseHeight * this.noOfOptions;
        this.draw();
    }
    ContextMenu.prototype.draw = function () {
        NodeeditorComponent.context.roundRect(this.x, this.y, this.width, this.height, this.radius);
        NodeeditorComponent.resetContextAttr();
        NodeeditorComponent.context.shadowColor = '#ffffff';
        NodeeditorComponent.context.shadowBlur = 10;
        NodeeditorComponent.context.fillStyle = '#696969';
        NodeeditorComponent.context.lineWidth = '0';
        NodeeditorComponent.context.strokeStyle = '#000';
        NodeeditorComponent.context.fill();
        NodeeditorComponent.context.stroke();
        NodeeditorComponent.context.font = this.fontSize + 'px arial';
        NodeeditorComponent.context.shadowBlur = 0;
        NodeeditorComponent.context.fillStyle = '#000';
        for (var i = 0; i < this.noOfOptions; i++) {
            NodeeditorComponent.context.fillText(this.operations[i], this.x -
                NodeeditorComponent.context.measureText(this.operations[i]).width / 2, this.y + this.baseHeight * i + this.fontSize / 3);
        }
    };
    ContextMenu.prototype.clicked = function (x, y) {
        var resultOption = Math.floor((y - (this.y - this.baseHeight / 2)) / this.baseHeight);
        NodeeditorComponent.currNodeInContextMenu.executeContextOption(this.operations[resultOption]);
    };
    return ContextMenu;
}());
var ToggleGroup = /** @class */ (function () {
    function ToggleGroup(x, y, width, height, values, index) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.values = values;
        this.noOfToggles = values.length;
        this.toggles = [];
        for (var i = 0; i < this.noOfToggles; i++) {
            this.toggles.push({ x: 0, y: 0 });
        }
        this.togglesWidth = (this.height / 2) * 0.8;
        this.togglesHeight = (this.height / 2) * 0.8;
        this.activeValue = this.values[index];
        this.redraw();
    }
    ToggleGroup.prototype.redraw = function () {
        this.togglesWidth = (this.height / 2) * 0.8;
        this.togglesHeight = (this.height / 2) * 0.8;
        for (var j = 0; j < this.noOfToggles; j++) {
            this.toggles[j].x =
                this.x +
                    j * (this.width / this.noOfToggles) +
                    this.width / (2 * this.noOfToggles);
            this.toggles[j].y = this.y;
        }
        NodeeditorComponent.resetContextAttr();
        NodeeditorComponent.context.lineStyle = '#000';
        for (var i = 0; i < this.noOfToggles; i++) {
            NodeeditorComponent.context.beginPath();
            if (this.values[i] === this.activeValue) {
                NodeeditorComponent.context.fillStyle = '#00ff00';
            }
            else {
                NodeeditorComponent.context.fillStyle = '#ff0000';
            }
            NodeeditorComponent.context.rect(this.toggles[i].x - this.togglesWidth / 2, this.toggles[i].y - this.togglesHeight / 2, this.togglesWidth, this.togglesHeight);
            NodeeditorComponent.context.fill();
            NodeeditorComponent.context.stroke();
        }
    };
    ToggleGroup.prototype.clicked = function (x, y) {
        for (var i = 0; i < this.noOfToggles; i++) {
            if (x > this.toggles[i].x - this.togglesWidth / 2 &&
                x < this.toggles[i].x + this.togglesWidth / 2 &&
                y > this.toggles[i].y - this.togglesHeight / 2 &&
                y < this.toggles[i].y + this.togglesHeight / 2) {
                this.activeValue = this.values[i];
                NodeeditorComponent.context.clearRect(0, 0, NodeeditorComponent.WIDTH, NodeeditorComponent.HEIGHT);
                NodeeditorComponent.ultimateRedraw();
                break;
            }
        }
    };
    return ToggleGroup;
}());
var Slider = /** @class */ (function () {
    function Slider(x1, x2, y, value, thumbRadius, railHeight, min, max) {
        this.x1 = x1;
        this.x2 = x2;
        this.y = y;
        this.value = value;
        this.min = min;
        this.max = max;
        this.length = this.x2 - this.x1;
        this.thumbRadius = thumbRadius;
        this.railHeight = railHeight;
        this.thumbPosition = { x: 0, y: 0 };
        this.thumbPosition.x =
            ((this.value - this.min) / (this.max - this.min)) * (this.x2 - this.x1) +
                this.x1;
        this.thumbPosition.y = this.y + this.railHeight;
        this.redraw();
    }
    Slider.prototype.redraw = function () {
        NodeeditorComponent.context.beginPath();
        NodeeditorComponent.resetContextAttr();
        NodeeditorComponent.context.lineStyle = '#d4d4d4ff';
        NodeeditorComponent.context.lineWidth = '1';
        NodeeditorComponent.context.fillStyle = '#d4d4d4ff';
        NodeeditorComponent.context.rect(this.x1, this.y + this.railHeight / 2, this.x2 - this.x1, this.railHeight);
        NodeeditorComponent.context.fill();
        NodeeditorComponent.context.stroke();
        NodeeditorComponent.context.beginPath();
        NodeeditorComponent.resetContextAttr();
        NodeeditorComponent.context.shadowColor = '#000';
        NodeeditorComponent.context.shadowBlur = 5;
        NodeeditorComponent.context.fillStyle = '#000000ff';
        NodeeditorComponent.context.strokeStyle = '#000';
        this.thumbPosition.x =
            ((this.value - this.min) / (this.max - this.min)) * (this.x2 - this.x1) +
                this.x1;
        this.thumbPosition.y = this.y + this.railHeight;
        NodeeditorComponent.context.arc(this.thumbPosition.x, this.thumbPosition.y, this.thumbRadius, 0, 2 * Math.PI);
        NodeeditorComponent.context.fill();
        NodeeditorComponent.context.stroke();
    };
    Slider.prototype.slide = function (x) {
        if (x < this.x1) {
            this.value = this.min;
        }
        else if (x > this.x2) {
            this.value = this.max;
        }
        else {
            this.value =
                ((x - this.x1) / (this.x2 - this.x1)) * (this.max - this.min) +
                    this.min;
        }
    };
    return Slider;
}());
var ToggleButton = /** @class */ (function () {
    function ToggleButton(x, y, radius, parent) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.parent = parent;
        this.redraw();
    }
    ToggleButton.prototype.redraw = function () {
        NodeeditorComponent.context.beginPath();
        NodeeditorComponent.resetContextAttr();
        if (this.parent.bypass) {
            NodeeditorComponent.context.shadowColor = '#00ff00';
            NodeeditorComponent.context.fillStyle = '#00ff00ff';
        }
        else {
            NodeeditorComponent.context.shadowColor = '#ff0000';
            NodeeditorComponent.context.fillStyle = '#ff0000ff';
        }
        NodeeditorComponent.context.shadowBlur = 5;
        NodeeditorComponent.context.strokeStyle = '#000';
        NodeeditorComponent.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        NodeeditorComponent.context.fill();
        NodeeditorComponent.context.stroke();
        NodeeditorComponent.context.beginPath();
        NodeeditorComponent.context.arc(this.x, this.y, this.radius * 0.6, 0, 2 * Math.PI);
        NodeeditorComponent.context.stroke();
    };
    ToggleButton.prototype.clicked = function () {
        if (this.parent.bypass) {
            this.parent.bypass = 0;
        }
        else {
            this.parent.bypass = 1;
        }
        NodeeditorComponent.context.clearRect(0, 0, NodeeditorComponent.WIDTH, NodeeditorComponent.HEIGHT);
        NodeeditorComponent.ultimateRedraw();
    };
    return ToggleButton;
}());
var Tooltip = /** @class */ (function () {
    function Tooltip(x, y, text, parent) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.parent = parent;
        this.redraw();
    }
    Tooltip.prototype.redraw = function () {
        NodeeditorComponent.context.beginPath();
        NodeeditorComponent.resetContextAttr();
        NodeeditorComponent.context.font = NodeeditorComponent.globalTootipFontSize + 'px Arial';
        NodeeditorComponent.context.fillStyle = '#ffffffff';
        NodeeditorComponent.context.fillText(this.text, this.x - NodeeditorComponent.context.measureText(this.text).width / 2, this.y);
    };
    return Tooltip;
}());
var Connector = /** @class */ (function () {
    function Connector(terminalStart, terminalStartNode) {
        this.terminalStart = terminalStart;
        this.terminalStartNode = terminalStartNode;
        this.x1 = terminalStart.x;
        this.y1 = terminalStart.y;
        this.guid = NodeeditorComponent.getNewGUID();
    }
    Connector.prototype.redraw = function (x2, y2) {
        NodeeditorComponent.context.beginPath();
        this.x1 = this.terminalStart.x;
        this.y1 = this.terminalStart.y;
        this.x2 = x2;
        this.y2 = y2;
        this.x11 = this.x1 + NodeeditorComponent.globalConnectorBezeirOffset;
        this.y11 = this.y1;
        this.x22 = this.x2 - NodeeditorComponent.globalConnectorBezeirOffset;
        this.y22 = this.y2;
        this.xmid = (this.x11 + this.x22) / 2;
        this.ymid = (this.y11 + this.y22) / 2;
        NodeeditorComponent.context.moveTo(this.x1, this.y1);
        NodeeditorComponent.context.quadraticCurveTo(this.x11, this.y11, this.xmid, this.ymid);
        NodeeditorComponent.context.moveTo(this.xmid, this.ymid);
        NodeeditorComponent.context.quadraticCurveTo(this.x22, this.y22, this.x2, this.y2);
        NodeeditorComponent.resetContextAttr();
        NodeeditorComponent.context.strokeStyle = '#7fff0088';
        NodeeditorComponent.context.lineWidth = Math.round(NodeeditorComponent.globalConnectorWidth).toString();
        NodeeditorComponent.context.lineCap = 'round';
        NodeeditorComponent.context.shadowColor = '#7fff00';
        NodeeditorComponent.context.shadowBlur = 5;
        NodeeditorComponent.context.stroke();
    };
    Connector.prototype.connection = function (terminalEnd, terminalEndNode) {
        if (terminalEnd.type === 'buffer' && (this.terminalStartNode.type === 'LinearConvolver' || this.terminalStartNode.type === 'AudioMerger' || this.terminalStartNode.type === 'Microphone' || this.terminalStartNode.type === 'DrumSequencer' || this.terminalStartNode.type === 'Bitcrusher' || this.terminalStartNode.type === 'Moog' || this.terminalStartNode.type === 'Panner')) {
            // console.log("mismatch");
            NodeeditorComponent.currentConnector.terminalStart.connector = null;
            NodeeditorComponent.currentConnector = null;
            NodeeditorComponent.context.clearRect(0, 0, NodeeditorComponent.WIDTH, NodeeditorComponent.HEIGHT);
            NodeeditorComponent.ultimateRedraw();
            return;
        }
        else {
            if (terminalEnd.connector != null) {
                terminalEnd.connector.terminalStartNode.connectedTo = null;
                terminalEnd.connector.terminalStart.isAssociated = false;
                terminalEnd.connector.terminalStart.connector = null;
                terminalEnd.isAssociated = false;
                NodeeditorComponent.connectors.splice(NodeeditorComponent.connectors.indexOf(terminalEnd.connector, 1));
                terminalEnd.connector = null;
            }
            if (terminalEndNode.type === 'LinearConvolver') {
                if (terminalEndNode.inputSampleTerminal.guid === terminalEnd.guid) {
                    // console.log("terminal end is convolver inputsample");
                    terminalEndNode.inputSampleNode = this.terminalStart.parent;
                }
                else if (terminalEndNode.impulseResponseTerminal.guid === terminalEnd.guid) {
                    // console.log("terminal end is convolver impulseresponse");
                    terminalEndNode.impulseRNode = this.terminalStart.parent;
                }
            }
            this.terminalEnd = terminalEnd;
            this.terminalEndNode = terminalEndNode;
            this.x2 = terminalEnd.x;
            this.y2 = terminalEnd.y;
            this.terminalStart.isAssociated = true;
            this.terminalEnd.isAssociated = true;
            this.terminalStart.connector = this;
            this.terminalEnd.connector = this;
            this.terminalStart.parent.connectedTo = this.terminalEnd.parent;
            NodeeditorComponent.connectors.push(NodeeditorComponent.currentConnector);
            // console.log("pushed connector");
            // console.log(currentConnector);
            NodeeditorComponent.currentConnector = null;
            NodeeditorComponent.context.clearRect(0, 0, NodeeditorComponent.WIDTH, NodeeditorComponent.HEIGHT);
            NodeeditorComponent.ultimateRedraw();
        }
    };
    return Connector;
}());
var Terminal = /** @class */ (function () {
    function Terminal(x, y, radius, type, parent) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.type = type;
        this.parent = parent;
        this.guid = NodeeditorComponent.getNewGUID();
        this.redraw();
        this.isAssociated = false;
        this.connector = null;
    }
    Terminal.prototype.redraw = function () {
        NodeeditorComponent.context.beginPath();
        NodeeditorComponent.resetContextAttr();
        if (this.type === 'string') {
            NodeeditorComponent.context.shadowColor = '#adff2f';
            NodeeditorComponent.context.fillStyle = '#adff2fff';
        }
        else if (this.type === 'in') {
            NodeeditorComponent.context.shadowColor = '#ff0000';
            NodeeditorComponent.context.fillStyle = '#ff0000ff';
        }
        else if (this.type === 'buffer') {
            NodeeditorComponent.context.shadowColor = '#ffa500';
            NodeeditorComponent.context.fillStyle = '#ffa500ff';
        }
        else if (this.type === 'stream') {
            NodeeditorComponent.context.shadowColor = '#4d4dff';
            NodeeditorComponent.context.fillStyle = '#4d4dffff';
        }
        NodeeditorComponent.context.shadowBlur = 5;
        NodeeditorComponent.context.strokeStyle = '#000';
        NodeeditorComponent.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        NodeeditorComponent.context.fill();
        NodeeditorComponent.context.stroke();
    };
    Terminal.prototype.clicked = function () {
        if (NodeeditorComponent.terminalStartFlag === 0) {
            if (this.type !== 'in' && this.type !== 'buffer') {
                // console.log("not in or buffer");
                if (this.isAssociated) {
                    // console.log("terminal already associated");
                    this.isAssociated = false;
                    this.connector.terminalEnd.isAssociated = false;
                    this.connector.terminalEnd.connector = null;
                    this.parent.connectedTo = null;
                    NodeeditorComponent.connectors.splice(NodeeditorComponent.connectors.indexOf(this.connector), 1);
                    this.connector = null;
                    // console.log("spliced this terminal");
                }
                NodeeditorComponent.currentConnector = new Connector(this, this.parent);
                // console.log(currentConnector);
            }
            else {
                return;
            }
            NodeeditorComponent.terminalStartFlag = 1;
        }
        else if (NodeeditorComponent.terminalStartFlag === 1) {
            if (NodeeditorComponent.currentConnector.terminalStart.guid === this.guid || NodeeditorComponent.currentConnector.terminalStart.type === this.type) {
                // console.log("same type");
                NodeeditorComponent.currentConnector.terminalStart.connector = null;
                NodeeditorComponent.currentConnector.terminalStart.parent.connectedTo = null;
                NodeeditorComponent.currentConnector = null;
                NodeeditorComponent.context.clearRect(0, 0, NodeeditorComponent.WIDTH, NodeeditorComponent.HEIGHT);
                NodeeditorComponent.ultimateRedraw();
            }
            else {
                // console.log("not same type");
                NodeeditorComponent.currentConnector.connection(this, this.parent);
            }
            NodeeditorComponent.terminalStartFlag = 0;
        }
    };
    return Terminal;
}());
var VarString = /** @class */ (function () {
    function VarString(x, y, width, height, order) {
        this.x = x;
        this.y = y;
        this.order = order;
        this.width = width;
        this.height = height;
        this.radius = (this.height) / 4;
        this.type = 'String';
        this.guid = NodeeditorComponent.getNewGUID();
        this.fontSize = this.height * 0.3;
        this.originalWidth = width;
        this.scaleRatio = 1;
        NodeeditorComponent.context.font = 'bold ' + this.fontSize + 'px Arial';
        this.draw();
        this.textInput = new CanvasInput({
            canvas: NodeeditorComponent.canvasElement,
            x: x - width * 0.8 / 2,
            y: y - height * 0.8 / 2,
            width: width * 0.8,
            height: height * 0.8,
            fontSize: height / 2 - 2,
            fontColor: '#fff',
            padding: 0,
            borderWidth: 0,
            borderRadius: 0,
            backgroundColor: '#dedede66',
            boxShadow: '0px 0px 0px rgba(255, 255, 255, 1)',
            innerShadow: '0px 0px 0px rgba(0, 0, 0, 0.4)'
        });
        this.inputTerminal = new Terminal(this.x - this.width / 2 - NodeeditorComponent.globalTerminalOffset, this.y, NodeeditorComponent.globalTerminalOffset / 2, 'string', this);
        this.outputTerminal = new Terminal(this.x + this.width / 2 + NodeeditorComponent.globalTerminalOffset, this.y, NodeeditorComponent.globalTerminalOffset / 2, 'string', this);
        this.tooltip = new Tooltip(this.x, this.y - this.height / 2 - NodeeditorComponent.globalTerminalOffset, 'String', this);
        this.connectedTo = null;
    }
    VarString.prototype.draw = function () {
        NodeeditorComponent.context.roundRect(this.x, this.y, this.width, this.height, this.radius);
        NodeeditorComponent.resetContextAttr();
        NodeeditorComponent.context.shadowColor = '#ffffff';
        NodeeditorComponent.context.shadowBlur = 10;
        NodeeditorComponent.context.fillStyle = '#dedede66';
        NodeeditorComponent.context.lineWidth = '1';
        NodeeditorComponent.context.strokeStyle = '#000';
        NodeeditorComponent.context.fill();
        NodeeditorComponent.context.stroke();
    };
    VarString.prototype.scale = function () {
        this.width *= NodeeditorComponent.gSFactor;
        this.height *= NodeeditorComponent.gSFactor;
        this.radius = (this.height) / 4;
        this.fontSize = this.height * 0.3;
    };
    VarString.prototype.redraw = function () {
        this.draw();
        // recalculate x, y
        this.inputTerminal.x = this.x - this.width / 2 - NodeeditorComponent.globalTerminalOffset;
        this.inputTerminal.y = this.y;
        this.inputTerminal.radius = NodeeditorComponent.globalTerminalOffset / 2;
        this.inputTerminal.redraw();
        this.outputTerminal.x = this.x + this.width / 2 + NodeeditorComponent.globalTerminalOffset;
        this.outputTerminal.y = this.y;
        this.outputTerminal.radius = NodeeditorComponent.globalTerminalOffset / 2;
        this.outputTerminal.redraw();
        NodeeditorComponent.context.font = 'bold ' + this.fontSize + 'px Arial';
        this.tooltip.x = this.x;
        this.tooltip.y = this.y - this.height / 2 - NodeeditorComponent.globalTerminalOffset;
        this.tooltip.redraw();
        this.scaleRatio = this.width / this.originalWidth;
        this.textInput._x = this.x - this.width * 0.8 / 2;
        this.textInput._y = this.y - this.height * 0.8 / 2;
        this.textInput._fontSize = this.height / 2 - 2;
        this.textInput.width(this.width * 0.8);
        this.textInput.height(this.height * 0.8);
    };
    VarString.prototype.clicked = function (x, y) {
        if (x > this.textInput.x && x < (this.textInput.x + this.textInput.width) && y > (this.textInput.y) && y < (this.textInput.y + this.textInput.height)) {
            this.textInput.focus();
        }
        else if (x > (this.inputTerminal.x - this.inputTerminal.radius) && x < (this.inputTerminal.x + this.inputTerminal.radius) && y > (this.inputTerminal.y - this.inputTerminal.radius) && y < (this.inputTerminal.y + this.inputTerminal.radius)) {
            this.inputTerminal.clicked();
        }
        else if (x > (this.outputTerminal.x - this.outputTerminal.radius) && x < (this.outputTerminal.x + this.outputTerminal.radius) && y > (this.outputTerminal.y - this.outputTerminal.radius) && y < (this.outputTerminal.y + this.outputTerminal.radius)) {
            this.outputTerminal.clicked();
        }
    };
    VarString.prototype.checkBounds = function (x, y) {
        if (x > (this.x - (this.width / 2)) && x < (this.x + (this.width / 2) + NodeeditorComponent.globalTerminalOffset + this.outputTerminal.radius) && y > (this.y - this.height / 2) && y < (this.y + this.height / 2)) {
            return true;
        }
        return false;
    };
    VarString.prototype.executeContextOption = function (option) {
        if (option === 'Delete') {
            if (NodeeditorComponent.currNodeInContextMenu.connectedTo != null) {
                NodeeditorComponent.currNodeInContextMenu.outputTerminal.connector.terminalEnd.isAssociated = false;
                NodeeditorComponent.currNodeInContextMenu.outputTerminal.connector.terminalEnd.connector = null;
                NodeeditorComponent.connectors.splice(NodeeditorComponent.connectors.indexOf(NodeeditorComponent.currNodeInContextMenu.outputTerminal.connector), 1);
            }
            NodeeditorComponent.nodes.splice(NodeeditorComponent.nodes.indexOf(NodeeditorComponent.currNodeInContextMenu), 1);
            NodeeditorComponent.currNodeInContextMenu = null;
            this.textInput.destroy();
            this.textInput = null;
        }
    };
    return VarString;
}());


/***/ }),

/***/ "./src/app/editor/tabs/tabs.component.css":
/*!************************************************!*\
  !*** ./src/app/editor/tabs/tabs.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n\n.CodeMirror-linenumbers {}\n\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n\n/* Shown when moving in bi-directional text */\n\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n\n.cm-s-default .cm-quote {color: #090;}\n\n.cm-negative {color: #d44;}\n\n.cm-positive {color: #292;}\n\n.cm-header, .cm-strong {font-weight: bold;}\n\n.cm-em {font-style: italic;}\n\n.cm-link {text-decoration: underline;}\n\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n\n.cm-s-default .cm-atom {color: #219;}\n\n.cm-s-default .cm-number {color: #164;}\n\n.cm-s-default .cm-def {color: #00f;}\n\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n\n.cm-s-default .cm-variable-2 {color: #05a;}\n\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n\n.cm-s-default .cm-comment {color: #a50;}\n\n.cm-s-default .cm-string {color: #a11;}\n\n.cm-s-default .cm-string-2 {color: #f50;}\n\n.cm-s-default .cm-meta {color: #555;}\n\n.cm-s-default .cm-qualifier {color: #555;}\n\n.cm-s-default .cm-builtin {color: #30a;}\n\n.cm-s-default .cm-bracket {color: #997;}\n\n.cm-s-default .cm-tag {color: #170;}\n\n.cm-s-default .cm-attribute {color: #00c;}\n\n.cm-s-default .cm-hr {color: #999;}\n\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\n\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */ border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\n\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n\n.CodeMirror-crosshair { cursor: crosshair; }\n\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\n\nspan.CodeMirror-selectedtext { background: none; }\n\n/*\n\n    Name:       material\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original material color scheme by Mattia Astorino (https://github.com/equinusocio/material-theme)\n\n*/\n\n.cm-s-material.CodeMirror {\n  background-color: #263238;\n  color: rgba(233, 237, 237, 1);\n}\n\n.cm-s-material .CodeMirror-gutters {\n  background: #263238;\n  color: rgb(83,127,126);\n  border: none;\n}\n\n.cm-s-material .CodeMirror-guttermarker, .cm-s-material .CodeMirror-guttermarker-subtle, .cm-s-material .CodeMirror-linenumber { color: rgb(83,127,126); }\n\n.cm-s-material .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-material div.CodeMirror-selected { background: rgba(255, 255, 255, 0.15); }\n\n.cm-s-material.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n\n.cm-s-material .CodeMirror-line::-moz-selection, .cm-s-material .CodeMirror-line > span::-moz-selection, .cm-s-material .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n\n.cm-s-material .CodeMirror-line::selection, .cm-s-material .CodeMirror-line > span::selection, .cm-s-material .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n\n.cm-s-material .CodeMirror-line::-moz-selection, .cm-s-material .CodeMirror-line > span::-moz-selection, .cm-s-material .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n\n.cm-s-material .CodeMirror-activeline-background { background: rgba(0, 0, 0, 0); }\n\n.cm-s-material .cm-keyword { color: rgba(199, 146, 234, 1); }\n\n.cm-s-material .cm-operator { color: rgba(233, 237, 237, 1); }\n\n.cm-s-material .cm-variable-2 { color: #80CBC4; }\n\n.cm-s-material .cm-variable-3, .cm-s-material .cm-type { color: #82B1FF; }\n\n.cm-s-material .cm-builtin { color: #DECB6B; }\n\n.cm-s-material .cm-atom { color: #F77669; }\n\n.cm-s-material .cm-number { color: #F77669; }\n\n.cm-s-material .cm-def { color: rgba(233, 237, 237, 1); }\n\n.cm-s-material .cm-string { color: #C3E88D; }\n\n.cm-s-material .cm-string-2 { color: #80CBC4; }\n\n.cm-s-material .cm-comment { color: #546E7A; }\n\n.cm-s-material .cm-variable { color: #82B1FF; }\n\n.cm-s-material .cm-tag { color: #80CBC4; }\n\n.cm-s-material .cm-meta { color: #80CBC4; }\n\n.cm-s-material .cm-attribute { color: #FFCB6B; }\n\n.cm-s-material .cm-property { color: #80CBAE; }\n\n.cm-s-material .cm-qualifier { color: #DECB6B; }\n\n.cm-s-material .cm-variable-3, .cm-s-material .cm-type { color: #DECB6B; }\n\n.cm-s-material .cm-tag { color: rgba(255, 83, 112, 1); }\n\n.cm-s-material .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #EC5F67;\n}\n\n.cm-s-material .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n\n::-webkit-scrollbar{\r\n  width: 2px;\r\n}\n\n::-webkit-scrollbar-track {\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\n\n::-webkit-scrollbar-thumb {\r\n  background: rgba(1, 255, 115, 0.719);\r\n  border-radius: 0px;\r\n}\n\n#tabsContainer {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n}\n\n#tabsHeaderScrollContainer {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 7vh;\r\n  top:0;\r\n  left:0;\r\n  overflow-x: scroll;\r\n  padding-left: .5%;\r\n  padding-right: .5%;\r\n}\n\n#tabsHeaderContainer {\r\n  height: 100%;\r\n  left:0;\r\n  top:0;\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n  text-align: center;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\n\n.tabHeader {\r\n  position: relative;\r\n  width: 12em;\r\n  height: 100%;\r\n  background-color: rgb(207, 207, 207);\r\n  margin-right: .5%;\r\n  cursor: pointer;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  text-align: center;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  font-family: 'Roboto';\r\n  font-size: .8em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 1px solid darkgray;\r\n}\n\n.tabHeader:hover > .closeButton{\r\n  pointer-events: all;\r\n  display: block;\r\n}\n\n.tabActive{\r\n  background-color: white;\r\n}\n\n.closeButton{\r\n  position: absolute;\r\n  right:0;\r\n  width: 10%;\r\n  padding-bottom: 10%;\r\n  background-image: url('closeLogo.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 60%;\r\n  margin-right: 5%;\r\n  display: none;\r\n  pointer-events: none;\r\n}\n\n.closeButton:hover{\r\n  background-color: lightgrey;\r\n}\n\n.tabContent{\r\n  position: absolute;\r\n  left:0;\r\n  top:7vh;\r\n  height: calc(100% - 7vh);\r\n  width: 100%;\r\n  z-index: 0;\r\n  background-color: red;\r\n}\n\n.tabContentActive{\r\n  z-index: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9jb2RlbWlycm9yL2xpYi9jb2RlbWlycm9yLmNzcyIsIm5vZGVfbW9kdWxlcy9jb2RlbWlycm9yL3RoZW1lL21hdGVyaWFsLmNzcyIsInNyYy9hcHAvZWRpdG9yL3RhYnMvdGFicy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7O0FBRVg7RUFDRSxnRUFBZ0U7RUFDaEUsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQSxZQUFZOztBQUVaO0VBQ0UsY0FBYyxFQUFFLG9DQUFvQztBQUN0RDs7QUFDQTtFQUNFLGNBQWMsRUFBRSxrQ0FBa0M7QUFDcEQ7O0FBRUE7RUFDRSx1QkFBdUIsRUFBRSxpREFBaUQ7QUFDNUU7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUNBLHlCQUF5Qjs7QUFDekI7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBLDJCQUEyQixZQUFZLEVBQUU7O0FBQ3pDLGtDQUFrQyxXQUFXLEVBQUU7O0FBRS9DLFdBQVc7O0FBRVg7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFDQSw2Q0FBNkM7O0FBQzdDO0VBQ0UsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSx3Q0FBd0M7RUFDeEMsZ0RBQWdEO0VBRWhELHdDQUF3QztBQUMxQzs7QUFDQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZ0RBQWdEO0VBRWhELHdDQUF3QztFQUN4QyxzQkFBc0I7QUFDeEI7O0FBTUE7RUFDRSxJQUFJO0VBQ0osTUFBTSw2QkFBNkIsRUFBRTtFQUNyQyxNQUFNO0FBQ1I7O0FBQ0E7RUFDRSxJQUFJO0VBQ0osTUFBTSw2QkFBNkIsRUFBRTtFQUNyQyxNQUFNO0FBQ1I7O0FBRUEsOERBQThEOztBQUM5RCwwQ0FBMEM7O0FBRTFDLFVBQVUscUJBQXFCLEVBQUUsd0JBQXdCLEVBQUU7O0FBRTNEO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLGFBQWE7RUFDNUMsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLE1BQU0sRUFBRSxTQUFTO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQSxrQkFBa0I7O0FBRWxCLDBCQUEwQixXQUFXLENBQUM7O0FBQ3RDLHlCQUF5QixXQUFXLENBQUM7O0FBQ3JDLGNBQWMsV0FBVyxDQUFDOztBQUMxQixjQUFjLFdBQVcsQ0FBQzs7QUFDMUIsd0JBQXdCLGlCQUFpQixDQUFDOztBQUMxQyxRQUFRLGtCQUFrQixDQUFDOztBQUMzQixVQUFVLDBCQUEwQixDQUFDOztBQUNyQyxtQkFBbUIsNkJBQTZCLENBQUM7O0FBRWpELDJCQUEyQixXQUFXLENBQUM7O0FBQ3ZDLHdCQUF3QixXQUFXLENBQUM7O0FBQ3BDLDBCQUEwQixXQUFXLENBQUM7O0FBQ3RDLHVCQUF1QixXQUFXLENBQUM7O0FBQ25DOzs7NEJBRzRCOztBQUM1Qiw4QkFBOEIsV0FBVyxDQUFDOztBQUMxQyxzREFBc0QsV0FBVyxDQUFDOztBQUNsRSwyQkFBMkIsV0FBVyxDQUFDOztBQUN2QywwQkFBMEIsV0FBVyxDQUFDOztBQUN0Qyw0QkFBNEIsV0FBVyxDQUFDOztBQUN4Qyx3QkFBd0IsV0FBVyxDQUFDOztBQUNwQyw2QkFBNkIsV0FBVyxDQUFDOztBQUN6QywyQkFBMkIsV0FBVyxDQUFDOztBQUN2QywyQkFBMkIsV0FBVyxDQUFDOztBQUN2Qyx1QkFBdUIsV0FBVyxDQUFDOztBQUNuQyw2QkFBNkIsV0FBVyxDQUFDOztBQUN6QyxzQkFBc0IsV0FBVyxDQUFDOztBQUNsQyx3QkFBd0IsV0FBVyxDQUFDOztBQUVwQyx5QkFBeUIsV0FBVyxDQUFDOztBQUNyQyxpQkFBaUIsV0FBVyxDQUFDOztBQUU3Qix3QkFBd0Isd0JBQXdCLEVBQUU7O0FBRWxELHFDQUFxQzs7QUFFckMsZ0RBQWdELFdBQVcsQ0FBQzs7QUFDNUQsbURBQW1ELFdBQVcsQ0FBQzs7QUFDL0QsMEJBQTBCLGlDQUFpQyxFQUFFOztBQUM3RCxtQ0FBbUMsbUJBQW1CLENBQUM7O0FBRXZELFNBQVM7O0FBRVQ7bURBQ21EOztBQUVuRDtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCLEVBQUUsNENBQTRDO0VBQ3pFLHdFQUF3RTtFQUN4RSx3Q0FBd0M7RUFDeEMsb0JBQW9CLEVBQUUsbUJBQW1CO0VBQ3pDLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYSxFQUFFLG1EQUFtRDtFQUNsRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0NBQW9DO0FBQ3RDOztBQUVBOzswQkFFMEI7O0FBQzFCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxRQUFRLEVBQUUsTUFBTTtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsU0FBUyxFQUFFLE9BQU87RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFFBQVEsRUFBRSxTQUFTO0FBQ3JCOztBQUNBO0VBQ0UsT0FBTyxFQUFFLFNBQVM7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsTUFBTTtFQUNuQyxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNLEVBQUUsU0FBUztFQUNqQixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFDQSw4Q0FBeUMsOEJBQThCOztBQUF2RSx5Q0FBeUMsOEJBQThCOztBQUN2RSw4Q0FBOEMsOEJBQThCOztBQUU1RTtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUUsMENBQTBDO0FBQzdEOztBQUNBO0VBQ0UsK0RBQStELEVBQ2QsZ0JBQWdCO0VBQ2pFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QywwQ0FBMEM7RUFDMUMsa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUztFQUNwQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWMsRUFBRSx5REFBeUQ7QUFDM0U7O0FBRUEsb0JBQW9COztBQUVwQixzQkFBc0IsY0FBYyxFQUFFOztBQUV0QztFQUNFLGFBQWE7QUFDZjs7QUFFQSxpRUFBaUU7O0FBQ2pFOzs7OztFQU1FLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTs7QUFFNUM7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSx1QkFBdUIsbUJBQW1CLEVBQUU7O0FBQzVDLDJDQUEyQyxtQkFBbUIsRUFBRTs7QUFDaEUsd0JBQXdCLGlCQUFpQixFQUFFOztBQUMzQyw0SEFBNkcsbUJBQW1CLEVBQUU7O0FBQWxJLDZHQUE2RyxtQkFBbUIsRUFBRTs7QUFDbEksNEhBQTRILG1CQUFtQixFQUFFOztBQUVqSjtFQUNFLHNCQUFzQjtFQUN0Qix1Q0FBdUM7QUFDekM7O0FBRUEsNENBQTRDOztBQUM1QyxtQkFBbUIsbUJBQW1CLEVBQUU7O0FBRXhDO0VBQ0Usa0NBQWtDO0VBQ2xDO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEsb0JBQW9COztBQUNwQiwwQkFBMEIsV0FBVyxFQUFFOztBQUV2QyxpRUFBaUU7O0FBQ2pFLCtCQUErQixnQkFBZ0IsRUFBRTs7QUN6VmpEOzs7Ozs7O0NBT0M7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBQ0EsaUlBQWlJLHNCQUFzQixFQUFFOztBQUN6SixvQ0FBb0MsOEJBQThCLEVBQUU7O0FBQ3BFLHlDQUF5QyxxQ0FBcUMsRUFBRTs7QUFDaEYsNERBQTRELHFDQUFxQyxFQUFFOztBQUNuRyx5S0FBMEoscUNBQXFDLEVBQUU7O0FBQWpNLDBKQUEwSixxQ0FBcUMsRUFBRTs7QUFDak0seUtBQXlLLHFDQUFxQyxFQUFFOztBQUVoTixtREFBbUQsNEJBQTRCLEVBQUU7O0FBQ2pGLDZCQUE2Qiw2QkFBNkIsRUFBRTs7QUFDNUQsOEJBQThCLDZCQUE2QixFQUFFOztBQUM3RCxnQ0FBZ0MsY0FBYyxFQUFFOztBQUNoRCx5REFBeUQsY0FBYyxFQUFFOztBQUN6RSw2QkFBNkIsY0FBYyxFQUFFOztBQUM3QywwQkFBMEIsY0FBYyxFQUFFOztBQUMxQyw0QkFBNEIsY0FBYyxFQUFFOztBQUM1Qyx5QkFBeUIsNkJBQTZCLEVBQUU7O0FBQ3hELDRCQUE0QixjQUFjLEVBQUU7O0FBQzVDLDhCQUE4QixjQUFjLEVBQUU7O0FBQzlDLDZCQUE2QixjQUFjLEVBQUU7O0FBQzdDLDhCQUE4QixjQUFjLEVBQUU7O0FBQzlDLHlCQUF5QixjQUFjLEVBQUU7O0FBQ3pDLDBCQUEwQixjQUFjLEVBQUU7O0FBQzFDLCtCQUErQixjQUFjLEVBQUU7O0FBQy9DLDhCQUE4QixjQUFjLEVBQUU7O0FBQzlDLCtCQUErQixjQUFjLEVBQUU7O0FBQy9DLHlEQUF5RCxjQUFjLEVBQUU7O0FBQ3pFLHlCQUF5Qiw0QkFBNEIsRUFBRTs7QUFDdkQ7RUFDRSwrQkFBK0I7RUFDL0IseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLHVCQUF1QjtBQUN6Qjs7QUNqREE7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxLQUFLO0VBQ0wsTUFBTTtFQUNOLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLE1BQU07RUFDTixLQUFLO0VBQ0wsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsc0NBQTZEO0VBQzdELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1Asd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL3RhYnMvdGFicy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQkFTSUNTICovXG5cbi5Db2RlTWlycm9yIHtcbiAgLyogU2V0IGhlaWdodCwgd2lkdGgsIGJvcmRlcnMsIGFuZCBnbG9iYWwgZm9udCBwcm9wZXJ0aWVzIGhlcmUgKi9cbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXJlY3Rpb246IGx0cjtcbn1cblxuLyogUEFERElORyAqL1xuXG4uQ29kZU1pcnJvci1saW5lcyB7XG4gIHBhZGRpbmc6IDRweCAwOyAvKiBWZXJ0aWNhbCBwYWRkaW5nIGFyb3VuZCBjb250ZW50ICovXG59XG4uQ29kZU1pcnJvciBwcmUge1xuICBwYWRkaW5nOiAwIDRweDsgLyogSG9yaXpvbnRhbCBwYWRkaW5nIG9mIGNvbnRlbnQgKi9cbn1cblxuLkNvZGVNaXJyb3Itc2Nyb2xsYmFyLWZpbGxlciwgLkNvZGVNaXJyb3ItZ3V0dGVyLWZpbGxlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvKiBUaGUgbGl0dGxlIHNxdWFyZSBiZXR3ZWVuIEggYW5kIFYgc2Nyb2xsYmFycyAqL1xufVxuXG4vKiBHVVRURVIgKi9cblxuLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uQ29kZU1pcnJvci1saW5lbnVtYmVycyB7fVxuLkNvZGVNaXJyb3ItbGluZW51bWJlciB7XG4gIHBhZGRpbmc6IDAgM3B4IDAgNXB4O1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzk5OTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLkNvZGVNaXJyb3ItZ3V0dGVybWFya2VyIHsgY29sb3I6IGJsYWNrOyB9XG4uQ29kZU1pcnJvci1ndXR0ZXJtYXJrZXItc3VidGxlIHsgY29sb3I6ICM5OTk7IH1cblxuLyogQ1VSU09SICovXG5cbi5Db2RlTWlycm9yLWN1cnNvciB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgd2lkdGg6IDA7XG59XG4vKiBTaG93biB3aGVuIG1vdmluZyBpbiBiaS1kaXJlY3Rpb25hbCB0ZXh0ICovXG4uQ29kZU1pcnJvciBkaXYuQ29kZU1pcnJvci1zZWNvbmRhcnljdXJzb3Ige1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHNpbHZlcjtcbn1cbi5jbS1mYXQtY3Vyc29yIC5Db2RlTWlycm9yLWN1cnNvciB7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzdlNztcbn1cbi5jbS1mYXQtY3Vyc29yIGRpdi5Db2RlTWlycm9yLWN1cnNvcnMge1xuICB6LWluZGV4OiAxO1xufVxuLmNtLWZhdC1jdXJzb3ItbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDI1NSwgMjAsIDAuNSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGJsaW5rIDEuMDZzIHN0ZXBzKDEpIGluZmluaXRlO1xuICBhbmltYXRpb246IGJsaW5rIDEuMDZzIHN0ZXBzKDEpIGluZmluaXRlO1xufVxuLmNtLWFuaW1hdGUtZmF0LWN1cnNvciB7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXI6IDA7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGJsaW5rIDEuMDZzIHN0ZXBzKDEpIGluZmluaXRlO1xuICBhbmltYXRpb246IGJsaW5rIDEuMDZzIHN0ZXBzKDEpIGluZmluaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U3O1xufVxuQC1tb3ota2V5ZnJhbWVzIGJsaW5rIHtcbiAgMCUge31cbiAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgMTAwJSB7fVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcbiAgMCUge31cbiAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgMTAwJSB7fVxufVxuQGtleWZyYW1lcyBibGluayB7XG4gIDAlIHt9XG4gIDUwJSB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gIDEwMCUge31cbn1cblxuLyogQ2FuIHN0eWxlIGN1cnNvciBkaWZmZXJlbnQgaW4gb3ZlcndyaXRlIChub24taW5zZXJ0KSBtb2RlICovXG4uQ29kZU1pcnJvci1vdmVyd3JpdGUgLkNvZGVNaXJyb3ItY3Vyc29yIHt9XG5cbi5jbS10YWIgeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDsgfVxuXG4uQ29kZU1pcnJvci1ydWxlcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7IHJpZ2h0OiAwOyB0b3A6IC01MHB4OyBib3R0b206IC0yMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLkNvZGVNaXJyb3ItcnVsZXIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XG4gIHRvcDogMDsgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi8qIERFRkFVTFQgVEhFTUUgKi9cblxuLmNtLXMtZGVmYXVsdCAuY20taGVhZGVyIHtjb2xvcjogYmx1ZTt9XG4uY20tcy1kZWZhdWx0IC5jbS1xdW90ZSB7Y29sb3I6ICMwOTA7fVxuLmNtLW5lZ2F0aXZlIHtjb2xvcjogI2Q0NDt9XG4uY20tcG9zaXRpdmUge2NvbG9yOiAjMjkyO31cbi5jbS1oZWFkZXIsIC5jbS1zdHJvbmcge2ZvbnQtd2VpZ2h0OiBib2xkO31cbi5jbS1lbSB7Zm9udC1zdHlsZTogaXRhbGljO31cbi5jbS1saW5rIHt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTt9XG4uY20tc3RyaWtldGhyb3VnaCB7dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7fVxuXG4uY20tcy1kZWZhdWx0IC5jbS1rZXl3b3JkIHtjb2xvcjogIzcwODt9XG4uY20tcy1kZWZhdWx0IC5jbS1hdG9tIHtjb2xvcjogIzIxOTt9XG4uY20tcy1kZWZhdWx0IC5jbS1udW1iZXIge2NvbG9yOiAjMTY0O31cbi5jbS1zLWRlZmF1bHQgLmNtLWRlZiB7Y29sb3I6ICMwMGY7fVxuLmNtLXMtZGVmYXVsdCAuY20tdmFyaWFibGUsXG4uY20tcy1kZWZhdWx0IC5jbS1wdW5jdHVhdGlvbixcbi5jbS1zLWRlZmF1bHQgLmNtLXByb3BlcnR5LFxuLmNtLXMtZGVmYXVsdCAuY20tb3BlcmF0b3Ige31cbi5jbS1zLWRlZmF1bHQgLmNtLXZhcmlhYmxlLTIge2NvbG9yOiAjMDVhO31cbi5jbS1zLWRlZmF1bHQgLmNtLXZhcmlhYmxlLTMsIC5jbS1zLWRlZmF1bHQgLmNtLXR5cGUge2NvbG9yOiAjMDg1O31cbi5jbS1zLWRlZmF1bHQgLmNtLWNvbW1lbnQge2NvbG9yOiAjYTUwO31cbi5jbS1zLWRlZmF1bHQgLmNtLXN0cmluZyB7Y29sb3I6ICNhMTE7fVxuLmNtLXMtZGVmYXVsdCAuY20tc3RyaW5nLTIge2NvbG9yOiAjZjUwO31cbi5jbS1zLWRlZmF1bHQgLmNtLW1ldGEge2NvbG9yOiAjNTU1O31cbi5jbS1zLWRlZmF1bHQgLmNtLXF1YWxpZmllciB7Y29sb3I6ICM1NTU7fVxuLmNtLXMtZGVmYXVsdCAuY20tYnVpbHRpbiB7Y29sb3I6ICMzMGE7fVxuLmNtLXMtZGVmYXVsdCAuY20tYnJhY2tldCB7Y29sb3I6ICM5OTc7fVxuLmNtLXMtZGVmYXVsdCAuY20tdGFnIHtjb2xvcjogIzE3MDt9XG4uY20tcy1kZWZhdWx0IC5jbS1hdHRyaWJ1dGUge2NvbG9yOiAjMDBjO31cbi5jbS1zLWRlZmF1bHQgLmNtLWhyIHtjb2xvcjogIzk5OTt9XG4uY20tcy1kZWZhdWx0IC5jbS1saW5rIHtjb2xvcjogIzAwYzt9XG5cbi5jbS1zLWRlZmF1bHQgLmNtLWVycm9yIHtjb2xvcjogI2YwMDt9XG4uY20taW52YWxpZGNoYXIge2NvbG9yOiAjZjAwO31cblxuLkNvZGVNaXJyb3ItY29tcG9zaW5nIHsgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkOyB9XG5cbi8qIERlZmF1bHQgc3R5bGVzIGZvciBjb21tb24gYWRkb25zICovXG5cbmRpdi5Db2RlTWlycm9yIHNwYW4uQ29kZU1pcnJvci1tYXRjaGluZ2JyYWNrZXQge2NvbG9yOiAjMGIwO31cbmRpdi5Db2RlTWlycm9yIHNwYW4uQ29kZU1pcnJvci1ub25tYXRjaGluZ2JyYWNrZXQge2NvbG9yOiAjYTIyO31cbi5Db2RlTWlycm9yLW1hdGNoaW5ndGFnIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE1MCwgMCwgLjMpOyB9XG4uQ29kZU1pcnJvci1hY3RpdmVsaW5lLWJhY2tncm91bmQge2JhY2tncm91bmQ6ICNlOGYyZmY7fVxuXG4vKiBTVE9QICovXG5cbi8qIFRoZSByZXN0IG9mIHRoaXMgZmlsZSBjb250YWlucyBzdHlsZXMgcmVsYXRlZCB0byB0aGUgbWVjaGFuaWNzIG9mXG4gICB0aGUgZWRpdG9yLiBZb3UgcHJvYmFibHkgc2hvdWxkbid0IHRvdWNoIHRoZW0uICovXG5cbi5Db2RlTWlycm9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLkNvZGVNaXJyb3Itc2Nyb2xsIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbCAhaW1wb3J0YW50OyAvKiBUaGluZ3Mgd2lsbCBicmVhayBpZiB0aGlzIGlzIG92ZXJyaWRkZW4gKi9cbiAgLyogMzBweCBpcyB0aGUgbWFnaWMgbWFyZ2luIHVzZWQgdG8gaGlkZSB0aGUgZWxlbWVudCdzIHJlYWwgc2Nyb2xsYmFycyAqL1xuICAvKiBTZWUgb3ZlcmZsb3c6IGhpZGRlbiBpbiAuQ29kZU1pcnJvciAqL1xuICBtYXJnaW4tYm90dG9tOiAtMzBweDsgbWFyZ2luLXJpZ2h0OiAtMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTsgLyogUHJldmVudCBkcmFnZ2luZyBmcm9tIGhpZ2hsaWdodGluZyB0aGUgZWxlbWVudCAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uQ29kZU1pcnJvci1zaXplciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJpZ2h0OiAzMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4vKiBUaGUgZmFrZSwgdmlzaWJsZSBzY3JvbGxiYXJzLiBVc2VkIHRvIGZvcmNlIHJlZHJhdyBkdXJpbmcgc2Nyb2xsaW5nXG4gICBiZWZvcmUgYWN0dWFsIHNjcm9sbGluZyBoYXBwZW5zLCB0aHVzIHByZXZlbnRpbmcgc2hha2luZyBhbmRcbiAgIGZsaWNrZXJpbmcgYXJ0aWZhY3RzLiAqL1xuLkNvZGVNaXJyb3ItdnNjcm9sbGJhciwgLkNvZGVNaXJyb3ItaHNjcm9sbGJhciwgLkNvZGVNaXJyb3Itc2Nyb2xsYmFyLWZpbGxlciwgLkNvZGVNaXJyb3ItZ3V0dGVyLWZpbGxlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNjtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5Db2RlTWlycm9yLXZzY3JvbGxiYXIge1xuICByaWdodDogMDsgdG9wOiAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5Db2RlTWlycm9yLWhzY3JvbGxiYXIge1xuICBib3R0b206IDA7IGxlZnQ6IDA7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuLkNvZGVNaXJyb3Itc2Nyb2xsYmFyLWZpbGxlciB7XG4gIHJpZ2h0OiAwOyBib3R0b206IDA7XG59XG4uQ29kZU1pcnJvci1ndXR0ZXItZmlsbGVyIHtcbiAgbGVmdDogMDsgYm90dG9tOiAwO1xufVxuXG4uQ29kZU1pcnJvci1ndXR0ZXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDM7XG59XG4uQ29kZU1pcnJvci1ndXR0ZXIge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XG59XG4uQ29kZU1pcnJvci1ndXR0ZXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5Db2RlTWlycm9yLWd1dHRlci1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7IGJvdHRvbTogMDtcbiAgei1pbmRleDogNDtcbn1cbi5Db2RlTWlycm9yLWd1dHRlci1lbHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgei1pbmRleDogNDtcbn1cbi5Db2RlTWlycm9yLWd1dHRlci13cmFwcGVyIDo6c2VsZWN0aW9uIHsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgfVxuLkNvZGVNaXJyb3ItZ3V0dGVyLXdyYXBwZXIgOjotbW96LXNlbGVjdGlvbiB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IH1cblxuLkNvZGVNaXJyb3ItbGluZXMge1xuICBjdXJzb3I6IHRleHQ7XG4gIG1pbi1oZWlnaHQ6IDFweDsgLyogcHJldmVudHMgY29sbGFwc2luZyBiZWZvcmUgZmlyc3QgZHJhdyAqL1xufVxuLkNvZGVNaXJyb3IgcHJlIHtcbiAgLyogUmVzZXQgc29tZSBzdHlsZXMgdGhhdCB0aGUgcmVzdCBvZiB0aGUgcGFnZSBtaWdodCBoYXZlIHNldCAqL1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDA7IC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDsgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LWZvbnQtdmFyaWFudC1saWdhdHVyZXM6IGNvbnRleHR1YWw7XG4gIGZvbnQtdmFyaWFudC1saWdhdHVyZXM6IGNvbnRleHR1YWw7XG59XG4uQ29kZU1pcnJvci13cmFwIHByZSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG59XG5cbi5Db2RlTWlycm9yLWxpbmViYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwOyByaWdodDogMDsgdG9wOiAwOyBib3R0b206IDA7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5Db2RlTWlycm9yLWxpbmV3aWRnZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHBhZGRpbmc6IDAuMXB4OyAvKiBGb3JjZSB3aWRnZXQgbWFyZ2lucyB0byBzdGF5IGluc2lkZSBvZiB0aGUgY29udGFpbmVyICovXG59XG5cbi5Db2RlTWlycm9yLXdpZGdldCB7fVxuXG4uQ29kZU1pcnJvci1ydGwgcHJlIHsgZGlyZWN0aW9uOiBydGw7IH1cblxuLkNvZGVNaXJyb3ItY29kZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIEZvcmNlIGNvbnRlbnQtYm94IHNpemluZyBmb3IgdGhlIGVsZW1lbnRzIHdoZXJlIHdlIGV4cGVjdCBpdCAqL1xuLkNvZGVNaXJyb3Itc2Nyb2xsLFxuLkNvZGVNaXJyb3Itc2l6ZXIsXG4uQ29kZU1pcnJvci1ndXR0ZXIsXG4uQ29kZU1pcnJvci1ndXR0ZXJzLFxuLkNvZGVNaXJyb3ItbGluZW51bWJlciB7XG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4uQ29kZU1pcnJvci1tZWFzdXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5Db2RlTWlycm9yLWN1cnNvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uQ29kZU1pcnJvci1tZWFzdXJlIHByZSB7IHBvc2l0aW9uOiBzdGF0aWM7IH1cblxuZGl2LkNvZGVNaXJyb3ItY3Vyc29ycyB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAzO1xufVxuZGl2LkNvZGVNaXJyb3ItZHJhZ2N1cnNvcnMge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uQ29kZU1pcnJvci1mb2N1c2VkIGRpdi5Db2RlTWlycm9yLWN1cnNvcnMge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uQ29kZU1pcnJvci1zZWxlY3RlZCB7IGJhY2tncm91bmQ6ICNkOWQ5ZDk7IH1cbi5Db2RlTWlycm9yLWZvY3VzZWQgLkNvZGVNaXJyb3Itc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiAjZDdkNGYwOyB9XG4uQ29kZU1pcnJvci1jcm9zc2hhaXIgeyBjdXJzb3I6IGNyb3NzaGFpcjsgfVxuLkNvZGVNaXJyb3ItbGluZTo6c2VsZWN0aW9uLCAuQ29kZU1pcnJvci1saW5lID4gc3Bhbjo6c2VsZWN0aW9uLCAuQ29kZU1pcnJvci1saW5lID4gc3BhbiA+IHNwYW46OnNlbGVjdGlvbiB7IGJhY2tncm91bmQ6ICNkN2Q0ZjA7IH1cbi5Db2RlTWlycm9yLWxpbmU6Oi1tb3otc2VsZWN0aW9uLCAuQ29kZU1pcnJvci1saW5lID4gc3Bhbjo6LW1vei1zZWxlY3Rpb24sIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuID4gc3Bhbjo6LW1vei1zZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiAjZDdkNGYwOyB9XG5cbi5jbS1zZWFyY2hpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAuNCk7XG59XG5cbi8qIFVzZWQgdG8gZm9yY2UgYSBib3JkZXIgbW9kZWwgZm9yIGEgbm9kZSAqL1xuLmNtLWZvcmNlLWJvcmRlciB7IHBhZGRpbmctcmlnaHQ6IC4xcHg7IH1cblxuQG1lZGlhIHByaW50IHtcbiAgLyogSGlkZSB0aGUgY3Vyc29yIHdoZW4gcHJpbnRpbmcgKi9cbiAgLkNvZGVNaXJyb3IgZGl2LkNvZGVNaXJyb3ItY3Vyc29ycyB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5cbi8qIFNlZSBpc3N1ZSAjMjkwMSAqL1xuLmNtLXRhYi13cmFwLWhhY2s6YWZ0ZXIgeyBjb250ZW50OiAnJzsgfVxuXG4vKiBIZWxwIHVzZXJzIHVzZSBtYXJrc2VsZWN0aW9uIHRvIHNhZmVseSBzdHlsZSB0ZXh0IGJhY2tncm91bmQgKi9cbnNwYW4uQ29kZU1pcnJvci1zZWxlY3RlZHRleHQgeyBiYWNrZ3JvdW5kOiBub25lOyB9XG4iLCIvKlxuXG4gICAgTmFtZTogICAgICAgbWF0ZXJpYWxcbiAgICBBdXRob3I6ICAgICBNaWNoYWVsIEthbWluc2t5IChodHRwOi8vZ2l0aHViLmNvbS9ta2FtaW5za3kxMSlcblxuICAgIE9yaWdpbmFsIG1hdGVyaWFsIGNvbG9yIHNjaGVtZSBieSBNYXR0aWEgQXN0b3Jpbm8gKGh0dHBzOi8vZ2l0aHViLmNvbS9lcXVpbnVzb2Npby9tYXRlcmlhbC10aGVtZSlcblxuKi9cblxuLmNtLXMtbWF0ZXJpYWwuQ29kZU1pcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjMyMzg7XG4gIGNvbG9yOiByZ2JhKDIzMywgMjM3LCAyMzcsIDEpO1xufVxuLmNtLXMtbWF0ZXJpYWwgLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gIGJhY2tncm91bmQ6ICMyNjMyMzg7XG4gIGNvbG9yOiByZ2IoODMsMTI3LDEyNik7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5jbS1zLW1hdGVyaWFsIC5Db2RlTWlycm9yLWd1dHRlcm1hcmtlciwgLmNtLXMtbWF0ZXJpYWwgLkNvZGVNaXJyb3ItZ3V0dGVybWFya2VyLXN1YnRsZSwgLmNtLXMtbWF0ZXJpYWwgLkNvZGVNaXJyb3ItbGluZW51bWJlciB7IGNvbG9yOiByZ2IoODMsMTI3LDEyNik7IH1cbi5jbS1zLW1hdGVyaWFsIC5Db2RlTWlycm9yLWN1cnNvciB7IGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Y4ZjhmMDsgfVxuLmNtLXMtbWF0ZXJpYWwgZGl2LkNvZGVNaXJyb3Itc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpOyB9XG4uY20tcy1tYXRlcmlhbC5Db2RlTWlycm9yLWZvY3VzZWQgZGl2LkNvZGVNaXJyb3Itc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTApOyB9XG4uY20tcy1tYXRlcmlhbCAuQ29kZU1pcnJvci1saW5lOjpzZWxlY3Rpb24sIC5jbS1zLW1hdGVyaWFsIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuOjpzZWxlY3Rpb24sIC5jbS1zLW1hdGVyaWFsIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuID4gc3Bhbjo6c2VsZWN0aW9uIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEwKTsgfVxuLmNtLXMtbWF0ZXJpYWwgLkNvZGVNaXJyb3ItbGluZTo6LW1vei1zZWxlY3Rpb24sIC5jbS1zLW1hdGVyaWFsIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuOjotbW96LXNlbGVjdGlvbiwgLmNtLXMtbWF0ZXJpYWwgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW4gPiBzcGFuOjotbW96LXNlbGVjdGlvbiB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMCk7IH1cblxuLmNtLXMtbWF0ZXJpYWwgLkNvZGVNaXJyb3ItYWN0aXZlbGluZS1iYWNrZ3JvdW5kIHsgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTsgfVxuLmNtLXMtbWF0ZXJpYWwgLmNtLWtleXdvcmQgeyBjb2xvcjogcmdiYSgxOTksIDE0NiwgMjM0LCAxKTsgfVxuLmNtLXMtbWF0ZXJpYWwgLmNtLW9wZXJhdG9yIHsgY29sb3I6IHJnYmEoMjMzLCAyMzcsIDIzNywgMSk7IH1cbi5jbS1zLW1hdGVyaWFsIC5jbS12YXJpYWJsZS0yIHsgY29sb3I6ICM4MENCQzQ7IH1cbi5jbS1zLW1hdGVyaWFsIC5jbS12YXJpYWJsZS0zLCAuY20tcy1tYXRlcmlhbCAuY20tdHlwZSB7IGNvbG9yOiAjODJCMUZGOyB9XG4uY20tcy1tYXRlcmlhbCAuY20tYnVpbHRpbiB7IGNvbG9yOiAjREVDQjZCOyB9XG4uY20tcy1tYXRlcmlhbCAuY20tYXRvbSB7IGNvbG9yOiAjRjc3NjY5OyB9XG4uY20tcy1tYXRlcmlhbCAuY20tbnVtYmVyIHsgY29sb3I6ICNGNzc2Njk7IH1cbi5jbS1zLW1hdGVyaWFsIC5jbS1kZWYgeyBjb2xvcjogcmdiYSgyMzMsIDIzNywgMjM3LCAxKTsgfVxuLmNtLXMtbWF0ZXJpYWwgLmNtLXN0cmluZyB7IGNvbG9yOiAjQzNFODhEOyB9XG4uY20tcy1tYXRlcmlhbCAuY20tc3RyaW5nLTIgeyBjb2xvcjogIzgwQ0JDNDsgfVxuLmNtLXMtbWF0ZXJpYWwgLmNtLWNvbW1lbnQgeyBjb2xvcjogIzU0NkU3QTsgfVxuLmNtLXMtbWF0ZXJpYWwgLmNtLXZhcmlhYmxlIHsgY29sb3I6ICM4MkIxRkY7IH1cbi5jbS1zLW1hdGVyaWFsIC5jbS10YWcgeyBjb2xvcjogIzgwQ0JDNDsgfVxuLmNtLXMtbWF0ZXJpYWwgLmNtLW1ldGEgeyBjb2xvcjogIzgwQ0JDNDsgfVxuLmNtLXMtbWF0ZXJpYWwgLmNtLWF0dHJpYnV0ZSB7IGNvbG9yOiAjRkZDQjZCOyB9XG4uY20tcy1tYXRlcmlhbCAuY20tcHJvcGVydHkgeyBjb2xvcjogIzgwQ0JBRTsgfVxuLmNtLXMtbWF0ZXJpYWwgLmNtLXF1YWxpZmllciB7IGNvbG9yOiAjREVDQjZCOyB9XG4uY20tcy1tYXRlcmlhbCAuY20tdmFyaWFibGUtMywgLmNtLXMtbWF0ZXJpYWwgLmNtLXR5cGUgeyBjb2xvcjogI0RFQ0I2QjsgfVxuLmNtLXMtbWF0ZXJpYWwgLmNtLXRhZyB7IGNvbG9yOiByZ2JhKDI1NSwgODMsIDExMiwgMSk7IH1cbi5jbS1zLW1hdGVyaWFsIC5jbS1lcnJvciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEuMCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQzVGNjc7XG59XG4uY20tcy1tYXRlcmlhbCAuQ29kZU1pcnJvci1tYXRjaGluZ2JyYWNrZXQge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4iLCJAaW1wb3J0IFwifmNvZGVtaXJyb3IvbGliL2NvZGVtaXJyb3IuY3NzXCI7XHJcbkBpbXBvcnQgXCJ+Y29kZW1pcnJvci90aGVtZS9tYXRlcmlhbC5jc3NcIjtcclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgd2lkdGg6IDJweDtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMSwgMjU1LCAxMTUsIDAuNzE5KTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbiN0YWJzQ29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiN0YWJzSGVhZGVyU2Nyb2xsQ29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3dmg7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICBwYWRkaW5nLWxlZnQ6IC41JTtcclxuICBwYWRkaW5nLXJpZ2h0OiAuNSU7XHJcbn1cclxuI3RhYnNIZWFkZXJDb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OjA7XHJcbiAgdG9wOjA7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnRhYkhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMmVtO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyMDcsIDIwNyk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuNSU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBmb250LXNpemU6IC44ZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xyXG59XHJcbi50YWJIZWFkZXI6aG92ZXIgPiAuY2xvc2VCdXR0b257XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4udGFiQWN0aXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jbG9zZUJ1dHRvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MDtcclxuICB3aWR0aDogMTAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Nsb3NlTG9nby5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDYwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmNsb3NlQnV0dG9uOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxufVxyXG4udGFiQ29udGVudHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDowO1xyXG4gIHRvcDo3dmg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3dmgpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbi50YWJDb250ZW50QWN0aXZle1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/editor/tabs/tabs.component.html":
/*!*************************************************!*\
  !*** ./src/app/editor/tabs/tabs.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"tabsContainer\">\n  <div #tabsHeaderScrollContainer id=\"tabsHeaderScrollContainer\">\n    <div id=\"tabsHeaderContainer\">\n      <div *ngFor=\"let tab of tabs\" [class.tabActive]=\"this.currActiveTab == tab.name\" (click)=\"onTabClick(tab.name)\"  class=\"tabHeader\">\n        {{ tab.name }}\n        <div class=\"closeButton\" (click)=\"onTabClose(tab)\"></div>\n      </div>\n    </div>\n  </div>\n  <div id=\"tabContentContainer\">\n    <div *ngFor=\"let tab of tabs\" [class.tabContentActive]=\"this.currActiveTab == tab.name\" class=\"tabContent\">\n      <app-texteditor *ngIf=\"tab.name.substring(tab.name.indexOf('.') + 1) != 'node'\" [content]=\"tab.content\" [name]=\"tab.name\" [path]=\"tab.path\"></app-texteditor>\n      <app-nodeeditor *ngIf=\"tab.name.substring(tab.name.indexOf('.') + 1) == 'node'\" [tabName]=\"tab.name\"></app-nodeeditor>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/tabs/tabs.component.ts":
/*!***********************************************!*\
  !*** ./src/app/editor/tabs/tabs.component.ts ***!
  \***********************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");



var TabsComponent = /** @class */ (function () {
    function TabsComponent(socketService) {
        this.socketService = socketService;
        this.currActiveTab = '';
        this.tabs = [];
    }
    TabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.openFile$.subscribe(function (data) {
            for (var _i = 0, _a = _this.tabs; _i < _a.length; _i++) {
                var tab = _a[_i];
                if (data.name === tab.name) {
                    _this.currActiveTab = data.name;
                    return;
                }
            }
            _this.tabs.push(data);
            _this.currActiveTab = data.name;
        });
    };
    TabsComponent.prototype.ngAfterViewInit = function () {
    };
    TabsComponent.prototype.onTabClick = function (fileName) {
        this.currActiveTab = fileName;
    };
    TabsComponent.prototype.onTabClose = function (tab) {
        this.tabs.splice(this.tabs.indexOf(tab), 1);
    };
    TabsComponent.prototype.setMode = function (fileName) {
        var ext = fileName.substring(fileName.indexOf('.') + 1);
        console.log(ext);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabsHeaderScrollContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TabsComponent.prototype, "tabsHeaderScrollContainer", void 0);
    TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/editor/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.css */ "./src/app/editor/tabs/tabs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/editor/tabs/texteditor/texteditor.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/editor/tabs/texteditor/texteditor.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#textEditorContainer{\r\n  position: absolute;\r\n  left:0;\r\n  top:0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.firepad{\r\n  height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL3RhYnMvdGV4dGVkaXRvci90ZXh0ZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLEtBQUs7RUFDTCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL3RhYnMvdGV4dGVkaXRvci90ZXh0ZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGV4dEVkaXRvckNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDowO1xyXG4gIHRvcDowO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZpcmVwYWR7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/editor/tabs/texteditor/texteditor.component.html":
/*!******************************************************************!*\
  !*** ./src/app/editor/tabs/texteditor/texteditor.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #textEditorContainer id=\"textEditorContainer\">\n  <div #textEditor style=\"width: 100%;height: 100%;\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/tabs/texteditor/texteditor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/editor/tabs/texteditor/texteditor.component.ts ***!
  \****************************************************************/
/*! exports provided: TexteditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TexteditorComponent", function() { return TexteditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_lib_codemirror_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/lib/codemirror.js */ "./node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var codemirror_lib_codemirror_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firepad_dist_firepad_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firepad/dist/firepad.js */ "./node_modules/firepad/dist/firepad.js");
/* harmony import */ var firepad_dist_firepad_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firepad_dist_firepad_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../editor.service */ "./src/app/editor/editor.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../socket.service */ "./src/app/socket.service.ts");







var TexteditorComponent = /** @class */ (function () {
    function TexteditorComponent(editorService, socketService) {
        var _this = this;
        this.editorService = editorService;
        this.socketService = socketService;
        this.editor = null;
        this.firepad = null;
        this.editorService.saveFile$.subscribe(function () {
            _this.socketService.saveFileContent(_this.path, _this.firepad.getText());
        });
        this.editorService.resizeTextEditorWH$.subscribe(function (data) {
            _this.editor.setSize(data.width, data.height);
        });
    }
    TexteditorComponent.prototype.ngOnInit = function () {
    };
    TexteditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.editor = codemirror_lib_codemirror_js__WEBPACK_IMPORTED_MODULE_3__(_this.textEditor.nativeElement, {
                lineWrapping: true,
                lineNumbers: true,
                autoCloseBrackets: true,
                matchBrackets: true,
                theme: 'lesser-dark',
                foldGutter: true,
                gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
            });
            switch (_this.name.substring(_this.name.indexOf('.') + 1)) {
                case 'html': {
                    _this.editor.setOption('mode', 'htmlmixed');
                    break;
                }
                case 'js': {
                    _this.editor.setOption('mode', 'javascript');
                    break;
                }
                case 'java': {
                    _this.editor.setOption('mode', 'text/x-java');
                    break;
                }
                case 'c': {
                    _this.editor.setOption('mode', 'text/x-csrc');
                    break;
                }
                case 'cpp': {
                    _this.editor.setOption('mode', 'text/x-c++src');
                    break;
                }
                case 'py': {
                    _this.editor.setOption('mode', 'python');
                    break;
                }
                default: break;
            }
            _this.editor.setSize(null, _this.textEditorContainer.nativeElement.clientHeight);
            console.log(_this.editor);
            _this.firepad = firepad_dist_firepad_js__WEBPACK_IMPORTED_MODULE_4__["fromCodeMirror"](firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/projectdata/' + _this.editorService.getProjectID() + _this.name.replace('.', '-')), _this.editor, {
                defaultText: _this.content
            });
        }, 0);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TexteditorComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TexteditorComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TexteditorComponent.prototype, "path", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textEditor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TexteditorComponent.prototype, "textEditor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textEditorContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TexteditorComponent.prototype, "textEditorContainer", void 0);
    TexteditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-texteditor',
            template: __webpack_require__(/*! ./texteditor.component.html */ "./src/app/editor/tabs/texteditor/texteditor.component.html"),
            styles: [__webpack_require__(/*! ./texteditor.component.css */ "./src/app/editor/tabs/texteditor/texteditor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_editor_service__WEBPACK_IMPORTED_MODULE_5__["EditorService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]])
    ], TexteditorComponent);
    return TexteditorComponent;
}());



/***/ }),

/***/ "./src/app/editor/textcomms/textcomms.component.css":
/*!**********************************************************!*\
  !*** ./src/app/editor/textcomms/textcomms.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-scrollbar {\r\n  width: 7px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px rgba(0,0,0,0.5);\r\n  border-radius: 1px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  border-radius: 1px;\r\n  box-shadow: inset 0 0 5px rgba(0,0,0,0.8);\r\n}\r\n\r\n@-webkit-keyframes micBlink {\r\n  0% {\r\n    box-shadow: 0 0 0 0;\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 7px 2px rgb(255, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes micBlink {\r\n  0% {\r\n    box-shadow: 0 0 0 0;\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 7px 2px rgb(255, 0, 0);\r\n  }\r\n}\r\n\r\n#textCommsContainer{\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  left:0;\r\n  top:0;\r\n  border-top-left-radius: 5vh;\r\n}\r\n\r\n#textCommsHeader{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 10%;\r\n  top:0;\r\n  left:0;\r\n  background-color: rgb(156, 156, 156);\r\n  cursor: pointer;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  z-index: 5;\r\n  box-shadow: 0px 7px 10px -3px #000;\r\n  border-top-left-radius: 5vh;\r\n}\r\n\r\n#noOfUM{\r\n  position: relative;\r\n  float: left;\r\n  margin-left: 10%;\r\n  top: calc(50% - 1.8vh);\r\n  width: 3.6vh;\r\n  height: 3.6vh;\r\n  background-color: lightgray;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 5px 1px;\r\n  font-family: 'Roboto';\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: 80%;\r\n  font-weight: bold;\r\n}\r\n\r\n#microphoneIcon{\r\n  position: relative;\r\n  float: right;\r\n  margin-right: 6%;\r\n  top: calc(50% - 1.8vh);\r\n  width: 3.6vh;\r\n  height: 3.6vh;\r\n  border-radius: 5px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 90%;\r\n  background-image: url('microphone.png');\r\n  transition: box-shadow .1s linear;\r\n}\r\n\r\n.micAnimStart{\r\n  -webkit-animation-name: micBlink;\r\n          animation-name: micBlink;\r\n  -webkit-animation-duration: .4s;\r\n          animation-duration: .4s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n}\r\n\r\n#microphoneIcon:hover{\r\n  box-shadow: 0 0 5px 1px;\r\n}\r\n\r\n#speakerIcon{\r\n  position: relative;\r\n  float: right;\r\n  margin-right: 6%;\r\n  top: calc(50% - 1.8vh);\r\n  width: 3.6vh;\r\n  height: 3.6vh;\r\n  border-radius: 5px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 90%;\r\n  transition: box-shadow .1s linear;\r\n}\r\n\r\n#speakerIcon:hover{\r\n  box-shadow: 0 0 5px 1px;\r\n}\r\n\r\n.speaker{\r\n  background-image: url('speaker.png');\r\n}\r\n\r\n.nospeaker{\r\n  background-image: url('nospeaker.png');\r\n}\r\n\r\n#textCommsBody{\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 10%;\r\n  z-index: 4;\r\n  height: 75%;\r\n  left:0;\r\n  background-color: rgb(230, 230, 230);\r\n  overflow-y: scroll;\r\n}\r\n\r\n#textCommsMessages{\r\n  position: relative;\r\n  width: 100%;\r\n  height: auto;\r\n  top:0;\r\n  left: 0;\r\n  padding-bottom: 2%;\r\n}\r\n\r\n.messageContainer{\r\n  position: relative;\r\n  width: 60%;\r\n  height: auto;\r\n  margin-top: 4%;\r\n  font-family: 'Roboto';\r\n  padding: 1.5%;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.inMessage{\r\n  float: left;\r\n  margin-left: 5%;\r\n  padding-left: 3%;\r\n}\r\n\r\n.outMessage{\r\n  float: right;\r\n  margin-right: 2%;\r\n  padding-right: 3%;\r\n}\r\n\r\n.line{\r\n  position: absolute;\r\n  width: 1.5%;\r\n  background-color: #000;\r\n  height: 100%;\r\n}\r\n\r\n.leftLine{\r\n  left:0;\r\n  top:0;\r\n}\r\n\r\n.rightLine{\r\n  right: 0;\r\n  top: 0;\r\n}\r\n\r\n.fromName{\r\n  width: auto;\r\n  padding-top: 1%;\r\n  padding-bottom: 1%;\r\n  border: 1px solid #555;\r\n  margin-bottom: 1%;\r\n  font-weight: bold;\r\n}\r\n\r\n.fromIn{\r\n  padding-left: 2%;\r\n  border-top-right-radius: 999px;\r\n  border-bottom-right-radius: 999px;\r\n}\r\n\r\n.fromOut{\r\n  padding-right: 2%;\r\n  border-top-left-radius: 999px;\r\n  border-bottom-left-radius: 999px;\r\n  text-align: right;\r\n}\r\n\r\n#textCommsControls{\r\n  position: absolute;\r\n  z-index: 4;\r\n  top:85%;\r\n  left:0;\r\n  width: 96%;\r\n  height: 12%;\r\n  padding: 2%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  box-shadow: 0px -7px 10px -3px #000;\r\n  background-color: rgb(230, 230, 230);\r\n}\r\n\r\n#textInput{\r\n  position: relative;\r\n  flex-grow: .7;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-right: 2%;\r\n}\r\n\r\n#textInputField{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: 'Roboto';\r\n  border: 1px solid #555;\r\n  resize: none;\r\n}\r\n\r\n#textInputField:focus{\r\n  border: none;\r\n}\r\n\r\n#textSend{\r\n  flex-grow: .3;\r\n  background-color: rgb(185, 185, 185);\r\n  font-family: 'Roboto';\r\n  padding-top: 2%;\r\n  padding-bottom: 2%;\r\n  cursor: pointer;\r\n  transition: box-shadow .1s linear;\r\n}\r\n\r\n#textSend:hover{\r\n  box-shadow: 0 0 5px 1px #555;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL3RleHRjb21tcy90ZXh0Y29tbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHNDQUFzQztFQUN4QztBQUNGOztBQVBBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHNDQUFzQztFQUN4QztBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLEtBQUs7RUFDTCwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxLQUFLO0VBQ0wsTUFBTTtFQUNOLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtDQUFrQztFQUNsQywyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLHVDQUE4RDtFQUM5RCxpQ0FBaUM7QUFDbkM7O0FBQ0E7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qix5Q0FBaUM7VUFBakMsaUNBQWlDO0VBQ2pDLDJDQUFtQztVQUFuQyxtQ0FBbUM7QUFDckM7O0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0Usb0NBQTJEO0FBQzdEOztBQUNBO0VBQ0Usc0NBQTZEO0FBQy9EOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxNQUFNO0VBQ04sb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLEtBQUs7RUFDTCxPQUFPO0VBQ1Asa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLE1BQU07RUFDTixLQUFLO0FBQ1A7O0FBQ0E7RUFDRSxRQUFRO0VBQ1IsTUFBTTtBQUNSOztBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGlDQUFpQztBQUNuQzs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsT0FBTztFQUNQLE1BQU07RUFDTixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL3RleHRjb21tcy90ZXh0Y29tbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA3cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiYSgwLDAsMCwwLjgpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1pY0JsaW5rIHtcclxuICAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA3cHggMnB4IHJnYigyNTUsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuI3RleHRDb21tc0NvbnRhaW5lcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6MDtcclxuICB0b3A6MDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1dmg7XHJcbn1cclxuI3RleHRDb21tc0hlYWRlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTYsIDE1NiwgMTU2KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogNTtcclxuICBib3gtc2hhZG93OiAwcHggN3B4IDEwcHggLTNweCAjMDAwO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDV2aDtcclxufVxyXG4jbm9PZlVNe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIHRvcDogY2FsYyg1MCUgLSAxLjh2aCk7XHJcbiAgd2lkdGg6IDMuNnZoO1xyXG4gIGhlaWdodDogMy42dmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IDFweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiNtaWNyb3Bob25lSWNvbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogNiU7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDEuOHZoKTtcclxuICB3aWR0aDogMy42dmg7XHJcbiAgaGVpZ2h0OiAzLjZ2aDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA5MCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21pY3JvcGhvbmUucG5nJyk7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMXMgbGluZWFyO1xyXG59XHJcbi5taWNBbmltU3RhcnR7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IG1pY0JsaW5rO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLjRzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcbiNtaWNyb3Bob25lSWNvbjpob3ZlcntcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IDFweDtcclxufVxyXG4jc3BlYWtlckljb257XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDYlO1xyXG4gIHRvcDogY2FsYyg1MCUgLSAxLjh2aCk7XHJcbiAgd2lkdGg6IDMuNnZoO1xyXG4gIGhlaWdodDogMy42dmg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogOTAlO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjFzIGxpbmVhcjtcclxufVxyXG4jc3BlYWtlckljb246aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAxcHg7XHJcbn1cclxuLnNwZWFrZXJ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NwZWFrZXIucG5nJyk7XHJcbn1cclxuLm5vc3BlYWtlcntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbm9zcGVha2VyLnBuZycpO1xyXG59XHJcbiN0ZXh0Q29tbXNCb2R5e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDEwJTtcclxuICB6LWluZGV4OiA0O1xyXG4gIGhlaWdodDogNzUlO1xyXG4gIGxlZnQ6MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbiN0ZXh0Q29tbXNNZXNzYWdlc3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcbi5tZXNzYWdlQ29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiA0JTtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgcGFkZGluZzogMS41JTtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcbi5pbk1lc3NhZ2V7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctbGVmdDogMyU7XHJcbn1cclxuLm91dE1lc3NhZ2V7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgcGFkZGluZy1yaWdodDogMyU7XHJcbn1cclxuLmxpbmV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxLjUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5sZWZ0TGluZXtcclxuICBsZWZ0OjA7XHJcbiAgdG9wOjA7XHJcbn1cclxuLnJpZ2h0TGluZXtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuLmZyb21OYW1le1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZnJvbUlue1xyXG4gIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDk5OXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA5OTlweDtcclxufVxyXG4uZnJvbU91dHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA5OTlweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA5OTlweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4jdGV4dENvbW1zQ29udHJvbHN7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDQ7XHJcbiAgdG9wOjg1JTtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6IDk2JTtcclxuICBoZWlnaHQ6IDEyJTtcclxuICBwYWRkaW5nOiAyJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMHB4IC03cHggMTBweCAtM3B4ICMwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG59XHJcbiN0ZXh0SW5wdXR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXgtZ3JvdzogLjc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMiU7XHJcbn1cclxuI3RleHRJbnB1dEZpZWxke1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcbiN0ZXh0SW5wdXRGaWVsZDpmb2N1c3tcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuI3RleHRTZW5ke1xyXG4gIGZsZXgtZ3JvdzogLjM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMTg1LCAxODUpO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4xcyBsaW5lYXI7XHJcbn1cclxuI3RleHRTZW5kOmhvdmVye1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4ICM1NTU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/editor/textcomms/textcomms.component.html":
/*!***********************************************************!*\
  !*** ./src/app/editor/textcomms/textcomms.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"textCommsContainer\">\r\n  <div id=\"textCommsHeader\" (click)=\"onToggle()\">\r\n    <div *ngIf=\"this.noOfUnreadMessages > 0\" id=\"noOfUM\">{{ noOfUnreadMessages }}</div>\r\n    <div id=\"microphoneIcon\" (click)=\"$event.stopPropagation()\" #microphoneIcon (mousedown)=\"streamStart($event)\" (mouseup)=\"streamEnd($event)\"></div>\r\n    <div class=\"speaker\" #speakerIcon (click)=\"speakerToggle($event)\" id=\"speakerIcon\"></div>\r\n  </div>\r\n  <div id=\"textCommsBody\">\r\n    <div id=\"textCommsMessages\">\r\n      <div\r\n        *ngFor=\"let message of messages\"\r\n        class=\"messageContainer box\"\r\n        [class.outMessage]=\"message.from == 'me'\"\r\n        [class.inMessage]=\"message.from !== 'me'\">\r\n\r\n        <div class=\"line\" [class.leftLine]=\"message.from !== 'me'\" [class.rightLine]=\"message.from == 'me'\"></div>\r\n        <div [class.fromIn]=\"message.from !== 'me'\" [class.fromOut]=\"message.from == 'me'\" class=\"fromName\" [ngStyle]=\"{'background-color': getRandomColor(message.from)}\">{{ message.from }}</div>\r\n        {{ message.message }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"textCommsControls\">\r\n    <div id=\"textInput\">\r\n      <textarea #textInputField id=\"textInputField\" noresize></textarea>\r\n    </div>\r\n    <div id=\"textSend\" (click)=\"sendMessage()\">Send</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/editor/textcomms/textcomms.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/editor/textcomms/textcomms.component.ts ***!
  \*********************************************************/
/*! exports provided: TextcommsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextcommsComponent", function() { return TextcommsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editor.service */ "./src/app/editor/editor.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _peer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../peer.service */ "./src/app/peer.service.ts");






var TextcommsComponent = /** @class */ (function () {
    function TextcommsComponent(editorService, socketService, authServie, peerService) {
        var _this = this;
        this.editorService = editorService;
        this.socketService = socketService;
        this.authServie = authServie;
        this.peerService = peerService;
        this.colorClasses = ['#99FFCC', '#CCCCFF', '#CCFF99', '#FFCC99', '#FFFF99'];
        this.memberColor = {};
        this.noOfUnreadMessages = 1;
        this.speakerStatus = true;
        this.username = null;
        this.messages = [];
        this.peerService.createPeer();
        this.socketService.receiveTextMessage$.subscribe(function (data) {
            setTimeout(function () {
                _this.messages.push(data);
            }, 0);
        });
    }
    TextcommsComponent.prototype.ngOnInit = function () {
    };
    TextcommsComponent.prototype.ngAfterViewInit = function () {
    };
    TextcommsComponent.prototype.onToggle = function () {
        this.editorService.onTextCommsToggle();
    };
    TextcommsComponent.prototype.speakerToggle = function (event) {
        event.stopPropagation();
        this.speakerStatus = !this.speakerStatus;
        if (this.speakerStatus) {
            this.speakerIcon.nativeElement.className = 'speaker';
        }
        else {
            this.speakerIcon.nativeElement.className = 'nospeaker';
        }
        this.peerService.speakerStatus = this.speakerStatus;
    };
    TextcommsComponent.prototype.getRandomColor = function (memberName) {
        if (this.memberColor[memberName]) {
            return this.memberColor[memberName];
        }
        var colorClassIndex = Math.floor(Math.random() * this.colorClasses.length);
        var colorClass = this.colorClasses[colorClassIndex];
        this.colorClasses.splice(colorClassIndex, 1);
        this.memberColor[memberName] = colorClass;
        return this.memberColor[memberName];
    };
    TextcommsComponent.prototype.sendMessage = function () {
        var message = this.textInputField.nativeElement.value;
        this.textInputField.nativeElement.value = '';
        if (message !== '' && message !== 'undefined') {
            this.socketService.sendTextMessage(message, this.editorService.getProjectID(), this.authServie.currentUsername);
            this.messages.push({
                from: 'me',
                message: message
            });
        }
    };
    TextcommsComponent.prototype.streamStart = function (event) {
        event.stopPropagation();
        this.microphoneIcon.nativeElement.classList.add('micAnimStart');
        this.peerService.startVoiceBroadcast();
    };
    TextcommsComponent.prototype.streamEnd = function (event) {
        event.stopPropagation();
        this.microphoneIcon.nativeElement.classList.remove('micAnimStart');
        this.peerService.endVoiceBroadcast();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('speakerIcon'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TextcommsComponent.prototype, "speakerIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textInputField'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TextcommsComponent.prototype, "textInputField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('microphoneIcon'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TextcommsComponent.prototype, "microphoneIcon", void 0);
    TextcommsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-textcomms',
            template: __webpack_require__(/*! ./textcomms.component.html */ "./src/app/editor/textcomms/textcomms.component.html"),
            styles: [__webpack_require__(/*! ./textcomms.component.css */ "./src/app/editor/textcomms/textcomms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _peer_service__WEBPACK_IMPORTED_MODULE_5__["PeerService"]])
    ], TextcommsComponent);
    return TextcommsComponent;
}());



/***/ }),

/***/ "./src/app/editor/toolbar/toolbar.component.css":
/*!******************************************************!*\
  !*** ./src/app/editor/toolbar/toolbar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#toolbarComponentContainer{\r\n  position: absolute;\r\n  width:100%;\r\n  height:100%;\r\n  top:0;\r\n  left:0;\r\n}\r\n#upperToolbarContainer{\r\n  position: absolute;\r\n  width:100%;\r\n  height:50%;\r\n  top:0;\r\n  left:0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n#toolbarLogoContainer{\r\n  position: relative;\r\n  height: 100%;\r\n  background-image: url('hideLogoSmall.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 70%;\r\n}\r\n#toolbarOptionsContainer{\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n.toolbarOptionItem{\r\n  position: relative;\r\n  height:100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-family: 'Roboto';\r\n  cursor: pointer;\r\n  color: #A8A8A8;\r\n  padding-left: 1vw;\r\n  padding-right: 1vw;\r\n  transition: background-color .1s linear;\r\n  font-size: .9em;\r\n}\r\n.toolbarOptionItem:hover{\r\n  background-color: gray;\r\n}\r\n.toolbarSuboptionsContainer{\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  left:0;\r\n  top:100%;\r\n  padding-top: .5vh;\r\n  padding-bottom: .5vh;\r\n  width: 220px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  background-color: #606060;\r\n  z-index: 6;\r\n  box-shadow: 1px 1px 7px .5px;\r\n  transition: opacity .1s linear;\r\n}\r\n.toolbarSuboptionItem{\r\n  position: relative;\r\n  width: calc(100% - 2vw);\r\n  padding-top: 1vh;\r\n  padding-bottom: 1vh;\r\n  padding-left: 2vw;\r\n  font-family: 'Roboto';\r\n  color: #fff;\r\n  text-align: left;\r\n  font-size: 12px;\r\n}\r\n.toolbarSuboptionItem:hover{\r\n  background-color: gray;\r\n}\r\n.toolbarSuboptionSeperator{\r\n  width: 100%;\r\n  height: 1px;\r\n  margin-top: .5vh;\r\n  margin-bottom: .5vh;\r\n  background-color: #000;\r\n}\r\n.toolbarSubSuboptionsContainer{\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  left:100%;\r\n  top: -0.5vh;\r\n  padding-top: .5vh;\r\n  padding-bottom: .5vh;\r\n  width: 220px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  background-color: #606060;\r\n  box-shadow: 1px 1px 7px .5px;\r\n  transition: opacity .1s linear;\r\n}\r\n#upperToolbarExtras{\r\n  flex-grow: .3;\r\n}\r\n#lowerToolbarContainer{\r\n  position: absolute;\r\n  width:calc(100% - 0.5vw);\r\n  height:50%;\r\n  top:50%;\r\n  left:0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding-left: 1vw;\r\n}\r\n#quickOptionsContainer{\r\n  height: 100%;\r\n  flex-grow: .7;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n.quickOptionItem{\r\n  height: 100%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 40%;\r\n  cursor: pointer;\r\n  transition: background-color .1s linear;\r\n}\r\n.quickOptionItem:hover{\r\n  background-color: gray;\r\n}\r\n.quickOptionSeperator{\r\n  position: relative;\r\n  width:1px;\r\n  background-color: #000;\r\n  height:45%;\r\n  margin-left: 1vw;\r\n  margin-right: 1vw;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsS0FBSztFQUNMLE1BQU07QUFDUjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsS0FBSztFQUNMLE1BQU07RUFDTixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUFpRTtFQUNqRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLDRCQUE0QjtFQUM1Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsT0FBTztFQUNQLE1BQU07RUFDTixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHVDQUF1QztBQUN6QztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b29sYmFyQ29tcG9uZW50Q29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxufVxyXG4jdXBwZXJUb29sYmFyQ29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDo1MCU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI3Rvb2xiYXJMb2dvQ29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hpZGVMb2dvU21hbGwucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA3MCU7XHJcbn1cclxuI3Rvb2xiYXJPcHRpb25zQ29udGFpbmVye1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50b29sYmFyT3B0aW9uSXRlbXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNBOEE4QTg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XHJcbiAgcGFkZGluZy1yaWdodDogMXZ3O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjFzIGxpbmVhcjtcclxuICBmb250LXNpemU6IC45ZW07XHJcbn1cclxuLnRvb2xiYXJPcHRpb25JdGVtOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn1cclxuLnRvb2xiYXJTdWJvcHRpb25zQ29udGFpbmVye1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6MDtcclxuICB0b3A6MTAwJTtcclxuICBwYWRkaW5nLXRvcDogLjV2aDtcclxuICBwYWRkaW5nLWJvdHRvbTogLjV2aDtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XHJcbiAgei1pbmRleDogNjtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDdweCAuNXB4O1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzIGxpbmVhcjtcclxufVxyXG4udG9vbGJhclN1Ym9wdGlvbkl0ZW17XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAydncpO1xyXG4gIHBhZGRpbmctdG9wOiAxdmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcclxuICBwYWRkaW5nLWxlZnQ6IDJ2dztcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnRvb2xiYXJTdWJvcHRpb25JdGVtOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn1cclxuLnRvb2xiYXJTdWJvcHRpb25TZXBlcmF0b3J7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLXRvcDogLjV2aDtcclxuICBtYXJnaW4tYm90dG9tOiAuNXZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn1cclxuLnRvb2xiYXJTdWJTdWJvcHRpb25zQ29udGFpbmVye1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6MTAwJTtcclxuICB0b3A6IC0wLjV2aDtcclxuICBwYWRkaW5nLXRvcDogLjV2aDtcclxuICBwYWRkaW5nLWJvdHRvbTogLjV2aDtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggLjVweDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcyBsaW5lYXI7XHJcbn1cclxuI3VwcGVyVG9vbGJhckV4dHJhc3tcclxuICBmbGV4LWdyb3c6IC4zO1xyXG59XHJcbiNsb3dlclRvb2xiYXJDb250YWluZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOmNhbGMoMTAwJSAtIDAuNXZ3KTtcclxuICBoZWlnaHQ6NTAlO1xyXG4gIHRvcDo1MCU7XHJcbiAgbGVmdDowO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XHJcbn1cclxuI3F1aWNrT3B0aW9uc0NvbnRhaW5lcntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxleC1ncm93OiAuNztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5xdWlja09wdGlvbkl0ZW17XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xcyBsaW5lYXI7XHJcbn1cclxuLnF1aWNrT3B0aW9uSXRlbTpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcbi5xdWlja09wdGlvblNlcGVyYXRvcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6MXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgaGVpZ2h0OjQ1JTtcclxuICBtYXJnaW4tbGVmdDogMXZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMXZ3O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/editor/toolbar/toolbar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/editor/toolbar/toolbar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"toolbarComponentContainer\">\n  <div id=\"upperToolbarContainer\">\n    <div #toolbarLogoContainer id=\"toolbarLogoContainer\" [ngStyle]=\"{ width: toolbarLogoContainer.clientHeight + 'px'}\"></div>\n    <div id=\"toolbarOptionsContainer\">\n      <div #fileOption (mouseenter)=\"toolbarOptionEnter('file')\" class=\"toolbarOptionItem\" (click)=\"toolbarOptionClicked('file')\">\n        File\n        <div #fileSuboptionsContainer class=\"toolbarSuboptionsContainer\">\n          <div class=\"toolbarSuboptionItem\">New File...</div>\n          <div class=\"toolbarSuboptionSeperator\"></div>\n          <div class=\"toolbarSuboptionItem\">Sync</div>\n          <div class=\"toolbarSuboptionItem\" (click)=\"syncAllCicked()\">Sync All</div>\n          <div class=\"toolbarSuboptionSeperator\"></div>\n          <div class=\"toolbarSuboptionItem\">Clone</div>\n          <div class=\"toolbarSuboptionItem\">Rename</div>\n          <div class=\"toolbarSuboptionItem\">Refresh</div>\n          <div class=\"toolbarSuboptionSeperator\"></div>\n          <div class=\"toolbarSuboptionItem\">Delete</div>\n          <div class=\"toolbarSuboptionItem\">Close All Tabs</div>\n        </div>\n      </div>\n      <div #editOption (mouseenter)=\"toolbarOptionEnter('edit')\" class=\"toolbarOptionItem\" (click)=\"toolbarOptionClicked('edit')\">\n        Edit\n        <div #editSuboptionsContainer class=\"toolbarSuboptionsContainer\">\n            <div class=\"toolbarSuboptionItem\">Undo</div>\n            <div class=\"toolbarSuboptionItem\">Redo</div>\n            <div class=\"toolbarSuboptionSeperator\"></div>\n            <div class=\"toolbarSuboptionItem\">Beautify</div>\n            <div class=\"toolbarSuboptionItem\">Toggle Comment</div>\n            <div class=\"toolbarSuboptionSeperator\"></div>\n            <div class=\"toolbarSuboptionItem\">Code Folding</div>\n            <div class=\"toolbarSuboptionItem\">Convert Case</div>\n        </div>\n      </div>\n      <div #findOption (mouseenter)=\"toolbarOptionEnter('find')\" class=\"toolbarOptionItem\" (click)=\"toolbarOptionClicked('find')\">\n        Find\n        <div #findSuboptionsContainer class=\"toolbarSuboptionsContainer\">\n            <div class=\"toolbarSuboptionItem\">Find...</div>\n            <div class=\"toolbarSuboptionItem\">Find Next</div>\n            <div class=\"toolbarSuboptionItem\">Find Previous</div>\n            <div class=\"toolbarSuboptionSeperator\"></div>\n            <div class=\"toolbarSuboptionItem\">Replace...</div>\n            <div class=\"toolbarSuboptionItem\">Replace Next</div>\n            <div class=\"toolbarSuboptionItem\">Replace All</div>\n            <div class=\"toolbarSuboptionSeperator\"></div>\n            <div class=\"toolbarSuboptionItem\">Find in Files</div>\n        </div>\n      </div>\n      <div #viewOption (mouseenter)=\"toolbarOptionEnter('view')\" class=\"toolbarOptionItem\" (click)=\"toolbarOptionClicked('view')\">\n        View\n        <div #viewSuboptionsContainer class=\"toolbarSuboptionsContainer\">\n            <div class=\"toolbarSuboptionItem\">\n              Layout\n              <div class=\"toolbarSubSuboptionsContainer\">\n                <div class=\"toolbarSuboptionItem\">Single</div>\n                <div class=\"toolbarSuboptionItem\">Columns:2</div>\n                <div class=\"toolbarSuboptionItem\">Columns:3</div>\n                <div class=\"toolbarSuboptionItem\">Columns:4</div>\n                <div class=\"toolbarSuboptionItem\">Rows:2</div>\n                <div class=\"toolbarSuboptionItem\">Rows:3</div>\n                <div class=\"toolbarSuboptionItem\">Grid</div>\n              </div>\n            </div>\n            <div class=\"toolbarSuboptionItem\">File Explorer</div>\n            <div class=\"toolbarSuboptionSeperator\"></div>\n            <div class=\"toolbarSuboptionItem\">Increase Font Size</div>\n            <div class=\"toolbarSuboptionItem\">Decrease Font Size</div>\n            <div class=\"toolbarSuboptionItem\">Reset Font Size</div>\n            <div class=\"toolbarSuboptionSeperator\"></div>\n            <div class=\"toolbarSuboptionItem\">Errors or Warnings</div>\n            <div class=\"toolbarSuboptionItem\">Line Numbers</div>\n            <div class=\"toolbarSuboptionItem\">Show Hidden Files</div>\n        </div>\n      </div>\n      <div #prefOption (mouseenter)=\"toolbarOptionEnter('pref')\" class=\"toolbarOptionItem\" (click)=\"toolbarOptionClicked('pref')\">\n        Preferences\n        <div #prefSuboptionsContainer class=\"toolbarSuboptionsContainer\">\n            <div class=\"toolbarSuboptionItem\">General</div>\n            <div class=\"toolbarSuboptionItem\">Key Bindings</div>\n            <div class=\"toolbarSuboptionItem\">Linting</div>\n            <div class=\"toolbarSuboptionItem\">Snippets</div>\n            <div class=\"toolbarSuboptionSeperator\"></div>\n            <div class=\"toolbarSuboptionItem\">Open as JSON</div>\n        </div>\n      </div>\n      <div #helpOption (mouseenter)=\"toolbarOptionEnter('help')\" class=\"toolbarOptionItem\" (click)=\"toolbarOptionClicked('help')\">\n        Help\n        <div #helpSuboptionsContainer class=\"toolbarSuboptionsContainer\">\n            <div class=\"toolbarSuboptionItem\">Changelog</div>\n            <div class=\"toolbarSuboptionSeperator\"></div>\n            <div class=\"toolbarSuboptionItem\">Documentation</div>\n            <div class=\"toolbarSuboptionItem\">Suggest a Feature</div>\n            <div class=\"toolbarSuboptionSeperator\"></div>\n            <div class=\"toolbarSuboptionItem\">Terms of Service</div>\n            <div class=\"toolbarSuboptionItem\">Privacy Policy</div>\n        </div>\n      </div>\n    </div>\n    <div id=\"upperToolbarExtras\"></div>\n  </div>\n  <div id=\"lowerToolbarContainer\">\n    <div id=\"quickOptionsContainer\">\n      <div #newFileOption class=\"quickOptionItem\" [ngStyle]=\"{ width: newFileOption.clientHeight + 'px', 'background-image': 'url(\\'../../../assets/images/newfile.png\\')' }\"></div>\n      <div #syncOption class=\"quickOptionItem\" (click)=\"this.syncClicked()\" [ngStyle]=\"{ width: syncOption.clientHeight + 'px', 'background-image': 'url(\\'../../../assets/images/sync.png\\')' }\"></div>\n      <div class=\"quickOptionSeperator\"></div>\n      <div #undoOption class=\"quickOptionItem\" [ngStyle]=\"{ width: undoOption.clientHeight + 'px', 'background-image': 'url(\\'../../../assets/images/undo.png\\')' }\"></div>\n      <div #redoOption class=\"quickOptionItem\" [ngStyle]=\"{ width: redoOption.clientHeight + 'px', 'background-image': 'url(\\'../../../assets/images/redo.png\\')' }\"></div>\n      <div class=\"quickOptionSeperator\"></div>\n      <div #findOption class=\"quickOptionItem\" [ngStyle]=\"{ width: findOption.clientHeight + 'px', 'background-image': 'url(\\'../../../assets/images/find.png\\')' }\"></div>\n      <div #replaceOption class=\"quickOptionItem\" [ngStyle]=\"{ width: replaceOption.clientHeight + 'px', 'background-image': 'url(\\'../../../assets/images/replace.png\\')' }\"></div>\n      <div #gotoOption class=\"quickOptionItem\" [ngStyle]=\"{ width: gotoOption.clientHeight + 'px', 'background-image': 'url(\\'../../../assets/images/goto.png\\')' }\"></div>\n      <div class=\"quickOptionSeperator\"></div>\n      <div #settingsOption class=\"quickOptionItem\" [ngStyle]=\"{ width: settingsOption.clientHeight + 'px', 'background-image': 'url(\\'../../../assets/images/settings.png\\')' }\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/toolbar/toolbar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/editor/toolbar/toolbar.component.ts ***!
  \*****************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editor.service */ "./src/app/editor/editor.service.ts");




var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(socketService, editorService) {
        this.socketService = socketService;
        this.editorService = editorService;
        this.isToolbarOpened = false;
        this.lastOpenedToolbar = '';
        this.currOpenedToolbar = '';
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.toolbarOptionClicked = function (option) {
        this.closeAllToolbars();
        this.openToolbar(option);
        this.currOpenedToolbar = option;
        if (this.isToolbarOpened) {
            if (this.lastOpenedToolbar === option) {
                this.closeAllToolbars();
                this.isToolbarOpened = false;
                this.currOpenedToolbar = '';
            }
        }
        else {
            this.isToolbarOpened = true;
        }
        this.lastOpenedToolbar = option;
    };
    ToolbarComponent.prototype.toolbarOptionEnter = function (option) {
        this.closeAllToolbars();
        if (this.isToolbarOpened) {
            this.openToolbar(option);
            this.lastOpenedToolbar = option;
        }
        else {
            switch (option) {
                case 'file': {
                    this.fileOption.nativeElement.style.backgroundColor = 'gray';
                    break;
                }
                case 'edit': {
                    this.editOption.nativeElement.style.backgroundColor = 'gray';
                    break;
                }
                case 'find': {
                    this.findOption.nativeElement.style.backgroundColor = 'gray';
                    break;
                }
                case 'view': {
                    this.viewOption.nativeElement.style.backgroundColor = 'gray';
                    break;
                }
                case 'pref': {
                    this.prefOption.nativeElement.style.backgroundColor = 'gray';
                    break;
                }
                case 'help': {
                    this.helpOption.nativeElement.style.backgroundColor = 'gray';
                    break;
                }
                default: {
                    break;
                }
            }
        }
    };
    ToolbarComponent.prototype.openToolbar = function (option) {
        switch (option) {
            case 'file': {
                this.fileSuboptionsContainer.nativeElement.style.opacity = '1';
                this.fileSuboptionsContainer.nativeElement.style.pointerEvents = 'all';
                this.fileOption.nativeElement.style.backgroundColor = 'gray';
                break;
            }
            case 'edit': {
                this.editSuboptionsContainer.nativeElement.style.opacity = '1';
                this.editSuboptionsContainer.nativeElement.style.pointerEvents = 'all';
                this.editOption.nativeElement.style.backgroundColor = 'gray';
                break;
            }
            case 'find': {
                this.findSuboptionsContainer.nativeElement.style.opacity = '1';
                this.findSuboptionsContainer.nativeElement.style.pointerEvents = 'all';
                this.findOption.nativeElement.style.backgroundColor = 'gray';
                break;
            }
            case 'view': {
                this.viewSuboptionsContainer.nativeElement.style.opacity = '1';
                this.viewSuboptionsContainer.nativeElement.style.pointerEvents = 'all';
                this.viewOption.nativeElement.style.backgroundColor = 'gray';
                break;
            }
            case 'pref': {
                this.prefSuboptionsContainer.nativeElement.style.opacity = '1';
                this.prefSuboptionsContainer.nativeElement.style.pointerEvents = 'all';
                this.prefOption.nativeElement.style.backgroundColor = 'gray';
                break;
            }
            case 'help': {
                this.helpSuboptionsContainer.nativeElement.style.opacity = '1';
                this.helpSuboptionsContainer.nativeElement.style.pointerEvents = 'all';
                this.helpOption.nativeElement.style.backgroundColor = 'gray';
                break;
            }
            default: {
                break;
            }
        }
    };
    ToolbarComponent.prototype.closeAllToolbars = function () {
        this.fileSuboptionsContainer.nativeElement.style.opacity = '0';
        this.fileSuboptionsContainer.nativeElement.style.pointerEvents = 'none';
        this.fileOption.nativeElement.style.backgroundColor = '#484848';
        this.editSuboptionsContainer.nativeElement.style.opacity = '0';
        this.editSuboptionsContainer.nativeElement.style.pointerEvents = 'none';
        this.editOption.nativeElement.style.backgroundColor = '#484848';
        this.findSuboptionsContainer.nativeElement.style.opacity = '0';
        this.findSuboptionsContainer.nativeElement.style.pointerEvents = 'none';
        this.findOption.nativeElement.style.backgroundColor = '#484848';
        this.viewSuboptionsContainer.nativeElement.style.opacity = '0';
        this.viewSuboptionsContainer.nativeElement.style.pointerEvents = 'none';
        this.viewOption.nativeElement.style.backgroundColor = '#484848';
        this.prefSuboptionsContainer.nativeElement.style.opacity = '0';
        this.prefSuboptionsContainer.nativeElement.style.pointerEvents = 'none';
        this.prefOption.nativeElement.style.backgroundColor = '#484848';
        this.helpSuboptionsContainer.nativeElement.style.opacity = '0';
        this.helpSuboptionsContainer.nativeElement.style.pointerEvents = 'none';
        this.helpOption.nativeElement.style.backgroundColor = '#484848';
    };
    ToolbarComponent.prototype.syncClicked = function () {
        this.socketService.getExplorerStructure(this.editorService.getProjectID());
    };
    ToolbarComponent.prototype.syncAllCicked = function () {
        this.editorService.syncAll();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileSuboptionsContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ToolbarComponent.prototype, "fileSuboptionsContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editSuboptionsContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ToolbarComponent.prototype, "editSuboptionsContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('findSuboptionsContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ToolbarComponent.prototype, "findSuboptionsContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('viewSuboptionsContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ToolbarComponent.prototype, "viewSuboptionsContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('prefSuboptionsContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ToolbarComponent.prototype, "prefSuboptionsContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('helpSuboptionsContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ToolbarComponent.prototype, "helpSuboptionsContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileOption'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ToolbarComponent.prototype, "fileOption", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editOption'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ToolbarComponent.prototype, "editOption", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('findOption'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ToolbarComponent.prototype, "findOption", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('viewOption'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ToolbarComponent.prototype, "viewOption", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('prefOption'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ToolbarComponent.prototype, "prefOption", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('helpOption'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ToolbarComponent.prototype, "helpOption", void 0);
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/editor/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/editor/toolbar/toolbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            _editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/editproject/editproject.component.css":
/*!*******************************************************!*\
  !*** ./src/app/editproject/editproject.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRwcm9qZWN0L2VkaXRwcm9qZWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/editproject/editproject.component.html":
/*!********************************************************!*\
  !*** ./src/app/editproject/editproject.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  editproject works!\n</p>\n"

/***/ }),

/***/ "./src/app/editproject/editproject.component.ts":
/*!******************************************************!*\
  !*** ./src/app/editproject/editproject.component.ts ***!
  \******************************************************/
/*! exports provided: EditprojectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprojectComponent", function() { return EditprojectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditprojectComponent = /** @class */ (function () {
    function EditprojectComponent() {
    }
    EditprojectComponent.prototype.ngOnInit = function () {
    };
    EditprojectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editproject',
            template: __webpack_require__(/*! ./editproject.component.html */ "./src/app/editproject/editproject.component.html"),
            styles: [__webpack_require__(/*! ./editproject.component.css */ "./src/app/editproject/editproject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditprojectComponent);
    return EditprojectComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainHeader {\r\n  position: absolute;\r\n  height:100%;\r\n  width:100%;\r\n  top:100%;\r\n  left:0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  transition: top .2s ease;\r\n}\r\n#opacityLayer{\r\n  position: absolute;\r\n  height:100%;\r\n  width:100%;\r\n  top:0;\r\n  left:0;\r\n  background-color: #fff;\r\n  opacity: 0;\r\n  z-index: 1;\r\n  transition: opacity .1s linear;\r\n}\r\n#headerToggle{\r\n  display: none;\r\n  position: absolute;\r\n  top:100%;\r\n  right:15%;\r\n  padding:.5%;\r\n  padding-left: 1%;\r\n  padding-right: 1%;\r\n  background-color: chartreuse;\r\n  font-family: 'Azonix';\r\n  font-size: .7em;\r\n  word-wrap: none;\r\n  cursor: pointer;\r\n  box-shadow: 0px 2px 2.5px gray, -2.5px 2px 3px gray, 2.5px 2px 3px gray;\r\n}\r\n#headerLeft{\r\n  display: flex;\r\n  height: 100%;\r\n  flex-direction: row;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  z-index: 2;\r\n}\r\n.headerLeftElement{\r\n  margin-left: 1.5vh;\r\n}\r\n#navDashboard{\r\n  font-family: 'Azonix';\r\n  cursor: pointer;\r\n}\r\n#logoContainer{\r\n  width: 30vh;\r\n  height: 100%;\r\n  background-image: url('hideLogo.png');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 100%;\r\n  cursor: pointer;\r\n}\r\n#logoContainer:focus{\r\n  outline: none;\r\n}\r\n#headerMiddle{\r\n  display: flex;\r\n  height: 100%;\r\n  flex-direction: row;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 2;\r\n}\r\n#headerRight{\r\n  display: flex;\r\n  height: 100%;\r\n  flex-direction: row;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  z-index: 2;\r\n}\r\n.headerRightElement{\r\n  margin-right: 5vh;\r\n}\r\n#userAvatarContainer{\r\n  display: flex;\r\n  width: 13vh;\r\n  height: 13vh;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n#userAvatar{\r\n  width: 70%;\r\n  padding-bottom: 70%;\r\n  background-image: url('defaultAvatar.png');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 100%;\r\n  cursor: pointer;\r\n  border-radius: 999px;\r\n  box-shadow: 0 0 10px .5px;\r\n  transition: -webkit-transform .1s linear;\r\n  transition: transform .1s linear;\r\n  transition: transform .1s linear, -webkit-transform .1s linear;\r\n}\r\n#userAvatar:hover{\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n#userDropDownContainer{\r\n  position: absolute;\r\n  padding-top:2vh;\r\n  padding-bottom: 2vh;\r\n  right:-15vh;\r\n  width: 15vh;\r\n  top: 100%;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 5px;\r\n  transition: right .2s ease, opacity .2s ease;\r\n}\r\n.userDropDownItem{\r\n  flex-grow: 1;\r\n  display: flex;\r\n  width: 100%;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-left:1.5vh;\r\n  padding-right:1.5vh;\r\n  padding-top:1vh;\r\n  padding-bottom: 1vh;\r\n  font-family: 'Azonix';\r\n  transition: box-shadow .2s linear, -webkit-transform .2s linear;\r\n  transition: transform .2s linear, box-shadow .2s linear;\r\n  transition: transform .2s linear, box-shadow .2s linear, -webkit-transform .2s linear;\r\n  cursor: pointer;\r\n  border: 1px solid #000;\r\n}\r\n.userDropDownItem:focus{\r\n  outline: none;\r\n}\r\n.userDropDownItem:hover{\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  box-shadow: 0 0 10px .5px;\r\n}\r\n#notificationsToggle{\r\n  position: relative;\r\n  display: flex;\r\n  width: 25%;\r\n  padding-bottom: 25%;\r\n  background-image: url('notification.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  cursor: pointer;\r\n  transition: -webkit-transform .1s linear;\r\n  transition: transform .1s linear;\r\n  transition: transform .1s linear, -webkit-transform .1s linear;\r\n  font-family: 'Roboto';\r\n}\r\n#notificationsToggle:hover{\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n#notificationsReference{\r\n  position: absolute;\r\n  width:30%;\r\n  height:150%;\r\n  right:2%;\r\n  top:100%;\r\n  display: flex;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  background-color: #fff;\r\n  box-shadow: 0 0 10px .5px;\r\n  transition: opacity .2s linear;\r\n  border-radius: 10px;\r\n}\r\n#notificationsContainer{\r\n  width:100%;\r\n  height:92%;\r\n  padding:2%;\r\n  display: flex;\r\n}\r\n#notifications{\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n  width:100%;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n.notificationItemContainer{\r\n  position: relative;\r\n  border: 1px solid #000;\r\n  margin-bottom: 2%;\r\n  width: 99%;\r\n  height:45%;\r\n  cursor: pointer;\r\n}\r\n.inviteItem{\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  width:90%;\r\n  left:0;\r\n  height:100%;\r\n}\r\n.notificationsControl{\r\n  position: absolute;\r\n  width:10%;\r\n  left:90%;\r\n  height: 100%;\r\n  top:0;\r\n}\r\n.readUnreadControl{\r\n  position: absolute;\r\n  width:100%;\r\n  height:50%;\r\n  top:0;\r\n  left:0;\r\n}\r\n.readIcon{\r\n  position: absolute;\r\n  width:100%;\r\n  padding-bottom: 100%;\r\n  background-image: url('read.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 50%;\r\n}\r\n.unreadIcon{\r\n  position: absolute;\r\n  width:100%;\r\n  padding-bottom: 100%;\r\n  background-image: url('unread.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 50%;\r\n}\r\n.deleteControl{\r\n  position: absolute;\r\n  top:50%;\r\n  left:0;\r\n  width:100%;\r\n  height:50%;\r\n}\r\n.deleteIcon{\r\n  position: absolute;\r\n  width:100%;\r\n  padding-bottom: 100%;\r\n  background-image: url('delete.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 50%;\r\n}\r\n.inviteItemContentLeft{\r\n  position: absolute;\r\n  height:100%;\r\n  width:70%;\r\n  top:0;\r\n  left:0;\r\n}\r\n.inviteItemFrom{\r\n  position: absolute;\r\n  top:0;\r\n  height:60%;\r\n  width: 100%;\r\n  left:0;\r\n  padding-left: 5%;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  font-family: 'Roboto';\r\n  font-weight: bold;\r\n}\r\n.inviteItemMessage{\r\n  position: absolute;\r\n  top:60%;\r\n  width:100%;\r\n  left:0;\r\n  height:40%;\r\n  padding-left: 5%;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: left;\r\n  font-family: 'Roboto';\r\n  font-size: 80%;\r\n}\r\n.inviteItemContentRight{\r\n  position: absolute;\r\n  height:100%;\r\n  width:30%;\r\n  top:0;\r\n  left:70%;\r\n}\r\n.inviteItemUrlButton{\r\n  position: absolute;\r\n  width:80%;\r\n  height:50%;\r\n  top:23%;\r\n  left:0;\r\n  display: flex;\r\n  font-family: 'Roboto';\r\n  padding: 5%;\r\n  padding-top:2%;\r\n  padding-bottom: 2%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  background-color: greenyellow;\r\n  font-size: .8em;\r\n  font-weight: bold;\r\n  border-radius: 999px;\r\n  transition: box-shadow .1s linear;\r\n}\r\n.inviteItemUrlButton:hover{\r\n  box-shadow: 0 0 7px .5px;\r\n}\r\n#noNotifications{\r\n  width:100%;\r\n  text-align: center;\r\n  font-family: 'Roboto';\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsUUFBUTtFQUNSLE1BQU07RUFDTixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsS0FBSztFQUNMLE1BQU07RUFDTixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFVBQVU7RUFDViw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLHVFQUF1RTtBQUN6RTtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUF5RDtFQUN6RCw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDBDQUE4RDtFQUM5RCw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6Qix3Q0FBZ0M7RUFBaEMsZ0NBQWdDO0VBQWhDLDhEQUFnQztBQUNsQztBQUNBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsK0RBQXVEO0VBQXZELHVEQUF1RDtFQUF2RCxxRkFBdUQ7RUFDdkQsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHlDQUE2RDtFQUM3RCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysd0NBQWdDO0VBQWhDLGdDQUFnQztFQUFoQyw4REFBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxRQUFRO0VBQ1IsUUFBUTtFQUNSLGFBQWE7RUFDYixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixVQUFVO0VBQ1YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixLQUFLO0VBQ0wsTUFBTTtFQUNOLFNBQVM7RUFDVCxNQUFNO0VBQ04sV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixZQUFZO0VBQ1osS0FBSztBQUNQO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixLQUFLO0VBQ0wsTUFBTTtBQUNSO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixpQ0FBcUQ7RUFDckQsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLG1DQUF1RDtFQUN2RCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsbUNBQXVEO0VBQ3ZELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxLQUFLO0VBQ0wsTUFBTTtBQUNSO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsS0FBSztFQUNMLFVBQVU7RUFDVixXQUFXO0VBQ1gsTUFBTTtFQUNOLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFVBQVU7RUFDVixNQUFNO0VBQ04sVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULEtBQUs7RUFDTCxRQUFRO0FBQ1Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLE9BQU87RUFDUCxNQUFNO0VBQ04sYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluSGVhZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICB0b3A6MTAwJTtcclxuICBsZWZ0OjA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB0cmFuc2l0aW9uOiB0b3AgLjJzIGVhc2U7XHJcbn1cclxuI29wYWNpdHlMYXllcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXMgbGluZWFyO1xyXG59XHJcbiNoZWFkZXJUb2dnbGV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjEwMCU7XHJcbiAgcmlnaHQ6MTUlO1xyXG4gIHBhZGRpbmc6LjUlO1xyXG4gIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgcGFkZGluZy1yaWdodDogMSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTtcclxuICBmb250LWZhbWlseTogJ0F6b25peCc7XHJcbiAgZm9udC1zaXplOiAuN2VtO1xyXG4gIHdvcmQtd3JhcDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAyLjVweCBncmF5LCAtMi41cHggMnB4IDNweCBncmF5LCAyLjVweCAycHggM3B4IGdyYXk7XHJcbn1cclxuI2hlYWRlckxlZnR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uaGVhZGVyTGVmdEVsZW1lbnR7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNXZoO1xyXG59XHJcbiNuYXZEYXNoYm9hcmR7XHJcbiAgZm9udC1mYW1pbHk6ICdBem9uaXgnO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jbG9nb0NvbnRhaW5lcntcclxuICB3aWR0aDogMzB2aDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2hpZGVMb2dvLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2xvZ29Db250YWluZXI6Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4jaGVhZGVyTWlkZGxle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4jaGVhZGVyUmlnaHR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmhlYWRlclJpZ2h0RWxlbWVudHtcclxuICBtYXJnaW4tcmlnaHQ6IDV2aDtcclxufVxyXG4jdXNlckF2YXRhckNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxM3ZoO1xyXG4gIGhlaWdodDogMTN2aDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4jdXNlckF2YXRhcntcclxuICB3aWR0aDogNzAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA3MCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2RlZmF1bHRBdmF0YXIucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAuNXB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgbGluZWFyO1xyXG59XHJcbiN1c2VyQXZhdGFyOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4jdXNlckRyb3BEb3duQ29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nLXRvcDoydmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJ2aDtcclxuICByaWdodDotMTV2aDtcclxuICB3aWR0aDogMTV2aDtcclxuICB0b3A6IDEwMCU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRyYW5zaXRpb246IHJpZ2h0IC4ycyBlYXNlLCBvcGFjaXR5IC4ycyBlYXNlO1xyXG59XHJcbi51c2VyRHJvcERvd25JdGVte1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDoxLjV2aDtcclxuICBwYWRkaW5nLXJpZ2h0OjEuNXZoO1xyXG4gIHBhZGRpbmctdG9wOjF2aDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXZoO1xyXG4gIGZvbnQtZmFtaWx5OiAnQXpvbml4JztcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGxpbmVhciwgYm94LXNoYWRvdyAuMnMgbGluZWFyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG59XHJcbi51c2VyRHJvcERvd25JdGVtOmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnVzZXJEcm9wRG93bkl0ZW06aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IC41cHg7XHJcbn1cclxuI25vdGlmaWNhdGlvbnNUb2dnbGV7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBwYWRkaW5nLWJvdHRvbTogMjUlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9ub3RpZmljYXRpb24ucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGxpbmVhcjtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbn1cclxuI25vdGlmaWNhdGlvbnNUb2dnbGU6aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbiNub3RpZmljYXRpb25zUmVmZXJlbmNle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDozMCU7XHJcbiAgaGVpZ2h0OjE1MCU7XHJcbiAgcmlnaHQ6MiU7XHJcbiAgdG9wOjEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggLjVweDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBsaW5lYXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4jbm90aWZpY2F0aW9uc0NvbnRhaW5lcntcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDo5MiU7XHJcbiAgcGFkZGluZzoyJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiNub3RpZmljYXRpb25ze1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuLm5vdGlmaWNhdGlvbkl0ZW1Db250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgd2lkdGg6IDk5JTtcclxuICBoZWlnaHQ6NDUlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW52aXRlSXRlbXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIHdpZHRoOjkwJTtcclxuICBsZWZ0OjA7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuLm5vdGlmaWNhdGlvbnNDb250cm9se1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDoxMCU7XHJcbiAgbGVmdDo5MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDowO1xyXG59XHJcbi5yZWFkVW5yZWFkQ29udHJvbHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6NTAlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxufVxyXG4ucmVhZEljb257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3JlYWQucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA1MCU7XHJcbn1cclxuLnVucmVhZEljb257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3VucmVhZC5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcclxufVxyXG4uZGVsZXRlQ29udHJvbHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjUwJTtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6NTAlO1xyXG59XHJcbi5kZWxldGVJY29ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9kZWxldGUucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA1MCU7XHJcbn1cclxuLmludml0ZUl0ZW1Db250ZW50TGVmdHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgd2lkdGg6NzAlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxufVxyXG4uaW52aXRlSXRlbUZyb217XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGhlaWdodDo2MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDowO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmludml0ZUl0ZW1NZXNzYWdle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6NjAlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgbGVmdDowO1xyXG4gIGhlaWdodDo0MCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG59XHJcbi5pbnZpdGVJdGVtQ29udGVudFJpZ2h0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICB3aWR0aDozMCU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDo3MCU7XHJcbn1cclxuLmludml0ZUl0ZW1VcmxCdXR0b257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOjgwJTtcclxuICBoZWlnaHQ6NTAlO1xyXG4gIHRvcDoyMyU7XHJcbiAgbGVmdDowO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIHBhZGRpbmc6IDUlO1xyXG4gIHBhZGRpbmctdG9wOjIlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcclxuICBmb250LXNpemU6IC44ZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMXMgbGluZWFyO1xyXG59XHJcbi5pbnZpdGVJdGVtVXJsQnV0dG9uOmhvdmVye1xyXG4gIGJveC1zaGFkb3c6IDAgMCA3cHggLjVweDtcclxufVxyXG4jbm9Ob3RpZmljYXRpb25ze1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #mainHeader id=\"mainHeader\">\n  <div id=\"opacityLayer\" [ngStyle]=\"{opacity: (headerOpacityFlag) ? .9 : 0 }\"></div>\n  <div #headerToggle (click)=\"onHeaderToggle()\" id=\"headerToggle\">{{ (headerStatusFlag) ? 'Hide Header' : 'Show Header' }}</div>\n  <div id=\"headerLeft\">\n    <div class=\"headerLeftElement\" id=\"logoContainer\" (click)=\"onLogoClick()\"></div>\n    <div class=\"headerLeftElement\" *ngIf=\"authStatus()\"  id=\"navDashboard\" routerLink=\"/dashboard\">Dashboard</div>\n  </div>\n  <div id=\"headerMiddle\"></div>\n  <div id=\"headerRight\">\n    <div *ngIf=\"this.authStatus()\" (click)=\"onNotificationsToggle()\" class=\"headerRightElement\" id=\"notificationsToggle\">\n      <div id=\"notificationsValue\">{{ noOfUnreadNotifications() }}</div>\n    </div>\n    <div *ngIf=\"this.authStatus()\" #notificationsReference class=\"headerRightElement\" id=\"notificationsReference\">\n      <div id=\"notificationsContainer\">\n        <div id=\"notifications\">\n          <div *ngIf=\"notifications.length <= 0\" id=\"noNotifications\">No Notifications</div>\n          <div *ngFor=\"let notification of notifications\" class=\"notificationItemContainer\">\n            <div class=\"inviteItem\" *ngIf=\"getNotificationType(notification) === 'invite'\">\n              <div class=\"inviteItemContentLeft\">\n                <div class=\"inviteItemFrom\">{{ notification.from }}</div>\n                <div class=\"inviteItemMessage\">Invitation: {{ notification.message }}</div>\n              </div>\n              <div class=\"inviteItemContentRight\">\n                <div (click)=\"onAcceptInvite(notification.inviteLink, notification.projectid)\" class=\"inviteItemUrlButton\">Accept</div>\n              </div>\n            </div>\n            <div class=\"notificationsControl\">\n              <div class=\"readUnreadControl\">\n                <div class=\"readIcon\"></div>\n                <div class=\"unreadIcon\"></div>\n              </div>\n              <div class=\"deleteControl\">\n                <div class=\"deleteIcon\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"headerRightElement\" id=\"userAvatarContainer\">\n      <div id=\"userAvatar\" (mouseenter)=\"dropdown('open')\" (mouseleave)=\"mouseLeaveDropDown()\"></div>\n      <div #userDropDown id=\"userDropDownContainer\" (mouseenter)=\"catchedMouse()\" (mouseleave)=\"dropdown('close')\">\n        <div *ngIf=\"!authStatus()\" class=\"userDropDownItem\" routerLink=\"/signin\">Sign in</div>\n        <ng-template [ngIf]=\"authStatus()\">\n          <div class=\"userDropDownItem\" (click)=\"onLogout()\">Log out</div>\n          <div class=\"userDropDownItem\" routerLink=\"/profile\">Profile</div>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dashboard/dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.service */ "./src/app/header/notification.service.ts");
/* harmony import */ var _notificationinvite_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notificationinvite.model */ "./src/app/header/notificationinvite.model.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notify.service */ "./src/app/notify.service.ts");









var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, commonService, notificationService, router, dashboardService, notifyService) {
        var _this = this;
        this.authService = authService;
        this.commonService = commonService;
        this.notificationService = notificationService;
        this.router = router;
        this.dashboardService = dashboardService;
        this.notifyService = notifyService;
        this.isDropDownOpened = false;
        this.isNotificationsOpened = false;
        this.headerStatusFlag = true;
        this.headerToggleFlag = false;
        this.headerOpacityFlag = false;
        this.notifications = [];
        console.log('HeaderComponent: constructor');
        this.notificationService.getNotifications$.subscribe(function (notifications) {
            console.log('HeaderComponent: notifications received');
            _this.notifications = [];
            if (notifications) {
                for (var _i = 0, notifications_1 = notifications; _i < notifications_1.length; _i++) {
                    var notification = notifications_1[_i];
                    switch (notification.type) {
                        case 'invite': {
                            _this.notifications.push(new _notificationinvite_model__WEBPACK_IMPORTED_MODULE_4__["NotificationInvite"](notification.from, notification.message, notification.inviteLink, notification.status, notification.projectid));
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                }
            }
        });
        this.notificationService.getInviteNotification$.subscribe(function (inviteNotification) {
            if (inviteNotification) {
                _this.notifications.push(inviteNotification);
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.headerStatus$.subscribe(function (statuses) {
            console.log('HeaderComponent: Got new config');
            console.log(statuses);
            _this.headerStatusFlag = statuses[0];
            _this.headerToggleFlag = statuses[1];
            _this.headerOpacityFlag = statuses[2];
            if (_this.headerStatusFlag) {
                _this.mainHeader.nativeElement.style.top = '100%';
            }
            else {
                _this.mainHeader.nativeElement.style.top = '0';
            }
            if (_this.headerToggleFlag) {
                _this.headerToggle.nativeElement.style.display = 'block';
                if (_this.headerStatusFlag) {
                    _this.mainHeader.nativeElement.style.boxShadow = '0 0 10px .5px';
                }
                _this.mainHeader.nativeElement.style.boxShadow = '0 0 0 0';
            }
            else {
                _this.headerToggle.nativeElement.style.display = 'none';
                _this.mainHeader.nativeElement.style.boxShadow = '0 0 0 0';
            }
        });
    };
    HeaderComponent.prototype.mouseLeaveDropDown = function () {
        var _this = this;
        this.timeoutID = setTimeout(function () {
            if (_this.isDropDownOpened) {
                _this.isDropDownOpened = false;
                _this.userDropDown.nativeElement.style.right = '-15vh';
                _this.userDropDown.nativeElement.style.opacity = '0';
                _this.userDropDown.nativeElement.style.pointerEvents = 'none';
            }
        }, 1000);
    };
    HeaderComponent.prototype.catchedMouse = function () {
        if (this.timeoutID) {
            clearTimeout(this.timeoutID);
        }
    };
    HeaderComponent.prototype.dropdown = function (action) {
        if (action === 'open' && !this.isDropDownOpened) {
            this.isDropDownOpened = true;
            this.userDropDown.nativeElement.style.right = '4.5vh';
            this.userDropDown.nativeElement.style.opacity = '1';
            this.userDropDown.nativeElement.style.pointerEvents = 'all';
        }
        else if (action === 'close' && this.isDropDownOpened) {
            this.isDropDownOpened = false;
            this.userDropDown.nativeElement.style.right = '-15vh';
            this.userDropDown.nativeElement.style.opacity = '0';
            this.userDropDown.nativeElement.style.pointerEvents = 'none';
        }
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.authStatus = function () {
        return this.authService.isAuthenticated();
    };
    HeaderComponent.prototype.onHeaderToggle = function () {
        if (this.headerStatusFlag) {
            this.headerStatusFlag = false;
            this.mainHeader.nativeElement.style.top = '0';
            this.mainHeader.nativeElement.style.boxShadow = '0 0 0 0';
        }
        else {
            this.headerStatusFlag = true;
            this.mainHeader.nativeElement.style.top = '100%';
            this.mainHeader.nativeElement.style.boxShadow = '0 0 10px .5px';
        }
    };
    HeaderComponent.prototype.onNotificationsToggle = function () {
        if (this.isNotificationsOpened) {
            this.isNotificationsOpened = false;
            this.notificationsReference.nativeElement.style.pointerEvents = 'none';
            this.notificationsReference.nativeElement.style.opacity = '0';
        }
        else {
            this.isNotificationsOpened = true;
            this.notificationsReference.nativeElement.style.pointerEvents = 'all';
            this.notificationsReference.nativeElement.style.opacity = '.8';
        }
    };
    HeaderComponent.prototype.getNotificationType = function (notification) {
        if (notification instanceof _notificationinvite_model__WEBPACK_IMPORTED_MODULE_4__["NotificationInvite"]) {
            return 'invite';
        }
    };
    HeaderComponent.prototype.noOfUnreadNotifications = function () {
        var noOfUnread = 0;
        for (var _i = 0, _a = this.notifications; _i < _a.length; _i++) {
            var notificate = _a[_i];
            if (notificate.status === 'unread') {
                noOfUnread += 1;
            }
        }
        return (noOfUnread <= 0) ? '' : noOfUnread;
    };
    HeaderComponent.prototype.onAcceptInvite = function (inviteLink, projectid) {
        var _this = this;
        // show local loading
        this.notificationService.acceptInvitation$.subscribe(function (message) {
            if (_this.router.url === '/dashboard') {
                // update projectslist
                _this.dashboardService.getProjectList();
            }
            console.log(message);
            _this.notifyService.notify(message.split('-')[1]);
            // remove local loading
        });
        this.notificationService.acceptInvite(inviteLink, projectid, this.authService.currentUsername);
    };
    HeaderComponent.prototype.onLogoClick = function () {
        this.commonService.headerVisibility(false, false, false);
        this.router.navigate(['/']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])('userDropDown'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"])
    ], HeaderComponent.prototype, "userDropDown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])('mainHeader'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"])
    ], HeaderComponent.prototype, "mainHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])('headerToggle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"])
    ], HeaderComponent.prototype, "headerToggle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])('notificationsReference'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"])
    ], HeaderComponent.prototype, "notificationsReference", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"],
            _notify_service__WEBPACK_IMPORTED_MODULE_8__["NotifyService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/notification.service.ts":
/*!************************************************!*\
  !*** ./src/app/header/notification.service.ts ***!
  \************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);







var NotificationService = /** @class */ (function () {
    function NotificationService(socketService, authService, http) {
        var _this = this;
        this.socketService = socketService;
        this.authService = authService;
        this.http = http;
        this.getInviteNotification = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.getInviteNotification$ = this.getInviteNotification.asObservable();
        this.getNotifications = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.getNotifications$ = this.getNotifications.asObservable();
        this.acceptInvitation = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.acceptInvitation$ = this.acceptInvitation.asObservable();
        console.log('NotificationService: constructor');
        this.authService.authStatus$.subscribe(function (status) {
            if (status) {
                _this.getStoredNotifications();
            }
        });
        this.socketService.getInviteNotification$.subscribe(function (inviteNotification) {
            _this.getInviteNotification.next(inviteNotification);
        });
    }
    NotificationService.prototype.getStoredNotifications = function () {
        var _this = this;
        console.log('NotificationService: getting notifications');
        if (this.authService.isAuthenticated()) {
            console.log('NotificationService: authenticated');
            firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('userdata/' + this.authService.currentUser.uid + '/notifications').once('value', function (snapshot) {
                if (snapshot.val()) {
                    _this.getNotifications.next(snapshot.val());
                    return;
                }
                _this.getNotifications.next(null);
            });
        }
    };
    NotificationService.prototype.acceptInvite = function (inviteLink, projectid, username) {
        var _this = this;
        this.http.post('/api/acceptinvite', {
            inviteLink: inviteLink,
            projectid: projectid,
            username: username
        })
            .subscribe(function (response) {
            _this.acceptInvitation.next(response.message);
        }, function (error) {
            console.log(error);
            _this.acceptInvitation.next('false');
        });
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/header/notificationinvite.model.ts":
/*!****************************************************!*\
  !*** ./src/app/header/notificationinvite.model.ts ***!
  \****************************************************/
/*! exports provided: NotificationInvite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationInvite", function() { return NotificationInvite; });
var NotificationInvite = /** @class */ (function () {
    function NotificationInvite(from, message, inviteLink, status, projectid) {
        this.from = from;
        this.message = message;
        this.inviteLink = inviteLink;
        this.status = status;
        this.projectid = projectid;
    }
    return NotificationInvite;
}());



/***/ }),

/***/ "./src/app/home/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footerContainer{\r\n  position: absolute;\r\n  width:100%;\r\n  height:100%;\r\n  top:0;\r\n  opacity:0;\r\n  left:0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  text-align: center;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  transition: top .5s ease, opacity .5s ease;\r\n  background-color: #5f5f5f;\r\n  box-shadow: 0 0 10px 2px;\r\n}\r\n.footerItemContainer {\r\n  flex-grow: 1;\r\n  height: 100%;\r\n}\r\n#leftFooterContainer{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n.leftFooterColumn{\r\n  display: flex;\r\n  flex-direction: column;\r\n  height:100%;\r\n  justify-content: space-between;\r\n  text-align: center;\r\n  align-items: center;\r\n  flex-grow: 1;\r\n}\r\n#rightFooterContainer{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n#rightFooter{\r\n  display: flex;\r\n  height:100%;\r\n  width:50%;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n#footerLogo{\r\n  display: flex;\r\n  width:100%;\r\n  height:60%;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-image: url('hideLogo.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 60%;\r\n}\r\n#copyright{\r\n  width:100%;\r\n  height:40%;\r\n  display: flex;\r\n  text-align:center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: 'Arial';\r\n}\r\n.leftFooterItem{\r\n  flex-grow: 1;\r\n  width:100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n.leftFooterText{\r\n  font-family: 'Azonix';\r\n  color: #fff;\r\n  cursor: pointer;\r\n  padding-left: 2vh;\r\n  padding-right: 2vh;\r\n  padding-top: 1.5vh;\r\n  padding-bottom: 1.5vh;\r\n  border-radius: 999px;\r\n  transition: box-shadow .2s linear;\r\n}\r\n.leftFooterText:hover{\r\n  box-shadow: #000 0 0 10px .5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxLQUFLO0VBQ0wsU0FBUztFQUNULE1BQU07RUFDTixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUNBQTREO0VBQzVELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlckNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICB0b3A6MDtcclxuICBvcGFjaXR5OjA7XHJcbiAgbGVmdDowO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdG9wIC41cyBlYXNlLCBvcGFjaXR5IC41cyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjVmNWY7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4O1xyXG59XHJcbi5mb290ZXJJdGVtQ29udGFpbmVyIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiNsZWZ0Rm9vdGVyQ29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxlZnRGb290ZXJDb2x1bW57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuI3JpZ2h0Rm9vdGVyQ29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNyaWdodEZvb3RlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHdpZHRoOjUwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNmb290ZXJMb2dve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6NjAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9oaWRlTG9nby5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDYwJTtcclxufVxyXG4jY29weXJpZ2h0e1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjQwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbn1cclxuLmxlZnRGb290ZXJJdGVte1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubGVmdEZvb3RlclRleHR7XHJcbiAgZm9udC1mYW1pbHk6ICdBem9uaXgnO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDJ2aDtcclxuICBwYWRkaW5nLXJpZ2h0OiAydmg7XHJcbiAgcGFkZGluZy10b3A6IDEuNXZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjV2aDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4ycyBsaW5lYXI7XHJcbn1cclxuLmxlZnRGb290ZXJUZXh0OmhvdmVye1xyXG4gIGJveC1zaGFkb3c6ICMwMDAgMCAwIDEwcHggLjVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #footerContainer id=\"footerContainer\">\r\n  <div class=\"footerItemContainer\" id=\"leftFooterContainer\">\r\n    <div class=\"leftFooterColumn\">\r\n      <div class=\"leftFooterItem\"><div class=\"leftFooterText\">About</div></div>\r\n      <div class=\"leftFooterItem\"><div class=\"leftFooterText\">Contact</div></div>\r\n      <div class=\"leftFooterItem\"><div class=\"leftFooterText\">Developers</div></div>\r\n    </div>\r\n    <div class=\"leftFooterColumn\">\r\n      <div class=\"leftFooterItem\"><div class=\"leftFooterText\">Services</div></div>\r\n      <div class=\"leftFooterItem\"><div class=\"leftFooterText\">Support</div></div>\r\n      <div class=\"leftFooterItem\"><div class=\"leftFooterText\">Documentation</div></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"footerItemContainer\" id=\"rightFooterContainer\">\r\n    <div id=\"rightFooter\">\r\n      <div id=\"footerLogo\"></div>\r\n      <div id=\"copyright\">&copy; Copyright 2019</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.scrolled = function (status) {
        if (status === 'up') {
            this.footerContainer.nativeElement.style.top = '-100%';
            this.footerContainer.nativeElement.style.opacity = '1';
        }
        else {
            this.footerContainer.nativeElement.style.top = '0';
            this.footerContainer.nativeElement.style.opacity = '0';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('footerContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FooterComponent.prototype, "footerContainer", void 0);
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/home/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/home/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#appIntro{\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  width:100%;\r\n  height:100%;\r\n  z-index: 5;\r\n}\r\n#appFooter{\r\n  position: absolute;\r\n  top:100%;\r\n  left:0;\r\n  width:100%;\r\n  height:25vh;\r\n  z-index: 10;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsS0FBSztFQUNMLE1BQU07RUFDTixVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0VBQ04sVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhcHBJbnRyb3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG4jYXBwRm9vdGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6MTAwJTtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MjV2aDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-intro id=\"appIntro\" (footerEvent)=\"footer.scrolled($event);\"></app-intro>\n<app-footer #footer id=\"appFooter\"></app-footer>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/intro/intro.component.css":
/*!************************************************!*\
  !*** ./src/app/home/intro/intro.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#introContainer{\r\n  position: absolute;\r\n  left:0;\r\n  top:0;\r\n  width:100%;\r\n  height:100%;\r\n}\r\n.introCard{\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  width:100%;\r\n  height:100%;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n#introCard1{\r\n  opacity: 1;\r\n  z-index: 6;\r\n  transition: opacity .5s ease;\r\n}\r\n#introCard2{\r\n  z-index: 7;\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  opacity: 0;\r\n  top:100%;\r\n  transition: top .5s ease, opacity .5s ease;\r\n}\r\n#introCard2Container{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 70%;\r\n}\r\n.introCard2Column{\r\n  width: 50%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n#introCard2Left{\r\n  font-family: 'Azonix';\r\n  font-size: 2em;\r\n  text-align: right;\r\n}\r\n.introCardDetailItemL{\r\n  flex-grow: 1;\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  text-align: center;\r\n  justify-content: flex-start;\r\n  padding-left: 2vw;\r\n  align-items: center;\r\n  font-family: 'Azonix';\r\n}\r\n.introCardDetailItemR{\r\n  flex-grow: 1;\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  text-align: center;\r\n  justify-content: flex-end;\r\n  padding-right: 2vw;\r\n  align-items: center;\r\n  font-family: 'Azonix';\r\n}\r\n.detailTextR{\r\n  transition: opacity .2s linear, -webkit-transform .2s linear;\r\n  transition: transform .2s linear, opacity .2s linear;\r\n  transition: transform .2s linear, opacity .2s linear, -webkit-transform .2s linear;\r\n}\r\n.detailTextReplaceR{\r\n  position: absolute;\r\n  text-align: left;\r\n  padding-left: 10vh;\r\n  -webkit-transform: rotateX(180deg);\r\n          transform: rotateX(180deg);\r\n  opacity: 0;\r\n  transition: opacity .2s linear, -webkit-transform .2s linear;\r\n  transition: transform .2s linear, opacity .2s linear;\r\n  transition: transform .2s linear, opacity .2s linear, -webkit-transform .2s linear;\r\n  pointer-events: none;\r\n}\r\n.detailTextReplaceL{\r\n  position: absolute;\r\n  text-align: right;\r\n  padding-right:10vh;\r\n  -webkit-transform: rotateX(180deg);\r\n          transform: rotateX(180deg);\r\n  opacity: 0;\r\n  transition: opacity .2s linear, -webkit-transform .2s linear;\r\n  transition: transform .2s linear, opacity .2s linear;\r\n  transition: transform .2s linear, opacity .2s linear, -webkit-transform .2s linear;\r\n  pointer-events: none;\r\n}\r\n.detailTextL{\r\n  transition: opacity .2s linear, -webkit-transform .2s linear;\r\n  transition: transform .2s linear, opacity .2s linear;\r\n  transition: transform .2s linear, opacity .2s linear, -webkit-transform .2s linear;\r\n  padding-right: 10vh;\r\n  pointer-events: none;\r\n}\r\n.featureLogoR{\r\n  display: flex;\r\n  height: 10vh;\r\n  width: 10vh;\r\n  border-radius: 999px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 60%;\r\n  box-shadow: 0 0 10px .5px;\r\n  transition: -webkit-transform .2s ease;\r\n  transition: transform .2s ease;\r\n  transition: transform .2s ease, -webkit-transform .2s ease;\r\n  cursor: pointer;\r\n}\r\n.featureLogoR:hover + .detailTextR {\r\n  -webkit-transform: rotateX(180deg);\r\n          transform: rotateX(180deg);\r\n  opacity: 0;\r\n}\r\n.featureLogoR:hover ~ .detailTextReplaceR {\r\n  -webkit-transform: rotateX(360deg);\r\n          transform: rotateX(360deg);\r\n  opacity: 1;\r\n}\r\n.featureLogoL{\r\n  display: flex;\r\n  position: absolute;\r\n  height: 10vh;\r\n  width: 10vh;\r\n  border-radius: 999px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 60%;\r\n  box-shadow: 0 0 10px .5px;\r\n  transition: -webkit-transform .2s ease;\r\n  transition: transform .2s ease;\r\n  transition: transform .2s ease, -webkit-transform .2s ease;\r\n  cursor: pointer;\r\n}\r\n.featureLogoL:hover + .detailTextL {\r\n  -webkit-transform: rotateX(180deg);\r\n          transform: rotateX(180deg);\r\n  opacity: 0;\r\n}\r\n.featureLogoL:hover ~ .detailTextReplaceL {\r\n  -webkit-transform: rotateX(360deg);\r\n          transform: rotateX(360deg);\r\n  opacity: 1;\r\n}\r\n.featureLogoL:hover{\r\n  -webkit-transform: scale(1.3);\r\n          transform: scale(1.3);\r\n}\r\n.featureLogoR:hover{\r\n  -webkit-transform: scale(1.3);\r\n          transform: scale(1.3);\r\n}\r\n#voiceChat{\r\n  background-image: url('voiceChat.png');\r\n}\r\n#projectHistory{\r\n  background-image: url('projectHistory.png');\r\n}\r\n#textChat{\r\n  background-image: url('textChat.png');\r\n}\r\n#libraries{\r\n  background-image: url('libraries.png');\r\n}\r\n#devEnv{\r\n  background-image: url('developmentEnv.png');\r\n}\r\n#otgData{\r\n  background-image: url('otgData.png');\r\n}\r\n#autoSave{\r\n  background-image: url('autoSave.png');\r\n}\r\n#realtimeCollab{\r\n  background-image: url('realtimeCollab.png');\r\n}\r\n#visual{\r\n  background-image: url('visual.png');\r\n}\r\n#introCard3{\r\n  z-index: 8;\r\n  opacity: 0;\r\n  top:100%;\r\n  transition: top .5s ease, opacity .5s ease;\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n#introCard3Container{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 70%;\r\n}\r\n.introCard3Column{\r\n  width: 50%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n#introCard3Right{\r\n  font-family: 'Azonix';\r\n  font-size: 2em;\r\n  text-align: left;\r\n}\r\n#typingContainer{\r\n  position: absolute;\r\n  top:35vh;\r\n  left:15vw;\r\n  display: flex;\r\n  width: 70vw;\r\n  height: 30vh;\r\n  opacity: 1;\r\n  font-size: 5vw;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: top 1s ease;\r\n}\r\n#transformText{\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  width:100%;\r\n  height:100%;\r\n  display: flex;\r\n  opacity: 1;\r\n  font-family: 'Arial';\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: opacity .3s linear;\r\n}\r\n#transformLogo{\r\n  position: absolute;\r\n  display: flex;\r\n  width:35vw;\r\n  height:20vh;\r\n  opacity: 0;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-image: url('hideLogo.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 70%;\r\n  transition: opacity .3s linear;\r\n}\r\n#servicesContainer{\r\n  position: absolute;\r\n  top:30vh;\r\n  left:5vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  width:90vw;\r\n  height:60vh;\r\n  opacity: 0;\r\n  transition: opacity .3s linear;\r\n}\r\n.servicesContainerRow{\r\n  display: flex;\r\n  flex-direction: row;\r\n  height:50%;\r\n  width: 100%;\r\n  text-align: center;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n.servicesItem{\r\n  display: flex;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 50%;\r\n  height:100%;\r\n  width:20%;\r\n}\r\n#cLogo{\r\n  background-image: url('cLogo.png');\r\n}\r\n#javaLogo{\r\n  background-image: url('javaLogo.png');\r\n}\r\n#pythonLogo{\r\n  background-image: url('pythonLogo.png');\r\n}\r\n#javascriptLogo{\r\n  background-image: url('javascriptLogo.png');\r\n}\r\n#nodejsLogo{\r\n  background-image: url('nodejsLogo.png');\r\n}\r\n#cppLogo{\r\n  background-image: url('cppLogo.png');\r\n}\r\n#angularLogo{\r\n  background-image: url('angularLogo.png');\r\n}\r\n#mysqlLogo{\r\n  background-image: url('mysqlLogo.png');\r\n}\r\n#csLogo{\r\n  background-image: url('csLogo.png');\r\n}\r\n#cssLogo{\r\n  background-image: url('cssLogo.png');\r\n}\r\n#phpLogo{\r\n  background-image: url('phpLogo.png');\r\n}\r\n#htmlLogo{\r\n  background-image: url('htmlLogo.png');\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9pbnRyby9pbnRyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixLQUFLO0VBQ0wsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLEtBQUs7RUFDTCxNQUFNO0VBQ04sVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDViw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixRQUFRO0VBQ1IsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsNERBQW9EO0VBQXBELG9EQUFvRDtFQUFwRCxrRkFBb0Q7QUFDdEQ7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLDREQUFvRDtFQUFwRCxvREFBb0Q7RUFBcEQsa0ZBQW9EO0VBQ3BELG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsNERBQW9EO0VBQXBELG9EQUFvRDtFQUFwRCxrRkFBb0Q7RUFDcEQsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSw0REFBb0Q7RUFBcEQsb0RBQW9EO0VBQXBELGtGQUFvRDtFQUNwRCxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHNDQUE4QjtFQUE5Qiw4QkFBOEI7RUFBOUIsMERBQThCO0VBQzlCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsc0NBQThCO0VBQTlCLDhCQUE4QjtFQUE5QiwwREFBOEI7RUFDOUIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxzQ0FBNkQ7QUFDL0Q7QUFDQTtFQUNFLDJDQUFrRTtBQUNwRTtBQUNBO0VBQ0UscUNBQTREO0FBQzlEO0FBQ0E7RUFDRSxzQ0FBNkQ7QUFDL0Q7QUFDQTtFQUNFLDJDQUFrRTtBQUNwRTtBQUNBO0VBQ0Usb0NBQTJEO0FBQzdEO0FBQ0E7RUFDRSxxQ0FBNEQ7QUFDOUQ7QUFDQTtFQUNFLDJDQUFrRTtBQUNwRTtBQUNBO0VBQ0UsbUNBQTBEO0FBQzVEO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLFFBQVE7RUFDUiwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLEtBQUs7RUFDTCxNQUFNO0VBQ04sVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUNBQTREO0VBQzVELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDViw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7QUFDQTtFQUNFLGtDQUF5RDtBQUMzRDtBQUNBO0VBQ0UscUNBQTREO0FBQzlEO0FBQ0E7RUFDRSx1Q0FBOEQ7QUFDaEU7QUFDQTtFQUNFLDJDQUFrRTtBQUNwRTtBQUNBO0VBQ0UsdUNBQThEO0FBQ2hFO0FBQ0E7RUFDRSxvQ0FBMkQ7QUFDN0Q7QUFDQTtFQUNFLHdDQUErRDtBQUNqRTtBQUNBO0VBQ0Usc0NBQTZEO0FBQy9EO0FBQ0E7RUFDRSxtQ0FBMEQ7QUFDNUQ7QUFDQTtFQUNFLG9DQUEyRDtBQUM3RDtBQUNBO0VBQ0Usb0NBQTJEO0FBQzdEO0FBQ0E7RUFDRSxxQ0FBNEQ7QUFDOUQiLCJmaWxlIjoic3JjL2FwcC9ob21lL2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW50cm9Db250YWluZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6MDtcclxuICB0b3A6MDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG59XHJcbi5pbnRyb0NhcmR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiNpbnRyb0NhcmQxe1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgei1pbmRleDogNjtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlO1xyXG59XHJcbiNpbnRyb0NhcmQye1xyXG4gIHotaW5kZXg6IDc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdG9wOjEwMCU7XHJcbiAgdHJhbnNpdGlvbjogdG9wIC41cyBlYXNlLCBvcGFjaXR5IC41cyBlYXNlO1xyXG59XHJcbiNpbnRyb0NhcmQyQ29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwJTtcclxufVxyXG4uaW50cm9DYXJkMkNvbHVtbntcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI2ludHJvQ2FyZDJMZWZ0e1xyXG4gIGZvbnQtZmFtaWx5OiAnQXpvbml4JztcclxuICBmb250LXNpemU6IDJlbTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uaW50cm9DYXJkRGV0YWlsSXRlbUx7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctbGVmdDogMnZ3O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdBem9uaXgnO1xyXG59XHJcbi5pbnRyb0NhcmREZXRhaWxJdGVtUntcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJ2dztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnQXpvbml4JztcclxufVxyXG4uZGV0YWlsVGV4dFJ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBsaW5lYXIsIG9wYWNpdHkgLjJzIGxpbmVhcjtcclxufVxyXG4uZGV0YWlsVGV4dFJlcGxhY2VSe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMTB2aDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgbGluZWFyLCBvcGFjaXR5IC4ycyBsaW5lYXI7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmRldGFpbFRleHRSZXBsYWNlTHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZy1yaWdodDoxMHZoO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBsaW5lYXIsIG9wYWNpdHkgLjJzIGxpbmVhcjtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uZGV0YWlsVGV4dEx7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBsaW5lYXIsIG9wYWNpdHkgLjJzIGxpbmVhcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHZoO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5mZWF0dXJlTG9nb1J7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgd2lkdGg6IDEwdmg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA2MCU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggLjVweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5mZWF0dXJlTG9nb1I6aG92ZXIgKyAuZGV0YWlsVGV4dFIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLmZlYXR1cmVMb2dvUjpob3ZlciB+IC5kZXRhaWxUZXh0UmVwbGFjZVIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmZlYXR1cmVMb2dvTHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgd2lkdGg6IDEwdmg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA2MCU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggLjVweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5mZWF0dXJlTG9nb0w6aG92ZXIgKyAuZGV0YWlsVGV4dEwge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLmZlYXR1cmVMb2dvTDpob3ZlciB+IC5kZXRhaWxUZXh0UmVwbGFjZUwge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmZlYXR1cmVMb2dvTDpob3ZlcntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbn1cclxuLmZlYXR1cmVMb2dvUjpob3ZlcntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbn1cclxuI3ZvaWNlQ2hhdHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdm9pY2VDaGF0LnBuZycpO1xyXG59XHJcbiNwcm9qZWN0SGlzdG9yeXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvamVjdEhpc3RvcnkucG5nJyk7XHJcbn1cclxuI3RleHRDaGF0e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90ZXh0Q2hhdC5wbmcnKTtcclxufVxyXG4jbGlicmFyaWVze1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9saWJyYXJpZXMucG5nJyk7XHJcbn1cclxuI2RldkVudntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGV2ZWxvcG1lbnRFbnYucG5nJyk7XHJcbn1cclxuI290Z0RhdGF7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL290Z0RhdGEucG5nJyk7XHJcbn1cclxuI2F1dG9TYXZle1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hdXRvU2F2ZS5wbmcnKTtcclxufVxyXG4jcmVhbHRpbWVDb2xsYWJ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3JlYWx0aW1lQ29sbGFiLnBuZycpO1xyXG59XHJcbiN2aXN1YWx7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Zpc3VhbC5wbmcnKTtcclxufVxyXG4jaW50cm9DYXJkM3tcclxuICB6LWluZGV4OiA4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdG9wOjEwMCU7XHJcbiAgdHJhbnNpdGlvbjogdG9wIC41cyBlYXNlLCBvcGFjaXR5IC41cyBlYXNlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4jaW50cm9DYXJkM0NvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbn1cclxuLmludHJvQ2FyZDNDb2x1bW57XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiNpbnRyb0NhcmQzUmlnaHR7XHJcbiAgZm9udC1mYW1pbHk6ICdBem9uaXgnO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuI3R5cGluZ0NvbnRhaW5lcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjM1dmg7XHJcbiAgbGVmdDoxNXZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDcwdnc7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZm9udC1zaXplOiA1dnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdG9wIDFzIGVhc2U7XHJcbn1cclxuI3RyYW5zZm9ybVRleHR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBsaW5lYXI7XHJcbn1cclxuI3RyYW5zZm9ybUxvZ297XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6MzV2dztcclxuICBoZWlnaHQ6MjB2aDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9oaWRlTG9nby5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDcwJTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBsaW5lYXI7XHJcbn1cclxuI3NlcnZpY2VzQ29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6MzB2aDtcclxuICBsZWZ0OjV2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6OTB2dztcclxuICBoZWlnaHQ6NjB2aDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGxpbmVhcjtcclxufVxyXG4uc2VydmljZXNDb250YWluZXJSb3d7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDo1MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnNlcnZpY2VzSXRlbXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNTAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHdpZHRoOjIwJTtcclxufVxyXG4jY0xvZ297XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NMb2dvLnBuZycpO1xyXG59XHJcbiNqYXZhTG9nb3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvamF2YUxvZ28ucG5nJyk7XHJcbn1cclxuI3B5dGhvbkxvZ297XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3B5dGhvbkxvZ28ucG5nJyk7XHJcbn1cclxuI2phdmFzY3JpcHRMb2dve1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9qYXZhc2NyaXB0TG9nby5wbmcnKTtcclxufVxyXG4jbm9kZWpzTG9nb3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbm9kZWpzTG9nby5wbmcnKTtcclxufVxyXG4jY3BwTG9nb3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY3BwTG9nby5wbmcnKTtcclxufVxyXG4jYW5ndWxhckxvZ297XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2FuZ3VsYXJMb2dvLnBuZycpO1xyXG59XHJcbiNteXNxbExvZ297XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL215c3FsTG9nby5wbmcnKTtcclxufVxyXG4jY3NMb2dve1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jc0xvZ28ucG5nJyk7XHJcbn1cclxuI2Nzc0xvZ297XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Nzc0xvZ28ucG5nJyk7XHJcbn1cclxuI3BocExvZ297XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BocExvZ28ucG5nJyk7XHJcbn1cclxuI2h0bWxMb2dve1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9odG1sTG9nby5wbmcnKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/intro/intro.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/intro/intro.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"introContainer\">\n  <div #introCard1 id=\"introCard1\" class=\"introCard\" (wheel)=\"scrolled($event, introCard1)\">\n    <div #typingContainer id=\"typingContainer\">\n      <div #transformText id=\"transformText\"></div>\n      <div #transformLogo id=\"transformLogo\"></div>\n    </div>\n    <div #servicesContainer id=\"servicesContainer\">\n      <div class=\"servicesContainerRow\">\n        <div class=\"servicesItem\" id=\"cLogo\"></div>\n        <div class=\"servicesItem\" id=\"javaLogo\"></div>\n        <div class=\"servicesItem\" id=\"htmlLogo\"></div>\n        <div class=\"servicesItem\" id=\"pythonLogo\"></div>\n        <div class=\"servicesItem\" id=\"javascriptLogo\"></div>\n        <div class=\"servicesItem\" id=\"nodejsLogo\"></div>\n      </div>\n      <div class=\"servicesContainerRow\">\n        <div class=\"servicesItem\" id=\"cppLogo\"></div>\n        <div class=\"servicesItem\" id=\"angularLogo\"></div>\n        <div class=\"servicesItem\" id=\"phpLogo\"></div>\n        <div class=\"servicesItem\" id=\"mysqlLogo\"></div>\n        <div class=\"servicesItem\" id=\"csLogo\"></div>\n        <div class=\"servicesItem\" id=\"cssLogo\"></div>\n      </div>\n    </div>\n  </div>\n  <div #introCard2 id=\"introCard2\" class=\"introCard\" (wheel)=\"scrolled($event, introCard2)\">\n    <div id=\"introCard2Container\">\n      <div class=\"introCard2Column\" id=\"introCard2Left\">\n        Features To Manage<br/>Your Project Easily\n      </div>\n      <div class=\"introCard2Column\" id=\"introCard2Right\">\n        <div class=\"introCardDetailItemL\"><div class=\"featureLogoR\" id=\"voiceChat\"></div><div class=\"detailTextR\">&nbsp;&nbsp;&nbsp;Voice Chat</div><div class=\"detailTextReplaceR\">&nbsp;&nbsp;&nbsp;Communicate With Your<br/>&nbsp;&nbsp;&nbsp;Team Members In Real-Time</div></div>\n        <div class=\"introCardDetailItemL\"><div class=\"featureLogoR\" id=\"projectHistory\"></div><div class=\"detailTextR\">&nbsp;&nbsp;&nbsp;Project History</div><div class=\"detailTextReplaceR\">&nbsp;&nbsp;&nbsp;All Project Changes<br/>&nbsp;&nbsp;&nbsp;Are Logged</div></div>\n        <div class=\"introCardDetailItemL\"><div class=\"featureLogoR\" id=\"textChat\"></div><div class=\"detailTextR\">&nbsp;&nbsp;&nbsp;Instant Messaging</div><div class=\"detailTextReplaceR\">&nbsp;&nbsp;&nbsp;Communicate With Your<br/>&nbsp;&nbsp;&nbsp;Team Members In Real-Time</div></div>\n        <div class=\"introCardDetailItemL\"><div class=\"featureLogoR\" id=\"libraries\"></div><div class=\"detailTextR\">&nbsp;&nbsp;&nbsp;Libraries</div><div class=\"detailTextReplaceR\">&nbsp;&nbsp;&nbsp;All Popular Libraries Can<br/>&nbsp;&nbsp;&nbsp;Be Imported Into Projects</div></div>\n        <div class=\"introCardDetailItemL\"><div class=\"featureLogoR\" id=\"devEnv\"></div><div class=\"detailTextR\">&nbsp;&nbsp;&nbsp;Development Environment</div><div class=\"detailTextReplaceR\">&nbsp;&nbsp;&nbsp;Feels Like You Are<br/>&nbsp;&nbsp;&nbsp;Working Offline</div></div>\n      </div>\n    </div>\n  </div>\n  <div #introCard3 id=\"introCard3\" class=\"introCard\" (wheel)=\"scrolled($event, introCard3)\">\n    <div id=\"introCard3Container\">\n      <div class=\"introCard3Column\" id=\"introCard3Left\">\n        <div class=\"introCardDetailItemR\"><div class=\"featureLogoL\" id=\"otgData\"></div><div class=\"detailTextL\">On-The-Go Database&nbsp;&nbsp;&nbsp;</div><div class=\"detailTextReplaceL\">Create And Connect Database&nbsp;&nbsp;&nbsp;<br/>To Your Project For&nbsp;&nbsp;&nbsp;<br/>Faster Testing&nbsp;&nbsp;&nbsp;</div></div>\n        <div class=\"introCardDetailItemR\"><div class=\"featureLogoL\" id=\"autoSave\"></div><div class=\"detailTextL\">AutoSave&nbsp;&nbsp;&nbsp;</div><div class=\"detailTextReplaceL\">Forget That Save Button&nbsp;&nbsp;&nbsp;</div></div>\n        <div class=\"introCardDetailItemR\"><div class=\"featureLogoL\" id=\"realtimeCollab\"></div><div class=\"detailTextL\">Real-Time Collaboration&nbsp;&nbsp;&nbsp;</div><div class=\"detailTextReplaceL\">Collaborate With Multiple&nbsp;&nbsp;&nbsp;<br/>Team Members While Programming&nbsp;&nbsp;&nbsp;</div></div>\n        <div class=\"introCardDetailItemR\"><div class=\"featureLogoL\" id=\"visual\"></div><div class=\"detailTextL\">Visual Programming&nbsp;&nbsp;&nbsp;</div><div class=\"detailTextReplaceL\">Tired Of Writing Code ?&nbsp;&nbsp;&nbsp;<br/>Compose Them Like A Painting&nbsp;&nbsp;&nbsp;</div></div>\n      </div>\n      <div class=\"introCard3Column\" id=\"introCard3Right\">\n        Some Tools That Make<br/>Development a Breeze\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/intro/intro.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/intro/intro.component.ts ***!
  \***********************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
        this.footerEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isCardMoving = false;
        this.lastScroll = 'undefined';
        this.currentCard = 1;
        this.phrases = [
            'IDE-<hybrid> IDE </hybrid>',
            'cloud + development = ?-HiDE',
            'Online Project ?-Start in 2 Mins !'
        ];
        this.footerUp = false;
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent.prototype.scrolled = function (event, element) {
        var _this = this;
        this.lastScroll = (event.deltaY > 0) ? 'down' : 'up';
        if (!this.isCardMoving && this.lastScroll === 'down') {
            if (!(this.currentCard + 1 > 3)) {
                this.isCardMoving = true;
                eval('this.introCard' + (this.currentCard).toString() + '.nativeElement.style.opacity = \'0\'');
                eval('this.introCard' + (this.currentCard + 1).toString() + '.nativeElement.style.top = \'0\'');
                eval('this.introCard' + (this.currentCard + 1).toString() + '.nativeElement.style.opacity = \'1\'');
                this.currentCard += 1;
                setTimeout(function () {
                    _this.isCardMoving = false;
                }, 600);
            }
            else {
                if (!this.footerUp) {
                    this.isCardMoving = true;
                    this.footerUp = true;
                    this.footerEvent.emit('up');
                    setTimeout(function () {
                        _this.isCardMoving = false;
                    }, 600);
                }
            }
        }
        else if (!this.isCardMoving && this.lastScroll === 'up') {
            if (this.footerUp) {
                this.isCardMoving = true;
                this.footerEvent.emit('down');
                setTimeout(function () {
                    _this.isCardMoving = false;
                    _this.footerUp = false;
                }, 600);
            }
            if (!(this.currentCard < 2) && !this.footerUp) {
                this.isCardMoving = true;
                if (this.currentCard - 1 !== 0) {
                    eval('this.introCard' + (this.currentCard - 1).toString() + '.nativeElement.style.opacity = \'1\'');
                }
                eval('this.introCard' + this.currentCard + '.nativeElement.style.top = \'100%\'');
                eval('this.introCard' + this.currentCard + '.nativeElement.style.opacity = \'0\'');
                this.currentCard -= 1;
                setTimeout(function () {
                    _this.isCardMoving = false;
                }, 600);
            }
        }
    };
    IntroComponent.prototype.startAnimating = function (text) {
        var _this = this;
        var phases = text.split('-');
        var phase1 = phases[0];
        var phase2 = phases[1];
        var string1 = '';
        var string2 = '';
        var currentIndex = 0;
        this.intervalID1 = setInterval(function () {
            string1 += phase1.charAt(currentIndex);
            _this.transformText.nativeElement.innerText = string1;
            if (currentIndex + 1 >= phase1.length) {
                clearInterval(_this.intervalID1);
                currentIndex = phase1.length;
                setTimeout(function () {
                    _this.intervalID2 = setInterval(function () {
                        _this.transformText.nativeElement.innerText = phase1.substring(0, currentIndex);
                        if (currentIndex - 1 === -1) {
                            clearInterval(_this.intervalID2);
                            currentIndex = 0;
                            _this.intervalID3 = setInterval(function () {
                                string2 += phase2.charAt(currentIndex);
                                _this.transformText.nativeElement.innerText = string2;
                                if (currentIndex + 1 >= phase2.length) {
                                    clearInterval(_this.intervalID3);
                                    setTimeout(function () {
                                        _this.transformText.nativeElement.style.opacity = '0';
                                        _this.transformLogo.nativeElement.style.opacity = '1';
                                        _this.typingContainer.nativeElement.style.top = '0vh';
                                        _this.servicesContainer.nativeElement.style.opacity = '1';
                                    }, 700);
                                }
                                else {
                                    currentIndex += 1;
                                }
                            }, 50);
                        }
                        else {
                            currentIndex -= 1;
                        }
                    }, 30);
                }, 700);
            }
            else {
                currentIndex += 1;
            }
        }, 50);
    };
    IntroComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.startAnimating(_this.phrases[Math.floor(Math.random() * (_this.phrases.length - 0)) + 0]);
        }, 500);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('typingContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IntroComponent.prototype, "typingContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('servicesContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IntroComponent.prototype, "servicesContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transformText'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IntroComponent.prototype, "transformText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transformLogo'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IntroComponent.prototype, "transformLogo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('introCard1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IntroComponent.prototype, "introCard1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('introCard2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IntroComponent.prototype, "introCard2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('introCard3'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IntroComponent.prototype, "introCard3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IntroComponent.prototype, "footerEvent", void 0);
    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/home/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/home/intro/intro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/loading.service.ts":
/*!************************************!*\
  !*** ./src/app/loading.service.ts ***!
  \************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.loadingStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loadingStatus$ = this.loadingStatus.asObservable();
        this.isLoading = false;
    }
    LoadingService.prototype.showLoading = function () {
        this.isLoading = true;
        this.loadingStatus.next('show');
    };
    LoadingService.prototype.removeLoading = function () {
        this.isLoading = false;
        this.loadingStatus.next('remove');
    };
    LoadingService.prototype.showLoadingWithMessage = function (message) {
        this.isLoading = true;
        this.loadingStatus.next('showm!' + message);
    };
    LoadingService.prototype.changeMessage = function (message) {
        this.isLoading = true;
        this.loadingStatus.next('change!' + message);
    };
    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/loading/loading.component.css":
/*!***********************************************!*\
  !*** ./src/app/loading/loading.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes loadingItemAnimation {\r\n  0% { opacity: 1; }\r\n  100% { opacity: 0; }\r\n}\r\n@keyframes loadingItemAnimation {\r\n  0% { opacity: 1; }\r\n  100% { opacity: 0; }\r\n}\r\n.loadingAnimation{\r\n  -webkit-animation-name: loadingItemAnimation;\r\n          animation-name: loadingItemAnimation;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n  -webkit-animation-direction: alternate;\r\n          animation-direction: alternate;\r\n}\r\n#loadingScreen{\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  top:0;\r\n  left:0;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: opacity .2s linear;\r\n  background-color: white;\r\n}\r\n#loadingLogo{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  width: 100%;\r\n  height:20%;\r\n}\r\n.loadingItemStatic{\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-family: 'Azonix';\r\n  font-size: 3em;\r\n}\r\n.loadingItemDynamic{\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-family: 'Azonix';\r\n  font-size: 3em;\r\n}\r\n#loadingMessage{\r\n  height: 10%;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  font-family: 'Azonix';\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxLQUFLLFVBQVUsRUFBRTtFQUNqQixPQUFPLFVBQVUsRUFBRTtBQUNyQjtBQUhBO0VBQ0UsS0FBSyxVQUFVLEVBQUU7RUFDakIsT0FBTyxVQUFVLEVBQUU7QUFDckI7QUFDQTtFQUNFLDRDQUFvQztVQUFwQyxvQ0FBb0M7RUFDcEMsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLHlDQUFpQztVQUFqQyxpQ0FBaUM7RUFDakMsc0NBQThCO1VBQTlCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixLQUFLO0VBQ0wsTUFBTTtFQUNOLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgbG9hZGluZ0l0ZW1BbmltYXRpb24ge1xyXG4gIDAlIHsgb3BhY2l0eTogMTsgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OiAwOyB9XHJcbn1cclxuLmxvYWRpbmdBbmltYXRpb257XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGxvYWRpbmdJdGVtQW5pbWF0aW9uO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxufVxyXG4jbG9hZGluZ1NjcmVlbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBsaW5lYXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuI2xvYWRpbmdMb2dve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6MjAlO1xyXG59XHJcbi5sb2FkaW5nSXRlbVN0YXRpY3tcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0F6b25peCc7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbn1cclxuLmxvYWRpbmdJdGVtRHluYW1pY3tcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0F6b25peCc7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbn1cclxuI2xvYWRpbmdNZXNzYWdle1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdBem9uaXgnO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/loading/loading.component.html":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #loadingScreen id=\"loadingScreen\">\n  <div id=\"loadingLogo\">\n    <div class=\"loadingItemStatic\">&lt;</div>\n    <div class=\"loadingItemDynamic loadingAnimation\">t</div>\n    <div class=\"loadingItemDynamic loadingAnimation\">e</div>\n    <div class=\"loadingItemDynamic loadingAnimation\">s</div>\n    <div class=\"loadingItemDynamic loadingAnimation\">t</div>\n    <div class=\"loadingItemStatic\">&#47;&gt;</div>\n  </div>\n  <div #loadingMessage id=\"loadingMessage\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");



var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(loadingService) {
        this.loadingService = loadingService;
        this.possible = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=:;?.,';
        this.isLoading = false;
    }
    LoadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingService.loadingStatus$.subscribe(function (status) {
            if (status.includes('!') && status.includes('show')) {
                _this.onShowLoading(status.substr(status.indexOf('!') + 1, status.length));
            }
            else if (status.includes('!') && status.includes('change')) {
                _this.onChangeMessage(status.substr(status.indexOf('!') + 1, status.length));
            }
            else if (status.includes('show')) {
                _this.onShowLoading(null);
            }
            else {
                _this.onRemoveLoading();
            }
        });
    };
    LoadingComponent.prototype.ngAfterViewInit = function () {
        this.loadingItems = document.getElementsByClassName('loadingItemDynamic');
    };
    LoadingComponent.prototype.onShowLoading = function (message) {
        var _this = this;
        this.isLoading = true;
        if (message != null) {
            this.loadingMessage.nativeElement.innerText = message;
        }
        else {
            this.loadingMessage.nativeElement.innerText = 'Loading...';
        }
        this.loadingScreen.nativeElement.style.opacity = '.8';
        this.loadingScreen.nativeElement.style.pointerEvents = 'all';
        for (var i = 0; i < this.loadingItems.length; i++) {
            this.loadingItems.item(i).classList.add('loadingAnimation');
        }
        this.intervalID = setInterval(function () {
            for (var i = 0; i < _this.loadingItems.length; i++) {
                _this.loadingItems.item(i).innerHTML = _this.possible.charAt(Math.floor(Math.random() * _this.possible.length));
            }
        }, 500);
    };
    LoadingComponent.prototype.onChangeMessage = function (message) {
        this.isLoading = true;
        this.loadingMessage.nativeElement.innerText = message;
    };
    LoadingComponent.prototype.onRemoveLoading = function () {
        this.isLoading = false;
        this.loadingScreen.nativeElement.style.opacity = '0';
        this.loadingScreen.nativeElement.style.pointerEvents = 'none';
        for (var i = 0; i < this.loadingItems.length; i++) {
            this.loadingItems.item(i).classList.remove('loadingAnimation');
        }
        clearInterval(this.intervalID);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loadingScreen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LoadingComponent.prototype, "loadingScreen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loadingMessage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LoadingComponent.prototype, "loadingMessage", void 0);
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/loading/loading.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/newproject/newproject.component.css":
/*!*****************************************************!*\
  !*** ./src/app/newproject/newproject.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-scrollbar{\r\n  width: 10px;\r\n}\r\n::-webkit-scrollbar-track {\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: rgba(1, 255, 115, 0.719);\r\n  border-radius: 10px;\r\n}\r\n#newProjectContainer{\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  top:0;\r\n  left:0;\r\n  width:100%;\r\n  height:100%;\r\n}\r\n#newProjectForm{\r\n  height: 80%;\r\n  width:40%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding:2%;\r\n}\r\n.formField{\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n.formFieldText{\r\n  width: 100%;\r\n  text-align: left;\r\n  font-family: 'Azonix';\r\n  font-size: 1em;\r\n  margin-bottom: 2%;\r\n}\r\n#inputProjectTitle{\r\n  text-align: center;\r\n  padding-top: 2%;\r\n  padding-bottom: 2%;\r\n  padding-left: 3%;\r\n  padding-right: 3%;\r\n  width: 94%;\r\n  font-family: 'Roboto';\r\n  font-size: 1.2em;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  border-radius: 999px;\r\n  box-shadow: 0 0 10px .5px;\r\n  border:none;\r\n  transition: -webkit-transform .1s linear;\r\n  transition: transform .1s linear;\r\n  transition: transform .1s linear, -webkit-transform .1s linear;\r\n  margin-bottom: 2%;\r\n}\r\n#inputProjectTitle:focus{\r\n  outline: none;\r\n  -webkit-transform:scale(1.1);\r\n          transform:scale(1.1);\r\n}\r\n#inputProjectDesc{\r\n  resize: none;\r\n  padding-top: 2%;\r\n  padding-bottom: 2%;\r\n  padding-left: 3%;\r\n  padding-right: 3%;\r\n  width: 94%;\r\n  font-family: 'Roboto';\r\n  font-size: .9em;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 10px .5px;\r\n  border:none;\r\n  transition: -webkit-transform .1s linear;\r\n  transition: transform .1s linear;\r\n  transition: transform .1s linear, -webkit-transform .1s linear;\r\n  margin-bottom: 2%;\r\n}\r\n#inputProjectDesc:focus{\r\n  outline: none;\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n#technologiesContainer{\r\n  width:100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n  margin-bottom: 2%;\r\n}\r\n.technologyItem{\r\n  margin-right: 4%;\r\n  width:10%;\r\n  padding-bottom: 10%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 80%;\r\n  cursor: pointer;\r\n  border-radius: 999px;\r\n  box-shadow: 0 0 7px .5px;\r\n  transition: -webkit-transform .1s linear;\r\n  transition: transform .1s linear;\r\n  transition: transform .1s linear, -webkit-transform .1s linear;\r\n}\r\n.technologyItem:hover{\r\n  -webkit-transform: scale(1.2);\r\n          transform: scale(1.2);\r\n}\r\n#cppItem{\r\n  background-image: url('cppLogo.png');\r\n}\r\n#javaItem{\r\n  background-image: url('javaLogo.png');\r\n}\r\n#pyItem{\r\n  background-image: url('pythonLLogo.png');\r\n}\r\n#cItem{\r\n  background-image: url('cLogo.png');\r\n}\r\n#membersList{\r\n  width:100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n  margin-bottom: 2%;\r\n}\r\n.addedMemberItem{\r\n  margin-right: 4%;\r\n  width:10%;\r\n  padding-bottom: 10%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 80%;\r\n  cursor: pointer;\r\n  border-radius: 999px;\r\n  box-shadow: 0 0 7px .5px;\r\n  transition: -webkit-transform .1s linear;\r\n  transition: transform .1s linear;\r\n  transition: transform .1s linear, -webkit-transform .1s linear;\r\n}\r\n.selectedMemberItem{\r\n  position: relative;\r\n  margin-right: 4%;\r\n  width:10%;\r\n  padding-bottom: 10%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 80%;\r\n  cursor: pointer;\r\n  border-radius: 999px;\r\n  box-shadow: 0 0 7px .5px;\r\n}\r\n.selectedMemberItem:hover > .removeIcon {\r\n  opacity: 1;\r\n}\r\n.removeIcon{\r\n  opacity: 0;\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  width: 100%;\r\n  height:100%;\r\n  background-image: url('remove.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 80%;\r\n  transition: opacity .1s linear;\r\n}\r\n#creatorAvatar{\r\n  background-image: url('defaultAvatar.png');\r\n}\r\n#membersContainer{\r\n  height: 80%;\r\n  width:40%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding:2%;\r\n}\r\n#deadlineContainer{\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n#deadlineDate{\r\n  padding: 2%;\r\n  font-family: 'Roboto';\r\n  border-radius: 999px;\r\n  box-shadow: 0 0 10px .5px;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  transition: -webkit-transform .1s linear;\r\n  transition: transform .1s linear;\r\n  transition: transform .1s linear, -webkit-transform .1s linear;\r\n  font-weight: bold;\r\n  border: none;\r\n}\r\n#deadlineDate:focus{\r\n  outline: none;\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n#membersSearchBar{\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  border-radius: 999px;\r\n  box-shadow: 0 0 7px .5px;\r\n  margin-bottom: 5%;\r\n}\r\n#membersSearchIcon{\r\n  position: relative;\r\n  margin-left: 2%;\r\n  width:6%;\r\n  padding-bottom: 8%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 80%;\r\n  background-image: url('search.png');\r\n}\r\n#membersSearchText{\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  border: none;\r\n  font-family: 'Roboto';\r\n  font-size: 1.2em;\r\n  padding-top:2%;\r\n  padding-bottom: 2%;\r\n  padding-left:6%;\r\n  padding-right:5%;\r\n}\r\n#membersSearchText:focus{\r\n  outline: none;\r\n}\r\n#membersResultsContainer{\r\n  width: 100%;\r\n  height:70%;\r\n  display: flex;\r\n}\r\n#membersResultsScroll{\r\n  padding: 2%;\r\n  width: 100%;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n.memberItemContainer{\r\n  padding:2%;\r\n  width: 100%;\r\n  padding-bottom: 2%;\r\n  padding-left: 2%;\r\n  padding-right: 2%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n.memberAvatar{\r\n  margin-right: 4%;\r\n  width:10%;\r\n  padding-bottom: 10%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  cursor: pointer;\r\n  border-radius: 999px;\r\n  box-shadow: 0 0 7px .5px;\r\n  transition: -webkit-transform .1s linear;\r\n  transition: transform .1s linear;\r\n  transition: transform .1s linear, -webkit-transform .1s linear;\r\n}\r\n.memberAvatar:hover{\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n.memberUsername{\r\n  font-family: 'Roboto';\r\n  font-size: 1.1em;\r\n}\r\n#membersControlsContainer{\r\n  margin-top: 5%;\r\n  height:15%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 5%;\r\n}\r\n.projectControlItem{\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  font-family: 'Azonix';\r\n  width:35%;\r\n  height: 80%;\r\n  border-radius: 999px;\r\n  box-shadow: 0 0 7px .5px;\r\n  transition: -webkit-transform .1s linear;\r\n  transition: transform .1s linear;\r\n  transition: transform .1s linear, -webkit-transform .1s linear;\r\n  cursor: pointer;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\r\n.projectControlItem:hover{\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cHJvamVjdC9uZXdwcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsS0FBSztFQUNMLE1BQU07RUFDTixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsd0NBQWdDO0VBQWhDLGdDQUFnQztFQUFoQyw4REFBZ0M7RUFDaEMsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsd0NBQWdDO0VBQWhDLGdDQUFnQztFQUFoQyw4REFBZ0M7RUFDaEMsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4Qix3Q0FBZ0M7RUFBaEMsZ0NBQWdDO0VBQWhDLDhEQUFnQztBQUNsQztBQUNBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usb0NBQXdEO0FBQzFEO0FBQ0E7RUFDRSxxQ0FBeUQ7QUFDM0Q7QUFDQTtFQUNFLHdDQUE0RDtBQUM5RDtBQUNBO0VBQ0Usa0NBQXNEO0FBQ3hEO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLHdDQUFnQztFQUFoQyxnQ0FBZ0M7RUFBaEMsOERBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixLQUFLO0VBQ0wsTUFBTTtFQUNOLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUNBQXVEO0VBQ3ZELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsMENBQThEO0FBQ2hFO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyx3Q0FBZ0M7RUFBaEMsZ0NBQWdDO0VBQWhDLDhEQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixtQ0FBdUQ7QUFDekQ7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLHdDQUFnQztFQUFoQyxnQ0FBZ0M7RUFBaEMsOERBQWdDO0FBQ2xDO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsV0FBVztFQUNYLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsd0NBQWdDO0VBQWhDLGdDQUFnQztFQUFoQyw4REFBZ0M7RUFDaEMsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9uZXdwcm9qZWN0L25ld3Byb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDI1NSwgMTE1LCAwLjcxOSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI25ld1Byb2plY3RDb250YWluZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxufVxyXG4jbmV3UHJvamVjdEZvcm17XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgd2lkdGg6NDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzoyJTtcclxufVxyXG4uZm9ybUZpZWxke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9ybUZpZWxkVGV4dHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiAnQXpvbml4JztcclxuICBmb250LXNpemU6IDFlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4jaW5wdXRQcm9qZWN0VGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAzJTtcclxuICB3aWR0aDogOTQlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggLjVweDtcclxuICBib3JkZXI6bm9uZTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGxpbmVhcjtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4jaW5wdXRQcm9qZWN0VGl0bGU6Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcclxufVxyXG4jaW5wdXRQcm9qZWN0RGVzY3tcclxuICByZXNpemU6IG5vbmU7XHJcbiAgcGFkZGluZy10b3A6IDIlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG4gIHdpZHRoOiA5NCU7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGZvbnQtc2l6ZTogLjllbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAuNXB4O1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgbGluZWFyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbiNpbnB1dFByb2plY3REZXNjOmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbiN0ZWNobm9sb2dpZXNDb250YWluZXJ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbi50ZWNobm9sb2d5SXRlbXtcclxuICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG4gIHdpZHRoOjEwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogODAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBib3gtc2hhZG93OiAwIDAgN3B4IC41cHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBsaW5lYXI7XHJcbn1cclxuLnRlY2hub2xvZ3lJdGVtOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG4jY3BwSXRlbXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvY3BwTG9nby5wbmcnKTtcclxufVxyXG4jamF2YUl0ZW17XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2phdmFMb2dvLnBuZycpO1xyXG59XHJcbiNweUl0ZW17XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3B5dGhvbkxMb2dvLnBuZycpO1xyXG59XHJcbiNjSXRlbXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvY0xvZ28ucG5nJyk7XHJcbn1cclxuI21lbWJlcnNMaXN0e1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4uYWRkZWRNZW1iZXJJdGVte1xyXG4gIG1hcmdpbi1yaWdodDogNCU7XHJcbiAgd2lkdGg6MTAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA4MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA3cHggLjVweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGxpbmVhcjtcclxufVxyXG4uc2VsZWN0ZWRNZW1iZXJJdGVte1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG4gIHdpZHRoOjEwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogODAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBib3gtc2hhZG93OiAwIDAgN3B4IC41cHg7XHJcbn1cclxuLnNlbGVjdGVkTWVtYmVySXRlbTpob3ZlciA+IC5yZW1vdmVJY29uIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5yZW1vdmVJY29ue1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmVtb3ZlLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogODAlO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzIGxpbmVhcjtcclxufVxyXG4jY3JlYXRvckF2YXRhcntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGVmYXVsdEF2YXRhci5wbmcnKTtcclxufVxyXG4jbWVtYmVyc0NvbnRhaW5lcntcclxuICBoZWlnaHQ6IDgwJTtcclxuICB3aWR0aDo0MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOjIlO1xyXG59XHJcbiNkZWFkbGluZUNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNkZWFkbGluZURhdGV7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IC41cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGxpbmVhcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuI2RlYWRsaW5lRGF0ZTpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4jbWVtYmVyc1NlYXJjaEJhcntcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDdweCAuNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbiNtZW1iZXJzU2VhcmNoSWNvbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIHdpZHRoOjYlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA4JTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2VhcmNoLnBuZycpO1xyXG59XHJcbiNtZW1iZXJzU2VhcmNoVGV4dHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBwYWRkaW5nLXRvcDoyJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgcGFkZGluZy1sZWZ0OjYlO1xyXG4gIHBhZGRpbmctcmlnaHQ6NSU7XHJcbn1cclxuI21lbWJlcnNTZWFyY2hUZXh0OmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI21lbWJlcnNSZXN1bHRzQ29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDo3MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4jbWVtYmVyc1Jlc3VsdHNTY3JvbGx7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWVtYmVySXRlbUNvbnRhaW5lcntcclxuICBwYWRkaW5nOjIlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1lbWJlckF2YXRhcntcclxuICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG4gIHdpZHRoOjEwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDdweCAuNXB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgbGluZWFyO1xyXG59XHJcbi5tZW1iZXJBdmF0YXI6aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbi5tZW1iZXJVc2VybmFtZXtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxufVxyXG4jbWVtYmVyc0NvbnRyb2xzQ29udGFpbmVye1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGhlaWdodDoxNSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDUlO1xyXG59XHJcbi5wcm9qZWN0Q29udHJvbEl0ZW17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0F6b25peCc7XHJcbiAgd2lkdGg6MzUlO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA3cHggLjVweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGxpbmVhcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuLnByb2plY3RDb250cm9sSXRlbTpob3ZlcntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/newproject/newproject.component.html":
/*!******************************************************!*\
  !*** ./src/app/newproject/newproject.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"newProjectContainer\">\n  <div id=\"newProjectForm\">\n    <div class=\"formField\">\n      <div class=\"formFieldText\">Project Title</div>\n      <input id=\"inputProjectTitle\" #projectTitle type=\"text\" />\n    </div>\n    <div class=\"formField\">\n      <div class=\"formFieldText\">Project Description</div>\n      <textarea id=\"inputProjectDesc\" #projectDescription rows=\"3\"></textarea>\n    </div>\n    <div class=\"formField\">\n      <div class=\"formFieldText\">Technologies</div>\n      <div id=\"technologiesContainer\">\n        <div class=\"technologyItem\" id=\"cppItem\"></div>\n        <div class=\"technologyItem\" id=\"javaItem\"></div>\n        <div class=\"technologyItem\" id=\"pyItem\"></div>\n        <div class=\"technologyItem\" id=\"cItem\"></div>\n      </div>\n    </div>\n    <div class=\"formField\">\n      <div class=\"formFieldText\">Members</div>\n      <div id=\"membersList\">\n        <div class=\"addedMemberItem\" id=\"creatorAvatar\"></div>\n        <div *ngFor=\"let selected of selectedMembers\" (click)=\"memberRemoved(selected)\" class=\"selectedMemberItem\" [ngStyle]=\"{'background-image': 'url(' + selected.imgUrl + ')'}\">\n          <div class=\"removeIcon\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"formField\">\n      <div class=\"formFieldText\">Deadline</div>\n      <div id=\"deadlineContainer\">\n        <input #deadlineDate id=\"deadlineDate\" type=\"date\" />\n      </div>\n    </div>\n  </div>\n  <div id=\"membersContainer\">\n    <div class=\"formFieldText\">Search for Members</div>\n    <div id=\"membersSearchBar\">\n        <div id=\"membersSearchIcon\"></div>\n      <input #searchText (keypress)=\"search($event.keyCode)\" type=\"text\" id=\"membersSearchText\" />\n    </div>\n    <div id=\"membersResultsContainer\">\n      <div id=\"membersResultsScroll\">\n        <h4 *ngIf=\"searchedMembers == null || searchedMembers.length === 0\" style=\"font-family: 'Roboto';\">No Users Found</h4>\n        <div *ngFor=\"let member of searchedMembers\" class=\"memberItemContainer\">\n          <div (click)=\"memberAdded(member)\" class=\"memberAvatar\" [ngStyle]=\"{'background-image': 'url(' + checkImgUrl(member.imgUrl) + ')'}\"></div>\n          <div class=\"memberUsername\">{{ member.username }}</div>\n        </div>\n      </div>\n    </div>\n    <div id=\"membersControlsContainer\">\n      <div (click)=\"projectCreate()\" class=\"projectControlItem\">Create</div>\n      <div (click)=\"projectReset()\" class=\"projectControlItem\">Reset</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/newproject/newproject.component.ts":
/*!****************************************************!*\
  !*** ./src/app/newproject/newproject.component.ts ***!
  \****************************************************/
/*! exports provided: NewprojectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewprojectComponent", function() { return NewprojectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _newproject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newproject.service */ "./src/app/newproject/newproject.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notify.service */ "./src/app/notify.service.ts");







var NewprojectComponent = /** @class */ (function () {
    function NewprojectComponent(newprojectService, loadingService, notifyService, authService, router) {
        var _this = this;
        this.newprojectService = newprojectService;
        this.loadingService = loadingService;
        this.notifyService = notifyService;
        this.authService = authService;
        this.router = router;
        this.searchedMembers = null;
        this.selectedMembers = [];
        this.newprojectService.seacrhMemberStatus$.subscribe(function (members) {
            if (members) {
                _this.searchedMembers = [];
                _this.searchedMembers = members;
            }
            else {
                // some error happened
            }
            // remove loading
        });
    }
    NewprojectComponent.prototype.ngOnInit = function () {
    };
    NewprojectComponent.prototype.search = function (key) {
        if (key === 13) {
            // show loading
            this.newprojectService.searchMembers(this.searchText.nativeElement.value);
        }
    };
    NewprojectComponent.prototype.memberAdded = function (member) {
        if (this.selectedMembers.indexOf(member) === -1) {
            this.selectedMembers.push(member);
        }
    };
    NewprojectComponent.prototype.memberRemoved = function (member) {
        this.selectedMembers.splice(this.selectedMembers.indexOf(member), 1);
    };
    NewprojectComponent.prototype.projectCreate = function () {
        var _this = this;
        this.loadingService.showLoadingWithMessage('Creating Project with Environment...');
        this.newprojectService.projectCreationStatus$.subscribe(function (status) {
            _this.loadingService.removeLoading();
            if (status) {
                _this.notifyService.notify('Project Created Successfully');
                // navigate to dashboard
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.notifyService.notify('Project Creation Failed');
            }
        });
        var members = [];
        for (var _i = 0, _a = this.selectedMembers; _i < _a.length; _i++) {
            var currentMember = _a[_i];
            members.push(currentMember.username);
        }
        this.newprojectService.createProject(this.getFormattedDate(this.deadlineDate.nativeElement.value), this.projectDescription.nativeElement.value, this.authService.currentUsername, members, this.getFormattedDate((new Date()).toISOString().split('T')[0]), 'active', this.projectTitle.nativeElement.value);
    };
    NewprojectComponent.prototype.projectReset = function () {
        this.searchedMembers = null;
        this.selectedMembers = [];
        this.searchText.nativeElement.value = '';
        this.projectTitle.nativeElement.value = '';
        this.projectDescription.nativeElement.value = '';
    };
    NewprojectComponent.prototype.getFormattedDate = function (date) {
        var parts = date.split('-');
        switch (parts[1]) {
            case '01': {
                return (parts[2] + ' ' + 'JAN' + ' ' + parts[0]);
            }
            case '02': {
                return (parts[2] + ' ' + 'FEB' + ' ' + parts[0]);
            }
            case '03': {
                return (parts[2] + ' ' + 'MAR' + ' ' + parts[0]);
            }
            case '04': {
                return (parts[2] + ' ' + 'APR' + ' ' + parts[0]);
            }
            case '05': {
                return (parts[2] + ' ' + 'MAY' + ' ' + parts[0]);
            }
            case '06': {
                return (parts[2] + ' ' + 'JUN' + ' ' + parts[0]);
            }
            case '07': {
                return (parts[2] + ' ' + 'JUL' + ' ' + parts[0]);
            }
            case '08': {
                return (parts[2] + ' ' + 'AUG' + ' ' + parts[0]);
            }
            case '09': {
                return (parts[2] + ' ' + 'SEP' + ' ' + parts[0]);
            }
            case '10': {
                return (parts[2] + ' ' + 'OCT' + ' ' + parts[0]);
            }
            case '11': {
                return (parts[2] + ' ' + 'NOV' + ' ' + parts[0]);
            }
            case '12': {
                return (parts[2] + ' ' + 'DEC' + ' ' + parts[0]);
            }
            default: break;
        }
    };
    NewprojectComponent.prototype.checkImgUrl = function (imgUrl) {
        if (imgUrl === '') {
            return '../../assets/images/defaultAvatar.png';
        }
        return imgUrl;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('searchText'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
    ], NewprojectComponent.prototype, "searchText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('projectTitle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
    ], NewprojectComponent.prototype, "projectTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('projectDescription'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
    ], NewprojectComponent.prototype, "projectDescription", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('deadlineDate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
    ], NewprojectComponent.prototype, "deadlineDate", void 0);
    NewprojectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-newproject',
            template: __webpack_require__(/*! ./newproject.component.html */ "./src/app/newproject/newproject.component.html"),
            styles: [__webpack_require__(/*! ./newproject.component.css */ "./src/app/newproject/newproject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_newproject_service__WEBPACK_IMPORTED_MODULE_4__["NewprojectService"],
            _loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"],
            _notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"],
            _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewprojectComponent);
    return NewprojectComponent;
}());



/***/ }),

/***/ "./src/app/newproject/newproject.service.ts":
/*!**************************************************!*\
  !*** ./src/app/newproject/newproject.service.ts ***!
  \**************************************************/
/*! exports provided: NewprojectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewprojectService", function() { return NewprojectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






var NewprojectService = /** @class */ (function () {
    function NewprojectService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        this.searchMemberStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.seacrhMemberStatus$ = this.searchMemberStatus.asObservable();
        this.projectCreationStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.projectCreationStatus$ = this.projectCreationStatus.asObservable();
    }
    NewprojectService.prototype.searchMembers = function (search) {
        var _this = this;
        this.http.get('/api/getmembers', { params: { search: search } })
            .subscribe(function (data) {
            for (var i = 0; i < data.members.length; i++) {
                if (data.members[i].username === _this.authService.currentUsername) {
                    data.members.splice(i, 1);
                }
            }
            _this.searchMemberStatus.next(data.members);
        }, function (error) {
            console.log(error);
            _this.searchMemberStatus.next(null);
        });
    };
    NewprojectService.prototype.createProject = function (deadline, description, leader, members, startdate, status, title) {
        var _this = this;
        var uniqueId = this.makeid();
        var uniquePass = this.makeid();
        firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('projects/' + uniqueId).set({
            deadline: deadline,
            description: description,
            leader: leader,
            startdate: startdate,
            status: status,
            title: title,
            members: members,
            projectid: uniqueId,
            projectPassword: uniquePass
        })
            .then(function (response) {
            firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('dashboarddata/' + _this.authService.currentUser.uid + '/projectlist').once('value', function (snapshot) {
                var _a;
                var projectlist = snapshot.val();
                if (projectlist == null) {
                    projectlist = [];
                }
                firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('dashboarddata/' + _this.authService.currentUser.uid + '/projectlist').update((_a = {},
                    _a[projectlist.length] = uniqueId,
                    _a))
                    .then(function () {
                    // send members to server
                    _this.http.post('/api/newproject', {
                        members: members,
                        projectid: uniqueId,
                        projectPass: uniquePass,
                        leader: _this.authService.currentUsername
                    })
                        .subscribe(function (resp) {
                        console.log(resp.message);
                    }, function (error) {
                        console.log(error);
                    });
                    _this.projectCreationStatus.next(true);
                })
                    .catch(function (error) {
                    console.log(error);
                    _this.projectCreationStatus.next(false);
                });
            });
        })
            .catch(function (error) {
            console.log(error);
            _this.projectCreationStatus.next(false);
        });
    };
    NewprojectService.prototype.makeid = function () {
        var id = '';
        for (var i = 0; i < 32; i++) {
            id += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
        }
        return id;
    };
    NewprojectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NewprojectService);
    return NewprojectService;
}());



/***/ }),

/***/ "./src/app/notify.service.ts":
/*!***********************************!*\
  !*** ./src/app/notify.service.ts ***!
  \***********************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var NotifyService = /** @class */ (function () {
    function NotifyService() {
        this.notifyStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.notifyStatus$ = this.notifyStatus.asObservable();
    }
    NotifyService.prototype.notify = function (message) {
        this.notifyStatus.next(message);
    };
    NotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotifyService);
    return NotifyService;
}());



/***/ }),

/***/ "./src/app/notify/notify.component.css":
/*!*********************************************!*\
  !*** ./src/app/notify/notify.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notifyContainer{\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  top:0%;\r\n  opacity:0;\r\n  left:0;\r\n  width:100%;\r\n  height:100%;\r\n  border-bottom-left-radius: 3vh;\r\n  border-bottom-right-radius: 3vh;\r\n  transition: top .2s linear, opacity .2s linear;\r\n  box-shadow: 0 0 10px .5px;\r\n}\r\n#notifyMessage{\r\n  display: flex;\r\n  font-family: 'Azonix';\r\n  padding-left:2vh;\r\n  padding-right: 2vh;\r\n}\r\n#notifyClose{\r\n  position: absolute;\r\n  top:0;\r\n  right:0;\r\n  width:5vh;\r\n  height:5vh;\r\n  cursor: pointer;\r\n  background-image: url('closeLogo.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  margin-right:1vh;\r\n  margin-top:1vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZ5L25vdGlmeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsTUFBTTtFQUNOLFNBQVM7RUFDVCxNQUFNO0VBQ04sVUFBVTtFQUNWLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLDhDQUE4QztFQUM5Qyx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLEtBQUs7RUFDTCxPQUFPO0VBQ1AsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0VBQ2Ysc0NBQTBEO0VBQzFELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbm90aWZ5L25vdGlmeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25vdGlmeUNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRvcDowJTtcclxuICBvcGFjaXR5OjA7XHJcbiAgbGVmdDowO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3ZoO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzdmg7XHJcbiAgdHJhbnNpdGlvbjogdG9wIC4ycyBsaW5lYXIsIG9wYWNpdHkgLjJzIGxpbmVhcjtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAuNXB4O1xyXG59XHJcbiNub3RpZnlNZXNzYWdle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1mYW1pbHk6ICdBem9uaXgnO1xyXG4gIHBhZGRpbmctbGVmdDoydmg7XHJcbiAgcGFkZGluZy1yaWdodDogMnZoO1xyXG59XHJcbiNub3RpZnlDbG9zZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgcmlnaHQ6MDtcclxuICB3aWR0aDo1dmg7XHJcbiAgaGVpZ2h0OjV2aDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2Nsb3NlTG9nby5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OjF2aDtcclxuICBtYXJnaW4tdG9wOjF2aDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/notify/notify.component.html":
/*!**********************************************!*\
  !*** ./src/app/notify/notify.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #notifyContainer id=\"notifyContainer\">\n  <div #notifyMessage id=\"notifyMessage\">Test</div>\n  <div id=\"notifyClose\" (click)=\"notifyClose();\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/notify/notify.component.ts":
/*!********************************************!*\
  !*** ./src/app/notify/notify.component.ts ***!
  \********************************************/
/*! exports provided: NotifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyComponent", function() { return NotifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notify.service */ "./src/app/notify.service.ts");



var NotifyComponent = /** @class */ (function () {
    function NotifyComponent(notifyService) {
        this.notifyService = notifyService;
    }
    NotifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notifyService.notifyStatus$.subscribe(function (message) {
            _this.notifyOpen(message);
        });
    };
    NotifyComponent.prototype.notifyOpen = function (message) {
        var _this = this;
        this.notifyContainer.nativeElement.style.top = '100%';
        this.notifyContainer.nativeElement.style.opacity = '.8';
        this.notifyMessage.nativeElement.innerText = message;
        this.timeoutID = setTimeout(function () {
            _this.notifyContainer.nativeElement.style.top = '0';
            _this.notifyContainer.nativeElement.style.opacity = '0';
        }, 5000);
    };
    NotifyComponent.prototype.notifyClose = function () {
        this.notifyContainer.nativeElement.style.top = '0';
        this.notifyContainer.nativeElement.style.opacity = '0';
        if (this.timeoutID) {
            clearTimeout(this.timeoutID);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('notifyMessage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NotifyComponent.prototype, "notifyMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('notifyContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NotifyComponent.prototype, "notifyContainer", void 0);
    NotifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notify',
            template: __webpack_require__(/*! ./notify.component.html */ "./src/app/notify/notify.component.html"),
            styles: [__webpack_require__(/*! ./notify.component.css */ "./src/app/notify/notify.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"]])
    ], NotifyComponent);
    return NotifyComponent;
}());



/***/ }),

/***/ "./src/app/peer.service.ts":
/*!*********************************!*\
  !*** ./src/app/peer.service.ts ***!
  \*********************************/
/*! exports provided: PeerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerService", function() { return PeerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _editor_editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor/editor.service */ "./src/app/editor/editor.service.ts");




var PeerService = /** @class */ (function () {
    function PeerService(socketService, editorService) {
        var _this = this;
        this.socketService = socketService;
        this.editorService = editorService;
        this.speakerStatus = true;
        this.peer = null;
        this.peerid = null;
        this.remotePeers = [];
        this.calls = [];
        this.audioStream = null;
        this.socketService.receiveChangePeers$.subscribe(function (data) {
            var remotePeers = [];
            for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
                var socketid = _a[_i];
                if (data[socketid] !== _this.peerid) {
                    remotePeers.push(data[socketid]);
                }
            }
            _this.remotePeers = remotePeers;
            console.log(_this.remotePeers);
        });
    }
    PeerService.prototype.createPeer = function () {
        var _this = this;
        this.peer = new Peer({ key: 'lwjd5qra8257b9' });
        this.audioContext = new AudioContext();
        this.audioContext.addEventListener('statechange', function () {
            console.log(_this.audioContext.state);
            if (_this.audioContext.state !== 'running') {
                console.log('resuming');
                _this.audioContext.resume().then(function () {
                    console.log('resumed');
                });
            }
        });
        this.peer.on('open', function (id) {
            _this.peerid = id;
            console.log(_this.peerid);
            _this.socketService.sendPeerOpened(_this.editorService.getProjectID(), _this.peerid);
        });
        this.peer.on('call', function (call) {
            console.log('answered');
            call.answer();
            call.on('stream', function (stream) {
                var audio = new Audio();
                audio.srcObject = stream;
                if (_this.speakerStatus) {
                    audio.play();
                }
            });
            call.on('close', function () {
            });
            call.on('error', function (error) {
                console.log(error);
            });
        });
        this.peer.on('error', function (error) {
            console.log(error);
        });
        var nav = navigator;
        nav.getUserMedia = (nav.getUserMedia || nav.webkitGetUserMedia || nav.mozGetUserMedia || nav.msGetUserMedia);
        nav.getUserMedia({ video: false, audio: true }, function (stream) {
            _this.audioStream = stream;
        }, function (error) {
            console.log(error);
        });
    };
    PeerService.prototype.destroyPeer = function () {
        this.peer.destroy();
    };
    PeerService.prototype.startVoiceBroadcast = function () {
        if (this.audioStream !== null && this.remotePeers.length > 0) {
            for (var _i = 0, _a = this.remotePeers; _i < _a.length; _i++) {
                var peerid = _a[_i];
                var call = this.peer.call(peerid, this.audioStream);
                this.calls.push(call);
            }
        }
    };
    PeerService.prototype.endVoiceBroadcast = function () {
        if (this.audioStream != null && this.remotePeers.length > 0) {
            for (var _i = 0, _a = this.calls; _i < _a.length; _i++) {
                var call = _a[_i];
                call.close();
            }
        }
    };
    PeerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            _editor_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"]])
    ], PeerService);
    return PeerService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profileContainer{\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  top:0;\r\n  left:0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n#profileForm{\r\n  display: flex;\r\n  flex-direction: column;\r\n  width:60%;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n.profileFormField{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width:100%;\r\n  padding-bottom: 1vh;\r\n}\r\n.formFieldText{\r\n  padding-top:1vh;\r\n  padding-bottom: 1vh;\r\n  padding-left:10%;\r\n  width: 100%;\r\n  text-align: left;\r\n  font-family: 'Azonix';\r\n  font-size: .8em;\r\n  color: #2f2f2f;\r\n}\r\n#profilePic{\r\n  width: 100%;\r\n}\r\n#previewContainer{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  text-align: center;\r\n  align-items: center;\r\n  width:100%;\r\n  height:20vh;\r\n  left:0;\r\n  padding-top:2vh;\r\n  padding-bottom: 2vh;\r\n  padding-left:10%;\r\n}\r\n#preview{\r\n  width:20vh;\r\n  height:100%;\r\n  background-image: url('profile.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 80%;\r\n  border-radius: 2vh;\r\n  cursor: pointer;\r\n  transition: box-shadow .1s linear, -webkit-transform .1s linear;\r\n  transition: transform .1s linear, box-shadow .1s linear;\r\n  transition: transform .1s linear, box-shadow .1s linear, -webkit-transform .1s linear;\r\n}\r\n#preview:hover{\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  box-shadow: 0 0 10px .5px;\r\n}\r\n#descriptionContainer{\r\n  width:100%;\r\n  padding-left:10%;\r\n}\r\n#description{\r\n  resize: none;\r\n  width: 100%;\r\n  padding-top:2vh;\r\n  padding-bottom:2vh;\r\n  margin-top:2vh;\r\n  padding-bottom:1vh;\r\n  padding-left: 3vh;\r\n  padding-right: 3vh;\r\n  font-size: 1.3em;\r\n  text-align: left;\r\n  border: 1px solid #000;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  transition: box-shadow .1s linear, -webkit-transform .1s linear;\r\n  transition: transform .1s linear, box-shadow .1s linear;\r\n  transition: transform .1s linear, box-shadow .1s linear, -webkit-transform .1s linear;\r\n}\r\n#description:focus{\r\n  outline: none;\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  box-shadow: 0 0 10px .5px;\r\n}\r\n#profileActionContainer{\r\n  width:100%;\r\n  padding-left: 10%;\r\n  padding-top: 2vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n.profileControl{\r\n  padding:1vh;\r\n  padding-left: 2vh;\r\n  padding-right: 2vh;\r\n  cursor: pointer;\r\n  border: 1px solid #000;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  font-family: 'Azonix';\r\n  transition: box-shadow .1s linear, -webkit-transform .1s linear;\r\n  transition: transform .1s linear, box-shadow .1s linear;\r\n  transition: transform .1s linear, box-shadow .1s linear, -webkit-transform .1s linear;\r\n}\r\n.profileControl:hover{\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  box-shadow: 0 0 10px .5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLEtBQUs7RUFDTCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0VBQ1gsTUFBTTtFQUNOLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG9DQUF3RDtFQUN4RCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLCtEQUF1RDtFQUF2RCx1REFBdUQ7RUFBdkQscUZBQXVEO0FBQ3pEO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsK0RBQXVEO0VBQXZELHVEQUF1RDtFQUF2RCxxRkFBdUQ7QUFDekQ7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLCtEQUF1RDtFQUF2RCx1REFBdUQ7RUFBdkQscUZBQXVEO0FBQ3pEO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2ZpbGVDb250YWluZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4jcHJvZmlsZUZvcm17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOjYwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucHJvZmlsZUZvcm1GaWVsZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxdmg7XHJcbn1cclxuLmZvcm1GaWVsZFRleHR7XHJcbiAgcGFkZGluZy10b3A6MXZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxdmg7XHJcbiAgcGFkZGluZy1sZWZ0OjEwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiAnQXpvbml4JztcclxuICBmb250LXNpemU6IC44ZW07XHJcbiAgY29sb3I6ICMyZjJmMmY7XHJcbn1cclxuI3Byb2ZpbGVQaWN7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI3ByZXZpZXdDb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoyMHZoO1xyXG4gIGxlZnQ6MDtcclxuICBwYWRkaW5nLXRvcDoydmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJ2aDtcclxuICBwYWRkaW5nLWxlZnQ6MTAlO1xyXG59XHJcbiNwcmV2aWV3e1xyXG4gIHdpZHRoOjIwdmg7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3Byb2ZpbGUucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA4MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnZoO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGxpbmVhciwgYm94LXNoYWRvdyAuMXMgbGluZWFyO1xyXG59XHJcbiNwcmV2aWV3OmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAuNXB4O1xyXG59XHJcbiNkZXNjcmlwdGlvbkNvbnRhaW5lcntcclxuICB3aWR0aDoxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDoxMCU7XHJcbn1cclxuI2Rlc2NyaXB0aW9ue1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDoydmg7XHJcbiAgcGFkZGluZy1ib3R0b206MnZoO1xyXG4gIG1hcmdpbi10b3A6MnZoO1xyXG4gIHBhZGRpbmctYm90dG9tOjF2aDtcclxuICBwYWRkaW5nLWxlZnQ6IDN2aDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzdmg7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGxpbmVhciwgYm94LXNoYWRvdyAuMXMgbGluZWFyO1xyXG59XHJcbiNkZXNjcmlwdGlvbjpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAuNXB4O1xyXG59XHJcbiNwcm9maWxlQWN0aW9uQ29udGFpbmVye1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgcGFkZGluZy10b3A6IDJ2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wcm9maWxlQ29udHJvbHtcclxuICBwYWRkaW5nOjF2aDtcclxuICBwYWRkaW5nLWxlZnQ6IDJ2aDtcclxuICBwYWRkaW5nLXJpZ2h0OiAydmg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICBmb250LWZhbWlseTogJ0F6b25peCc7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBsaW5lYXIsIGJveC1zaGFkb3cgLjFzIGxpbmVhcjtcclxufVxyXG4ucHJvZmlsZUNvbnRyb2w6aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IC41cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"profileContainer\">\r\n  <div id=\"profileForm\">\r\n    <div class=\"profileFormField\">\r\n      <div class=\"formFieldText\">Profile Picture</div>\r\n      <input (change)=\"onUpload($event)\" #profilePic id=\"profilePic\" name=\"profilePic\" type=\"file\" style=\"display: none\"/>\r\n      <div id=\"previewContainer\">\r\n        <div #preview id=\"preview\" (click)=\"onProfilePicture()\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"profileFormField\">\r\n      <div class=\"formFieldText\">Description</div>\r\n      <div id=\"descriptionContainer\">\r\n        <textarea #description rows=\"3\" id=\"description\" name=\"description\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"profileFormField\">\r\n      <div id=\"profileActionContainer\">\r\n        <div class=\"profileControl\" (click)=\"onSave()\">Save</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <div class=\"profileControl\" (click)=\"onPasswordReset()\">Password Reset</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService, loadingService, authService) {
        this.profileService = profileService;
        this.loadingService = loadingService;
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingService.showLoadingWithMessage('Loading Profile ...');
        this.profileService.profileGetStatus$.subscribe(function (profile) {
            _this.profile = profile;
            _this.onSetProfile();
            _this.loadingService.removeLoading();
        });
        this.profileService.getProfile();
    };
    ProfileComponent.prototype.onSetProfile = function () {
        if (this.profile.profilePicUrl) {
            this.preview.nativeElement.style.backgroundImage = 'url(\'' + this.profile.profilePicUrl + '\')';
        }
        if (this.profile.description) {
            this.description.nativeElement.value = this.profile.description;
        }
    };
    ProfileComponent.prototype.onProfilePicture = function () {
        this.profilePic.nativeElement.click();
    };
    ProfileComponent.prototype.onUpload = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file) {
            this.profilePicFile = file;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            var url = e.target.result;
            _this.preview.nativeElement.style.backgroundImage = 'url(\"' + url.replace(/(\r\n|\n|\r)/gm, '') + '\")';
        };
        reader.readAsDataURL(file);
    };
    ProfileComponent.prototype.onSave = function () {
        var _this = this;
        this.loadingService.showLoadingWithMessage('Saving Profile Info ...');
        this.profileService.profileUpdateStatus$.subscribe(function (status) {
            _this.loadingService.removeLoading();
        });
        this.profileService.setProfile(this.profilePicFile, this.description.nativeElement.value);
    };
    ProfileComponent.prototype.onPasswordReset = function () {
        this.profileService.resetPassword();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('profilePic'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], ProfileComponent.prototype, "profilePic", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('preview'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], ProfileComponent.prototype, "preview", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('description'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], ProfileComponent.prototype, "description", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
            _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.model.ts":
/*!******************************************!*\
  !*** ./src/app/profile/profile.model.ts ***!
  \******************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
var Profile = /** @class */ (function () {
    function Profile(profilePicUrl, description) {
        this.profilePicUrl = profilePicUrl;
        this.description = description;
    }
    return Profile;
}());



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../notify.service */ "./src/app/notify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _profile_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.model */ "./src/app/profile/profile.model.ts");







var ProfileService = /** @class */ (function () {
    function ProfileService(authService, notifyService) {
        this.authService = authService;
        this.notifyService = notifyService;
        this.profileGetStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.profileGetStatus$ = this.profileGetStatus.asObservable();
        this.profileUpdateStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.profileUpdateStatus$ = this.profileUpdateStatus.asObservable();
        this.profile = new _profile_model__WEBPACK_IMPORTED_MODULE_6__["Profile"](null, null);
        this.getpromises = [];
        this.setPromises = [];
    }
    ProfileService.prototype.getProfile = function () {
        var _this = this;
        // populate profile from database
        this.getpromises.push(firebase__WEBPACK_IMPORTED_MODULE_5__["storage"]().ref(this.authService.currentUser.uid + '/profile.jpg').getDownloadURL()
            .then(function (url) {
            _this.profile.profilePicUrl = url;
        })
            .catch(function (error) {
            console.log(error);
            // profilepic doesn't exist
            _this.profile.profilePicUrl = null;
        }));
        this.getpromises.push(firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('userdata/' + this.authService.currentUser.uid).child('description')
            .once('value', function (snapshot) {
            _this.profile.description = snapshot.val();
        })
            .catch(function (error) {
            console.log(error);
            _this.profile.description = null;
        }));
        Promise.all(this.getpromises)
            .then(function () {
            _this.profileGetStatus.next(_this.profile);
        })
            .catch(function (error) {
            console.log(error);
            _this.profileGetStatus.next(_this.profile);
        });
    };
    ProfileService.prototype.setProfile = function (profilePic, description) {
        var _this = this;
        // populate database from profile
        this.setPromises.push(firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('userdata/' + this.authService.currentUser.uid)
            .set({
            description: description,
            username: this.authService.currentUsername
        })
            .then()
            .catch(function (error) {
            console.log(error);
        }));
        if (profilePic) {
            this.setPromises.push(firebase__WEBPACK_IMPORTED_MODULE_5__["storage"]().ref(this.authService.currentUser.uid + '/profile.jpg')
                .put(profilePic)
                .then()
                .catch(function (error) {
                console.log(error);
            }));
        }
        Promise.all(this.setPromises)
            .then(function () {
            _this.profileUpdateStatus.next(true);
        })
            .catch(function (error) {
            console.log(error);
            _this.profileUpdateStatus.next(false);
        });
    };
    ProfileService.prototype.resetPassword = function () {
        var _this = this;
        if (this.authService.isAuthenticated()) {
            firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().sendPasswordResetEmail(this.authService.currentUser.email)
                .then(function () {
                _this.notifyService.notify('Password Reset Mail Sent');
            })
                .catch();
        }
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _notify_service__WEBPACK_IMPORTED_MODULE_1__["NotifyService"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-scrollbar{\r\n  width: 5px;\r\n}\r\n::-webkit-scrollbar-track {\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: rgba(1, 255, 115, 0.719);\r\n  border-radius: 10px;\r\n}\r\n#projectInfoContainer{\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n#projectInfoLeftContainer{\r\n  position: relative;\r\n  width:40%;\r\n  height: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 2%;\r\n}\r\n#projectTitleContainer{\r\n  width: 100%;\r\n  padding: 2%;\r\n  background-color: lightgray;\r\n  border: 1px solid #000;\r\n  font-family: 'Roboto';\r\n  font-weight: bold;\r\n  margin-bottom: 1%;\r\n  text-align: left;\r\n  font-size: 1.5em;\r\n}\r\n#projectDescContainer{\r\n  width: 100%;\r\n  padding: 2%;\r\n  background-color: lightgray;\r\n  border: 1px solid #000;\r\n  font-family: 'Roboto';\r\n  margin-bottom: 1%;\r\n  text-align: left;\r\n}\r\n#membersListContainer{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 15%;\r\n  padding: 2%;\r\n  background-color: lightgray;\r\n  border: 1px solid #000;\r\n  margin-bottom: 1%;\r\n}\r\n#membersScrollContainer{\r\n  position: absolute;\r\n  padding-left:1%;\r\n  padding-right:1%;\r\n  width:90%;\r\n  left:5%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n  overflow-x: scroll;\r\n  overflow-y: hidden;\r\n}\r\n.memberAvatar{\r\n  position: relative;\r\n  width: 10%;\r\n  padding-bottom: 10%;\r\n  margin-right: 3%;\r\n  border-radius: 999px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  box-shadow: 0 0 7px .5px;\r\n}\r\n#projectDatesContainer{\r\n  width: 100%;\r\n  padding: 2%;\r\n  background-color: lightgray;\r\n  border: 1px solid #000;\r\n  font-family: 'Roboto';\r\n  font-weight: bold;\r\n  margin-bottom: 1%;\r\n  text-align: left;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n#projectStartdateContainer{\r\n  font-family: 'Roboto';\r\n  margin-right:1%;\r\n}\r\n#projectDeadlineContainer{\r\n  font-family: 'Roboto';\r\n  margin-left:1%;\r\n}\r\n#projectInfoRightContainer{\r\n  position: relative;\r\n  width:40%;\r\n  height: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 2%;\r\n}\r\n#projectControlsContainer{\r\n  width:100%;\r\n  padding-top:3%;\r\n  padding-bottom: 3%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  border: 1px solid #000;\r\n  background-color: lightgray;\r\n}\r\n.projectControlItem{\r\n  padding:2%;\r\n  padding-left: 3%;\r\n  padding-right: 3%;\r\n  width:10%;\r\n  border-radius: 999px;\r\n  box-shadow: 0 0 7px .5px;\r\n  transition: -webkit-transform .1s linear;\r\n  transition: transform .1s linear;\r\n  transition: transform .1s linear, -webkit-transform .1s linear;\r\n  margin-left:2%;\r\n  margin-right: 2%;\r\n  font-family: 'Azonix';\r\n  background-color: #fff;\r\n  cursor: pointer;\r\n}\r\n.projectControlItem:hover{\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLEtBQUs7RUFDTCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsU0FBUztFQUNULG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsd0NBQWdDO0VBQWhDLGdDQUFnQztFQUFoQyw4REFBZ0M7RUFDaEMsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgd2lkdGg6IDVweDtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMSwgMjU1LCAxMTUsIDAuNzE5KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4jcHJvamVjdEluZm9Db250YWluZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jcHJvamVjdEluZm9MZWZ0Q29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDo0MCU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuI3Byb2plY3RUaXRsZUNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4jcHJvamVjdERlc2NDb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiNtZW1iZXJzTGlzdENvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNSU7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbiNtZW1iZXJzU2Nyb2xsQ29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nLWxlZnQ6MSU7XHJcbiAgcGFkZGluZy1yaWdodDoxJTtcclxuICB3aWR0aDo5MCU7XHJcbiAgbGVmdDo1JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcbi5tZW1iZXJBdmF0YXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDAgN3B4IC41cHg7XHJcbn1cclxuI3Byb2plY3REYXRlc0NvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI3Byb2plY3RTdGFydGRhdGVDb250YWluZXJ7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIG1hcmdpbi1yaWdodDoxJTtcclxufVxyXG4jcHJvamVjdERlYWRsaW5lQ29udGFpbmVye1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBtYXJnaW4tbGVmdDoxJTtcclxufVxyXG4jcHJvamVjdEluZm9SaWdodENvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6NDAlO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMiU7XHJcbn1cclxuI3Byb2plY3RDb250cm9sc0NvbnRhaW5lcntcclxuICB3aWR0aDoxMDAlO1xyXG4gIHBhZGRpbmctdG9wOjMlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuLnByb2plY3RDb250cm9sSXRlbXtcclxuICBwYWRkaW5nOjIlO1xyXG4gIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgcGFkZGluZy1yaWdodDogMyU7XHJcbiAgd2lkdGg6MTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA3cHggLjVweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGxpbmVhcjtcclxuICBtYXJnaW4tbGVmdDoyJTtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gIGZvbnQtZmFtaWx5OiAnQXpvbml4JztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHJvamVjdENvbnRyb2xJdGVtOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"projectInfoContainer\">\r\n  <div id=\"projectInfoLeftContainer\">\r\n    <div id=\"projectTitleContainer\">{{ this.projectInfo.projectTitle }}</div>\r\n    <div id=\"projectDescContainer\"> {{ this.projectInfo.projectDesc }}</div>\r\n    <div id=\"membersListContainer\">\r\n      <div id=\"membersScrollContainer\">\r\n        <div\r\n          *ngFor=\"let item of this.projectInfo.members | keyvalue\"\r\n          class=\"memberAvatar\"\r\n          [ngStyle]=\"{'background-image': 'url(' + item.value + ')'}\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"projectDatesContainer\">\r\n      <div id=\"projectStartdateContainer\">Started : {{ this.projectInfo.projectStartdate }}</div>\r\n      <div id=\"projectDeadlineContainer\">Deadline : {{ this.projectInfo.projectDeadline }}</div>\r\n    </div>\r\n  </div>\r\n  <div id=\"projectInfoRightContainer\">\r\n    <div id=\"projectControlsContainer\">\r\n      <div class=\"projectControlItem\" (click)=\"onEdit()\">Edit</div>\r\n      <div class=\"projectControlItem\" (click)=\"onStart()\">Start</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project.service */ "./src/app/project/project.service.ts");
/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project.model */ "./src/app/project/project.model.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _editor_editor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editor/editor.service */ "./src/app/editor/editor.service.ts");








var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(route, projectService, loadingService, commonService, router, editorService) {
        var _this = this;
        this.route = route;
        this.projectService = projectService;
        this.loadingService = loadingService;
        this.commonService = commonService;
        this.router = router;
        this.editorService = editorService;
        this.projectInfo = new _project_model__WEBPACK_IMPORTED_MODULE_5__["ProjectInfo"]('', '', '', '', '', '', [], '');
        this.projectService.getProjectInfo$.subscribe(function (projectInfo) {
            _this.loadingService.removeLoading();
            _this.projectInfo = projectInfo;
            console.log(_this.projectInfo);
        });
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.headerVisibility(false, true, true);
        this.loadingService.showLoadingWithMessage('Loading Project Information ...');
        this.route.params.subscribe(function (params) {
            _this.projectid = params['id'];
            _this.projectService.getProjectInformation(_this.projectid);
        });
    };
    ProjectComponent.prototype.onEdit = function () {
    };
    ProjectComponent.prototype.onStart = function () {
        // navigate to editor
        if (this.projectid != null && this.projectid !== '') {
            this.editorService.setProjectID(this.projectid);
            this.router.navigate(['/editor']);
        }
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"],
            _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
            _common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _editor_editor_service__WEBPACK_IMPORTED_MODULE_7__["EditorService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/project/project.model.ts":
/*!******************************************!*\
  !*** ./src/app/project/project.model.ts ***!
  \******************************************/
/*! exports provided: ProjectInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInfo", function() { return ProjectInfo; });
var ProjectInfo = /** @class */ (function () {
    function ProjectInfo(projectid, projectTitle, projectDesc, projectDeadline, projectStartdate, leader, members, status) {
        this.projectid = projectid;
        this.projectTitle = projectTitle;
        this.projectDesc = projectDesc;
        this.projectDeadline = projectDeadline;
        this.projectStartdate = projectStartdate;
        this.leader = leader;
        this.members = members;
        this.status = status;
    }
    return ProjectInfo;
}());



/***/ }),

/***/ "./src/app/project/project.service.ts":
/*!********************************************!*\
  !*** ./src/app/project/project.service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project.model */ "./src/app/project/project.model.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);







var ProjectService = /** @class */ (function () {
    function ProjectService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.getProjectInfo = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.getProjectInfo$ = this.getProjectInfo.asObservable();
        this.projectInfo = new _project_model__WEBPACK_IMPORTED_MODULE_5__["ProjectInfo"]('', '', '', '', '', '', [], '');
    }
    ProjectService.prototype.getProjectInformation = function (projectid) {
        var _this = this;
        var members = [];
        firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('projects/' + projectid).once('value', function (snapshot) {
            if (snapshot.val()) {
                var project = snapshot.val();
                _this.projectInfo.projectDeadline = project.deadline;
                _this.projectInfo.projectDesc = project.description;
                _this.projectInfo.leader = project.leader;
                if (project.members) {
                    _this.projectInfo.members = project.members;
                    members = project.members;
                }
                else {
                    _this.projectInfo.members = {};
                }
                _this.projectInfo.projectid = project.projectid;
                _this.projectInfo.projectStartdate = project.startdate;
                _this.projectInfo.status = project.status;
                _this.projectInfo.projectTitle = project.title;
            }
        })
            .then(function (response) {
            _this.http.get('/api/getmemberavatars', { params: { members: JSON.stringify(members) } })
                .subscribe(function (data) {
                if (data.message.split('-')[0] === 'true') {
                    _this.projectInfo.members = data.members;
                    _this.getProjectInfo.next(_this.projectInfo);
                }
                else {
                    _this.getProjectInfo.next(null);
                }
            });
        })
            .catch(function (error) {
            _this.getProjectInfo.next(null);
            console.log(error);
        });
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _dashboard_announcements_announceitem_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/announcements/announceitem.model */ "./src/app/dashboard/announcements/announceitem.model.ts");
/* harmony import */ var _header_notificationinvite_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/notificationinvite.model */ "./src/app/header/notificationinvite.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _editor_editor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor/editor.service */ "./src/app/editor/editor.service.ts");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication/auth.service */ "./src/app/authentication/auth.service.ts");









var SocketService = /** @class */ (function () {
    function SocketService(http, editorService, authService) {
        var _this = this;
        this.http = http;
        this.editorService = editorService;
        this.authService = authService;
        this.seServer = '192.168.0.6';
        this.localhost = 'localhost';
        this.getTermOutput = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getTermOutput$ = this.getTermOutput.asObservable();
        this.getNewAnnouncement = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getNewAnnouncement$ = this.getNewAnnouncement.asObservable();
        this.getInviteNotification = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getInviteNotification$ = this.getInviteNotification.asObservable();
        this.receiveTextMessage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.receiveTextMessage$ = this.receiveTextMessage.asObservable();
        this.receiveChangePeers = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.receiveChangePeers$ = this.receiveChangePeers.asObservable();
        this.receiveFileStructure = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.receiveFileStructure$ = this.receiveFileStructure.asObservable();
        this.openFile = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.openFile$ = this.openFile.asObservable();
        console.log('SocketService: constructor');
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__('http://' + this.localhost + ':4000');
        this.termSocket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__('http://' + this.seServer + ':4000');
        this.socket.on('newannounce', function (data) {
            if (data) {
                data = JSON.parse(data);
                _this.getNewAnnouncement.next(new _dashboard_announcements_announceitem_model__WEBPACK_IMPORTED_MODULE_4__["AnnounceItem"](data.from, data.project, data.message, data.date, data.time));
            }
        });
        this.socket.on('notifyinvite', function (data) {
            if (data) {
                data = JSON.parse(data);
                _this.getInviteNotification.next(new _header_notificationinvite_model__WEBPACK_IMPORTED_MODULE_5__["NotificationInvite"](data.from, data.message, data.inviteLink, data.status, data.projectid));
            }
        });
        this.socket.on('receivemessage', function (data) {
            _this.receiveTextMessage.next(data);
        });
        this.socket.on('changepeers', function (data) {
            _this.receiveChangePeers.next(data);
        });
    }
    SocketService.prototype.announceUser = function (username, accessToken) {
        this.socket.emit('announceuser', JSON.stringify({
            username: username,
            token: accessToken
        }));
    };
    SocketService.prototype.setTermSocket = function () {
        var _this = this;
        this.http.post('/api/getconsolecred', {
            projectid: this.editorService.getProjectID()
        })
            .subscribe(function (resp) {
            console.log(resp);
            if (resp.username != null && resp.password != null) {
                _this.termSocket.emit('cred', { username: resp.username, password: resp.password });
            }
            else {
                _this.getTermOutput.next('Bad Credentials!');
            }
        }, function (error) {
            console.log(error);
        });
        this.termSocket.on('connect', function () {
            _this.getTermOutput.next('\r\n*** Connected to backend***\r\n');
        });
        this.termSocket.on('data', function (data) {
            _this.getTermOutput.next(data);
        });
        this.termSocket.on('disconnect', function () {
            _this.getTermOutput.next('\r\n*** Disconnected from backend***\r\n');
        });
        this.termSocket.on('receivedirtree', function (data) {
            _this.receiveFileStructure.next(data.tree);
        });
        this.termSocket.on('receivefile', function (data) {
            _this.openFile.next(data);
        });
    };
    SocketService.prototype.sendTermOutput = function (data) {
        this.termSocket.emit('data', data);
    };
    SocketService.prototype.sendTextMessage = function (message, projectid, username) {
        this.socket.emit('sendmessage', {
            message: message,
            projectid: projectid,
            username: username
        });
    };
    SocketService.prototype.sendProjectOpened = function (projectid) {
        this.socket.emit('projectopen', {
            projectid: projectid
        });
    };
    SocketService.prototype.sendProjectClosed = function (projectid) {
        this.socket.emit('projectclose', {
            projectid: projectid
        });
    };
    SocketService.prototype.sendPeerOpened = function (projectid, peerid) {
        this.socket.emit('openpeer', {
            projectid: projectid,
            peerid: peerid
        });
    };
    SocketService.prototype.sendPeerClosed = function (projectid) {
        this.socket.emit('closepeer', {
            projectid: projectid
        });
    };
    SocketService.prototype.getExplorerStructure = function (projectid) {
        this.termSocket.emit('getdirtree', {
            projectid: projectid
        });
    };
    SocketService.prototype.removeUser = function () {
        this.socket.emit('removeuser', {
            username: this.authService.currentUsername
        });
    };
    SocketService.prototype.requestFileContent = function (name, path) {
        this.termSocket.emit('getfile', {
            name: name,
            path: path
        });
    };
    SocketService.prototype.saveFileContent = function (path, content) {
        console.log(path + content);
        this.termSocket.emit('savefile', {
            path: path,
            content: content
        });
    };
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _editor_editor_service__WEBPACK_IMPORTED_MODULE_7__["EditorService"],
            _authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], SocketService);
    return SocketService;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codemirror/mode/javascript/javascript */ "./node_modules/codemirror/mode/javascript/javascript.js");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror/mode/xml/xml */ "./node_modules/codemirror/mode/xml/xml.js");
/* harmony import */ var codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/mode/htmlmixed/htmlmixed */ "./node_modules/codemirror/mode/htmlmixed/htmlmixed.js");
/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_htmlmixed_htmlmixed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/mode/clike/clike */ "./node_modules/codemirror/mode/clike/clike.js");
/* harmony import */ var codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/mode/python/python */ "./node_modules/codemirror/mode/python/python.js");
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");










if (_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_7__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_8__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Softwares\Prosoft\Projects\Web\HiDE\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!***********************!*\
  !*** jsdom (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map