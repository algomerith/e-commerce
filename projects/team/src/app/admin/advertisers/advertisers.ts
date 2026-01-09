import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Head } from 'library';

@Component({
  selector: 'app-advertisers',
  imports: [
    RouterModule,
    CommonModule,
    Head
  ],
  templateUrl: './advertisers.html',
  styleUrl: './advertisers.css',
})
export class Advertisers {
constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}
