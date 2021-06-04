window.onload = (async () => {
  const opciones = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };
  const respuesta = await fetch("/misLogros/"+ sessionStorage.NameUser, opciones);
  const datos = await respuesta.json();
  const respuesta2 = await fetch("/misLogros2/"+ sessionStorage.NameUser, opciones);
  const datos2 = await respuesta2.json();
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
  console.log(datos2.respuesta2);
  var temp=' ';
  var id=0;
  datos2.respuesta2.forEach((item) => {
  if(id%3==0){
    temp+="<div class='row'>";
  }
  temp+= "<div class='col-6 col-sm-2'> <img class='fotoLogro' src='../"+(item.img_descripcion)+"'> <h2 id='textoLogros'>"+(item.nombre_logro)+"</h2></div>";
  if(id%3==2){
    console.log(id);
    temp+="</div>";
  }
  id++;
  })
  document.getElementById("container").innerHTML=temp;
  console.log(temp);

});