import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'lib-products',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  // ============================================================
  // liste (d'offres) d'une catégorie (sélectionnée)
  // ============================================================
  filteredOffers: any[] = [];
  groupedOffers: Record<string, any[]> = {};
  currentCategory: string = '';

  constructor(private route: ActivatedRoute) { }

  offers = [
    /* ================= TECH ================= */
    {
      id: 1,
      title: 'Casque Bluetooth Sony',
      category: 'tech',
      price: 59,
      partner: 'TechStore',
    },
    {
      id: 2,
      title: 'Écouteurs JBL',
      category: 'tech',
      price: 39,
      partner: 'TechStore',
    },
    {
      id: 3,
      title: 'Smartphone Samsung Galaxy A54',
      category: 'tech',
      price: 249,
      partner: 'MobileWorld',
    },
    {
      id: 4,
      title: 'Tablette Lenovo M10',
      category: 'tech',
      price: 129,
      partner: 'MobileWorld',
    },

    /* ================= MODE ================= */
    {
      id: 5,
      title: 'Veste hiver homme',
      category: 'mode',
      price: 79,
      partner: 'Mode & Co',
    },
    {
      id: 6,
      title: 'Manteau femme laine',
      category: 'mode',
      price: 99,
      partner: 'Mode & Co',
    },
    {
      id: 7,
      title: 'Baskets Nike Air',
      category: 'mode',
      price: 89,
      partner: 'UrbanStyle',
    },
    {
      id: 8,
      title: 'Jean slim homme',
      category: 'mode',
      price: 49,
      partner: 'UrbanStyle',
    },

    /* ================= MAISON ================= */
    {
      id: 9,
      title: 'Aspirateur sans sac',
      category: 'home',
      price: 149,
      partner: 'MaisonPlus',
    },
    {
      id: 10,
      title: 'Robot cuisine multifonction',
      category: 'home',
      price: 199,
      partner: 'MaisonPlus',
    },
    {
      id: 11,
      title: 'Lampe design LED',
      category: 'home',
      price: 39,
      partner: 'DecoHouse',
    },

    /* ================= SPORT ================= */
    {
      id: 12,
      title: 'Vélo elliptique',
      category: 'sport',
      price: 299,
      partner: 'SportPro',
    },
    {
      id: 13,
      title: 'Haltères réglables',
      category: 'sport',
      price: 59,
      partner: 'SportPro',
    },
    {
      id: 14,
      title: 'Tapis de yoga',
      category: 'sport',
      price: 19,
      partner: 'FitLife',
    },

    /* ================= BEAUTE ================= */
    {
      id: 15,
      title: 'Sèche-cheveux professionnel',
      category: 'beauty',
      price: 49,
      partner: 'BeautyShop',
    },
    {
      id: 16,
      title: 'Coffret soins visage',
      category: 'beauty',
      price: 29,
      partner: 'BeautyShop',
    },

    /* ================= ALIMENTATION ================= */
    {
      id: 17,
      title: 'Panier anti-gaspillage',
      category: 'food',
      price: 5,
      partner: 'FreshMarket',
    },
    {
      id: 18,
      title: 'Lot produits bio',
      category: 'food',
      price: 12,
      partner: 'BioNature',
    },

    /* ================= TRANSPORT ================= */
    {
      id: 19,
      title: 'Billet Train Paris → Lyon',
      category: 'transport',
      price: 39,
      partner: 'RailDeal',
    },
    {
      id: 20,
      title: 'Billet Avion Marseille → Rome',
      category: 'transport',
      price: 79,
      partner: 'FlyNow',
    },
  ];

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const category = params['category'];
      this.currentCategory = category || '';
      this.filteredOffers = category
        ? this.offers.filter((o) => o.category === category)
        : this.offers;
      this.groupByPartner();
    });
  }

  groupByPartner() {
    this.groupedOffers = {};

    this.filteredOffers.forEach((offer) => {
      if (!this.groupedOffers[offer.partner]) {
        this.groupedOffers[offer.partner] = [];
      }
      this.groupedOffers[offer.partner].push(offer);
    });
  }

  goBack() {
    window.history.back();
  }
}
