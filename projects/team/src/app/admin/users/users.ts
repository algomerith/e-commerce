import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Head } from 'library';

@Component({
  selector: 'app-users',
  imports: [
    RouterModule,
    CommonModule,
    Head
  ],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {

  users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'admin@prixdassaut.com',
      role: 'Admin',
      status: 'Actif'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'manager@prixdassaut.com',
      role: 'Manager',
      status: 'Suspendu'
    }
  ];

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  deleteUser(userId: number): void {
    // plus tard :
    // confirmation modal
    // appel API
    console.log('Suppression user', userId);
  }
}
