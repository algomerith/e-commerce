import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Head } from 'library';

@Component({
  selector: 'app-database',
  imports: [
    RouterModule,
    CommonModule,
    Head
  ],
  templateUrl: './database.html',
  styleUrl: './database.css',
})
export class Database {

}
