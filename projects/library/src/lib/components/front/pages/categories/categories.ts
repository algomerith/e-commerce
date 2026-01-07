import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-categories',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  // ============================================================
  //  les catétories d'offres
  // ============================================================

  categories = [
    { id: 'mode', label: 'Mode & accessoires', icon: '👗' },
    { id: 'tech', label: 'High-tech & électronique', icon: '📱' },
    { id: 'home', label: 'Maison & déco', icon: '🏠' },
    { id: 'sport', label: 'Sport & loisirs', icon: '🏋️' },
    { id: 'beauty', label: 'Beauté & bien-être', icon: '💄' },
    { id: 'food', label: 'Alimentation & boissons', icon: '🍽️' },
    { id: 'health', label: 'Santé & hygiène', icon: '🩺' },
    { id: 'culture', label: 'Loisirs & culture', icon: '🎭' },
    { id: 'auto', label: 'Auto & mobilité', icon: '🚗' },
    { id: 'kids', label: 'Enfants & bébés', icon: '🧸' },
    { id: 'transport', label: 'Transport / Billetterie', icon: '🎫' },
  ];
}
