import React, { useState, useEffect } from 'react';
import { Calendar, Heart, Star, Users, Cake } from 'lucide-react';

const WeeksOfLife = () => {
  const [birthDate, setBirthDate] = useState('1990-01-01');
  const [currentDate] = useState(new Date());
  const [weeksLived, setWeeksLived] = useState(0);
  const [lifeExpectancy] = useState(80); // years

  useEffect(() => {
    const birth = new Date(birthDate);
    const diffTime = Math.abs(currentDate - birth);
    const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
    setWeeksLived(diffWeeks);
  }, [birthDate, currentDate]);

  const totalWeeks = lifeExpectancy * 52;
  const weeksRemaining = totalWeeks - weeksLived;
  const completionPercentage = ((weeksLived / totalWeeks) * 100).toFixed(1);

  const renderWeekGrid = () => {
    const years = [];

    for (let year = 0; year < lifeExpectancy; year++) {
      const weekRows = [];

      for (let week = 0; week < 52; week++) {
        const weekNumber = year * 52 + week;
        const isLived = weekNumber < weeksLived;

        weekRows.push(
          <div
            key={weekNumber}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-sm transition-colors duration-200 ${
              isLived
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            title={`Year ${year + 1}, Week ${week + 1}${isLived ? ' (lived)' : ' (future)'}`}
          />
        );
      }

      years.push(
        <div key={year} className="flex gap-1 items-center">
          <div className="w-8 text-xs text-gray-400 text-right mr-2">{year + 1}</div>
          <div className="flex gap-1">
            {weekRows}
          </div>
        </div>
      );
    }

    return years;
  };

  const milestones = [
    { age: 18, label: 'Adulthood', icon: Star, color: 'text-yellow-500' },
    { age: 25, label: 'Quarter Century', icon: Cake, color: 'text-pink-500' },
    { age: 30, label: 'Thirty', icon: Users, color: 'text-purple-500' },
    { age: 40, label: 'Forty', icon: Heart, color: 'text-red-500' },
    { age: 50, label: 'Half Century', icon: Star, color: 'text-green-500' },
  ];

  const currentAge = Math.floor(weeksLived / 52);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Your Life in Weeks
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A visual representation of your journey through time. Each dot represents one week of your life.
          </p>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Birth Date
              </label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span className="text-lg font-semibold">Current Age: {currentAge} years</span>
              </div>
              <div className="text-sm text-gray-600">
                <p>Weeks lived: <span className="font-semibold text-blue-600">{weeksLived.toLocaleString()}</span></p>
                <p>Weeks remaining: <span className="font-semibold text-orange-600">{weeksRemaining.toLocaleString()}</span></p>
                <p>Life completion: <span className="font-semibold text-green-600">{completionPercentage}%</span></p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Life Milestones</h3>
            <div className="flex flex-wrap gap-4">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isPassed = currentAge >= milestone.age;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full border-2 transition-all duration-200 ${
                      isPassed
                        ? 'bg-green-50 border-green-200 text-green-700'
                        : 'bg-gray-50 border-gray-200 text-gray-500'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isPassed ? milestone.color : 'text-gray-400'}`} />
                    <span className="text-sm font-medium">{milestone.label} ({milestone.age})</span>
                    {isPassed && <span className="text-green-600">✓</span>}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Your Life Timeline ({lifeExpectancy} years)
            </h3>
            <div className="grid grid-cols-52 gap-1 md:gap-2 justify-center">
              {renderWeekGrid()}
            </div>
            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                <span>Weeks lived</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-200 rounded-sm"></div>
                <span>Future weeks</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center text-gray-500 text-sm">
          <p>Inspired by the concept that life is finite and every week counts.</p>
          <p className="mt-1">Make the most of your remaining {weeksRemaining.toLocaleString()} weeks!</p>
        </footer>
      </div>
    </div>
  );
};

export default WeeksOfLife;
