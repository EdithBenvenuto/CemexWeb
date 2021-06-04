const boton = document.getElementById("boton");
boton.addEventListener("click", async () => {
  const email = document.getElementById("exampleInputEmail1");
  const pass = document.getElementById("exampleInputPassword1");
  //alert(userName.value + " " + pass.value);
  // Enviar datos al servidor mediante un POST
  //userName -> email
  const data = { email: email.value, pass: pass.value };
  const opciones = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const respuesta = await fetch("/login", opciones);
  const datos = await respuesta.json();
  //console.log(datos);
  if (datos.login) {
    sessionStorage.setItem("ID", datos.respuesta.ID);
    sessionStorage.setItem("NameUser", datos.respuesta.NameUser);
    if(datos.IsAdmin){
      window.location = "../Admin/html/dashboard.html";
    }
    else{
      window.location = "index-sesion-iniciada.html";
    }
    //alert(sessionStorage.NameUser);
  } else {
    alert("Datos incorrectos");
    window.location = "login.html";
  }
});


