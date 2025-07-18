import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { PanelModule } from 'primeng/panel';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-search',
  imports: [
    FormsModule,
    FloatLabel,
    PanelModule,
    ButtonModule,
    SelectModule,
    DatePickerModule,
  ],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  datetime12h: Date[] | undefined;
  countries: any[] | undefined;
  selectedCountry: { name: string; code: string } | undefined;
  cities: City[] | undefined;
  selectedCity: City | undefined;

  ngOnInit() {
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ];
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
}
