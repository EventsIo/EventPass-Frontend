import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  email: string
  role: 'organizer' | 'attendee'
  walletAddress?: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
  connectWallet: (address: string) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
      connectWallet: (address) =>
        set((state) => ({
          user: state.user ? { ...state.user, walletAddress: address } : null,
        })),
    }),
    {
      name: 'auth-storage',
    }
  )
)