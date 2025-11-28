import { Database, Server, Layers, Cloud, Lock, Zap } from 'lucide-react';

export function ArchitectureSection() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h2 className="text-slate-900 mb-4">System Architecture Overview</h2>
        <p className="text-slate-600 mb-6">
          Alpha0 is built on a modern, modular microservices architecture designed for scalability, security, and extensibility.
          The platform consists of multiple independent services that communicate through well-defined APIs.
        </p>
      </div>

      {/* Architecture Diagram */}
      <div className="bg-white rounded-xl p-8 border border-slate-200">
        <h3 className="text-slate-900 mb-6">Core Architecture Layers</h3>
        
        <div className="space-y-6">
          {/* Presentation Layer */}
          <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-6 h-6 text-blue-600" />
              <h4 className="text-slate-900">Presentation Layer</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="text-slate-900 mb-1">Web Application</div>
                <div className="text-slate-600 text-sm">React, TypeScript, Tailwind CSS</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="text-slate-900 mb-1">Mobile Apps</div>
                <div className="text-slate-600 text-sm">React Native, iOS, Android</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="text-slate-900 mb-1">Desktop Apps</div>
                <div className="text-slate-600 text-sm">Electron, Native Integration</div>
              </div>
            </div>
          </div>

          {/* API Gateway */}
          <div className="flex justify-center">
            <div className="w-1 h-8 bg-slate-300"></div>
          </div>

          <div className="border-2 border-purple-200 rounded-lg p-6 bg-purple-50">
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-6 h-6 text-purple-600" />
              <h4 className="text-slate-900">API Gateway & Authentication</h4>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <div className="text-slate-900 mb-1">Load Balancer</div>
                <div className="text-slate-600 text-sm">NGINX, Auto-scaling</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <div className="text-slate-900 mb-1">Auth Service</div>
                <div className="text-slate-600 text-sm">OAuth2, SSO, MFA</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <div className="text-slate-900 mb-1">Rate Limiting</div>
                <div className="text-slate-600 text-sm">Redis, Token Bucket</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <div className="text-slate-900 mb-1">API Router</div>
                <div className="text-slate-600 text-sm">GraphQL, REST</div>
              </div>
            </div>
          </div>

          {/* Service Layer */}
          <div className="flex justify-center">
            <div className="w-1 h-8 bg-slate-300"></div>
          </div>

          <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-green-600" />
              <h4 className="text-slate-900">Core Services (Microservices)</h4>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="text-slate-900 mb-1">File Service</div>
                <div className="text-slate-600 text-sm">Storage, versioning, sync</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="text-slate-900 mb-1">User Service</div>
                <div className="text-slate-600 text-sm">Profiles, teams, permissions</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="text-slate-900 mb-1">AI Service</div>
                <div className="text-slate-600 text-sm">Search, tagging, suggestions</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="text-slate-900 mb-1">Collaboration Service</div>
                <div className="text-slate-600 text-sm">Real-time editing, presence</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="text-slate-900 mb-1">Code Service</div>
                <div className="text-slate-600 text-sm">Repository, CI/CD integration</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="text-slate-900 mb-1">Research Service</div>
                <div className="text-slate-600 text-sm">Lab notebooks, datasets</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="text-slate-900 mb-1">Chat Service</div>
                <div className="text-slate-600 text-sm">Messaging, AI assistants</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="text-slate-900 mb-1">Integration Service</div>
                <div className="text-slate-600 text-sm">External APIs, webhooks</div>
              </div>
            </div>
          </div>

          {/* Data Layer */}
          <div className="flex justify-center">
            <div className="w-1 h-8 bg-slate-300"></div>
          </div>

          <div className="border-2 border-orange-200 rounded-lg p-6 bg-orange-50">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-orange-600" />
              <h4 className="text-slate-900">Data Layer</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <div className="text-slate-900 mb-1">Primary Database</div>
                <div className="text-slate-600 text-sm">PostgreSQL (metadata, users)</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <div className="text-slate-900 mb-1">Object Storage</div>
                <div className="text-slate-600 text-sm">S3-compatible (files, media)</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <div className="text-slate-900 mb-1">Cache Layer</div>
                <div className="text-slate-600 text-sm">Redis (sessions, real-time)</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <div className="text-slate-900 mb-1">Search Engine</div>
                <div className="text-slate-600 text-sm">Elasticsearch (full-text search)</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <div className="text-slate-900 mb-1">Vector Database</div>
                <div className="text-slate-600 text-sm">Pinecone/Weaviate (AI embeddings)</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <div className="text-slate-900 mb-1">Time-Series DB</div>
                <div className="text-slate-600 text-sm">InfluxDB (analytics, metrics)</div>
              </div>
            </div>
          </div>

          {/* Infrastructure */}
          <div className="flex justify-center">
            <div className="w-1 h-8 bg-slate-300"></div>
          </div>

          <div className="border-2 border-slate-200 rounded-lg p-6 bg-slate-50">
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="w-6 h-6 text-slate-600" />
              <h4 className="text-slate-900">Infrastructure & DevOps</h4>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="text-slate-900 mb-1">Container Orchestration</div>
                <div className="text-slate-600 text-sm">Kubernetes, Docker</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="text-slate-900 mb-1">CI/CD Pipeline</div>
                <div className="text-slate-600 text-sm">GitHub Actions, ArgoCD</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="text-slate-900 mb-1">Monitoring</div>
                <div className="text-slate-600 text-sm">Prometheus, Grafana</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="text-slate-900 mb-1">Logging</div>
                <div className="text-slate-600 text-sm">ELK Stack, CloudWatch</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Architecture Principles */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-red-600" />
            <h3 className="text-slate-900">Security Architecture</h3>
          </div>
          <ul className="space-y-2 text-slate-700">
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>End-to-end encryption</strong> for files at rest and in transit</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Zero-trust security model</strong> with continuous verification</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Granular RBAC</strong> with attribute-based access control</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Audit logging</strong> for all actions and data access</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>DLP (Data Loss Prevention)</strong> and threat detection</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Compliance</strong> ready: SOC 2, GDPR, HIPAA</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-yellow-600" />
            <h3 className="text-slate-900">Scalability & Performance</h3>
          </div>
          <ul className="space-y-2 text-slate-700">
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Horizontal scaling</strong> for all microservices</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>CDN integration</strong> for global content delivery</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Event-driven architecture</strong> with message queues (Kafka)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Database sharding</strong> for multi-tenancy at scale</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Intelligent caching</strong> with cache invalidation strategies</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>WebSocket connections</strong> for real-time collaboration</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="text-slate-900 mb-4">Technology Stack</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h4 className="text-slate-900 mb-3">Frontend</h4>
            <ul className="space-y-1 text-slate-600">
              <li>React 18+</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Vite/Next.js</li>
              <li>React Query</li>
              <li>Zustand/Redux</li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 mb-3">Backend</h4>
            <ul className="space-y-1 text-slate-600">
              <li>Node.js/Go/Rust</li>
              <li>GraphQL/REST</li>
              <li>WebSockets</li>
              <li>gRPC</li>
              <li>OAuth 2.0</li>
              <li>JWT</li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 mb-3">AI/ML</h4>
            <ul className="space-y-1 text-slate-600">
              <li>OpenAI GPT-4</li>
              <li>Anthropic Claude</li>
              <li>LangChain</li>
              <li>TensorFlow</li>
              <li>Hugging Face</li>
              <li>Vector Search</li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 mb-3">Infrastructure</h4>
            <ul className="space-y-1 text-slate-600">
              <li>Kubernetes</li>
              <li>Docker</li>
              <li>AWS/GCP/Azure</li>
              <li>Terraform</li>
              <li>ArgoCD</li>
              <li>Prometheus</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
