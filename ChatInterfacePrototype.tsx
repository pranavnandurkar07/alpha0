import { Send, Paperclip, Code, FileText, Image, Sparkles, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';

export function ChatInterfacePrototype() {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="border-b border-slate-200 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-slate-900">AI Assistant</h3>
            <div className="text-slate-600 text-sm">Code, Research & Automation</div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* User Message */}
        <div className="flex gap-3 justify-end">
          <div className="max-w-2xl">
            <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3">
              <p>Can you help me analyze the protein folding data from my latest experiment and suggest next steps?</p>
            </div>
            <div className="text-slate-500 text-xs mt-1 text-right">2:34 PM</div>
          </div>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
            JD
          </div>
        </div>

        {/* AI Response */}
        <div className="flex gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="max-w-2xl flex-1">
            <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-3">
              <p className="text-slate-900 mb-3">
                I've analyzed your protein folding experiment data from <span className="text-blue-600 cursor-pointer hover:underline">Experiment #147</span>. Here's what I found:
              </p>
              
              <div className="bg-white rounded-lg p-3 mb-3 border border-slate-200">
                <div className="text-slate-900 mb-2">📊 Key Findings:</div>
                <ul className="list-disc ml-6 text-slate-700 text-sm space-y-1">
                  <li>18.3% average pLDDT decrease in glycosylated regions (statistically significant, p=0.0023)</li>
                  <li>Strongest effect observed in heavily modified proteins (P5-P7)</li>
                  <li>Consistent pattern across all 50 protein samples</li>
                </ul>
              </div>

              <p className="text-slate-900 mb-3">
                Based on recent literature and your results, I recommend:
              </p>

              <div className="space-y-2 mb-3">
                <div className="flex gap-2 items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-600 text-xs flex-shrink-0">
                    1
                  </div>
                  <div className="text-slate-700 text-sm">
                    Expand your dataset to include other post-translational modifications (phosphorylation, acetylation)
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-600 text-xs flex-shrink-0">
                    2
                  </div>
                  <div className="text-slate-700 text-sm">
                    Develop a machine learning correction factor for modified regions
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-600 text-xs flex-shrink-0">
                    3
                  </div>
                  <div className="text-slate-700 text-sm">
                    Collaborate with the structural biology team on experimental validation
                  </div>
                </div>
              </div>

              <p className="text-slate-700 text-sm">
                I've also found 12 related papers published this year. Would you like me to create a literature review summary?
              </p>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <button className="p-1 hover:bg-slate-100 rounded text-slate-600">
                <Copy className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-slate-100 rounded text-slate-600">
                <ThumbsUp className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-slate-100 rounded text-slate-600">
                <ThumbsDown className="w-4 h-4" />
              </button>
              <div className="text-slate-500 text-xs ml-2">2:35 PM</div>
            </div>
          </div>
        </div>

        {/* User Message with Attachment */}
        <div className="flex gap-3 justify-end">
          <div className="max-w-2xl">
            <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3">
              <p className="mb-2">Yes, please create a literature review. Also, can you help me write Python code to automate the RMSD calculations?</p>
              <div className="flex items-center gap-2 mt-2 p-2 bg-blue-700 rounded-lg">
                <FileText className="w-4 h-4" />
                <span className="text-sm">plddt_comparison.py</span>
              </div>
            </div>
            <div className="text-slate-500 text-xs mt-1 text-right">2:36 PM</div>
          </div>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
            JD
          </div>
        </div>

        {/* AI Code Response */}
        <div className="flex gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="max-w-2xl flex-1">
            <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-3">
              <p className="text-slate-900 mb-3">
                I'll help you with both! First, here's a Python function to automate RMSD calculations:
              </p>

              {/* Code Block */}
              <div className="bg-slate-900 rounded-lg overflow-hidden mb-3">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <Code className="w-4 h-4" />
                    <span>Python</span>
                  </div>
                  <button className="text-slate-400 hover:text-white text-sm flex items-center gap-1">
                    <Copy className="w-4 h-4" />
                    Copy
                  </button>
                </div>
                <div className="p-4 font-mono text-sm text-slate-300 overflow-x-auto">
                  <div><span className="text-purple-400">import</span> numpy <span className="text-purple-400">as</span> np</div>
                  <div><span className="text-purple-400">from</span> Bio.PDB <span className="text-purple-400">import</span> PDBParser, Superimposer</div>
                  <div className="mt-2"></div>
                  <div><span className="text-purple-400">def</span> <span className="text-blue-400">calculate_rmsd</span>(structure1_path, structure2_path):</div>
                  <div className="ml-4"><span className="text-slate-500"># Parse PDB structures</span></div>
                  <div className="ml-4">parser = PDBParser()</div>
                  <div className="ml-4">struct1 = parser.get_structure(<span className="text-green-400">'s1'</span>, structure1_path)</div>
                  <div className="ml-4">struct2 = parser.get_structure(<span className="text-green-400">'s2'</span>, structure2_path)</div>
                  <div className="ml-4 mt-2"></div>
                  <div className="ml-4"><span className="text-slate-500"># Get alpha carbons</span></div>
                  <div className="ml-4">atoms1 = [atom <span className="text-purple-400">for</span> atom <span className="text-purple-400">in</span> struct1.get_atoms() <span className="text-purple-400">if</span> atom.name == <span className="text-green-400">'CA'</span>]</div>
                  <div className="ml-4">atoms2 = [atom <span className="text-purple-400">for</span> atom <span className="text-purple-400">in</span> struct2.get_atoms() <span className="text-purple-400">if</span> atom.name == <span className="text-green-400">'CA'</span>]</div>
                  <div className="ml-4 mt-2"></div>
                  <div className="ml-4"><span className="text-slate-500"># Calculate RMSD</span></div>
                  <div className="ml-4">super_imposer = Superimposer()</div>
                  <div className="ml-4">super_imposer.set_atoms(atoms1, atoms2)</div>
                  <div className="ml-4"><span className="text-purple-400">return</span> super_imposer.rms</div>
                </div>
              </div>

              <p className="text-slate-700 text-sm mb-2">
                This function uses BioPython to calculate RMSD between two protein structures. It automatically aligns the structures and returns the root-mean-square deviation of alpha carbons.
              </p>

              <p className="text-slate-700 text-sm">
                I'm also working on the literature review - I'll have that ready in about 2 minutes.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm flex items-center gap-1">
                <Code className="w-4 h-4" />
                Insert into editor
              </button>
              <button className="p-1 hover:bg-slate-100 rounded text-slate-600">
                <Copy className="w-4 h-4" />
              </button>
              <div className="text-slate-500 text-xs ml-2">2:37 PM</div>
            </div>
          </div>
        </div>

        {/* Typing Indicator */}
        <div className="flex gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-3">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-slate-200 p-4 bg-white">
        <div className="flex items-end gap-2">
          <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600">
            <Paperclip className="w-5 h-5" />
          </button>
          <div className="flex-1 bg-slate-100 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
            <textarea
              placeholder="Ask anything... (Code help, research analysis, file search, automation)"
              className="w-full bg-transparent resize-none focus:outline-none text-slate-900"
              rows={1}
            />
          </div>
          <button className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white">
            <Send className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Code className="w-3 h-3" />
            <span>Code</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <FileText className="w-3 h-3" />
            <span>Research</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Image className="w-3 h-3" />
            <span>Generate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
