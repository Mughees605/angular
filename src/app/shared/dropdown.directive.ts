import { Directive , HostListener, HostBinding } from '@angular/core';

@Directive({ selector: '[appDropDown]' })
export class DropdownDirective {
    @HostBinding("class.open") isOpen:boolean = false;
    @HostListener('click') toggle(){
        this.isOpen = !this.isOpen
    }
}