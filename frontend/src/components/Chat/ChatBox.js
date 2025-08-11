'use client';
import React, { useState } from 'react';
import PromptInput from './PromptInput';
import GeneratedCode from './GeneratedCode';
import PropertyPanel from '../Editor/PropertyPanel';
import CodeTabs from '../Editor/CodeTabs';

export default function ChatBox() {
  const [tabs, setTabs] = useState([
    {
      prompt: '',
      type: 'React',
      title: '',
      imageUrl: '',
      description: '',
      code: '',
      loading: false,
    },
  ]);
  const [activeTab, setActiveTab] = useState(0);

  const currentTab = tabs[activeTab];

  const updateTab = (field, value) => {
    const updatedTabs = [...tabs];
    updatedTabs[activeTab] = { ...updatedTabs[activeTab], [field]: value };
    setTabs(updatedTabs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTabs = [...tabs];
    updatedTabs[activeTab].loading = true;
    updatedTabs[activeTab].code = '';
    setTabs(updatedTabs);

    const bodyData = {
      prompt: currentTab.prompt,
      type: currentTab.type,
    };

    if (currentTab.type === 'HTML') {
      bodyData.title = currentTab.title;
      bodyData.imageUrl = currentTab.imageUrl;
      bodyData.description = currentTab.description;
    }

    try {
      const response = await fetch('http://localhost:5000/api/generate-ui', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();
      updatedTabs[activeTab].code = data.code || 'No code received.';
    } catch (error) {
      console.error(error);
      updatedTabs[activeTab].code = 'Failed to generate component.';
    } finally {
      updatedTabs[activeTab].loading = false;
      setTabs(updatedTabs);
    }
  };

  const handleAddTab = () => {
    setTabs((prevTabs) => [
      ...prevTabs,
      {
        prompt: '',
        type: 'React',
        title: '',
        imageUrl: '',
        description: '',
        code: '',
        loading: false,
      },
    ]);
    setActiveTab(tabs.length); // new tab index
  };

  const handleCloseTab = (index) => {
    if (tabs.length === 1) return; // Prevent removing the last tab
    const newTabs = tabs.filter((_, i) => i !== index);
    setTabs(newTabs);
    if (activeTab === index) {
      setActiveTab(index === 0 ? 0 : index - 1);
    } else if (activeTab > index) {
      setActiveTab((prev) => prev - 1);
    }
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡ AI Component Generator</h1>

      <CodeTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onAddTab={handleAddTab}
        onTabClose={handleCloseTab}
      />

      <form onSubmit={handleSubmit}>
        <PromptInput
          prompt={currentTab.prompt}
          setPrompt={(val) => updateTab('prompt', val)}
          type={currentTab.type}
          setType={(val) => updateTab('type', val)}
        />

        {currentTab.type === 'HTML' && (
          <PropertyPanel
            title={currentTab.title}
            imageUrl={currentTab.imageUrl}
            description={currentTab.description}
            setTitle={(val) => updateTab('title', val)}
            setImageUrl={(val) => updateTab('imageUrl', val)}
            setDescription={(val) => updateTab('description', val)}
          />
        )}

        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          {currentTab.loading ? 'Generating...' : 'Generate'}
        </button>
      </form>

      {currentTab.code && (
        <GeneratedCode code={currentTab.code} type={currentTab.type} />
      )}
    </main>
  );
}
