function calculateSalary(){
// define payee rates

             // Define tax rates and contribution percentages
const PAYEE_RATE = 0.3; // ,30% payee tax
const NHIF_RATE = 600; // 600 NHIF contribution
const NSSF_RATE = 300; // 300 NSSF contribution

// Prompt user for input of basic salary and benefits
const basicSalary = parseFloat(document.getElementById('i').value);
const benefits = parseFloat(document.getElementById('z').value);

// Calculate gross salary by adding basic salary and benefits
const grossSalary = basicSalary + benefits;

// Calculate payee tax by multiplying gross salary by PAYEE_RATE
const payee = grossSalary * PAYEE_RATE;

// Calculate NHIF deduction by multiplying gross salary by NHIF_RATE
const nhifDeduction = grossSalary * NHIF_RATE;

// Calculate NSSF deduction by multiplying gross salary by NSSF_RATE
const nssfDeduction = grossSalary * NSSF_RATE;

// Calculate net salary by subtracting payee tax, NHIF deduction, and NSSF deduction from gross salary
const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;



document.getElementById('f').innerHTML = `kes ${grossSalary.toFixed(1)}`;
document.getElementById('d').innerHTML = `kes ${nhifDeduction.toFixed(1)}`;
document.getElementById('e').innerHTML = `kes ${nssfDeduction.toFixed(1)}`;
document.getElementById('c').innerHTML = `kes ${payee.toFixed(1)}`;
document.getElementById('g').innerHTML = `kes ${netSalary.toFixed(1)}`;
}