import React from 'react';
import ExtensionsList from '@/components/ExtensionsList';

export default function App() {
  const extensions = [
    {
      id: 'abcdefghijklmnopqrstuvwxyz123456',
      name: 'Dark Mode Pro',
      resource: 'assets/icon.png',
    },
    {
      id: 'zyxwvutsrqponmlkjihgfedcba654321',
      name: 'Password Manager',
      resource: 'popup.html',
    },
    {
      id: 'qwertyuiopasdfghjklzxcvbnmasdfgh',
      name: 'Ad Blocker Plus',
      resource: 'styles/theme.css',
    },
    {
      id: 'mnbvcxzasdfghjklpoiuytrewqzxcvbn',
      name: 'Tab Manager',
      resource: 'scripts/manager.js',
    },
    {
      id: 'lkjhgfdsazxcvbnmasdfghjklpoiuytr',
      name: 'Grammar Checker',
      resource: 'data/dictionary.json',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <ExtensionsList extensions={extensions} />
      </div>
    </div>
  );
}