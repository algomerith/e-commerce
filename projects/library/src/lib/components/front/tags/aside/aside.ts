import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-aside',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {

}
