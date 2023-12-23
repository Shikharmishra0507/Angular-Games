import { Component ,OnInit} from '@angular/core';
import {Box,BoxState} from '../models/box';
import { ColorBoxService } from '../services/color-box.service';
@Component({
  selector: 'app-color-grid',
  templateUrl: './color-grid.component.html',
  styleUrls: ['./color-grid.component.css']
})
export class ColorGridComponent implements OnInit{
  colorBoxes :Box[][]=[];

  constructor(private colorBoxService: ColorBoxService){

  }
  ngOnInit() {
    
    this.colorBoxService.colorBoxes.subscribe((color) => {
     this.colorBoxes=color;
    });
  }
  
  getColorBoxes(){
    this.colorBoxService.getListOfColorBoxes(); 
  }
  changeBoxColorWithId(event:any) :void{
    this.colorBoxService.changeBoxColorWithId(event);
  }


}
