//Justin Carroll
//carr0476
//canvas charts assignment

document.addEventListener('DOMContentLoaded', function () {

    //add all the needed alemets of the canvas
    let canvasP = document.getElementById("pie")
    let ctxP = canvasP.getContext("2d");
    let canvasB = document.getElementById("bar")
    let ctxB = canvasB.getContext("2d");
    var cxP = canvasP.width / 2;
    var cyP = canvasP.height / 2;
    var cxB = canvasB.width / 2;
    var cyB = canvasB.height / 2;
    let radius = 120;
    let startAngle =0;

    console.log("Pie chart", canvasP)
    console.log("Bar Graph", canvasB)

    //executing fetch
    fetchData()
})

function fetchData() {
    //fetching the json data
    console.log("executing Fetch")
    fetch('./Data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //passing the fetched data to the filter function
            getTotal(data)
            makePie(data)
            console.log(data)
        })
        .catch(function (err) {
            console.log("Error: ", err.message)
        });
}

function getTotal(data) {
    //gets the sum of the number in the json file
let flavour= 0;
    for(let i=0; i<data.length; i++){
        // console.log(data[i].title)
        flavour= flavour + Number(data[i].flavour)
    }
console.log("total is", flavour)
}

function makePie(data){
    data.forEach(pie => {
        console.log("pie")
    });
}
// data[id].title