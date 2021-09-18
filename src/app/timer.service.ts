import { Injectable } from '@angular/core';
import { BitcoinService } from './bitcoin.service';


@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;
  c = 0;
  constructor(public bit:BitcoinService) {
   }
   start(ms: number){
      if(!this.timer){
        this.counter = this.c;
        this.timer = setInterval(()=>{
          this.counter++;
          if(this.counter == 60){
            this.bit.updateBitCoinRates();
            this.stop();
            this.start(1000);
          }
        }, ms);
      }
  }
  stop(){
    if(this.timer){
      clearInterval(this.timer);
      this.timer=null;
    }
  }
  getCount(){
    return this.counter;
  }
}