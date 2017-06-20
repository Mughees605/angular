import { Component, OnInit, ElementRef, ViewChild , Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model"
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('amount') amountRef: ElementRef;
  @Output() passData = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit() {

  }
  onAddItem(){
    const newName = this.nameRef.nativeElement.value;
    const newAmount = this.amountRef.nativeElement.value;
    const newData = new Ingredient(newName,newAmount);
    this.passData.emit(newData)
  }

}
