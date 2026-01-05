import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, TrendingUp, Home, Building2, CreditCard, ArrowRight, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import FinancialQuiz from '@/components/interactive/FinancialQuiz';
import SEO from '@/components/seo/SEO';

function InvestmentCalculator({ formatCurrency, currency }) {
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
    <div className="bg-[#2c3e50] rounded-xl p-8 border border-white/10">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-[#c5a059] rounded-full flex items-center justify-center">
          <TrendingUp className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white">Investment Calculator</h3>
      </div>
      
      <div className="space-y-6 mb-8">
        <div>
          <Label className="text-gray-300 text-sm mb-2 block">Initial Investment ({currency})</Label>
          <Input 
            type="number" 
            value={principal} 
            onChange={(e) => setPrincipal(Number(e.target.value))}
            placeholder="e.g. 10000"
            className="h-14 bg-[#1a2b4b]/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c5a059] rounded-lg"
          />
        </div>
        <div>
          <Label className="text-gray-300 text-sm mb-2 block">Monthly Contribution ({currency})</Label>
          <Input 
            type="number" 
            value={monthly} 
            onChange={(e) => setMonthly(Number(e.target.value))}
            placeholder="e.g. 500"
            className="h-14 bg-[#1a2b4b]/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c5a059] rounded-lg"
          />
        </div>
        <div>
          <Label className="text-gray-300 text-sm mb-2 block">Expected Annual Return (%)</Label>
          <Input 
            type="number" 
            value={rate} 
            onChange={(e) => setRate(Number(e.target.value))}
            placeholder="e.g. 7"
            className="h-14 bg-[#1a2b4b]/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c5a059] rounded-lg"
          />
        </div>
        <div>
          <Label className="text-gray-300 text-sm mb-2 block">Investment Period (Years)</Label>
          <Input 
            type="number" 
            value={years} 
            onChange={(e) => setYears(Number(e.target.value))}
            placeholder="e.g. 20"
            className="h-14 bg-[#1a2b4b]/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c5a059] rounded-lg"
          />
        </div>
      </div>
      
      <div className="pt-6 border-t border-white/10">
        <p className="text-gray-400 text-sm mb-2">Potential Future Value:</p>
        <p className="text-5xl font-bold text-[#c5a059] mb-6">
          {formatCurrency(result.futureValue)}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-400 text-xs mb-1">Total Contributions</p>
            <p className="text-lg font-medium text-white">
              {formatCurrency(result.totalContributions)}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-xs mb-1">Investment Earnings</p>
            <p className="text-lg font-medium text-green-400">
              {formatCurrency(result.earnings)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MortgageCalculator({ formatCurrency, currency }) {
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
    <div className="bg-[#2c3e50] rounded-xl p-8 border border-white/10">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-[#c5a059] rounded-full flex items-center justify-center">
          <Home className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white">Mortgage Calculator</h3>
      </div>
      
      <div className="space-y-6 mb-8">
        <div>
          <Label className="text-gray-300 text-sm mb-2 block">Home Price ({currency})</Label>
          <Input 
            type="number" 
            value={homePrice} 
            onChange={(e) => setHomePrice(Number(e.target.value))}
            placeholder="e.g. 400000"
            className="h-14 bg-[#1a2b4b]/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c5a059] rounded-lg"
          />
        </div>
        <div>
          <Label className="text-gray-300 text-sm mb-2 block">Down Payment ({currency})</Label>
          <Input 
            type="number" 
            value={downPayment} 
            onChange={(e) => setDownPayment(Number(e.target.value))}
            placeholder="e.g. 80000"
            className="h-14 bg-[#1a2b4b]/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c5a059] rounded-lg"
          />
        </div>
        <div>
          <Label className="text-gray-300 text-sm mb-2 block">Interest Rate (%)</Label>
          <Input 
            type="number" 
            step="0.1"
            value={interestRate} 
            onChange={(e) => setInterestRate(Number(e.target.value))}
            placeholder="e.g. 6.5"
            className="h-14 bg-[#1a2b4b]/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c5a059] rounded-lg"
          />
        </div>
        <div>
          <Label className="text-gray-300 text-sm mb-2 block">Loan Term (Years)</Label>
          <Input 
            type="number" 
            value={loanTerm} 
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            placeholder="e.g. 30"
            className="h-14 bg-[#1a2b4b]/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c5a059] rounded-lg"
          />
        </div>
      </div>
      
      <div className="pt-6 border-t border-white/10">
        <p className="text-gray-400 text-sm mb-2">Monthly Payment:</p>
        <p className="text-5xl font-bold text-[#c5a059] mb-6">
          {formatCurrency(result.monthlyPayment)}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-400 text-xs mb-1">Loan Amount</p>
            <p className="text-lg font-medium text-white">
              {formatCurrency(result.principal)}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-xs mb-1">Total Interest</p>
            <p className="text-lg font-medium text-red-400">
              {formatCurrency(result.totalInterest)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommercialMortgageCalculator({ formatCurrency, currency }) {
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
    <div className="bg-[#2c3e50] rounded-xl p-8 border border-white/10">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-[#c5a059] rounded-full flex items-center justify-center">
          <Building2 className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white">Commercial Mortgage</h3>
      </div>
      
      <div className="space-y-6 mb-8">
        <div>
          <Label className="text-gray-300 text-sm mb-2 block">Property Value ({currency})</Label>
          <Input 
            type="number" 
            value={propertyValue} 
            onChange={(e) => setPropertyValue(Number(e.target.value))}
            placeholder="e.g. 1500000"
            className="h-14 bg-[#1a2b4b]/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c5a059] rounded-lg"
          />
        </div>
        <div>
          <Label className="text-gray-300 text-sm mb-2 block">Down Payment ({currency})</Label>
          <Input 
            type="number" 
            value={downPayment} 
            onChange={(e) => setDownPayment(Number(e.target.value))}
            placeholder="e.g. 375000"
            className="h-14 bg-[#1a2b4b]/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c5a059] rounded-lg"
          />
        </div>
        <div>
          <Label className="text-gray-300 text-sm mb-2 block">Interest Rate (%)</Label>
          <Input 
            type="number" 
            step="0.1"
            value={interestRate} 
            onChange={(e) => setInterestRate(Number(e.target.value))}
            placeholder="e.g. 7.5"
            className="h-14 bg-[#1a2b4b]/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c5a059] rounded-lg"
          />
        </div>
        <div>
          <Label className="text-gray-300 text-sm mb-2 block">Loan Term (Years)</Label>
          <Input 
            type="number" 
            value={loanTerm} 
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            placeholder="e.g. 20"
            className="h-14 bg-[#1a2b4b]/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c5a059] rounded-lg"
          />
        </div>
        <div>
          <Label className="text-gray-300 text-sm mb-2 block">Annual Property Income ({currency})</Label>
          <Input 
            type="number" 
            value={annualIncome} 
            onChange={(e) => setAnnualIncome(Number(e.target.value))}
            placeholder="e.g. 180000"
            className="h-14 bg-[#1a2b4b]/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c5a059] rounded-lg"
          />
        </div>
      </div>
      
      <div className="pt-6 border-t border-white/10">
        <p className="text-gray-400 text-sm mb-2">Monthly Payment:</p>
        <p className="text-5xl font-bold text-[#c5a059] mb-6">
          {formatCurrency(result.monthlyPayment)}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-400 text-xs mb-1">Loan Amount</p>
            <p className="text-lg font-medium text-white">
              {formatCurrency(result.principal)}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-xs mb-1">LTV Ratio</p>
            <p className="text-lg font-medium text-white">
              {result.ltv.toFixed(1)}%
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-xs mb-1">DSCR</p>
            <p className={`text-lg font-medium ${result.dscr >= 1.25 ? 'text-green-400' : 'text-yellow-400'}`}>
              {result.dscr.toFixed(2)}x
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-xs mb-1">Total Interest</p>
            <p className="text-lg font-medium text-red-400">
              {formatCurrency(result.totalInterest)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoanCalculator({ formatCurrency, currency }) {
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
    <div className="bg-[#2c3e50] rounded-xl p-8 border border-white/10">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-[#c5a059] rounded-full flex items-center justify-center">
          <CreditCard className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white">Loan Calculator</h3>
      </div>
      
      <div className="space-y-6 mb-8">
        <div>
          <Label className="text-gray-300 text-sm mb-2 block">Loan Amount ({currency})</Label>
          <Input 
            type="number" 
            value={loanAmount} 
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            placeholder="e.g. 25000"
            className="h-14 bg-[#1a2b4b]/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c5a059] rounded-lg"
          />
        </div>
        <div>
          <Label className="text-gray-300 text-sm mb-2 block">Interest Rate (%)</Label>
          <Input 
            type="number" 
            step="0.1"
            value={interestRate} 
            onChange={(e) => setInterestRate(Number(e.target.value))}
            placeholder="e.g. 8"
            className="h-14 bg-[#1a2b4b]/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c5a059] rounded-lg"
          />
        </div>
        <div>
          <Label className="text-gray-300 text-sm mb-2 block">Loan Term (Years)</Label>
          <Input 
            type="number" 
            value={loanTerm} 
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            placeholder="e.g. 5"
            className="h-14 bg-[#1a2b4b]/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c5a059] rounded-lg"
          />
        </div>
      </div>
      
      <div className="pt-6 border-t border-white/10">
        <p className="text-gray-400 text-sm mb-2">Monthly Payment:</p>
        <p className="text-5xl font-bold text-[#c5a059] mb-6">
          {formatCurrency(result.monthlyPayment)}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-400 text-xs mb-1">Total Payment</p>
            <p className="text-lg font-medium text-white">
              {formatCurrency(result.totalPayment)}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-xs mb-1">Total Interest</p>
            <p className="text-lg font-medium text-red-400">
              {formatCurrency(result.totalInterest)}
            </p>
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

const currencies = [
  { code: 'USD', symbol: '$', rate: 1, name: 'US Dollar' },
  { code: 'ILS', symbol: '₪', rate: 3.6, name: 'Israeli Shekel' },
  { code: 'GBP', symbol: '£', rate: 0.79, name: 'British Pound' }
];

export default function Tools() {
  const isUKSession = sessionStorage.getItem('isUKSession') === 'true';
  const [currency, setCurrency] = useState(isUKSession ? 'GBP' : 'USD');
  
  const currentCurrency = currencies.find(c => c.code === currency);
  
  const formatCurrency = (amount) => {
    return `${currentCurrency.symbol}${amount.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
  };
  
  return (
    <div className="pt-20">
      <SEO
        title="Free Financial Tools & Calculators"
        description="Access free financial calculators, budget templates, and resources. Plan investments, calculate mortgages, and improve your financial literacy with our interactive tools."
        canonical="/tools"
      />
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#1a2b4b] via-[#2c3e50] to-[#1a2b4b] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-[#c5a059] rounded-full" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-[#c5a059] text-sm tracking-[0.3em] uppercase mb-4 block">
              Free Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Your Financial Toolkit —{' '}
              <span className="text-[#c5a059] font-normal">No Cost, Just Clarity</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
              Practical tools to plan, budget, and invest smarter. 
              Start making informed financial decisions today.
            </p>
            
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-white/80 font-medium">Select Your Currency:</span>
              <div className="flex gap-2 bg-white/10 p-1.5 rounded-lg flex-wrap">
                {currencies.map((curr) => (
                  <button
                    key={curr.code}
                    onClick={() => setCurrency(curr.code)}
                    className={`px-5 py-2.5 text-sm font-semibold transition-all rounded-lg ${
                      currency === curr.code
                        ? 'bg-[#c5a059] text-white shadow-lg'
                        : 'text-white/70 hover:text-white hover:bg-white/20'
                    }`}
                  >
                    {curr.symbol} {curr.code}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#1a2b4b] mb-6">
              Financial <span className="font-normal">Calculators</span>
            </h2>
          </motion.div>

          <Tabs defaultValue="investment" className="max-w-4xl mx-auto">
            <TabsList className="w-full grid grid-cols-2 sm:grid-cols-4 mb-12 h-auto bg-[#1a2b4b]/20 rounded-lg gap-2 p-2">
              {tools.map((tool) => (
                <TabsTrigger 
                  key={tool.id} 
                  value={tool.id}
                  className="py-4 rounded-lg data-[state=active]:bg-[#1a2b4b] data-[state=active]:text-white text-xs sm:text-sm font-medium transition-all"
                >
                  <tool.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
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
                  <tool.component formatCurrency={formatCurrency} currency={currentCurrency.code} />
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#1a2b4b]">
              Downloadable <span className="font-normal">Resources</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-gray-100 mb-4 flex items-center justify-center">
                    <Download className="w-6 h-6 text-gray-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a2b4b] mb-2">Your Goals Sheet</h3>
                  <p className="text-gray-600 text-sm font-light flex-grow mb-6">
                    Capture your goals simply and clearly. It's the starting point for building your plan.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="block"
                    >
                      <Button variant="outline" className="w-full rounded-lg border-gray-300">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </a>
                    <a 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="block"
                    >
                      <Button variant="outline" className="w-full rounded-lg border-gray-300">
                        <Download className="w-4 h-4 mr-2" />
                        Download Excel
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-gray-100 mb-4 flex items-center justify-center">
                    <Download className="w-6 h-6 text-gray-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a2b4b] mb-2">Asset Sheet</h3>
                  <p className="text-gray-600 text-sm font-light flex-grow mb-6">
                    See your full financial picture in one clear sheet. Review it monthly to support real action and progress.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="block"
                    >
                      <Button variant="outline" className="w-full rounded-lg border-gray-300">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </a>
                    <a 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="block"
                    >
                      <Button variant="outline" className="w-full rounded-lg border-gray-300">
                        <Download className="w-4 h-4 mr-2" />
                        Download Excel
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-gray-100 mb-4 flex items-center justify-center">
                    <Download className="w-6 h-6 text-gray-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a2b4b] mb-2">Budget Planner</h3>
                  <p className="text-gray-600 text-sm font-light flex-grow mb-6">
                    A powerful Excel budget tool you can also upload to Google Sheets for tracking. Plan your month, track weekly, and stay on top of spending with clear totals.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="block"
                    >
                      <Button variant="outline" className="w-full rounded-lg border-gray-300">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </a>
                    <a 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="block"
                    >
                      <Button variant="outline" className="w-full rounded-lg border-gray-300">
                        <Download className="w-4 h-4 mr-2" />
                        Download Excel
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full border border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-gray-100 mb-4 flex items-center justify-center">
                    <Download className="w-6 h-6 text-gray-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a2b4b] mb-2">Budget Category Guide</h3>
                  <p className="text-gray-600 text-sm font-light flex-grow mb-6">
                    A ready-made list of categories to use in the UK Budget Planner dropdowns. This guide matches the category dropdowns in the UK Budget Planner.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="block"
                    >
                      <Button variant="outline" className="w-full rounded-lg border-gray-300">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </a>
                    <a 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="block"
                    >
                      <Button variant="outline" className="w-full rounded-lg border-gray-300">
                        <Download className="w-4 h-4 mr-2" />
                        Download Excel
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financial Literacy Quiz */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c5a059]/10 rounded-full mb-6">
              <Brain className="w-8 h-8 text-[#c5a059]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-[#1a2b4b]">
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

      {/* CTA */}
      <section className="py-24 bg-[#c5a059]">
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
                className="bg-[#1a2b4b] hover:bg-[#2c3e50] text-white font-semibold px-10 py-6 text-lg rounded-lg shadow-lg"
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