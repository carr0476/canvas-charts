
document.addEventListener('DOMContentLoaded', function () {
    let canvasP = document.getElementById("pie")
    let canvasB = document.getElementById("bar")
    //fetching the json data
    console.log("executing Fetch")
    fetch('./Data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let pieData = data
            console.log(data)
        })
        .catch(function (err) {
            console.log("Error: ", err.message)
        });

        pieData[id].title

})