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

function getLanguagesText (objectToConcat) {
   
 let textLang= ''
  if(objectToConcat){
     let array = []
     for (const key in objectToConcat) {
          array.push(objectToConcat[key])
     }
     textLang = array.join(', ')
  }else{
   textLang =  'no language'
  }

  return textLang
}


function transformObjectToArray (objectToArray){
     let arrayOfLanguages = []
     if(objectToArray){
      for (const key in objectToArray) {
         arrayOfLanguages.push(objectToArray[key])
      }
   }
   return arrayOfLanguages
}

export {getCapitalText,
   getLanguagesText,
   transformObjectToArray}