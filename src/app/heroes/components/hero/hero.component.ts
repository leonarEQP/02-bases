import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "superman";
  public age: number = 18;

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  get HeroDescription(): string {

    return `${this.name} - ${this.age}`;
  }

  get ChangeName(): string {
    return this.name = "Hulk";
  }

  get ChangeAge(): number {
    return this.age = 45;
  }
  Reset(): void {
    this.name = 'Superman';
    this.age = 18;
  }


}
