

var cricketerData = [
    {

        cricketerName:"Babar Azam",
        crickertImg: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkVPzcjwKusuQwRIjTc5QFC3nqOewTxtEePigICyZfrfuiFS6D62DYRYIu5ocVxjVcblRPxYYFn11sXDdOGxjYqnV1Nq-ZDNSerfTowg",
        profeesion:"Crickter",
        Description:"he initial shock of England's score in the second T20I against South Africa is tempered by the numbers at the very top of the order. Phil Salt's unbeaten 141 from 60 balls and Jos Buttler's 83 from 30 went some way to explaining how one Test nation put up 304 for 2 on another."
    },
    {
        cricketerName:"Abshiekh Sharma",
        crickertImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5OZfgWCHzgNhGg52Nx5QIObngqPcPbhiew&s",
        profeesion:"Crickter",
        Description:"he initial shock of England's score in the second T20I against South Africa is tempered by the numbers at the very top of the order. Phil Salt's unbeaten 141 from 60 balls and Jos Buttler's 83 from 30 went some way to explaining how one Test nation put up 304 for 2 on another."

    },
    {
        cricketerName:"Jos Buttler",
        crickertImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOUXyiAToS4IzNqkpHsv4jsyBMI4Ha7phUA&s",
        profeesion:"Crickter",
        Description:"he initial shock of England's score in the second T20I against South Africa is tempered by the numbers at the very top of the order. Phil Salt's unbeaten 141 from 60 balls and Jos Buttler's 83 from 30 went some way to explaining how one Test nation put up 304 for 2 on another."

    },
    {
        cricketerName:"Jemie Smith",
        crickertImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9FKts6c3yFRaBMa0zd2fAtI1Guu4-XOxfeg&s",
        profeesion:"Crickter",
        Description:"he initial shock of England's score in the second T20I against South Africa is tempered by the numbers at the very top of the order. Phil Salt's unbeaten 141 from 60 balls and Jos Buttler's 83 from 30 went some way to explaining how one Test nation put up 304 for 2 on another."

    }
]

console.log(cricketerData[1].Description)



function showData(index){
    var sliderImg = document.getElementById('sliderImg')
    var cricName = document.getElementById("cricName")
    var cricBio = document.getElementById("cricBio")
    sliderImg.src = cricketerData[index].crickertImg
    cricBio.textContent = cricketerData[index].Description
    cricName.textContent = cricketerData[index].cricketerName
}

var count = 0
function nextHandler(){
     if(count>=cricketerData.length -1){
        console.log("if Chalaa")
        count = 0
     }
     else{
        console.log("else Chala")
        count++
     }

     showData(count)

}

function previousHandler(){
    if(count<=0){
        count = cricketerData.length - 1
    }
    else{
        count--
    }

}