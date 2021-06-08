const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const sql = require("mssql");
const config = require("./config");

app.use("/", express.static("public"));
app.use(express.json());

app.post("/login", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    let query = "select * from usuario where Email='" + req.body.email + "'";
    //console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset[0]);
        let login = false;
        let IsAdmin = false;
        if (recordset.length > 0) {
          if (recordset[0].Email === req.body.email && recordset[0].Pass === req.body.pass) {
            login = true;
            IsAdmin = recordset[0].IsAdmin;
          }
        }
        //console.log(login);
        res.json({
          login: login,
          IsAdmin, respuesta:recordset[0]
        });
    });
  });
  console.log("Post LOGIN");
  console.log(req.body);
});

app.get("/leaderboard", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    let query =
    "SELECT subtask.subtask_assignee AS top_performers, COUNT(subtask_assignee) AS tareas_completadas, usuario.Img FROM subtask INNER JOIN usuario ON subtask.subtask_assignee=usuario.NameUser WHERE subtask_status = 'Done' GROUP BY subtask_assignee, usuario.Img ORDER BY tareas_completadas DESC;";

    console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset);
      res.json({
        respuesta: recordset
      });
    });
  });
});

app.get("/userleaderboard/:NameUser", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    let query =
    "SELECT subtask_assignee AS top_performers, usuario.Img FROM subtask INNER JOIN usuario ON subtask.subtask_assignee=usuario.NameUser WHERE subtask_status = 'Done' GROUP BY subtask_assignee, usuario.Img ORDER BY COUNT(subtask_assignee) DESC;"

    console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset);
      res.json({
        respuesta: recordset
      });
    });
  });
});

app.get("/tareasP", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    //console.log(req.params.NameUser);
    let query =
      "SELECT  task_key, COUNT (task_key)  as 'pendientes' FROM subtask  where subtask_status='To do' group by task_key;";
    console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset);
      res.json(
        recordset
      );
    });
  });
});

app.get("/tareasC", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    //console.log(req.params.NameUser);
    let query =
      "SELECT  task_key, COUNT (task_key)  as 'completadas' FROM subtask  where subtask_status='Done' group by task_key;";
    console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset);
      res.json(
        recordset
      );
    });
  });
});

app.get("/tareasNombres", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    //console.log(req.params.NameUser);
    let query =
      "SELECT  task_key, subtask_assignee, COUNT (subtask_assignee) as 'completadas' from subtask where subtask_status='Done' group by subtask_assignee, task_key;";
    console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset);
      res.json(
        recordset
      );
    });
  });
});



app.get("/misTareas/:NameUser", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    //console.log(req.params.NameUser);
    let query =
      "SELECT subtask_summary, subtask_priority, subtask_status from subtask WHERE subtask_assignee = '"+req.params.NameUser+"'";
    console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset);
      res.json({
        respuesta: recordset
      });
    });
  });
});


app.get("/MiPerfil/:NameUser", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    //console.log(req.params.NameUser);
    let query =
      "SELECT * from usuario WHERE NameUser = '"+req.params.NameUser+"'";
    console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset[0]);
      res.json(recordset[0]
      );
    });
  });
});


app.get("/misLogros/:NameUser", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    //console.log(req.params.NameUser);
    let query =
      "SELECT * from usuario WHERE NameUser = '"+req.params.NameUser+"'";
    console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset);
      res.json({
        respuesta: recordset
      });
    });
  });
});

app.get("/misLogros2/:NameUser", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    //console.log(req.params.NameUser);
    let query =
    "SELECT logros.id_logro, img_descripcion, nombre_logro FROM logros JOIN logro_asignado ON logros.id_logro = logro_asignado.id_logro JOIN usuario on usuario.NameUser = logro_asignado.nombre WHERE NameUser ='"+req.params.NameUser+"'"
    console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset);
      res.json({
        respuesta2: recordset
      });
    });
  });
});

app.get("/Dashboard/", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    let query =
    "SELECT subtask_priority, COUNT(subtask_priority) AS done_tasks FROM subtask WHERE subtask_status = 'Done' GROUP BY subtask_priority;"
    console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset);
      res.json({
        respuesta: recordset
      });
    });
  });
});

app.get("/Dashboard2/", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    let query =
    "SELECT subtask_priority, COUNT(subtask_priority) AS todo_tasks FROM subtask WHERE subtask_status = 'To do' GROUP BY subtask_priority;"
    console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset);
      res.json({
        respuesta2: recordset
      });
    });
  });
});

app.get("/Dashboard3/", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    let query = "SELECT project.project_name, COUNT(subtask_key) as subtareasPendientes from subtask join task on task.task_key = subtask.task_key join project on project.project_key = task.project_key where subtask.subtask_status = 'To do' GROUP by project.project_name;"
    console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset);
      res.json({
        respuesta3: recordset
      });
    });
  });
});
app.get("/Dashboard4/", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    let query = "SELECT project.project_name, COUNT(subtask_key) as subtareasPendientes from subtask join task on task.task_key = subtask.task_key join project on project.project_key = task.project_key where subtask.subtask_status = 'Done' GROUP by project.project_name;"
    console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset);
      res.json({
        respuesta4: recordset
      });
    });
  });
});

app.get("/status/", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    let query ="SELECT NameUser from usuario;"
    console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset);
      res.json({
        respuesta: recordset
      });
    });
  });
});

app.get("/status2/", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    let query ="SELECT * from subtask;"
    console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset);
      res.json({
        respuesta2: recordset
      });
    });
  });
});

app.get("/status3/", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    let query ="SELECT project_name from project"
    console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset);
      res.json({
        respuesta3: recordset
      });
    });
  });
});

app.get("/status4/", (req, res) => {
  const conn = sql.connect(config, (err) => {
    if (err) console.log(err);
    const request = new sql.Request();
    let query ="SELECT project.project_name, subtask.subtask_assignee from subtask join task on task.task_key = subtask.task_key join project on project.project_key = task.project_key GROUP by subtask.subtask_assignee, project.project_name;"
    console.log(query);
    request.query(query, (err, { recordset }) => {
      if (err) console.log(err);
      console.log(recordset);
      res.json({
        respuesta4: recordset
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
