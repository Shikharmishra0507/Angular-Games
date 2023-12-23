import { Component,EventEmitter,Input,Output } from '@angular/core';
import {Box, BoxState} from '../models/box';
import { ColorBoxService } from '../services/color-box.service';
@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.css']
})
export class ColorBoxComponent {
  constructor(private colorBoxService: ColorBoxService){

  }
  BoxState=BoxState;
    @Input() box:Box=new Box(1,'red',BoxState.Closed,);
   
    @Output()colorChangeEmitter=new EventEmitter();
    colorChangeEmitterFunction():void{
      this.colorBoxService.changeBoxColorWithId(this.box.id);
        
        
    }
}
