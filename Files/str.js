
function encrypt(){
    var Basestring = "abc";
    encodeString = window.btoa(Basestring);
    document.getElementById("demo1").innerHTML = document.getElementById("demo1").innerHTML+ encodeString;

}

function decrypt(){
    
    var decodeString = window.btoa(encodeString);
    document.getElementById("demo0").innerHTML = document.getElementById("demo0")+decodeString;

}