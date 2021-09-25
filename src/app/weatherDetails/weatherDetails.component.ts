import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];
  nameValue: string = '';

  handleFilter = () => (
    this.nameValue
  )
  handleIndex = () => (
    this.weatherData.findIndex(cityName => cityName.name === this.nameValue)
  )


  ngOnInit() {
    console.log(this.weatherData)

  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}


