
    function square() {
        this.BigGob = 0;
        this.MedGob = 0;
        this.SmlGob = 0;
        this.Value = 0;
      }
  square.prototype.getIsEmpty=function(){
     if (BigGob==0 && MedGob==0 && SmlGob==0){
       return true;
     }
     else {
       return false
     }
   };
   /* 1-Small Blue. 2-Medium Blue 3-Big Blue.
      4-Small Red. 5-Medium Red 6-Big Red
      SmlGob = 1- blue 2- red
      MedGob = 1- blue 2- red
      BigGob = 1- blue 2- red
      Value = 1- blue 10- red */
  square.prototype.setMove=function(x){
    if (x>0){
    switch (x) {
      case 1: if (getIsEmpty()==true) {
        SmlGob = 1;
        Value=1;
        return "Small Blue Gobbler";
      }
        else
        return "Small Blue Can't Move";
        break;
      case 4:  if (getIsEmpty()==true) {
          SmlGob = 2;
          Value = 10;
          return "Small Red Gobbler";
        }
          else
          return "Small Red Can't Move";
          break;
      case 2: if ((getIsEmpty() == true) || (MedGob ==0 && BigGob == 0)){
        MedGob = 1;
        Value=1;
        return "Medium Blue Goblber";
      }
        else {
          return "Medium Blue Can't Move";
        } break;
    case 5: if ((getIsEmpty() == true) || (MedGob ==0 && BigGob == 0)){
      MedGob = 2;
      Value=10;
      return "Medium Red Goblber";
    }
      else
        return "Medium Red Can't Move";
       break;
    case 3: if ((getIsEmpty() == true) || (MedGob ==0)){
      BigGob = 1 ;
      Value=1;
      return "Big blue Goblber";
    }
      else
        return "Big blue Can't Move";
      break;
    case 6: if ((getIsEmpty() == true) || (MedGob ==0)){
      BigGob = 2 ;
      Value=10;
      return "Big Red Goblber";
    }
      else
        return "Big Red Can't Move";
      break;
  }//End switch
}//enf if positive
  else {
    switch (x) {
      case -1: SmlGob = 0;
        Value =0;
        break;
      case -4:SmlGob=0;
        Value=0;
        break;
      case -2: MedGob=0;
        if (!getIsEmpty()){
        return  Move(SmlGob);
        }
        else {
          Value = 0
          return "Empty now";
        } break;
      case -5: MedGob=0;
        if (!getIsEmpty()){
        return  Move(SmlGob);
        }
        else {
          Value = 0
          return "Empty now";
        } break;
      case -3:BigGob=0;
       if (MedGob>0)
        return  Move (MedGob);
         else if (SmlGob>0)
          return Move (SmlGob);
       else
        Value = 0;
        break;
      case -6:BigGob=0;
       if (MedGob>0)
        return  Move (MedGob);
         else if (SmlGob>0)
          return Move (SmlGob);
       else
        Value = 0;
      break;
    }//End negative switch
  }//end of else
};//End set move
square.prototype.getValue=function (){
  return this.Value;
};
square.prototype.getCurrentGob=function(){
  if (getIsEmpty()==true)
    return 0;
  switch (BigGob) {
    case 1: return 3; break;
    case 2: return 6; break;
  }
  switch (MedGob) {
    case 1: return 2; break;
    case 2: return 5; break;
  }
  switch (SmlGob) {
    case 1: return 1; break;
    case 2: return 3; break;
  }
};//End of CurrentGob
