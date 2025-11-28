import { CheckCircle2, X, Zap } from 'lucide-react';

export function CompetitiveEdgeSection() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h2 className="text-slate-900 mb-2">Competitive Advantages</h2>
        <p className="text-slate-600">
          Alpha0 differentiates itself through unique combinations of features and deep AI integration 
          that no single competitor offers.
        </p>
      </div>

      {/* Unique Value Propositions */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-white mb-2">Unified Ecosystem</h3>
          <p className="text-blue-100">
            First platform to truly unify storage, code environments, research tools, and AI assistance in 
            one seamless workspace. No tool switching.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-white">
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-white mb-2">Context-Aware AI</h3>
          <p className="text-purple-100">
            AI understands your entire workspace context - files, code, research, conversations - 
            providing unprecedented intelligent assistance.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white">
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-white mb-2">Zero-Friction Collaboration</h3>
          <p className="text-green-100">
            Automatic permission management, intelligent sharing, and seamless real-time collaboration 
            without manual file sharing.
          </p>
        </div>
      </div>

      {/* Competitive Comparison */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-slate-900">Feature Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-slate-900">Feature</th>
                <th className="px-6 py-3 text-center text-slate-900">Alpha0</th>
                <th className="px-6 py-3 text-center text-slate-600">Google Drive</th>
                <th className="px-6 py-3 text-center text-slate-600">Dropbox</th>
                <th className="px-6 py-3 text-center text-slate-600">GitHub</th>
                <th className="px-6 py-3 text-center text-slate-600">Notion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-6 py-4 text-slate-900">Cloud Storage</td>
                <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><span className="text-slate-400 text-sm">Limited</span></td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-6 py-4 text-slate-900">Code Environment</td>
                <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-slate-900">AI-Powered Search</td>
                <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><span className="text-slate-400 text-sm">Basic</span></td>
                <td className="px-6 py-4 text-center"><span className="text-slate-400 text-sm">Basic</span></td>
                <td className="px-6 py-4 text-center"><span className="text-slate-400 text-sm">Code Only</span></td>
                <td className="px-6 py-4 text-center"><span className="text-slate-400 text-sm">Basic</span></td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-6 py-4 text-slate-900">Research Lab Tools</td>
                <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-slate-900">AI Assistant Integration</td>
                <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><span className="text-slate-400 text-sm">Limited</span></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><span className="text-slate-400 text-sm">Copilot</span></td>
                <td className="px-6 py-4 text-center"><span className="text-slate-400 text-sm">Basic</span></td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-6 py-4 text-slate-900">Cross-Project Linking</td>
                <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><span className="text-slate-400 text-sm">Manual</span></td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-slate-900">Real-Time Collaboration</td>
                <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><span className="text-slate-400 text-sm">Docs Only</span></td>
                <td className="px-6 py-4 text-center"><span className="text-slate-400 text-sm">Paper</span></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-6 py-4 text-slate-900">Automated Permissions</td>
                <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-slate-900">Custom Workspaces</td>
                <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><span className="text-slate-400 text-sm">Templates</span></td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-6 py-4 text-slate-900">File Understanding</td>
                <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><span className="text-slate-400 text-sm">Limited</span></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                <td className="px-6 py-4 text-center"><span className="text-slate-400 text-sm">Code Only</span></td>
                <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Differentiators */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-slate-900 mb-4">vs. Traditional Cloud Storage</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-slate-900">AI understands file content</div>
                <div className="text-slate-600 text-sm">Not just metadata - deep semantic understanding</div>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-slate-900">Integrated workspaces</div>
                <div className="text-slate-600 text-sm">Code, research, design - all in one place</div>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-slate-900">Automatic organization</div>
                <div className="text-slate-600 text-sm">AI auto-tags and links related content</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-slate-900 mb-4">vs. Development Platforms</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-slate-900">Universal file support</div>
                <div className="text-slate-600 text-sm">Not just code - documents, data, media</div>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-slate-900">Cross-domain collaboration</div>
                <div className="text-slate-600 text-sm">Researchers, designers, developers together</div>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-slate-900">Intelligent context linking</div>
                <div className="text-slate-600 text-sm">Connects code to docs, research, and discussions</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Market Positioning */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="text-slate-900 mb-4">Market Positioning</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-blue-600 mb-2">Target Market</div>
            <p className="text-slate-700 text-sm">
              Tech companies, research institutions, design studios, and modern knowledge workers who need 
              unified tools for complex collaborative work.
            </p>
          </div>
          <div>
            <div className="text-purple-600 mb-2">Pricing Strategy</div>
            <p className="text-slate-700 text-sm">
              Freemium model with generous free tier. Premium features for teams. Enterprise plans with 
              custom AI models and dedicated infrastructure.
            </p>
          </div>
          <div>
            <div className="text-green-600 mb-2">Go-to-Market</div>
            <p className="text-slate-700 text-sm">
              Start with developer and research communities. Expand through team adoption. 
              Enterprise sales for large organizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
