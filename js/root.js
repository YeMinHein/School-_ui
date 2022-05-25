let arrow = document.querySelectorAll(".arrow");
for (let i=0;i<arrow.length; i++){
    arrow[i].addEventListener("click", (e)=>{
        let arrowParent =e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    });
}

//header bar 
let sidebar = document.querySelector(".sidebar");
let body = document.querySelector(".body-section")
let sidebarBtn= document.querySelector(".fa-bars");
sidebarBtn.addEventListener("click",()=>{
    sidebar.classList.toggle("close");
    body.classList.toggle("close")
})

//date time
const box = document.querySelector(".text")
const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wendnesday",
    "Tursday",
    "Friday",
    "Saturday"
]
const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
function date() {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let days = week[date.getDay()];
    let dd = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    if (hour > 12) {
        hour -= 12;
    }
    if (hour < 10) {
        hour = "0" + hour
    }
    if (min < 10) {
        min = "0" + min
    }
    if (sec < 10) {
        sec = "0" + sec
    }
    time = hour + ":" + min + ":" + sec;
    day = days + "," + dd + "," + month + "," + year;
    box.innerHTML = time + "<br><span>" + day + "</span>"
}
setInterval(date, 1000)
