import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="./logo (2).png" alt="" />
      </div>
      <button title="Home" className="sidebar-button">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="9" cy="9" r="7" stroke="#00D7FF" strokeWidth="2" />
          <line
            x1="15"
            y1="15"
            x2="19"
            y2="19"
            stroke="#00D7FF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <button title="Discover" className="sidebar-button">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect
            x="7"
            y="4"
            width="6"
            height="10"
            rx="3"
            stroke="#00D7FF"
            strokeWidth="2"
          />
          <line
            x1="10"
            y1="16"
            x2="10"
            y2="19"
            stroke="#00D7FF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="6"
            y1="19"
            x2="14"
            y2="19"
            stroke="#00D7FF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <button title="Spaces" className="sidebar-button">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect
            x="3"
            y="3"
            width="14"
            height="14"
            rx="2"
            stroke="#00D7FF"
            strokeWidth="2"
          />
          <line
            x1="7"
            y1="7"
            x2="13"
            y2="7"
            stroke="#00D7FF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="7"
            y1="11"
            x2="13"
            y2="11"
            stroke="#00D7FF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="7"
            y1="15"
            x2="13"
            y2="15"
            stroke="#00D7FF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div className="sidebar-bottom">
        <button title="Account" className="sidebar-button">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="12" r="6" stroke="#00D7FF" strokeWidth="2" />
            <rect
              x="6"
              y="22"
              width="20"
              height="8"
              rx="4"
              stroke="#00D7FF"
              strokeWidth="2"
            />
          </svg>
        </button>
        <button title="Upgrade" className="sidebar-button">
          <span role="img" aria-label="upgrade">
            ⬆️
          </span>
        </button>
        <button title="Install" className="sidebar-button">
          <span role="img" aria-label="install">
            ⬇️
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;