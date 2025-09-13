import { useState, useEffect } from 'react';
import { Calendar, Heart, Clock, Users, Globe, Sparkles, Music, Film, Newspaper, TrendingUp, Zap } from 'lucide-react';

export default function WeeksOfLife() {
  const [stats, setStats] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [showHoverData, setShowHoverData] = useState(false);
  const [hoverWeek, setHoverWeek] = useState(null);
  const [lastLogin, setLastLogin] = useState(null);
  
  // Fixed birth date: Use a representative 1970s date for privacy
  const birthdate = '1976-07-04'; // Using Bicentennial Day as representative date
  
  useEffect(() => {
    setStats(calculateStats(birthdate));
    
    // Simulate last login (could be from localStorage in a real app)
    const now = new Date();
    const lastLoginDate = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000)); // 7 days ago
    setLastLogin(lastLoginDate);
  }, []);
  
  const calculateStats = (date) => {
    const birthDate = new Date(date);
    const today = new Date();
    const birthYear = birthDate.getFullYear();
    
    // Calculate weeks lived
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    const weeksLived = Math.floor((today - birthDate) / msInWeek);
    
    // Calculate days lived
    const msInDay = 1000 * 60 * 60 * 24;
    const daysLived = Math.floor((today - birthDate) / msInDay);
    
    // Calculate age in years
    const ageInYears = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 365.25));
    
    // Calculate hours slept (assuming 8 hours per day)
    const hoursSlept = Math.floor(daysLived * 8);
    
    // Calculate heartbeats (average 70 bpm)
    const heartbeats = Math.floor(daysLived * 24 * 60 * 70);
    
    // Calculate breaths (average 16 breaths per minute)
    const breaths = Math.floor(daysLived * 24 * 60 * 16);

    // Calculate seasons experienced
    const seasons = Math.floor(daysLived / 91.25);
    
    return {
      weeksLived,
      daysLived,
      hoursSlept,
      heartbeats,
      breaths,
      seasons,
      birthYear,
      ageInYears
    };
  };

  const calculateSinceLastLogin = () => {
    if (!lastLogin || !stats) return null;
    
    const now = new Date();
    const timeDiff = now - lastLogin;
    const daysSince = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hoursSince = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutesSince = Math.floor(timeDiff / (1000 * 60));
    
    const heartbeatsSince = Math.floor(minutesSince * 70);
    const breathsSince = Math.floor(minutesSince * 16);
    
    return {
      days: daysSince,
      hours: hoursSince,
      minutes: minutesSince,
      heartbeats: heartbeatsSince,
      breaths: breathsSince
    };
  };

  const getLifeEventForWeek = (weekNumber) => {
    // Major life events mapped to approximate weeks with colors matching decade themes
    const events = {
      // Birth year events (1970s - violet theme)
      0: { icon: Music, title: 'Super Bowl X - Steelers beat Cowboys', type: 'world', bgColor: '#8b5cf6', decade: '1970s' },
      26: { icon: Globe, title: 'America\'s Bicentennial celebrations', type: 'world', bgColor: '#8b5cf6', decade: '1970s' },
      52: { icon: Film, title: 'Star Wars filming begins', type: 'world', bgColor: '#8b5cf6', decade: '1970s' },
      
      // Early childhood (late 1970s)
      156: { icon: Film, title: 'Star Wars released', type: 'world', bgColor: '#8b5cf6', decade: '1970s' },
      208: { icon: Music, title: 'Saturday Night Fever era', type: 'world', bgColor: '#8b5cf6', decade: '1970s' },
      260: { icon: Music, title: 'Disco at its peak', type: 'world', bgColor: '#8b5cf6', decade: '1970s' },
      
      // Childhood 80s (cyan theme)
      416: { icon: Music, title: 'MTV launches', type: 'world', bgColor: '#06b6d4', decade: '1980s' },
      468: { icon: TrendingUp, title: 'Nintendo boom begins', type: 'world', bgColor: '#06b6d4', decade: '1980s' },
      520: { icon: Music, title: 'Thriller released', type: 'world', bgColor: '#06b6d4', decade: '1980s' },
      572: { icon: Globe, title: 'Challenger disaster', type: 'world', bgColor: '#06b6d4', decade: '1980s' },
      624: { icon: Globe, title: 'Berlin Wall falls', type: 'world', bgColor: '#06b6d4', decade: '1980s' },
      
      // Teen years 90s (emerald theme)
      728: { icon: TrendingUp, title: 'World Wide Web goes public', type: 'world', bgColor: '#10b981', decade: '1990s' },
      780: { icon: Music, title: 'Grunge music era', type: 'world', bgColor: '#10b981', decade: '1990s' },
      832: { icon: Film, title: 'Jurassic Park released', type: 'world', bgColor: '#10b981', decade: '1990s' },
      884: { icon: TrendingUp, title: 'First smartphones appear', type: 'world', bgColor: '#10b981', decade: '1990s' },
      936: { icon: Film, title: 'Titanic becomes phenomenon', type: 'world', bgColor: '#10b981', decade: '1990s' },
      
      // Personal milestone: High School Graduation (June 1994 - age 18) (emerald theme)
      962: { icon: Users, title: 'Your High School Graduation', type: 'personal', bgColor: '#10b981', decade: '1990s' },
      
      // Young adult 2000s (amber theme)
      1040: { icon: Globe, title: '9/11 changes the world', type: 'world', bgColor: '#f59e0b', decade: '2000s' },
      1092: { icon: TrendingUp, title: 'iPod revolutionizes music', type: 'world', bgColor: '#f59e0b', decade: '2000s' },
      1144: { icon: TrendingUp, title: 'Facebook launches', type: 'world', bgColor: '#f59e0b', decade: '2000s' },
      1196: { icon: Film, title: 'Lord of the Rings trilogy', type: 'world', bgColor: '#f59e0b', decade: '2000s' },
      1248: { icon: Globe, title: 'Obama elected president', type: 'world', bgColor: '#f59e0b', decade: '2000s' },
      
      // Adult 2010s (rose theme)
      1352: { icon: TrendingUp, title: 'iPhone changes everything', type: 'world', bgColor: '#f43f5e', decade: '2010s' },
      1404: { icon: Film, title: 'Netflix streaming era', type: 'world', bgColor: '#f43f5e', decade: '2010s' },
      1456: { icon: Film, title: 'Marvel Cinematic Universe', type: 'world', bgColor: '#f43f5e', decade: '2010s' },
      1508: { icon: TrendingUp, title: 'Instagram launches', type: 'world', bgColor: '#f43f5e', decade: '2010s' },
      1560: { icon: Film, title: 'Game of Thrones peak', type: 'world', bgColor: '#f43f5e', decade: '2010s' },
      
      // Personal milestone: Bachelor's Degree (May 2012 - age 36) (rose theme)
      1872: { icon: Users, title: 'Your Bachelor\'s Degree Completion', type: 'personal', bgColor: '#f43f5e', decade: '2010s' },
      
      // Recent 2020s (blue theme)
      1664: { icon: Globe, title: 'COVID-19 pandemic', type: 'world', bgColor: '#3b82f6', decade: '2020s' },
      1716: { icon: TrendingUp, title: 'SpaceX achievements', type: 'world', bgColor: '#3b82f6', decade: '2020s' },
      1768: { icon: TrendingUp, title: 'AI revolution begins', type: 'world', bgColor: '#3b82f6', decade: '2020s' },
      
      // Personal milestone: Land Purchase & Tiny Home (2023 - age 47) (blue theme)
      2444: { icon: Users, title: 'Purchased 2 acres in Middletown, CA & began building Tiny Home', type: 'personal', link: 'https://en.wikipedia.org/wiki/Middletown,_Lake_County,_California', bgColor: '#3b82f6', decade: '2020s' },
      
      // Personal milestone: Master's Degree (2025 - age 49) (blue theme)
      2548: { icon: Users, title: 'Your Master\'s Degree Achievement', type: 'personal', bgColor: '#3b82f6', decade: '2020s' }
    };
    
    return events[weekNumber] || null;
  };

  const getFormattedNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  const renderSinceLastLogin = () => {
    const sinceLast = calculateSinceLastLogin();
    if (!sinceLast) return null;

    return (
      <div className="backdrop-blur-sm bg-gradient-to-r from-emerald-50/80 to-blue-50/80 border border-emerald-200/50 p-6 rounded-2xl shadow-lg mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Zap className="w-6 h-6 text-emerald-500" />
          <h3 className="text-xl font-semibold text-slate-800">Since Your Last Visit</h3>
          <span className="text-sm text-slate-500">({sinceLast.days} days ago)</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/60 rounded-lg p-3">
            <p className="text-2xl font-bold text-emerald-600">{getFormattedNumber(sinceLast.heartbeats)}</p>
            <p className="text-xs text-slate-600">heartbeats</p>
          </div>
          <div className="bg-white/60 rounded-lg p-3">
            <p className="text-2xl font-bold text-blue-600">{getFormattedNumber(sinceLast.breaths)}</p>
            <p className="text-xs text-slate-600">breaths</p>
          </div>
          <div className="bg-white/60 rounded-lg p-3">
            <p className="text-2xl font-bold text-purple-600">{sinceLast.hours}</p>
            <p className="text-xs text-slate-600">hours lived</p>
          </div>
          <div className="bg-white/60 rounded-lg p-3">
            <p className="text-2xl font-bold text-amber-600">{Math.floor(sinceLast.hours * 8/24)}</p>
            <p className="text-xs text-slate-600">hours slept</p>
          </div>
        </div>
      </div>
    );
  };

  const renderBirthDayContext = () => {
    return (
      <div className="backdrop-blur-sm bg-white/80 border border-white/20 p-8 rounded-2xl shadow-xl mb-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            Born in the era of wood paneling and Saturday Night Fever
          </h2>
          <p className="text-lg text-slate-600 mb-6">When pet rocks were bestsellers and America celebrated its 200th birthday</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Newspaper className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Headlines</h4>
                <p className="text-sm text-slate-600">
                  Super Bowl X: Pittsburgh Steelers defeated Dallas Cowboys 21-17 in Miami
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Bangladesh and Pakistan established full diplomatic relations, 5 years after the Liberation War
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Music className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Music Scene</h4>
                <p className="text-sm text-slate-600">
                  "Saturday Love" by Bay City Rollers was climbing the charts, while Rod Stewart's "Tonight's the Night" would soon dominate
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Globe className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">World Population</h4>
                <p className="text-sm text-slate-600">
                  Approximately 4.1 billion people shared the planet with you
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <TrendingUp className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Cultural Moment</h4>
                <p className="text-sm text-slate-600">
                  America's Bicentennial year had just begun, with nationwide celebrations planned
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLifeVisualization = () => {
    if (!stats) return null;

    const totalYears = 80;
    const weeksPerYear = 52;
    const weeksPerRow = 26; // 6 months per row for bigger blocks
    const currentYear = Math.floor(stats.weeksLived / weeksPerYear);

    const rows = [];
    const totalRowsToShow = Math.min(currentYear + 5, totalYears) * 2; // 2 rows per year

    for (let rowIndex = 0; rowIndex < totalRowsToShow; rowIndex++) {
      const rowWeeks = [];
      const startWeek = rowIndex * weeksPerRow;
      const year = Math.floor(startWeek / weeksPerYear);
      const halfYear = (rowIndex % 2 === 0) ? 1 : 2; // First or second half of year

      // Always create exactly weeksPerRow blocks for consistent row length
      for (let week = 0; week < weeksPerRow; week++) {
        const weekNumber = startWeek + week;
        const isPast = weekNumber < stats.weeksLived;
        const isCurrent = weekNumber === stats.weeksLived;
        const lifeEvent = getLifeEventForWeek(weekNumber);
        const isValidWeek = weekNumber < (totalYears * weeksPerYear); // Don't exceed total life span

        let cellClass = "relative md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 rounded-sm transition-all duration-300 cursor-pointer hover:scale-125 flex items-center justify-center ";
        let style = {};
        let content = null;

        if (!isValidWeek) {
          // Empty placeholder for consistent row length
          cellClass += "bg-transparent ";
        } else if (isPast) {
          // Use the same gradient pattern for all past weeks, regardless of events
          const hue = ((weekNumber / 52) * 30 + 200) % 360;
          const saturation = 60 + Math.sin(weekNumber / 26) * 20;
          const lightness = 50 + Math.cos(weekNumber / 13) * 15;
          style = {
            backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          };

          if (lifeEvent) {
            const isPersonal = lifeEvent.type === 'personal';
            const IconComponent = lifeEvent.icon;
            content = (
              <IconComponent
                className={`absolute text-white w-4 h-4 lg:w-5 lg:h-5 transform ${isPersonal ? 'scale-110 animate-bounce' : 'scale-100'}`}
                style={isPersonal ? { filter: 'drop-shadow(0 0 2px rgba(255,215,0,0.8))' } : { filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.3))' }}
              />
            );
          }
        } else if (isCurrent) {
          cellClass += "bg-gradient-to-br from-yellow-400 to-orange-500 animate-pulse ring-2 ring-yellow-300/50 shadow-lg ";
        } else {
          cellClass += "bg-gradient-to-br from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 ";
        }

        rowWeeks.push(
          <div
            key={`${rowIndex}-${week}`}
            className={cellClass}
            style={style}
            onMouseEnter={isValidWeek ? () => {
              setHoverWeek({
                week: weekNumber,
                year: Math.floor(weekNumber / 52),
                event: lifeEvent
              });
              setShowHoverData(true);
            } : undefined}
            onMouseLeave={isValidWeek ? () => setShowHoverData(false) : undefined}
          >
            {content}
          </div>
        );
      }

      rows.push(
        <div key={rowIndex} className="flex items-center gap-4 mb-3">
          <div className="w-16 text-base text-slate-400 text-right flex-shrink-0">
            {halfYear === 1 ? `${year + 1}` : ''}
          </div>
          <div className="flex gap-2 lg:gap-2.5 xl:gap-3">
            {rowWeeks}
          </div>
        </div>
      );
    }
    
    return (
      <div className="backdrop-blur-sm bg-white/80 border border-white/20 p-8 rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
            Your Life Canvas
          </h2>
          <p className="text-slate-600 mb-6">Each colorful square represents a week of your journey since the wood paneling era</p>
          <div className="bg-gradient-to-r from-slate-100 to-slate-200 h-2 rounded-full overflow-hidden shadow-inner max-w-md mx-auto">
            <div
              className="h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full transition-all duration-1000 ease-out shadow-sm"
              style={{ width: `${(stats.ageInYears / 80) * 100}%` }}
            />
          </div>
          <p className="text-sm text-slate-500 mt-2">
            Age: {stats.ageInYears} • Week {getFormattedNumber(stats.weeksLived)} of your story
          </p>
        </div>

        {/* Hide visualization on mobile, show on tablet and up */}
        <div className="hidden md:block w-full">
          {rows}
        </div>

        {/* Fun placeholder for mobile/tablet */}
        <div className="md:hidden flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border-2 border-dashed border-slate-300">
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
            <Calendar className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <div className="flex justify-center space-x-1 mb-3">
              <div className="w-2 h-2 bg-purple-400 rounded-sm"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-sm"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-sm"></div>
              <div className="w-2 h-2 bg-rose-400 rounded-sm"></div>
            </div>
          </div>
          <p className="text-sm text-slate-500 font-medium mb-4">Life Timeline Visualization</p>
          <div className="w-full max-w-xs">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80"
              alt="Colorful journey through time"
              className="w-full h-32 object-cover rounded-lg shadow-md border-2 border-white"
            />
          </div>
        </div>
        
        {showHoverData && hoverWeek && (
          <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 transition-all duration-300 mt-6">
            <p className="text-sm font-medium text-slate-700">
              Week {hoverWeek.week + 1} • Year {hoverWeek.year + 1}
            </p>
            {hoverWeek.event && (
              <div className={`text-sm font-medium mt-1 ${hoverWeek.event.type === 'personal' ? 'text-amber-600' : 'text-blue-600'}`}>
                <p>
                  {hoverWeek.event.icon} {hoverWeek.event.title}
                  {hoverWeek.event.type === 'personal' && <span className="ml-1">✨</span>}
                </p>
                {hoverWeek.event.link && (
                  <a 
                    href={hoverWeek.event.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 hover:text-blue-700 underline mt-1 inline-block"
                  >
                    Learn about Middletown, CA →
                  </a>
                )}
              </div>
            )}
            <p className="text-xs text-slate-500">
              {hoverWeek.week < stats.weeksLived ? 
                "✨ A colorful chapter from your story" : 
                hoverWeek.week === stats.weeksLived ? 
                "🟡 Your current moment" : 
                "⚪ Future possibilities"}
            </p>
          </div>
        )}
      </div>
    );
  };

  const StatCard = ({ icon: Icon, title, value, subtitle, delay = 0, color = "blue" }) => {
    const colorClasses = {
      blue: "from-blue-500 to-purple-600",
      emerald: "from-emerald-500 to-teal-600",
      rose: "from-rose-500 to-pink-600",
      amber: "from-amber-500 to-orange-600",
      violet: "from-violet-500 to-purple-600",
      cyan: "from-cyan-500 to-blue-600"
    };

    return (
      <div 
        className="group relative backdrop-blur-sm bg-white/80 border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
        style={{ animationDelay: `${delay}ms` }}
        onMouseEnter={() => setHoveredStat(title)}
        onMouseLeave={() => setHoveredStat(null)}
      >
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses[color]} shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          {hoveredStat === title && (
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
        <p className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-1">
          {value}
        </p>
        <p className="text-sm text-slate-500">{subtitle}</p>
        
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      </div>
    );
  };

  const renderLifeStatistics = () => {
    if (!stats) return null;
    
    const statCards = [
      {
        icon: Calendar,
        title: "Days of Experience",
        value: getFormattedNumber(stats.daysLived),
        subtitle: "Each one unique since the wood paneling era",
        color: "blue",
        delay: 100
      },
      {
        icon: Heart,
        title: "Heartbeats of Life",
        value: getFormattedNumber(stats.heartbeats),
        subtitle: "The steady rhythm of your existence",
        color: "rose",
        delay: 200
      },
      {
        icon: Clock,
        title: "Dreams and Rest",
        value: getFormattedNumber(stats.hoursSlept),
        subtitle: "Hours spent in peaceful slumber",
        color: "violet",
        delay: 300
      },
      {
        icon: Globe,
        title: "Seasons Witnessed",
        value: getFormattedNumber(stats.seasons),
        subtitle: "Cycles of nature's eternal dance",
        color: "emerald",
        delay: 400
      },
      {
        icon: Users,
        title: "Population Growth",
        value: "4.0B",
        subtitle: "People added to Earth in your lifetime",
        color: "cyan",
        delay: 500
      },
      {
        icon: Sparkles,
        title: "Breaths of Existence",
        value: getFormattedNumber(stats.breaths),
        subtitle: "Moments of life itself",
        color: "amber",
        delay: 600
      }
    ];
    
    return (
      <div className="space-y-8 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            Your Journey in Numbers
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Every statistic tells the story of a life lived, moments treasured, and experiences gathered since that groovy decade of the 1970s.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statCards.map((card, index) => (
            <StatCard key={index} {...card} />
          ))}
        </div>
      </div>
    );
  };

  const DecadeCard = ({ decade, title, events, color = "blue" }) => {
    const colorClasses = {
      blue: "from-blue-500 to-purple-600",
      emerald: "from-emerald-500 to-teal-600",
      rose: "from-rose-500 to-pink-600",
      amber: "from-amber-500 to-orange-600",
      violet: "from-violet-500 to-purple-600",
      cyan: "from-cyan-500 to-blue-600"
    };

    return (
      <div className="backdrop-blur-sm bg-white/80 border border-white/20 p-8 rounded-2xl shadow-lg mb-8">
        <div className="flex items-center mb-6">
          <div className={`px-4 py-2 rounded-lg bg-gradient-to-r ${colorClasses[color]} text-white font-bold text-lg mr-4`}>
            {decade}
          </div>
          <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((category, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center space-x-2 mb-3">
                <category.icon className="w-5 h-5 text-slate-600" />
                <h4 className="font-semibold text-slate-700">{category.title}</h4>
              </div>
              <ul className="space-y-1">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-slate-600 leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDecadeBreakdowns = () => {
    const decades = [
      {
        decade: "1970s",
        title: "Your Birth Decade", 
        color: "violet",
        events: [
          {
            icon: Music,
            title: "Music & Culture",
            items: [
              "🎵 Disco dominated with hits like Saturday Night Fever",
              "🎵 Punk rock emerged with The Sex Pistols and The Ramones", 
              "🎵 Classic rock flourished: Led Zeppelin, Pink Floyd, Queen"
            ]
          },
          {
            icon: Film,
            title: "Movies & TV",
            items: [
              "🎬 Star Wars (1977) changed cinema forever",
              "🎬 Jaws (1975) created the summer blockbuster",
              "📺 All in the Family and Saturday Night Live launched"
            ]
          },
          {
            icon: Globe,
            title: "World Events", 
            items: [
              "🇺🇸 America's Bicentennial celebration (1976)",
              "✈️ End of Vietnam War (1975)",
              "💻 Personal computers began emerging"
            ]
          },
          {
            icon: TrendingUp,
            title: "Technology",
            items: [
              "💻 Apple II computer launched (1977)",
              "📼 VHS vs. Betamax format war began",
              "📞 First mobile phone call made (1973)"
            ]
          }
        ]
      },
      {
        decade: "1980s",
        title: "Your Childhood",
        color: "cyan", 
        events: [
          {
            icon: Music,
            title: "Music & Culture",
            items: [
              "📺 MTV launched, changing music forever",
              "🎵 Michael Jackson's Thriller became best-selling album",
              "🎵 New Wave, Hair Metal, and Hip-Hop emerged"
            ]
          },
          {
            icon: Film,
            title: "Movies & TV",
            items: [
              "🎬 E.T., Back to the Future, The Breakfast Club", 
              "📺 CNN launched 24-hour news",
              "🎮 Video games became mainstream with Nintendo"
            ]
          },
          {
            icon: Globe,
            title: "World Events",
            items: [
              "🧱 Berlin Wall fell (1989)",
              "🚀 Chernobyl disaster (1986)", 
              "🏛️ Reagan era and Cold War tensions"
            ]
          },
          {
            icon: TrendingUp,
            title: "Technology",
            items: [
              "💻 Personal computers became accessible",
              "💿 First CD players and compact discs",
              "🌐 Early internet development (ARPANET)"
            ]
          }
        ]
      },
      {
        decade: "1990s",
        title: "Your Teen Years",
        color: "emerald",
        events: [
          {
            icon: Music,
            title: "Music & Culture", 
            items: [
              "🎵 Grunge revolution with Nirvana and Pearl Jam",
              "🎵 Hip-Hop golden age: Tupac, Biggie, Wu-Tang",
              "🎵 Alternative rock dominated: Radiohead, R.E.M."
            ]
          },
          {
            icon: Film,
            title: "Movies & TV",
            items: [
              "🦕 Jurassic Park, Titanic, The Matrix",
              "📺 Friends, Seinfeld, The X-Files defined TV",
              "🎬 Disney Renaissance: Lion King, Beauty and the Beast"
            ]
          },
          {
            icon: Globe,
            title: "World Events",
            items: [
              "🏛️ Soviet Union dissolved (1991)",
              "🌐 World Wide Web became public",
              "⚔️ Gulf War and Balkan conflicts"
            ]
          },
          {
            icon: Users,
            title: "Personal Milestones",
            items: [
              "🎓 Your High School Graduation (1994)"
            ]
          }
        ]
      },
      {
        decade: "2000s", 
        title: "Your Young Adult Years",
        color: "amber",
        events: [
          {
            icon: Music,
            title: "Music & Culture",
            items: [
              "📱 iPod and iTunes changed music consumption",
              "📺 Reality TV explosion: American Idol, Survivor", 
              "🎵 Pop-punk, Emo, and indie rock flourished"
            ]
          },
          {
            icon: Film,
            title: "Movies & TV",
            items: [
              "🎬 Lord of the Rings trilogy",
              "📺 Lost, The Office, and prestige TV began",
              "🦸 Superhero movies became blockbusters"
            ]
          },
          {
            icon: Globe,
            title: "World Events",
            items: [
              "✈️ 9/11 attacks changed the world (2001)",
              "⚔️ Iraq War and War on Terror",
              "🏛️ Barack Obama elected (2008)"
            ]
          },
          {
            icon: TrendingUp,
            title: "Technology",
            items: [
              "📘 Social media: Friendster, MySpace, Facebook",
              "📺 YouTube launched (2005)",
              "🌐 Broadband internet became standard"
            ]
          }
        ]
      },
      {
        decade: "2010s",
        title: "Your Prime Years", 
        color: "rose",
        events: [
          {
            icon: Music,
            title: "Music & Culture",
            items: [
              "🎵 Streaming took over: Spotify, Apple Music",
              "🎵 EDM festivals and trap music exploded", 
              "🎵 Taylor Swift, Drake, and Adele dominated"
            ]
          },
          {
            icon: Film,
            title: "Movies & TV",
            items: [
              "🦸 Marvel Cinematic Universe reached peak",
              "📺 Netflix revolutionized TV: Stranger Things, House of Cards",
              "🐉 Game of Thrones became cultural phenomenon"
            ]
          },
          {
            icon: Globe,
            title: "World Events",
            items: [
              "🌍 Arab Spring movements",
              "🏳️‍🌈 Same-sex marriage legalized in many countries",
              "🇬🇧 Brexit and political polarization"
            ]
          },
          {
            icon: Users,
            title: "Personal Milestones & Technology",
            items: [
              "📱 iPhone and smartphone revolution",
              "📱 Social media: Instagram, Twitter, TikTok", 
              "🎓 Your Bachelor's Degree Completion (2012)"
            ]
          }
        ]
      },
      {
        decade: "2020s",
        title: "Your Current Chapter",
        color: "blue",
        events: [
          {
            icon: Music,
            title: "Music & Culture",
            items: [
              "🦠 COVID-19 changed live music forever",
              "📱 TikTok became music discovery platform",
              "📺 Virtual concerts and livestreaming exploded"
            ]
          },
          {
            icon: Film,
            title: "Movies & TV", 
            items: [
              "📺 Streaming wars: Disney+, HBO Max, Netflix",
              "🎬 Pandemic changed theater releases",
              "🌍 International content gained global audience"
            ]
          },
          {
            icon: Globe,
            title: "World Events",
            items: [
              "🦠 COVID-19 pandemic reshaped society",
              "🌍 Climate change became urgent priority",
              "⚔️ Geopolitical tensions increased"
            ]
          },
          {
            icon: Users,
            title: "Personal Milestones & Technology",
            items: [
              "🤖 AI revolution: ChatGPT, DALL-E",
              "🏡 Purchased 2 acres in Middletown, CA & began building Tiny Home (2023)",
              "🏆 Your Master's Degree Achievement (2025)"
            ]
          }
        ]
      }
    ];

    return (
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            Your Life Through the Decades
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            The cultural moments, technological shifts, and world events that shaped each chapter of your journey. Icons match those in your timeline above.
          </p>
        </div>
        
        {decades.map((decade, index) => (
          <DecadeCard key={index} {...decade} />
        ))}
      </div>
    );
  };

  if (!stats) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <p className="text-slate-600">Loading your life story...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(74,222,128,0.1),transparent_70%)]" />
      
      <div className="relative z-10 p-6 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-700 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Life Since the Era of Wood Paneling
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A journey through time from the decade of disco and large lapels to today
            </p>
          </div>
          
          {renderSinceLastLogin()}
          {renderBirthDayContext()}
          {renderLifeVisualization()}
          {renderLifeStatistics()}
          {renderDecadeBreakdowns()}
        </div>
      </div>
    </div>
  );
}
