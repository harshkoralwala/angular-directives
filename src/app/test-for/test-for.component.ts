import { Component } from '@angular/core';

@Component({
  selector: 'app-test-for',
  templateUrl: './test-for.component.html',
  styleUrls: ['./test-for.component.scss']
})
export class TestForComponent {

  cityList = [
    {
      name: 'Ahmedabad',
      isMetroCity: true
    },
    {
      name: 'Surat',
      isMetroCity: true
    },

    {
      name: 'Bhavnagar',
      isMetroCity: false
    },
    {
      name: 'Baroda',
      isMetroCity: false
    },
    {
      name: 'Bharuch',
      isMetroCity: false
    },
    {
      name: 'Vapi',
      isMetroCity: false
    },
    {
      name: 'Vadodara',
      isMetroCity: true
    },
    {
      name: 'Rajkot',
      isMetroCity: true
    },
    {
      name: 'Anand',
      isMetroCity: false
    },
    {
      name: 'Valsad',
      isMetroCity: false
    },
  ];

}
