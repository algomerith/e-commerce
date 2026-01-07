import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Head } from 'library';
import { Header } from 'library';
import { Footer } from 'library';
import { Details } from 'library';

@Component({
  selector: 'app-detail',
  imports: [
    RouterModule, 
    CommonModule, 
    Head, 
    Header, 
    Footer,
    Details
  ],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {

}
