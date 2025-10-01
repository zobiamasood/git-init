function countDown() {
    var ramazanDate = new Date("Feb 18 ,2026").getTime();
    var nowDate = new Date().getTime();
    var diff = ramazanDate-nowDate;

    if(diff<=0) {
        document.getElementById("container").innerHTML="<h1>🌙 Ramzan Mubarak! 🌙</h1>";
        return;
    }
    var totalDays = Math.floor(diff/ (1000*60*60*24))
    var months = Math.floor(totalDays/30)
    var days = totalDays%30
    var seconds = Math.floor((diff / 1000) % 60)
    var minutes = Math.floor((diff / (1000 * 60)) % 60)
    var hours = Math.floor((diff / (1000 * 60 * 60 )) % 24)

    document.getElementById("months").children[0].innerText= months;
    document.getElementById("days").children[0].innerText= days;
    document.getElementById("hours").children[0].innerText= hours;
    document.getElementById("minutes").children[0].innerText= minutes;
    document.getElementById("seconds").children[0].innerText= seconds;
}
setInterval(countDown,1000)
countDown()
