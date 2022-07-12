let container = document.getElementById("container");
let row = document.getElementsByClassName("row");
let column = document.getElementsByClassName("column");
let btn = document.getElementById("btn");


function Grid (num) {
    num = prompt("what is you choice");
    makeRows(num);
    makeColumns(num);
}
Grid();

function makeRows(num) {
    for (let i = 0; i<num; i++) {
        let row = document.createElement('div');
        row.setAttribute("class", "row");
        container.appendChild(row);
        // console will not show console.log because the scope of the function is smaller.

    }
}

function makeColumns(num) {
    for (let i=0; i<row.length; i++) {
        for (let j=0; j<num; j++) {
            let column = document.createElement('div');
            column.setAttribute("class","column");
            row[j].appendChild(column);
        }
    }
}



for ( let colon of column) {
    colon.addEventListener('mouseover', changeColor);

    function changeColor() {
        colon.setAttribute('style', 'background-color: blue;');
    }
}
