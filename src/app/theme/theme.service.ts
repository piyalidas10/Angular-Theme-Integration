import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { Theme } from './theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private style: HTMLLinkElement;
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  setConfig(theme: Theme) {

  }

  setTheme(theme: Theme, renderer2: Renderer2) {
    // const cssPath = `../css-lib/${theme}.css`;
    
    // // Create a link element via Angular's renderer to avoid SSR troubles
    // this.style = renderer2.createElement('link') as HTMLLinkElement;

    // // Set type of the link item and path to the css file
    // renderer2.setProperty(this.style, 'rel', 'stylesheet');
    // renderer2.setProperty(this.style, 'href', cssPath);

    // // Add the style to the head section
    // renderer2.appendChild(this.document.head, this.style);
  }
}
