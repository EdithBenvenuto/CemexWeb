window.onload = (async () => {
    const opciones = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    const respuesta = await fetch("/Dashboard/", opciones);
    const respuesta2 = await fetch("/Dashboard2/", opciones);
    const respuesta3 = await fetch("/Dashboard3/", opciones);
    const respuesta4 = await fetch("/Dashboard4/", opciones);
    const datos = await respuesta.json();
    const datos2 = await respuesta2.json();
    const datos3 = await respuesta3.json();
    const datos4 = await respuesta4.json();
    const ctx1 = document.getElementById("pie_chart").getContext("2d");
    const data=[];
    const etiqueta=[];
    datos.respuesta.forEach((item) => {
        data.push(item.done_tasks);
      });
    datos.respuesta.forEach((item) => {
        etiqueta.push(item.subtask_priority);
      });
    const chart1 = new Chart(ctx1, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: data,
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 206, 86)",
            ],
          },
        ],
        labels: etiqueta,
      },
      options: {
        plugins: {
            title: {
                display: true,
                text: '# DE SUBTAREAS COMPLETADAS POR PRIORIDAD',
                padding: {
                    top: 10,
                    bottom: 30
                }
            }
        }
      },
    });
    //NUEVA GRAFICA
    const data2=[];
    const etiqueta2=[];
    const ctx2 = document.getElementById("pie_chart2").getContext("2d");
    console.log(datos2.respuesta2);
    datos2.respuesta2.forEach((item) => {
        data2.push(item.todo_tasks);
      });
    datos2.respuesta2.forEach((item) => {
        etiqueta2.push(item.subtask_priority);
      });
    const chart2 = new Chart(ctx2, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: data2,
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 206, 86)",
            ],
          },
        ],
        labels: etiqueta2,
      },
      options: {
        plugins: {
            title: {
                display: true,
                text: '# DE SUBTAREAS PENDIENTES POR PRIORIDAD',
                padding: {
                    top: 10,
                    bottom: 30
                }
            }
        }
      },
    });

//Nueva grafica 3
    const data3=[];
    const etiqueta3=[];
    const ctx3 = document.getElementById("bar_chart1").getContext("2d");
    //console.log(datos3.respuesta3);
    datos3.respuesta3.forEach((item) => {
        data3.push(item.subtareasPendientes);
      });
    datos3.respuesta3.forEach((item) => {
        etiqueta3.push(item.project_name);
    });
    const chart3 = new Chart(ctx3, {
      type: "bar",
      data: {
        labels: [...etiqueta3],
        datasets: [
          { 
            label: 'Subtareas pendientes',
            data: [...data3], 
            backgroundColor: [
              "rgb(255, 99, 132)",
               "rgb(54, 162, 235)"
             ],
            },
           ],
         },
      options: {
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: '# DE SUBTAREAS PENDIENTES POR PROYECTO',
                padding: {
                    top: 10,
                    bottom: 30
                }
            }
        }
      },
    });
//Nueva grafica 4
const data4=[];
const etiqueta4=[];
const ctx4 = document.getElementById("bar_chart2").getContext("2d");
datos4.respuesta4.forEach((item) => {
    data4.push(item.subtareasPendientes);
  });
datos4.respuesta4.forEach((item) => {
    etiqueta4.push(item.project_name);
});
const chart4 = new Chart(ctx4, {
  type: "bar",
  data: {
    labels: [...etiqueta3],
    datasets: [
      { 
        label: 'Subtareas completadas',
        data: [...data4], 
        backgroundColor: [
          "rgb(255, 99, 132)",
           "rgb(54, 162, 235)"
         ],
        },
       ],
     },
  options: {
    indexAxis: 'y',
    plugins: {
        title: {
            display: true,
            text: '# DE SUBTAREAS COMPLETADAS POR PROYECTO',
            padding: {
                top: 10,
                bottom: 30
            }
        }
    }
  },
});
  });