function feetToMile(feet){
    if(feet >= 0){
        var mile = feet/5280;
        return mile;
    }
    else{
        return 'Warning! distance can not be negative';
    }
 }
 
//  var result = feetToMile(10000);
//  console.log(result);
 
 function woodCalculator(chair, table, bed){
    if(chair >= 0 && table >= 0 && bed >= 0){
        var chairCount = chair * 1;
        var tableCount = table * 3;
        var bedCount = bed * 5;
        totalWood = chairCount + tableCount + bedCount; 
        return totalWood; 
    }
    else{
        return 'Warning! negative values are forbidden';
    }
 }
//  var result = woodCalculator(3,4,5);
//  console.log(result);
 
 function brickCalculator(floorNum){
     
     if(floorNum >= 0 && floorNum<=10){
         var floorHeight = floorNum*15;
         var brickCount = floorHeight*1000;
         return brickCount ;
     }
     else if(floorNum>10 && floorNum<=20){
         floorNum = floorNum - 10;
         floorHeight = 10*15 + floorNum*12;
         brickCount = floorHeight*1000;
         return brickCount;
     }
     else if (floorNum>20){
         floorNum = floorNum -20;
         floorHeight = 10*15 + 10*12 + floorNum*10;
         brickCount = floorHeight * 1000;
         return brickCount;
     }
     else{
         return "Negative floors don't need bricks."
     }
 }
 var result = brickCalculator(23);
 console.log(result);
 
 
 function tinyFriend(friendsName){
     var tinyName =friendsName[0];
     for (var i=0; i<friendsName.length;i++){
         var character = friendsName[i];
         if(character < tinyName ){
             tinyName = character;
         }    
     }
     return tinyName;  
 }
 
 
//  var result = tinyFriend(['pranto','apu','jahid','munna']);
//  console.log(result);