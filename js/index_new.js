//Acciones con evento onclick en icono hamburguesa
function openMenu(){
    document.getElementById("mainMenu").style.width="470px";
    document.getElementById("mainMenu").style.display="flex";
    document.getElementById("mainMenu").style.height="1000px";
    document.getElementById("openmenu").style.display="none";

}
//Acciones con evento onclick en icono cerrar X
function closeNav(){
    document.getElementById("mainMenu").style.width="0px";
    document.getElementById("mainMenu").style.transition="0.9s all";
    window.location.reload()// Emular tecla F5
}