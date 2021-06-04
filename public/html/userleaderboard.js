window.onload = (async () => {
    const opciones = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    const respuesta = await fetch("/userleaderboard/"+sessionStorage.NameUser, opciones);
    const datos = await respuesta.json();
  
    //datos.respuesta
    var id=1;
    console.log(datos.respuesta);
    if((datos.respuesta).length > 0){
      var temp = '';
      (datos.respuesta).forEach((i)=>{
        if(id == 1)
        {
          temp +="<div class='row'>";
          temp +="<div class='col-sm-2 position'><img src=/Admin/images/medal-1.png></div>";
          if(i.Img == null)
          {
            temp += "<div class='col-sm-10 userPhoto'><img class='Perfil' src='../../images/img-usuarios/defaultProfile.jpg'>";
          }
          else
          {
            temp +="<div class='col-sm-10 userPhoto'><img class='Perfil' src=../../"+i.Img+">";
          }
          temp +="<div class='UserName'>"+i.top_performers+"</div></div></div>";
        }
        else if(id == 2)
        {
          temp +="<div class='row'>";
          temp +="<div class='col-sm-2 position'> <img src=/Admin/images/medal-2.png> </div>";
          if(i.Img == null)
          {
            temp += "<div class='col-sm-10 userPhoto'> <img class='Perfil' src='../../images/img-usuarios/defaultProfile.jpg'>";
          }
          else
          {
            temp +="<div class='col-sm-10 userPhoto'> <img class='Perfil' src=../../"+i.Img+">";
          }
          temp +="<div class='UserName'>"+i.top_performers+"</div></div></div>";
        }
        else if(id == 3)
        {
          temp +="<div class='row'>";
          temp +="<div class='col-sm-2 position'> <img src=/Admin/images/medal-3.png> </div>";
          if(i.Img == null)
          {
            temp += "<div class='col-sm-10 userPhoto'> <img class='Perfil' src='../../images/img-usuarios/defaultProfile.jpg'>";
          }
          else
          {
            temp +="<div class='col-sm-10 userPhoto'> <img class='Perfil' src=../../"+i.Img+">";
          }
          temp +="<div class='UserName'>"+i.top_performers+"</div></div></div>";
        }
        else if(id > 10){
          return false;
        }
        else{
          temp +="<div class='row'>";
          temp +="<div class='col-sm-2 position'>"+id+"</div>";
          if(i.Img == null)
          {
            temp += "<div class='col-sm-10 userPhoto'> <img class='Perfil' src='../../images/img-usuarios/defaultProfile.jpg'>";
          }
          else
          {
            temp +="<div class='col-sm-10 userPhoto'> <img class='Perfil' src=../../"+i.Img+">";
          }
          temp +="<div class='UserName'>"+i.top_performers+"</div></div></div>";
        }
        id++;
      })
      id=1;

      (datos.respuesta).forEach((i)=>{
        if(i.top_performers==sessionStorage.NameUser){
          document.getElementById("lugar").innerHTML="Tu lugar es: "+id;
          if(datos.respuesta[id-1].Img == null)
          {
            document.getElementById("foto").src= "../../images/img-usuarios/defaultProfile.jpg";
          }
          else
          {
            document.getElementById("foto").src="../../"+ datos.respuesta[id-1].Img;
          }
        }
        id++;
      })
      document.getElementById("contenido").innerHTML = temp;
      document.getElementById("nombreU").innerHTML="<h1 >"+sessionStorage.NameUser+"</h1>"
    }


  });