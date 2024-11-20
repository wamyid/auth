import { postJSON,get } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.6/api.js";
import {setInner,getValue} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.6/element.js";
import { getCookie } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.6/cookie.js";

let urldevice = "https://api.wa.my.id/api/device/"+getCookie("login");

export default function PostSignUp(){
    const button = document.getElementById('btn');
    button.setAttribute('disabled', '');
    setInner("btn","Loading...");
    let target_url = "https://api.wa.my.id/api/signup";
    let tokenkey = "token";
    let tokenvalue = getCookie("login");
    let datainjson = {
        "url": getValue("url"),
        "secret": getValue("secret")
    }
    postJSON(target_url,tokenkey,tokenvalue,datainjson,responseData);
    get(urldevice,responseDevice);

}



function responseData(result){
    setInner("judul","Token dan Pair Code HP");
    setInner("nama",result.data.token);
}

function responseDevice(result){
    setInner("ket",result.message);
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
