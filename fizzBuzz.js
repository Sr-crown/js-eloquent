let fizzBuzz = 0;
for (let v = 0;v >= 100;v ++){
    
    if (fizzBuzz % 3 == 0) {
        
        if(fizzBuzz % 5 == 0){
            console.log("Fizz Buzz");
            fizzBuzz = fizzBuzz + 1;
        
        }else{
            console.log("Fizz");
            fizzBuzz = fizzBuzz + 1;
        }
    
    }else if(fizzBuzz % 5 == 0){
        console.log("Buzz");
        fizzBuzz = fizzBuzz + 1;
    
    }else{
        console.log(fizzBuzz);
        fizzBuzz = fizzBuzz + 1;
    }
    
    
}