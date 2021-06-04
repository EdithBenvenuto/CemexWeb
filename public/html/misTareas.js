window.onload = (async () => {
    const opciones = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    const respuesta = await fetch("/misTareas/"+ sessionStorage.NameUser, opciones);
    const datos = await respuesta.json();

    //datos.respuesta
    console.log(datos.respuesta);
    if((datos.respuesta).length > 0){
      var temp = '';
      var temp2 = '';
      var to_do = 0;
      (datos.respuesta).forEach((i)=>{
        if((i.subtask_status)=='To do'){
          temp +="<tr>";
          temp +="<td>"+i.subtask_priority+"</td>";
          temp +="<td>"+i.subtask_summary+"</td></tr>";
          to_do++;
        }
        else if((i.subtask_status)=='Done'){
          temp2 +="<tr>";
          temp2 +="<td>"+i.subtask_priority+"</td>";
          temp2 +="<td>"+i.subtask_summary+"</td></tr>";
        }
      })
      if(to_do==0){
      document.getElementById("footer").innerHTML="<th colspan='2' style='background-color: unset;'><img src='../images/img-misTareas/nothingPlanned.png'></th>";
      }
      document.getElementById("contenido").innerHTML = temp;
      document.getElementById("contenido2").innerHTML= temp2;
    }
  });