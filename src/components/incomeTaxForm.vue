<script setup>
import { ref } from 'vue'
const text = ref('')
function calcIncome() {
  console.log('HEY IT WORKED!', text)
    const income = parseInt(text.value)


 // Example $50,000 for 2021
    //$0 to $9,950 = 10% THRESHOLD = $995
    //$10,275 to $ 40,525 = 12% THRESHOLD = $4,863
    //$40,525 to $89,075 = 22% THRESHOLD = $19,596.50
    //$89,075 to $170,050 = 24% THRESHOLD = $40,812
    //$170,050 to $215,950 = 32% THRESHOLD = $69,104
    //$215,950 to $539,900 = 35% THRESHOLD = $188,956
    //$539,900 or more = 37%

    // Example $50,000 for 2022
    //$0 to $10,275 = 10% THRESHOLD = $1,027.50
    //$10,275 to $ 41,775 = 12% THRESHOLD = $5,013
    //$41,775 to $89,075 = 22% THRESHOLD = $19,596.50
    //$89,075 to $170,050 = 24% THRESHOLD = $40,812
    //$170,050 to $215,950 = 32% THRESHOLD = $69,104
    //$215,950 to $539,900 = 35% THRESHOLD = $188,956
    //$539,900 or more = 37%

    const firstBracket2022 = 10275
    const secondBracket2022 = 41775
    const thirdBracket2022 = 89075
    const fourthBracket2022 = 170500
    const fifthBracket2022 = 215950
    const sixthBracket2022 = 539900

  if (income < 0) {
    // You didn't make money
    // Also handles errors for negative numbers
  } else if (income >= 0 && income <= firstBracket2022) {
    console.log('You are in the first bracket')
    if (income - firstBracket === 0) {
        incomeTax = 1027.50
    }else {
        var incomeTax = income * 0.10;
    }
  } else if (income > firstBracket2022 && income <= secondBracket2022){
    console.log('You are in the second bracket')
    if (income - secondBracket2022 === 0) {
        incomeTax = 5013 + 1027.50
    } else {
        var incomeTax = ((income - firstBracket2022) * 0.12) + 1027.50;
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
    console.log('Your results:',incomeTax, income)
}
</script>

<template>
    <form action="">
        <input v-model="text" type="text" placeholder="Enter your income here">
        <button type="button" @click="calcIncome">Submit</button>
    </form>
</template>