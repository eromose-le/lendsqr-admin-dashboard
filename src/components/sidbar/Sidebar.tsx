import { assets } from "@/assets/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";
import { routeEnum } from "@/constants/RouteConstants";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export const Sidebar = () => {
  const navigate = useNavigate();
  const [_activeItem, setActiveItem] = useState<string>("");
  const [tooltip, setTooltip] = useState<boolean>(false);

  const handleItemClick = (item: SidebarNavItem) => {
    setActiveItem(item.id);
    if (item.path) {
      navigate(item.path);
    }
    if (item.onClick) {
      item.onClick();
    }
  };

  const logout = () => {
    navigate(routeEnum.LOGIN);
  };

  type SidebarNavItem = {
    id: string;
    label: string;
    icon: string;
    tooltip: string;
    section?: string;
    path?: string;
    onClick?: () => void;
  };

  interface SidebarNavLinks {
    [key: string]: SidebarNavItem[];
  }

  const sidebarNavItems: SidebarNavLinks = {
    Organization: [
      {
        id: "switchOrganization",
        label: "Switch Organization",
        icon: assets.switch_icon,
        tooltip: "Switch Organization",
      },
    ],
    Dashboard: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: assets.dashboard,
        tooltip: "Dashboard",
        path: "/dashboard",
      },
    ],
    Customer: [
      {
        id: "users",
        label: "Users",
        icon: assets.user_friends,
        tooltip: "Users",
        path: "/users",
      },
      {
        id: "guarantors",
        label: "Guarantors",
        icon: assets.guarantors,
        tooltip: "Guarantors",
        path: "/guarantors",
      },
      {
        id: "loans",
        label: "Loans",
        icon: assets.loan,
        tooltip: "Loans",
        path: "/loans",
      },
      {
        id: "decisionModels",
        label: "Decision Models",
        icon: assets.decision,
        tooltip: "Decision Models",
        path: "/decision-models",
      },
      {
        id: "savings",
        label: "Savings",
        icon: assets.piggy,
        tooltip: "Savings",
        path: "/savings",
      },
      {
        id: "loanRequests",
        label: "Loan Requests",
        icon: assets.loan_request,
        tooltip: "Loan Requests",
        path: "/loan-requests",
      },
      {
        id: "whitelist",
        label: "Whitelist",
        icon: assets.whitelist,
        tooltip: "Whitelist",
        path: "/whitelist",
      },
      {
        id: "karma",
        label: "Karma",
        icon: assets.karma,
        tooltip: "Karma",
        path: "/karma",
      },
    ],
    Business: [
      {
        id: "organization",
        label: "Organization",
        icon: assets.switch_icon,
        tooltip: "Organization",
        path: "/organization",
      },
      {
        id: "loanProducts",
        label: "Loan Products",
        icon: assets.loan_request,
        tooltip: "Loan Products",
        path: "/loan-products",
      },
      {
        id: "savingsProducts",
        label: "Savings Products",
        icon: assets.saving,
        tooltip: "Savings Products",
        path: "/savings-products",
      },
      {
        id: "feesAndCharges",
        label: "Fees and Charges",
        icon: assets.dashboard,
        tooltip: "Fees and Charges",
        path: "/fees-and-charges",
      },
      {
        id: "transactions",
        label: "Transactions",
        icon: assets.transaction,
        tooltip: "Transactions",
        path: "/transactions",
      },
      {
        id: "services",
        label: "Services",
        icon: assets.services,
        tooltip: "Services",
        path: "/services",
      },
      {
        id: "serviceAccount",
        label: "Service Account",
        icon: assets.service_account,
        tooltip: "Service Account",
        path: "/service-account",
      },
      {
        id: "settlements",
        label: "Settlements",
        icon: assets.settlements,
        tooltip: "Settlements",
        path: "/settlements",
      },
      {
        id: "reports",
        label: "Reports",
        icon: assets.report,
        tooltip: "Reports",
        path: "/reports",
      },
    ],
    Settings: [
      {
        id: "preferences",
        label: "Preferences",
        icon: assets.preferences,
        tooltip: "Preferences",
        path: "/preferences",
      },
      {
        id: "feesAndPricing",
        label: "Fees and Pricing",
        icon: assets.fees,
        tooltip: "Fees and Pricing",
        path: "/fees-and-pricing",
      },
      {
        id: "auditLogs",
        label: "Audit Logs",
        icon: assets.audit,
        tooltip: "Audit Logs",
        path: "/audit-logs",
      },
      {
        id: "logout",
        label: "Logout",
        icon: assets.sign_out,
        tooltip: "Logout",
        onClick: () => {
          logout();
        },
      },
    ],
  };

  function isBrowserWidthBelow500px(): boolean {
    return window.innerWidth < 500;
  }

  return (
    <div className="sidebar">
      {Object.entries(sidebarNavItems).map(([section, links]) => (
        <div key={section}>
          {section === "Dashboard" || section === "Organization" ? null : (
            <h3 className="title">{section}</h3>
          )}

          {(links as SidebarNavItem[]).map(
            (link: SidebarNavItem, index: any) => (
              <div key={index}>
                <button
                  data-tooltip-id={link.id}
                  onMouseEnter={() => setTooltip(true)}
                  onMouseLeave={() => {
                    setTooltip(false);
                    setTimeout(() => setTooltip(true), 10);
                  }}
                  className={`${
                    link.id === "switchOrganization"
                      ? "headerItemContainer"
                      : "itemContainer"
                  } ${link.id === "logout" && "logout"}`}
                  onClick={() => handleItemClick(link)}
                >
                  <img className="icon" src={link.icon} alt="switch" />
                  <p className="text">{link.label}</p>
                  {link.id === "switchOrganization" ? (
                    <span>
                      <img src={assets.down} alt="down-arow" />
                    </span>
                  ) : null}
                </button>

                {isBrowserWidthBelow500px() && tooltip && (
                  <ReactTooltip
                    id={link.id}
                    place="right"
                    variant="dark"
                    content={link.tooltip}
                  />
                )}
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};
