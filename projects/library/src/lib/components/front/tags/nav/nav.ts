import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-nav',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit {

  ngOnInit(): void { }

  @Input() navType!: string;
}
