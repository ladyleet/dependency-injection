export class DependencyInjectionPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dependency-injection-app h1')).getText();
  }
}
