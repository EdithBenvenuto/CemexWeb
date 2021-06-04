window.onload = (async () => {
    const opciones = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    const respuesta = await fetch("/status/", opciones);
    const datos = await respuesta.json();
    const respuesta2 = await fetch("/status2/", opciones);
    const datos2 = await respuesta2.json();
    const respuesta3 = await fetch("/status3/", opciones);
    const datos3 = await respuesta3.json();
    const respuesta4 = await fetch("/status4/", opciones);
    const datos4 = await respuesta4.json();
//SELECT PARA USUARIOS
    if((datos.respuesta).length > 0){
        var temp = '';
        temp+= "<option value='disable hidden selected' class=>Selecciona un nombre</option>";
        (datos.respuesta).forEach((i)=>{
            temp+="<option value='"+i.NameUser+"'>"+i.NameUser+"</option>";
        })
    }
    document.getElementById("users").innerHTML = temp;

//SELECT PARA PROYECTOS
    if((datos3.respuesta3).length > 0){
        var temp3 = '';
        temp3+= "<option value='disable hidden selected' class=>Selecciona un proyecto</option>";
        (datos3.respuesta3).forEach((i)=>{
            temp3+="<option value='"+i.project_name+"'>"+i.project_name+"</option>";
        })
    }
    document.getElementById("projects").innerHTML = temp3;

//PROYECTOS PARA DESPLIEGUE DE USUARIOS
var selectedValueP='';
const dropdown2 = document.getElementById("projects");
dropdown2.addEventListener("change",getSelectValue2);
function getSelectValue2(){
selectedValueP = dropdown2.value;
var temp4='<div class="row"><div id="result" class="col">Asignados con subtareas en Proyecto: '+ selectedValueP + '</div></div><div id="titulos"><div class="row"><div class="col-12">Nombre</div></div></div></div>';
temp4 += "<div id='tablaResultado'>";
(datos4.respuesta4).forEach((i)=>{
    if(i.project_name == selectedValueP){
        temp4 += "<div class='row'>";
        temp4 += "<div class='col-1'></div>";
        temp4 += "<div class='col-2'>" + i.subtask_assignee + "</div>";
        temp4 += "<div class='col-1'></div></div>";
    }
})
temp4 += "</div>";
document.getElementById("project_names").innerHTML = temp4;
temp4='<div class="row"><div id="result" class="col">Asignados con subtareas en Proyecto: '+ selectedValueP + '</div></div><div id="titulos"><div class="row"><div class="col-12">Nombre</div></div></div></div>'
}

//USUARIOS PARA DESPLIEGUE DE TAREAS
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







