/* DROP TABLE usuario
 CREATE TABLE usuario
(
    ID INT IDENTITY PRIMARY KEY,
    NameUser NVARCHAR(128) NOT NULL,
    Email NVARCHAR(128) NOT NULL,
    Pass NVARCHAR(128) NOT NULL,
    IsAdmin BIT NOT NULL,
    Img NVARCHAR(128) 
    
)  
*/
--INSERT into usuario (NameUser, Email, Pass, IsAdmin) values ('Edith Benvenuto', 'edith_benvenuto@hotmail.com', 'soyedith', '0');
--INSERT into usuario (NameUser, Email, Pass, IsAdmin) values ('Alejandro Pinson', 'alexp@gmail.com', 'soyalex', '0');
--INSERT into usuario (NameUser, Email, Pass, IsAdmin) values ('Joako Beltran', 'joakin@gmail.com', 'soyartur', '1');

--UPDATE usuario set IsAdmin=1 WHERE NameUser='Nezi';
/* CREATE TABLE project
(
    project_key NVARCHAR(50) PRIMARY KEY NOT NULL,
    project_name NVARCHAR(128) NOT NULL,
    project_lead NVARCHAR(128) NOT NULL,    
)   */


/* INSERT into project (project_key, project_name, project_lead) values ('DCM008CX1295', 'Orders & Delivery Schedule', 'Ariel Pons Alonso');
INSERT into project (project_key, project_name, project_lead) values ('DCM001CX1244', 'Delivery Tracking', 'Juan Carlos Barragan Aguilar');
 */

/*Tarea 9 y 28*/
/* CREATE TABLE task
(
    task_key INT IDENTITY PRIMARY KEY,
    summary NVARCHAR(200) NOT NULL,
    task_status NVARCHAR(70) NOT NULL,   
    project_key NVARCHAR(50) NOT NULL,
    task_priority NVARCHAR(50) NOT NULL,
    task_assignee NVARCHAR(128) NOT NULL, 
)   */

/* INSERT into task (summary, task_status, project_key, task_priority, task_assignee) values ('RMS - Online - Display Action Log','Closed','DCM008CX1295','Medium', 'Hector Fonseca');
INSERT into task (summary, task_status, project_key, task_priority, task_assignee) values ('Notify the customer of a new message received from CEMEX Customer Care','Closed','DCM008CX1295','Medium', 'Alejandro Pinson'); */
 
/* CREATE TABLE subtask
(
    subtask_key INT IDENTITY PRIMARY KEY,
    task_key INT NOT NULL,
    subtask_summary NVARCHAR(200) NOT NULL,
    subtask_status NVARCHAR(70) NOT NULL,   
    subtask_priority NVARCHAR(50) NOT NULL,
    subtask_assignee NVARCHAR(128) NOT NULL, 
)  */

/* INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (1 ,'[FE] Display New Action Log Items','Done','Medium', 'Alejandro Pinson');
INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (1 ,'[FE] Consume New API for Action Log','Done','Medium', 'Alejandro Pinson');
INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (1 ,'[API] Design of the new [API] Creation of API [rc] Log Management v5 /v5/rc/logs/{entityType}/{entityId}','Done','Medium', 'German Gutierrez Santillan');
INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (1 ,'[API] Creation of API [rc] Log Management v5 /v5/rc/logs/{entityType}/{entityId}','Done','Medium', 'German Gutierrez Santillan');
INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (1 ,'[NET] Create new api to get the action log','Done','Medium', 'Raymundo Balderrama');
INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (1 ,'[NET] Modify order integration api to add or remove lines','Done','Medium', 'Hector Fonseca');
INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (1 ,'[DB] Create a new SP to get the log data','Done','Medium', 'Jaime Diaz Perez');
INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (1 ,'[QA] Testing','Done','Medium', 'Ariel Pons Alonso'); */

/* INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (2 ,'[QA] Testing','Done','Medium', 'Ariel Pons Alonso'); 
INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (2 ,'[DB] Modify SP Put and Get Orders','Done','Medium', 'Jaime Diaz Perez'); 
INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (2 ,'[NET] Modify Structure API PUT Order by Id add field viewAtNotification','Done','Medium', 'Hugo Zuñiga'); 
INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (2 ,'[NET] Modify Structure API Get Order Detail V8 add Field viewAtNotification','Done','Medium', 'Hugo Zuñiga'); 
INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (2 ,'[NET] Modify Structure API Get Orders V8 add Field viewAtNotification','Done','Medium', 'Hugo Zuñiga'); 
INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (2 ,'[API] Review / Modify Structure API Order Detail v7 method PUT for add field viewedAtNotification','Done','Medium', 'German Gutierrez Santillan'); 
INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (2 ,'[API] Review / Modify Structure API Order Detail v8 method GET for add field viewedAtNotification','Done','Medium', 'German Gutierrez Santillan'); 
INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (2 ,'[DB] Add New Field on OrderHdrTbl','Closed','Medium', 'Jaime Diaz Perez'); 
INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (2 ,'[FE] Add Flag to PUT Order Call in Client to Dismiss Notification','Done','Medium', 'Alejandro Pinson'); 
INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (2 ,'[FE] Integrate Flag to Get Orders For Showing Notifications','Done','Medium', 'Alejandro Pinson'); 
INSERT into subtask (task_key, subtask_summary, subtask_status, subtask_priority, subtask_assignee) values (2 ,'[FE] Add Flag to PUT Order Call in Console When Comment Added/Modified','Done','Medium', 'Eduardo Izaguirre');  */

/* SELECT task.summary
FROM project, task
WHERE project.project_key = task.project_key 
AND project.project_lead = 'Ariel Pons Alonso'; */

/*Subtareas de una persona (de todos los proyectos)*/
/* SELECT subtask.subtask_assignee, subtask.subtask_summary 
FROM project, task, subtask
WHERE project.project_key = task.project_key
AND task.task_key = subtask.task_key
AND subtask.subtask_assignee = 'Alejandro Pinson'; */

/*Personas dentro de un proyecto en especifico (equipo de trabajo) */
--insert into usuario (NameUser, LastName, Email, Pass, IsAdmin) values ('Edith', 'Benvenuto', 'edith@gmail.com','soyedith', 0);
/*  CREATE TABLE logros
(
    id_logro INT IDENTITY PRIMARY KEY,
    img_descripcion NVARCHAR(200) NOT NULL,
)   
 */

/* CREATE TABLE logro_asignado
(
    id INT IDENTITY PRIMARY KEY,
    nombre NVARCHAR(200) NOT NULL,
    id_logro NVARCHAR(70) NOT NULL,   
)   
 */

/*  SELECT COUNT(subtask_key)
 FROM subtask
 where subtask_status = 'Done'
 GROUP by task_key;

 SELECT COUNT(subtask_key)
 FROM subtask
 GROUP by task_key;
 */

 --Subtareas faltantes por proyecto
SELECT project.project_name, COUNT(subtask_key) as pendientes
from subtask
join task
on task.task_key = subtask.task_key
join project 
on project.project_key = task.project_key
where subtask.subtask_status = 'Done'
GROUP by project.project_name;
