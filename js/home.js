var Admin=JSON.parse(localStorage.getItem("Username"));
var Logout=document.getElementById("logout");

document.getElementById("welcome").innerHTML=`<h2>Welcome ${Admin}</h2>`
Logout.addEventListener("click",function goback(){
    window.open("index.html","_self")
})


