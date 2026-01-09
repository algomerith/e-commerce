import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'lib-sign-in',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {

}
