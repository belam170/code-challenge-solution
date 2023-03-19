             // define payee rates
// Define tax rates and contribution percentages
const PAYEE_RATE = [0.1,0.25,0.3]; // 10%,25%,30% payee tax
const NHIF_RATE = 0.25; // 25% NHIF contribution
const NSSF_RATE = 0.01; // 1% NSSF contribution

// Prompt user for input of basic salary and benefits
const basicSalary = Number(prompt("Enter your basic salary:"));
const benefits = Number(prompt("Enter your benefits:"));

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



