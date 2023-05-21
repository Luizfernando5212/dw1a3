document.addEventListener("DOMContentLoaded", function () {
    var divCentral = document.getElementById("divCentral");
    var colorSelect = document.getElementById("colorSelect");

    document.getElementById("colorSelect").addEventListener("change", function () {

        var selectedColor = colorSelect.value;

        divCentral.className = "selected-color " + selectedColor;
        var cssCode = `
            .selected-color.${selectedColor} {
                background-color: ${selectedColor};
                color: ${selectedColor === 'black' ? 'white' : 'black'};
            }
        `;

        divCentral.innerText = cssCode;
    });
});