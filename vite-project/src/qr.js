import { toDataURL } from "qrcode";
//import { toFile } from "qrcode";

const input = document.querySelector('#inputURL') ;
const button = document.querySelector('#buttonURL') ;
const storage = document.querySelector('#imgstorage');





button.addEventListener('click', async ()=>{
    storage.innerHTML = '';
    const dataURL = await toDataURL(input.value);
    const image = document.createElement('img');
    const anchor = document.createElement('a');
    const text = document.createElement('p');
    text.innerHTML = 'Letöltésért Kattintson a képre!'
    // ez felelős az image generálásért
    image.classList.add('qrimg');
    image.src = dataURL;
    //
    // Ez felelős az anchor felpareméterezésére
    anchor.href = dataURL;
    anchor.download = "Qrcode.png";
    //anchor.textContent = "📥 Letöltés QR kód";
    //
    anchor.appendChild(image);
    storage.appendChild(anchor);
    storage.appendChild(text);
    
});