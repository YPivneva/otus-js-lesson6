const sumNumbers = require('./sumNumbers');
test("sum even number from 50 to 100", function() {    
    expect(sumNumbers()).toBe(1850);
});