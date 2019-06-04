webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.main-panel{\r\n    background: rgb(221, 228, 221);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_footer_footer_module__ = __webpack_require__("../../../../../src/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_fixedplugin_fixedplugin_module__ = __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mainfilter_pipe__ = __webpack_require__("../../../../../src/app/mainfilter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__typography_typography_component__ = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rootmodule_menu_component__ = __webpack_require__("../../../../../src/app/rootmodule/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_amcharts3_angular2__ = __webpack_require__("../../../../amcharts3-angular2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_webstorage__ = __webpack_require__("../../../../ngx-webstorage/dist/app.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_12__typography_typography_component__["a" /* TypographyComponent */],
            __WEBPACK_IMPORTED_MODULE_13__rootmodule_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__sign_in_sign_in_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_9__mainfilter_pipe__["a" /* MainfilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_module__["a" /* SidebarModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared_navbar_navbar_module__["a" /* NavbarModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_footer_footer_module__["a" /* FooterModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared_fixedplugin_fixedplugin_module__["a" /* FixedPluginModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_19_ngx_webstorage__["a" /* Ng2Webstorage */],
            __WEBPACK_IMPORTED_MODULE_17_amcharts3_angular2__["a" /* AmChartsModule */],
            __WEBPACK_IMPORTED_MODULE_18_ngx_toastr__["a" /* ToastrModule */].forRoot({
                timeOut: 4000,
                positionClass: 'toast-bottom-right',
                preventDuplicates: true,
            }),
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typography_typography_component__ = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rootmodule_menu_component__ = __webpack_require__("../../../../../src/app/rootmodule/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/sign-in/sign-in.component.ts");





var AppRoutes = [
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full',
    },
    { path: 'sign-in',
        component: __WEBPACK_IMPORTED_MODULE_4__sign_in_sign_in_component__["a" /* SignInComponent */]
    },
    {
        path: 'menus',
        component: __WEBPACK_IMPORTED_MODULE_3__rootmodule_menu_component__["a" /* MenuComponent */],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a" /* DashboardComponent */]
            },
            {
                path: 'Category',
                component: __WEBPACK_IMPORTED_MODULE_1__user_user_component__["a" /* UserComponent */]
            },
            {
                path: 'Report',
                component: __WEBPACK_IMPORTED_MODULE_2__typography_typography_component__["a" /* TypographyComponent */]
            }
        ]
    },
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommonService = (function () {
    function CommonService(http) {
        this.http = http;
    }
    CommonService.prototype.Gettable = function (body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('https://tos-production.herokuapp.com/Query_Table_Status', body, options)
            .map(this.extractData);
    };
    CommonService.prototype.Gettablestatus = function (body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('https://tos-production.herokuapp.com/Get_TableStatus_Flag', body, options)
            .map(this.extractData);
    };
    CommonService.prototype.Gettableupdate = function (body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('https://tos-production.herokuapp.com/Update_TableStatus_Flag', body, options)
            .map(this.extractData);
    };
    CommonService.prototype.bill = function (param) {
        var body = {
            "table_no": param.table_no,
            "branch_id": "buhady145"
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('https://tos-production.herokuapp.com/Get_Order_Item_Table', body, options)
            .map(this.extractData);
    };
    CommonService.prototype.occupiedbill = function (param) {
        var body = {
            "table_no": param.table_no,
            "branch_id": "buhady145"
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('https://tos-production.herokuapp.com/Query_today_food_order_table', body, options)
            .map(this.extractData);
    };
    CommonService.prototype.billclose = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('https://tos-production.herokuapp.com/Update_Table_Available_Status', param, options)
            .map(this.extractData);
    };
    //Report 
    CommonService.prototype.Getchartreport = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('https://tos-production.herokuapp.com/Report_Service', param, options)
            .map(this.extractData);
    };
    // Configurationn category componet service
    CommonService.prototype.Select_food = function (select) {
        return this.http.post("https://tos-production.herokuapp.com/Query_Food_Menu_Based_On_Branch", select)
            .map(this.extractData);
    };
    CommonService.prototype.Insert_food = function (insert) {
        return this.http.post("https://tos-production.herokuapp.com/Add_Food_Menu_Items", insert)
            .map(this.extractData);
    };
    CommonService.prototype.Update_food = function (up) {
        return this.http.post("https://tos-production.herokuapp.com/Edit_Food_Menu_Items", up)
            .map(this.extractData);
    };
    CommonService.prototype.Catagory = function (select) {
        return this.http.post("https://tos-production.herokuapp.com/Select_Item_Category", select)
            .map(this.extractData);
    };
    //login component
    CommonService.prototype.login = function (insert) {
        console.log(insert);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("https://tos-production.herokuapp.com/Billing_KOT_Login", insert, options)
            .map(this.extractData);
    };
    //Tablelogout
    CommonService.prototype.closetablet = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('https://tos-production.herokuapp.com/Tablet_Login_And_Logout', param, options)
            .map(this.extractData);
    };
    CommonService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return CommonService;
}());
CommonService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CommonService);

var _a;
//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-custom-scrollbar {\r\n    height: 290px;\r\n  }\r\n\r\n\r\n  .tableBodyScroll tbody {\r\n    display:block;\r\n    max-height:230px;\r\n    overflow-y:scroll;\r\n    table-layout:fixed;\r\n    }\r\n    .tableBodyScroll thead, tbody tr {\r\n    display:table;\r\n    width:100%;\r\n    table-layout:fixed;\r\n    }\r\n    .tableBodyScroll1 tbody {\r\n      display:block;\r\n      max-height:380px;\r\n      overflow-y:scroll;\r\n      table-layout:fixed;\r\n      }\r\n      .tableBodyScroll1 thead, tbody tr {\r\n      display:table;\r\n      width:100%;\r\n      table-layout:fixed;\r\n      }\r\n\r\n\r\n.foldtl:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0%;\r\n  left: 0%;\r\n  width: 0px;\r\n  height: 0px;\r\n  border-bottom: 35px solid #fff;\r\n  border-radius:5px 0px;\r\n  border-left: 35px solid transparent;\r\n  box-shadow: 7px 7px 7px rgba(0,0,0,0.3);\r\n}\r\n.foldtl:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0%;\r\n  left: 0%;\r\n  width: 0px;\r\n  height: 0px;\r\n  border-top: 34px solid #f4f3ef; \r\n  border-right: 34px solid transparent;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\" *ngIf=\"showhide==true\">\r\n        <div class=\" col-lg-12\">\r\n\r\n            <div class=\"col-lg-4\" *ngFor=\"let item of tablelist\">\r\n                <div class=\"card foldtl\">\r\n                    <div class=\"content\">\r\n                        <div class=\"row\">\r\n\r\n                            <div class=\"col-xs-7\">\r\n                                <h2>{{item.table_no}}</h2>\r\n                            </div>\r\n                            <div class=\"col-xs-5\" *ngIf=\"item.table_status_id!= 1\">\r\n                                <img src=\"./assets/1.png\" style=\"width:100%;height:50%\">\r\n                            </div>\r\n                            <div class=\"col-xs-5\" *ngIf=\"item.table_status_id== 1\">\r\n                                <img src=\"./assets/3.png\" style=\"width:100%;height:50%\">\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"footer\"> -->\r\n                        <hr />\r\n                        <div class=\"stats\">\r\n                            <div class=\"row\" *ngIf=\"item.table_status_id == 3\">\r\n                                <div class=\"col-md-6 text-center\">\r\n                                    <b style=\"color:rgb(14, 48, 20)\">{{item.payment_type}}</b>\r\n                                </div>\r\n                                <div class=\"col-md-6 text-center\">\r\n                                    <b style=\"color:red\" (click)=\"getbill(item)\">View&nbsp;Bill</b>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"item.table_status_id == 2\">\r\n                                <div class=\"col-md-6 text-center\"><b><span\r\n                                            class=\"fa fa-clock-o\"></span>{{item.order_time | date:'h:mm&nbsp;a'}}</b>\r\n                                </div>\r\n                                <div class=\"col-md-6 text-center\">\r\n                                    <b style=\"color:rgb(250, 165, 8)\" (click)=\"getoccupied(item)\">Occupied</b>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"item.table_status_id == 1\">\r\n                                <div class=\"col-md-4\"></div>\r\n                                <div class=\"col-md-4 text-center\">\r\n                                    <b style=\"color:rgb(27, 125, 223)\">Vacant</b>\r\n                                </div>\r\n                                <div class=\"col-md-4\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showhide==false\">\r\n        <div class=\" col-lg-8\">\r\n            <div class=\"col-lg-4\" *ngFor=\"let item of tablelist\">\r\n                <div class=\"card foldtl\">\r\n                    <div class=\"content\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-7\">\r\n                                <h2>{{item.table_no}}</h2>\r\n                            </div>\r\n                            <div class=\"col-xs-5\" *ngIf=\"item.table_status_id!= 1\">\r\n                                <img src=\"./assets/1.png\" style=\"width:100%;height:50%\">\r\n                            </div>\r\n                            <div class=\"col-xs-5\" *ngIf=\"item.table_status_id== 1\">\r\n                                <img src=\"./assets/3.png\" style=\"width:100%;height:50%\">\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"footer\"> -->\r\n                        <hr />\r\n                        <div class=\"stats\">\r\n                            <div class=\"row\" *ngIf=\"item.table_status_id == 3\">\r\n                                <div class=\"col-md-6 text-center\">\r\n                                    <b style=\"color:rgb(14, 48, 20)\">{{item.payment_type}}</b>\r\n                                </div>\r\n                                <div class=\"col-md-6 text-center\">\r\n                                    <b style=\"color:red\" (click)=\"getbill(item)\">View&nbsp;Bill</b>\r\n                                </div>\r\n                                <!-- <div class=\"col-md-5\">\r\n                                        <a style=\"color:rgb(27, 125, 223)\" (click)=\"closebill(item)\">Complete</a>\r\n                                    </div> -->\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"item.table_status_id== 2\">\r\n                                <!-- <div class=\"col-md-4\"></div> -->\r\n                                <div class=\"col-md-6 text-center\"><i\r\n                                        class=\"fa fa-clock-o \">{{item.order_time | date:'h:mm&nbsp;a'}}</i></div>\r\n                                <div class=\"col-md-6 text-center\">\r\n                                    <b style=\"color:rgb(250, 165, 8)\" (click)=\"getoccupied(item)\">Occupied</b>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"item.table_status_id== 1\">\r\n                                <div class=\"col-md-4\"></div>\r\n                                <div class=\"col-md-4 text-center\">\r\n                                    <b style=\"color:rgb(27, 125, 223)\">Vaccant</b>\r\n                                </div>\r\n                                <div class=\"col-md-4\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 \">\r\n            <div class=\"row\">\r\n                <div class=\"\">\r\n                    <div class=\"card\" *ngIf=\"showhide1==true\">\r\n                        <!-- <div class=\"header\">\r\n                         \r\n                        </div> -->\r\n                        <div class=\"content\">\r\n                            <div class=\"printclass\">\r\n                                <div>\r\n                                        <h4 class=\"title\" style=\"color:#0066ff;text-align: Center;z-index: 4;\"> <img src=\"{{logo}}\" style=\"width:50px;height:50px;border-radius:25px;\">\r\n                                                {{hotelname|uppercase}}\r\n                                        </h4>\r\n                                        <p class=\"title\" style=\"color:#0066ff;text-align: Center;font-size: 14px;z-index: 4;\"> \r\n                                                {{address|uppercase}}\r\n                                        </p>\r\n                                    <p class=\"title\" style=\"color:#0066ff;text-align: left;font-size: 12px;\"> TABLE NO :\r\n                                       <b>{{tablevalue.table_no}}</b> \r\n                                    </p>\r\n                                </div>\r\n                                <hr/>\r\n                                <div class=\"table-responsive\">\r\n                                    <table class=\"table table-striped tableBodyScroll\" style=\"width:100%\">\r\n                                        <thead>\r\n                                            <tr style=\"background-color:rgb(66, 98, 129);color:white\">\r\n                                                <th align=\"left\" style=\"width:50%\">Items&nbsp;list</th>\r\n                                                <th align=\"left\" style=\"width:25%\">QTY</th>\r\n                                                <th align=\"left\" style=\"width:25%\">Price</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let item of billtable\">\r\n                                                <td style=\"margin-left:0px;width:50%\">{{item.food_name}}</td>\r\n                                                <td style=\"width:25%;\"><i class=\"fa fa-times\"></i>{{item.quantity}}</td>\r\n                                                <td style=\"width:25%\"><i class=\"fa fa-inr\"></i> {{item.total_price}}\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr border=1>\r\n                                                <td colspan=\"2\"> Total Amount (of Item)\r\n                                                </td>\r\n                                                <td><i class=\"fa fa-inr\"></i>\r\n                                                    {{tablevalue.sub_total}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td colspan=\"2\"> Total CGST (2.80%)\r\n                                                </td>\r\n                                                <td ><i class=\"fa fa-inr\"></i>\r\n                                                    {{tablevalue.CGST_Amount}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td colspan=\"2\" > Total SGST (2.80%)\r\n                                                </td>\r\n                                                <td><i class=\"fa fa-inr\"></i>\r\n                                                    {{tablevalue.CGST_Amount}}</td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <hr/>\r\n                                <div class=\"row\">\r\n                                    <a style=\"color:red;\"> Total Price :</a>\r\n                                    <span style=\"color:red; float:right;margin-right: 60px\"><i class=\"fa fa-inr\"></i>\r\n                                        {{tablevalue.grand_total}}</span>\r\n                                  <hr/>      \r\n                                </div>\r\n                                <p class=\"title\" style=\"color:#0066ff;text-align: Center;font-size: 14px;\"> \r\n                                    Thank you! Visit again!\r\n                                </p>\r\n                                <p class=\"title\" style=\"color:#0066ff;text-align: center;font-size: 14px;\"> \r\n                                        Technology Partner www.infocuittecnologies.com\r\n                                    </p>\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <button class=\"btn btn-info\" style=\"color:rgb(27, 125, 223);width:100%\"\r\n                                        (click)=\"closebill(tablevalue)\">Complete Bill</button>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <button class=\"btn btn-info\" style=\"color:rgb(27, 125, 223);width:100%\"\r\n                                        (click)=\"printbill('printclass')\">Print Bill</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card\" *ngIf=\"showhide2==true\">\r\n                        <div class=\"header\">\r\n                            <h4 class=\"title\" style=\"color:rgb(27, 125, 223);text-align: center\"> TABLE NO :\r\n                                {{getoccvaluetableno}}\r\n                            </h4>\r\n                        </div>\r\n                        <div class=\"content\">\r\n                            <div class=\"table-responsive \">\r\n                                <table class=\"table table-striped tableBodyScroll1\">\r\n                                    <thead>\r\n                                        <tr style=\"color:rgb(27, 125, 223);\">\r\n                                            <th style=\"width:180px\">Items&nbsp;Name</th>\r\n                                            <th>Order</th>\r\n                                            <th>Status</th>\r\n                                        </tr>\r\n\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let item of getoccvalue\">\r\n                                            <td style=\"width:180px\">{{item.food_name}}</td>\r\n                                            <td *ngIf=\"item.order_status_desc == 'COMPLETED'\">Cooked</td>\r\n                                            <td *ngIf=\"item.order_status_desc == 'ORDER'\">Not Cooked</td>\r\n                                            <td *ngIf=\"item.notification_status == 'READ'\">Served</td>\r\n                                            <td\r\n                                                *ngIf=\"item.notification_status == 'NOPE'||item.notification_status == 'UN READ'\">\r\n                                                Not Served</td>\r\n                                        </tr>\r\n                                        <tr *ngIf=\"getoccvalue == 0\">\r\n                                            <td> No Data Found</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <button style=\"width:100%\" class=\"btn btn-info\"\r\n                                            (click)=\"closeoccupied()\">Close</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_webstorage__ = __webpack_require__("../../../../ngx-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(router, commonservice, toastr, session) {
        this.router = router;
        this.commonservice = commonservice;
        this.toastr = toastr;
        this.session = session;
        this.showhide = true;
        this.showhide1 = false;
        this.showhide2 = false;
    }
    DashboardComponent.prototype.showSuccess = function (message) {
        this.toastr.success(message);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.business_id = this.session.retrieve("branch_id");
        this.pic = this.session.retrieve("logoimages");
        this.hotelname = this.session.retrieve("restaurant_name");
        this.address = this.session.retrieve("address");
        this.logo = this.session.retrieve("logoimages");
        var body = {
            "branch_id": this.business_id
        };
        this.commonservice.Gettable(body)
            .subscribe(function (resp1) {
            _this.tablelist = resp1.Returnvalue;
            console.log("testttttt", resp1);
        });
        this.timeinterval = setInterval(function () {
            _this.getcard();
        }, 5000);
    };
    DashboardComponent.prototype.getcard = function () {
        var _this = this;
        var body = {
            "branch_id": this.business_id
        };
        this.commonservice.Gettablestatus(body)
            .subscribe(function (resp) {
            console.log("tablestatus", resp);
            if (resp.Changes_Flage == "1") {
                _this.commonservice.Gettable(body)
                    .subscribe(function (resp1) {
                    if (resp1.ReturnCode == "RRS") {
                        _this.tablelist = resp1.Returnvalue;
                        console.log("testttttt", resp1);
                        _this.commonservice.Gettableupdate(body)
                            .subscribe(function (resp2) {
                            resp;
                        });
                    }
                });
            }
        });
    };
    DashboardComponent.prototype.getbill = function (param) {
        var _this = this;
        this.showhide = false;
        this.showhide1 = true;
        this.showhide2 = false;
        this.commonservice.bill(param)
            .subscribe(function (resp) {
            console.log("testtttttt bill", resp);
            _this.tablevalue = resp.Returnvalue;
            _this.billtable = resp.Returnvalue.items;
        });
    };
    DashboardComponent.prototype.getoccupied = function (param) {
        var _this = this;
        this.showhide = false;
        this.showhide1 = false;
        this.showhide2 = true;
        this.commonservice.occupiedbill(param)
            .subscribe(function (resp) {
            console.log("testtttttt occbill", resp);
            _this.getoccvalue = resp.Returnvalue;
            _this.getoccvaluetableno = param.table_no;
        });
        this.occupied = setInterval(function () {
            _this.looptableoccupied(param);
        }, 5000);
    };
    DashboardComponent.prototype.looptableoccupied = function (param) {
        var _this = this;
        this.showhide = false;
        this.showhide1 = false;
        this.showhide2 = true;
        this.commonservice.occupiedbill(param)
            .subscribe(function (resp) {
            console.log("testtttttt occbill", resp);
            _this.getoccvalue = resp.Returnvalue;
            _this.getoccvaluetableno = param.table_no;
        });
    };
    DashboardComponent.prototype.closeoccupied = function () {
        this.showhide = true;
        this.showSuccess("The Order Status is viewed");
        clearInterval(this.occupied);
    };
    DashboardComponent.prototype.printbill = function (cmpName) {
        var printContents = document.getElementsByClassName(cmpName)[0].innerHTML;
        var printWin = window.open();
        printWin.document.write(printContents);
        printWin.document.close();
        printWin.focus();
        printWin.print();
        printWin.close();
    };
    DashboardComponent.prototype.closebill = function (param) {
        var _this = this;
        var body = {
            "table_no": param.table_no,
            "order_no": param.order_no,
            "grand_total": param.grand_total,
            "CGST_Amount": param.CGST_Amount,
            "SGST_Amount": param.SGST_Amount,
            "total_items": param.total_items,
            "sub_total": param.sub_total,
            "total_amount_offers": param.total_amount_offers,
            "total_offers": param.total_offers,
            "branch_id": this.business_id
        };
        console.log("testinput", JSON.stringify(body));
        this.commonservice.billclose(body)
            .subscribe(function (resp) {
            console.log("tesssss", resp);
            if (resp.ReturnCode == "RUS") {
                _this.showhide = true;
                _this.showSuccess("The Bill for Table Number " + param.table_no);
                var body1 = {
                    "table_no": param.table_no,
                    "branch_id": _this.business_id,
                    "password": "",
                    "login_status_id": 2
                };
                _this.commonservice.closetablet(body1).subscribe(function (resp) {
                    if (resp.ReturnCode == "LOS") {
                        _this.getcard();
                    }
                });
            }
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timeinterval);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dashboard-cmp',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_webstorage__["b" /* SessionStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_webstorage__["b" /* SessionStorageService */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainfilter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainfilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainfilterPipe = (function () {
    function MainfilterPipe() {
    }
    MainfilterPipe.prototype.transform = function (items, filter, defaultFilter) {
        if (!filter) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            if (defaultFilter) {
                return items.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "";
                    }, true);
                });
            }
            else {
                return items.filter(function (item) {
                    return filterKeys_1.some(function (keyName) {
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
                    });
                });
            }
        }
    };
    return MainfilterPipe;
}());
MainfilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'mainfilter'
    })
], MainfilterPipe);

//# sourceMappingURL=mainfilter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/rootmodule/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\r\n        <sidebar-cmp></sidebar-cmp>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <navbar-cmp></navbar-cmp>\r\n        <div class=\"content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <footer-cmp></footer-cmp>\r\n    </div>\r\n</div>\r\n<fixedplugin-cmp></fixedplugin-cmp>"

/***/ }),

/***/ "../../../../../src/app/rootmodule/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () { };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menus',
        template: __webpack_require__("../../../../../src/app/rootmodule/menu.component.html"),
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-plugin\">\r\n    <div class=\"dropdown show-dropdown\">\r\n        <a href=\"#\" data-toggle=\"dropdown\">\r\n        <i class=\"fa fa-cog fa-2x\"> </i>\r\n        </a>\r\n        <ul class=\"dropdown-menu\">\r\n            <li class=\"header-title\">Sidebar Background</li>\r\n            <li class=\"adjustments-line text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\r\n                        <span class=\"badge filter badge-black active\" data-color=\"white\"></span>\r\n                        <span class=\"badge filter badge-white\" data-color=\"black\"></span>\r\n                </a>\r\n            </li>\r\n\r\n\t\t\t<li class=\"header-title\">Sidebar Active Color</li>\r\n            <li class=\"adjustments-line text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\r\n                        <span class=\"badge filter badge-primary\" data-color=\"primary\"></span>\r\n                        <span class=\"badge filter badge-info\" data-color=\"info\"></span>\r\n                        <span class=\"badge filter badge-success\" data-color=\"success\"></span>\r\n                        <span class=\"badge filter badge-warning\" data-color=\"warning\"></span>\r\n                        <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\r\n                </a>\r\n            </li>\r\n\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPluginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FixedPluginComponent = (function () {
    function FixedPluginComponent() {
    }
    FixedPluginComponent.prototype.ngOnInit = function () {
        var $sidebar = $('.sidebar');
        var $off_canvas_sidebar = $('.off-canvas-sidebar');
        var window_width = $(window).width();
        if (window_width > 767) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-background-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-background-color', new_color);
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-active-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-active-color', new_color);
            }
        });
    };
    return FixedPluginComponent;
}());
FixedPluginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'fixedplugin-cmp',
        template: __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.component.html")
    })
], FixedPluginComponent);

//# sourceMappingURL=fixedplugin.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPluginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__ = __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FixedPluginModule = (function () {
    function FixedPluginModule() {
    }
    return FixedPluginModule;
}());
FixedPluginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__["a" /* FixedPluginComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__["a" /* FixedPluginComponent */]]
    })
], FixedPluginModule);

//# sourceMappingURL=fixedplugin.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container-fluid\">\r\n        <!-- <nav class=\"pull-left\">\r\n            <ul>\r\n\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com\">\r\n                        Creative Tim\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"http://blog.creative-tim.com\">\r\n                       Blog\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com/license\">\r\n                        Licenses\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav> -->\r\n        <div class=\"copyright pull-right\">\r\n            &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"http://infocuittechnologies.com\">Infocuit Technologies</a>\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'footer-cmp',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html")
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
    })
], FooterModule);

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar bar1\"></span>\r\n                <span class=\"icon-bar bar2\"></span>\r\n                <span class=\"icon-bar bar3\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\r\n        </div>\r\n        <a class=\"navbar-brand\" style=\"float:right\" (click)=\"btnClick()\"><i class=\"fa fa-power-off \" title=\"Log Out\"></i> </a>\r\n        <a class=\"navbar-brand\" style=\"float:right\"><i class=\"fa fa-credit-card-alt\" title=\"Ready for Payment\"></i><span class=\"badge badge-success\" style=\"margin-left:3px;background-color: #28a745;\">{{pc}}</span> </a>\r\n        <a class=\"navbar-brand\" style=\"float:right\"><i class=\"fas fa-chair\" title=\"Table Vacant\"></i><span class=\"badge badge-warning\" style=\"background-color:#dc3545;\">{{ac}}</span></a>\r\n        <a class=\"navbar-brand\" style=\"float:right\"><i class=\"fas fa-user-check\" title=\"Table Occupied\"></i ><span class=\"badge badge-info\" style=\"background-color:#007bff;\">{{uc}}</span></a>\r\n        <!-- <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"ti-panel\"></i>\r\n                        <p>Stats</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <i class=\"ti-bell\"></i>\r\n                            <p class=\"notification\">5</p>\r\n                            <p>Notifications</p>\r\n                            <b class=\"caret\"></b>\r\n                      </a>\r\n                      <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Notification 1</a></li>\r\n                        <li><a href=\"#\">Notification 2</a></li>\r\n                        <li><a href=\"#\">Notification 3</a></li>\r\n                        <li><a href=\"#\">Notification 4</a></li>\r\n                        <li><a href=\"#\">Another notification</a></li>\r\n                      </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <i class=\"ti-settings\"></i>\r\n                        <p>Settings</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n\r\n        </div> -->\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_webstorage__ = __webpack_require__("../../../../ngx-webstorage/dist/app.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = (function () {
    function NavbarComponent(commonservice, location, renderer, session, element, router) {
        this.commonservice = commonservice;
        this.renderer = renderer;
        this.session = session;
        this.element = element;
        this.router = router;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.business_id = this.session.retrieve("branch_id");
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
        });
        var body = {
            "branch_id": this.business_id
        };
        this.commonservice.Gettable(body)
            .subscribe(function (Response) {
            if (Response.ReturnCode == "RRS") {
                _this.ac = Response.Available_count;
                _this.uc = Response.unavailable_count;
                _this.pc = Response.payment_count;
            }
        });
        this.timeinterval = setInterval(function () {
            _this.Table_Status();
        }, 1000);
    };
    NavbarComponent.prototype.Table_Status = function () {
        var _this = this;
        var body = {
            "branch_id": this.business_id
        };
        this.commonservice.Gettablestatus(body)
            .subscribe(function (resp) {
            console.log("tablestatus", resp);
            if (resp.Changes_Flage == "1") {
                _this.commonservice.Gettable(body)
                    .subscribe(function (Response) {
                    if (Response.ReturnCode == "RRS") {
                        _this.ac = Response.Available_count;
                        _this.uc = Response.unavailable_count;
                        _this.pc = Response.payment_count;
                    }
                });
            }
        });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.btnClick = function () {
        var _this = this;
        var body = {
            "branch_id": this.session.retrieve("branch_id"),
            "screen": "BILLING",
            "login_status_id": 2,
            "mobile": this.session.retrieve("mobile"),
            "password": this.session.retrieve("password")
        };
        this.commonservice.login(body).subscribe(function (Response) {
            console.log("theeeee", Response);
            if (Response.ReturnCode == 'LOS') {
                _this.router.navigate(['sign-in']);
            }
        });
    };
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])("navbar-cmp"),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "button", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'navbar-cmp',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */],]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_webstorage__["b" /* SessionStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_webstorage__["b" /* SessionStorageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _f || Object])
], NavbarComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
    })
], NavbarModule);

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"sidebar-wrapper\">\r\n    <div class=\"logo\" >\r\n        <a class=\"simple-text\" style=\"font-family: Courier, serif;\">\r\n         <b style=\"font-weight:900;font-size: 22px\"> {{hotelname}} </b>\r\n        </a>\r\n    </div>\r\n    <ul class=\"nav\">\r\n            <li *ngIf=\"isNotMobileMenu()\">\r\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                    <i class=\"ti-panel\"></i>\r\n\t\t\t\t\t<p>Stats</p>\r\n                </a>\r\n            </li>\r\n            <li class=\"dropdown\" *ngIf=\"isNotMobileMenu()\">\r\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"ti-bell\"></i>\r\n                        <p class=\"notification\">5</p>\r\n    \t\t\t\t\t<p>Notifications</p>\r\n    \t\t\t\t\t<b class=\"caret\"></b>\r\n                  </a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    <li><a href=\"#\">Notification 1</a></li>\r\n                    <li><a href=\"#\">Notification 2</a></li>\r\n                    <li><a href=\"#\">Notification 3</a></li>\r\n                    <li><a href=\"#\">Notification 4</a></li>\r\n                    <li><a href=\"#\">Another notification</a></li>\r\n                  </ul>\r\n            </li>\r\n            <li *ngIf=\"isNotMobileMenu()\">\r\n                <a href=\"#\">\r\n\t\t\t\t\t<i class=\"ti-settings\"></i>\r\n\t\t\t\t\t<p>Settings</p>\r\n                </a>\r\n            </li>\r\n            <li class=\"divider\" *ngIf=\"isNotMobileMenu()\"></li>\r\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\r\n            <a [routerLink]=\"[menuItem.path]\">\r\n                <i class=\"{{menuItem.icon}}\"></i>\r\n                <p>{{menuItem.title}}</p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__ = __webpack_require__("../../../../ngx-webstorage/dist/app.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ROUTES = [
    { path: 'dashboard', title: 'Dashboard', icon: 'ti-panel', class: '' },
    { path: 'Category', title: 'Category', icon: 'ti-user', class: '' },
    { path: 'Report', title: 'Report', icon: 'ti-gallery', class: '' }
];
var SidebarComponent = (function () {
    function SidebarComponent(session) {
        this.session = session;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.hotelname = this.session.retrieve("restaurant_name");
        this.restaurant_logo = this.session.retrieve("logoimages");
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sidebar-cmp',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__["b" /* SessionStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__["b" /* SessionStorageService */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]]
    })
], SidebarModule);

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bgimg{\r\n    background-image:url(" + escape(__webpack_require__("../../../../../src/assets/img/home.jpg")) + "); \r\n    background-repeat:no-repeat;\r\n    background-size:cover;\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\ninput:-ms-input-placeholder{\r\n    color: white;\r\n}\r\n\r\ninput::placeholder{\r\n    color: white;\r\n}\r\ninput[type=text] {\r\n    background: transparent;\r\n    border: none;\r\n    border-bottom: 1px solid #ffffff;\r\n    color: #ffffff;\r\n}\r\ninput[type=password] {\r\n    background: transparent;\r\n    border: none;\r\n    border-bottom: 1px solid #ffffff;\r\n    color: #ffffff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content bgimg\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-6\">\r\n                <div *ngIf=\"book1 == true\">\r\n                    <div class=\" dei\" style=\"padding-top:15%\">\r\n                        <div class=\"card card-profile \" style=\"background-color: rgba(245, 245, 245, 0.4);\">\r\n                            <!-- <div class=\"card-avatar\">\r\n                                <a href=\"#pablo\">\r\n                                    <img class=\"img\" src=\"./assets/img/hotel-1.jpg\" />\r\n                                </a>\r\n                            </div> -->\r\n                            <div class=\"card-body\">\r\n                                <h2 class=\"card-category text-center\"\r\n                                    style=\" font-family:Bradley Hand, Brush Script Std, cursive;color:white;\">\r\n                                    TOS Point Of Sale</h2>\r\n                                <h4 class=\"card-title text-center\" style=\"color:white\">SIGN IN</h4>\r\n                                <div class=\"card-body\">\r\n                                    <form>\r\n                                        <div>\r\n                                            <input class=\"form-control\" placeholder=\"Branch Id\" type=\"text\"\r\n                                                name=\"email\" #myemail>\r\n                                        </div>\r\n                                        <div>\r\n                                            <input class=\"form-control\" placeholder=\"Mobile Number\" type=\"text\"\r\n                                                name=\"text\" #mynumber>\r\n                                        </div>\r\n                                        <div>\r\n                                            <input class=\"form-control\" placeholder=\"Password\" type=\"password\"\r\n                                                name=\"psw\" #mypsw>\r\n                                        </div>\r\n                                        <br><br>\r\n                                        <div class=\"text-center\">\r\n                                            <button mat-raised-button type=\"submit\"\r\n                                            class=\"btn btn-warning btn-round pull-center\"\r\n                                            (click)=\"btnClick(myemail.value,mynumber.value,mypsw.value)\">Log In</button>\r\n                                        &nbsp;&nbsp;&nbsp;\r\n                                        <button (click)=\"select()\" class=\"btn btn-warning btn-round\">sign up</button>\r\n                                        </div>\r\n                                        <div class=\"clearfix\"></div>\r\n                                        <br>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"book2 == true\">\r\n                    <div class=\" dei\">\r\n                        <div class=\"card card-profile \" style=\"background-color: rgba(245, 245, 245, 0.4);\">\r\n                            <div class=\"card-body\">\r\n                                <h3 class=\"card-category\"\r\n                                    style=\"font-family:Bradley Hand, Brush Script Std, cursive;color:brown\">Multi\r\n                                    Ordering System</h3>\r\n                                <h4 class=\"card-title\">SIGN UP</h4>\r\n                                <div class=\"card-body\">\r\n                                    <form>\r\n                                        <div class=\"\">\r\n                                            <input class=\"form-control\" placeholder=\"Emoloyee Name\" name=\"empname\"\r\n                                                [(ngModel)]=\"empname\">\r\n                                        </div>\r\n                                        <div class=\"\">\r\n                                            <input class=\"form-control\" placeholder=\" Emoloyee Email\" type=\"email\"\r\n                                                name=\"email\" [(ngModel)]=\"email\">\r\n                                        </div>\r\n                                        <div class=\"\">\r\n                                            <input class=\"form-control\" placeholder=\"Emoloyee Moblie Number\"\r\n                                                name=\"mobno\" [(ngModel)]=\"mobno\">\r\n                                        </div>\r\n                                        <div class=\"\">\r\n                                            <input class=\"form-control\" placeholder=\"Emoloyee Deparment\" name=\"empid\"\r\n                                                [(ngModel)]=\"empid\">\r\n                                        </div>\r\n                                        <div class=\"\">\r\n                                            <input class=\"form-control\" placeholder=\"Emoloyee Roll Id\" name=\"rollid\"\r\n                                                [(ngModel)]=\"roolid\">\r\n                                        </div>\r\n                                        <div class=\"\">\r\n                                            <input class=\"form-control\" placeholder=\"Emoloyee Status Id\" type=\"email\"\r\n                                                name=\"statusid\" [(ngModel)]=\"statusid\">\r\n                                        </div>\r\n                                        <div class=\"\">\r\n                                            <input class=\"form-control\" placeholder=\"Emoloyee Password\" name=\"psw\"\r\n                                                [(ngModel)]=\"psw\">\r\n                                        </div>\r\n                                        <div class=\"clearfix\"></div>\r\n                                    </form>\r\n                                </div>\r\n                                <div (click)=\"select1(empname,email,mobno,empid,roolid,statusid,psw)\"\r\n                                    class=\"btn btn-danger btn-round\">DONE</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\"></div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_webstorage__ = __webpack_require__("../../../../ngx-webstorage/dist/app.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInComponent = (function () {
    function SignInComponent(router, signin, session) {
        this.router = router;
        this.signin = signin;
        this.session = session;
        this.book2 = false;
        this.book1 = true;
    }
    SignInComponent.prototype.ngOnInit = function () { };
    SignInComponent.prototype.btnClick = function (param, param1, param2) {
        var _this = this;
        var body = {
            "branch_id": param,
            "screen": "BILLING",
            "login_status_id": 1,
            "mobile": parseInt(param1),
            "password": param2
        };
        this.signin.login(body).subscribe(function (Response) {
            console.log("theeeee", Response);
            if (Response.ReturnCode == 'LS') {
                _this.session.store("branch_id", Response.branch_details[0].branch_id);
                _this.session.store("restaurant_name", Response.branch_details[0].restaurant_name);
                _this.session.store("logoimages", Response.branch_details[0].restaurant_logo);
                _this.session.store("password", Response.branch_details[0].branch_password);
                _this.session.store("mobile", parseInt(param1));
                _this.session.store("address", Response.branch_details[0].address);
                _this.router.navigate(['menus']);
            }
        });
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sign-in-cmp',
        template: __webpack_require__("../../../../../src/app/sign-in/sign-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sign-in/sign-in.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_webstorage__["b" /* SessionStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_webstorage__["b" /* SessionStorageService */]) === "function" && _c || Object])
], SignInComponent);

var _a, _b, _c;
//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"content\">\r\n                        <div class=\"row\" style=\"margin: 0px 10px 5px 10px;border:1px solid grey;border-radius: 10px;\">\r\n                                <div class=\"col-md-3\">\r\n                                    <label for=\"\"> From Date</label>\r\n                                    <div class=\"input-group\">\r\n                                        <input style=\"border-radius:5px;height:34px;border:solid 1px lightgrey\" type=\"date\"\r\n                                            name=\"\" id=\"\" class=\"from-control\" [(ngModel)]=\"startdate\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                    <label for=\"\"> To Date</label>\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"date\" name=\"\" id=\"\" class=\"from-control\" [(ngModel)]=\"todate\"\r\n                                            style=\"border-radius:5px;height:34px;border:solid 1px lightgrey\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <label for=\"\"> Linear&nbsp;Chart</label>\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"radio\" class=\"form-check-input\" name=\"optradio\" value=3\r\n                                            style=\"margin-left:30px\" [(ngModel)]=\"checkboxvalue\"\r\n                                            (change)=\"getreport(startdate,todate,checkboxvalue,business_id)\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <label for=\"\"> Table&nbsp;Wise</label>\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"radio\" class=\"form-check-input\" name=\"optradio\" value=2\r\n                                            style=\"margin-left:30px\" [(ngModel)]=\"checkboxvalue\"\r\n                                            (change)=\"getreport(startdate,todate,checkboxvalue,business_id)\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <label for=\"\"> Category</label>\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"radio\" class=\"form-check-input\" name=\"optradio\" value=1\r\n                                            style=\"margin-left:30px\" [(ngModel)]=\"checkboxvalue\"\r\n                                            (change)=\"getreport(startdate,todate,checkboxvalue,business_id)\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div  *ngIf=\"showhide!=true\">\r\n                                <div class=\"row\"  style=\"border:1px solid grey;border-radius: 10px;margin:0px 10px 0px 10px\">\r\n                                    <div id=\"chartdiv1\" [style.width.%]=\"100\" [style.height.px]=\"330\"></div>\r\n                                </div>\r\n                                <div class=\"row\" style=\"border:1px solid grey;border-radius: 10px;margin: 10px\">\r\n                                    <div id=\"chartdiv2\" [style.width.%]=\"100\" [style.height.px]=\"330\"></div>\r\n                                </div>\r\n                            </div>\r\n                    <div class=\"row\" *ngIf=\"showhide==true\" style=\"border:1px solid grey;border-radius: 10px;margin:0px 10px 10px 10px\">\r\n                        <div id=\"chartdiv1\" [style.width.%]=\"100\" [style.height.px]=\"420\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_amcharts3_angular2__ = __webpack_require__("../../../../amcharts3-angular2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_webstorage__ = __webpack_require__("../../../../ngx-webstorage/dist/app.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TypographyComponent = (function () {
    function TypographyComponent(commonservice, AmCharts, session) {
        this.commonservice = commonservice;
        this.AmCharts = AmCharts;
        this.session = session;
        this.todate = __WEBPACK_IMPORTED_MODULE_3_moment__().format('YYYY-MM-DD');
        this.startdate = __WEBPACK_IMPORTED_MODULE_3_moment__().subtract('days', 7).format('YYYY-MM-DD');
        this.checkboxvalue = 3;
        this.showhide = true;
    }
    TypographyComponent.prototype.ngOnInit = function () {
        this.business_id = this.session.retrieve("branch_id");
        this.getreport(this.startdate, this.todate, this.checkboxvalue, this.business_id);
    };
    TypographyComponent.prototype.getreport = function (startdate, todate, checkboxvalue, param) {
        var _this = this;
        if (checkboxvalue == '1' || checkboxvalue == '2') {
            this.showhide = false;
        }
        else {
            this.showhide = true;
        }
        var body = {
            "from_date": startdate,
            "to_date": todate,
            "type": parseInt(checkboxvalue),
            "branch_id": param
        };
        console.log(body);
        this.commonservice.Getchartreport(body)
            .subscribe(function (resp) {
            var chartData1 = resp.Return;
            // chartData = resp.Return_Category;
            console.log("testt", chartData1);
            if (chartData1 == "Table") {
                var chartData = resp.Return_Table;
                var collectiveData = [];
                for (var x in chartData) {
                    var dataPoint = chartData[x];
                    if ('0' == x) {
                        for (var y in dataPoint.category_reports) {
                            collectiveData.push({
                                "Category_name": dataPoint.category_reports[y].Category_name,
                                "Count": dataPoint.category_reports[y].Count
                            });
                        }
                    }
                    // else {
                    //   for (var y in dataPoint.category_reports) {
                    //     collectiveData[y].Count += dataPoint.category_reports[y].Count;
                    //   }
                    // }
                }
                // create pie chart
                var chart = _this.AmCharts.makeChart("chartdiv1", {
                    "type": "pie",
                    "dataProvider": chartData,
                    "valueField": "Count",
                    "titleField": "table_no",
                    "radius": "35%",
                    "innerRadius": "50%",
                    "marginTop": 30,
                    "depth3D": 15,
                    "theme": "light",
                    "labelText": "[[title]]: [[value]]",
                    "pullOutOnlyOne": true,
                });
                // create column chart
                var chart2 = _this.AmCharts.makeChart("chartdiv2", {
                    "type": "serial",
                    "theme": "light",
                    "pathToImages": "/lib/3/images/",
                    "autoMargins": false,
                    "marginLeft": 70,
                    "marginRight": 15,
                    "marginTop": 40,
                    "marginBottom": 100,
                    "depth3D": 20,
                    "angle": 30,
                    "titles": [{
                            "text": "Table 1"
                        }],
                    "dataProvider": collectiveData,
                    "startDuration": 1,
                    "graphs": [{
                            "title": "Count",
                            "type": "column",
                            "fillAlphas": 0.8,
                            "valueField": "Count"
                        }],
                    "categoryField": "Category_name",
                    "categoryAxis": {
                        "gridPosition": "start",
                        "labelRotation": 25
                    },
                    "valueAxes": [{
                            "integersOnly": true
                        }]
                });
                chart.addListener("pullOutSlice", function (event) {
                    //   for (var y in dataPoint.category_reports) {
                    //     collectiveData[y].Count += dataPoint.category_reports[y].Count;
                    //   }
                    chart2.dataProvider = event.dataItem.dataContext.category_reports;
                    chart2.titles[0].text = event.dataItem.dataContext.table_no;
                    chart2.validateData();
                    chart2.animateAgain();
                });
                chart.addListener("pullInSlice", function (event) {
                    // chart2.dataProvider = collectiveData;
                    // chart2.titles[0].text = "All Table";
                    // chart2.validateData();
                    // chart2.animateAgain();
                });
            }
            else if (chartData1 == "Category") {
                chartData = resp.Return_Category;
                var collectiveData = [];
                console.log("Chart Data", chartData);
                for (var x in chartData) {
                    var dataPoint = chartData[x];
                    if ('0' == x) {
                        for (var y in dataPoint.food_items_reports) {
                            collectiveData.push({
                                "food_name": dataPoint.food_items_reports[y].food_name,
                                "Count": dataPoint.food_items_reports[y].Count
                            });
                        }
                    }
                    // else {
                    //   for (var y in dataPoint.food_items_reports) {
                    //     collectiveData[y].Count += dataPoint.food_items_reports[y].Count;
                    //   }
                    // }
                    // console.log("Collective Data",collectiveData);
                }
                // create pie chart
                var chart = _this.AmCharts.makeChart("chartdiv1", {
                    "type": "pie",
                    "dataProvider": chartData,
                    "valueField": "Count",
                    "titleField": "category",
                    "radius": "29%",
                    "innerRadius": "46%",
                    "labelRadius": 1,
                    "marginTop": 120,
                    "marginBottom": 10,
                    "depth3D": 15,
                    "theme": "light",
                    "labelText": "[[title]]: [[value]]",
                    "pullOutOnlyOne": true,
                });
                // create column chart
                var chart2 = _this.AmCharts.makeChart("chartdiv2", {
                    "type": "serial",
                    "theme": "light",
                    "pathToImages": "/lib/3/images/",
                    "autoMargins": false,
                    "marginLeft": 100,
                    "marginRight": 15,
                    "marginTop": 20,
                    "marginBottom": 110,
                    "depth3D": 20,
                    "angle": 30,
                    "titles": [{
                            "text": "Category 1"
                        }],
                    "dataProvider": collectiveData,
                    "startDuration": 1,
                    "graphs": [{
                            "title": "Count",
                            "type": "column",
                            "fillAlphas": 0.8,
                            "valueField": "Count"
                        }],
                    "categoryField": "food_name",
                    "categoryAxis": {
                        "gridPosition": "start",
                        "autoGridCount": false,
                        "labelRotation": 25,
                        "gridCount": 12
                    },
                    "valueAxes": [{
                            "integersOnly": true
                        }]
                });
                chart.addListener("pullOutSlice", function (event) {
                    chart2.dataProvider = event.dataItem.dataContext.food_items_reports;
                    chart2.titles[0].text = event.dataItem.dataContext.category;
                    chart2.validateData();
                    chart2.animateAgain();
                });
                chart.addListener("pullInSlice", function (event) {
                    // chart2.dataProvider = collectiveData;
                    // chart2.titles[0].text = "All Table";
                    // chart2.validateData();
                    // chart2.animateAgain();
                });
            }
            else {
                var chart = _this.AmCharts.makeChart("chartdiv1", {
                    "type": "serial",
                    "theme": "light",
                    "dataDateFormat": "YYYY-MM-DD",
                    "graphs": [{
                            "id": "g1",
                            "bullet": "round",
                            "bulletBorderAlpha": 1,
                            "bulletColor": "#FFFFFF",
                            "bulletSize": 5,
                            "hideBulletsCount": 50,
                            "lineThickness": 2,
                            "title": "red line",
                            "useLineColorForBulletBorder": true,
                            "valueField": "amount"
                        }],
                    "chartScrollbar": {
                        "graph": "g1",
                        "oppositeAxis": false,
                        "offset": 30,
                        "scrollbarHeight": 80,
                        "backgroundAlpha": 0,
                        "selectedBackgroundAlpha": 0.1,
                        "selectedBackgroundColor": "#888888",
                        "graphFillAlpha": 0,
                        "graphLineAlpha": 0.5,
                        "selectedGraphFillAlpha": 0,
                        "selectedGraphLineAlpha": 1,
                        "autoGridCount": true,
                        "color": "#AAAAAA"
                    },
                    "chartCursor": {
                        "cursorAlpha": 1,
                        "cursorColor": "#258cbb"
                    },
                    "categoryField": "date",
                    "categoryAxis": {
                        "parseDates": true,
                        "equalSpacing": true,
                        "gridPosition": "middle",
                        "dashLength": 1,
                        "minorGridEnabled": true
                    },
                    "zoomOutOnDataUpdate": false,
                    "listeners": [{
                            "event": "init",
                            "method": function (e) {
                                /**
                                 * Pre-zoom
                                 */
                                e.chart.zoomToIndexes(e.chart.dataProvider.length - 40, e.chart.dataProvider.length - 1);
                                /**
                                 * Add click event on the plot area
                                 */
                                e.chart.chartDiv.addEventListener("click", function () {
                                    // we track cursor's last known position by "changed" event
                                    if (e.chart.lastCursorPosition !== undefined) {
                                        // get date of the last known cursor position
                                        var date = e.chart.dataProvider[e.chart.lastCursorPosition][e.chart.categoryField];
                                        // create a new guide or update position of the previous one
                                        if (e.chart.categoryAxis.guides.length === 0) {
                                            var guide = new this.AmCharts.Guide();
                                            guide.date = date;
                                            guide.lineAlpha = 1;
                                            guide.lineColor = "#c44";
                                            e.chart.categoryAxis.addGuide(guide);
                                        }
                                        else {
                                            e.chart.categoryAxis.guides[0].date = date;
                                        }
                                        e.chart.validateData();
                                    }
                                });
                                //handle touch screens so that subsequent guides can
                                //be added. Requires that the user taps the next
                                //point twice. Needed in order to not break zoom/pan
                                e.chart.chartDiv.addEventListener("touchend", function () {
                                    e.chart.tapped = false;
                                });
                            }
                        }, {
                            "event": "changed",
                            "method": function (e) {
                                /**
                                 * Log cursor's last known position
                                 */
                                e.chart.lastCursorPosition = e.index;
                            }
                        }],
                    "dataProvider": resp.dataProvider
                });
            }
        });
    };
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'typography-cmp',
        template: __webpack_require__("../../../../../src/app/typography/typography.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */],]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_amcharts3_angular2__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_amcharts3_angular2__["b" /* AmChartsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_webstorage__["b" /* SessionStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_webstorage__["b" /* SessionStorageService */]) === "function" && _c || Object])
], TypographyComponent);

var _a, _b, _c;
//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.my-custom-scrollbar {\r\n    position: relative;\r\n    height: 430px;\r\n    overflow: auto;\r\n  }\r\n  .table-responsive-scroll-y {\r\n    display: block;\r\n  }\r\n\r\n .color{\r\n   color: rgba(39, 247, 11, 0.952);\r\n }\r\n .color_one{\r\n  color: crimson\r\n }\r\n .form-control{\r\n   background-color: #f5f5ff !important;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\" *ngIf=\"showhide==true\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"header\">\r\n          <div class=\"card-header\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <button class=\"btn btn-info pull-left\" data-toggle=\"modal\" data-target=\"#myModal\"\r\n                  style=\"width:100%\">Additems</button>\r\n              </div>\r\n\r\n              <div class=\"col-md-2\">\r\n                <button class=\"btn btn-info\" style=\"width:100%\" (click)=\"testfun()\">All Food Items</button>\r\n              </div>\r\n              <div class=\"col-md-2 text-center\">\r\n                <label for=\"\" style=\"color:#68B3C8\">Offers</label>\r\n                <div class=\"form-check\">\r\n                  <input type=\"checkbox\" style=\"color:#68B3C8\" class=\"form-check-input\" name=\"\" id=\"\"\r\n                    [(ngModel)]=\"offersss\" (change)=\"cehkfils(offersss)\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2 text-center\">\r\n                <label for=\"\" style=\"color:#68B3C8\">Today&nbsp;Special</label>\r\n                <div class=\"form-check \">\r\n                  <input type=\"checkbox\" style=\"color:#68B3C8\" class=\"form-check-input\" name=\"\" id=\"\"\r\n                    [(ngModel)]=\"specialss\" (change)=\"cehkfil(specialss)\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <input class=\"form-control info sigleborder\" type=\"text\"\r\n                  style=\"  border: 0;border-radius: 0px !important;outline: 0;background:transparent;border-bottom: 1px solid #68B3C8;color: black\"\r\n                  name=\"serch\" [(ngModel)]=\"searchdata\" list=\"key\" placeholder=\"enter search term here\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"table-responsive my-custom-scrollbar\">\r\n            <table class=\"table table-striped table-hover table-bordered\">\r\n              <thead>\r\n                <tr style=\"background-color:#68B3C8;color:white\">\r\n                  <th>Name</th>\r\n                  <th>Food&nbsp;Type</th>\r\n                  <th>Catagory</th>\r\n                  <th>Status</th>\r\n                  <th>Offers(in&nbsp;Rs)</th>\r\n                  <th>Today&nbsp;Specials</th>\r\n                  <th>Price&nbsp;in&nbsp;Rs</th>\r\n                  <th>Edit</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr\r\n                  *ngFor=\"let fod of selectfod | mainfilter:{food_name:searchdata,food_type:searchdata,\r\n                            category:searchdata,status:searchdata,offer_value:searchdata,price:searchdata} | mainfilter:{today_special_status:specialss};\">\r\n                  <td>{{fod.food_name}}</td>\r\n                  <td>{{fod.food_type}}</td>\r\n                  <td>{{fod.category}}</td>\r\n                  <td>{{fod.status}}</td>\r\n                  <td>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-2\">\r\n                        <div class=\"\" *ngIf=\"fod.offer_value!=0\"><i class=\"fa fa-gift\" style=\"color:red\"></i></div>\r\n                      </div>\r\n                      {{fod.offer_value}}\r\n                    </div>\r\n                  </td>\r\n                  <td [ngClass]=\"{'color':fod.today_special_status=='YES','color_one':fod.today_special_status=='NO'}\">\r\n                    {{fod.today_special_status}}</td>\r\n                  <td><i class=\"fa fa-inr\"></i>{{fod.price}}</td>\r\n                  <td><i class=\"fa fa-pencil-square-o\" data-toggle=\"modal\" title=\"EDIT FOOD ITEMS\"\r\n                      data-target=\"#myModal1\" (click)=\"editfood(fod)\"></i>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <!-- Modal -->\r\n    <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h4 class=\"modal-title\">ADD FOOD ITEMS</h4>\r\n          </div>\r\n          <form #frm=\"ngForm\">\r\n            <div class=\"modal-body\">\r\n              <div class=\"card\" style=\"border:1px solid lightgrey\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row\" style=\"margin: 10px;\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"itemname\">Item Name</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Item Name\" name=\"itemname\"\r\n                          [(ngModel)]=\"insert.fdname\" required pattern=\"[A-Za-z]\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"itemcat\">Item Catagory</label>\r\n                        <select name=\"itemcat\" [(ngModel)]=\"fdcats\" style=\"height:34px\">\r\n                          <option *ngFor=\"let ngg of cat\" [ngValue]=\"ngg.category_id\">{{ngg.category}}</option>\r\n                        </select>\r\n                        <input class=\"form-control\" placeholder=\"Enter Catagory here\" name=\"itemcat\"\r\n                          [(ngModel)]=\"fdcat1\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"image\"> Choose Item Image</label>\r\n                        <input type=\"file\" accept=\"image/*\" (change)=\"ActiveListener($event)\" name=\"image\"\r\n                          [(ngModel)]=\"img\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label>Item price</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"price\" name=\"itemprice\"\r\n                          [(ngModel)]=\"insert.fdprice\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"foodcat\">food Catagory</label>\r\n                        <select class=\"form-control\" placeholder=\"Enter food Catagory here\" list=\"type\" name=\"foodcat\"\r\n                          [(ngModel)]=\"fdtype\">\r\n                          <option *ngFor=\"let gn of foodtype\" [ngValue]=\"gn.food_type_id\">{{gn.food_type}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-info\"\r\n                  (click)=\"Insert_food(insert,fdcats,fdcat1,fdtype,img);frm.reset()\" data-dismiss=\"modal\">OK</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n              </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"modal fade\" id=\"myModal1\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h4 class=\"modal-title\">EDIT FOOD ITEMS</h4>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"card\" style=\"border: 1px solid lightgrey;\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\" style=\"margin: 10px\">\r\n                  <div class=\"col-md-12\">\r\n                      <label>Item Name</label>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Item Name\" name=\"itemname\"\r\n                        [(ngModel)]=\"getuser.fname\">\r\n                      <label>OFFER</label>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Item value\" name=\"itemname\"\r\n                        [(ngModel)]=\"getuser.offer\">\r\n                      <label>Item status</label>\r\n                      <select class=\"form-control\" placeholder=\"Enter Item status\" name=\"itemname\" [(ngModel)]=\"status\">\r\n                        <option *ngFor=\"let agg of foodstatus\" [ngValue]=\"agg.status_id\">{{agg.status}}</option>\r\n                      </select>\r\n                      <label>Item Catagory</label>\r\n                      <input placeholder=\"Enter Catagory here\" class=\"form-control\" name=\"itemcat\" [(ngModel)]=\"cate\">\r\n          \r\n                      <!-- <input class=\"form-control\" placeholder=\"Enter Catagory here\" name=\"itemcat\" [(ngModel)]=\"fdcat1\"> -->\r\n                      <input type=\"file\" accept=\"image/*\" (change)=\"InActiveListener($event)\" name=\"image\" [(ngModel)]=\"img\">\r\n                      <label>Item price</label>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"price\" name=\"itemprice\" [(ngModel)]=\"getuser.fdprice\">\r\n                      <label>food Catagory</label>\r\n                      <select class=\"form-control\" placeholder=\"Enter food Catagory here\" list=\"type\" name=\"foodcat\"\r\n                        [(ngModel)]=\"fdtype\">\r\n                        <option *ngFor=\"let gn of foodtype\" [ngValue]=\"gn.food_type_id\">{{gn.food_type}}</option>\r\n                      </select>\r\n                      <input type=\"file\" accept=\"image/*\" (change)=\"UnchangeListener($event)\" name=\"image\" [(ngModel)]=\"img\">\r\n                      <label>Today Special</label>\r\n                      <select class=\"form-control\" placeholder=\"select Today Special\" list=\"type\" name=\"tdyspecial\"\r\n                        [(ngModel)]=\"tdyspecial\">\r\n                        <option *ngFor=\"let spec of special\" [ngValue]=\"spec.today_special_id\">{{spec.today_special_status}}\r\n                        </option>\r\n                      </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-info\"\r\n              (click)=\"Update_food(getuser,fdid,cate,fdtype,status,tdyspecial,img)\" data-dismiss=\"modal\">OK</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"showhide==false\">\r\n    <div class=\"card\">\r\n      <br>\r\n      <div class=\"col-md-6\">\r\n        <ul class=\"nav nav-pills\" role=\"tablist\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" data-toggle=\"pill\" href=\"#home\">FOOD ITEMS</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" data-toggle=\"pill\" href=\"#menu1\"> CLOSED ITEMS</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <input class=\"form-control info\" type=\"text\"\r\n          style=\"  border: 0;border-radius: 0px !important;outline: 0;background:transparent;border-bottom: 1px solid #68B3C8;color: black\"\r\n          name=\"serch\" [(ngModel)]=\"searchdata\" list=\"key\" placeholder=\"enter search term here\">\r\n      </div>\r\n      <div class=\"col-md-1\">\r\n        <div class=\"ti-back-left\" style=\"font-size:20px;color: black;padding-top: 10px\" title=\"Return to Main Menu\"\r\n          (click)=test()>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <div class=\"tab-content\">\r\n        <div id=\"home\" class=\"container-fluid tab-pane active\">\r\n          <br>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"table-responsive my-custom-scrollbar\">\r\n                    <table class=\"table table-striped table-hover table-bordered\">\r\n                      <thead>\r\n                        <tr style=\"background-color:#68B3C8;color: white\">\r\n                          <th>\r\n                            ID\r\n                          </th>\r\n                          <th>\r\n                            Name\r\n                          </th>\r\n                          <th>\r\n                            Category\r\n                          </th>\r\n                          <th>\r\n                            Close\r\n                          </th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngIf=\"open.length==0\">\r\n                          <td>No Items</td>\r\n                          <td>No Items</td>\r\n                          <td>No Items</td>\r\n                          <td>No Items</td>\r\n                        </tr>\r\n                        <tr\r\n                          *ngFor=\"let value of open | mainfilter:{food_name:searchdata,category:searchdata};let i=index;\">\r\n                          <td>\r\n                            {{i+1}}\r\n                          </td>\r\n                          <td>\r\n                            {{value.food_name}}\r\n                          </td>\r\n                          <td>\r\n                            {{value.category}}\r\n                          </td>\r\n                          <td class=\"\">\r\n                            <i class=\"fa fa-times\" style=\"color:red;\" (click)=\"togglebutton(value)\"></i>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div id=\"menu1\" class=\"container-fluid tab-pane fade\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <div class=\"table-responsive my-custom-scrollbar\">\r\n                    <table class=\"table table-striped table-hover table-bordered\">\r\n                      <thead>\r\n                        <tr style=\"background-color:#68B3C8;color: white\">\r\n                          <th>\r\n                            ID\r\n                          </th>\r\n                          <th>\r\n                            Name\r\n                          </th>\r\n                          <th>\r\n                            Catagory\r\n                          </th>\r\n                          <th>\r\n                            Open\r\n                          </th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngIf=\"close.length==0\">\r\n                          <td>No Items</td>\r\n                          <td>No Items</td>\r\n                          <td>No Items</td>\r\n                          <td>No Items</td>\r\n                        </tr>\r\n                        <tr\r\n                          *ngFor=\"let item of close | mainfilter:{food_name:searchdata,category:searchdata};let i=index\">\r\n                          <td>\r\n                            {{i+1}}\r\n                          </td>\r\n                          <td>\r\n                            {{item.food_name}}\r\n                          </td>\r\n                          <td>\r\n                            {{item.category}}\r\n                          </td>\r\n                          <td class=\"\">\r\n                            <i class=\"fa fa-plus\" style=\"color:green\" (click)=\"togglebutton(item)\"></i>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_webstorage__ = __webpack_require__("../../../../ngx-webstorage/dist/app.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(user, toastr, session) {
        this.user = user;
        this.toastr = toastr;
        this.session = session;
        this.selectfod = [];
        this.reinitselectfod = [];
        this.showhide = true;
        this.getuser = [];
        this.insert = [];
        this.cat = [];
        this.ftype = [];
        this.image = "";
        this.img = [];
        this.foodstatus = [
            {
                status_id: 1,
                status: "Active"
            },
            {
                status_id: 2,
                status: "InActive"
            }
        ];
        this.foodtype = [
            {
                food_type_id: 1,
                food_type: "Veg"
            },
            {
                food_type_id: 2,
                food_type: "Non-Veg"
            }
        ];
        this.special = [
            {
                today_special_id: 1,
                today_special_status: "YES",
            },
            {
                today_special_id: 2,
                today_special_status: "NO",
            }
        ];
        this.category_id = "";
        this.item = "";
        this.food = "";
        this.foodimage = "";
        this.catimg = "";
        this.open = [];
        this.close = [];
        this.enable = [];
    }
    UserComponent.prototype.showSuccess = function (message) {
        this.toastr.success(message);
    };
    UserComponent.prototype.cehkfil = function (specials) {
        if (specials == true) {
            this.specialss = "Yes";
        }
        else {
            this.specialss = "";
        }
    };
    UserComponent.prototype.cehkfils = function (param) {
        if (param === true) {
            this.selectfod = this.selectfod.filter(function (items) {
                return items.offer_value != 0;
            });
        }
        else {
            this.selectfod = this.reinitselectfod;
        }
        console.log("filter", JSON.stringify(this.selectfod));
    };
    UserComponent.prototype.ngOnInit = function () {
        this.business_id = this.session.retrieve("branch_id");
        this.Select_food();
        this.Catagory();
    };
    UserComponent.prototype.testfun = function () {
        this.showhide = false;
    };
    UserComponent.prototype.test = function () {
        this.showhide = true;
    };
    UserComponent.prototype.Select_food = function () {
        var _this = this;
        var body = {
            "branch_id": this.business_id
        };
        this.user.Select_food(body).subscribe(function (Response) {
            console.log("select", Response);
            _this.selectfod = Response.Returnvalue;
            _this.open = [];
            _this.close = [];
            for (var i = 0; i < _this.selectfod.length; i++) {
                if (_this.selectfod[i].food_status_id == "1") {
                    _this.open.push(_this.selectfod[i]);
                    console.log(_this.open);
                }
                else {
                    _this.close.push(_this.selectfod[i]);
                }
            }
            _this.reinitselectfod = _this.selectfod;
        });
    };
    UserComponent.prototype.Insert_food = function (param1, param2, param3, param4, param5) {
        var _this = this;
        if (param3 != undefined) {
            this.category_id = param3;
        }
        else if (param3 === undefined && param2 != undefined) {
            this.category_id = param2.toString();
        }
        else {
            this.showSuccess("somthing error");
        }
        if (param4 === undefined) {
            param4 = "";
        }
        if (param1.fdprice === undefined) {
            param1.fdprice = "";
        }
        if (this.insertitemimg === undefined) {
            this.insertitemimg = "";
        }
        if (this.insertfoodimg === undefined) {
            this.insertfoodimg = "";
        }
        var body = {
            "food_name": param1.fdname,
            "price": param1.fdprice,
            "item_category_id": this.category_id,
            "image_url": this.insertfoodimg,
            "food_status_id": 1,
            "food_description": "",
            "food_id_url": this.insertitemimg,
            "food_type_id": param4,
            "today_special_id": 2,
            "offer_value": 0,
            "branch_name": "adayar",
            "branch_id": this.business_id
        };
        console.log(JSON.stringify(body));
        this.user.Insert_food(body).subscribe(function (Response) {
            console.log("resp", Response);
            if (Response.ReturnCode == "RIS") {
                _this.showSuccess("The Iteam is Add successfully");
                _this.Select_food();
            }
        });
    };
    UserComponent.prototype.Catagory = function () {
        var _this = this;
        var body = {
            "branch_id": this.business_id
        };
        this.user.Catagory(body).subscribe(function (Response) {
            if (Response.ReturnCode == "RRS") {
                _this.cat = Response.Returnvalue;
            }
        });
    };
    UserComponent.prototype.editfood = function (param) {
        console.log(param);
        this.fdcat = param.item_category_id;
        this.getuser.fname = param.food_name;
        this.getuser.offer = param.offer_value;
        this.fdid = param.food_id;
        this.getuser.fdcatagory = param.food_type;
        this.getuser.fdprice = param.price;
        this.fdtype = param.food_type_id;
        this.status = param.food_status_id;
        this.tdyspecial = param.today_special_id;
        this.cate = param.category;
    };
    UserComponent.prototype.addfood = function (param) {
        this.fdtypeid = param.food_type_id;
    };
    UserComponent.prototype.Update_food = function (param1, param2, param3, param4, param5, param6, param7) {
        var _this = this;
        if (this.updateitemimg === undefined) {
            this.updateitemimg = "";
        }
        if (this.updatefoodimg === undefined || this.updatefoodimg === null) {
            this.updatefoodimg = "";
        }
        if (param1.fdprice === undefined) {
            param1.fdprice = "";
        }
        if (param1.offer === undefined || param1.offer == "") {
            param1.offer = 0;
        }
        if (param3 === undefined) {
            param3 = "";
        }
        if (param4 === undefined) {
            param4 = "";
        }
        if (param5 === undefined) {
            param5 = "";
        }
        if (param6 === undefined) {
            param6 = "";
        }
        var body = {
            "food_name": param1.fname,
            "price": param1.fdprice,
            "food_id": param2,
            "item_category_id": this.fdcat,
            "image_url": this.updateitemimg,
            "food_status_id": param5,
            "food_description": "",
            "food_id_url": this.updatefoodimg,
            "food_type_id": param4,
            "today_special_id": param6,
            "offer_value": param1.offer,
            "branch_name": "adayar",
            "category": param3,
            "branch_id": this.business_id
        };
        console.log("gf", JSON.stringify(body));
        this.user.Update_food(body).subscribe(function (Response) {
            if (Response.ReturnCode == "RUS") {
                _this.showSuccess("The Iteam and Category is Updated successfully");
                _this.Select_food();
            }
        });
    };
    UserComponent.prototype.togglebutton = function (param) {
        var _this = this;
        if (param.food_status_id == 1) {
            var body = {
                "food_name": param.food_name,
                "price": param.price,
                "food_id": param.food_id,
                "item_category_id": param.item_category_id,
                "image_url": "",
                "food_status_id": 2,
                "food_description": "",
                "food_id_url": "",
                "food_type_id": param.food_type_id,
                "branch_name": "adayar",
                "offer_value": param.offer_value,
                "category": param.category,
                "branch_id": this.business_id
            };
            this.user.Update_food(body).subscribe(function (Response) {
                if (Response.ReturnCode == "RUS") {
                    _this.showSuccess("The Food Iteam Was Disabled");
                }
            });
        }
        else {
            var body = {
                "food_name": param.food_name,
                "price": param.price,
                "food_id": param.food_id,
                "item_category_id": param.item_category_id,
                "image_url": "",
                "food_status_id": 1,
                "food_description": "",
                "food_id_url": "",
                "food_type_id": param.food_type_id,
                "branch_name": "adayar",
                "offer_value": param.offer_value,
                "category": param.category,
                "branch_id": this.business_id
            };
            this.user.Update_food(body).subscribe(function (Response) {
                if (Response.ReturnCode == "RUS") {
                    _this.showSuccess("The Food Iteam Was Enabled");
                }
            });
        }
        this.Select_food();
    };
    UserComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    UserComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.image = myReader.result;
            _this.insertitemimg = _this.image.split(",", 2)[1];
            console.log(_this.insertitemimg);
        };
        myReader.readAsDataURL(file);
    };
    UserComponent.prototype.ActiveListener = function ($event) {
        this.readThat($event.target);
    };
    UserComponent.prototype.readThat = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.image = myReader.result;
            _this.insertfoodimg = _this.image.split(",", 2)[1];
        };
        myReader.readAsDataURL(file);
    };
    UserComponent.prototype.UnchangeListener = function ($event) {
        this.read($event.target);
    };
    UserComponent.prototype.read = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.image = myReader.result;
            _this.updatefoodimg = _this.image.split(",", 2)[1];
            console.log(_this.updatefoodimg);
        };
        myReader.readAsDataURL(file);
    };
    UserComponent.prototype.InActiveListener = function ($event) {
        this.readTat($event.target);
    };
    UserComponent.prototype.readTat = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.image = myReader.result;
            _this.updateitemimg = _this.image.split(",", 2)[1];
            console.log(_this.updateitemimg);
        };
        myReader.readAsDataURL(file);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-cmp',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_webstorage__["b" /* SessionStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_webstorage__["b" /* SessionStorageService */]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/home.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "home.1ce4113e0c43de5cf1af.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map