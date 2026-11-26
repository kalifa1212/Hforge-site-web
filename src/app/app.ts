import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { RouterOutlet } from '@angular/router';
import { DEV_SERVICES, NETWORK_SERVICES, SITE, STACK, VALUES } from './site-data';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('hforge');
  readonly site = SITE;
  readonly devServices = DEV_SERVICES;
  readonly networkServices = NETWORK_SERVICES;
  readonly stack = STACK;
  readonly values = VALUES;
  readonly year = new Date().getFullYear();

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  readonly nav = [
    { id: 'services', label: 'Services' },
    { id: 'hackathon', label: 'Hackathon' },
    { id: 'about', label: 'À propos' },
    { id: 'contact', label: 'Contact' },
  ];

  form = { name: '', email: '', subject: '', message: '' };

  private observer?: IntersectionObserver;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            this.observer?.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    this.host.nativeElement.querySelectorAll('.reveal').forEach((el) => this.observer!.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  go(id: string): void {
    this.menuOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Pas de backend : le formulaire ouvre le client mail de l'utilisateur.
  send(): void {
    const body = `Nom : ${this.form.name}\nEmail : ${this.form.email}\n\n${this.form.message}`;
    const url = `mailto:${SITE.contact.email}?subject=${encodeURIComponent(
      this.form.subject || 'Contact depuis le site HForge',
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  }
}
