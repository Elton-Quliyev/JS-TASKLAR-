
// 1. Üç tərəfin 5, 6, 7 olduğu üçbucağın sahəsini tapmaq üçün JavaScript proqramı yazın.
// Həll görmək üçün mənə basın


// var a = 5;
// var b = 6;
// var c = 7;

// // S = ?

// var p = (a+b+c)/2


// var S = Math.sqrt(p*(p-a)*(p-b)*(p-c))

// console.log("Sahe = ", S)






// 10. İki ədədin vurma və bölünməsini (istifadəçidən giriş) hesablamaq üçün JavaScript proqramı yazın.


var btnHasil = document.querySelector(".hasil")
var btnQismet = document.querySelector(".qismet")

var cavab1 = document.querySelector(".cavab1")
var cavab1 = document.querySelector(".cavab1")


btnHasil.addEventListener("click" , function(e){
    e.preventDefault()
    var a = document.querySelector("#number1").value
    var b = document.querySelector("#number2").value
    var hasil = a * b
   

    var hasilCavab = document.querySelector(".eded1")
    hasilCavab.textContent = hasil
})


btnQismet.addEventListener("click" , function(e){
    e.preventDefault()
    var a = document.querySelector("#number1").value
    var b = document.querySelector("#number2").value
    var qismet = a / b
  
    var qismetCavab = document.querySelector(".eded2")
    qismetCavab.textContent = qismet
})




////ayin tarixinin gosderen


// var div=document.getElementById("div")
  
// var  today = new Date()
// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log( month[today.getMonth()],",", weekday[today.getDay()],",",today.getDate() )
// document.write( month[today.getMonth()],",", weekday[today.getDay()],",",today.getDate() ) 
// document.write("<br>")
// // document.write( today.getHours(),":",+ today.getMinutes(),":",+today.getSeconds())

// // console.log (today.getHours() + ":"+ today.getMinutes()+':' + today.getSeconds())
 
// var text=document.createElement("h2")

// setInterval(function(){
//     var  today = new Date() 
//     // document.write(today.getHours() + ":"+ today.getMinutes()+':' + today.getSeconds())
//     console.log(today.getHours() + ":"+ today.getMinutes()+':' + today.getSeconds())
    
//  },1000)
