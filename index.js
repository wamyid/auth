import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { onClick } from "https://jscroot.github.io/element/croot.js";
import PostSignUp from "./postfunction.js";


let token=getCookie("login");
if (token === ""){
    window.location.replace("../");
}else{
    onClick('btn',PostSignUp);
}

