# Retail Roulette

A real-time multiplayer scavenger hunt game for retail stores (Walmart/Target). Players find assigned products and tap "I found it!"

## Features

- **Black & white minimal design** - Clean, mobile-first UI
- **Two game modes** - Teams or Singular
- **Real-time multiplayer** - Firebase Realtime Database (or local fallback)
- **Barcode scanning** - Camera-based scanning for product verification
- **Product lists** - Walmart and Target product catalogs included

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Setup Firebase (required for cross-device play)

**Joining from another device (e.g. phone joining a game created on a laptop) only works with Firebase.** Without it, parties are stored in the browser’s localStorage, so they’re only visible on the same device.

1. Create a [Firebase project](https://console.firebase.google.com)
2. Enable **Realtime Database** (not Firestore)
3. Copy `.env.example` to `.env` and add your project’s config (from Firebase Console → Project settings)
4. Rebuild and redeploy: `npm run build` then `npx gh-pages -d dist`

Without Firebase, the app still works for testing on one device (e.g. multiple tabs).

## Project Structure

```
src/
  screens/     # All 9 screens (Home, Join, Create, Lobby, Game, Results, etc.)
  components/  # BarcodeScanner
  lib/         # Firebase, gameState
  data/        # Product parsing from target.txt, walmart.txt
public/
  target.txt   # Target product list
  walmart.txt  # Walmart product list
```

## Mobile

Optimized for smartphones. Use HTTPS for camera access when testing on mobile (or localhost for development).
