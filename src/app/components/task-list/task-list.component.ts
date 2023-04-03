import { Component, OnInit} from '@angular/core';
import { Levels, iTask } from 'src/app/models/interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  // TODO reformular como lista de tareas
  tarea1: iTask = {
    title: "Cocinar",
    description: "Preparar canelones",
    completed: false,
    level: Levels.Info
  }

  tarea2: iTask = {
    title: "Estudiar",
    description: "Leer proyecto final",
    completed: true,
    level: Levels.Urgent
  }

  ngOnInit(): void {
    
  }

  deleteTask(task: iTask){
    alert(`Se procede a eliminar la tarea ${task.title}`)
  }
}
