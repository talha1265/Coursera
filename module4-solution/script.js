const array = [ "Hannah","John", "Brack","Paul"];
for(var i =0 ;i < array.length ; i++){
    if (array[i].charAt(0)==="J"){
        console.log("Goodbye "+ array[i]);
    }
    else{
        console.log('Hello '+  array[i]);
    }
}

//this code is for looping an array if the first character is J then console Goodbye J... 
//else  console Hello Name.