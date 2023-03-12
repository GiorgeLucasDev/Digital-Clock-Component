var hoursElement = document.querySelector(".hours");

setInterval(() => {
    var now = new Date();
    hoursElement.innerHTML = now.getHours() + ':' + now.getMinutes().toString().padStart(2, '0') + ':' + now.getSeconds().toString().padStart(2, '0');
}, 1000);


