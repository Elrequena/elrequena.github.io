import { Component, signal, effect, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkMode = signal(this.getInitialTheme());

  @HostBinding('attr.data-theme')
  get themeAttr() {
    return this.darkMode() ? 'dark' : 'light';
  }

  projects = signal([
    {
      name: 'Responsive Store',
      description: 'Tienda responsiva en desarrollo',
      url: 'https://elrequena.github.io/responisve-store',
      icon: 'store',
      gradient: 'var(--gradient-2)',
      status: 'En desarrollo'
    },
    {
      name: 'Code Editor',
      description: 'Editor de codigo en desarrollo',
      url: 'https://elrequena.github.io/code-editor',
      icon: 'code',
      gradient: 'var(--gradient-3)',
      status: 'En desarrollo'
    }
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
