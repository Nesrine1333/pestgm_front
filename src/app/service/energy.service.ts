import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnergyService {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getProvider(address: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/provider/${address}`);
  }

  registerProvider(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registerProvider`, data);
  }

  updateProvider(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/updateProvider`, data);
  }


  buyEnergy(energyAmount: number, consumerAddress: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { energyAmount };
    const url = `${this.apiUrl}/buy-energy`;
    
    return this.http.post(url, body, { headers });
  }

  getConsumerBalance(consumerAddress: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/consumer-balance/${consumerAddress}`);
  }
//  getConsumerEnergyBalance(consumerAddress: string): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/getConsumerEnergyBalance/${consumerAddress}`);
//   }
  getConsumerEtherBalance(consumerAddress: string): Observable<any> {
    const url = `${this.apiUrl}/getConsumerEtherBalance/${consumerAddress}`;
    return this.http.get<any>(url);
  }
}
