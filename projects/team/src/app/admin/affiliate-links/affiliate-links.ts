import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Head } from 'library';

@Component({
  selector: 'app-affiliate-links',
  imports: [
    RouterModule,
    CommonModule,
    Head
  ],
  templateUrl: './affiliate-links.html',
  styleUrl: './affiliate-links.css',
})
export class AffiliateLinks {
constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}
