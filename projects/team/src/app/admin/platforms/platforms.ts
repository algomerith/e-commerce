import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Head } from 'library';

@Component({
  selector: 'app-platforms',
  imports: [
    RouterModule,
    CommonModule,
    Head
  ],
  templateUrl: './platforms.html',
  styleUrl: './platforms.css',
})
export class Platforms {

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

}
