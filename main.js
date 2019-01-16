//Justin Carroll
//carr0476
//canvas charts assignment

document.addEventListener('DOMContentLoaded', function () {
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
    var cx = canvasP.width / 2;
    var cy = canvasP.height / 2;
    let radius = 120;
    let startAngle = 0;

    let flavour = 0;
    data.forEach(data => {
        flavour = flavour + Number(data.flavour)
    })
    console.log("total is", flavour)

    data.forEach(pie => {
        // console.log("pie")
        ctxP.fillStyle = pie.colour;
        ctxP.lineWidth = 1;
        ctxP.strokeStlye = '#333';
        ctxP.beginPath();
        console.log(pie.flavour / flavour);
        let endAngle = ((pie.flavour / flavour) * Math.PI * 2) + startAngle;
        ctxP.moveTo(cx, cy);
        ctxP.arc(cx, cy, radius, startAngle, endAngle, false);
        ctxP.lineTo(cx, cy);
        ctxP.fill();
        ctxP.stroke();
        ctxP.closePath();

        console.log(pie.colour)
    });
}
// data[id].title