
console.log("Your index.js file is loaded correctly!");

$('button').on({
    mouseenter: function () {
        $(this).css('background-color', '#F7E0E4');
    },
    mouseleave: function () {
        $(this).css('background-color', '#F1C6CD');
    },
    click: function () {
        $(this).css('background-color', '#CDA8AE');
    }
});

$('button').on({
    mouseenter: function () {
        $(this).css('color', '#91777B');
    },
    mouseleave: function () {
        $(this).css('color', 'black');
    }
});