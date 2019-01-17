//Justin Carroll
//carr0476
//canvas charts assignment

document.addEventListener('DOMContentLoaded', function () {
    fetchData()
})

function fetchData() {
    //fetching the json data
    console.log("Executing Fetch")
    fetch('./Data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //passing the fetched data to the graphing functions
            console.log("Success")
            makePie(data)
            plotGraph(data)
            console.log(data)

        })
        .catch(function (err) {
            console.log("Error: ", err.message)
        });
}

function makePie(data) {

    //add all the needed elemets of the canvas
    let canvasP = document.getElementById("pie")
    let ctxP = canvasP.getContext("2d");


    //aspect ratio of 4:3 maxwidth 1000px
    canvasP.width = 800;
    canvasP.height = 600;
    var cx = canvasP.width / 2;
    var cy = canvasP.height / 2;
    let radius = 200;
    let startAngle = 0;
    let flavour = 0;


    //determine the sum of all the numbers being used in the pie chart
    data.forEach(data => {
        flavour = flavour + Number(data.flavour)
    })
    console.log("Total is", flavour)


    //create the pie chart by looping through the array
    data.forEach(pie => {
        //set the colour values for the stroke and fill
        ctxP.fillStyle = pie.colour;
        ctxP.lineWidth = 1;
        ctxP.strokeStlye = '#333';

        //begin drawing the slice
        console.log("Creating slice:")
        ctxP.beginPath();
        let endAngle = ((pie.flavour / flavour) * Math.PI * 2) + startAngle;
        // console.log("end", endAngle)
        // console.log("start", startAngle);
        ctxP.moveTo(cx, cy);
        ctxP.arc(cx, cy, radius, startAngle, endAngle, false);
        ctxP.lineTo(cx, cy);
        ctxP.fill();
        ctxP.stroke();
        ctxP.closePath();

        // console.log(pie.colour)

        //add the titles to each slice
        ctxP.beginPath();
        ctxP.font = "22px Helvetica, Calibri";
        ctxP.textAlign = "center";
        ctxP.fillStyle = "#333";

        //centers the text based on which slice it belongs to
        let theta = (startAngle + endAngle) / 2;
        let deltaY = Math.sin(theta) * 1.4 * radius;
        let deltaX = Math.cos(theta) * 1.4 * radius;
        //math is hard
        console.log(pie.title)
        ctxP.fillText(pie.title, deltaX + cx, deltaY + cy);
        ctxP.closePath();

        //creates the percentage using the same math to center them
        ctxP.beginPath();
        ctxP.font = "22px Helvetica, Calibri";
        ctxP.textAlign = "center";
        ctxP.fillStyle = "#333";
        let percent = Math.trunc((pie.flavour / flavour) * 100)
        ctxP.fillText(percent + "%", (deltaX / 2) + cx, (deltaY / 2) + cy);
        ctxP.closePath();
        startAngle = endAngle;
    });
}

function plotGraph(data) {
    let canvasB = document.getElementById("bar")
    let ctxB = canvasB.getContext("2d");
    let startPoint = 10;
    let endPoint = 60;
    let width = 60;
    let total = 0;

    canvasB.width = 800;
    canvasB.height = 600;

    data.forEach(graph => {

        console.log(graph.title)
        ctxB.beginPath();
        ctxB.fillStyle = graph.colour;
        console.log((graph.flavour / total) * 100);
        ctxB.fillRect(endPoint, 599, width, (graph.flavour)*-4);
        endPoint = endPoint + startPoint + 80;
        console.log(startPoint)
        ctxB.closePath();

    });
}