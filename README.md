# Next.js Template 2k26

A production-ready Next.js starter template with authentication scaffolding, API client, validation, and modern tooling pre-configured.

## Tech Stack

| Category       | Technology                          |
| -------------- | ----------------------------------- |
| Framework      | Next.js 16 (App Router)             |
| Language       | TypeScript 5                        |
| Styling        | Tailwind CSS 4                      |
| Data Fetching  | TanStack React Query 5              |
| HTTP Client    | Axios                               |
| Validation     | Zod                                 |
| Linting        | ESLint 9 (flat config)              |
| Git Hooks      | Husky (lint + typecheck on commit)  |
| Containerization | Docker                            |

## Project Structure

```
src/
├── app/
│   ├── (auth)/              # Auth route group (login, register, forgot/reset password)
│   ├── (dashboard)/         # Dashboard route group
│   ├── layout.tsx           # Root layout with providers
│   ├── error.tsx            # Global error boundary
│   ├── loading.tsx          # Global loading state
│   └── not-found.tsx        # 404 page
├── components/
│   ├── auth/                # Auth-specific components
│   ├── common/              # Shared/reusable components
│   ├── dashboard/           # Dashboard-specific components
│   └── ui/                  # Base UI primitives
├── context/                 # React context providers
├── hooks/                   # Custom React hooks
├── mocks-data/              # Mock data for development/testing
├── providers/               # App-level providers (React Query, etc.)
├── react-query/             # Query keys, hooks, and mutations
├── skeletons/               # Loading skeleton components
├── store/                   # Client-side state management
├── tests/
│   ├── e2e/                 # End-to-end tests
│   ├── integration/         # Integration tests
│   └── unit/                # Unit tests
├── utils/                   # Utility functions and API client
└── validations/             # Zod schemas and sanitization helpers
```

## Getting Started

### Prerequisites

- Node.js (see `.nvmrc` for version)
- npm

### Setup

```bash
# Clone the repository
git clone <repo-url>
cd nextjs-template-2k26

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Post-Clone: Exclude Local Folders

After cloning this template for a new project, uncomment these lines in `.gitignore` to stop tracking local-only folders:

```gitignore
# project docs (local only — uncomment after cloning template)
/project-docs

# todo notes (local only — uncomment after cloning template)
/.todo
```

These folders are tracked in the template repo so the structure ships with it. Once you start a real project, exclude them so each developer's notes stay local.

### Environment Variables

See [`.env.example`](.env.example) for all available variables:

| Variable              | Description         | Default                    |
| --------------------- | ------------------- | -------------------------- |
| `NEXT_PUBLIC_API_URL`  | Backend API base URL | `http://localhost:8000/api` |
| `NEXT_PUBLIC_APP_NAME` | Application name     | `MyApp`                    |
| `NEXT_PUBLIC_APP_URL`  | Frontend URL         | `http://localhost:3000`     |

## Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start development server           |
| `npm run build`   | Create production build            |
| `npm run start`   | Start production server            |
| `npm run lint`    | Run ESLint                         |
| `npm run typecheck` | Run TypeScript type checking     |

## Validation

Zod schemas live in `src/validations/` and are form-library-agnostic. Use them with any form library or manually:

```ts
import { loginSchema, sanitizeInput } from "@/validations";

// With any form library
const result = loginSchema.safeParse({ email, password });

// Sanitize user input at trust boundaries
const clean = sanitizeInput(rawInput);
```

Password policy: 8-128 characters, must include uppercase, lowercase, number, and special character.

## Git Hooks

Pre-configured via Husky:

- **pre-commit** — runs `lint` and `typecheck`
- **commit-msg** — enforces [Conventional Commits](https://www.conventionalcommits.org/) format (`type(scope): description`)

## Project Documentation

Internal project docs live in `project-docs/` at the root. This folder is **git-ignored** — it stays local and is not committed to the repository.

To set it up after cloning:

```bash
# Copy the template folder from a team member or shared drive
# Or create it fresh:
mkdir project-docs
```

| Folder                          | Purpose                              |
| ------------------------------- | ------------------------------------ |
| `project-docs/requirements/`    | PRD, feature specs, user stories     |
| `project-docs/architecture/`    | ADRs and system design decisions     |
| `project-docs/api/`             | API contracts and endpoint docs      |
| `project-docs/design/`          | UI/UX specs, wireframes, tokens      |
| `project-docs/meetings/`        | Meeting notes and decisions          |
| `project-docs/runbooks/`        | Deployment and operational playbooks |
| `project-docs/changelog/`       | Internal changelog and release notes |

> See [`project-docs/README.md`](project-docs/README.md) for full structure and usage.

## Docker

```bash
docker compose up
```

> Dockerfile and docker-compose.yml are scaffolded — configure for your deployment target.

## License

MIT
