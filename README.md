# L1Network UI Components

This repo host the main website, docs site and design system with shadcnui.

> 🚧 Note: This project is in active development (80% complete) - feel free to explore and contribute! 🏗️

## Project Structure

### Apps

- [__apps/web__](./apps/web/README.md) - Main website
- [__apps/docs__](./packages/docs/README.md) - Documentation.

### Packages
- [__packages/ui__](./packages/ui/README.md) - Desing System with shadcnui and custom components
- [__packages/tsconfig__](./packages/tsconfig/README.md) - TypeScript configuration

## Development Setup

### Requirements
- Node.js 20+
- pnpm

### Quick Start

```bash
npm install -g pnpm

git clone https://github.com/L1Network/l1-ui.git
cd l1-ui
pnpm install
```

### Design System

Our design system provides a comprehensive collection of reusable components built on top of shadcn/ui, offering a consistent and maintainable UI framework across all applications. The system includes:

- Pre-built, customizable UI components
- Consistent theming and styling
- Accessibility-first design patterns
- Responsive layouts and components
- Dark/light mode support

All components and documentation can be found in the [packages/ui](./packages/ui/README.md) directory. The design system can be utilized in any application within the monorepo, from landing pages to complex dApps.

### Development Commands

```bash
pnpm dev        # Dev server
pnpm build      # Production build
pnpm test       # Run tests
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines.

## License

MIT License

