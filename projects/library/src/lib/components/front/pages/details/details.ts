import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OffersService } from './details.service';
import { Offer } from './details.interface';

@Component({
  selector: 'lib-details',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  
  offer?: Offer;
  affiliateLink = '';

  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService,
    private location: Location
  ) { }

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('category');
    const idParam = this.route.snapshot.paramMap.get('id');

    if (!category || !idParam) return;

    const id = Number(idParam);
    this.offer = this.offersService.getOfferByCategoryAndId(category, id);

    if (this.offer) {
      this.affiliateLink = `https://track.affiliation.com/click?aff_id=XXXX&product_id=${this.offer.id}`;
    }
  }

  goBack() {
    this.location.back();
  }
}
