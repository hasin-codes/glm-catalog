# Standalone Agent Skills

**500 production-ready Agent Skills** organized into 20 categories.

## Categories

| Category | Skills | Description |
|----------|--------|-------------|
| [devops-basics](./devops-basics/) | 25 | CI/CD, containers, infrastructure basics |
| [devops-advanced](./devops-advanced/) | 25 | GitOps, service mesh, observability |
| [security-fundamentals](./security-fundamentals/) | 25 | Auth, encryption, vulnerability scanning |
| [security-advanced](./security-advanced/) | 25 | Zero-trust, threat modeling, DevSecOps |
| [frontend-dev](./frontend-dev/) | 25 | React, Vue, performance, accessibility |
| [backend-dev](./backend-dev/) | 25 | API design, databases, microservices |
| [ml-training](./ml-training/) | 25 | Data preprocessing, model training |
| [ml-deployment](./ml-deployment/) | 25 | MLOps, model serving, inference |
| [test-automation](./test-automation/) | 25 | Unit, integration, e2e testing |
| [performance-testing](./performance-testing/) | 25 | Load testing, benchmarking, profiling |
| [data-pipelines](./data-pipelines/) | 25 | ETL, streaming, orchestration |
| [data-analytics](./data-analytics/) | 25 | SQL, BI, visualization |
| [aws-skills](./aws-skills/) | 25 | Lambda, S3, EC2, managed services |
| [gcp-skills](./gcp-skills/) | 25 | BigQuery, Vertex AI, Cloud Run |
| [api-development](./api-development/) | 25 | REST, GraphQL, OpenAPI |
| [api-integration](./api-integration/) | 25 | Webhooks, OAuth, SDK development |
| [technical-docs](./technical-docs/) | 25 | API docs, READMEs, Docusaurus |
| [visual-content](./visual-content/) | 25 | Diagrams, screenshots, video |
| [business-automation](./business-automation/) | 25 | Workflow automation, reporting |
| [enterprise-workflows](./enterprise-workflows/) | 25 | Governance, compliance, collaboration |

## How Skills Work

Agent Skills auto-activate when Claude Code detects relevant context. Simply describe what you need - no commands required.

```
You: "Set up a CI/CD pipeline for my Node.js app"
Claude: *Activates relevant DevOps skills automatically*
```

## Installation

Skills are included with the Claude Code Plugins marketplace:

```bash
/plugin marketplace add jeremylongshore/claude-code-plugins
```

## 2025 Schema Compliance

All 500 skills follow the 2025 Agent Skills schema:

```yaml
---
name: skill-name
description: |
  What this skill does and trigger phrases.
allowed-tools: Read, Write, Edit, Bash
version: 1.0.0
license: MIT
author: Jeremy Longshore <jeremy@intentsolutions.io>
---
```

## Related

- [239 Embedded Skills](../plugins/) - Skills bundled within plugins
- [Learning Lab](../workspace/lab/) - Build your own agent workflows
- [Tutorials](../tutorials/) - Interactive Jupyter notebooks

## License

MIT License - All skills are open source.
