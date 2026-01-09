import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Head } from 'library';

@Component({
  selector: 'app-alerts',
  imports: [
    RouterModule,
    CommonModule,
    Head
  ],
  templateUrl: './alerts.html',
  styleUrl: './alerts.css',
})
export class Alerts {
  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
