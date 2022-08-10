import { Component, OnInit } from '@angular/core';

import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  providers: [NasaService],
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {

  public data: any;

  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.nasaService.getAPOD()
    .subscribe((res: JSON) => {
      let data = JSON.parse(JSON.stringify(res));
      this.data = data;
    });
  }

}
