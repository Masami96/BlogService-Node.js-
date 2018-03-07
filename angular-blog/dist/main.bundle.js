webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__preview_preview_component__ = __webpack_require__("../../../../../src/app/preview/preview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__list_list_component__["a" /* ListComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__edit_edit_component__["a" /* EditComponent */] },
    { path: 'preview/:id', component: __WEBPACK_IMPORTED_MODULE_4__preview_preview_component__["a" /* PreviewComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__preview_preview_component__ = __webpack_require__("../../../../../src/app/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__preview_preview_component__["a" /* PreviewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__blog_service__["a" /* BlogService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());

var BlogService = /** @class */ (function () {
    function BlogService(http) {
        this.http = http;
        this.posts = [];
        this.PostsUrl = 'http://localhost:3000/api/cs144/1';
        this.fetchPosts();
    }
    BlogService.prototype.fetchPosts = function () {
        console.log(this.http.get(this.PostsUrl));
        /*
        if (typeof(Storage) !== "undefined") {
          if(localStorage.getItem("posts") != null){
            this.posts = JSON.parse(localStorage.getItem("posts"));
            this.fixDates();
    
            if(this.posts.length != 0) console.log("Found posts in local storage.");
            else console.log("No found posts in local storage. Ready to add new posts.");
    
          } else {
            this.posts = [];
            console.log("No found posts in local storage. Ready to add new posts.");
          }
        } else {
          console.log("ERROR: Browser does not support Web Storage");
        }
        */
    };
    BlogService.prototype.getPosts = function () {
        return this.posts;
    };
    BlogService.prototype.getPost = function (id) {
        for (var _i = 0, _a = this.posts; _i < _a.length; _i++) {
            var post = _a[_i];
            if (post.postid == id) {
                return post;
            }
        }
    };
    BlogService.prototype.newPost = function () {
        var newpost = new Post();
        newpost.postid = this.getNextId();
        newpost.created = new Date((new Date()).getTime() + 24 * 60 * 60 * 1000);
        newpost.modified = new Date((new Date()).getTime() + 24 * 60 * 60 * 1000);
        newpost.title = "";
        newpost.body = "";
        this.posts.push(newpost);
        localStorage.setItem("posts", JSON.stringify(this.posts));
        return newpost;
    };
    BlogService.prototype.updatePost = function (post) {
        var found = false;
        for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].postid == post.postid) {
                post.modified = new Date((new Date()).getTime() + 24 * 60 * 60 * 1000);
                post.created = this.posts[i].created;
                this.posts[i] = post;
                found = true;
            }
        }
        if (found == false)
            console.log("Error: Failed to update post. No such postid. Nothing was done.");
        localStorage.setItem("posts", JSON.stringify(this.posts));
    };
    BlogService.prototype.deletePost = function (id) {
        var found = false;
        for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].postid == id) {
                this.posts.splice(i, 1);
                found = true;
            }
        }
        if (found == false)
            console.log("Error: Failed to delete post. No such postid. Nothing was done.");
        localStorage.setItem("posts", JSON.stringify(this.posts));
    };
    BlogService.prototype.getNextId = function () {
        var max = 0;
        for (var _i = 0, _a = this.posts; _i < _a.length; _i++) {
            var post = _a[_i];
            if (post.postid >= max)
                max = post.postid + 1;
        }
        return max;
    };
    BlogService.prototype.fixDates = function () {
        for (var _i = 0, _a = this.posts; _i < _a.length; _i++) {
            var post = _a[_i];
            if (typeof post.created === "string") {
                post.created = new Date(post.created);
            }
            if (typeof post.modified === "string") {
                post.modified = new Date(post.modified);
            }
        }
    };
    BlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<app-list></app-list>\n<div *ngIf=\"post\">\n  <h2>Title:</h2>\n  <div>\n      <label>Title:\n        <input [(ngModel)]=\"post.title\" placeholder=\"title\">\n      </label>\n  </div>\n  <h2>Body:</h2>\n  <div>\n    <label>Body:\n      <textarea [(ngModel)]=\"post.body\" placeholder=\"body\">\n      </textarea>\n    </label>\n  </div>\n\n<button (click)=\"savePost()\">Save</button>\n<button (click)=\"deletePost()\">Delete</button>\n\n<button routerLink=\"/preview/{{post.postid}}\">Preview</button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(blogService, route, router) {
        this.blogService = blogService;
        this.route = route;
        this.router = router;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPost();
        this.route.params.subscribe(function () { return _this.getPost(); });
    };
    EditComponent.prototype.getPost = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.post = this.blogService.getPost(id);
    };
    EditComponent.prototype.savePost = function () {
        var oldPost = this.blogService.getPost(this.post.postid);
        oldPost.title = this.post.title;
        oldPost.body = this.post.body;
        this.blogService.updatePost(oldPost);
    };
    EditComponent.prototype.deletePost = function () {
        this.blogService.deletePost(this.post.postid);
        delete this.post;
        this.router.navigate(['/']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__blog_service__["b" /* Post */])
    ], EditComponent.prototype, "post", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditComponent.prototype, "savePost", null);
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"addPost()\">New Post</button>\n\n<ul>\n  <li *ngFor=\"let post of posts\" >\n  <a routerLink=\"/edit/{{post.postid}}\">\n    <span> {{post.created}} </span> {{post.title}}\n  </a>\n</li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(blogService, route, router) {
        this.blogService = blogService;
        this.route = route;
        this.router = router;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.posts = this.blogService.getPosts();
    };
    ListComponent.prototype.editPost = function (post) {
        this.selectedPost = post;
    };
    ListComponent.prototype.addPost = function () {
        this.editPost(this.blogService.newPost());
        this.router.navigate(['/edit/' + this.selectedPost.postid]);
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/preview/preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.html":
/***/ (function(module, exports) {

module.exports = "<app-list></app-list>\n<button routerLink=\"/edit/{{post.postid}}\">Return</button>\n<p>\n{{title}}\n</p>\n<p>\n{{body}}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(blogService, route, router) {
        this.blogService = blogService;
        this.route = route;
        this.router = router;
    }
    PreviewComponent.prototype.ngOnInit = function () {
        this.getPost();
        //var reader = new commonmark.Parser();
        //var writer = new commonmark.HtmlRenderer();
    };
    PreviewComponent.prototype.getPost = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.post = this.blogService.getPost(id);
        this.title = this.post.title;
        this.body = this.post.body;
    };
    PreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-preview',
            template: __webpack_require__("../../../../../src/app/preview/preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map