const arr = [1,2,3,4,5,6,7,11,12,14,31]
let val = 12
const binary = (array,value) =>{
  let start = 0
  let end = array.length - 1

  while (start < end){
    //average the min and max
    let mid = Math.floor((start + end)/2) 

    if (array[mid] === value){
        return `${value} is in collection`
    }
    
    (array[mid] < value) ? start = mid + 1 : end = mid - 1
    
    
  }

  return `${value} is not in collection`

}


console.log(binary(arr,31))


//Recursively

// let start = 0
// let end = array.length - 1

const binary2 = (array, start, end, value) =>{
  

  if (end >= 1){
    //average the min and max
    let mid = Math.floor((start + end)/2) 

    if (array[mid] === value){
        return `${value} is in collection`
    }
    
   

    if (array[med] > value){
      return binary2(array, start, end = mid - 1 , value)
    }


    return binary2(array, start = mid + 1, end, value)
    
  }
  

  return `${value} is not in collection`

}


console.log(binary(arr,31))