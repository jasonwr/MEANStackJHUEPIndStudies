describe('Example', function() {
    var config = require('../../../server/utils/config')();
    describe('Test', function() {
        it('TestA', function() {
           expect(config.random).toEqual(undefined);
        });
        it('TestB', function() {
           expect(config.database == undefined).toBeFalsy(); 
        });
    });
});