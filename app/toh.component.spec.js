"use strict";
var testing_1 = require('@angular/core/testing');
var toh_component_1 = require('../app/toh.component');
testing_1.beforeEachProviders(function () { return [toh_component_1.TohAppComponent]; });
testing_1.describe('App: Toh', function () {
    testing_1.it('should create the app', testing_1.inject([toh_component_1.TohAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'toh works!\'', testing_1.inject([toh_component_1.TohAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('Thank you to CLI Contribs');
    }));
});
//# sourceMappingURL=toh.component.spec.js.map