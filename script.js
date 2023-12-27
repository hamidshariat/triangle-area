
function calculateArea(x1, y1, x2, y2, x3, y3) {
    return 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
}

function calculateArea2(x1, y1, x2, y2, x3, y3) {
    return 0.5 * Math.abs(x1 * (y3 - y2) + x2 * (y3 - y1) + x3 * (y1 - y2));
}

function calculateArea3(x1, y1, x2, y2, x3, y3) {
    return 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y1 - y3) + x3 * (y1 - y2));
}

function findMaxAreaTriangle(x1, y1, x2, y2, x3, y3) {
    const points = [
        [parseFloat(x1.value), parseFloat(y1.value)],
        [parseFloat(x2.value), parseFloat(y2.value)],
        [parseFloat(x3.value), parseFloat(y3.value)]
    ];

    const numPoints = points.length;

    let maxArea = 0;
    let maxArea2 = 0;
    let maxArea3 = 0;
    let maxTriangle = [];

    for (let i = 0; i < numPoints - 2; i++) {
        for (let j = i + 1; j < numPoints - 1; j++) {
            for (let k = j + 1; k < numPoints; k++) {
                const [x1, y1] = points[i];
                const [x2, y2] = points[j];
                const [x3, y3] = points[k];

                const area = calculateArea(x1, y1, x2, y2, x3, y3);
                const area2 = calculateArea2(x1, y1, x2, y2, x3, y3);
                const area3 = calculateArea3(x1, y1, x2, y2, x3, y3);

                if (area > maxArea) {
                    maxArea = area;
                    maxTriangle = [[x1, y1], [x2, y2], [x3, y3]];
                }
                if (area2 > maxArea2) {
                    maxArea2 = area2;
                    maxTriangle = [[x1, y1], [x2, y2], [x3, y3]];
                }
                if (area3 > maxArea3) {
                    maxArea3 = area3;
                    maxTriangle = [[x1, y1], [x2, y2], [x3, y3]];
                }
            }
        }
    }

    return { maxTriangle, maxArea, maxArea2, maxArea3 };
}

function calculateAndPrint() {
    const x1 = document.querySelector("#CoordinatesHeadX");
    const y1 = document.querySelector("#CoordinatesHeadY");
    const x2 = document.querySelector("#CoordinatesLeftX");
    const y2 = document.querySelector("#CoordinatesLeftY");
    const x3 = document.querySelector("#CoordinatesRightX");
    const y3 = document.querySelector("#CoordinatesRightY");

    const result = findMaxAreaTriangle(x1, y1, x2, y2, x3, y3);

    var areaTriangle = document.querySelector("#areaTriangle");
    areaTriangle.innerHTML = result.maxArea;

    var areaTriangle2 = document.querySelector("#areaTriangle2");
    areaTriangle2.innerHTML = result.maxArea2;

    var areaTriangle3 = document.querySelector("#areaTriangle3");
    areaTriangle3.innerHTML = result.maxArea3;
}
