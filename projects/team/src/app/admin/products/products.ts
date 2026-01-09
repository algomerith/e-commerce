import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Head } from 'library';

@Component({
  selector: 'app-products',
  imports: [
    RouterModule,
    CommonModule,
    Head
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products = [
    {
      id: 'PRD_43821',
      name: 'Nike Air Max 90',
      advertiser: 'Nike',
      platform: 'Awin',
      price: 129,
      status: 'Actif',
      updatedAt: '02/01/2026'
    },
    {
      id: 'PRD_52110',
      name: 'Adidas Ultraboost',
      advertiser: 'Adidas',
      platform: 'Awin',
      price: 159,
      status: 'Inactif',
      updatedAt: '28/12/2025'
    }
  ];

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
