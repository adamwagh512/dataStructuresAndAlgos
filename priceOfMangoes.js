// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free


//declares a function called mango that accepts 2 arguements, quantity and price
function mango(quantity, price){
    // freeMangos determines how many free mangos are included in the deal. Since every third mango is free, we divide the quantity by three and round down.
    var freeMangos = Math.floor(quantity / 3)
    // finally we subtract the free mangos from the quantity, and multiply that number by the price per mango to receive our price and return it.
    return (quantity - freeMangos) * price
    
  
  }
//Test Cases
  console.log(mango(3, 3)) // Should output 6
  console.log(mango(9, 5)) // should output 30