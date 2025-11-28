import { FlaskConical, FileText, BarChart3, Image, Link, Plus, Calendar, Tag } from 'lucide-react';

export function ResearchLabPrototype() {
  return (
    <div className="h-full flex">
      {/* Sidebar - Notebook Navigation */}
      <div className="w-64 border-r border-slate-200 bg-slate-50 overflow-y-auto">
        <div className="p-4">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-4">
            <Plus className="w-4 h-4" />
            <span>New Entry</span>
          </button>

          <div className="space-y-1">
            <div className="text-slate-500 text-xs px-2 py-2">EXPERIMENTS</div>
            <div className="bg-blue-100 border-l-2 border-blue-600 px-3 py-2 text-slate-900 cursor-pointer">
              Protein Folding Analysis
            </div>
            <div className="hover:bg-slate-100 px-3 py-2 text-slate-700 cursor-pointer">
              Neural Network Training
            </div>
            <div className="hover:bg-slate-100 px-3 py-2 text-slate-700 cursor-pointer">
              Dataset Validation
            </div>

            <div className="text-slate-500 text-xs px-2 py-2 mt-4">LITERATURE</div>
            <div className="hover:bg-slate-100 px-3 py-2 text-slate-700 cursor-pointer">
              Recent Papers (24)
            </div>
            <div className="hover:bg-slate-100 px-3 py-2 text-slate-700 cursor-pointer">
              Key References (15)
            </div>

            <div className="text-slate-500 text-xs px-2 py-2 mt-4">DATA</div>
            <div className="hover:bg-slate-100 px-3 py-2 text-slate-700 cursor-pointer">
              Raw Datasets
            </div>
            <div className="hover:bg-slate-100 px-3 py-2 text-slate-700 cursor-pointer">
              Processed Results
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Lab Notebook */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-slate-200 px-6 py-4 bg-white">
          <div className="flex items-center gap-2 text-slate-600 text-sm mb-2">
            <Calendar className="w-4 h-4" />
            <span>November 25, 2025 • Experiment #147</span>
          </div>
          <h2 className="text-slate-900 mb-2">Protein Folding Analysis - AlphaFold Validation</h2>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs flex items-center gap-1">
              <Tag className="w-3 h-3" />
              Biochemistry
            </span>
            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs flex items-center gap-1">
              <Tag className="w-3 h-3" />
              ML/AI
            </span>
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs flex items-center gap-1">
              <Tag className="w-3 h-3" />
              In Progress
            </span>
          </div>
        </div>

        {/* Notebook Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-6 space-y-6">
            {/* Hypothesis Section */}
            <section className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <FlaskConical className="w-5 h-5 text-blue-600" />
                <h3 className="text-slate-900">Hypothesis</h3>
              </div>
              <p className="text-slate-700">
                AlphaFold's predictions for protein structures with significant post-translational modifications 
                will show decreased accuracy compared to unmodified proteins. We hypothesize a 15-20% reduction 
                in pLDDT scores for heavily glycosylated regions.
              </p>
            </section>

            {/* Methods Section */}
            <section className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-purple-600" />
                <h3 className="text-slate-900">Methods</h3>
              </div>
              <div className="space-y-3 text-slate-700">
                <div>
                  <strong>1. Sample Preparation</strong>
                  <ul className="list-disc ml-6 mt-1 text-slate-600">
                    <li>Selected 50 proteins from PDB with known glycosylation sites</li>
                    <li>Created matched unmodified sequences as controls</li>
                    <li>Validated experimental structures available for all samples</li>
                  </ul>
                </div>
                <div>
                  <strong>2. AlphaFold Analysis</strong>
                  <ul className="list-disc ml-6 mt-1 text-slate-600">
                    <li>Ran AlphaFold v2.3 on all sequences</li>
                    <li>Extracted pLDDT scores for modified and unmodified regions</li>
                    <li>Compared predicted vs. experimental structures (RMSD)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Visualization */}
            <section className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-green-600" />
                <h3 className="text-slate-900">Results</h3>
              </div>
              
              {/* Mock Chart */}
              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <div className="h-64 flex items-end justify-around gap-2">
                  {[85, 82, 78, 65, 62, 58, 72, 68].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className={`w-full rounded-t ${i < 3 ? 'bg-blue-500' : 'bg-purple-500'}`}
                        style={{ height: `${height}%` }}
                      ></div>
                      <div className="text-xs text-slate-600">P{i + 1}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span className="text-slate-600">Unmodified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span className="text-slate-600">Glycosylated</span>
                  </div>
                </div>
              </div>

              <div className="text-slate-700">
                <p className="mb-3">
                  Initial results show a mean pLDDT decrease of 18.3% (±3.2%) in glycosylated regions 
                  compared to unmodified controls, supporting our hypothesis.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="text-blue-900 mb-2">📊 Statistical Significance</div>
                  <div className="text-blue-800 text-sm">
                    p-value: 0.0023 (t-test)<br />
                    n = 50, confidence interval: 95%
                  </div>
                </div>
              </div>
            </section>

            {/* Linked Resources */}
            <section className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Link className="w-5 h-5 text-orange-600" />
                <h3 className="text-slate-900">Linked Resources</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 cursor-pointer">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <div className="flex-1">
                    <div className="text-slate-900 text-sm">Raw Dataset - Protein Sequences.fasta</div>
                    <div className="text-slate-500 text-xs">2.4 MB • Updated 2 hours ago</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 cursor-pointer">
                  <BarChart3 className="w-4 h-4 text-green-600" />
                  <div className="flex-1">
                    <div className="text-slate-900 text-sm">Analysis Script - plddt_comparison.py</div>
                    <div className="text-slate-500 text-xs">15 KB • Updated 1 hour ago</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 cursor-pointer">
                  <Image className="w-4 h-4 text-purple-600" />
                  <div className="flex-1">
                    <div className="text-slate-900 text-sm">Structure Comparison - Figure_3.png</div>
                    <div className="text-slate-500 text-xs">856 KB • Updated 30 min ago</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusions */}
            <section className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="text-slate-900 mb-4">Conclusions & Next Steps</h3>
              <div className="space-y-3 text-slate-700">
                <p>
                  Our findings confirm that AlphaFold's accuracy is reduced in regions with post-translational 
                  modifications, particularly glycosylation. This has important implications for drug design 
                  and therapeutic protein engineering.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="text-yellow-900 mb-2">⚡ Next Steps</div>
                  <ul className="list-disc ml-6 text-yellow-800 text-sm">
                    <li>Expand dataset to include phosphorylation and acetylation</li>
                    <li>Test with AlphaFold 3 when available</li>
                    <li>Develop correction algorithm for modified regions</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Right Sidebar - AI Research Assistant */}
      <div className="w-80 border-l border-slate-200 bg-slate-50 flex flex-col">
        <div className="p-4 border-b border-slate-200 bg-white">
          <h3 className="text-slate-900">Research Assistant</h3>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* AI Insights */}
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="text-slate-900 mb-2">💡 AI Insights</div>
            <p className="text-slate-600 text-sm mb-3">
              Found 12 related papers published in the last 6 months about AlphaFold accuracy
            </p>
            <button className="text-blue-600 text-sm hover:text-blue-700">View papers</button>
          </div>

          {/* Citation Suggestions */}
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="text-slate-900 mb-3">📚 Suggested Citations</div>
            <div className="space-y-2 text-sm">
              <div className="pb-2 border-b border-slate-100">
                <div className="text-slate-900">Jumper et al. (2021)</div>
                <div className="text-slate-600 text-xs">Highly accurate protein structure prediction...</div>
              </div>
              <div className="pb-2 border-b border-slate-100">
                <div className="text-slate-900">Varadi et al. (2024)</div>
                <div className="text-slate-600 text-xs">AlphaFold protein structure database...</div>
              </div>
            </div>
          </div>

          {/* Collaboration */}
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="text-slate-900 mb-3">👥 Collaborators</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                  SC
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-slate-900 text-sm">Sarah Chen</div>
                  <div className="text-slate-500 text-xs">Viewing</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                  MR
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-slate-900 text-sm">Mike Rodriguez</div>
                  <div className="text-slate-500 text-xs">Offline</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="text-slate-900 mb-3">⚡ Quick Actions</div>
            <div className="space-y-2">
              <button className="w-full text-left text-sm text-slate-700 hover:text-blue-600 py-1">
                Export to LaTeX
              </button>
              <button className="w-full text-left text-sm text-slate-700 hover:text-blue-600 py-1">
                Generate summary
              </button>
              <button className="w-full text-left text-sm text-slate-700 hover:text-blue-600 py-1">
                Share with team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
