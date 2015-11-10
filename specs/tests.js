bootstrap = require('../app/bootstrap');

describe("Bootstrap test", function () {
	it("should return true", function () {
        expect(bootstrap()).toBeTruthy();
    });
});
