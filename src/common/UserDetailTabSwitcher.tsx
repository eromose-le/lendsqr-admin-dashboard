import React, { useState } from "react";

interface Tab {
  label: string;
}

const tabs: Tab[] = [
  { label: "General Details" },
  { label: "Documents" },
  { label: "Bank Details" },
  { label: "Loans" },
  { label: "Savings" },
  { label: "App and System" },
];

const UserDetailTabSwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].label);

  return (
    <div className="dashNav">
      <div className="dashNavWrapper">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`dashLink ${activeTab === tab.label ? "active" : ""}`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserDetailTabSwitcher;
