const definitionMonth = require('./definitionMonth');
test("output of the month by number", function() {  
    expect(definitionMonth(2)).toBe('February');
    expect(definitionMonth(7)).toBe('July');
    expect(definitionMonth(12)).toBe('December');
    expect(definitionMonth(1)).toBe('January');
});