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


  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {

  }
  onAddItem(form:NgForm){
    const {name,amount} = form.value;
    const newIngredient = new Ingredient(name, amount);
    this.shoppingService.addIngredient(newIngredient);
  }
}
