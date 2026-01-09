import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Head, Layout } from 'library';
import { SignIn } from 'library';


@Component({
  selector: 'app-login',
  imports: [
    RouterModule,
    CommonModule,
    Layout,
    // SignIn,
    Head
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
