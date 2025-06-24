import React from 'react'
import { Target, DollarSign, PiggyBank, LineChart, CheckCircle } from 'lucide-react'
const Workshop = () => {
    return (
        <section className="py-16">
            <div className="container">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center">
                        Your Workshop Toolkit: Skills You'll Gain
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <Target className="h-6 w-6 text-purple-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 font-opensans">Part 1: Goals That Ignite Action</h3>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Gain:</span> Define 3 motivating financial goals you'll actually
                                        hit this year.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <DollarSign className="h-6 w-6 text-purple-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 font-opensans">Part 2: Budgeting Without Tears</h3>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Gain:</span> Build your easy budget template & find an extra
                                        $100+ hidden in your spending monthly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <PiggyBank className="h-6 w-6 text-purple-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 font-opensans">Part 3: Debt Demolition & Savings Surge</h3>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Gain:</span> A clear plan to attack high-interest debt &
                                        automate your first $1k+ emergency savings.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <LineChart className="h-6 w-6 text-purple-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 font-opensans">Part 4: Smart Investing & BS Detection</h3>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Gain:</span> Understand core investing concepts (zero jargon!) &
                                        confidently ignore 90% of toxic online money 'advice'.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-sm text-gray-600 mt-8 flex flex-wrap justify-center gap-4">
                        <span className="inline-flex items-center">
                            <CheckCircle className="h-4 w-4 text-purple-500 mr-1" /> Live Expert Q&A
                        </span>
                        <span className="inline-flex items-center">
                            <CheckCircle className="h-4 w-4 text-purple-500 mr-1" /> Practical Downloadable Tools
                        </span>
                        <span className="inline-flex items-center">
                            <CheckCircle className="h-4 w-4 text-purple-500 mr-1" /> Supportive Community Access
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Workshop