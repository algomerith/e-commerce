import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav } from '../nav/nav';

@Component({
  selector: 'lib-footer',
  imports: [
    RouterModule,
    CommonModule,
    Nav

  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {

  ngOnInit(): void {}

  @Input() footerType!: string;
}
