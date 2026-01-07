import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-button',
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

}
