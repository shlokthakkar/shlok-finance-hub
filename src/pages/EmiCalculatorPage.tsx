import React, { useState, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calculator, Car, Home } from "lucide-react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from "framer-motion";

const COLORS = ['#4F46E5', '#F59E0B'];

const EmiCalculatorPage = () => {
  const resultRef = useRef(null);

  const [carLoanAmount, setCarLoanAmount] = useState('');
  const [carInterestRate, setCarInterestRate] = useState('');
  const [carTenure, setCarTenure] = useState([12]);
  const [carEmi, setCarEmi] = useState(null);
  const [carBreakdown, setCarBreakdown] = useState(null);

  const [mortgageLoanAmount, setMortgageLoanAmount] = useState('');
  const [mortgageInterestRate, setMortgageInterestRate] = useState('');
  const [mortgageTenure, setMortgageTenure] = useState([12]);
  const [mortgageEmi, setMortgageEmi] = useState(null);
  const [mortgageBreakdown, setMortgageBreakdown] = useState(null);

  const calculateEMI = (principal, annualRate, months) => {
    const monthlyRate = annualRate / 12 / 100;
    if (!principal || !annualRate || !months) return null;

    const emi = monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;
    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest)
    };
  };

  const scrollToResult = () => {
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const calculateCarEMI = () => {
    const principal = parseFloat(carLoanAmount);
    const rate = parseFloat(carInterestRate);
    const months = carTenure[0];
    const result = calculateEMI(principal, rate, months);
    if (result) {
      setCarEmi(result.emi);
      setCarBreakdown(result);
      scrollToResult();
    }
  };

  const calculateMortgageEMI = () => {
    const principal = parseFloat(mortgageLoanAmount);
    const rate = parseFloat(mortgageInterestRate);
    const months = mortgageTenure[0];
    const result = calculateEMI(principal, rate, months);
    if (result) {
      setMortgageEmi(result.emi);
      setMortgageBreakdown(result);
      scrollToResult();
    }
  };

  const renderChart = (principal, interest) => (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={[{ name: 'Principal', value: principal }, { name: 'Interest', value: interest }]}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
        >
          <Cell fill={COLORS[0]} />
          <Cell fill={COLORS[1]} />
        </Pie>
        <Tooltip />
        <Legend layout="horizontal" align="center" verticalAlign="bottom" />
      </PieChart>
    </ResponsiveContainer>
  );

  const renderSliderWithLabels = (value, onChange, min, max, step) => (
    <div>
      <Slider min={min} max={max} step={step} value={value} onValueChange={onChange} />
      <div className="flex justify-between text-sm text-gray-500 mt-1 px-1">
        <span>{min} months</span>
        <span>{max} months</span>
      </div>
    </div>
  );

  const renderResultBox = (emi, breakdown, principal) => (
    <motion.div
      ref={resultRef}
      initial={{ opacity: 0, y: 20 }}
      animate={emi ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
      className="h-full flex flex-col justify-center w-full"
    >
      <div className="p-6 bg-finance-accent rounded-lg text-center">
        <h3 className="text-lg font-semibold">Monthly EMI</h3>
        <p className="text-3xl font-bold text-finance-primary">₹{emi.toLocaleString('en-IN')}</p>
        <p className="mt-2 text-sm text-gray-600">
          Total Payment: ₹{breakdown.totalPayment.toLocaleString('en-IN')}<br />
          Interest: ₹{breakdown.totalInterest.toLocaleString('en-IN')}
        </p>
        <div className="mt-4">{renderChart(principal, breakdown.totalInterest)}</div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Calculator className="h-10 w-10 text-finance-primary" /> EMI Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your monthly EMI for car and mortgage loans
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="car-loan">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="car-loan" className="flex items-center gap-2">
                <Car className="h-4 w-4" /> Car Loan EMI
              </TabsTrigger>
              <TabsTrigger value="mortgage-loan" className="flex items-center gap-2">
                <Home className="h-4 w-4" /> Mortgage Loan EMI
              </TabsTrigger>
            </TabsList>

            <TabsContent value="car-loan">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-finance-primary" /> Car Loan EMI Calculator
                  </CardTitle>
                  <CardDescription>Tenure up to 84 months</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="space-y-6 w-full">
                    <Label>Loan Amount (₹)</Label>
                    <Input placeholder="e.g., 500000" value={carLoanAmount} onChange={e => setCarLoanAmount(e.target.value)} type="number" />
                    <Label>Interest Rate (% p.a.)</Label>
                    <Input placeholder="e.g., 9" value={carInterestRate} onChange={e => setCarInterestRate(e.target.value)} type="number" />
                    <Label>Tenure: {carTenure[0]} months</Label>
                    {renderSliderWithLabels(carTenure, setCarTenure, 12, 84, 6)}
                    <Button onClick={calculateCarEMI} className="w-full bg-finance-primary hover:bg-finance-primary/90">Calculate EMI</Button>

{carEmi && carBreakdown && renderResultBox(carEmi, carBreakdown, parseFloat(carLoanAmount))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mortgage-loan">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-finance-primary" /> Mortgage Loan EMI Calculator
                  </CardTitle>
                  <CardDescription>Tenure up to 180 months</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="space-y-6 w-full">
                    <Label>Loan Amount (₹)</Label>
                    <Input placeholder="e.g., 2500000" value={mortgageLoanAmount} onChange={e => setMortgageLoanAmount(e.target.value)} type="number" />
                    <Label>Interest Rate (% p.a.)</Label>
                    <Input placeholder="e.g., 7.5" value={mortgageInterestRate} onChange={e => setMortgageInterestRate(e.target.value)} type="number" />
                    <Label>Tenure: {mortgageTenure[0]} months</Label>
                    {renderSliderWithLabels(mortgageTenure, setMortgageTenure, 12, 180, 12)}
                    <Button onClick={calculateMortgageEMI} className="w-full bg-finance-primary hover:bg-finance-primary/90">Calculate EMI</Button>

{mortgageEmi && mortgageBreakdown && renderResultBox(mortgageEmi, mortgageBreakdown, parseFloat(mortgageLoanAmount))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculatorPage;
