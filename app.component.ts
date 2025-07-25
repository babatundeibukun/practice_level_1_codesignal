import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import jsonData  from './data/data.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practice';
  todoItems: any[] = jsonData.todoItems;
  inProgressItems: any[] = jsonData.inProgressItems;
  doneItems: any[] = jsonData.doneItems;

 // Track form input values
  newTask = {
    title: '',
    description: ''
  };

  createTask(event: Event) {
    event.preventDefault(); // Prevent form from refreshing the page

    if (this.newTask.title && this.newTask.description) {
      const newTodo = {
        title: this.newTask.title,
        description: this.newTask.description,
        // status: 'TO_DO',
        // userId: 'userId1' // you can update or generate this dynamically later
      };

      this.todoItems.push(newTodo);

      // Reset the form
      this.newTask = { title: '', description: '' };
    }
  }
}



