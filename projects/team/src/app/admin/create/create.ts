import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Head } from 'library';

@Component({
  selector: 'app-create',
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Head
  ],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
 constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  createUser(): void {
    // PLUS TARD :
    // validation
    // appel API
    // redirection vers la liste
    console.log('Création utilisateur');
  }
}
