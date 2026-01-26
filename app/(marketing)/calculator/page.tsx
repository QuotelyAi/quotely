'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Calculator as CalcIcon, TrendingUp } from 'lucide-react';

interface CalculatorData {
  numAgents: number;
  quotesPerAgent: number;
  conversionRate: number;
  averagePremium: number;
  commissionRate: number;
}

const defaultCalculatorData: CalculatorData = {
  numAgents: 5,
  quotesPerAgent: 20,
  conversionRate: 15,
  averagePremium: 1500,
  commissionRate: 10,
};

export default function CalculatorPage() {
  const [calculatorData, setCalculatorData] = useState<CalculatorData>(defaultCalculatorData);

  const calculations = useMemo(() => {
    const { numAgents, quotesPerAgent, conversionRate, averagePremium, commissionRate } =
      calculatorData;

    const monthlyQuotes = numAgents * quotesPerAgent * 4;
    const monthlyPolicies = (monthlyQuotes * conversionRate) / 100;
    const monthlyPremium = monthlyPolicies * averagePremium;
    const monthlyCommission = (monthlyPremium * commissionRate) / 100;

    const yearlyQuotes = monthlyQuotes * 12;
    const yearlyPolicies = monthlyPolicies * 12;
    const yearlyPremium = monthlyPremium * 12;
    const yearlyCommission = monthlyCommission * 12;

    // With Quotely improvements (40% conversion increase, 50% time savings)
    const improvedConversionRate = conversionRate * 1.4;
    const improvedMonthlyPolicies = (monthlyQuotes * improvedConversionRate) / 100;
    const improvedMonthlyPremium = improvedMonthlyPolicies * averagePremium;
    const improvedMonthlyCommission = (improvedMonthlyPremium * commissionRate) / 100;

    const improvedYearlyPolicies = improvedMonthlyPolicies * 12;
    const improvedYearlyPremium = improvedMonthlyPremium * 12;
    const improvedYearlyCommission = improvedMonthlyCommission * 12;

    const additionalYearlyRevenue = improvedYearlyCommission - yearlyCommission;
    const roi = ((additionalYearlyRevenue - 11988) / 11988) * 100; // Based on $999/month cost

    return {
      current: {
        monthlyQuotes,
        monthlyPolicies,
        monthlyPremium,
        monthlyCommission,
        yearlyQuotes,
        yearlyPolicies,
        yearlyPremium,
        yearlyCommission,
      },
      withQuotely: {
        monthlyPolicies: improvedMonthlyPolicies,
        monthlyPremium: improvedMonthlyPremium,
        monthlyCommission: improvedMonthlyCommission,
        yearlyPolicies: improvedYearlyPolicies,
        yearlyPremium: improvedYearlyPremium,
        yearlyCommission: improvedYearlyCommission,
      },
      improvement: {
        additionalYearlyRevenue,
        roi,
      },
    };
  }, [calculatorData]);

  const handleInputChange = (field: keyof CalculatorData, value: string) => {
    const numValue = parseFloat(value) || 0;
    setCalculatorData((prev) => ({ ...prev, [field]: numValue }));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ROI Calculator</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how much additional revenue Quotely can generate for your agency
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div>
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CalcIcon className="mr-2 text-yellow-500" />
                Your Agency Details
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Number of Agents
                  </label>
                  <input
                    type="number"
                    value={calculatorData.numAgents}
                    onChange={(e) => handleInputChange('numAgents', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Quotes per Agent (Weekly)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.quotesPerAgent}
                    onChange={(e) => handleInputChange('quotesPerAgent', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Conversion Rate (%)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.conversionRate}
                    onChange={(e) => handleInputChange('conversionRate', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Average Premium ($)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.averagePremium}
                    onChange={(e) => handleInputChange('averagePremium', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Commission Rate (%)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.commissionRate}
                    onChange={(e) => handleInputChange('commissionRate', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Current Performance */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Current Performance</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Monthly Policies</p>
                  <p className="text-2xl font-bold text-white">
                    {Math.round(calculations.current.monthlyPolicies)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Yearly Commission</p>
                  <p className="text-2xl font-bold text-white">
                    {formatCurrency(calculations.current.yearlyCommission)}
                  </p>
                </div>
              </div>
            </div>

            {/* With Quotely */}
            <div className="bg-primary-900/50 border-2 border-primary-600 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">With Quotely</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-300">Monthly Policies</p>
                  <p className="text-2xl font-bold text-yellow-500">
                    {Math.round(calculations.withQuotely.monthlyPolicies)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Yearly Commission</p>
                  <p className="text-2xl font-bold text-yellow-500">
                    {formatCurrency(calculations.withQuotely.yearlyCommission)}
                  </p>
                </div>
              </div>
            </div>

            {/* ROI Summary */}
            <div className="bg-green-900/30 border-2 border-green-600 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <TrendingUp className="mr-2 text-green-500" />
                Your ROI with Quotely
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-green-300">Additional Yearly Revenue</p>
                  <p className="text-3xl font-bold text-green-400">
                    {formatCurrency(calculations.improvement.additionalYearlyRevenue)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-green-300">Return on Investment</p>
                  <p className="text-3xl font-bold text-green-400">
                    {calculations.improvement.roi.toFixed(0)}%
                  </p>
                </div>
                <div className="pt-4 border-t border-green-700">
                  <p className="text-sm text-green-300">
                    Based on 40% conversion improvement and Core Platform ($999/month)
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Ready to boost your revenue?</h3>
              <Link
                href="/demo-request"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Start Your Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
