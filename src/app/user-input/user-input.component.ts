import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestement = signal('0');
  enteredAnnualInvestement = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    console.log('Form submitted!');
    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestement(),
      annualInvestment: +this.enteredAnnualInvestement(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration()
    });

    this.enteredInitialInvestement.set('0');
    this.enteredAnnualInvestement.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');

  }
}
