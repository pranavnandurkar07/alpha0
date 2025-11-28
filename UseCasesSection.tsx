import { Code, FlaskConical, Palette, GraduationCap, Users, Building2 } from 'lucide-react';

export function UseCasesSection() {
  const useCases = [
    {
      icon: Code,
      color: 'blue',
      title: 'Software Development Teams',
      description: 'End-to-end development workflow in one platform',
      scenarios: [
        {
          title: 'Startup Building MVP',
          challenge: 'Small team needs to move fast, managing code, designs, docs, and customer feedback across multiple tools',
          solution: 'Alpha0 unifies code repo, design files, documentation, and customer data. AI helps generate docs from code, link designs to features, and track everything in one place.',
          benefits: ['50% faster onboarding', 'Eliminate tool switching', 'Auto-generated documentation', 'Unified project view']
        },
        {
          title: 'Open Source Project',
          challenge: 'Distributed contributors need clear documentation, easy collaboration, and organized codebase',
          solution: 'Public workspace with AI-powered contributor guide, automatic code documentation, and integrated discussions linked to code.',
          benefits: ['Better contributor experience', 'AI-generated contribution guides', 'Linked discussions', 'Smart issue tracking']
        }
      ]
    },
    {
      icon: FlaskConical,
      color: 'purple',
      title: 'Research & Academia',
      description: 'Accelerate scientific discovery and collaboration',
      scenarios: [
        {
          title: 'Biotech Research Lab',
          challenge: 'Managing experiments, data, literature, and collaboration across multiple researchers and institutions',
          solution: 'Digital lab notebooks with auto-linked literature, data analysis tools, and AI-powered insights. Seamless collaboration with external partners.',
          benefits: ['Reproducible research', 'Auto-citation management', 'Data provenance tracking', 'AI literature review']
        },
        {
          title: 'PhD Student',
          challenge: 'Organizing years of research, papers, data, and drafts while collaborating with advisors',
          solution: 'Personal research workspace that connects papers, experiments, data, and thesis drafts. AI helps find connections and generate summaries.',
          benefits: ['Never lose context', 'AI-powered insights', 'Easy advisor collaboration', 'Thesis organization']
        }
      ]
    },
    {
      icon: Palette,
      color: 'pink',
      title: 'Design & Creative Teams',
      description: 'Unified creative workflow with intelligent asset management',
      scenarios: [
        {
          title: 'Design Agency',
          challenge: 'Multiple client projects with countless design iterations, feedback, and asset versions',
          solution: 'Project workspaces with version-controlled assets, client feedback integration, and AI-powered asset search and organization.',
          benefits: ['No more lost versions', 'Organized feedback', 'Smart asset search', 'Client collaboration']
        },
        {
          title: 'Product Design Team',
          challenge: 'Keeping design system, product specs, user research, and prototypes in sync',
          solution: 'Design workspace linked to code, specs, and research. AI ensures design system consistency and finds related user feedback.',
          benefits: ['Design-dev alignment', 'Research-backed decisions', 'System consistency', 'Context preservation']
        }
      ]
    },
    {
      icon: GraduationCap,
      color: 'green',
      title: 'Education & Learning',
      description: 'Enhanced learning experiences with AI assistance',
      scenarios: [
        {
          title: 'University Course',
          challenge: 'Professor managing lectures, assignments, student code, and collaborative projects',
          solution: 'Course workspace where students submit work, collaborate on projects, and get AI tutoring. Professor sees all work in context.',
          benefits: ['Organized submissions', 'AI tutoring 24/7', 'Plagiarism detection', 'Collaborative learning']
        },
        {
          title: 'Coding Bootcamp',
          challenge: 'Teaching students to code while managing curriculum, projects, and mentorship',
          solution: 'Learning paths with integrated code environment, project templates, and AI code review. Students learn by doing.',
          benefits: ['Hands-on learning', 'Instant AI feedback', 'Real-world projects', 'Progress tracking']
        }
      ]
    },
    {
      icon: Users,
      color: 'orange',
      title: 'Remote & Hybrid Teams',
      description: 'Seamless collaboration across time zones and locations',
      scenarios: [
        {
          title: 'Global Marketing Team',
          challenge: 'Coordinating campaigns, content, assets, and analytics across continents',
          solution: 'Shared workspace with content library, campaign planning, and analytics. AI helps maintain brand consistency and find relevant assets.',
          benefits: ['Timezone flexibility', 'Async collaboration', 'Brand consistency', 'Centralized assets']
        },
        {
          title: 'Consulting Firm',
          challenge: 'Managing client projects, deliverables, and knowledge sharing across teams',
          solution: 'Client workspaces with project templates, deliverable tracking, and firm-wide knowledge base. AI suggests relevant past work.',
          benefits: ['Reuse best practices', 'Knowledge retention', 'Client transparency', 'Quality consistency']
        }
      ]
    },
    {
      icon: Building2,
      color: 'indigo',
      title: 'Enterprise Organizations',
      description: 'Scalable collaboration with security and compliance',
      scenarios: [
        {
          title: 'Fortune 500 Company',
          challenge: 'Thousands of employees, strict compliance, complex permissions, legacy tool integration',
          solution: 'Enterprise deployment with SSO, granular permissions, compliance tools, and integrations with existing systems.',
          benefits: ['Enterprise security', 'Compliance ready', 'Legacy integration', 'Scalable architecture']
        },
        {
          title: 'Financial Services',
          challenge: 'Highly regulated environment requiring audit trails, data governance, and secure collaboration',
          solution: 'Compliant workspace with complete audit logs, DLP, and encryption. AI respects data boundaries and regulatory requirements.',
          benefits: ['Full audit trails', 'Data governance', 'Regulatory compliance', 'Secure AI']
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h2 className="text-slate-900 mb-2">Use Cases & Success Stories</h2>
        <p className="text-slate-600">
          Alpha0 serves diverse industries and use cases, from solo creators to enterprise teams.
        </p>
      </div>

      {/* Use Case Categories */}
      {useCases.map((useCase, index) => {
        const Icon = useCase.icon;
        return (
          <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className={`bg-${useCase.color}-50 border-b border-${useCase.color}-100 p-6`}>
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 bg-${useCase.color}-100 rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-7 h-7 text-${useCase.color}-600`} />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-1">{useCase.title}</h3>
                  <p className="text-slate-600">{useCase.description}</p>
                </div>
              </div>
            </div>

            {/* Scenarios */}
            <div className="p-6 space-y-6">
              {useCase.scenarios.map((scenario, scenarioIndex) => (
                <div key={scenarioIndex} className={scenarioIndex > 0 ? 'pt-6 border-t border-slate-200' : ''}>
                  <h4 className="text-slate-900 mb-3">{scenario.title}</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-slate-600 mb-2">Challenge</div>
                      <p className="text-slate-700 text-sm bg-red-50 border border-red-100 rounded-lg p-3">
                        {scenario.challenge}
                      </p>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 mb-2">Alpha0 Solution</div>
                      <p className="text-slate-700 text-sm bg-green-50 border border-green-100 rounded-lg p-3">
                        {scenario.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-sm text-slate-600 mb-2">Key Benefits</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {scenario.benefits.map((benefit, benefitIndex) => (
                        <div 
                          key={benefitIndex} 
                          className={`px-3 py-2 bg-${useCase.color}-50 border border-${useCase.color}-100 rounded-lg text-${useCase.color}-700 text-sm text-center`}
                        >
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Success Metrics */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h3 className="text-white mb-6 text-center">Expected Impact Across Use Cases</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">10x</div>
            <div className="text-blue-100">Faster File Discovery</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">50%</div>
            <div className="text-blue-100">Less Tool Switching</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">3x</div>
            <div className="text-blue-100">Collaboration Speed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">100%</div>
            <div className="text-blue-100">Context Retention</div>
          </div>
        </div>
      </div>

      {/* Industry Adaptability */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="text-slate-900 mb-4">Cross-Industry Adaptability</h3>
        <p className="text-slate-700 mb-4">
          Alpha0's flexible architecture and AI-powered features make it valuable across diverse industries:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { industry: 'Healthcare', example: 'Research labs, clinical trials, medical documentation' },
            { industry: 'Finance', example: 'Compliance documentation, research reports, model development' },
            { industry: 'Legal', example: 'Case management, document review, legal research' },
            { industry: 'Manufacturing', example: 'Product development, quality documentation, supply chain' },
            { industry: 'Media', example: 'Content production, asset management, collaborative editing' },
            { industry: 'Government', example: 'Policy development, research, inter-agency collaboration' },
          ].map((item, i) => (
            <div key={i} className="border border-slate-200 rounded-lg p-4">
              <div className="text-slate-900 mb-1">{item.industry}</div>
              <div className="text-slate-600 text-sm">{item.example}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
