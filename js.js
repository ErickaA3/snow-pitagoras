function botonPresionado1(){
    
    var a=document.getElementById("a").value
    var b=document.getElementById("b").value
    var resultado1
    resultado1=Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
    
      document.getElementById("resultado1").innerHTML=resultado1.toFixed(2)


    //var ericka=document.getElementById("lol").value

      //document.getElementById("resultado").innerHTML=ericka
      
    

}
function botonPresionado2(){
    
  
    var c=document.getElementById("c").value
    var h=document.getElementById("h").value
    var resultado2
    resultado2=Math.sqrt(Math.pow(h,2)-Math.pow(c,2))
    if(h<c){
      alert("La hipotenusa no puede ser menor al cateto.")
    }
    
      document.getElementById("resultado2").innerHTML=resultado2.toFixed(2)
    

    //var ericka=document.getElementById("lol").value

      //document.getElementById("resultado").innerHTML=ericka
      
    

}

function iniciar()
{
  var finalizarboton=document.getElementById("finalizarboton");
  finalizarboton.addEventListener("click", botonPresionado1, false);

  var finalizarboton2=document.getElementById("finalizarboton2");
  finalizarboton2.addEventListener("click", botonPresionado2, false);

  
}
window.addEventListener("load", iniciar, false);