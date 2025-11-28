import { Folder, File, MoreVertical, Star, Share2, Download, Trash2, Grid, List, ChevronRight, Tag, Search } from 'lucide-react';

export function FileExplorerPrototype() {
  return (
    <div className="h-full flex">
      {/* Sidebar */}
      <div className="w-64 border-r border-slate-200 bg-slate-50 p-4">
        <div className="space-y-1">
          <div className="text-slate-500 text-xs px-3 py-2">WORKSPACES</div>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-100 text-blue-700">
            <Folder className="w-4 h-4" />
            <span>My Files</span>
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700">
            <Folder className="w-4 h-4" />
            <span>Team Files</span>
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700">
            <Folder className="w-4 h-4" />
            <span>Shared with me</span>
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700">
            <Star className="w-4 h-4" />
            <span>Starred</span>
          </button>
        </div>

        <div className="mt-6 space-y-1">
          <div className="text-slate-500 text-xs px-3 py-2">PROJECTS</div>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700">
            <div className="w-3 h-3 rounded bg-blue-500"></div>
            <span>Alpha0 Platform</span>
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700">
            <div className="w-3 h-3 rounded bg-purple-500"></div>
            <span>AI Research</span>
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700">
            <div className="w-3 h-3 rounded bg-green-500"></div>
            <span>Design System</span>
          </button>
        </div>

        <div className="mt-6">
          <div className="text-slate-500 text-xs px-3 py-2">SMART TAGS</div>
          <div className="flex flex-wrap gap-2 px-3">
            {['Documents', 'Code', 'Images', 'Research'].map((tag) => (
              <span key={tag} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600 hover:border-blue-400 cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="border-b border-slate-200 px-6 py-3 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="hover:text-slate-900 cursor-pointer">Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="hover:text-slate-900 cursor-pointer">My Files</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900">Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-slate-100 rounded">
                <Grid className="w-4 h-4 text-slate-600" />
              </button>
              <button className="p-2 hover:bg-slate-100 rounded bg-slate-100">
                <List className="w-4 h-4 text-slate-900" />
              </button>
            </div>
          </div>
        </div>

        {/* AI Search Bar */}
        <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-200">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Ask AI to find files... (e.g., 'Show me all design files from last week')"
              className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2 mt-2">
            <span className="px-2 py-1 bg-white rounded text-xs text-slate-600">Recent documents</span>
            <span className="px-2 py-1 bg-white rounded text-xs text-slate-600">Shared by team</span>
            <span className="px-2 py-1 bg-white rounded text-xs text-slate-600">Modified today</span>
          </div>
        </div>

        {/* File List */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-2">
            {/* Folders */}
            {[
              { name: 'Architecture Docs', items: 24, modified: 'Today', color: 'blue', starred: true },
              { name: 'UI Prototypes', items: 18, modified: 'Yesterday', color: 'purple', starred: false },
              { name: 'Research Data', items: 52, modified: '3 days ago', color: 'green', starred: false },
            ].map((folder, i) => (
              <div key={i} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-lg cursor-pointer group">
                <Folder className={`w-5 h-5 text-${folder.color}-600`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-900">{folder.name}</span>
                    {folder.starred && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                  </div>
                  <div className="text-slate-500 text-sm">{folder.items} items • Modified {folder.modified}</div>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1 hover:bg-slate-200 rounded">
                    <Share2 className="w-4 h-4 text-slate-600" />
                  </button>
                  <button className="p-1 hover:bg-slate-200 rounded">
                    <MoreVertical className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
              </div>
            ))}

            {/* Files */}
            {[
              { name: 'Product Roadmap Q4.pdf', size: '2.4 MB', modified: '2 hours ago', type: 'PDF', tags: ['planning', 'product'] },
              { name: 'user-authentication.ts', size: '48 KB', modified: '5 hours ago', type: 'Code', tags: ['typescript', 'backend'] },
              { name: 'User Research Findings.md', size: '156 KB', modified: 'Yesterday', type: 'Markdown', tags: ['research', 'ux'] },
              { name: 'logo-variations.sketch', size: '12.3 MB', modified: '2 days ago', type: 'Design', tags: ['design', 'branding'] },
              { name: 'database-schema.sql', size: '24 KB', modified: '3 days ago', type: 'SQL', tags: ['database', 'schema'] },
            ].map((file, i) => (
              <div key={i} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-lg cursor-pointer group">
                <File className="w-5 h-5 text-slate-400" />
                <div className="flex-1 min-w-0">
                  <div className="text-slate-900">{file.name}</div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <span>{file.type}</span>
                    <span>•</span>
                    <span>{file.size}</span>
                    <span>•</span>
                    <span>{file.modified}</span>
                    <span>•</span>
                    <div className="flex gap-1">
                      {file.tags.map((tag) => (
                        <span key={tag} className="px-1.5 py-0.5 bg-slate-100 rounded text-xs flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1 hover:bg-slate-200 rounded">
                    <Download className="w-4 h-4 text-slate-600" />
                  </button>
                  <button className="p-1 hover:bg-slate-200 rounded">
                    <Share2 className="w-4 h-4 text-slate-600" />
                  </button>
                  <button className="p-1 hover:bg-slate-200 rounded">
                    <MoreVertical className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights Panel */}
      <div className="w-80 border-l border-slate-200 bg-slate-50 p-4 overflow-y-auto">
        <h3 className="text-slate-900 mb-4">AI Insights</h3>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-slate-900 mb-2">Related Files</div>
            <div className="space-y-2">
              {['API Documentation.md', 'Integration Guide.pdf'].map((file, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 cursor-pointer">
                  <File className="w-3 h-3" />
                  <span className="truncate">{file}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-slate-900 mb-2">Suggested Tags</div>
            <div className="flex flex-wrap gap-2">
              {['API', 'Documentation', 'Backend'].map((tag) => (
                <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs cursor-pointer hover:bg-blue-100">
                  + {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-slate-900 mb-2">Quick Actions</div>
            <div className="space-y-2">
              <button className="w-full text-left text-sm text-slate-700 hover:text-blue-600 py-1">
                Share with team
              </button>
              <button className="w-full text-left text-sm text-slate-700 hover:text-blue-600 py-1">
                Create workspace
              </button>
              <button className="w-full text-left text-sm text-slate-700 hover:text-blue-600 py-1">
                Export selection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
