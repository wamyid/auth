import { get } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.6/api.js";
import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.6/element.js";
import { getCookie } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.6/cookie.js";


let urldevice = "https://apk.fly.dev/api/device/"+getCookie("login");

export default function StartDevice(){
    const button = document.getElementById('btn');
    button.setAttribute('disabled', '');
    setInner("btn","Loading...");
    get(urldevice,responseDevice);
}

function responseDevice(result){
    setInner("ket",result.message);
    setInner("btn",result.message);
    if (result.status){
        let gbr=document.getElementById("gambar");
        let cnv=document.createElement('canvas');
        updateCanvas(result.code,cnv);
        gbr.replaceWith(cnv);
    }   
}

function updateCanvas(text,c) {
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 400, 200);
    ctx.fillStyle = "#212121";
    ctx.fillRect(0, 0, 400, 200)
    var gradient = ctx.createLinearGradient(0, 0, 200, 200);
    gradient.addColorStop(0, '#39FF14');
    gradient.addColorStop(1, 'white');
    ctx.fillStyle = gradient;
    var fontface = "Courier";
    ctx.font = "30px Courier";
    ctx.textAlign = 'center';
    // start with a large font size
      var fontsize=300;
      // lower the font size until the text fits the canvas
      do{
          fontsize--;
          ctx.font=fontsize+"px "+fontface;
      }while(ctx.measureText(text).width>c.width)
    ctx.fillText(text, 150, 100);
    console.log(ctx.measureText(text).width);
  }

