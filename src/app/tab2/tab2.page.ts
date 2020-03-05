import { Component } from '@angular/core';
 
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  users = [
    {
      id: 0,
      name: 'Haidar Jasir',
      negara: 'Indonesia'
    },
    {
      id: 2,
      name: 'Hendarko Wijaya',
      negara: 'Indonesia'
    },
    {
      id: 3,
      name: 'Ujang Said',
      negara: 'Malaysia'
    },
    {
      id: 4,
      name: 'Umar Bakrie',
      negara: 'Baghdad'
    },
    {
      id: 5,
      name: 'Amir Cok',
      negara: 'Palestina'
    },
    {
      id: 6,
      name: 'Ole Puyol',
      negara: 'Zimbabwe'
    }
  ];
  selected_user = null;


  constructor() {

  }
 
}