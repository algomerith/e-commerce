import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Head } from 'library';

@Component({
  selector: 'app-settings',
  imports: [
    RouterModule,
    CommonModule,
    Head
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {

}
