var roll_btn=document.getElementById("btn")
roll_btn.addEventListener("click",function(){
    var random1=Math.floor(Math.random()*6) +1
    var randomimg="images/dice"+random1+".png"
    // console.log(random1)
    // console.log(randomimg)
    var img1=document.getElementById("img1")
    img1.setAttribute("src",randomimg)
    
    
    var random2=Math.floor(Math.random()*6) +1
    var randomimg2="images/dice"+random2+".png"
    // console.log(random1)
    // console.log(randomimg)
    var img2=document.getElementById("img2")
    img2.setAttribute("src",randomimg2)
    
    var res=document.getElementById("res")
    if(random1>random2)
    {
        document.getElementById("res").innerHTML="Player1 Wins"
    }
    else if(random2>random1){
        document.getElementById("res").innerHTML="Player2 wins"
    }
    else{
        document.getElementById("res").innerHTML="draw"

    }
}
)

