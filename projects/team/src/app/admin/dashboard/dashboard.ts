import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Head, Layout } from 'library';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterModule,
    CommonModule,
    Head
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
