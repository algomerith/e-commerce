import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-not-found',
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {

}
