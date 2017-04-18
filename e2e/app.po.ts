import { browser, element, by } from 'protractor';

export class AgendaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pr-root h1')).getText();
  }
}
