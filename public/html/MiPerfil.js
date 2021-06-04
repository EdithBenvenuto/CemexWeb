window.onload = (async () => {
    const opciones = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    const respuesta = await fetch("/MiPerfil/"+ sessionStorage.NameUser, opciones);
    const datos = await respuesta.json();

    //datos.respuesta
    if((datos.respuesta).length > 0){
      document.getElementById("nombre").innerHTML = sessionStorage.NameUser;
      if(datos.respuesta[0].Img == null)
      {
        document.getElementById("Foto-Perfil").src= "../images/img-usuarios/defaultProfile.jpg";
      }
      else
      {
        document.getElementById("Foto-Perfil").src= "../"+(datos.respuesta[0].Img);
      }
    }
  });