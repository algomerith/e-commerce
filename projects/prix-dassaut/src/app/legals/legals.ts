import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Cgu } from 'library';
import { Cgv } from 'library';
import { Cookies } from 'library';
import { Notices } from 'library';
import { Privacy } from 'library';
import { Head } from 'library';
import { Header } from 'library';
import { Footer } from 'library';

@Component({
  selector: 'app-legals',
  imports: [
    RouterModule,
    CommonModule,
    Head,
    Header,
    Footer,
    Cgv,
    Cgu,
    Notices,
    Cookies,
    Privacy
  ],
  templateUrl: './legals.html',
  styleUrl: './legals.css',
})
export class Legals {
private route = inject(ActivatedRoute);

  private legalTypeSignal = signal<string | null>(null);

  constructor() {
    this.route.paramMap.subscribe(params => {
      this.legalTypeSignal.set(params.get('legalType'));
    });
  }

  legalType = computed(() => this.legalTypeSignal());
}
