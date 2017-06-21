import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() passedLink = new EventEmitter<string>();

  onChange(link:string){
    this.passedLink.emit(link)
  }

}
