"use strict";
export function getFederalTaxAmount(amount) {
    const standardDeduction2021 = 12550;
    const income = amount - standardDeduction2021;
    const firstBracket2021 = 9950;
    const firstBrackerMaxTax2021 = 995;
    const secondBracket2021 = 40525;
    const secondBracketMaxTax2021 = 4863;
    const thirdBracket2021 = 86375;
    const thirdBracketMaxTax2021 = 19002.50;
    const fourthBracket2021 = 164925;
    const fourthBracketMaxTax2021 = 39582;
    const fifthBracket2021 = 209425;
    const fifthBracketMaxTax2021 = 67016;
    const sixthBracket2021 = 523600;
    const sixthBracketMaxTax2021 = 183260;
    let incomeTax = 0;
    if (income < 0) {
        console.warn('You have entered an invalid income amount');
        // You didn't make money
        // Also handles errors for negative numbers
    }
    else if (income >= 0 && income <= firstBracket2021) {
        if (income - firstBracket2021 === 0) {
            incomeTax = firstBrackerMaxTax2021;
        }
        else {
            incomeTax = income * 0.10;
        }
    }
    else if (income > firstBracket2021 && income <= secondBracket2021) {
        if (income - secondBracket2021 === 0) {
            incomeTax = firstBrackerMaxTax2021 + secondBracketMaxTax2021;
        }
        else {
            incomeTax = ((income - firstBracket2021) * 0.12) + firstBrackerMaxTax2021;
        }
    }
    else if (income > secondBracket2021 && income < thirdBracket2021) {
        if (income - thirdBracket2021 === 0) {
            incomeTax = firstBrackerMaxTax2021 + secondBracketMaxTax2021 + thirdBracketMaxTax2021;
        }
        else {
            incomeTax = ((income - secondBracket2021) * 0.22) + firstBrackerMaxTax2021 + secondBracketMaxTax2021;
        }
    }
    else if (income > thirdBracket2021 && income < fourthBracket2021) {
        if (income - fourthBracket2021 === 0) {
            incomeTax = firstBrackerMaxTax2021 + secondBracketMaxTax2021 + thirdBracketMaxTax2021 + fourthBracketMaxTax2021;
        }
        else {
            incomeTax = ((income - thirdBracket2021) * 0.24) + firstBrackerMaxTax2021 + secondBracketMaxTax2021 + thirdBracketMaxTax2021;
        }
    }
    else if (income > fourthBracket2021 && income < fifthBracket2021) {
        if (income - fifthBracket2021 === 0) {
            incomeTax = firstBrackerMaxTax2021 + secondBracketMaxTax2021 + thirdBracketMaxTax2021 + fourthBracketMaxTax2021 + fifthBracketMaxTax2021;
        }
        else {
            incomeTax = ((income - fourthBracket2021) * 0.32) + firstBrackerMaxTax2021 + secondBracketMaxTax2021 + thirdBracketMaxTax2021 + fourthBracketMaxTax2021;
        }
    }
    else if (income > fifthBracket2021 && income < sixthBracket2021) {
        if (income - sixthBracket2021 === 0) {
            incomeTax = firstBrackerMaxTax2021 + secondBracketMaxTax2021 + thirdBracketMaxTax2021 + fourthBracketMaxTax2021 + fifthBracketMaxTax2021 + sixthBracketMaxTax2021;
        }
        else {
            incomeTax = ((income - fifthBracket2021) * 0.35) + firstBrackerMaxTax2021 + secondBracketMaxTax2021 + thirdBracketMaxTax2021 + fourthBracketMaxTax2021 + fifthBracketMaxTax2021;
        }
    }
    else {
        (income > sixthBracket2021);
        if (income - sixthBracket2021 === 0) {
            incomeTax = ((income - sixthBracket2021) * 0.37) + firstBrackerMaxTax2021 + secondBracketMaxTax2021 + thirdBracketMaxTax2021 + fourthBracketMaxTax2021 + fifthBracketMaxTax2021 + sixthBracketMaxTax2021;
        }
    }
    return incomeTax;
};
