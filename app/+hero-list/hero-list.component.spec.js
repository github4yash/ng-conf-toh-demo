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
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var hero_list_component_1 = require('./hero-list.component');
var shared_1 = require('../shared');
var router_1 = require('@angular/router');
testing_1.describe('Component: HeroList', function () {
    var builder;
    var MockRouter = (function () {
        function MockRouter() {
        }
        MockRouter.prototype.navigate = function () { };
        return MockRouter;
    }());
    testing_1.beforeEachProviders(function () { return [hero_list_component_1.HeroListComponent, shared_1.HeroService, core_1.provide(router_1.Router, { useClass: MockRouter })]; });
    testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
        builder = tcb;
    }));
    testing_1.it('should inject the component', testing_1.inject([hero_list_component_1.HeroListComponent], function (component) {
        testing_1.expect(component).toBeTruthy();
    }));
    testing_1.it('should create the component', testing_1.inject([], function () {
        return builder.createAsync(HeroListComponentTestController)
            .then(function (fixture) {
            var query = fixture.debugElement.query(platform_browser_1.By.directive(hero_list_component_1.HeroListComponent));
            testing_1.expect(query).toBeTruthy();
            testing_1.expect(query.componentInstance).toBeTruthy();
        });
    }));
});
var HeroListComponentTestController = (function () {
    function HeroListComponentTestController() {
    }
    HeroListComponentTestController = __decorate([
        core_1.Component({
            selector: 'test',
            template: "\n    <toh-hero-list></toh-hero-list>\n  ",
            directives: [hero_list_component_1.HeroListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroListComponentTestController);
    return HeroListComponentTestController;
}());
//# sourceMappingURL=hero-list.component.spec.js.map