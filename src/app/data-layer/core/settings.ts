import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  baseUrl = 'https://api.github.com/';

  enableCache = true;
}
