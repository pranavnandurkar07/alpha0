import { useState } from 'react';
import { DashboardPrototype } from './prototypes/DashboardPrototype';
import { FileExplorerPrototype } from './prototypes/FileExplorerPrototype';
import { CodeWorkspacePrototype } from './prototypes/CodeWorkspacePrototype';
import { ResearchLabPrototype } from './prototypes/ResearchLabPrototype';
import { ChatInterfacePrototype } from './prototypes/ChatInterfacePrototype';

type PrototypeType = 'dashboard' | 'files' | 'code' | 'research' | 'chat';

export function UIPrototypesSection() {
  const [activePrototype, setActivePrototype] = useState<PrototypeType>('dashboard');

  const prototypes = [
    { id: 'dashboard' as PrototypeType, label: 'Main Dashboard', description: 'Unified workspace overview' },
    { id: 'files' as PrototypeType, label: 'File Explorer', description: 'Smart file navigation' },
    { id: 'code' as PrototypeType, label: 'Code Workspace', description: 'Development environment' },
    { id: 'research' as PrototypeType, label: 'Research Lab', description: 'Research notebook' },
    { id: 'chat' as PrototypeType, label: 'AI Chat', description: 'Integrated AI assistant' },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h2 className="text-slate-900 mb-2">Interactive UI Prototypes</h2>
        <p className="text-slate-600">
          Explore interactive mockups of key screens and features in Alpha0.
        </p>
      </div>

      {/* Prototype Selection */}
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
        {prototypes.map((prototype) => (
          <button
            key={prototype.id}
            onClick={() => setActivePrototype(prototype.id)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              activePrototype === prototype.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="text-slate-900 mb-1">{prototype.label}</div>
            <div className="text-slate-600 text-sm">{prototype.description}</div>
          </button>
        ))}
      </div>

      {/* Prototype Display */}
      <div className="bg-slate-100 rounded-xl p-6 border border-slate-300">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden" style={{ minHeight: '600px' }}>
          {activePrototype === 'dashboard' && <DashboardPrototype />}
          {activePrototype === 'files' && <FileExplorerPrototype />}
          {activePrototype === 'code' && <CodeWorkspacePrototype />}
          {activePrototype === 'research' && <ResearchLabPrototype />}
          {activePrototype === 'chat' && <ChatInterfacePrototype />}
        </div>
      </div>

      {/* Design Notes */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-slate-900 mb-4">Design System</h3>
          <div className="space-y-3 text-slate-700">
            <div>
              <strong>Color Palette:</strong> Modern, accessible colors with blue primary, purple accents, and neutral grays
            </div>
            <div>
              <strong>Typography:</strong> System fonts for performance, with clear hierarchy and readable sizes
            </div>
            <div>
              <strong>Components:</strong> Reusable design system with consistent spacing, borders, and shadows
            </div>
            <div>
              <strong>Icons:</strong> Lucide icon set for consistency and clarity across the platform
            </div>
            <div>
              <strong>Layout:</strong> Flexible grid system that adapts to different screen sizes and orientations
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-slate-900 mb-4">Accessibility Features</h3>
          <div className="space-y-3 text-slate-700">
            <div>
              <strong>Keyboard Navigation:</strong> Full keyboard support with visible focus indicators
            </div>
            <div>
              <strong>Screen Readers:</strong> ARIA labels and semantic HTML for assistive technologies
            </div>
            <div>
              <strong>Color Contrast:</strong> WCAG AA compliant contrast ratios for all text and UI elements
            </div>
            <div>
              <strong>Responsive Design:</strong> Adapts seamlessly from mobile to desktop screens
            </div>
            <div>
              <strong>Customization:</strong> User preferences for themes, font sizes, and layout density
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
