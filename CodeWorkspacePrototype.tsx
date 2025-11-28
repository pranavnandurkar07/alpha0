import { Play, GitBranch, Terminal, FileCode, Settings, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';

export function CodeWorkspacePrototype() {
  return (
    <div className="h-full flex flex-col bg-slate-900">
      {/* Top Bar */}
      <div className="bg-slate-800 border-b border-slate-700 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-slate-300 text-sm">
            <GitBranch className="w-4 h-4" />
            <span>main</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-400">2 changes</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded flex items-center gap-2 text-sm">
            <Play className="w-4 h-4" />
            Run
          </button>
          <button className="p-1.5 hover:bg-slate-700 rounded text-slate-300">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* File Tree */}
        <div className="w-64 bg-slate-800 border-r border-slate-700 overflow-y-auto">
          <div className="p-4">
            <div className="text-slate-400 text-xs mb-2">EXPLORER</div>
            <div className="space-y-1">
              <div className="text-slate-300 text-sm py-1">📁 src</div>
              <div className="ml-4 space-y-1">
                <div className="text-slate-300 text-sm py-1">📁 components</div>
                <div className="ml-4 space-y-1">
                  <div className="text-blue-400 text-sm py-1 flex items-center gap-2">
                    <FileCode className="w-3 h-3" />
                    <span>Header.tsx</span>
                  </div>
                  <div className="text-blue-400 text-sm py-1 flex items-center gap-2">
                    <FileCode className="w-3 h-3" />
                    <span>Sidebar.tsx</span>
                  </div>
                </div>
                <div className="text-slate-300 text-sm py-1">📁 utils</div>
                <div className="text-blue-400 text-sm py-1 bg-slate-700 px-2 -mx-2 rounded flex items-center gap-2">
                  <FileCode className="w-3 h-3" />
                  <span>api.ts</span>
                  <span className="ml-auto w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                </div>
              </div>
              <div className="text-slate-300 text-sm py-1">📄 package.json</div>
              <div className="text-slate-300 text-sm py-1">📄 tsconfig.json</div>
            </div>
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar */}
          <div className="bg-slate-800 border-b border-slate-700 flex items-center gap-1 px-2">
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-900 border-b-2 border-blue-500 text-slate-200 text-sm">
              <FileCode className="w-4 h-4" />
              <span>api.ts</span>
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 text-slate-400 text-sm hover:bg-slate-700 cursor-pointer">
              <FileCode className="w-4 h-4" />
              <span>Header.tsx</span>
            </div>
          </div>

          {/* Code Area */}
          <div className="flex-1 p-4 overflow-auto font-mono text-sm bg-slate-900">
            <div className="space-y-0">
              <div className="flex">
                <span className="w-12 text-slate-500 select-none text-right pr-4">1</span>
                <span className="text-purple-400">import</span>
                <span className="text-slate-300"> {"{"} useState {"}"} </span>
                <span className="text-purple-400">from</span>
                <span className="text-green-400"> 'react'</span>
                <span className="text-slate-300">;</span>
              </div>
              <div className="flex">
                <span className="w-12 text-slate-500 select-none text-right pr-4">2</span>
                <span className="text-purple-400">import</span>
                <span className="text-slate-300"> {"{"} apiClient {"}"} </span>
                <span className="text-purple-400">from</span>
                <span className="text-green-400"> './client'</span>
                <span className="text-slate-300">;</span>
              </div>
              <div className="flex">
                <span className="w-12 text-slate-500 select-none text-right pr-4">3</span>
              </div>
              <div className="flex">
                <span className="w-12 text-slate-500 select-none text-right pr-4">4</span>
                <span className="text-slate-500">// AI-powered API integration</span>
              </div>
              <div className="flex">
                <span className="w-12 text-slate-500 select-none text-right pr-4">5</span>
                <span className="text-purple-400">export</span>
                <span className="text-purple-400"> async</span>
                <span className="text-purple-400"> function</span>
                <span className="text-blue-400"> fetchUserData</span>
                <span className="text-slate-300">(</span>
                <span className="text-orange-400">userId</span>
                <span className="text-slate-300">: </span>
                <span className="text-blue-300">string</span>
                <span className="text-slate-300">) {"{"}</span>
              </div>
              <div className="flex bg-slate-800">
                <span className="w-12 text-slate-500 select-none text-right pr-4">6</span>
                <span className="text-slate-300">  </span>
                <span className="text-purple-400">try</span>
                <span className="text-slate-300"> {"{"}</span>
              </div>
              <div className="flex">
                <span className="w-12 text-slate-500 select-none text-right pr-4">7</span>
                <span className="text-slate-300">    </span>
                <span className="text-purple-400">const</span>
                <span className="text-slate-300"> response = </span>
                <span className="text-purple-400">await</span>
                <span className="text-slate-300"> apiClient.</span>
                <span className="text-blue-400">get</span>
                <span className="text-slate-300">(</span>
                <span className="text-green-400">`/users/${"{"}{userId}{"}"}`</span>
                <span className="text-slate-300">);</span>
              </div>
              <div className="flex">
                <span className="w-12 text-slate-500 select-none text-right pr-4">8</span>
                <span className="text-slate-300">    </span>
                <span className="text-purple-400">return</span>
                <span className="text-slate-300"> response.data;</span>
              </div>
              <div className="flex">
                <span className="w-12 text-slate-500 select-none text-right pr-4">9</span>
                <span className="text-slate-300">  {"}"} </span>
                <span className="text-purple-400">catch</span>
                <span className="text-slate-300"> (error) {"{"}</span>
              </div>
              <div className="flex">
                <span className="w-12 text-slate-500 select-none text-right pr-4">10</span>
                <span className="text-slate-300">    console.</span>
                <span className="text-blue-400">error</span>
                <span className="text-slate-300">(</span>
                <span className="text-green-400">'Error fetching user:'</span>
                <span className="text-slate-300">, error);</span>
              </div>
              <div className="flex">
                <span className="w-12 text-slate-500 select-none text-right pr-4">11</span>
                <span className="text-slate-300">    </span>
                <span className="text-purple-400">throw</span>
                <span className="text-slate-300"> error;</span>
              </div>
              <div className="flex">
                <span className="w-12 text-slate-500 select-none text-right pr-4">12</span>
                <span className="text-slate-300">  {"}"}</span>
              </div>
              <div className="flex">
                <span className="w-12 text-slate-500 select-none text-right pr-4">13</span>
                <span className="text-slate-300">{"}"}</span>
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="h-48 bg-slate-950 border-t border-slate-700">
            <div className="flex items-center gap-2 bg-slate-900 border-b border-slate-700 px-4 py-2">
              <Terminal className="w-4 h-4 text-slate-400" />
              <span className="text-slate-400 text-sm">Terminal</span>
            </div>
            <div className="p-4 font-mono text-sm text-slate-300 space-y-1">
              <div>$ npm run dev</div>
              <div className="text-green-400">✓ Server running on http://localhost:3000</div>
              <div className="text-blue-400">ℹ Compiling...</div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓ Compiled successfully</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <span className="animate-pulse">▮</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Assistant Panel */}
        <div className="w-80 bg-slate-800 border-l border-slate-700 flex flex-col">
          <div className="p-4 border-b border-slate-700">
            <h3 className="text-slate-200 mb-2">AI Code Assistant</h3>
            <div className="text-slate-400 text-sm">Active in api.ts</div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Code Suggestions */}
            <div className="bg-slate-900 rounded-lg p-3 border border-slate-700">
              <div className="flex items-start gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-200 text-sm">Suggestion</div>
                  <div className="text-slate-400 text-xs mt-1">Add error handling for network failures</div>
                </div>
              </div>
              <button className="text-blue-400 text-xs hover:text-blue-300">Apply fix</button>
            </div>

            <div className="bg-slate-900 rounded-lg p-3 border border-slate-700">
              <div className="flex items-start gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-200 text-sm">Performance</div>
                  <div className="text-slate-400 text-xs mt-1">Consider caching this API call</div>
                </div>
              </div>
              <button className="text-blue-400 text-xs hover:text-blue-300">View details</button>
            </div>

            {/* Related Files */}
            <div className="bg-slate-900 rounded-lg p-3 border border-slate-700">
              <div className="text-slate-200 text-sm mb-2">Related Files</div>
              <div className="space-y-1">
                <div className="text-blue-400 text-xs hover:underline cursor-pointer">client.ts</div>
                <div className="text-blue-400 text-xs hover:underline cursor-pointer">types/user.ts</div>
              </div>
            </div>

            {/* Documentation */}
            <div className="bg-slate-900 rounded-lg p-3 border border-slate-700">
              <div className="text-slate-200 text-sm mb-2">Quick Docs</div>
              <div className="text-slate-400 text-xs leading-relaxed">
                <strong className="text-slate-300">apiClient.get()</strong>
                <br />
                Makes a GET request to the specified endpoint. Returns a Promise.
              </div>
            </div>
          </div>

          {/* AI Chat Input */}
          <div className="p-4 border-t border-slate-700">
            <input
              type="text"
              placeholder="Ask AI about this code..."
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded text-slate-300 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
