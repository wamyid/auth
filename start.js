import { getCookie } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.6/cookie.js";
import { onClick } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.6/element.js";

import StartDevice from "./startfunction.js";



let token=getCookie("login");
if (token === ""){
    window.location.replace("../");
}else{
    onClick('btn',StartDevice);
}

