import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../../../user.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {

  constructor(private http: HttpClient) {}

  users: User[] = [];

  fetchUsers() {
    this.http.get<{results: [User]}>('https://randomuser.me/api/').subscribe({
      next: (data) => {
        this.users.push(data.results[0])
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}