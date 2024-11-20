import { getCookie } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.6/cookie.js";
import { onClick } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.6/element.js";
import PostSignUp from "./postfunction.js";


let token=getCookie("login");
if (token === ""){
    window.location.replace("../");
}else{
    onClick('btn',PostSignUp);
}

