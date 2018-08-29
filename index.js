function takeANumber(katzDeliLine, name){
  var actualPos = katzDeliLine.length + 1 ;
  katzDeliLine.push(name);
  var greeting = 'Welcome, '+name+'. You are number '+actualPos+' in line.'
  return greeting;
}



       
function currentLine(line){
  if (line.length === 0) 
    {return "The line is currently empty."}
  else
    {return 'The line is currently: 1. '+line[0]+', 2. '+line[1]+', 3. '+line[2]} 
}
  
  





function nowServing(line) {
  for (let i = 0; i < line.length; i++)
  if (line.length === 0)
    {return 'There is nobody waiting to be served!'}
  else{line.shift(0);
    return ('Currently serving '+line[i]+'.') 
  
    
       
  }
    
  

}