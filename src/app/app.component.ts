import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = '';
  variants = {
    addTabooki: false,
    addPiju: false
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
    if (this.variants.addTabooki) {
      cationary = cationary.concat(tabooki);
    }
    if (this.variants.addPiju) {
      cationary = cationary.concat(piju);
    }
    let iterations = Math.floor(Math.random() * 4) + 1;
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
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

}
