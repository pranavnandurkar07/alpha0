import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

type FlowType = 'onboarding' | 'file-upload' | 'collaboration' | 'code-project' | 'research';

export function UserFlowsSection() {
  const [activeFlow, setActiveFlow] = useState<FlowType>('onboarding');

  const flows = {
    onboarding: {
      title: 'User Onboarding Flow',
      description: 'First-time user experience from signup to productive workspace',
      steps: [
        { title: 'Sign Up', description: 'Create account with email/SSO, verify identity' },
        { title: 'Profile Setup', description: 'Set name, avatar, role, and work preferences' },
        { title: 'Workspace Creation', description: 'Create or join workspace, set up team structure' },
        { title: 'Import Data', description: 'Optional: Import files from existing platforms (Dropbox, Drive, GitHub)' },
        { title: 'Guided Tour', description: 'Interactive walkthrough of key features and workspaces' },
        { title: 'AI Assistant Setup', description: 'Configure AI preferences and connect relevant tools' },
        { title: 'First Project', description: 'Create first project or join team project' },
        { title: 'Invite Team', description: 'Invite collaborators and set permissions' }
      ]
    },
    'file-upload': {
      title: 'File Upload & Organization Flow',
      description: 'Upload files and let AI automatically organize and enrich them',
      steps: [
        { title: 'Select Files', description: 'Drag & drop or browse files from any device' },
        { title: 'Upload Processing', description: 'Files upload with progress indicators and pause/resume' },
        { title: 'AI Analysis', description: 'System analyzes content, extracts metadata, generates embeddings' },
        { title: 'Auto-Tagging', description: 'AI suggests tags, categories, and project associations' },
        { title: 'Smart Organization', description: 'Files automatically placed in relevant folders/projects' },
        { title: 'Relationship Discovery', description: 'AI identifies connections to existing files and projects' },
        { title: 'Version Detection', description: 'System detects if file is update to existing file' },
        { title: 'Notification', description: 'Team notified of new files with context and suggestions' }
      ]
    },
    collaboration: {
      title: 'Real-Time Collaboration Flow',
      description: 'Multiple users collaborating on a document or project',
      steps: [
        { title: 'Open File', description: 'User opens file in appropriate workspace (code, doc, design)' },
        { title: 'Presence Detection', description: 'System shows who else is viewing/editing the file' },
        { title: 'Live Editing', description: 'Multiple users edit simultaneously with live cursors' },
        { title: 'AI Suggestions', description: 'AI provides real-time suggestions and auto-complete' },
        { title: 'Comment & Discuss', description: 'Users add inline comments and start discussions' },
        { title: 'Chat Context', description: 'Integrated chat maintains context of current file' },
        { title: 'Change Tracking', description: 'All changes tracked with attribution and timestamps' },
        { title: 'Save & Sync', description: 'Auto-save with instant sync across all users' }
      ]
    },
    'code-project': {
      title: 'Code Project Workflow',
      description: 'Complete workflow for software development projects',
      steps: [
        { title: 'Create Project', description: 'Initialize new code project or import from GitHub' },
        { title: 'Setup Environment', description: 'Configure dev environment, dependencies, and build tools' },
        { title: 'Code with AI', description: 'Write code with AI assistance, auto-complete, and suggestions' },
        { title: 'Version Control', description: 'Commit changes with integrated Git workflow' },
        { title: 'Code Review', description: 'Team reviews PRs with inline comments and AI insights' },
        { title: 'CI/CD Pipeline', description: 'Automated testing and deployment on commit' },
        { title: 'Documentation', description: 'AI generates documentation from code and comments' },
        { title: 'Deployment', description: 'Deploy to cloud providers directly from platform' }
      ]
    },
    research: {
      title: 'Research Project Workflow',
      description: 'End-to-end research workflow from hypothesis to publication',
      steps: [
        { title: 'Create Lab Notebook', description: 'Start new research project with structured notebook' },
        { title: 'Literature Review', description: 'Import papers, AI summarizes and identifies connections' },
        { title: 'Experiment Design', description: 'Plan experiments with protocol templates' },
        { title: 'Data Collection', description: 'Upload research data, integrate with lab equipment' },
        { title: 'Data Analysis', description: 'Run analyses with built-in tools and AI insights' },
        { title: 'Visualization', description: 'Create charts, graphs, and visual representations' },
        { title: 'Collaborate', description: 'Share findings with team, get feedback in real-time' },
        { title: 'Publish', description: 'Export to publication format with citations and figures' }
      ]
    }
  };

  const flowData = flows[activeFlow];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h2 className="text-slate-900 mb-2">User Flows & Journeys</h2>
        <p className="text-slate-600">
          Detailed workflows showing how users interact with Alpha0 for different use cases.
        </p>
      </div>

      {/* Flow Selection */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        <button
          onClick={() => setActiveFlow('onboarding')}
          className={`p-4 rounded-lg border-2 transition-all text-left ${
            activeFlow === 'onboarding'
              ? 'border-blue-500 bg-blue-50'
              : 'border-slate-200 bg-white hover:border-slate-300'
          }`}
        >
          <div className="text-slate-900 mb-1">Onboarding</div>
          <div className="text-slate-600 text-sm">New user setup</div>
        </button>

        <button
          onClick={() => setActiveFlow('file-upload')}
          className={`p-4 rounded-lg border-2 transition-all text-left ${
            activeFlow === 'file-upload'
              ? 'border-blue-500 bg-blue-50'
              : 'border-slate-200 bg-white hover:border-slate-300'
          }`}
        >
          <div className="text-slate-900 mb-1">File Upload</div>
          <div className="text-slate-600 text-sm">Smart organization</div>
        </button>

        <button
          onClick={() => setActiveFlow('collaboration')}
          className={`p-4 rounded-lg border-2 transition-all text-left ${
            activeFlow === 'collaboration'
              ? 'border-blue-500 bg-blue-50'
              : 'border-slate-200 bg-white hover:border-slate-300'
          }`}
        >
          <div className="text-slate-900 mb-1">Collaboration</div>
          <div className="text-slate-600 text-sm">Real-time editing</div>
        </button>

        <button
          onClick={() => setActiveFlow('code-project')}
          className={`p-4 rounded-lg border-2 transition-all text-left ${
            activeFlow === 'code-project'
              ? 'border-blue-500 bg-blue-50'
              : 'border-slate-200 bg-white hover:border-slate-300'
          }`}
        >
          <div className="text-slate-900 mb-1">Code Project</div>
          <div className="text-slate-600 text-sm">Dev workflow</div>
        </button>

        <button
          onClick={() => setActiveFlow('research')}
          className={`p-4 rounded-lg border-2 transition-all text-left ${
            activeFlow === 'research'
              ? 'border-blue-500 bg-blue-50'
              : 'border-slate-200 bg-white hover:border-slate-300'
          }`}
        >
          <div className="text-slate-900 mb-1">Research</div>
          <div className="text-slate-600 text-sm">Lab workflow</div>
        </button>
      </div>

      {/* Flow Details */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="text-slate-900 mb-2">{flowData.title}</h3>
        <p className="text-slate-600 mb-6">{flowData.description}</p>

        {/* Flow Steps */}
        <div className="space-y-4">
          {flowData.steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  {index + 1}
                </div>
                {index < flowData.steps.length - 1 && (
                  <div className="w-0.5 h-full min-h-[40px] bg-slate-200 mt-2"></div>
                )}
              </div>
              <div className="flex-1 pb-4">
                <div className="text-slate-900 mb-1">{step.title}</div>
                <div className="text-slate-600 text-sm">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interaction Patterns */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-slate-900 mb-4">Key Interaction Patterns</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-slate-900">Context Preservation</div>
                <div className="text-slate-600 text-sm">System remembers user context across sessions and workspaces</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-slate-900">Progressive Disclosure</div>
                <div className="text-slate-600 text-sm">Advanced features revealed as users become proficient</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-slate-900">Smart Defaults</div>
                <div className="text-slate-600 text-sm">AI learns preferences and suggests optimal settings</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-slate-900">Instant Feedback</div>
                <div className="text-slate-600 text-sm">Real-time visual feedback for all actions</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-slate-900 mb-4">Design Principles</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-slate-900">Zero Friction</div>
                <div className="text-slate-600 text-sm">Remove unnecessary steps and automate repetitive tasks</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-slate-900">Contextual Intelligence</div>
                <div className="text-slate-600 text-sm">Surface relevant features and data based on current task</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-slate-900">Flexible Organization</div>
                <div className="text-slate-600 text-sm">Multiple ways to organize and access same information</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-slate-900">Graceful Degradation</div>
                <div className="text-slate-600 text-sm">Core features work offline and in low-bandwidth scenarios</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
