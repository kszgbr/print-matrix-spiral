(function () {
    var m5x5 = [
        ["01","02","03","04","05"],
        ["16","17","18","19","06"],
        ["15","24","25","20","07"],
        ["14","23","22","21","08"],
        ["13","12","11","10","09"]
    ];

    var invalid5x5 = [
        [01,02,03,04,05],
        [16,17,18,19,06],
        [15,24,25,20,07],
        [14,23,22,21,08],
        [13,12,11,09]
    ];

    var m4x6 = [
        ["01","02","03","04"],
        ["16","17","18","05"],
        ["15","24","19","06"],
        ["14","23","20","07"],
        ["13","22","21","08"],
        ["12","11","10","09"],
    ];

    var m6x3 = [
        ["01","02","03","04","05","06"],
        ["14","15","16","17","18","07"],
        ["13","12","11","10","09","08"]
    ];

    var m2x3 = [
        ["01", "02"],
        ["06", "03"],
        ["05", "04"],
    ];

    var m3x2 = [
        ["01","02","03"],
        ["06","05","04"]
    ];

    var matrixes = {
        "m5x5": m5x5,
        "m4x6": m4x6,
        "m6x3": m6x3,
        "m2x3": m2x3,
        "m3x2": m3x2,
        "invalid5x5": invalid5x5
    };

    function init (method) {
        var buttonsContainer = document.querySelector("#buttons");

        for (var key in matrixes) {
            var button = document.createElement("button");
            button.onclick = function (key) {
                return function () {
                    matrixTool[method](matrixes[key]);
                }
            }(key);
            button.textContent = key;
            button.style.height = "50px"
            button.style.width = "150px;"
            button.style.marginRight = "10px"

            buttonsContainer.appendChild(button);
        }
    }

    init("traverseInSpiral");
})();
