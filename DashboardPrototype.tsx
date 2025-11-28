import { Bell, Search, Settings, Plus, Folder, File, Users, TrendingUp, Clock, Star } from 'lucide-react';

export function DashboardPrototype() {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-200 px-6 py-4 flex items-center justify-between bg-white">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm">
            α0
          </div>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search files, projects, people..."
              className="pl-10 pr-4 py-2 bg-slate-100 rounded-lg text-sm w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-slate-100 rounded-lg relative">
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 hover:bg-slate-100 rounded-lg">
            <Settings className="w-5 h-5 text-slate-600" />
          </button>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
            JD
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Welcome Section */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
            <h2 className="text-white mb-2">Good morning, John 👋</h2>
            <p className="text-blue-100 mb-4">You have 3 active projects and 12 files updated today</p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Create New Project</span>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-600 text-sm">Total Files</span>
                <Folder className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-2xl text-slate-900">1,247</div>
              <div className="text-green-600 text-sm">↑ 12% from last week</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-600 text-sm">Active Projects</span>
                <TrendingUp className="w-4 h-4 text-purple-600" />
              </div>
              <div className="text-2xl text-slate-900">8</div>
              <div className="text-slate-600 text-sm">3 due this week</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-600 text-sm">Team Members</span>
                <Users className="w-4 h-4 text-green-600" />
              </div>
              <div className="text-2xl text-slate-900">24</div>
              <div className="text-slate-600 text-sm">6 online now</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-600 text-sm">Storage Used</span>
                <Star className="w-4 h-4 text-orange-600" />
              </div>
              <div className="text-2xl text-slate-900">45GB</div>
              <div className="text-slate-600 text-sm">of 100GB</div>
            </div>
          </div>

          {/* Recent Activity & Recent Files */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-slate-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Recent Activity
              </h3>
              <div className="space-y-3">
                {[
                  { user: 'Sarah Chen', action: 'updated', file: 'project-specs.doc', time: '5m ago', color: 'blue' },
                  { user: 'Mike Rodriguez', action: 'commented on', file: 'design-system.fig', time: '12m ago', color: 'green' },
                  { user: 'You', action: 'uploaded', file: 'research-data.csv', time: '1h ago', color: 'purple' },
                  { user: 'Emma Watson', action: 'created', file: 'Q4-roadmap.md', time: '2h ago', color: 'orange' },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full bg-${activity.color}-100 flex items-center justify-center text-${activity.color}-600 text-xs flex-shrink-0`}>
                      {activity.user[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-slate-900 text-sm">
                        <strong>{activity.user}</strong> {activity.action} <span className="text-blue-600">{activity.file}</span>
                      </div>
                      <div className="text-slate-500 text-xs">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Files */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-slate-900 mb-4 flex items-center gap-2">
                <File className="w-5 h-5" />
                Recent Files
              </h3>
              <div className="space-y-2">
                {[
                  { name: 'Alpha0-Architecture.pdf', size: '2.4 MB', modified: 'Today 10:30 AM', icon: '📄' },
                  { name: 'UserFlow-Diagram.sketch', size: '8.1 MB', modified: 'Today 9:15 AM', icon: '🎨' },
                  { name: 'api-integration.ts', size: '45 KB', modified: 'Yesterday 4:20 PM', icon: '💻' },
                  { name: 'research-findings.md', size: '128 KB', modified: 'Yesterday 2:10 PM', icon: '📝' },
                ].map((file, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                    <div className="text-2xl">{file.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-slate-900 text-sm truncate">{file.name}</div>
                      <div className="text-slate-500 text-xs">{file.size} • {file.modified}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Projects */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="text-slate-900 mb-4">Active Projects</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: 'Alpha0 Platform', progress: 65, team: 8, color: 'blue' },
                { name: 'AI Research Lab', progress: 42, team: 5, color: 'purple' },
                { name: 'Design System v2', progress: 88, team: 3, color: 'green' },
              ].map((project, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-slate-900">{project.name}</div>
                    <div className={`text-${project.color}-600 text-sm`}>{project.progress}%</div>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full mb-3">
                    <div className={`h-full bg-${project.color}-600 rounded-full`} style={{ width: `${project.progress}%` }}></div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{project.team} members</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
