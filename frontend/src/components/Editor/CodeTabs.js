import React, { useState } from 'react';

export default function CodeTabs({ tabs, activeTab, onTabChange, onTabClose, onAddTab }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid #ccc',
      marginBottom: '1rem',
      overflowX: 'auto',
    }}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => onTabChange(index)}
          style={{
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            borderBottom: activeTab === index ? '3px solid #007bff' : '3px solid transparent',
            backgroundColor: activeTab === index ? '#f5f5f5' : '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span>{tab.name || `Tab ${index + 1}`}</span>
          {tabs.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(index);
              }}
              style={{
                border: 'none',
                background: 'transparent',
                color: '#999',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
              title="Close Tab"
            >
              ×
            </button>
          )}
        </div>
      ))}
      <button
        onClick={onAddTab}
        style={{
          padding: '0.5rem 1rem',
          marginLeft: 'auto',
          background: '#e0e0e0',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        + New
      </button>
    </div>
  );
}
