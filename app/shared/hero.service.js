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
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(HEROES);
    };
    HeroService.prototype.getHero = function (id) {
        return Promise.resolve(HEROES).then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
var HEROES = [
    { id: 0, name: 'hansl', commits: 72 },
    { id: 0, name: 'IgorMinar', commits: 63 },
    { id: 0, name: 'Brocco', commits: 57 },
    { id: 0, name: 'rodyhaddad', commits: 40 },
    { id: 0, name: 'filipesilva', commits: 39 },
    { id: 0, name: 'jkuri', commits: 31 },
    { id: 0, name: 'cironunes', commits: 23 },
    { id: 0, name: 'zackarychapple', commits: 4 },
    { id: 0, name: 'shairez', commits: 3 },
    { id: 0, name: 'cgmartin', commits: 3 },
    { id: 0, name: 'ChrisPearce', commits: 3 },
    { id: 0, name: 'intellix', commits: 2 },
    { id: 0, name: 'tapas4java', commits: 2 },
    { id: 0, name: 'Gillespie59', commits: 2 },
    { id: 0, name: 'NathanWalker', commits: 2 },
    { id: 0, name: 'JohnCashmore', commits: 2 },
    { id: 0, name: 'jimthedev', commits: 2 },
    { id: 0, name: 'monojack', commits: 2 },
    { id: 0, name: 'shahata', commits: 2 },
    { id: 0, name: 'mgechev', commits: 2 },
    { id: 0, name: 'alxhub', commits: 2 },
    { id: 0, name: 'deebloo', commits: 2 },
    { id: 0, name: 'cexbrayat', commits: 2 },
    { id: 0, name: 'wesleycho', commits: 1 },
    { id: 0, name: 'dominikstrasser', commits: 1 },
    { id: 0, name: 'RoPP', commits: 1 },
    { id: 0, name: 'TylerEich', commits: 1 },
    { id: 0, name: 'naomiblack', commits: 1 },
    { id: 0, name: 'cburgdorf', commits: 1 },
    { id: 0, name: 'mraible', commits: 1 },
    { id: 0, name: 'cebor', commits: 1 },
    { id: 0, name: 'btford', commits: 1 },
    { id: 0, name: 'michaelrkn', commits: 1 },
    { id: 0, name: 'johnpapa', commits: 1 },
    { id: 0, name: 'jeremymwells', commits: 1 },
    { id: 0, name: 'jelbourn', commits: 1 },
    { id: 0, name: 'jeffbcross', commits: 1 },
    { id: 0, name: 'gitter-badger', commits: 1 },
    { id: 0, name: 'cwramsey', commits: 1 }
]
    .map(function (hero, index) {
    hero.id = index + 1;
    return hero;
});
//# sourceMappingURL=hero.service.js.map