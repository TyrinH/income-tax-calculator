<script setup>
import { ref } from 'vue'
const text = ref('')
function calcIncome() {
  console.log('HEY IT WORKED!', text)
    const income = parseInt(text.value)


 // Example $50,000 for 2021
    //$0 to $9,950 = 10% THRESHOLD = $995
    //$9,951 to $40,525 = 12% THRESHOLD = $4,863
    //$40,526 to $86,375 = 22% THRESHOLD = $19,002.50
    //$86,375 to $164,925 = 24% THRESHOLD = $39,582
    //$164,926 to $209,425 = 32% THRESHOLD = $67,016
    //$209,426 to $523,600 = 35% THRESHOLD = $183,260
    //$523,601 or more = 37%

    // Example $50,000 for 2022
    //$0 to $10,275 = 10% THRESHOLD = $1,027.50
    //$10,275 to $ 41,775 = 12% THRESHOLD = $5,013
    //$41,775 to $89,075 = 22% THRESHOLD = $19,596.50
    //$89,075 to $170,050 = 24% THRESHOLD = $40,812
    //$170,050 to $215,950 = 32% THRESHOLD = $69,104
    //$215,950 to $539,900 = 35% THRESHOLD = $188,956
    //$539,900 or more = 37%

    const firstBracket2021 = 9950
    const firstBrackerMaxTax2021 = 995
    const secondBracket2021 = 40525
    const secondBracketMaxTax2021 = 4863
    const thirdBracket2021 = 86375
    const thirdBracketMaxTax2021 = 19002.50
    const fourthBracket2021 = 164925
    const fourthBracketMaxTax2021 = 39582
    const fifthBracket2021 = 209425
    const fifthBracketMaxTax2021 = 67016
    const sixthBracket2021 = 523600
    const sixthBracketMaxTax2021 = 183260
 

    const firstBracket2022 = 10275
    const firstBrackerMaxTax2022 = 1027.50
    const secondBracket2022 = 41775
    const secondBracketMaxTax2022 = 5013
    const thirdBracket2022 = 89075
    const thirdBracketMaxTax2022 = 19596.50
    const fourthBracket2022 = 170500
    const fourthBracketMaxTax2022 = 40812
    const fifthBracket2022 = 215950
    const fifthBracketMaxTax2022 = 69104
    const sixthBracket2022 = 539900
    const sixthBracketMaxTax2022 = 188956

  if (income < 0) {
    // You didn't make money
    // Also handles errors for negative numbers
  } else if (income >= 0 && income <= firstBracket2021) {
    console.log('You are in the first bracket')
    if (income - firstBracket2021 === 0) {
        incomeTax = firstBrackerMaxTax2021
    }else {
        var incomeTax = income * 0.10;
    }
  } else if (income > firstBracket2021 && income <= secondBracket2021){
    console.log('You are in the second bracket')
    if (income - secondBracket2021 === 0) {
        incomeTax = firstBrackerMaxTax2021 + secondBracketMaxTax2021
    } else {
        var incomeTax = ((income - firstBracket2021) * 0.12) + firstBrackerMaxTax2021;
    }
    //   var incomeTax = 1027.50 + ((income - 10275) * 0.12);
  } else if (income > 41775 && income < 89075) {
      var incomeTax = 4807.50 + ((income - 89075) * 0.24);
  } else if (income > 89075 && income < 170050) {
      var incomeTax = 31747 + ((income - 89075) * 0.32);
  } else {
      //Income >= 297350
      var incomeTax = 93374 + ((income - 297350) * 0.391);
  }
    console.log('Your results:',incomeTax.toFixed(2), income)
}
</script>

<template>
    <form action="">
        <input v-model="text" type="text" placeholder="Enter your income here">
        <button type="button" @click="calcIncome">Submit</button>
    </form>
</template>