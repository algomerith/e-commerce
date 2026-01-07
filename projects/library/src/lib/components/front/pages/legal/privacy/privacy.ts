import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-privacy',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
})
export class Privacy {

}
