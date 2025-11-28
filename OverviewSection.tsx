import { Sparkles, Users, Zap, Shield, Globe, Cpu } from 'lucide-react';

export function OverviewSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-3xl">
            α0
          </div>
          <div className="flex-1">
            <h2 className="text-white mb-2">Alpha0: AI-Powered Collaborative Cloud Workspace</h2>
            <p className="text-blue-100 text-lg">
              A next-generation platform that unifies storage, collaboration, and creation in one intelligent ecosystem.
              Multi-user drive meets creative-technical operating environment with seamless AI integration.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-slate-900 mb-2">Multi-User Drive System</h3>
          <p className="text-slate-600">Personal rooms, team spaces, and shared environments with intelligent permission control and real-time collaboration.</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-slate-900 mb-2">AI-Powered Intelligence</h3>
          <p className="text-slate-600">Automated search, tagging, file understanding, cross-project linking, and AI assistants for coding, research, and content.</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-slate-900 mb-2">Integrated Workspaces</h3>
          <p className="text-slate-600">Code environments, research labs, content studios, and team dashboards - all in one unified platform.</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <Globe className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="text-slate-900 mb-2">External Integrations</h3>
          <p className="text-slate-600">Connect with GitHub, Office 365, research databases, cloud build tools, and hundreds of external APIs seamlessly.</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-slate-900 mb-2">Enterprise Security</h3>
          <p className="text-slate-600">End-to-end encryption, granular permissions, audit logs, compliance ready, and advanced threat detection.</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <Cpu className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-slate-900 mb-2">Modular & Scalable</h3>
          <p className="text-slate-600">Microservices architecture, horizontal scaling, plugin ecosystem, and customizable workflows for any team size.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 border border-slate-200">
        <h3 className="text-slate-900 mb-4">Core Vision</h3>
        <div className="space-y-4 text-slate-700">
          <p>
            <strong>Alpha0</strong> eliminates the friction of modern digital work by creating a unified environment where storage, 
            collaboration, and creation happen seamlessly. No more switching between tools, manually sharing files, or losing context 
            across platforms.
          </p>
          <p>
            By combining a powerful multi-user drive system with specialized creative and technical workspaces - all enhanced by 
            AI - Alpha0 becomes the single source of truth for teams. Whether you're coding, researching, designing, or collaborating, 
            everything lives in one intelligent ecosystem that understands your work and helps you do more.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200">
            <div>
              <div className="text-2xl text-blue-600 mb-1">10x</div>
              <div className="text-slate-600">Faster File Discovery</div>
            </div>
            <div>
              <div className="text-2xl text-purple-600 mb-1">50%</div>
              <div className="text-slate-600">Reduction in Tool Switching</div>
            </div>
            <div>
              <div className="text-2xl text-green-600 mb-1">100%</div>
              <div className="text-slate-600">Context Preservation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
