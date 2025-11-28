import { Section } from '../App';
import { Layers, List, GitBranch, Layout, TrendingUp, Briefcase, BookOpen } from 'lucide-react';

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const navItems = [
  { id: 'overview' as Section, label: 'Overview', icon: BookOpen },
  { id: 'architecture' as Section, label: 'Architecture', icon: Layers },
  { id: 'features' as Section, label: 'Features', icon: List },
  { id: 'flows' as Section, label: 'User Flows', icon: GitBranch },
  { id: 'prototypes' as Section, label: 'UI Prototypes', icon: Layout },
  { id: 'competitive' as Section, label: 'Competitive Edge', icon: TrendingUp },
  { id: 'usecases' as Section, label: 'Use Cases', icon: Briefcase },
];

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-[73px] z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-1 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
