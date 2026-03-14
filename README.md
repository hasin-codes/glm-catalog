<div align="center">

<img src="public/logo.svg" alt="GLM Catalog" width="64" height="64" />

# GLM Catalog

**The Definitive Catalog of Skills & Rules for Z.ai's GLM Model**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-v4-black)](https://ui.shadcn.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[Live Demo](https://glm-catalog.vercel.app) · [Report Bug](https://github.com/hasinriyan/glm-catalog/issues) · [Request Feature](https://github.com/hasinriyan/glm-catalog/issues)

</div>

---

## 📖 Table of Contents

- [What is GLM Catalog?](#-what-is-glm-catalog)
- [Why Does This Exist?](#-why-does-this-exist)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Pages & Routes](#-pages--routes)
- [Skills System](#-skills-system)
- [Rules System](#-rules-system)
- [Data Architecture](#-data-architecture)
- [Scripts & Tooling](#-scripts--tooling)
- [Contributing](#-contributing)
- [Credits & Attributions](#-credits--attributions)
- [License](#-license)

---

## 🤔 What is GLM Catalog?

**GLM Catalog** is a curated catalog of **skills** and **rules** that developers use to steer and instruct [Z.ai's GLM model](https://z.ai/) more effectively.

When you use GLM, you can give it **rules** (instruction files that shape how it writes code, follows conventions, and approaches problems) and **skills** (specialized instruction sets that activate for specific tasks like generating Express routes, running security audits, or creating architecture diagrams).

**GLM Catalog is the place to find, browse, and copy these instruction sets** so you can drop them into your workflow and get better results from GLM immediately.

Think of it as a **package manager for GLM instructions** — instead of writing rules from scratch, you browse the catalog, find what you need, copy it, and use it.

> **Initiative by [Hasin Riayan](https://hasin.vercel.app)** — built to make it easier for developers to get the most out of Z.ai's GLM model.

---

## 🎯 Why Does This Exist?

GLM is a powerful model, but its output quality depends heavily on **how you instruct it**. A well-crafted rule file can be the difference between GLM generating generic code and GLM generating production-ready, framework-specific code that follows your team's conventions.

The problem? These instruction sets were scattered — some in personal repos, some in blog posts, some passed around in Discord servers. There was no single place to:

- **Discover** what rules and skills exist
- **Browse** them by category, framework, or task
- **Copy** them directly into your project
- **Understand** what each one does before using it

GLM Catalog solves that. It's a single, searchable, well-organized catalog of every useful instruction set for GLM — maintained and expanded by the community.

---

## ✨ Features

### 🧠 Skills Catalog (200+)
- Browse **200+ skills** across 20+ categories that instruct GLM to handle specific tasks
- Skills are specialized instruction sets — tell GLM exactly how to approach backend development, security auditing, test generation, documentation, and more
- Each skill includes metadata: description, allowed tools, version, license, and author
- Copy any skill with one click and paste it into your GLM configuration
- Categories include:
  - **Backend Development** — Express, FastAPI, Django, NestJS, Go handlers, gRPC services
  - **Security** — Fundamentals (JWT, CSRF, XSS detection) and Advanced (SOC2, PCI-DSS, Zero Trust)
  - **Test Automation** — Jest, Vitest, Pytest, integration testing, mutation testing
  - **Visual Content** — Mermaid diagrams, architecture visualizers, chart generators
  - **Technical Docs** — README generators, API references, architecture decision records
  - **ML Training** — TensorFlow, MLflow, experiment tracking, gradient clipping
  - **Cloud & DevOps** — AWS, GCP, Kubernetes RBAC, cloud security posture
  - **Frontend Development** — React, Vue, Angular, Svelte patterns
  - **API Development** — REST, GraphQL, OpenAPI patterns
  - And many more...

### 📜 Rules Browser
- Browse a curated collection of **rules** that steer GLM's behavior for specific frameworks and languages
- Rules shape how GLM writes code — enforce conventions, follow best practices, and maintain consistency
- Organized by framework/language (React, Python, Rust, Go, TypeScript, etc.)
- Copy any rule to clipboard or share it via direct link
- Originally sourced from and inspired by [cursor.directory](https://github.com/richardsondx/cursor.directory/)

### 🔌 MCP Directory
- Discover **Model Context Protocol (MCP)** servers that extend GLM's capabilities
- MCPs let GLM interact with external tools, databases, and services
- Browse featured MCPs and find the right integration for your workflow

### 🚀 Projects Showcase
- See what others have built using GLM with specific skills and rules
- Get inspiration for your own GLM-powered projects

### ⚡ Generate (Coming Soon)
- Upload your project files (`.rules`, `package.json`, `requirements.txt`)
- Auto-generate a tailored rules file for your specific tech stack
- Get GLM-ready instructions without manual configuration

### 🔍 Search & Filter
- Full-text search across all skills and rules
- Filter by category, tags, and author
- Quickly find the right instruction set for your needs

---

## 🛠 Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | [Next.js](https://nextjs.org/) (App Router) | 16.1.6 |
| **UI Library** | [React](https://react.dev/) | 19.2.3 |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | 5.x |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | 4.x |
| **Components** | [Shadcn UI](https://ui.shadcn.com/) (CLI v4) | 4.0.5 |
| **Icons** | [Lucide React](https://lucide.dev/) | 0.577.0 |
| **3D Graphics** | [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | 0.167.1 / 9.5.0 |
| **Notifications** | [Sonner](https://sonner.emilkowal.dev/) | 2.0.7 |
| **Twitter Embeds** | [react-tweet](https://react-tweet.vercel.app/) | 3.3.0 |
| **Animations** | [tw-animate-css](https://www.npmjs.com/package/tw-animate-css) | 1.4.0 |
| **Bundler** | Turbopack (Next.js 16 default) | — |
| **Fonts** | [Geist](https://vercel.com/font) (Sans + Mono) | — |

---

## 📁 Project Structure

```
glm-catalog/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Navbar, Footer, Toaster)
│   ├── page.tsx                  # Homepage (Hero, Featured, Rules sections)
│   ├── globals.css               # Global styles + Tailwind + Shadcn theme
│   ├── about/page.tsx            # About page with credits
│   ├── contents/page.tsx         # Content / news posts
│   ├── events/page.tsx           # Z.ai events listing
│   ├── generate/page.tsx         # Rules generator (coming soon)
│   ├── mcp/
│   │   ├── page.tsx              # MCP server directory
│   │   └── [slug]/page.tsx       # Individual MCP detail page
│   ├── members/page.tsx          # Team / members
│   ├── projects/
│   │   ├── page.tsx              # Projects listing
│   │   └── [slug]/page.tsx       # Individual project detail page
│   ├── rules/
│   │   ├── page.tsx              # Rules browser with sidebar
│   │   └── [slug]/page.tsx       # Individual rule detail page
│   └── skills/
│       ├── page.tsx              # Skills catalog with sidebar
│       └── [slug]/page.tsx       # Individual skill detail page
│
├── components/                   # React components
│   ├── ui/                       # Shadcn UI primitives (badge, button, card, input, tabs)
│   ├── AboutSection.tsx          # About page content with credits
│   ├── ContentCard.tsx           # Content post card
│   ├── CopyButton.tsx            # Copy-to-clipboard button
│   ├── FeaturedMCPsRow.tsx       # Featured MCPs on homepage
│   ├── FeaturedProjectsRow.tsx   # Featured projects on homepage
│   ├── Footer.tsx                # Global footer (hidden on rules page)
│   ├── GeneratePage.tsx          # Rules generator UI
│   ├── HeroBeams.tsx             # 3D animated hero background (Three.js)
│   ├── HeroSection.tsx           # Homepage hero banner
│   ├── Navbar.tsx                # Sticky navigation bar
│   ├── ProjectCard.tsx           # Project thumbnail card
│   ├── ProjectsList.tsx          # Projects grid layout
│   ├── RuleCard.tsx              # Rule content card with copy/share
│   ├── RulesGrid.tsx             # Rules grid layout
│   ├── RulesSidebar.tsx          # Rules category sidebar
│   ├── SearchBar.tsx             # Search input component
│   ├── ShareButton.tsx           # Share rule via link
│   ├── SkillCard.tsx             # Skill content card with copy/share
│   ├── SkillGrid.tsx             # Skills grid layout
│   ├── SkillShareButton.tsx      # Share skill via link
│   ├── SkillsSidebar.tsx         # Skills category sidebar
│   ├── ZaiIcon.tsx               # Z.ai brand icon
│   ├── ZhipuIcon.tsx             # Zhipu brand icon
│   └── ZreadIcon.tsx             # Zread brand icon
│
├── data/                         # Static data layer
│   ├── index.ts                  # Data barrel exports
│   ├── contents.ts               # Content / news posts
│   ├── events.ts                 # Z.ai events
│   ├── mcps.ts                   # MCP server entries
│   ├── members.ts                # Team members
│   ├── projects.ts               # GLM-powered projects
│   ├── skills.ts                 # Auto-generated skills catalog (10,000+ lines)
│   ├── rules/                    # Rule .md files organized by category
│   └── skills/                   # Skill SKILL.md files organized by category
│       ├── README.md             # Skills index
│       ├── backend-dev/          # Backend development skills
│       ├── security-advanced/    # Advanced security skills
│       ├── security-fundamentals/# Security fundamentals
│       ├── test-automation/      # Test automation skills
│       ├── technical-docs/       # Technical documentation skills
│       ├── visual-content/       # Visual content & diagram skills
│       ├── ml-training/          # ML training skills
│       ├── gcp-skills/           # Google Cloud Platform skills
│       └── ...                   # 20+ categories total
│
├── lib/                          # Utility functions
│   └── utils.ts                  # cn(), isImageUrl(), generateNameAbbr()
│
├── scripts/                      # Build & generation scripts
│   └── generate-skills.ts        # Parses SKILL.md files → data/skills.ts
│
├── public/                       # Static assets
│   ├── logo.svg                  # GLM Catalog logo
│   └── Project Thumbnail.png     # Default project thumbnail
│
├── components.json               # Shadcn UI configuration
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript configuration
└── next.config.ts                # Next.js configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, or **pnpm** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/hasinriyan/glm-catalog.git
cd glm-catalog

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start development server with Turbopack |
| `build` | `npm run build` | Create production build |
| `start` | `npm run start` | Start production server |
| `lint` | `npm run lint` | Run ESLint |

### Regenerating Skills Data

After adding or modifying skill files in `data/skills/`, regenerate the TypeScript data:

```bash
npx tsx scripts/generate-skills.ts
```

This parses all `SKILL.md` files (with YAML frontmatter) and outputs `data/skills.ts` with typed interfaces.

---

## 🗺 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero banner, featured projects/MCPs, top rules sections |
| `/rules` | Rules | Full rules browser with category sidebar and search |
| `/rules/[slug]` | Rule Detail | Individual rule with full content, copy, and share |
| `/skills` | Skills | Full skills catalog with category sidebar and search |
| `/skills/[slug]` | Skill Detail | Individual skill with full content, copy, and share |
| `/mcp` | MCPs | MCP server directory |
| `/mcp/[slug]` | MCP Detail | Individual MCP server details |
| `/projects` | Projects | GLM-powered projects showcase |
| `/projects/[slug]` | Project Detail | Individual project page |
| `/generate` | Generate | Auto-generate rules from project files (coming soon) |
| `/events` | Events | Z.ai events and workshops |
| `/contents` | Board | News and updates |
| `/members` | Members | Team directory |
| `/about` | About | About page with credits and attributions |

---

## 🧠 Skills System

Skills are the core of GLM Catalog. A **skill** is a specialized instruction set that tells GLM how to handle a specific task — from generating Express routes to running security audits to creating Mermaid diagrams.

### How Skills Work with GLM

1. **Browse** the catalog to find a skill for your task
2. **Copy** the skill content
3. **Paste** it into your GLM configuration or prompt
4. GLM now follows those instructions when working on that type of task

For example, the `express-route-generator` skill tells GLM:
- How to structure Express routes
- What patterns and best practices to follow
- What tools it's allowed to use
- How to validate its output

### Skill File Format

Each skill lives in `data/skills/<category>/<skill-name>/SKILL.md` with YAML frontmatter:

```yaml
---
name: "express-route-generator"
description: "Generate express route generator operations..."
allowed-tools: "Read, Write, Edit, Bash(cmd:*), Grep"
version: 1.0.0
license: MIT
author: "Author Name <email@example.com>"
---

# Express Route Generator

## Overview
...

## When to Use
...

## Instructions
...

## Examples
...

## Prerequisites
...
```

### Category Organization

Each category has a `README.md` with metadata:

```markdown
# Backend Development

Description of the category.

## Tags

`backend`, `api`, `database`, `microservices`, `nodejs`
```

### Auto-Generation Pipeline

1. **Source**: `data/skills/**/*.md` — Human-authored skill files
2. **Script**: `scripts/generate-skills.ts` — Parses frontmatter + content
3. **Output**: `data/skills.ts` — Typed TypeScript with `Skill` and `SkillCategory` interfaces
4. **Consumption**: Components import from `@/data/skills` for rendering

### Skill Categories (20+)

| Category | Skills | Description |
|----------|--------|-------------|
| API Development | 15+ | REST, GraphQL, OpenAPI patterns |
| API Integration | 15+ | Webhooks, OAuth, SDK patterns |
| AWS Skills | 15+ | Lambda, S3, EC2, CloudFormation |
| Backend Dev | 25+ | Express, FastAPI, Django, NestJS, Go |
| Business Automation | 10+ | Workflow, Zapier, n8n |
| Data Analytics | 10+ | SQL, BI, visualization |
| Data Pipelines | 10+ | ETL, streaming, warehousing |
| DevOps | 15+ | Docker, K8s, CI/CD, Terraform |
| Frontend Dev | 15+ | React, Vue, Angular, Svelte |
| GCP Skills | 4+ | Cloud Monitoring, Firestore, Vertex AI |
| ML Training | 6+ | TensorFlow, MLflow, W&B |
| Mobile Dev | 10+ | React Native, Flutter, Swift |
| Security Advanced | 25+ | SOC2, PCI-DSS, Zero Trust, forensics |
| Security Fundamentals | 25+ | JWT, CSRF, XSS, SQL injection |
| Technical Docs | 25+ | README, API docs, ADR, changelogs |
| Test Automation | 25+ | Jest, Vitest, Pytest, integration tests |
| Visual Content | 25+ | Mermaid, PlantUML, D2, chart generators |
| ... | ... | And more |

---

## 📜 Rules System

**Rules** are instruction files that steer GLM's overall behavior — they define coding conventions, framework preferences, and best practices that GLM follows across all its output.

### How Rules Work with GLM

1. **Browse** the rules catalog for your framework/language
2. **Copy** the rule content
3. **Add it** to your GLM configuration (e.g., as a `.rules` or `.md` file)
4. GLM now follows those conventions in everything it generates

For example, a React rule might tell GLM to:
- Always use functional components with TypeScript
- Prefer named exports over default exports
- Use Tailwind CSS for styling
- Follow specific naming conventions

### Rule Categories

Rules are organized by framework and language:
- **React** — Component patterns, hooks conventions, state management
- **TypeScript** — Type conventions, strict mode patterns
- **Python** — PEP 8, Django, FastAPI conventions
- **Rust** — Idiomatic patterns, ownership conventions
- **Go** — Project structure, error handling patterns
- And many more...

---

## 📊 Data Architecture

GLM Catalog uses a **static data layer** — all content is stored as TypeScript constants and imported directly by components. This approach enables:

- ⚡ **Zero-latency data access** — No API calls or database queries
- 🔍 **Full-text search** — Client-side filtering across all data
- 📦 **Simple deployment** — No backend infrastructure needed
- 🔄 **Easy contributions** — Edit data files and submit a PR

### Data Files

| File | Type | Description |
|------|------|-------------|
| `data/skills.ts` | Auto-generated | 200+ skills with typed interfaces |
| `data/rules/` | Markdown files | Rules organized by framework/language |
| `data/mcps.ts` | Static | MCP server entries |
| `data/projects.ts` | Static | GLM-powered projects |
| `data/events.ts` | Static | Z.ai events |
| `data/contents.ts` | Static | News and updates |
| `data/members.ts` | Static | Team member profiles |

### Key Interfaces

```typescript
// Skill — a specialized instruction set for GLM
interface Skill {
  id: string
  name: string
  slug: string
  description: string
  category: string
  categorySlug: string
  allowedTools: string
  version: string
  license: string
  author: string
  tags: string[]
  content: string
}

// Skill Category — groups related skills
interface SkillCategory {
  slug: string
  name: string
  description: string
  tags: string[]
}

// Rule — an instruction file that steers GLM's behavior
interface Rule {
  slug: string
  title: string
  content: string
  author: { name: string; avatar?: string }
  tags: string[]
}
```

---

## 🔧 Scripts & Tooling

### `scripts/generate-skills.ts`

Parses all `SKILL.md` files from `data/skills/` and generates `data/skills.ts`.

**What it does:**
1. Recursively walks `data/skills/<category>/<skill-name>/SKILL.md`
2. Parses YAML frontmatter (name, description, allowed-tools, version, license, author)
3. Extracts markdown content (everything after frontmatter)
4. Reads category `README.md` for category descriptions and tags
5. Outputs a fully typed TypeScript file with `Skill[]` and `SkillCategory[]`

**Usage:**
```bash
npx tsx scripts/generate-skills.ts
```

---

## 🤝 Contributing

We welcome contributions! Whether you're adding a new skill that helps GLM handle a specific task better, submitting a rule for a new framework, or fixing a bug — your help makes GLM more useful for every developer.

Please read our [Contributing Guide](CONTRIBUTING.md) for detailed instructions on:

- How to set up the development environment
- How to add new skills or rules
- Coding standards and conventions
- Pull request process

> **This project was initiated by [Hasin Riayan](https://hasin.vercel.app)** to give developers a single place to find the best instruction sets for steering GLM.

---

## 🙏 Credits & Attributions

GLM Catalog stands on the shoulders of amazing open-source projects:

- **[cursor.directory](https://github.com/richardsondx/cursor.directory/)** by [@richardsondx](https://github.com/richardsondx) — The original rules collection that inspired and seeded our rules browser
- **[Z.ai](https://z.ai/)** — The AI platform behind the GLM model
- **[Next.js](https://nextjs.org/)**, **[React](https://react.dev/)**, **[Tailwind CSS](https://tailwindcss.com/)**, **[Shadcn UI](https://ui.shadcn.com/)** — The open-source tools powering this project

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built by [Hasin Riayan](https://hasin.vercel.app)**

[hasin.vercel.app](https://hasin.vercel.app) · [GitHub](https://github.com/hasinriyan)

</div>
