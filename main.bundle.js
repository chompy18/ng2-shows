webpackJsonp([0,4],{

/***/ 1086:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(515);


/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var mobx_1 = __webpack_require__(69);
var show_service_1 = __webpack_require__(247);
var rxjs_1 = __webpack_require__(487);
var ShowStore = (function () {
    function ShowStore(showService) {
        this.showService = showService;
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
    ShowStore.prototype.getShows = function (name) {
        var _this = this;
        this.showService.getShows(name)
            .subscribe(function (shows) { return _this.setShows(shows); });
    };
    ShowStore.prototype.getShowById = function (showId) {
        var _this = this;
        if (this.currentShow.id === showId) {
            return rxjs_1.Observable.of(this.currentShow);
        }
        return this.showService.getShowById(showId)
            .map(function (show) {
            _this.setCurrentShow(show);
            return show;
        });
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
    __decorate([
        mobx_1.observable, 
        __metadata('design:type', Array)
    ], ShowStore.prototype, "shows", void 0);
    __decorate([
        mobx_1.observable, 
        __metadata('design:type', Object)
    ], ShowStore.prototype, "currentShow", void 0);
    __decorate([
        mobx_1.action, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Array]), 
        __metadata('design:returntype', void 0)
    ], ShowStore.prototype, "setShows", null);
    __decorate([
        mobx_1.action, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ShowStore.prototype, "setCurrentShow", null);
    __decorate([
        mobx_1.action, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String]), 
        __metadata('design:returntype', void 0)
    ], ShowStore.prototype, "getShows", null);
    __decorate([
        mobx_1.action, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Number]), 
        __metadata('design:returntype', (typeof (_a = typeof rxjs_1.Observable !== 'undefined' && rxjs_1.Observable) === 'function' && _a) || Object)
    ], ShowStore.prototype, "getShowById", null);
    __decorate([
        mobx_1.computed, 
        __metadata('design:type', Object)
    ], ShowStore.prototype, "currentShowCast", null);
    __decorate([
        mobx_1.computed, 
        __metadata('design:type', Object)
    ], ShowStore.prototype, "currentShowSeasons", null);
    ShowStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_b = typeof show_service_1.ShowService !== 'undefined' && show_service_1.ShowService) === 'function' && _b) || Object])
    ], ShowStore);
    return ShowStore;
    var _a, _b;
}());
exports.ShowStore = ShowStore;
//# sourceMappingURL=/Users/sninio/Tikal/ng2-shows/src/src/src/app/common/stores/shows.store.js.map

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var mobx_1 = __webpack_require__(69);
var TopBarStore = (function () {
    function TopBarStore() {
        this.isLoggedIn = false;
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
    __decorate([
        mobx_1.observable, 
        __metadata('design:type', String)
    ], TopBarStore.prototype, "criteria", void 0);
    __decorate([
        mobx_1.observable, 
        __metadata('design:type', Boolean)
    ], TopBarStore.prototype, "isLoggedIn", void 0);
    __decorate([
        mobx_1.observable, 
        __metadata('design:type', Boolean)
    ], TopBarStore.prototype, "isBlocked", void 0);
    __decorate([
        mobx_1.action, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String]), 
        __metadata('design:returntype', void 0)
    ], TopBarStore.prototype, "setCriteria", null);
    __decorate([
        mobx_1.action, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], TopBarStore.prototype, "setLoggedInState", null);
    __decorate([
        mobx_1.action, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Boolean]), 
        __metadata('design:returntype', void 0)
    ], TopBarStore.prototype, "setIsBlocked", null);
    TopBarStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TopBarStore);
    return TopBarStore;
}());
exports.TopBarStore = TopBarStore;
//# sourceMappingURL=/Users/sninio/Tikal/ng2-shows/src/src/src/app/common/stores/top-bar.store.js.map

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(233);
var top_bar_store_1 = __webpack_require__(173);
var ShowService = (function () {
    function ShowService(http, topBarStore) {
        this.http = http;
        this.topBarStore = topBarStore;
        this.BASE_URL = 'https://api.tvmaze.com/';
    }
    ShowService.prototype.canActivate = function (route, state) {
        this.topBarStore.setIsBlocked(!this.topBarStore.isLoggedIn);
        return this.topBarStore.isLoggedIn;
    };
    ShowService.prototype.getShows = function (showName) {
        var url = this.BASE_URL + 'search/shows?q=' + encodeURI(showName);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    ShowService.prototype.getShowWithCast = function (showName) {
        var url = this.BASE_URL + 'singlesearch/shows?q=' + encodeURI(showName) + '&embed=cast';
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    ShowService.prototype.getShowById = function (showId) {
        var url = this.BASE_URL + 'shows/' + showId + '?embed[]=cast&embed[]=seasons';
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    ShowService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof top_bar_store_1.TopBarStore !== 'undefined' && top_bar_store_1.TopBarStore) === 'function' && _b) || Object])
    ], ShowService);
    return ShowService;
    var _a, _b;
}());
exports.ShowService = ShowService;
//# sourceMappingURL=/Users/sninio/Tikal/ng2-shows/src/src/src/app/common/services/show.service.js.map

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var actor_service_1 = __webpack_require__(446);
var mobx_1 = __webpack_require__(69);
var ActorStore = (function () {
    function ActorStore(actorService) {
        this.actorService = actorService;
        this.currentActorShows = [];
    }
    ActorStore.prototype.setActor = function (actor) {
        this.currentActor = actor;
    };
    ActorStore.prototype.setActorShows = function (shows) {
        this.currentActorShows = shows;
    };
    ActorStore.prototype.getActorShows = function () {
        var _this = this;
        if (this.currentActor) {
            this.actorService.getActorShows(this.currentActor.id)
                .subscribe(function (credits) {
                var shows = credits.map(function (credit) {
                    return credit._embedded.show;
                });
                _this.setActorShows(shows);
            });
        }
    };
    __decorate([
        mobx_1.observable, 
        __metadata('design:type', Object)
    ], ActorStore.prototype, "currentActor", void 0);
    __decorate([
        mobx_1.observable, 
        __metadata('design:type', Array)
    ], ActorStore.prototype, "currentActorShows", void 0);
    __decorate([
        mobx_1.action, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ActorStore.prototype, "setActor", null);
    __decorate([
        mobx_1.action, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ActorStore.prototype, "setActorShows", null);
    __decorate([
        mobx_1.action, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ActorStore.prototype, "getActorShows", null);
    ActorStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof actor_service_1.ActorService !== 'undefined' && actor_service_1.ActorService) === 'function' && _a) || Object])
    ], ActorStore);
    return ActorStore;
    var _a;
}());
exports.ActorStore = ActorStore;
//# sourceMappingURL=/Users/sninio/Tikal/ng2-shows/src/src/src/app/common/stores/actor.store.js.map

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var actor_store_1 = __webpack_require__(248);
var router_1 = __webpack_require__(121);
var ActorDetailsComponent = (function () {
    function ActorDetailsComponent(router, actorStore) {
        this.router = router;
        this.actorStore = actorStore;
    }
    ActorDetailsComponent.prototype.ngOnInit = function () {
        this.actorStore.getActorShows();
    };
    ActorDetailsComponent.prototype.navigate = function (show) {
        this.router.navigate(['show', show.id]);
    };
    ActorDetailsComponent = __decorate([
        core_1.Component({
            selector: 'actor-details',
            template: __webpack_require__(816),
            styles: [__webpack_require__(810)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof actor_store_1.ActorStore !== 'undefined' && actor_store_1.ActorStore) === 'function' && _b) || Object])
    ], ActorDetailsComponent);
    return ActorDetailsComponent;
    var _a, _b;
}());
exports.ActorDetailsComponent = ActorDetailsComponent;
//# sourceMappingURL=/Users/sninio/Tikal/ng2-shows/src/src/src/app/actor-details/actor-details.component.js.map

/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(121);
var mobx_1 = __webpack_require__(69);
mobx_1.useStrict(true);
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: __webpack_require__(817),
            styles: [__webpack_require__(811)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=/Users/sninio/Tikal/ng2-shows/src/src/src/app/app.component.js.map

/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var shows_store_1 = __webpack_require__(172);
var ShowResolver = (function () {
    function ShowResolver(showStore) {
        this.showStore = showStore;
    }
    ShowResolver.prototype.resolve = function (route, state) {
        return this.showStore.getShowById(+route.params['id']);
    };
    ShowResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof shows_store_1.ShowStore !== 'undefined' && shows_store_1.ShowStore) === 'function' && _a) || Object])
    ], ShowResolver);
    return ShowResolver;
    var _a;
}());
exports.ShowResolver = ShowResolver;
//# sourceMappingURL=/Users/sninio/Tikal/ng2-shows/src/src/src/app/common/resolvers/show.resolver.js.map

/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(233);
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
    ActorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], ActorService);
    return ActorService;
    var _a;
}());
exports.ActorService = ActorService;
//# sourceMappingURL=/Users/sninio/Tikal/ng2-shows/src/src/src/app/common/services/actor.service.js.map

/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var shows_store_1 = __webpack_require__(172);
var actor_store_1 = __webpack_require__(248);
var router_1 = __webpack_require__(121);
var ShowDetailsComponent = (function () {
    function ShowDetailsComponent(router, showStore, actorStore) {
        this.router = router;
        this.showStore = showStore;
        this.actorStore = actorStore;
    }
    ShowDetailsComponent.prototype.navigate = function (castMember) {
        this.actorStore.setActor(castMember.person);
        this.router.navigate(['actor', castMember.person.id]);
    };
    ShowDetailsComponent = __decorate([
        core_1.Component({
            selector: 'show-details',
            template: __webpack_require__(819),
            styles: [__webpack_require__(813)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof shows_store_1.ShowStore !== 'undefined' && shows_store_1.ShowStore) === 'function' && _b) || Object, (typeof (_c = typeof actor_store_1.ActorStore !== 'undefined' && actor_store_1.ActorStore) === 'function' && _c) || Object])
    ], ShowDetailsComponent);
    return ShowDetailsComponent;
    var _a, _b, _c;
}());
exports.ShowDetailsComponent = ShowDetailsComponent;
//# sourceMappingURL=/Users/sninio/Tikal/ng2-shows/src/src/src/app/show-details/show-details.component.js.map

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var shows_store_1 = __webpack_require__(172);
var router_1 = __webpack_require__(121);
var top_bar_store_1 = __webpack_require__(173);
var ShowListComponent = (function () {
    function ShowListComponent(router, showStore, topBarStore) {
        this.router = router;
        this.showStore = showStore;
        this.topBarStore = topBarStore;
    }
    ShowListComponent.prototype.ngOnInit = function () {
        if (this.topBarStore.criteria !== '') {
            this.showStore.getShows(this.topBarStore.criteria);
        }
    };
    ShowListComponent.prototype.navigate = function (show) {
        this.router.navigate(['show', show.id]);
    };
    ShowListComponent.prototype.doSearch = function () {
        this.topBarStore.setIsBlocked(false);
        this.showStore.getShows(this.topBarStore.criteria);
    };
    ShowListComponent.prototype.setLoggedIn = function (state) {
        this.topBarStore.setLoggedInState(state);
    };
    ShowListComponent = __decorate([
        core_1.Component({
            selector: 'show',
            template: __webpack_require__(820),
            styles: [__webpack_require__(814)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof shows_store_1.ShowStore !== 'undefined' && shows_store_1.ShowStore) === 'function' && _b) || Object, (typeof (_c = typeof top_bar_store_1.TopBarStore !== 'undefined' && top_bar_store_1.TopBarStore) === 'function' && _c) || Object])
    ], ShowListComponent);
    return ShowListComponent;
    var _a, _b, _c;
}());
exports.ShowListComponent = ShowListComponent;
//# sourceMappingURL=/Users/sninio/Tikal/ng2-shows/src/src/src/app/show-list/show-list.component.js.map

/***/ },

/***/ 514:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 514;


/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
__webpack_require__(645);
var platform_browser_dynamic_1 = __webpack_require__(609);
var core_1 = __webpack_require__(0);
var environment_1 = __webpack_require__(644);
var _1 = __webpack_require__(642);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);
//# sourceMappingURL=/Users/sninio/Tikal/ng2-shows/src/src/src/main.js.map

/***/ },

/***/ 640:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_1 = __webpack_require__(120);
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(339);
var http_1 = __webpack_require__(233);
var clarity_angular_1 = __webpack_require__(646);
var app_component_1 = __webpack_require__(444);
var app_routing_1 = __webpack_require__(641);
var show_list_component_1 = __webpack_require__(448);
var shows_store_1 = __webpack_require__(172);
var show_service_1 = __webpack_require__(247);
var ng2_mobx_1 = __webpack_require__(802);
var ngx_pipes_1 = __webpack_require__(804);
var show_details_component_1 = __webpack_require__(447);
var top_bar_store_1 = __webpack_require__(173);
var search_component_1 = __webpack_require__(643);
var show_resolver_1 = __webpack_require__(445);
var actor_details_component_1 = __webpack_require__(443);
var actor_store_1 = __webpack_require__(248);
var actor_service_1 = __webpack_require__(446);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                show_list_component_1.ShowListComponent,
                show_details_component_1.ShowDetailsComponent,
                search_component_1.SearchComponent,
                actor_details_component_1.ActorDetailsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng2_mobx_1.Ng2MobxModule,
                ngx_pipes_1.NgPipesModule,
                clarity_angular_1.ClarityModule.forRoot(),
                app_routing_1.ROUTING
            ],
            providers: [shows_store_1.ShowStore, show_service_1.ShowService, top_bar_store_1.TopBarStore, show_resolver_1.ShowResolver, actor_store_1.ActorStore, actor_service_1.ActorService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=/Users/sninio/Tikal/ng2-shows/src/src/src/app/app.module.js.map

/***/ },

/***/ 641:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__(121);
var show_list_component_1 = __webpack_require__(448);
var show_details_component_1 = __webpack_require__(447);
var show_resolver_1 = __webpack_require__(445);
var show_service_1 = __webpack_require__(247);
var actor_details_component_1 = __webpack_require__(443);
exports.ROUTES = [
    { path: '', redirectTo: 'showlist', pathMatch: 'full' },
    {
        path: 'showlist',
        component: show_list_component_1.ShowListComponent
    },
    {
        path: 'show/:id',
        component: show_details_component_1.ShowDetailsComponent,
        canActivate: [show_service_1.ShowService],
        resolve: {
            show: show_resolver_1.ShowResolver
        }
    },
    {
        path: 'actor/:id',
        component: actor_details_component_1.ActorDetailsComponent
    },
    {
        path: '**',
        redirectTo: 'showlist'
    },
];
exports.ROUTING = router_1.RouterModule.forRoot(exports.ROUTES);
//# sourceMappingURL=/Users/sninio/Tikal/ng2-shows/src/src/src/app/app.routing.js.map

/***/ },

/***/ 642:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(444));
__export(__webpack_require__(640));
//# sourceMappingURL=/Users/sninio/Tikal/ng2-shows/src/src/src/app/index.js.map

/***/ },

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var top_bar_store_1 = __webpack_require__(173);
var SearchComponent = (function () {
    function SearchComponent(topBarStore) {
        this.topBarStore = topBarStore;
        this.criteriaChanged = new core_1.EventEmitter();
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.criteria = this.topBarStore.criteria;
    };
    SearchComponent.prototype.doSearch = function () {
        this.topBarStore.setCriteria(this.criteria);
        this.criteriaChanged.emit();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
    ], SearchComponent.prototype, "criteriaChanged", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            styles: [__webpack_require__(812)],
            template: __webpack_require__(818)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof top_bar_store_1.TopBarStore !== 'undefined' && top_bar_store_1.TopBarStore) === 'function' && _b) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=/Users/sninio/Tikal/ng2-shows/src/src/src/app/search/search.component.js.map

/***/ },

/***/ 644:
/***/ function(module, exports) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
"use strict";
exports.environment = {
    production: false
};
//# sourceMappingURL=/Users/sninio/Tikal/ng2-shows/src/src/src/environments/environment.js.map

/***/ },

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__(660);
__webpack_require__(653);
__webpack_require__(649);
__webpack_require__(655);
__webpack_require__(654);
__webpack_require__(652);
__webpack_require__(651);
__webpack_require__(659);
__webpack_require__(648);
__webpack_require__(647);
__webpack_require__(657);
__webpack_require__(650);
__webpack_require__(658);
__webpack_require__(656);
__webpack_require__(661);
__webpack_require__(1085);
//# sourceMappingURL=/Users/sninio/Tikal/ng2-shows/src/src/src/polyfills.js.map

/***/ },

/***/ 810:
/***/ function(module, exports) {

module.exports = ".show-item {\n  margin: 10px;\n  cursor: pointer; }\n\n.actor-image {\n  max-height: 1000px;\n  margin: auto; }\n"

/***/ },

/***/ 811:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 812:
/***/ function(module, exports) {

module.exports = ".main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline; }\n  .main input {\n    margin-right: 10px;\n    height: 36px; }\n"

/***/ },

/***/ 813:
/***/ function(module, exports) {

module.exports = ".cast-item {\n  margin: 10px;\n  cursor: pointer; }\n\n.show-image {\n  max-height: 1000px;\n  margin: auto; }\n\n.season-item img {\n  float: left;\n  margin: 10px; }\n"

/***/ },

/***/ 814:
/***/ function(module, exports) {

module.exports = ".show {\n  margin: 10px; }\n\n.topbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.blocked {\n  z-index: 999;\n  width: 100%;\n  display: block; }\n  .blocked .blocked-content {\n    border-radius: 7px;\n    background: rgba(255, 255, 255, 0.9);\n    margin: 30px auto 0;\n    padding: 6px;\n    position: absolute;\n    width: 800px;\n    top: 25%;\n    left: 50%;\n    margin-left: -400px;\n    margin-top: -40px;\n    border: 1px solid black; }\n"

/***/ },

/***/ 816:
/***/ function(module, exports) {

module.exports = "<div *mobxAutorun>\n    <div class=\"row\">\n        <div class=\"col-md-5 offset-md-1\">\n            <p>{{actorStore.currentActor.name}}</p>\n        </div>\n        <img class=\"actor-image\" [src]=\"actorStore.currentActor.image?.original\">\n    </div>\n    <div class=\"row offset-md-1\">\n        <div class=\"show-item\" *ngFor=\"let show of actorStore.currentActorShows\" (click)=\"navigate(show)\">\n            {{show.name}}<br>\n            <img [src]=\"show.image?.medium\">\n        </div>\n    </div>\n</div>\n"

/***/ },

/***/ 817:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ },

/***/ 818:
/***/ function(module, exports) {

module.exports = "<div class=\"row offset-md-1 main\">\n    <input [(ngModel)]=\"criteria\" type=\"text\" placeholder=\"search for a show\" (keydown.enter)=\"doSearch()\">\n    <button type=\"submit\" class=\"btn btn-success-outline\" (click)=\"doSearch()\">search</button>\n</div>\n"

/***/ },

/***/ 819:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"showStore.currentShow.image\">\n    <div *mobxAutorun>\n        <div class=\"row\">\n            <div class=\"col-md-5 offset-md-1\">\n                <p>{{showStore.currentShow.name}}</p>\n                <p>Genres: <span *ngFor=\"let genre of showStore.currentShow.genres\">{{genre}},</span></p>\n                <p>{{showStore.currentShow.summary | stripTags}}</p>\n            </div>\n            <img class=\"show-image\" [src]=\"showStore.currentShow.image?.original\">\n        </div>\n        <div class=\"row offset-md-1 season-item\" *ngFor=\"let season of showStore.currentShowSeasons\">\n            <div *ngIf=\"season.premiereDate\">\n                <img *ngIf=\"season.image?.medium\" [src]=\"season.image?.medium\">\n                <div class=\"col-md-12\">\n                    <span>Season {{season.number}}: {{season.name}} ({{season.premiereDate}} - {{season.endDate}}), {{season.episodeOrder}} Episodes</span>\n                    <p *ngIf=\"season.summary\">{{season.summary | stripTags}}</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row offset-md-1\">\n            <div class=\"cast-item\" *ngFor=\"let castMember of showStore.currentShowCast\" (click)=\"navigate(castMember)\">\n                {{castMember.character.name}}<br>\n                <img [src]=\"castMember.character.image?.medium\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 820:
/***/ function(module, exports) {

module.exports = "<div *mobxAutorun>\n    <div class=\"topbar row offset-md-1\">\n        <search class=\"col-md-5\" (criteriaChanged)=\"doSearch()\"></search>\n        <div class=\"col-md-5 toggle-switch\">\n            <input #loggedIn type=\"checkbox\" id=\"toggle_1\" [checked]=\"topBarStore.isLoggedIn\"\n                   (change)=\"setLoggedIn(loggedIn.checked)\">\n            <label for=\"toggle_1\">Act as logged in</label>\n        </div>\n    </div>\n    <div class=\"row offset-md-1\">\n        <div class=\"show\" *ngFor=\"let show of showStore.shows\" (click)=\"navigate(show)\">\n            <img [src]=\"show.image.medium\"><br>\n            <span>{{show.name}}</span><br>\n            <span *ngFor=\"let genre of show.genres\">{{genre}}, </span>\n        </div>\n    </div>\n\n    <div class=\"blocked\" *ngIf=\"topBarStore.isBlocked\" (click)=\"topBarStore.setIsBlocked(false)\">\n        <div class=\"blocked-content\">\n            User is blocked! Please log in!\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }

},[1086]);
//# sourceMappingURL=main.bundle.map