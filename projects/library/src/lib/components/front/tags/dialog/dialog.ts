import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-dialog',
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './dialog.html',
  styleUrl: './dialog.css',
})
export class Dialog {

}
