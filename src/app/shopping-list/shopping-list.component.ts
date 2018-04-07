import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public listItems: Observable<any[]>;

  private itemToAdd: string ='';

  constructor(private myShoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.listItems = this.myShoppingListService.listItemFirebase;
  }

  private addObjectToList() {
    let newItem = {
      name: this.itemToAdd,
      disabled: false
    };

    this.myShoppingListService.add(newItem);

    this.itemToAdd = '';

  }

}
