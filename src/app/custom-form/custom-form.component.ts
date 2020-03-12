import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {
  data = [
    {
      name: 'asdf',
      surname: 'asdf',
      age: 31,
      pesel: '79843516754',
      postalCode: '48-725',
      city: 'Mexico',
      street: 'Sesame'
    },
    {
      name: 'agasdfv',
      surname: 'qvre',
      age: 46,
      pesel: '45637854357',
      postalCode: '35-768',
      city: 'Las Vegas',
      street: 'Wall Street'
    },
  ];
  count: number = 0;

  constructor() {


  }

  submitData(data){
    this.data = data;
    console.log(data);
  }
  clearInputs(){

  }

  increment(){
    this.count++;
  }

  ngOnInit(): void {
  }

}
