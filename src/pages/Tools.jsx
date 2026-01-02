import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, Download, TrendingUp, Home, Building, CreditCard, ArrowRight, Brain, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import FinancialQuiz from '@/components/interactive/FinancialQuiz';

function InvestmentCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [monthly, setMonthly] = useState(500);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(20);
  
  const calculateInvestment = () => {
    const r = rate / 100 / 12;
    const n = years * 12;
    const futureValue = principal * Math.pow(1 + r, n) + monthly * ((Math.pow(1 + r, n) - 1) / r);
    const totalContributions = principal + (monthly * n);
    const earnings = futureValue - totalContributions;
    return { futureValue, totalContributions, earnings };
  };
  
  const result = calculateInvestment();
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <Label className="text-[#1F2A44]">Initial Investment ($)</Label>
          <Input 
            type="number" 
            value={principal} 
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="mt-2 h-12 rounded-none"
          />
        </div>
        <div>
          <Label className="text-[#1F2A44]">Monthly Contribution ($)</Label>
          <Input 
            type="number" 
            value={monthly} 
            onChange={(e) => setMonthly(Number(e.target.value))}
            className="mt-2 h-12 rounded-none"
          />
        </div>
        <div>
          <Label className="text-[#1F2A44]">Expected Annual Return (%)</Label>
          <Input 
            type="number" 
            value={rate} 
            onChange={(e) => setRate(Number(e.target.value))}
            className="mt-2 h-12 rounded-none"
          />
        </div>
        <div>
          <Label className="text-[#1F2A44]">Investment Period (Years)</Label>
          <Input 
            type="number" 
            value={years} 
            onChange={(e) => setYears(Number(e.target.value))}
            className="mt-2 h-12 rounded-none"
          />
        </div>
      </div>
      
      <div className="bg-[#1F2A44] p-8 text-white">
        <h3 className="text-lg font-light mb-6">Your Investment Growth</h3>
        <div className="space-y-6">
          <div>
            <p className="text-gray-400 text-sm">Future Value</p>
            <p className="text-4xl font-semibold text-[#C2983B]">
              ${result.futureValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
            <div>
              <p className="text-gray-400 text-sm">Total Contributions</p>
              <p className="text-xl font-medium">
                ${result.totalContributions.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Investment Earnings</p>
              <p className="text-xl font-medium text-green-400">
                ${result.earnings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  
  const calculateMortgage = () => {
    const principal = homePrice - downPayment;
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const monthlyPayment = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - principal;
    return { monthlyPayment, totalPayment, totalInterest, principal };
  };
  
  const result = calculateMortgage();
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <Label className="text-[#1F2A44]">Home Price ($)</Label>
          <Input 
            type="number" 
            value={homePrice} 
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="mt-2 h-12 rounded-none"
          />
        </div>
        <div>
          <Label className="text-[#1F2A44]">Down Payment ($)</Label>
          <Input 
            type="number" 
            value={downPayment} 
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="mt-2 h-12 rounded-none"
          />
        </div>
        <div>
          <Label className="text-[#1F2A44]">Interest Rate (%)</Label>
          <Input 
            type="number" 
            step="0.1"
            value={interestRate} 
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="mt-2 h-12 rounded-none"
          />
        </div>
        <div>
          <Label className="text-[#1F2A44]">Loan Term (Years)</Label>
          <Input 
            type="number" 
            value={loanTerm} 
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="mt-2 h-12 rounded-none"
          />
        </div>
      </div>
      
      <div className="bg-[#1F2A44] p-8 text-white">
        <h3 className="text-lg font-light mb-6">Your Mortgage Breakdown</h3>
        <div className="space-y-6">
          <div>
            <p className="text-gray-400 text-sm">Monthly Payment</p>
            <p className="text-4xl font-semibold text-[#C2983B]">
              ${result.monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
            <div>
              <p className="text-gray-400 text-sm">Loan Amount</p>
              <p className="text-xl font-medium">
                ${result.principal.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Interest</p>
              <p className="text-xl font-medium text-red-400">
                ${result.totalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(25000);
  const [interestRate, setInterestRate] = useState(8);
  const [loanTerm, setLoanTerm] = useState(5);
  
  const calculateLoan = () => {
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const monthlyPayment = loanAmount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - loanAmount;
    return { monthlyPayment, totalPayment, totalInterest };
  };
  
  const result = calculateLoan();
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <Label className="text-[#1F2A44]">Loan Amount ($)</Label>
          <Input 
            type="number" 
            value={loanAmount} 
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="mt-2 h-12 rounded-none"
          />
        </div>
        <div>
          <Label className="text-[#1F2A44]">Interest Rate (%)</Label>
          <Input 
            type="number" 
            step="0.1"
            value={interestRate} 
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="mt-2 h-12 rounded-none"
          />
        </div>
        <div>
          <Label className="text-[#1F2A44]">Loan Term (Years)</Label>
          <Input 
            type="number" 
            value={loanTerm} 
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="mt-2 h-12 rounded-none"
          />
        </div>
      </div>
      
      <div className="bg-[#1F2A44] p-8 text-white">
        <h3 className="text-lg font-light mb-6">Your Loan Summary</h3>
        <div className="space-y-6">
          <div>
            <p className="text-gray-400 text-sm">Monthly Payment</p>
            <p className="text-4xl font-semibold text-[#C2983B]">
              ${result.monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
            <div>
              <p className="text-gray-400 text-sm">Total Payment</p>
              <p className="text-xl font-medium">
                ${result.totalPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Interest</p>
              <p className="text-xl font-medium text-red-400">
                ${result.totalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommercialMortgageCalculator() {
  const [propertyValue, setPropertyValue] = useState(1500000);
  const [downPayment, setDownPayment] = useState(375000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [loanTerm, setLoanTerm] = useState(20);
  const [annualIncome, setAnnualIncome] = useState(180000);
  
  const calculateCommercialMortgage = () => {
    const principal = propertyValue - downPayment;
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const monthlyPayment = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const annualDebtService = monthlyPayment * 12;
    const dscr = annualIncome / annualDebtService;
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - principal;
    const ltv = (principal / propertyValue) * 100;
    
    return { monthlyPayment, totalPayment, totalInterest, principal, dscr, ltv };
  };
  
  const result = calculateCommercialMortgage();
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <Label className="text-[#1F2A44]">Property Value ($)</Label>
          <Input 
            type="number" 
            value={propertyValue} 
            onChange={(e) => setPropertyValue(Number(e.target.value))}
            className="mt-2 h-12 rounded-none"
          />
        </div>
        <div>
          <Label className="text-[#1F2A44]">Down Payment ($)</Label>
          <Input 
            type="number" 
            value={downPayment} 
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="mt-2 h-12 rounded-none"
          />
        </div>
        <div>
          <Label className="text-[#1F2A44]">Interest Rate (%)</Label>
          <Input 
            type="number" 
            step="0.1"
            value={interestRate} 
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="mt-2 h-12 rounded-none"
          />
        </div>
        <div>
          <Label className="text-[#1F2A44]">Loan Term (Years)</Label>
          <Input 
            type="number" 
            value={loanTerm} 
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="mt-2 h-12 rounded-none"
          />
        </div>
        <div>
          <Label className="text-[#1F2A44]">Annual Property Income ($)</Label>
          <Input 
            type="number" 
            value={annualIncome} 
            onChange={(e) => setAnnualIncome(Number(e.target.value))}
            className="mt-2 h-12 rounded-none"
          />
        </div>
      </div>
      
      <div className="bg-[#1F2A44] p-8 text-white">
        <h3 className="text-lg font-light mb-6">Commercial Mortgage Analysis</h3>
        <div className="space-y-6">
          <div>
            <p className="text-gray-400 text-sm">Monthly Payment</p>
            <p className="text-4xl font-semibold text-[#C2983B]">
              ${result.monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
            <div>
              <p className="text-gray-400 text-sm">Loan Amount</p>
              <p className="text-xl font-medium">
                ${result.principal.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">LTV Ratio</p>
              <p className="text-xl font-medium">
                {result.ltv.toFixed(1)}%
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">DSCR</p>
              <p className={`text-xl font-medium ${result.dscr >= 1.25 ? 'text-green-400' : 'text-yellow-400'}`}>
                {result.dscr.toFixed(2)}x
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Interest</p>
              <p className="text-xl font-medium text-red-400">
                ${result.totalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const tools = [
  { id: 'investment', name: 'Investment', icon: TrendingUp, component: InvestmentCalculator },
  { id: 'mortgage', name: 'Mortgage', icon: Home, component: MortgageCalculator },
  { id: 'commercial', name: 'Commercial', icon: Building2, component: CommercialMortgageCalculator },
  { id: 'loan', name: 'Loan', icon: CreditCard, component: LoanCalculator }
];

export default function Tools() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#1F2A44] via-[#2a3654] to-[#1F2A44] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-[#C2983B] rounded-full" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-[#C2983B] text-sm tracking-[0.3em] uppercase mb-4 block">
              Free Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Your Financial Toolkit —{' '}
              <span className="text-[#C2983B] font-normal">No Cost, Just Clarity</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Practical tools to plan, budget, and invest smarter. 
              Start making informed financial decisions today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial Literacy Quiz */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C2983B]/10 rounded-full mb-6">
              <Brain className="w-8 h-8 text-[#C2983B]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-[#1F2A44]">
              Test Your <span className="font-normal">Financial Knowledge</span>
            </h2>
            <p className="text-gray-600 font-light mt-4 max-w-2xl mx-auto">
              Take our interactive quiz to discover your financial literacy level 
              and learn key concepts along the way.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <FinancialQuiz />
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#1F2A44]">
              Financial <span className="font-normal">Calculators</span>
            </h2>
          </motion.div>

          <Tabs defaultValue="investment" className="max-w-5xl mx-auto">
            <TabsList className="w-full grid grid-cols-4 mb-12 h-auto bg-gray-100 rounded-none">
              {tools.map((tool) => (
                <TabsTrigger 
                  key={tool.id} 
                  value={tool.id}
                  className="py-4 rounded-none data-[state=active]:bg-[#1F2A44] data-[state=active]:text-white"
                >
                  <tool.icon className="w-5 h-5 mr-2" />
                  {tool.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {tools.map((tool) => (
              <TabsContent key={tool.id} value={tool.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <tool.component />
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#1F2A44]">
              Downloadable <span className="font-normal">Resources</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#C2983B]/10 flex items-center justify-center mb-6 group-hover:bg-[#C2983B]/20 transition-colors">
                    <Download className="w-7 h-7 text-[#C2983B]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2A44] mb-3">Sample Budget Template</h3>
                  <p className="text-gray-600 font-light mb-6">
                    A comprehensive budget template to track income, expenses, and savings goals.
                  </p>
                  <Button variant="outline" className="rounded-none border-[#1F2A44] text-[#1F2A44] hover:bg-[#1F2A44] hover:text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download Excel
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#C2983B]/10 flex items-center justify-center mb-6 group-hover:bg-[#C2983B]/20 transition-colors">
                    <Download className="w-7 h-7 text-[#C2983B]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2A44] mb-3">Debt Payoff Tracker</h3>
                  <p className="text-gray-600 font-light mb-6">
                    Track multiple debts and visualize your progress to becoming debt-free.
                  </p>
                  <Button variant="outline" className="rounded-none border-[#1F2A44] text-[#1F2A44] hover:bg-[#1F2A44] hover:text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#C2983B]/10 flex items-center justify-center mb-6 group-hover:bg-[#C2983B]/20 transition-colors">
                    <Download className="w-7 h-7 text-[#C2983B]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2A44] mb-3">Financial Goals Worksheet</h3>
                  <p className="text-gray-600 font-light mb-6">
                    Define clear financial goals and create actionable steps to achieve them.
                  </p>
                  <Button variant="outline" className="rounded-none border-[#1F2A44] text-[#1F2A44] hover:bg-[#1F2A44] hover:text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#C2983B]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Need Personalized Guidance?
            </h2>
            <p className="text-xl text-white font-light mb-10 max-w-2xl mx-auto">
              Our tools are a great start, but nothing beats working with a professional coach.
            </p>
            <Link to={createPageUrl('Schedule')}>
              <Button 
                size="lg"
                className="bg-[#1F2A44] hover:bg-[#2a3654] text-white font-semibold px-10 py-6 text-lg rounded-none"
              >
                Schedule a Free Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}