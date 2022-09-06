var etanol;
var gasolina;

function calcular(){
   etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
   gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."))

   if (etanol < 0.7 * gasolina) {
     document.getElementById("status").src="./assets/etanol.png"; 
   }
   else {
    document.getElementById("status").src="./assets/gasolina.png";
   }    
}

function resetar() {
    document.getElementById("status").src="./assets/neutro.png"; 
}
