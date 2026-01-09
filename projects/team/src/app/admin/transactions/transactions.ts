import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Head } from 'library';

@Component({
  selector: 'app-transactions',
  imports: [
    RouterModule,
    CommonModule,
    Head
  ],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css',
})
export class Transactions {
 constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
