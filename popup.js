setTimeout(
    function() {
      console.log("run");
      document.getElementById('pop').style.display="block"	;
     }, 2000);
  
  
  // chiudi popup
  document.getElementById("close").onclick = function(e){
    document.getElementById('pop').style.display="none";
  }
