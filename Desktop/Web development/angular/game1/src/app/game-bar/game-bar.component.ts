import { Component,OnInit } from '@angular/core';
import { ColorBoxService } from '../services/color-box.service';
import {MatDialogModule} from '@angular/material/dialog'; 
@Component({
  selector: 'app-game-bar',
  templateUrl: './game-bar.component.html',
  styleUrls: ['./game-bar.component.css']
})
export class GameBarComponent implements OnInit{


  constructor(private colorBoxService: ColorBoxService){

  }

  ngOnInit(): void {
  }
  resetGame():void{
    this.colorBoxService.constructNewBox(2,2);
  }
}
