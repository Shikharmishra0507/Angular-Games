import { Injectable } from '@angular/core';
import {Box,BoxState} from '../models/box';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorBoxService {

  constructor() { }
  
  colorsList :string[]=['red','yellow','blue','cyan','pink','yellow','green','violet','purple','orange'];  
  colorBoxes=new BehaviorSubject<Box[][]>([
    [new Box(1,'red',BoxState.Closed),
    new Box(2,"yellow",BoxState.Closed),
    new Box(3,"blue",BoxState.Closed)],
   
    [new Box(4,"yellow",BoxState.Closed),
    new Box(5,"pink",BoxState.Closed),
    new Box(6,"cyan",BoxState.Closed)],
  
    [new Box(7,"violet",BoxState.Closed),
    new Box(8,"pink",BoxState.Closed),
    new Box(9,"cyan",BoxState.Closed)],

    [new Box(10,"red",BoxState.Closed),
    new Box(11,"violet",BoxState.Closed),
    new Box(12,"blue",BoxState.Closed)]

  ]);

  getListOfColorBoxes(){
    return [...this.colorBoxes.value];
  }
  randomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  constructNewBox(row:number,column:number):boolean{
    if(row*column %2 !=0)return false;
    let count:number=(row*column)/2;
    let colorLength=this.colorsList.length;
    let index=0;
    
    let newColorBox:Box[]=[];
    for(var i =index;i<count;i++){
      newColorBox.push(new Box((i-index)*0.2,this.colorsList[i],BoxState.Closed));
      newColorBox.push(new Box((i-index+1),this.colorsList[i],BoxState.Closed));
    }
    this.shuffleArray(newColorBox);
    
    let newColor2DBox:Box[][]=[];

    for(var i=0;i<row;i++){
      var columnBoxes :Box[]=[];
      for(var j=0;j<column;j++){
        
        columnBoxes.push(newColorBox[i*row+j])
        
      }
      newColor2DBox.push(columnBoxes);
    }
    this.colorBoxes.next(newColor2DBox);

    
    return true;
  }


  
  changeBoxColorWithId(event:any):void{
    
    //two cases
    
    var colorOfBox:string="";
    var openCount:number=0;
    var localColorboxes=this.colorBoxes.value;
    for(var i=0;i<localColorboxes.length;i++){
      var found:boolean=false;
      
      for(var j=0;j<localColorboxes[i].length;j++){
        if(localColorboxes[i][j].boxState==BoxState.Opened)openCount++;
        if(localColorboxes[i][j].id==event){
          if(localColorboxes[i][j].boxState==BoxState.Found)return ;
          localColorboxes[i][j].boxState=BoxState.Opened;
          
          
          colorOfBox=localColorboxes[i][j].color;
        }
        
      }
     
    }
    //If only a single color box is opened
    //then it doesnot need to change its state unless other box is pressed
    if(openCount==0)return ;



    this.checkIfColorMatch(colorOfBox);
    
  }

  checkIfColorMatch(colorOfBox :string){
    var matchedCount:number=0;
    var localColorboxes=this.colorBoxes.value;
    for(var i=0;i<localColorboxes.length;i++){
      for(var j=0;j<localColorboxes[i].length;j++){
        if(localColorboxes[i][j].boxState==BoxState.Opened
           && localColorboxes[i][j].color==colorOfBox){
          matchedCount+=1;
        }
        
      }
    }
    this.colorBoxOpenFoundConversion(matchedCount==2);
  }

  colorBoxOpenFoundConversion(convertOpen:boolean){
    var localColorboxes=this.colorBoxes.value;
    for(var i=0;i<localColorboxes.length;i++){
      for(var j=0;j<localColorboxes[i].length;j++){
        if(localColorboxes[i][j].boxState==BoxState.Opened){
          this.colorBoxes.value[i][j].boxState=convertOpen ? BoxState.Found:BoxState.Closed;
        }
        
      }
  }
}
  
}
