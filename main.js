//Justin Carroll
//carr0476
//canvas charts assignment

document.addEventListener('DOMContentLoaded', function () {
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
            makePie(data)
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
    let canvasB = document.getElementById("bar")
    let ctxB = canvasB.getContext("2d");
    canvasP.width = 800;
    canvasP.height = 600;
    var cx = canvasP.width / 2;
    var cy = canvasP.height / 2;
    let radius = 150;
    let startAngle = 0;
    let flavour = 0;
   

    //determine the sum of all the numbers being used in the pie chart
    data.forEach(data => {
        flavour = flavour + Number(data.flavour)
    })
    console.log("total is", flavour)


    //create the pie chart by looping through the array
    data.forEach(pie => {
        //set the colour values for the stroke and fill
        ctxP.fillStyle = pie.colour;
        ctxP.lineWidth = 1;
        ctxP.strokeStlye = '#333';

        //begin drawing the slice
        ctxP.beginPath();
        let endAngle = ((pie.flavour / flavour) * Math.PI * 2) + startAngle;
        console.log("end", endAngle)
        console.log("start", startAngle);
        ctxP.moveTo(cx, cy);
        ctxP.arc(cx, cy, radius, startAngle, endAngle, false);
        ctxP.lineTo(cx, cy);
        ctxP.fill();
        ctxP.stroke();
        ctxP.closePath();

        console.log(pie.colour)

        //add the tags to each slice
        ctxP.beginPath();
        ctxP.font="20px Helvetica, Calibri"
        ctxP.textAlign="center"
        ctxP.fillStyle="#333"
        ctxP.
        ctxP.closePath();

        startAngle = endAngle;
    });
}
// data[id].title