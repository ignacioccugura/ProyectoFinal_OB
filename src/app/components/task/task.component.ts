import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iTask } from 'src/app/models/interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task: iTask | undefined ;
  @Output() deleteTask: EventEmitter<iTask> = new EventEmitter<iTask>();
  
  delete(){
    this.deleteTask.emit(this.task);
    console.log("Eliminar tarea",this.task?.title);
  }
}
