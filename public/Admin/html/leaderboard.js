    window.onload = (async () => {
    const opciones = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    const respuesta = await fetch("/leaderboard", opciones);
    const datos = await respuesta.json();

    //datos.respuesta
    var id=1;
    console.log(datos.respuesta);
    if((datos.respuesta).length > 0){
      var temp = '';
      (datos.respuesta).forEach((i)=>{
        if(id == 1)
        {
          temp +="<tr>";
          temp +="<td> <img src=/Admin/images/medal-1.png> </td>";
          if(i.Img == null)
          {
            temp += "<td> <img class='Perfil' src='../../images/img-usuarios/defaultProfile.jpg'> </td>";
          }
          else
          {
            temp +="<td> <img class='Perfil' src=../../"+i.Img+"> </td>";
          }
          temp +="<td>"+i.top_performers+"</td>";
          temp +="<td>"+i.tareas_completadas+"</td></tr>";
          id++;
        }
        else if(id == 2)
        {
          temp +="<tr>";
          temp +="<td> <img src=/Admin/images/medal-2.png> </td>";
          if(i.Img == null)
          {
            temp += "<td> <img class='Perfil' src='../../images/img-usuarios/defaultProfile.jpg'> </td>";
          }
          else
          {
            temp +="<td> <img class='Perfil' src=../../"+i.Img+"> </td>";
          }
          temp +="<td>"+i.top_performers+"</td>";
          temp +="<td>"+i.tareas_completadas+"</td></tr>";
          id++;
        }
        else if(id == 3)
        {
          temp +="<tr>";
          temp +="<td> <img src=/Admin/images/medal-3.png> </td>";
          if(i.Img == null)
          {
            temp += "<td> <img class='Perfil' src='../../images/img-usuarios/defaultProfile.jpg'> </td>";
          }
          else
          {
            temp +="<td> <img class='Perfil' src=../../"+i.Img+"> </td>";
          }
          temp +="<td>"+i.top_performers+"</td>";
          temp +="<td>"+i.tareas_completadas+"</td></tr>";
          id++;
        }
        else{
          temp +="<tr>";
          temp +="<td>"+id+"</td>";
          if(i.Img == null)
          {
            temp += "<td> <img class='Perfil' src='../../images/img-usuarios/defaultProfile.jpg'> </td>";
          }
          else
          {
            temp +="<td> <img class='Perfil' src=../../"+i.Img+"> </td>";
          }
          temp +="<td>"+i.top_performers+"</td>";
          temp +="<td>"+i.tareas_completadas+"</td></tr>";
          id++;
        }
      })
      document.getElementById("contenido").innerHTML = temp;
    }

  });
