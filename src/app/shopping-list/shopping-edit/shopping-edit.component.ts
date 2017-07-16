import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms"
import { Ingredient } from "../../shared/ingredient.model"
import { ShoppingListService } from '../shoppingList.service'
import { Subscription } from "rxjs/subscription"
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {


  @ViewChild('f') slForm: NgForm;
  editMode: Boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  subscription:Subscription;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
   this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }
  
  onAddItem(form: NgForm) {
    const { name, amount } = form.value;
    const newIngredient = new Ingredient(name, amount);
    this.shoppingService.addIngredient(newIngredient);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
