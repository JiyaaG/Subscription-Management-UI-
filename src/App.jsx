import { useState } from 'react';
import { Home, LayoutDashboard, Package, BarChart2, Info, Star, Lightbulb, Infinity as InfinityIcon, AlertTriangle, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState("subscription");
  
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="bg-[rgb(237,234,255)] w-full md:w-64 p-6 flex flex-col justify-between min-h-screen">
        <div>
          <h1 className="font-bold text-lg mb-8">ClothesInventory</h1>
          <nav className="space-y-1">
            <NavItem icon={<Home size={18} />} text="Home" />
            <NavItem icon={<LayoutDashboard size={18} />} text="Dashboard" active />
            <NavItem icon={<Package size={18} />} text="Inventory" />
            <NavItem icon={<BarChart2 size={18} />} text="Reports" />
            <NavItem icon={<Info size={18} />} text="About" />
          </nav>
        </div>
        <div className="mb-2">
          <div className="bg-white rounded-xl p-3 flex items-center shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-3">
              <span className="text-xs">AM</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-black">Alex Morgan</p>
              <p className="text-xs text-gray-500">Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white p-8 md:p-12">
        {currentPage === "subscription" ? (
          <SubscriptionPage onUpgrade={() => setCurrentPage("upgrade")} />
        ) : (
          <UpgradePage onBack={() => setCurrentPage("subscription")} />
        )}
      </div>
    </div>
  );
}

function NavItem({ icon, text, active = false }) {
  return (
    <div className={`flex items-center px-4 py-3 rounded-lg cursor-pointer ${active ? 'bg-[#edeaff] text-black font-bold' : 'text-black hover:bg-[#edeaff]'} transition-colors`}>
      <span className="mr-3">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  );
}

function SubscriptionPage({ onUpgrade }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">Your Subscription Plan</h1>
      <div className="flex items-center text-sm text-indigo-600 mb-6">
        <span>Pro • Active</span>
      </div>
      
      <button 
        onClick={onUpgrade}
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 hover:shadow-md mb-8 w-full sm:w-auto"
      >
        Upgrade Plan
      </button>
      
      <h2 className="text-lg font-medium mb-4">Current Subscription</h2>
      <div className="bg-[#edeaff] p-4 sm:p-6 rounded-lg mb-8">
        <div className="flex items-center mb-4">
          <Lightbulb className="text-indigo-600" size={20} />
        </div>
        <h3 className="font-bold text-lg mb-1">Pro Plan</h3>
        <p className="text-sm text-gray-600 mb-2">Start: Jan 1, 2024 • Renews: Feb 1, 2024</p>
        <p className="font-medium">$49/month</p>
      </div>
      
      <h2 className="text-lg font-medium mb-4">Features in Use</h2>
      <ul className="list-disc pl-5 mb-8 space-y-2">
        <li>Unlimited Projects</li>
        <li>5 Team Members</li>
        <li>API Access</li>
        <li>Priority Support</li>
      </ul>
      
      <h2 className="text-lg font-medium mb-4">Usage Stats</h2>
      <div className="mb-8">
        <p className="mb-2">API Calls: 8,200 / 10,000</p>
        <p>Credits Remaining: 1,800</p>
      </div>
      
      <h2 className="text-lg font-medium mb-4">Pricing Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <PlanCard 
          icon={<Star className="text-indigo-600" />} 
          title="Basic" 
          price="$19/month"
          features={[
            "1,000 Credits",
            "1 User",
            "Email Support",
            "2 Integrations"
          ]}
          buttonText="Choose Plan"
        />
        <PlanCard 
          icon={<Lightbulb className="text-indigo-600" />} 
          title="Pro" 
          price="$49/month"
          features={[
            "10,000 Credits",
            "5 Users",
            "Priority Support",
            "10 Integrations"
          ]}
          buttonText="Choose Plan"
          current
        />
        <PlanCard 
          icon={<InfinityIcon className="text-indigo-600" />} 
          title="Unlimited" 
          price="$99/month"
          features={[
            "Unlimited Credits",
            "Unlimited Users",
            "24/7 Support",
            "All Integrations"
          ]}
          buttonText="Choose Plan"
        />
      </div>
      
      <h2 className="text-lg font-medium mb-4">Subscription Stop</h2>
      <div className="bg-[rgb(237,234,255)] p-8 rounded-2xl mb-8">
        <div className="flex items-center mb-4">
          <AlertTriangle className="text-indigo-500 bg-white rounded-full p-2" size={32} />
        </div>
        <h3 className="font-bold text-2xl mb-2">Warning</h3>
        <p className="text-base text-gray-600 mb-6">Stopping your subscription will remove all credits and access.</p>
        <button className="bg-[#6c47ff] text-white px-6 py-2 rounded-lg font-semibold text-base hover:bg-[#5a38d6] transition-colors">
          Stop Subscription
        </button>
      </div>
      
      <h2 className="text-lg font-medium mb-4">Subscription Preferences</h2>
      <div className="mb-8">
        <p className="text-base text-gray-700 mb-2 font-semibold">Payment Method</p>
        <div className="bg-[rgb(237,234,255)] border-0 p-4 rounded-lg mb-6 text-base font-medium">Card</div>
        <div className="flex space-x-4 mb-6">
          <button className="bg-[rgb(237,234,255)] text-[#6c47ff] font-semibold px-5 py-2 rounded-xl text-base">Billing History</button>
          <button className="bg-[rgb(237,234,255)] text-[#6c47ff] font-semibold px-5 py-2 rounded-xl text-base">Download Invoices</button>
        </div>
        <div className="flex items-center justify-between bg-[rgb(237,234,255)] rounded-xl p-4 mb-6">
          <div>
            <p className="font-semibold text-base">Auto-Renew</p>
            <p className="text-sm text-gray-500">Automatically renew subscription</p>
          </div>
          <div className="relative inline-block w-10 align-middle select-none">
            <input type="checkbox" className="absolute opacity-0 w-0 h-0 peer" defaultChecked={false} />
            <span className="block h-6 w-10 rounded-full bg-gray-200 peer-checked:bg-[#6c47ff] transition-all duration-300"></span>
            <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-4"></span>
          </div>
        </div>
      </div>
      
      <h2 className="text-lg font-medium mb-4">Support</h2>
      <div className="bg-[rgb(237,234,255)] p-4 rounded-xl flex items-center">
        <div className="mr-4">
          <HelpCircle className="text-[#6c47ff] bg-white rounded-full p-2" size={32} />
        </div>
        <div>
          <p className="font-semibold text-base mb-1">Need Help? Contact Support</p>
          <p className="text-sm text-gray-500">Chat or visit Help Center</p>
        </div>
      </div>
    </div>
  );
}

function UpgradePage({ onBack }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 text-gray-600 hover:text-gray-900 transition-colors">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-2xl sm:text-3xl font-bold">Upgrade Your Plan</h1>
      </div>
      
      <p className="text-indigo-600 mb-10">Select a new plan to unlock more features and credits.</p>
      
      <h2 className="text-lg font-medium mb-4">Available Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
        <PlanCard 
          icon={<Star className="text-indigo-600" />} 
          title="Basic" 
          price="$19/month"
          features={[
            "1,000 Credits",
            "1 User",
            "Email Support",
            "2 Integrations"
          ]}
          buttonText="Choose Basic"
          fullWidth
        />
        <PlanCard 
          icon={<Lightbulb className="text-indigo-600" />} 
          title="Pro" 
          price="$49/month"
          features={[
            "10,000 Credits",
            "5 Users",
            "Priority Support",
            "10 Integrations"
          ]}
          buttonText="Current Plan"
          current
          fullWidth
          disabled
        />
        <PlanCard 
          icon={<InfinityIcon className="text-indigo-600" />} 
          title="Unlimited" 
          price="$99/month"
          features={[
            "Unlimited Credits",
            "Unlimited Users",
            "24/7 Support",
            "All Integrations"
          ]}
          buttonText="Choose Unlimited"
          fullWidth
        />
      </div>
      
      <h2 className="text-lg font-medium mb-6">Plan Comparison</h2>
      <div className="overflow-x-auto mb-12">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 font-medium">Plan</th>
              <th className="text-left py-4 font-medium">Credits</th>
              <th className="text-left py-4 font-medium">Users</th>
              <th className="text-left py-4 font-medium">Support</th>
              <th className="text-left py-4 font-medium">Integrations</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-4">Basic</td>
              <td className="py-4">1,000</td>
              <td className="py-4">1</td>
              <td className="py-4">Email</td>
              <td className="py-4">2</td>
            </tr>
            <tr className="border-b">
              <td className="py-4">Pro</td>
              <td className="py-4">10,000</td>
              <td className="py-4">5</td>
              <td className="py-4">Priority</td>
              <td className="py-4">10</td>
            </tr>
            <tr>
              <td className="py-4">Unlimited</td>
              <td className="py-4">Unlimited</td>
              <td className="py-4">Unlimited</td>
              <td className="py-4">24/7</td>
              <td className="py-4">All</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2 className="text-lg font-medium mb-6">Need Help?</h2>
      <div className="bg-gray-50 p-4 rounded-lg border flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-4">
            <HelpCircle className="text-indigo-600" size={24} />
          </div>
          <div>
            <p className="font-medium mb-1">Contact Support</p>
            <p className="text-sm text-gray-600">Chat or visit Help Center</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="p-2 border rounded-lg">
            <ChevronLeft size={20} />
          </button>
          <button className="p-2 border rounded-lg">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

function PlanCard({ icon, title, price, features, buttonText, current = false, fullWidth = false, disabled = false }) {
  return (
    <div className={`
      bg-[#edeaff] rounded-xl p-6 border transition-all duration-300
      ${current ? 'border-indigo-600 shadow-lg' : 'border-gray-200 hover:border-indigo-300 hover:shadow-xl'}
      ${fullWidth ? 'w-full' : ''}
      transform hover:-translate-y-1
    `}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-2xl font-bold mb-4">{price}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <ChevronRight size={16} className="text-indigo-600 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`
          w-full py-2 px-4 rounded-lg transition-all duration-300
          ${current 
            ? 'bg-indigo-100 text-indigo-600 cursor-not-allowed' 
            : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
        disabled={disabled}
      >
        {buttonText}
      </button>
    </div>
  );
}