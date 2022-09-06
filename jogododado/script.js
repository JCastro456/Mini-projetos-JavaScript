var sorteio = Math.floor(Math.random() * 6 + 1);

switch(sorteio) {
    case 1: 
        document.getElementById("face").src="./assets/face1.png";
        break;
    case 2:
        document.getElementById("face").src="./assets/face2.png";
        break;
    case 3:
        document.getElementById("face").src="./assets/face3.png";
        break;  
    case 4:
        document.getElementById("face").src="./assets/face4.png";
        break; 
    case 5:
        document.getElementById("face").src="./assets/face5.png";
        break;  
    case 6:
        document.getElementById("face").src="./assets/face6.png";
        break;
    default:
        break;      
}