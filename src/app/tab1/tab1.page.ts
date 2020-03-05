import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data:any;

  karyawan= [
    {
      name:"Haidar Jasir",
      job:"Frontend Developer",
      link:"/detail"
    },
    {
      name:"Hendarko Wijayanto",
      job:"Admin Executive",
      link:"/detail1"
    },
    {
      name:"Husain",
      job:"Operator Produksi",
      link:"/detail2"
    },
    {
      name:"Zubair Marzuki",
      job:"Office Boy",
      link:"/detail3"
    },
  ]
  constructor() {}

}
