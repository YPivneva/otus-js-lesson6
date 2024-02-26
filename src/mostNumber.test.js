const mostNumber = require('./mostNumber');
test("most number", function() {    
    expect(mostNumber(13, 9)).toBe(13);
    expect(mostNumber(10, 15)).toBe(15);
});