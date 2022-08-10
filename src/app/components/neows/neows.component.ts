import { Component, OnInit } from '@angular/core';

import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-neows',
  templateUrl: './neows.component.html',
  providers: [NasaService],
  styleUrls: ['./neows.component.css']
})
export class NeowsComponent implements OnInit {

  public data: any;

  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    let today = Date().toString()
    this.nasaService.getAsteroidsNeoWs(today, today)
    .subscribe((res: JSON) => {
      let data = JSON.parse(JSON.stringify(res));
      this.data = data;
    });
  }

}
