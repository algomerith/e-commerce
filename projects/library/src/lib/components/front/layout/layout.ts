import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'lib-layout',
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit {

  isSidebarOpen = false;
  layoutType!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.layoutType = this.route.snapshot.data['layoutType'];
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
  }

}
