
function rollDice() {
   var dice1 = document.getElementById("dice1");
   var dice2 = document.getElementById("dice2");
   var D1 = Math.floor(Math.random() * 6) + 1;
   var D2 = Math.floor(Math.random() * 6) + 1;
   dice1.innerHTML = D1;
   dice2.innerHTML = D2;
   }

function coinToss (){
         if (Math.random()>.5) {
		 window.document.coin.src = "Heads.png";}
		 else{
		      window.document.coin.src = "Tails.png";}
			  return false;}





var onShake = function () {
  alert("shake");
};
 
var onError = function () {
   alert("shake detection failed");
};

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    
    // Now safe to use device APIs
    
    
    // Start watching for shake gestures and call "onShake" 
// with a shake sensitivity of 40 (optional, default 30) 
shake.startWatch(onShake, 40 /*, onError */);
}
 

 


