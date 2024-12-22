var btn=document.querySelector("button")
var bulb=document.querySelector(".bulb")
var flag=0
btn.addEventListener('click',function(){
    if(flag==0){
        bulb.style.backgroundColor="yellow"
        flag=1
    }
    else{
        bulb.style.backgroundColor="black"
        flag=0
    }
})