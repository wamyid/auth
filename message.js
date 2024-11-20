import { getCookie } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.6/cookie.js";
import {setInner,getValue} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.6/element.js";
import { postJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.6/api.js";

let token=getCookie("login");
if (token === ""){
    window.location.replace("../");
}else{
    window.PostMessage = PostMessage;
}

function PostMessage(){
    const button = document.getElementById('btn');
    button.setAttribute('disabled', '');
    setInner("btn","Loading...");
    let target_url = "https://api.wa.my.id/api/v2/send/message/text";
    let tokenkey = "token";
    let tokenvalue = getCookie("login");
    let datainjson = {
        "to": getValue("to"),
        "isgroup": document.getElementById("isgroup").checked,
        "messages":getValue("messages")
    }

    postJSON(target_url,tokenkey,tokenvalue,datainjson,responseData);

}



function responseData(result){
    setInner("ket","Yeay id terkirim nya di bawah");
    setInner("nama",result.data.response);
}
