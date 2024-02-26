function definitionMonth(month){
    //let month = prompt('Enter input number 1-12:');
    const nameMonth = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    };
    return nameMonth[month];
}
module.exports = definitionMonth;