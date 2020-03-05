import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  data:any;

  karywndata= [
    {
      nama:"Haidar Jasir",
      job:"Frontend Developer",
      ttl:"Serang, 21 April 1998",
      agama:"Islam",
      stts:"Belum Menikah",
      email:"haidarjasir715@gmail.com",
      phone:"0895331371249"
    },
    {
      nama:"Hendarko Wijayanto",
      job:"Admin Executive",
      ttl:"Jakarta, 17 Agustus 1945",
      agama:"Islam",
      stts:"Menikah",
      email:"hendarko12@gmail.com",
      phone:"0895331371249"
    },
    {
      nama:"Husain",
      job:"Operator Produksi",
      ttl:"Bandung, 11 Maret 1928",
      agama:"Islam",
      stts:"Belum Menikah",
      email:"husain99@gmail.com",
      phone:"0895331371249"
    },
    {
      nama:"Zubair Marzuki",
      job:"Office Boy",
      ttl:"Zimbabwe, 31 December 2020",
      agama:"Budha",
      stts:"Menikah",
      email:"zuba22@gmail.com",
      phone:"0895331371249"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
