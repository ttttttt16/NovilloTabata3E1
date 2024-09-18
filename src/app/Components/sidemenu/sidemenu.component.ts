import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  /*
  
  */
  userName: string = "Tabata Novillo";
  theme: string = "";
  widthMenu: number = 25;
  visibleMenu: boolean = true;


  setVisibilityMenu(): boolean {
    this.visibleMenu = !this.visibleMenu;// flase -> true true.>false
    return this.visibleMenu;
  }

  setThemeColor(color: string): void {
    this.theme = color;
  }

  setSizesMenu() {
    this.widthMenu += 10;
    if (this.widthMenu > 100) {
      this.widthMenu = 50;
    }
  }

}
