import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {

  public listItems: Array<any>;

  constructor() {
    this.listItems = [{
      name: 'Bread',
      disabled: false
    },
    {
      name: 'Butter',
      disabled: false
    },
    {
      name: 'Juice',
      disabled: false
    },
    {
      name: 'Cookies',
      disabled: true
    }
      ];
   }

   public  findAll(): Array<any> {
     return this.listItems;
   }

   public add(item) {
     this.listItems.unshift(item);
   }

   public remove(item) {
     let index = this.listItems.indexOf(item);
     this.listItems.splice(index, 1);
   }

   public cross(item) {
     let index = this.listItems.indexOf(item);
     this.listItems[index].disabled = true;
   }


}
