import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { ArchitectureSection } from './components/ArchitectureSection';
import { FeaturesSection } from './components/FeaturesSection';
import { UserFlowsSection } from './components/UserFlowsSection';
import { UIPrototypesSection } from './components/UIPrototypesSection';
import { CompetitiveEdgeSection } from './components/CompetitiveEdgeSection';
import { UseCasesSection } from './components/UseCasesSection';
import { OverviewSection } from './components/OverviewSection';

export type Section = 'overview' | 'architecture' | 'features' | 'flows' | 'prototypes' | 'competitive' | 'usecases';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white">α0</span>
            </div>
            <div>
              <h1 className="text-slate-900">Alpha0 Product Blueprint</h1>
              <p className="text-slate-600 text-sm">AI-Powered Collaborative Cloud Workspace</p>
            </div>
          </div>
        </div>
      </header>

      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeSection === 'overview' && <OverviewSection />}
        {activeSection === 'architecture' && <ArchitectureSection />}
        {activeSection === 'features' && <FeaturesSection />}
        {activeSection === 'flows' && <UserFlowsSection />}
        {activeSection === 'prototypes' && <UIPrototypesSection />}
        {activeSection === 'competitive' && <CompetitiveEdgeSection />}
        {activeSection === 'usecases' && <UseCasesSection />}
      </main>

      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-slate-600 text-sm">
          <p>Alpha0 - Next Generation Collaborative Workspace | Product Blueprint 2025</p>
        </div>
      </footer>
    </div>
  );
}
