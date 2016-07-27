var matrixTool = (function () {
    function printMatrix (matrix) {
        document.writeln("<p>the matrix to be processed:</p>");
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                document.writeln(matrix[i][j]);
            }
            document.writeln("<br>");
        }
    }

    function traverseInSpiral (matrix) {
        var isValid = checkMatrix(matrix);
        if (isValid) {
            console.log("matrix to traverse in spiral:", matrix);
            printMatrix(matrix);
            console.time("traverseInSpiral");
            topRight(matrix);
            console.timeEnd("traverseInSpiral");
        } else {
            console.log("this method requires an m x n sized matrix to operate on!");
        }
    }

    function topRight (matrix, jMax, iMax, iMin, jMin, iPos, jPos, processed) {
        jMax = jMax || matrix[0].length;
        iMax = iMax || matrix.length;
        iMin = iMin || 0;
        jMin = jMin || 0;
        iPos = iPos || 0;
        jPos = jPos || 0;
        processed = processed || 0;

        console.log("traverse top row and right column");
        document.writeln("<p>traverse top row and right column</p>");

        for (var i = jPos; i < jMax; i++) {
            jPos = i;
            processed++;

            var current = matrix[iPos][jPos];
            console.log(current);
            document.writeln("<p>" + current + "</p>");
        }

        iPos++;

        for (var i = iPos; i < iMax; i++) {
            iPos = i;
            processed++;

            var current = matrix[iPos][jPos];
            console.log(current);
            document.writeln("<p>" + current + "</p>");
        }

        jPos--;

        if (processed < matrix.length * matrix[0].length) botLeft(matrix, jMax-1, iMax, iMin+1, jMin, iPos, jPos, processed);
    }

    function botLeft (matrix, jMax, iMax, iMin, jMin, iPos, jPos, processed) {
        console.log("traverse bot row and left column");
        document.writeln("<p>traverse bot row and left column</p>");

        for (var i = jPos; i >= jMin; i--) {
            jPos = i;
            processed++;

            var current = matrix[iPos][jPos];
            console.log(current);
            document.writeln("<p>" + current + "</p>");
        }

        iPos--;

        for (var i = iPos; i >= iMin; i--) {
            iPos = i;
            processed++;

            var current = matrix[iPos][jPos];
            console.log(current);
            document.writeln("<p>" + current + "</p>");
        }

        jPos++;

        if (processed < matrix.length * matrix[0].length) topRight(matrix, jMax, iMax-1, iMin, jMin+1, iPos, jPos, processed);
    }

    function checkArray (array) {
        return Array.isArray(array);
    }

    function checkMatrix (matrix) {
        var isit = false;

        var rows = checkArray(matrix) ? matrix.length : null;
        var columns = rows && checkArray(matrix[0]) ? matrix[0].length : null;

        if (rows && columns) {
            isit = true;

            for (var i = 0; i < rows; i++) {
                if (matrix[i].length !== columns) {
                    return false;
                }
            }
        }

        return isit;
    }
/*******************************************************************************
    TRAVERSE USING ARRAY.SHIFT AND ARRAY.POP
*******************************************************************************/
    function traverseInSpiral2 (matrix) {
        var isValid = checkMatrix(matrix);
        if (isValid) {
            console.log("matrix to traverse in spiral:", matrix);
            printMatrix(matrix);
            console.time("traverseInSpiral2");
            topRightS(matrix);
            console.timeEnd("traverseInSpiral2");
        } else {
            console.log("this method requires an m x n sized matrix to operate on!");
        }
    }

    function topRightS (matrix) {
        var top = matrix.shift();
        for (var i = 0; i < top.length; i++) {
            console.log("top row:\t\t", top[i]);
        }

        for (var i = 0; i < matrix.length; i++) {
            var last = matrix[i].pop();
            console.log("right col:\t\t", last);
        }

        if (matrix && matrix[0]) {
            botLeftS(matrix);
        }
    }

    function botLeftS (matrix) {
        var bot = matrix.pop();
        for (var i = bot.length - 1; i >= 0; i--) {
            console.log("bot row:\t\t", bot[i]);
        }

        for (var i = matrix.length - 1; i >= 0; i--) {
            var first = matrix[i].shift();
            console.log("left col:\t\t", first);
        }

        if (matrix && matrix[0]) {
            topRightS(matrix);
        }
    }

    var publicInterface = {
        traverseInSpiral: traverseInSpiral,
        traverseInSpiral2: traverseInSpiral2
    };
    return publicInterface;
})();
