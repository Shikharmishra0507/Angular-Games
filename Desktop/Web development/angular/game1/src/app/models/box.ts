type Color=string;
export enum BoxState{
    Closed,
    Opened,
    Found
}


export class Box {
    constructor(
     public id: number,
      public color: Color,
      public boxState:BoxState
     ){}
}