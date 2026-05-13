# EventPass Frontend

[![CI](https://github.com/EventsIo/EventPass-Frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/EventsIo/EventPass-Frontend/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A decentralized application (dApp) built on the Stellar blockchain for event management and ticketing. EventPass enables event organizers to create events, distribute exclusive invite codes, and sell non-transferable NFT tickets using soulbound tokens.

## 🚀 Features

- **Decentralized Event Creation**: Create and manage events on the Stellar blockchain
- **Soulbound NFT Tickets**: Non-transferable tickets prevent scalping and ensure authenticity
- **Exclusive Invite Codes**: Generate single-use invite codes for private events
- **Multi-Currency Support**: Accept payments in XLM and USDC
- **QR Code Verification**: Secure entry verification with on-chain validation
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **API Client**: Axios
- **Wallet Integration**: Freighter Wallet SDK
- **Blockchain**: Stellar SDK with Soroban contracts
- **QR Codes**: qrcode library
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18.x or later
- npm or yarn
- Freighter wallet browser extension

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/EventsIo/EventPass-Frontend.git
   cd eventpass-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   NEXT_PUBLIC_STELLAR_NETWORK=testnet
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Organizer dashboard
│   ├── events/            # Event-related pages
│   ├── tickets/           # Attendee ticket wallet
│   └── api/               # API routes (if needed)
├── components/            # Reusable UI components
│   ├── ui/               # Basic UI components
│   ├── forms/            # Form components
│   └── layout/           # Layout components
├── lib/
│   ├── api/              # API client and utilities
│   └── stellar/          # Stellar wallet helpers
├── store/                # Zustand state management
└── types/                # TypeScript type definitions
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌐 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:3001` |
| `NEXT_PUBLIC_STELLAR_NETWORK` | Stellar network (testnet/mainnet) | `testnet` |

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/EventsIo/EventPass-Frontend/issues)
- **Discussions**: [GitHub Discussions](https://github.com/EventsIo/EventPass-Frontend/discussions)

## 🔗 Related Projects

- [EventPass Backend](https://github.com/EventsIo/EventPass-Backend) - Rust API server
- [EventPass Contracts](https://github.com/EventsIo/EventPass-Contracts) - Soroban smart contracts

---

Built with ❤️ for the Stellar community