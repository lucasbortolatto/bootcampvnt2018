import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input('item') public listItem: any;
  public deleted: boolean = false;

  constructor(
    private myShoppingListService: ShoppingListService
  ) {}

  ngOnInit() {

  }

  public removeItem() {
    this.myShoppingListService.remove(this.listItem).subscribe(
      res => {
        console.log("Item foi excluido");
        this.deleted = true;

      }
    );
  }

  public crossItem() {
    let itemEdited = {
      key: this.listItem.key
      disabled: true
    };

    this.myShoppingListService.edit(itemEdited).subscribe(
      res => {
        console.log("Item Editado");
        this.listItem.disabled = true;
      }
    )
  }


}
