import { Component, OnInit } from '@angular/core';
import { EnergyService } from 'src/app/service/energy.service';
declare let window: any;

@Component({
  selector: 'app-buy-energy',
  templateUrl: './buy-energy.component.html',
  styleUrls: ['./buy-energy.component.css']
})
export class BuyEnergyComponent implements OnInit {
  energyAmount!: number;
  message = '';
  consumerAddress = '';
  consumerBalance!: number;
  isRequestPending = false;
  balance: number = 0; 
  errorMessage: string | null = null;
  energyBalance: number | null = null;

  constructor(private energyService: EnergyService) {}

  async ngOnInit() {
    await this.connectMetaMask();
    this.fetchConsumerBalance();
    this.getEtherBalance();
  }

  etherBalance!: string;
  
  
  fetchConsumerEtherBalance() {
    this.energyService.getConsumerEtherBalance(this.consumerAddress)
      .subscribe(
        data => {
          this.etherBalance = data.balanceEther;
          console.log('Consumer Ether balance:', this.etherBalance);
        },
        error => {
          console.error('Failed to fetch consumer balance:', error);
          // Handle error
        }
      );
  }
  async connectMetaMask() {
    if (!window.ethereum) {
      this.message = 'MetaMask is not installed';
      return;
    }
    if (this.isRequestPending) {
      this.message = 'Request already pending. Please wait.';
      return;
    }
    try {
      this.isRequestPending = true;
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      this.consumerAddress = accounts[0];
      this.message = 'MetaMask connected';
      console.log('MetaMask connected with account:', this.consumerAddress);
      // Fetch the consumer balance after connecting to MetaMask
      this.fetchConsumerBalance();
    } catch (error) {
      console.error('Error connecting MetaMask', error);
      this.message = 'Error connecting MetaMask';
    } finally {
      this.isRequestPending = false;
    }
  }

  fetchConsumerBalance(): void {
    if (!this.consumerAddress) {
      console.error('Consumer address not available');
      return;
    }
 console.log(this.consumerAddress);
 
    this.energyService.getConsumerBalance(this.consumerAddress)
      .subscribe(
        (balance:number) => {
          this.consumerBalance = balance;
          console.log('Consumer Balance:', this.consumerBalance);
        },
        error => {
          console.error('Error fetching consumer balance:', error);
        }
      );
  }

  buyEnergy() {
    // Check if MetaMask is connected (if applicable)
    if (!this.consumerAddress) {
        this.message = 'MetaMask not connected';
        return;
    }

    // Check if energyAmount is valid
    if (!this.energyAmount || this.energyAmount <= 0) {
        this.message = 'Please enter a valid energy amount';
        return;
    }

    // Check if a request is already pending
    if (this.isRequestPending) {
        this.message = 'Please wait for the current transaction to complete';
        return;
    }

    // Set the request pending flag
    this.isRequestPending = true;
    this.message = 'Processing transaction...';

    // Call the energyService to buy energy
    this.energyService.buyEnergy(this.energyAmount, this.consumerAddress).subscribe(
        response => {
            this.message = 'Energy purchase successful!';
            this.isRequestPending = false;
            console.log(response);
        },
        error => {
            this.message = 'Energy purchase failed.';
            this.isRequestPending = false;
            console.error(error);
        }
    );
}

// getEnergyBalance() {
//   this.energyService.getConsumerEnergyBalance(this.consumerAddress).subscribe({
//     next: (data) => {
//       this.energyBalance = data.energyBalance;
//       this.errorMessage = null;
//     },
//     error: (error) => {
//       this.errorMessage = 'Error fetching energy balance. Please check the console for details.';
//       console.error(error);
//       this.energyBalance = null;
//     }
//   });
// }

getEtherBalance(){
  this.energyService. getConsumerEtherBalance(this.consumerAddress).subscribe((enther) =>{
    this.etherBalance=enther.balanceEther;
    console.log(this.etherBalance);
    
  },
  error => {
    console.error('Error fetching ether balance:', error);
  })
}
}
