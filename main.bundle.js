webpackJsonp([1,4],{

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_actors_actor_orchestrator__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActorDetailsComponent = (function () {
    function ActorDetailsComponent(router, actorOrchestrator) {
        this.router = router;
        this.actorOrchestrator = actorOrchestrator;
    }
    ActorDetailsComponent.prototype.ngOnInit = function () {
        this.actorOrchestrator.getActorShows();
    };
    ActorDetailsComponent.prototype.navigate = function (show) {
        this.router.navigate(['show', show.id]);
    };
    return ActorDetailsComponent;
}());
ActorDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'actor-details',
        template: __webpack_require__(463),
        styles: [__webpack_require__(453)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__state_actors_actor_orchestrator__["a" /* ActorOrchestrator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__state_actors_actor_orchestrator__["a" /* ActorOrchestrator */]) === "function" && _b || Object])
], ActorDetailsComponent);

var _a, _b;
//# sourceMappingURL=actor-details.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx__["useStrict"])(true);
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__(464),
        styles: [__webpack_require__(454)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_top_bar_top_bar_orchestrator__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowActivator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowActivator = (function () {
    function ShowActivator(topBarOrchestrator) {
        this.topBarOrchestrator = topBarOrchestrator;
    }
    ShowActivator.prototype.canActivate = function (route, state) {
        this.topBarOrchestrator.store.setIsBlocked(!this.topBarOrchestrator.store.isLoggedIn);
        return this.topBarOrchestrator.store.isLoggedIn;
    };
    return ShowActivator;
}());
ShowActivator = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__state_top_bar_top_bar_orchestrator__["a" /* TopBarOrchestrator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__state_top_bar_top_bar_orchestrator__["a" /* TopBarOrchestrator */]) === "function" && _a || Object])
], ShowActivator);

var _a;
//# sourceMappingURL=show.activator.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_shows_shows_orchestrator__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowResolver = (function () {
    function ShowResolver(showOrchestrator) {
        this.showOrchestrator = showOrchestrator;
    }
    ShowResolver.prototype.resolve = function (route, state) {
        return this.showOrchestrator.getShowById(+route.params['id']);
    };
    return ShowResolver;
}());
ShowResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__state_shows_shows_orchestrator__["a" /* ShowsOrchestrator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__state_shows_shows_orchestrator__["a" /* ShowsOrchestrator */]) === "function" && _a || Object])
], ShowResolver);

var _a;
//# sourceMappingURL=show.resolver.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_shows_shows_orchestrator__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_actors_actor_orchestrator__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowDetailsComponent = (function () {
    function ShowDetailsComponent(router, showOrchestrator, actorOrchestrator) {
        this.router = router;
        this.showOrchestrator = showOrchestrator;
        this.actorOrchestrator = actorOrchestrator;
    }
    ShowDetailsComponent.prototype.navigate = function (castMember) {
        this.actorOrchestrator.store.setActor(castMember.person);
        this.router.navigate(['actor', castMember.person.id]);
    };
    return ShowDetailsComponent;
}());
ShowDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'show-details',
        template: __webpack_require__(466),
        styles: [__webpack_require__(456)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__state_shows_shows_orchestrator__["a" /* ShowsOrchestrator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__state_shows_shows_orchestrator__["a" /* ShowsOrchestrator */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__state_actors_actor_orchestrator__["a" /* ActorOrchestrator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__state_actors_actor_orchestrator__["a" /* ActorOrchestrator */]) === "function" && _c || Object])
], ShowDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=show-details.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_shows_shows_orchestrator__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_top_bar_top_bar_orchestrator__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowListComponent = (function () {
    function ShowListComponent(router, showOrchestrator, topBarOrchestrator) {
        this.router = router;
        this.showOrchestrator = showOrchestrator;
        this.topBarOrchestrator = topBarOrchestrator;
    }
    ShowListComponent.prototype.ngOnInit = function () {
        if (this.topBarOrchestrator.store.criteria !== '') {
            this.showOrchestrator.getShows(this.topBarOrchestrator.store.criteria);
        }
    };
    ShowListComponent.prototype.navigate = function (show) {
        this.router.navigate(['show', show.id]);
    };
    ShowListComponent.prototype.doSearch = function () {
        this.topBarOrchestrator.store.setIsBlocked(false);
        this.showOrchestrator.getShows(this.topBarOrchestrator.store.criteria);
    };
    ShowListComponent.prototype.setLoggedIn = function (state) {
        this.topBarOrchestrator.store.setLoggedInState(state);
    };
    return ShowListComponent;
}());
ShowListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'show',
        template: __webpack_require__(467),
        styles: [__webpack_require__(457)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__state_shows_shows_orchestrator__["a" /* ShowsOrchestrator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__state_shows_shows_orchestrator__["a" /* ShowsOrchestrator */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__state_top_bar_top_bar_orchestrator__["a" /* TopBarOrchestrator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__state_top_bar_top_bar_orchestrator__["a" /* TopBarOrchestrator */]) === "function" && _c || Object])
], ShowListComponent);

var _a, _b, _c;
//# sourceMappingURL=show-list.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActorService = (function () {
    function ActorService(http) {
        this.http = http;
        this.BASE_URL = 'https://api.tvmaze.com/';
    }
    ActorService.prototype.getActorShows = function (actorId) {
        var url = this.BASE_URL + 'people/' + actorId + '/castcredits?embed=show';
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    return ActorService;
}());
ActorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ActorService);

var _a;
//# sourceMappingURL=actor.service.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorStore; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActorStore = (function () {
    function ActorStore() {
        this.currentActorShows = [];
    }
    ActorStore.prototype.setActor = function (actor) {
        this.currentActor = actor;
    };
    ActorStore.prototype.setActorShows = function (shows) {
        this.currentActorShows = shows;
    };
    return ActorStore;
}());
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"],
    __metadata("design:type", Object)
], ActorStore.prototype, "currentActor", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"],
    __metadata("design:type", Array)
], ActorStore.prototype, "currentActorShows", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ActorStore.prototype, "setActor", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ActorStore.prototype, "setActorShows", null);
ActorStore = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ActorStore);

//# sourceMappingURL=actor.store.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowService = (function () {
    function ShowService(http) {
        this.http = http;
        this.BASE_URL = 'https://api.tvmaze.com/';
    }
    ShowService.prototype.getShows = function (showName) {
        var url = this.BASE_URL + 'search/shows?q=' + encodeURI(showName);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    ShowService.prototype.getShowById = function (showId) {
        var url = this.BASE_URL + 'shows/' + showId + '?embed[]=cast&embed[]=seasons';
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    return ShowService;
}());
ShowService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ShowService);

var _a;
//# sourceMappingURL=show.service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowStore; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowStore = (function () {
    function ShowStore() {
        this.shows = [];
        this.currentShow = {};
    }
    ShowStore.prototype.setShows = function (shows) {
        this.shows = shows
            .map(function (showObj) { return showObj.show; })
            .filter(function (show) { return show.image !== null; });
    };
    ShowStore.prototype.setCurrentShow = function (show) {
        this.currentShow = show;
    };
    Object.defineProperty(ShowStore.prototype, "currentShowCast", {
        get: function () {
            return this.currentShow._embedded.cast.filter(function (castMember) {
                return castMember.character.image !== null;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowStore.prototype, "currentShowSeasons", {
        get: function () {
            return this.currentShow._embedded.seasons;
        },
        enumerable: true,
        configurable: true
    });
    return ShowStore;
}());
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"],
    __metadata("design:type", Array)
], ShowStore.prototype, "shows", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"],
    __metadata("design:type", Object)
], ShowStore.prototype, "currentShow", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ShowStore.prototype, "setShows", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ShowStore.prototype, "setCurrentShow", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ShowStore.prototype, "currentShowCast", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ShowStore.prototype, "currentShowSeasons", null);
ShowStore = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ShowStore);

//# sourceMappingURL=shows.store.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarStore; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopBarStore = (function () {
    function TopBarStore() {
        this.isLoggedIn = true;
        this.isBlocked = false;
    }
    TopBarStore.prototype.setCriteria = function (criteria) {
        this.criteria = criteria;
    };
    TopBarStore.prototype.setLoggedInState = function (state) {
        this.isLoggedIn = state;
    };
    TopBarStore.prototype.setIsBlocked = function (isBlocked) {
        this.isBlocked = isBlocked;
    };
    return TopBarStore;
}());
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"],
    __metadata("design:type", String)
], TopBarStore.prototype, "criteria", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"],
    __metadata("design:type", Boolean)
], TopBarStore.prototype, "isLoggedIn", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"],
    __metadata("design:type", Boolean)
], TopBarStore.prototype, "isBlocked", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TopBarStore.prototype, "setCriteria", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TopBarStore.prototype, "setLoggedInState", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], TopBarStore.prototype, "setIsBlocked", null);
TopBarStore = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TopBarStore);

//# sourceMappingURL=top-bar.store.js.map

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 278;


/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app___ = __webpack_require__(295);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app___["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_list_show_list_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__show_details_show_details_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actor_details_actor_details_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_common_module__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__resolvers_show_resolver__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_pipes__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_pipes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ngx_pipes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__resolvers_show_activator__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_mobx_angular__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_3__show_list_show_list_component__["a" /* ShowListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__show_details_show_details_component__["a" /* ShowDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__actor_details_actor_details_component__["a" /* ActorDetailsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14_mobx_angular__["a" /* MobxAngularModule */],
            __WEBPACK_IMPORTED_MODULE_12_ngx_pipes__["NgPipesModule"],
            __WEBPACK_IMPORTED_MODULE_6__common_common_module__["a" /* ShowsCommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* ROUTING */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__resolvers_show_resolver__["a" /* ShowResolver */],
            __WEBPACK_IMPORTED_MODULE_13__resolvers_show_activator__["a" /* ShowActivator */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__show_list_show_list_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_details_show_details_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actor_details_actor_details_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolvers_show_resolver__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resolvers_show_activator__ = __webpack_require__(194);
/* unused harmony export ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTING; });






var ROUTES = [
    { path: '', redirectTo: 'showlist', pathMatch: 'full' },
    {
        path: 'showlist',
        component: __WEBPACK_IMPORTED_MODULE_1__show_list_show_list_component__["a" /* ShowListComponent */]
    },
    {
        path: 'show/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__show_details_show_details_component__["a" /* ShowDetailsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__resolvers_show_activator__["a" /* ShowActivator */]],
        resolve: {
            show: __WEBPACK_IMPORTED_MODULE_4__resolvers_show_resolver__["a" /* ShowResolver */]
        }
    },
    {
        path: 'actor/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__actor_details_actor_details_component__["a" /* ActorDetailsComponent */]
    },
    {
        path: '**',
        redirectTo: 'showlist'
    },
];
var ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_shows_shows_state_module__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__state_actors_actors_state_module__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state_top_bar_top_bar_state_module__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowsCommonModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ShowsCommonModule = (function () {
    function ShowsCommonModule() {
    }
    return ShowsCommonModule;
}());
ShowsCommonModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__state_shows_shows_state_module__["a" /* ShowsStateModule */],
            __WEBPACK_IMPORTED_MODULE_5__state_actors_actors_state_module__["a" /* ActorsStateModule */],
            __WEBPACK_IMPORTED_MODULE_6__state_top_bar_top_bar_state_module__["a" /* TopBarStateModule */]
        ],
        providers: [],
        exports: []
    })
], ShowsCommonModule);

//# sourceMappingURL=common.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(193);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(292);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_top_bar_top_bar_orchestrator__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent(topBarOrchestrator) {
        this.topBarOrchestrator = topBarOrchestrator;
        this.criteriaChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.criteria = this.topBarOrchestrator.store.criteria;
    };
    SearchComponent.prototype.doSearch = function () {
        this.topBarOrchestrator.store.setCriteria(this.criteria);
        this.criteriaChanged.emit();
    };
    return SearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === "function" && _a || Object)
], SearchComponent.prototype, "criteriaChanged", void 0);
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'search',
        styles: [__webpack_require__(455)],
        template: __webpack_require__(465)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__state_top_bar_top_bar_orchestrator__["a" /* TopBarOrchestrator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__state_top_bar_top_bar_orchestrator__["a" /* TopBarOrchestrator */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actor_store__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actor_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actor_orchestrator__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_angular__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorsStateModule; });
/* unused harmony export ActorsStateTestModule */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ActorsStateModule = (function () {
    function ActorsStateModule() {
    }
    return ActorsStateModule;
}());
ActorsStateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5_mobx_angular__["a" /* MobxAngularModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__actor_store__["a" /* ActorStore */],
            __WEBPACK_IMPORTED_MODULE_3__actor_service__["a" /* ActorService */],
            __WEBPACK_IMPORTED_MODULE_4__actor_orchestrator__["a" /* ActorOrchestrator */]
        ]
    })
], ActorsStateModule);

var ActorsStateTestModule = (function () {
    function ActorsStateTestModule() {
    }
    return ActorsStateTestModule;
}());
ActorsStateTestModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5_mobx_angular__["a" /* MobxAngularModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__actor_store__["a" /* ActorStore */],
            __WEBPACK_IMPORTED_MODULE_3__actor_service__["a" /* ActorService */],
            __WEBPACK_IMPORTED_MODULE_4__actor_orchestrator__["a" /* ActorOrchestrator */]
        ]
    })
], ActorsStateTestModule);

//# sourceMappingURL=actors-state.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shows_store__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shows_orchestrator__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_angular__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowsStateModule; });
/* unused harmony export ShowsStateTestModule */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ShowsStateModule = (function () {
    function ShowsStateModule() {
    }
    return ShowsStateModule;
}());
ShowsStateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5_mobx_angular__["a" /* MobxAngularModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__shows_store__["a" /* ShowStore */],
            __WEBPACK_IMPORTED_MODULE_2__show_service__["a" /* ShowService */],
            __WEBPACK_IMPORTED_MODULE_4__shows_orchestrator__["a" /* ShowsOrchestrator */]
        ]
    })
], ShowsStateModule);

var ShowsStateTestModule = (function () {
    function ShowsStateTestModule() {
    }
    return ShowsStateTestModule;
}());
ShowsStateTestModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5_mobx_angular__["a" /* MobxAngularModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__shows_store__["a" /* ShowStore */],
            __WEBPACK_IMPORTED_MODULE_2__show_service__["a" /* ShowService */],
            __WEBPACK_IMPORTED_MODULE_4__shows_orchestrator__["a" /* ShowsOrchestrator */]
        ]
    })
], ShowsStateTestModule);

//# sourceMappingURL=shows-state.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__top_bar_store__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__top_bar_orchestrator__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_angular__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarStateModule; });
/* unused harmony export TopBarStateTestModule */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TopBarStateModule = (function () {
    function TopBarStateModule() {
    }
    return TopBarStateModule;
}());
TopBarStateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4_mobx_angular__["a" /* MobxAngularModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__top_bar_store__["a" /* TopBarStore */],
            __WEBPACK_IMPORTED_MODULE_3__top_bar_orchestrator__["a" /* TopBarOrchestrator */]
        ]
    })
], TopBarStateModule);

var TopBarStateTestModule = (function () {
    function TopBarStateTestModule() {
    }
    return TopBarStateTestModule;
}());
TopBarStateTestModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4_mobx_angular__["a" /* MobxAngularModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__top_bar_store__["a" /* TopBarStore */],
            __WEBPACK_IMPORTED_MODULE_3__top_bar_orchestrator__["a" /* TopBarOrchestrator */]
        ]
    })
], TopBarStateTestModule);

//# sourceMappingURL=top-bar-state.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, ".show-item {\n  margin: 10px;\n  cursor: pointer; }\n\n.actor-image {\n  max-height: 1000px;\n  margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, ".main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline; }\n  .main input {\n    margin-right: 10px;\n    height: 36px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, ".cast-item {\n  margin: 10px;\n  cursor: pointer; }\n\n.show-image {\n  max-height: 1000px;\n  margin: auto; }\n\n.season-item img {\n  float: left;\n  margin: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, ".show {\n  margin: 10px;\n  cursor: pointer; }\n\n.topbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.blocked {\n  z-index: 999;\n  width: 100%;\n  display: block; }\n  .blocked .blocked-content {\n    border-radius: 7px;\n    background: rgba(255, 255, 255, 0.9);\n    margin: 30px auto 0;\n    padding: 6px;\n    position: absolute;\n    width: 800px;\n    top: 25%;\n    left: 50%;\n    margin-left: -400px;\n    margin-top: -40px;\n    border: 1px solid black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 463:
/***/ (function(module, exports) {

module.exports = "<div *mobxAutorun>\n    <div class=\"row\">\n        <div class=\"col-md-5 offset-md-1\">\n            <p>{{actorOrchestrator.store.currentActor.name}}</p>\n        </div>\n        <img class=\"actor-image\" [src]=\"actorOrchestrator.store.currentActor.image?.original\">\n    </div>\n    <div class=\"row offset-md-1\">\n        <div class=\"show-item\" *ngFor=\"let show of actorOrchestrator.store.currentActorShows\" (click)=\"navigate(show)\">\n            {{show.name}}<br>\n            <img [src]=\"show.image?.medium\">\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

module.exports = "<div class=\"row offset-md-1 main\">\n    <input [(ngModel)]=\"criteria\" type=\"text\" placeholder=\"search for a show\" (keydown.enter)=\"doSearch()\">\n    <button type=\"submit\" class=\"btn btn-success-outline\" (click)=\"doSearch()\">search</button>\n</div>\n"

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showOrchestrator.store.currentShow.image\">\n    <div *mobxAutorun>\n        <div class=\"row\">\n            <div class=\"col-md-5 offset-md-1\">\n                <p>{{showOrchestrator.store.currentShow.name}}</p>\n                <p>Genres: <span *ngFor=\"let genre of showOrchestrator.store.currentShow.genres\">{{genre}},</span></p>\n                <p>{{showOrchestrator.store.currentShow.summary | stripTags}}</p>\n            </div>\n            <img class=\"show-image\" [src]=\"showOrchestrator.store.currentShow.image?.original\">\n        </div>\n        <div class=\"row offset-md-1 season-item\" *ngFor=\"let season of showOrchestrator.store.currentShowSeasons\">\n            <div *ngIf=\"season.premiereDate\">\n                <img *ngIf=\"season.image?.medium\" [src]=\"season.image?.medium\">\n                <div class=\"col-md-12\">\n                    <span>Season {{season.number}}: {{season.name}} ({{season.premiereDate}} - {{season.endDate}}), {{season.episodeOrder}} Episodes</span>\n                    <p *ngIf=\"season.summary\">{{season.summary | stripTags}}</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row offset-md-1\">\n            <div class=\"cast-item\" *ngFor=\"let castMember of showOrchestrator.store.currentShowCast\" (click)=\"navigate(castMember)\">\n                {{castMember.character.name}}<br>\n                <img [src]=\"castMember.character.image?.medium\">\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 467:
/***/ (function(module, exports) {

module.exports = "<div *mobxAutorun>\n    <div class=\"topbar row offset-md-1\">\n        <search class=\"col-md-5\" (criteriaChanged)=\"doSearch()\"></search>\n        <div class=\"col-md-5 toggle-switch\">\n            <input #loggedIn type=\"checkbox\" id=\"toggle_1\" [checked]=\"topBarOrchestrator.store.isLoggedIn\"\n                   (change)=\"setLoggedIn(loggedIn.checked)\">\n            <label for=\"toggle_1\">Act as logged in</label>\n        </div>\n    </div>\n    <div class=\"row offset-md-1\">\n        <div class=\"show\" *ngFor=\"let show of showOrchestrator.store.shows\" (click)=\"navigate(show)\">\n            <img [src]=\"show.image.medium\"><br>\n            <span>{{show.name}}</span><br>\n            <span *ngFor=\"let genre of show.genres\">{{genre}}, </span>\n        </div>\n    </div>\n\n    <div class=\"blocked\" *ngIf=\"topBarOrchestrator.store.isBlocked\" (click)=\"topBarOrchestrator.store.setIsBlocked(false)\">\n        <div class=\"blocked-content\">\n            User is blocked! Please log in!\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shows_store__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowsOrchestrator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowsOrchestrator = (function () {
    function ShowsOrchestrator(store, dataService) {
        this.store = store;
        this.dataService = dataService;
    }
    ShowsOrchestrator.prototype.getShows = function (name) {
        var _this = this;
        this.dataService.getShows(name)
            .subscribe(function (shows) { return _this.store.setShows(shows); });
    };
    ShowsOrchestrator.prototype.getShowById = function (showId) {
        var _this = this;
        if (this.store.currentShow.id === showId) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of(this.store.currentShow);
        }
        return this.dataService.getShowById(showId)
            .map(function (show) {
            _this.store.setCurrentShow(show);
            return show;
        });
    };
    return ShowsOrchestrator;
}());
ShowsOrchestrator = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shows_store__["a" /* ShowStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shows_store__["a" /* ShowStore */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__show_service__["a" /* ShowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__show_service__["a" /* ShowService */]) === "function" && _b || Object])
], ShowsOrchestrator);

var _a, _b;
//# sourceMappingURL=shows.orchestrator.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__top_bar_store__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarOrchestrator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopBarOrchestrator = (function () {
    function TopBarOrchestrator(store) {
        this.store = store;
    }
    return TopBarOrchestrator;
}());
TopBarOrchestrator = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__top_bar_store__["a" /* TopBarStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__top_bar_store__["a" /* TopBarStore */]) === "function" && _a || Object])
], TopBarOrchestrator);

var _a;
//# sourceMappingURL=top-bar.orchestrator.js.map

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(279);


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actor_store__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actor_service__ = __webpack_require__(198);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorOrchestrator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActorOrchestrator = (function () {
    function ActorOrchestrator(store, dataService) {
        this.store = store;
        this.dataService = dataService;
    }
    ActorOrchestrator.prototype.getActorShows = function () {
        var _this = this;
        if (this.store.currentActor) {
            this.dataService.getActorShows(this.store.currentActor.id)
                .subscribe(function (credits) {
                var shows = credits.map(function (credit) {
                    return credit._embedded.show;
                });
                _this.store.setActorShows(shows);
            });
        }
    };
    return ActorOrchestrator;
}());
ActorOrchestrator = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__actor_store__["a" /* ActorStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__actor_store__["a" /* ActorStore */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__actor_service__["a" /* ActorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__actor_service__["a" /* ActorService */]) === "function" && _b || Object])
], ActorOrchestrator);

var _a, _b;
//# sourceMappingURL=actor.orchestrator.js.map

/***/ })

},[733]);
//# sourceMappingURL=main.bundle.js.map