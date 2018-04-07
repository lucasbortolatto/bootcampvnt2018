import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public listItems: Array<any>;

  private itemToAdd: any;

  constructor(
    private myShoppingListService: ShoppingListService
  ) {

    this.myShoppingListService.findAll().subscribe(
      response => {
        if (response) {
          this.listItems = Object.keys(response).map(id => {
            let item: any = response[id];
            item.key = id;
          return item;
        })
        } else {
        this.listItems = [];
      }
      },
      error => { console.error(error) }
    )

   }

  ngOnInit() {
  }

  private addObjectToList() {
    let newItem = {
      name: this.itemToAdd,
      disabled: false
    };

    this.myShoppingListService.add(newItem).subscribe(
      response => {
        newItem['key'] = response['name'];
        this.listItems.unshift(newItem);
      },
        error => { console.error('Deu erro')} );
        this.itemToAdd = '';


  }

}
