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
var router_1 = require('@angular/router');
var shared_1 = require('../shared');
var HeroListComponent = (function () {
    function HeroListComponent(_router, _heroService) {
        this._router = _router;
        this._heroService = _heroService;
    }
    HeroListComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroListComponent.prototype.getHeroes = function () {
        var _this = this;
        this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroListComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroListComponent.prototype.gotoDetail = function () {
        this._router.navigate(['hero-detail', { id: this.selectedHero.id }]);
    };
    HeroListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'toh-hero-list',
            template: "\n    <div>\n      <h2>My Heroes</h2>\n      <ul class=\"heroes\">\n        <li *ngFor=\"let hero of heroes\"\n          [class.selected]=\"hero === selectedHero\"\n          (click)=\"onSelect(hero)\">\n          <span class=\"badge\">{{hero.commits}}</span> {{hero.name}}\n        </li>\n      </ul>\n      <div *ngIf=\"selectedHero\">\n        <h2>{{selectedHero.name | uppercase}} is my hero</h2>\n        <button (click)=\"gotoDetail()\">View Details</button>\n      </div>\n    </div>\n  ",
            styles: [
                ".selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }",
                ".heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 90%;\n      display: flex;\n      flex-wrap: wrap;\n    }",
                ".heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 1.3em .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n      width: 150px;\n    }",
                ".heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }",
                ".heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }",
                ".heroes .text {\n      position: relative;\n      top: -3px;\n    }",
                ".heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #0886C3;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }",
                "button {\n      font-family: Arial;\n      background-color: #eee;\n      border: none;\n      padding: 5px 10px;\n      border-radius: 4px;\n      cursor: pointer;\n      font-size: 1.1em;\n    }",
                "button:hover {\n      background-color: #cfd8dc;\n    }"
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, shared_1.HeroService])
    ], HeroListComponent);
    return HeroListComponent;
}());
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=hero-list.component.js.map