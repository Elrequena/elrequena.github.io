import { Component, signal, effect, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { CircuitBackgroundComponent } from './components/circuit-background/circuit-background.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectCardComponent, Project } from './components/project-card/project-card.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CircuitBackgroundComponent,
    HeaderComponent,
    HeroComponent,
    ProjectCardComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkMode = signal(this.getInitialTheme());

  @HostBinding('attr.data-theme')
  get themeAttr() {
    return this.darkMode() ? 'dark' : 'light';
  }

  projects = signal<Project[]>([
    {
      name: 'Code Editor',
      description: 'Editor rápido de código TypeScript',
      url: 'https://elrequena.github.io/code-editor',
      icon: 'code',
      gradient: 'var(--gradient-3)',
      status: 'Completado'
    },
    {
      name: 'Responsive Store',
      description: 'Tienda responsiva en desarrollo',
      url: 'https://elrequena.github.io/responisve-store',
      icon: 'store',
      gradient: 'var(--gradient-2)',
      status: 'En desarrollo'
    },
  ]);

  constructor() {
    effect(() => {
      const theme = this.darkMode() ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
  }

  toggleTheme(): void {
    this.darkMode.update(v => !v);
  }

  private getInitialTheme(): boolean {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
