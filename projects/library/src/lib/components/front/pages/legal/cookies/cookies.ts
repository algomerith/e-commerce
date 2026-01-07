import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-cookies',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './cookies.html',
  styleUrl: './cookies.css',
})
export class Cookies {

}
