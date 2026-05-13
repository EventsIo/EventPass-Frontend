// User roles
export type UserRole = 'organizer' | 'attendee' | 'admin'

// Event types
export interface Event {
  id: string
  name: string
  description: string
  date: string
  time: string
  location: string
  bannerImage?: string
  type: 'public' | 'invite-only'
  supply: number
  organizerId: string
  status: 'draft' | 'live' | 'ended' | 'cancelled'
  tiers?: TicketTier[]
}

export interface TicketTier {
  name: string
  price: number
  currency: 'XLM' | 'USDC'
  supply: number
}

// Ticket types
export interface Ticket {
  id: string
  eventId: string
  attendeeAddress: string
  tier: string
  qrCode: string
  status: 'active' | 'checked-in' | 'revoked'
}

// API response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}