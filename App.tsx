import React from 'react';
import { Header } from './components/Header';
import { NvramTable } from './components/NvramTable';
import { AddEntryForm } from './components/AddEntryForm';
import { ControlPanel } from './components/ControlPanel';
import { useNvram } from './hooks/useNvram';

const App: React.FC = () => {
  const {
    entries,
    addEntry,
    updateEntry,
    deleteEntry,
    commitChanges,
    loadFromStorage,
    factoryReset,
    exportEntries,
    importEntries,
    isCommitting,
    isDirty
  } = useNvram();

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <ControlPanel
            onCommit={commitChanges}
            onLoad={loadFromStorage}
            onReset={factoryReset}
            onExport={exportEntries}
            onImport={importEntries}
            isCommitting={isCommitting}
            isDirty={isDirty}
          />
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <NvramTable
              entries={entries}
              onUpdate={updateEntry}
              onDelete={deleteEntry}
            />
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-200">Add New Entry</h2>
            <AddEntryForm onAdd={addEntry} />
          </div>
        </div>
      </main>
      <footer className="text-center py-4 text-gray-600 text-sm">
        <p>Web NVRAM Configuration Manager</p>
      </footer>
    </div>
  );
};

export default App;