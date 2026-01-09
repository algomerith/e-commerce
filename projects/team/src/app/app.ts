import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('team');
  protected titleService = inject(Title);
  protected router = inject(Router);

   ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.setTitleFromUrl(event.urlAfterRedirects);
    });
  }

  setTitleFromUrl(url: string) {
    const clean = url.startsWith('/') ? url.slice(1) : url;
    const path = clean === '' ? 'login' : clean;
    const title = `${this.title()} / ${path}`;
    this.titleService.setTitle(title);
  }
}
