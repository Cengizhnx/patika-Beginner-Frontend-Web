let names = prompt("İsminiz");
let addName = document.querySelector("#name");
addName.innerHTML = names;

let clock = document.querySelector("#myClock")

function tekrar() {
    clock.innerHTML = saat() + "." + dakika() + "." + saniye() + " " + gun();
}
setInterval(tekrar, 1000);

function saat() {
    var hour = new Date().getHours().toLocaleString('tr-TR');
    return hour;
}
function dakika() {
    var minute = new Date().getMinutes().toLocaleString('tr-TR');
    return minute;
}
function saniye() {
    var milisecond = new Date().getSeconds().toLocaleString('tr-TR');
    return milisecond;
}

function gun() {
    let day=new Date().getDay();
    switch (day) {
        case 1:
            day = "Pazartesi"
            break;
        case 2:
            day = "Salı"
            break;
        case 3:
            day = "Çarşamba"
            break;
        case 4:
            day = "Perşembe"
            break;
        case 5:
            day = "Cuma"
            break;
        case 6:
            day = "Cumartesi"
            break;
        case 7:
            day = "Pazar"
            break;
    }
    return day;
}