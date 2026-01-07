import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-form',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

}
