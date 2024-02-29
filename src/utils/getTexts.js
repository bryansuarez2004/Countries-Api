function getCapitalText (arrayOfCapitals) {
    //recibe el arreglo de capitales y devuelve el texto de capitales validandose
  let text= ''
   if(arrayOfCapitals){
    
      text = arrayOfCapitals.join(', ') 
   }else{
    text =  'no capital'
   }

   return text
}

export {getCapitalText}