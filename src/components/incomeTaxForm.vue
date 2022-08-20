<script lang="ts" setup>
import { ref, computed } from 'vue'
import { getFederalTaxAmount, getStateTaxAmount } from '../Helpers/federalTaxCalc.js'

const text = ref('')
const totalFederalTax = ref(0)
const totalSocialSecurityTax = ref(0)
const totalMedicareTax = ref(0)
const takeHomePay = ref(0)
const totalStateTax = ref(0)
const displayPay = ref('')
function calcIncome () {
  const standardDeduction2021 = 12550
  const income = (parseInt(text.value) - standardDeduction2021)
  const incomeTax = getFederalTaxAmount(income)
  const stateIncomeTax = getStateTaxAmount(income)

  const socialSecurityTax = income * 0.062
  const medicareTax = income * 0.0145
  totalFederalTax.value = incomeTax
  totalSocialSecurityTax.value = socialSecurityTax
  totalMedicareTax.value = medicareTax
  totalStateTax.value = stateIncomeTax
  takeHomePay.value = ((income - incomeTax - socialSecurityTax - medicareTax - stateIncomeTax) + standardDeduction2021)
  displayPay.value = currencyFormatter.format(takeHomePay.value)
}
const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

const filteredTakeHome = computed(() => {
  return currencyFormatter.format(takeHomePay.value)
})

const filteredFederalTax = computed(() => {
  return currencyFormatter.format(totalFederalTax.value)
})

const filteredTotalSocialSecurityTax = computed(() => {
  return currencyFormatter.format(totalSocialSecurityTax.value)
})

const filteredTotalMedicareTax = computed(() => {
  return currencyFormatter.format(totalMedicareTax.value)
})

const filteredTotalSalesTax = computed(() => {
  return currencyFormatter.format(totalStateTax.value)
})
</script>

<template>
  <h1 class="text-3xl font-bold underline pb-4">Income Tax Calculator</h1>
  <div class="grid grid-cols-4 gap-4">
    <p>Your total federal tax amount is: <br> <span class=" text-red-600"> {{ filteredFederalTax }}</span></p>
    <p>Your total social security tax amount is: <br> <span class=" text-red-600">{{ filteredTotalSocialSecurityTax }}</span></p>
    <p>Your total mediacare tax amount is: <br> <span class=" text-red-600">{{ filteredTotalMedicareTax }}</span></p>
    <p>Your total kansas state tax amount is: <br> <span class=" text-red-600">{{ filteredTotalSalesTax }}</span></p>
  </div>
  <div class=" py-4">
    <p>Your take home pay is: <span class=" text-green-500 ">{{ filteredTakeHome }}</span></p>
    <!-- <select name="frequency">
      <option value="weekly">Weekly</option>
      <option value="biweekly">Biweekly</option>
      <option value="monthly">Monthly</option>
    </select> -->
  </div>
  <div class="grid grid-cols-2">
      <form class=" grid grid-cols-2">
        <input class=" pr-4 text-center" v-model="text" type="text" placeholder="Enter your income here">
        <button class=" mx-4 px-4 bg-blue-600" type="button" @click.prevent="calcIncome">Submit</button>
    </form>
  </div>
</template>
