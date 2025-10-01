var inventorData = [
    {
        inventionName : " Name of Invention:  HTML",
        inventorImg : "https://cdn.futura-sciences.com/sources/images/scientist/persov6/Berners-Lee-1000.jpg",
        inventorName : " Developed By: Tim Berners-Lee",
        year:" Year: 1989-1991",
        inventorBio : "<strong> Bio: </strong> Sir Tim Berners-Lee, born in 1955 in London, is a British computer scientist who invented the World Wide Web in 1989 while working at CERN. He created HTML, the first web browser, and key web technologies like URLs and HTTP, laying the foundation of the modern internet.",
        inventorPurpose : "<strong>Purpose: </strong> HTML was created to structure and link documents on the web, making it possible to share information globally."
    },
    {
        inventionName : " Name of Invention: CSS",
        inventorImg : "https://alchetron.com/cdn/hkon-wium-lie-b099277a-60a3-485f-819e-42b5e81faa0-resize-750.jpeg",
        inventorName : " Developed By: Hakon Wium-Lie",
        year: " Year: 1994 - 1996",
        inventorBio : " <strong>Bio:  </strong>Håkon Wium Lie, born on 20 July 1965 in Norway, is a computer scientist best known for creating Cascading Style Sheets (CSS). While working at CERN in 1994, he proposed CSS and later helped standardize CSS1 in 1996, laying the foundation for modern web development. ",
        inventorPurpose : " <strong>Purpose : </strong> To style and design web pages with colors, layouts, and fonts separately from content. ",
    },
    {
        inventionName : "Name of Invention: JavaScript",
        inventorImg: "https://images.techhive.com/images/idge/imported/article/ctw/2014/04/03/eich_04-100391285-orig.jpg?auto=webp&quality=85,70",
        inventorName : " Developed By: Brendan Eich",
        year :  "Year:1995",
        inventorBio : " <strong>Bio:</strong> Brendan Eich, born in 1961, in the United States, is a computer scientist and programmer best known for creating JavaScript in 1995 while working at Netscape Communications. He developed the first version of the language in just 10 days, which later became a core technology for interactive web development ",
        inventorPurpose : "<strong>Purpose : </strong>To make web pages interactive, adding animations, forms, and dynamic content. "
    }
]    
function showData(index) {
    var invention = document.getElementById("invention")
    var inventorImg = document.getElementById("inventorImg")
    var inventorName = document.getElementById("inventorName")
    var inventoryYear = document.getElementById("inventoryYear")
    var inventorBio = document.getElementById("inventorBio")
    var inventorPurpose = document.getElementById("inventorPurpose")
    invention.textContent= inventorData[index].inventionName
    inventorImg.src= inventorData[index].inventorImg
    inventorName.textContent=inventorData[index].inventorName
    inventoryYear.textContent= inventorData[index].year
    inventorBio.innerHTML=  inventorData[index].inventorBio
    inventorPurpose.innerHTML=inventorData[index].inventorPurpose
}
var count = 0;
function nextHandler() {
if (count>= inventorData.length-1){
    count = 0 
}
else {
    count++
}
showData(count)
}
function previousHandler() {
if(count<=0) {
    count = inventorData.length-1
}
else{
    count--
}
showData(count)
}