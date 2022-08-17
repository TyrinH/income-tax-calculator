<script lang="ts" setup>
import { ref } from 'vue'
import { getFederalTaxAmount } from '../Helpers/federalTaxCalc.js'

const text = ref('')
const totalFederalTax = ref(0)
const totalSocialSecurityTax = ref(0)
const totalMedicareTax = ref(0)
const takeHomePay = ref(0)
const totalStateTax = ref(0)
function calcIncome () {
  const standardDeduction2021 = 12550
  const income = (parseInt(text.value) - standardDeduction2021)
  const incomeTax = getFederalTaxAmount(income)

  let stateIncomeTax = 0
  if (income > 0 && income <= 15000) {
    if (income - 15000 === 0) {
      stateIncomeTax = 465
    } else {
      stateIncomeTax = (income * 0.031)
    }
  } else if (income > 15000 && income <= 30000) {
    if (income - 30000 === 0) {
      stateIncomeTax = 930
    } else {
      stateIncomeTax = (income * 0.0525) + 465
    }
  } else if (income > 30000) {
    if (income - 30000 === 0) {
      stateIncomeTax = 1252.50
    } else {
      stateIncomeTax = (income * 0.057) + 1252.50
    }
  }

  const socialSecurityTax = income * 0.062
  const medicareTax = income * 0.0145
  totalFederalTax.value = incomeTax
  totalSocialSecurityTax.value = socialSecurityTax
  totalMedicareTax.value = medicareTax
  totalStateTax.value = stateIncomeTax
  takeHomePay.value = Math.round(((income - incomeTax - socialSecurityTax - medicareTax - stateIncomeTax) + standardDeduction2021))
}
</script>

<template>
  <div>
    <h1>Income Tax Calculator</h1>
    <h2>Your total federal tax amount is: ${{ totalFederalTax }}</h2>
    <h2>Your total social security tax amount is: ${{ totalSocialSecurityTax }}</h2>
    <h2>Your total mediacare tax amount is: ${{ totalMedicareTax }}</h2>
    <h2>Your total kansas state tax amount is: ${{ totalStateTax }}</h2>
    <h2>Your take home pay is: ${{ takeHomePay }}</h2>
  </div>
    <form action="">
        <input v-model="text" type="text" placeholder="Enter your income here">
        <button type="button" @click.prevent="calcIncome">Submit</button>
    </form>
</template>
