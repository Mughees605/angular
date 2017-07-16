import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import {Ingredient} from "../../shared/ingredient.model"
import { ShoppingListService } from '../shoppingList.service'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  editMode:Boolean = false;
  editedItemIndex:number;
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
    this.shoppingService.startedEditing.subscribe(
      (index:number)=>{
        this.editMode = true;
        this.editedItemIndex = index;
      }
    )
  }
  onAddItem(form:NgForm){
    const {name,amount} = form.value;
    const newIngredient = new Ingredient(name, amount);
    this.shoppingService.addIngredient(newIngredient);
  }
}
