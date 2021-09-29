import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface BitCoinRate{
  time: {updated: string};
  bpi: {
    USD: {
      rate_float: number;
    }
    BRL: {
      rate_float: number;
    }
    EUR:{
      rate_float: number;
    }
  }

}

@Injectable()

export class BitcoinService {
  BitCoinRates: Array<BitCoinRate> = [];
  BitCoinRates2: Array<BitCoinRate> = [];

  constructor(private http: HttpClient) { }

  updateBitCoinRates(){
    this.http.get<BitCoinRate>("https://api.coindesk.com/v1/bpi/currentprice/BRL.json").subscribe(data => {
      this.BitCoinRates.push(data);
    });
    this.http.get<BitCoinRate>("https://api.coindesk.com/v1/bpi/currentprice.json").subscribe(data => {
      this.BitCoinRates2.push(data);
    });
  }

  

}