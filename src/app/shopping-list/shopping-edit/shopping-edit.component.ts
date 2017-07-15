import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model"
import { ShoppingListService } from '../shoppingList.service'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('amount') amountRef: ElementRef;

  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {

  }
  onAddItem(){
    const newName = this.nameRef.nativeElement.value;
    const newAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(newName, newAmount);
    this.shoppingService.addIngredient(newIngredient);
  }

}
