import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = '';
  variants = {
    tabooki: true,
    piju: true
  };

  public generate() {
    const base = [
      'squeeny',
      'cata',
      'pi',
      'boobie',
      'pole',
      'ta',
      'eany',
      'tole',
      'pilla',
      'bu'
    ],
    piju = [
      'piju',
      'manji',
      'diabla'
    ],
    tabooki = [
      'taboo',
      'kiki',
      'buki'
    ];
    let cationary = base;
    if (this.variants.tabooki) {
      cationary = cationary.concat(tabooki);
    }
    if (this.variants.piju) {
      cationary = cationary.concat(piju);
    }
    let iterations = Math.floor(Math.random() * 4) + 2;
    this.name = '';
    while (iterations > 0 && cationary.length > 0) {
      const i = Math.floor(Math.random() * cationary.length);
      this.name += cationary[i];
      cationary.splice(i, 1);
      iterations--;
    }
    return this.capitalize();
  }

  private capitalize() {
    const name = document.getElementById('name');
    name.style.fontSize = 'calc(10px + 10vw)';
    if (this.name.length > 10) {
      name.style.fontSize = 'calc(10px + 9vw)';
    }
    if (this.name.length > 15) {
      name.style.fontSize = 'calc(10px + 8vw)';
    }
    if (this.name.length > 20) {
      name.style.fontSize = 'calc(10px + 6vw)';
    }
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

  toggle(type: string) {
    this.variants[type] = !this.variants[type];
  }

}
