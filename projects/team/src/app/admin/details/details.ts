import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Head } from 'library';

@Component({
  selector: 'app-details',
  imports: [
    RouterModule,
    CommonModule,
    Head
  ],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
 constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}
