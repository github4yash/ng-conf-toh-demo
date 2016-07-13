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
var core_1 = require('@angular/core');
var _dashboard_1 = require('./+dashboard');
var router_1 = require('@angular/router');
var shared_1 = require('./shared');
var _hero_detail_1 = require('./+hero-detail');
var _hero_list_1 = require('./+hero-list');
var TohAppComponent = (function () {
    function TohAppComponent() {
        this.title = 'Thank you to CLI Contribs';
    }
    TohAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'toh-app',
            templateUrl: 'toh.component.html',
            styleUrls: ['toh.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS, shared_1.HeroService]
        }),
        router_1.Routes([
            { path: '/dashboard', component: _dashboard_1.DashboardComponent },
            { path: '/hero-detail', component: _hero_detail_1.HeroDetailComponent },
            { path: '/hero-list', component: _hero_list_1.HeroListComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], TohAppComponent);
    return TohAppComponent;
}());
exports.TohAppComponent = TohAppComponent;
//# sourceMappingURL=toh.component.js.map