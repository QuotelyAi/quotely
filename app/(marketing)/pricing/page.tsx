'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, X } from 'lucide-react';

interface PlatformPackage {
  name: string;
  price: number;
  tokenOptions: number[];
  defaultTokens: number;
  featured?: boolean;
  features: string[];
  amsLevel: string;
  macLevel: string;
}

const platformPackages: PlatformPackage[] = [
  {
    name: "Starter",
    price: 999,
    tokenOptions: [50, 100, 150, 200],
    defaultTokens: 50,
    amsLevel: "Essentials",
    macLevel: "Level 1",
    features: [
      "TurboRater",
      "Gail AI Voice",
      "Momentum AMS Essentials",
      "Momentum MAC Level 1",
      "IVANS",
      "API Key",
      "Tokens carry over"
    ]
  },
  {
    name: "Professional",
    price: 1799,
    tokenOptions: [250, 300, 350, 400, 450],
    defaultTokens: 250,
    featured: true,
    amsLevel: "Professional",
    macLevel: "Level 2",
    features: [
      "TurboRater",
      "Gail AI Voice",
      "Momentum AMS Professional",
      "Momentum MAC Level 2",
      "IVANS",
      "API Key",
      "Tokens carry over"
    ]
  },
  {
    name: "Enterprise",
    price: 2399,
    tokenOptions: [500, 600, 700, 800, 1000],
    defaultTokens: 500,
    amsLevel: "Business",
    macLevel: "Level 3",
    features: [
      "TurboRater",
      "Gail AI Voice",
      "Momentum AMS Business",
      "Momentum MAC+ Level 3",
      "IVANS",
      "API Key",
      "Tokens carry over"
    ]
  }
];

const comparisonFeatures = [
  { name: "Monthly Price", starter: "$999", professional: "$1,799", enterprise: "$2,399", isPrice: true },
  { name: "Base Monthly Tokens", starter: "50", professional: "250", enterprise: "500" },
  { name: "Token Carryover", starter: true, professional: true, enterprise: true },
  { name: "TurboRater", starter: true, professional: true, enterprise: true },
  { name: "Gail AI Voice", starter: true, professional: true, enterprise: true },
  { name: "Momentum AMS Essentials", starter: true, professional: false, enterprise: false },
  { name: "Momentum AMS Professional", starter: false, professional: true, enterprise: false },
  { name: "Momentum AMS Business", starter: false, professional: false, enterprise: true },
  { name: "Momentum MAC Level 1", starter: true, professional: false, enterprise: false },
  { name: "Momentum MAC Level 2", starter: false, professional: true, enterprise: false },
  { name: "Momentum MAC+ Level 3", starter: false, professional: false, enterprise: true },
  { name: "IVANS", starter: true, professional: true, enterprise: true },
  { name: "API Key", starter: true, professional: true, enterprise: true },
];

export default function PricingPage() {
  const [selectedTokens, setSelectedTokens] = useState<Record<string, number>>({
    Starter: 50,
    Professional: 250,
    Enterprise: 500
  });

  const handleTokenSelect = (packageName: string, tokens: number) => {
    setSelectedTokens(prev => ({
      ...prev,
      [packageName]: tokens
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Quotely Pricing
        </h1>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {platformPackages.map((pkg) => {
            const currentTokens = selectedTokens[pkg.name];

            return (
              <div
                key={pkg.name}
                className={`bg-white border p-8 ${
                  pkg.featured
                    ? 'border-2 border-blue-600'
                    : 'border-gray-200'
                }`}
              >
                <div className="text-xl font-bold mb-4 text-gray-900">
                  {pkg.name} {pkg.featured && <span>&#11088;</span>}
                </div>

                <div className="text-4xl font-bold mb-1 text-gray-900">
                  ${pkg.price.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500 mb-5">
                  per month
                </div>

                {/* Token Selector */}
                <div className="bg-gray-50 p-3 mb-4">
                  <span className="block font-bold text-sm mb-2 text-gray-700">
                    Select monthly tokens
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {pkg.tokenOptions.map((tokens) => (
                      <button
                        key={tokens}
                        onClick={() => handleTokenSelect(pkg.name, tokens)}
                        className={`px-3 py-1.5 text-xs border cursor-pointer transition-colors ${
                          currentTokens === tokens
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white border-gray-300 text-gray-700 hover:border-blue-400'
                        }`}
                      >
                        {tokens}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <ul className="mb-5">
                  {pkg.features.map((feature, index) => (
                    <li
                      key={index}
                      className="py-2 border-b border-gray-100 last:border-b-0 text-sm text-gray-700"
                    >
                      <span className="text-green-500 font-bold mr-2">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/demo-request"
                  className="block w-full py-2.5 bg-blue-600 text-white text-center text-sm font-bold hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <h2 className="text-lg font-bold mt-16 mb-5 text-gray-900">
          Feature Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-50 p-3 text-left border-b-2 border-gray-200 text-sm font-bold text-gray-700">
                  Feature
                </th>
                <th className="bg-gray-50 p-3 text-center border-b-2 border-gray-200 text-sm font-bold text-gray-700">
                  Starter
                </th>
                <th className="bg-gray-50 p-3 text-center border-b-2 border-gray-200 text-sm font-bold text-gray-700">
                  Professional
                </th>
                <th className="bg-gray-50 p-3 text-center border-b-2 border-gray-200 text-sm font-bold text-gray-700">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, index) => (
                <tr key={index}>
                  <td className={`p-3 border-b border-gray-100 text-sm ${feature.isPrice ? 'font-bold' : 'font-medium'} bg-gray-50 text-gray-700`}>
                    {feature.name}
                  </td>
                  <td className="p-3 border-b border-gray-100 text-center text-sm">
                    {typeof feature.starter === 'boolean' ? (
                      feature.starter ? (
                        <span className="text-green-500 font-bold">&#10003;</span>
                      ) : (
                        <span className="text-red-500 font-bold">&#9679;</span>
                      )
                    ) : (
                      <span className="text-gray-700">{feature.starter}</span>
                    )}
                  </td>
                  <td className="p-3 border-b border-gray-100 text-center text-sm">
                    {typeof feature.professional === 'boolean' ? (
                      feature.professional ? (
                        <span className="text-green-500 font-bold">&#10003;</span>
                      ) : (
                        <span className="text-red-500 font-bold">&#9679;</span>
                      )
                    ) : (
                      <span className="text-gray-700">{feature.professional}</span>
                    )}
                  </td>
                  <td className="p-3 border-b border-gray-100 text-center text-sm">
                    {typeof feature.enterprise === 'boolean' ? (
                      feature.enterprise ? (
                        <span className="text-green-500 font-bold">&#10003;</span>
                      ) : (
                        <span className="text-red-500 font-bold">&#9679;</span>
                      )
                    ) : (
                      <span className="text-gray-700">{feature.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
