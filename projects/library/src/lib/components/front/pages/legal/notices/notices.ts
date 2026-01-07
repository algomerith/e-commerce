import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-notices',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './notices.html',
  styleUrl: './notices.css',
})
export class Notices {

}
