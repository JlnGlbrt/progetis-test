import { Component, OnInit } from '@angular/core';

import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-neows',
  templateUrl: './neows.component.html',
  providers: [NasaService],
  styleUrls: ['./neows.component.css']
})
export class NeowsComponent implements OnInit {

  public today: any;
  public data: any;

  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    var date = new Date();
    var today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

    this.nasaService.getAsteroidsNeoWs(today, today)
    .subscribe((res: JSON) => {
      let data = JSON.parse(JSON.stringify(res));
      this.today = date;
      this.data = Object.values(data.near_earth_objects);
    });
  }

}
