window.onload = (async () => {
    const opciones = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    const respuesta = await fetch("/status/", opciones);
    const datos = await respuesta.json();
    const respuesta2 = await fetch("/status2/", opciones);
    const datos2 = await respuesta2.json();
    if((datos.respuesta).length > 0){
        var temp = '';
        temp+= "<option value='disable hidden selected' class=>Selecciona un nombre</option>";
        (datos.respuesta).forEach((i)=>{
            temp+="<option value='"+i.NameUser+"'>"+i.NameUser+"</option>";
        })
    }
    document.getElementById("users").innerHTML = temp;

var selectedValue='';
const dropdown = document.getElementById("users");
dropdown.addEventListener("change",getSelectValue);
function getSelectValue(){
selectedValue = dropdown.value;
var temp2='<div class="row"><div id="result" class="col">Subtarea de '+ selectedValue + '</div></div><div id="titulos"><div class="row"><div class="col-1"></div><div class="col-6">Summary</div><div class="col-2">Status</div><div class="col-2">Priority</div><div class="col-1"></div></div></div>';
temp2 += "<div id='tablaResultado'>";
(datos2.respuesta2).forEach((i)=>{
    if(i.subtask_assignee == selectedValue){
        temp2 += "<div class='row'>";
        temp2 += "<div class='col-1'></div>";
        temp2 += "<div class='col-6 estatusT summaryT'>" + i.subtask_summary + "</div>" ;
        temp2 += "<div class='col-2 estatusT'>" + i.subtask_status + "</div>";
        temp2 += "<div class='col-2 estatusT'>" + i.subtask_priority + "</div>";
        temp2 += "<div class='col-1'></div></div>";
    }
})
temp2 += "</div>";
document.getElementById("subtareas").innerHTML = temp2;
temp2='<div class="row"><div id="result" class="col">Subtarea de '+ selectedValue + '</div></div><div id="titulos"><div class="row"><div class="col-1"></div><div class="col-6">Summary</div><div class="col-2">Status</div><div class="col-2">Priority</div><div class="col-1"></div></div></div>';

}

});







