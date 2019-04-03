import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  beverages: string[]
  newBeverage: string

  constructor() {
    this.beverages = ['tea', 'coffee', 'milk']
    this.newBeverage = ''
  }

  deleteBeverage(index) {
    this.beverages.splice(index, 1)
  }

  addBeverage(beverageForm) {
    this.beverages.push(this.newBeverage)
    this.newBeverage = ''
    beverageForm.form.markAsPristine()
  }

}