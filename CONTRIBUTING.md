# Contributing to EventPass Frontend

Thank you for your interest in contributing to EventPass! We welcome contributions from the community.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/eventpass-frontend.git`
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Run tests: `npm run lint && npm run type-check && npm run build`
7. Commit your changes: `git commit -m "Add your message"`
8. Push to your fork: `git push origin feature/your-feature-name`
9. Create a Pull Request

## Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow the existing code style (ESLint rules)
- Use meaningful variable and function names
- Add comments for complex logic

### Testing
- Write tests for new features
- Ensure all tests pass before submitting PR
- Test on both desktop and mobile

### Commits
- Use clear, descriptive commit messages
- Follow conventional commit format when possible

### Pull Requests
- Provide a clear description of the changes
- Reference any related issues
- Ensure CI checks pass
- Request review from maintainers

## Project Structure

```
src/
├── app/          # Next.js App Router pages
├── components/   # Reusable UI components
├── lib/
│   ├── api/      # API client and utilities
│   └── stellar/  # Stellar wallet helpers
├── store/        # Zustand state management
└── types/        # TypeScript type definitions
```

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **API Client**: Axios
- **Wallet**: Freighter Wallet SDK
- **Blockchain**: Stellar SDK

## Questions?

If you have any questions about contributing, feel free to open an issue or contact the maintainers.