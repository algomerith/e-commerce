import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-img',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './img.html',
  styleUrl: './img.css',
})
export class Img {

}
