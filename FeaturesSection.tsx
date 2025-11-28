import { useState } from 'react';
import { 
  HardDrive, 
  Brain, 
  Code, 
  FlaskConical, 
  MessageSquare, 
  Plug, 
  Users, 
  Search,
  FolderSync,
  Sparkles,
  GitBranch,
  FileText,
  BarChart3,
  Shield
} from 'lucide-react';

type FeatureCategory = 'drive' | 'ai' | 'workspace' | 'collaboration' | 'integration' | 'security';

export function FeaturesSection() {
  const [activeCategory, setActiveCategory] = useState<FeatureCategory>('drive');

  const categories = [
    { id: 'drive' as FeatureCategory, label: 'Multi-User Drive', icon: HardDrive, color: 'blue' },
    { id: 'ai' as FeatureCategory, label: 'AI Features', icon: Brain, color: 'purple' },
    { id: 'workspace' as FeatureCategory, label: 'Workspaces', icon: Code, color: 'green' },
    { id: 'collaboration' as FeatureCategory, label: 'Collaboration', icon: Users, color: 'orange' },
    { id: 'integration' as FeatureCategory, label: 'Integrations', icon: Plug, color: 'pink' },
    { id: 'security' as FeatureCategory, label: 'Security', icon: Shield, color: 'red' },
  ];

  const features = {
    drive: [
      {
        title: 'User Rooms',
        icon: Users,
        description: 'Personal workspace for each user with unlimited storage, organized by projects and contexts.',
        features: ['Private storage', 'Personal AI assistant', 'Custom organization', 'Activity timeline']
      },
      {
        title: 'Team Rooms',
        icon: FolderSync,
        description: 'Shared spaces for teams with collaborative file management and team-specific permissions.',
        features: ['Team file sharing', 'Shared folders', 'Team analytics', 'Collaborative editing']
      },
      {
        title: 'Shared Spaces',
        icon: HardDrive,
        description: 'Public or semi-public spaces for cross-team collaboration and knowledge sharing.',
        features: ['Cross-team sharing', 'Public repositories', 'Access controls', 'Version history']
      },
      {
        title: 'Smart Organization',
        icon: FolderSync,
        description: 'Automated file organization based on content, context, and usage patterns.',
        features: ['Auto-categorization', 'Smart folders', 'Tag suggestions', 'Related file linking']
      },
      {
        title: 'Version Control',
        icon: GitBranch,
        description: 'Git-like versioning for all file types with branching, merging, and rollback capabilities.',
        features: ['Automatic versioning', 'Branch & merge', 'Diff visualization', 'Restore any version']
      },
      {
        title: 'Permission System',
        icon: Shield,
        description: 'Granular permission control with role-based access and automated permission suggestions.',
        features: ['Role-based access', 'Fine-grained permissions', 'Inheritance rules', 'Permission audit']
      }
    ],
    ai: [
      {
        title: 'Intelligent Search',
        icon: Search,
        description: 'Natural language search across all files, with semantic understanding and contextual results.',
        features: ['Semantic search', 'Multi-modal search', 'Search suggestions', 'Search filters']
      },
      {
        title: 'Auto-Tagging',
        icon: Sparkles,
        description: 'Automatic content analysis and tagging based on file content, context, and relationships.',
        features: ['Content analysis', 'Smart tags', 'Tag hierarchies', 'Custom taxonomies']
      },
      {
        title: 'File Understanding',
        icon: FileText,
        description: 'Deep understanding of file content including code, documents, images, and data files.',
        features: ['Code analysis', 'Document parsing', 'Image recognition', 'Data insights']
      },
      {
        title: 'Cross-Project Linking',
        icon: GitBranch,
        description: 'AI-powered discovery of relationships between files, projects, and concepts across the workspace.',
        features: ['Relationship detection', 'Knowledge graph', 'Smart suggestions', 'Context preservation']
      },
      {
        title: 'AI Assistants',
        icon: MessageSquare,
        description: 'Specialized AI assistants for coding, research, writing, and automation tasks.',
        features: ['Code assistant', 'Research helper', 'Writing coach', 'Automation agent']
      },
      {
        title: 'Predictive Actions',
        icon: Sparkles,
        description: 'AI predicts next actions based on patterns and suggests workflows and optimizations.',
        features: ['Action suggestions', 'Workflow automation', 'Smart shortcuts', 'Pattern learning']
      }
    ],
    workspace: [
      {
        title: 'Code Environment',
        icon: Code,
        description: 'Full-featured code editor with Git integration, CI/CD pipelines, and collaborative coding.',
        features: ['VS Code integration', 'Git workflows', 'Live collaboration', 'Code review tools']
      },
      {
        title: 'Research Lab',
        icon: FlaskConical,
        description: 'Digital lab notebook with experiment tracking, data analysis, and research collaboration.',
        features: ['Lab notebooks', 'Experiment tracking', 'Data visualization', 'Citation management']
      },
      {
        title: 'Content Studio',
        icon: FileText,
        description: 'Rich document editor with real-time collaboration, media integration, and publishing tools.',
        features: ['Rich text editor', 'Media library', 'Template system', 'Publishing workflow']
      },
      {
        title: 'Data Analytics',
        icon: BarChart3,
        description: 'Interactive dashboards, data exploration, and visualization tools for insights.',
        features: ['Custom dashboards', 'Data connectors', 'Visualization library', 'SQL/NoSQL queries']
      },
      {
        title: 'Design Workspace',
        icon: Sparkles,
        description: 'Design collaboration tools with asset management, feedback, and version control.',
        features: ['Asset library', 'Design feedback', 'Version comparison', 'Export tools']
      },
      {
        title: 'Project Dashboard',
        icon: BarChart3,
        description: 'Unified view of project status, team activity, deadlines, and key metrics.',
        features: ['Activity feeds', 'Milestone tracking', 'Team insights', 'Custom views']
      }
    ],
    collaboration: [
      {
        title: 'Real-Time Editing',
        icon: Users,
        description: 'Simultaneous editing with live cursors, presence indicators, and conflict resolution.',
        features: ['Live cursors', 'Presence awareness', 'Conflict resolution', 'Edit history']
      },
      {
        title: 'Integrated Chat',
        icon: MessageSquare,
        description: 'Context-aware chat with file attachments, code snippets, and AI assistance.',
        features: ['File context chat', 'Code discussions', 'AI chat bot', 'Thread organization']
      },
      {
        title: 'Comments & Annotations',
        icon: MessageSquare,
        description: 'Add comments to any file type with mentions, threads, and resolution tracking.',
        features: ['Inline comments', '@mentions', 'Comment threads', 'Resolution status']
      },
      {
        title: 'Team Activity Feed',
        icon: Users,
        description: 'Real-time feed of team activities, file changes, and important events.',
        features: ['Activity stream', 'Filtered views', 'Notifications', 'Activity search']
      },
      {
        title: 'Video Conferencing',
        icon: Users,
        description: 'Built-in video calls with screen sharing and collaborative workspace access.',
        features: ['HD video/audio', 'Screen sharing', 'Recording', 'In-call collaboration']
      },
      {
        title: 'Task Management',
        icon: FileText,
        description: 'Integrated task tracking linked to files, projects, and team members.',
        features: ['Task creation', 'File linking', 'Assignees & due dates', 'Progress tracking']
      }
    ],
    integration: [
      {
        title: 'GitHub Integration',
        icon: GitBranch,
        description: 'Seamless GitHub connectivity with repository sync, PR reviews, and CI/CD integration.',
        features: ['Repo sync', 'PR management', 'CI/CD pipelines', 'Issue tracking']
      },
      {
        title: 'Office 365 / Google Workspace',
        icon: FileText,
        description: 'Import and edit Office documents with real-time sync and format preservation.',
        features: ['Doc import/export', 'Real-time sync', 'Format preservation', 'Calendar integration']
      },
      {
        title: 'Research Databases',
        icon: FlaskConical,
        description: 'Connect to academic databases, research repositories, and data sources.',
        features: ['PubMed/ArXiv', 'Data repositories', 'Citation import', 'Research networks']
      },
      {
        title: 'Cloud Build Tools',
        icon: Code,
        description: 'Integration with cloud build systems, deployment platforms, and infrastructure tools.',
        features: ['Vercel/Netlify', 'AWS/GCP/Azure', 'Docker/K8s', 'Terraform']
      },
      {
        title: 'API Marketplace',
        icon: Plug,
        description: 'Extensible plugin system with marketplace for third-party integrations and custom tools.',
        features: ['Plugin SDK', 'Marketplace', 'Custom integrations', 'Webhooks']
      },
      {
        title: 'Data Import/Export',
        icon: FolderSync,
        description: 'Bulk import from other platforms and flexible export options for data portability.',
        features: ['Bulk import', 'Multiple formats', 'Migration tools', 'API access']
      }
    ],
    security: [
      {
        title: 'End-to-End Encryption',
        icon: Shield,
        description: 'Military-grade encryption for files at rest and in transit with zero-knowledge architecture.',
        features: ['AES-256 encryption', 'Zero-knowledge', 'Encrypted metadata', 'Key management']
      },
      {
        title: 'Access Control',
        icon: Shield,
        description: 'Granular permission system with role-based and attribute-based access control.',
        features: ['RBAC/ABAC', 'Permission inheritance', 'Access policies', 'Temporary access']
      },
      {
        title: 'Audit Logging',
        icon: FileText,
        description: 'Comprehensive logging of all user actions, file access, and system events.',
        features: ['Action logs', 'Access tracking', 'Compliance reports', 'Log retention']
      },
      {
        title: 'Multi-Factor Auth',
        icon: Shield,
        description: 'Advanced authentication with MFA, SSO, and biometric options.',
        features: ['2FA/MFA', 'SSO integration', 'Biometric auth', 'Device management']
      },
      {
        title: 'Data Loss Prevention',
        icon: Shield,
        description: 'Automated detection and prevention of sensitive data exposure and unauthorized sharing.',
        features: ['Sensitive data detection', 'Policy enforcement', 'Alerts & blocking', 'Compliance rules']
      },
      {
        title: 'Compliance',
        icon: Shield,
        description: 'Built-in compliance with major standards and regulations for enterprise readiness.',
        features: ['SOC 2 Type II', 'GDPR compliant', 'HIPAA ready', 'ISO 27001']
      }
    ]
  };

  const activeFeatures = features[activeCategory];
  const activeColor = categories.find(c => c.id === activeCategory)?.color || 'blue';

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h2 className="text-slate-900 mb-2">Comprehensive Feature Set</h2>
        <p className="text-slate-600">
          Alpha0 provides a complete ecosystem of features designed to support every aspect of modern collaborative work.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="bg-white rounded-xl p-2 border border-slate-200">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? `bg-${category.color}-100 text-${category.color}-700 shadow-sm`
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{category.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {activeFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 bg-${activeColor}-100 rounded-lg flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 text-${activeColor}-600`} />
              </div>
              <h3 className="text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 mb-4">{feature.description}</p>
              <div className="space-y-2">
                {feature.features.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${activeColor}-500`}></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
