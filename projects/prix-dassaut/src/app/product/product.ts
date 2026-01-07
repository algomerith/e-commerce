import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Head } from 'library';
import { Header } from 'library';
import { Footer } from 'library';
import { Products } from 'library';



@Component({
  selector: 'app-product',
  imports: [
    RouterModule, 
    CommonModule, 
    Head, 
    Header, 
    Footer,
    Products,
  ],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

}
