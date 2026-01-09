import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Head } from 'library';

@Component({
  selector: 'app-account',
  imports: [
    RouterModule,
    CommonModule,
    Head
  ],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account {
  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  deleteAccount(): void {
    // plus tard :
    // confirmation modal
    // appel API
  }
}
