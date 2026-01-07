import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav } from '../nav/nav';

@Component({
  selector: 'lib-header',
  imports: [
    CommonModule,
    RouterModule,
    Nav
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  ngOnInit(): void { }

  @Input() headerType!: string;
  @Input() isOpen = false;

  toggleAside() {
    this.isOpen = !this.isOpen;
  }
}
