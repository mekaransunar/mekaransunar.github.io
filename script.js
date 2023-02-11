

  var a;
  function hide_show(){
   if (a==1){
   document.getElementById("image").style.display="none";
     return a=0;
  }else{
   document.getElementById("image").style.display="inline";
   return a=1;
}}

document.getElementById("hire-me").addEventListener("click", function() {
  window.location.href = "mailto:mekaransunar@gmail.com";
});
