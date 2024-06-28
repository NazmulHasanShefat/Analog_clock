setInterval(()=>{
    let hours = document.querySelector(".hours");
    let minutes = document.querySelector(".minutes");
    let seconds = document.querySelector(".seconds");

    let d = new Date();
    let Htime = d.getHours();
    let Mtime = d.getMinutes();
    let Stime = d.getSeconds();

    let Hrotation = Htime*30 + Mtime/2;
    let Mrotation = Mtime*6;
    let Srotation = Stime*6;
    
    hours.style.transform = `rotate(${Hrotation}deg)`;
    minutes.style.transform = `rotate(${Mrotation}deg)`;
    seconds.style.transform = `rotate(${Srotation}deg)`;

},1000)