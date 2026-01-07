import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Categories } from 'library';
import { Head } from 'library';
import { Header } from 'library';
import { Footer } from 'library';


@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    CommonModule,
    Head,
    Header,
    Footer,
    Categories,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
