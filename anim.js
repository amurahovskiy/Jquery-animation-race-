var time,twoTime;
$(document).ready(function(){
    $("#btn-clock").click(function(){
        
        
        startTime();
    })
    function startTime()
        {
        var tm=new Date();
        
        var h=tm.getHours();
        var m=tm.getMinutes();
        var s=tm.getSeconds();
        console.log(h);
        m=checkTime(m);
        s=checkTime(s);
        document.getElementById('clock').innerText=h+":"+m+":"+s;
        t=setTimeout(startTime,500);
        }
        function checkTime(i)
        {
        if (i<10)
        {
        i="0" + i;
        }
        return i;
        }
        });
    $("#btn-start").click(function(){
       
        $("#btn-start").hide(0);
       var id = setInterval(function() {
           $("#count").text("");
        $('.container-start').show(200);  
        $('.container-start').hide(200);
    }, 1000);
    setTimeout(function(){
        clearInterval(id)
        Tran();
        whoWin();
        
       
        
    },4300)
    })
    function Tran(){
        time=randomInteger(800,1000);
        twoTime=randomInteger(800,1000);
        console.log(time);
        console.log(twoTime);
        $('#one-car').animate({
                left:window.innerWidth-100
                
            },time)
            $('#two-car').animate({
                left:window.innerWidth-100
            },twoTime)
        var id1=setInterval(function(){
           
            Dym("one-dym","container-one-dym");
            Dym("two-dym","container-two-dym");
          
           
           
        },90)
        setTimeout(function(){
            
            Clear("one-dym");
            Clear("two-dym");
            clearInterval(id1)
               
            
        },900)
       
    }
    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
      }
    function whoWin(){
      var win=  $("#theDiv");
      var car,h;
      console.log(win);
     
      if(time<twoTime){
        win.prepend("<h2 id='one'>Переможець </h2>")
          win.prepend('<img id="one-win" src="img//w272h208139388538318.png" class="image-win-car"/>')  
         h=$("#one");
          car=$("#one-win");
          

      }else{
        win.prepend("<h2 id='two'>Переможець </h2>")
        win.prepend('<img id="two-win" src="img//car-312461_960_720.png" class="image-win-car" />');
       h=$("#two")
        car=$("#two-win");
      }
      $("#one-car").hide(2000);
      $("#two-car").hide(2000);
      h.fadeTo(8000,1);
      car.fadeTo(8000,1);
    }
    function Dym(element1,elementTwo){
        var dym=document.getElementById(element1);
        var element=document.createElement("img")
        element.src="img//blue_smoke.png"
        element.classList.add(elementTwo);
        dym.appendChild(element);   
    } 
    function Clear(eleement1){
     var opacity= document.getElementById(eleement1);
     while (opacity.lastChild) {
        opacity.removeChild(opacity.lastChild);
      }
     console.log(opacity);
     opacity=opacity-0.3;
    }
   
  