import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-a',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './a.html',
  styleUrl: './a.css',
})
export class A {

}
