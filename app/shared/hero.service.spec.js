"use strict";
var testing_1 = require('@angular/core/testing');
var hero_service_1 = require('./hero.service');
testing_1.describe('Hero Service', function () {
    testing_1.beforeEachProviders(function () { return [hero_service_1.HeroService]; });
    testing_1.it('should ...', testing_1.inject([hero_service_1.HeroService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=hero.service.spec.js.map