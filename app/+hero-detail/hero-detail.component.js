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
var shared_1 = require('../shared');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(_heroService) {
        this._heroService = _heroService;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
    };
    HeroDetailComponent.prototype.routerOnActivate = function (segment) {
        var _this = this;
        var id = +segment.getParam('id');
        this._heroService.getHero(id)
            .then(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'toh-hero-detail',
            template: "\n    <div *ngIf=\"hero\">\n      <h2>{{hero.name}} details!</h2>\n      <div>\n        <label>id: </label>\n        <span class=\"hero-id\">{{hero.id}}</span>\n      </div>\n      <div>\n        <label>commits: </label>\n        <input [(ngModel)]=\"hero.commits\" placeholder=\"commits\" />\n      </div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\" />\n      </div>\n      <button (click)=\"goBack()\">Back</button>\n    </div>\n  ",
            styles: [
                "label, .hero-id, input {\n      font-size: 1.3em;\n    }",
                "input {\n      padding: 5px;\n    }",
                "button {\n      font-family: Arial;\n      background-color: #eee;\n      border: none;\n      padding: 5px 10px;\n      border-radius: 4px;\n      cursor: pointer;\n      cursor: hand;\n    }",
                "button:hover {\n      background-color: #cfd8dc;\n    }"
            ]
        }), 
        __metadata('design:paramtypes', [shared_1.HeroService])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map