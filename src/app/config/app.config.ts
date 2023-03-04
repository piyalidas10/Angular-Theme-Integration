import { Injectable } from '@angular/core';
import { Theme } from '../theme/theme';
import { ThemeService } from '../theme/theme.service';
import { Config } from './config';

@Injectable({
    providedIn: 'root'
})
export class AppConfig {
    private cssPath: string;

    constructor(
        private themeService: ThemeService
    ) { 
        this.setConfig(Theme.DARK);
    }

    setConfig(theme: Theme) {
        this.cssPath = `assets/css-config/${theme}.scss`;
    }
}