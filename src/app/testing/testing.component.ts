import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  task: Task = {
    name: 'Login Page',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Logo', completed: false, color: 'primary'},
      {name: 'Title', completed: false, color: 'primary'},
      {name: 'Account identification', completed: false, color: 'primary'},
      {name: 'Password', completed: false, color: 'primary'},
      {name: 'Link to reset password', completed: false, color: 'primary'},
      {name: 'Link to sign up', completed: false, color: 'primary'}
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

