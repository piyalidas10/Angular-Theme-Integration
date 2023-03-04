import { Component, Renderer2 } from '@angular/core';
import { Theme } from './theme/theme';
import {ThemeService} from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tracker';
  themeArr: Theme[];
  
  constructor(
    private themeService: ThemeService,
    private renderer2: Renderer2,
  ) {
    this.themeArr = [Theme.LIGHT, Theme.DARK];
    console.log('themeArr => ', this.themeArr);
  }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.themeService.setTheme(Theme.LIGHT, this.renderer2);
  }

  changeTheme(theme: Theme) {
    this.themeService.setTheme(theme, this.renderer2);
  }
}
