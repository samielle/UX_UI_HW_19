
console.log("Your index.js file is loaded correctly!");

$("button").on({
    mouseenter: function () {
        $(this).css("background-color", "#F7E0E4");
    },
    mouseleave: function () {
        $(this).css("background-color", "#F1C6CD");
    },
    click: function () {
        $(this).css("background-color", "#CDA8AE");
    }
});