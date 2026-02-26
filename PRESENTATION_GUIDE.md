# Retail Roulette — NSTEM Presentation Guide

Use this as a script and slide outline. **Keep slides visual:** few words, more images/diagrams/screenshots.

---

## 1. Problem / Purpose

**What real-world problem are you aiming to solve?**  
- Shopping in big stores (Walmart, Target) can feel boring, isolating, or overwhelming.  
- Families and friends want to do something **fun and social** in the same space, not just shop and leave.  
- There aren’t many **in-store, real-time group games** that use the store itself as the playing field.

**What is the purpose of your project?**  
- **Retail Roulette** turns a regular store trip into a **real-time multiplayer scavenger hunt**: one person creates a game, others join with a code, and everyone races to find products and scan barcodes.  
- Purpose: make retail spaces a place for **connection, engagement, and light competition** instead of only errands.

**Why is it significant?**  
- Uses technology (phones, barcode scanning, real-time sync) to create **shared in-person experiences**.  
- Can be used for team-building, family outings, or STEM/retail education (product categories, store layout, collaboration).

**Slide idea:**  
- **Title:** “The Problem” or “Why Retail Roulette?”  
- **Content:** 1 short sentence (e.g. “Stores are functional, but not always fun or social.”)  
- **Image:** Photo of a busy store aisle, or a simple diagram: “Store = errands” → “Store = game + connection.”

---

## 2. Hypothesis

**What is your expected outcome?**  
- If we build a **real-time, phone-based scavenger hunt** that uses store products and barcode scanning, then:  
  - **Players will stay more engaged** than during a normal shopping trip.  
  - **Groups will interact more** (teams, shared goals, competition).  
  - **The app will work reliably** across multiple devices (host + joiners) when using real-time sync (e.g. Firebase).

**Slide idea:**  
- **Title:** “Our Hypothesis”  
- **Content:** One sentence, e.g. “A real-time, in-store scavenger hunt will make group store trips more engaging and social.”  
- **Image:** Simple flow: “App + store + group” → “More engagement and connection.”

---

## 3. Methodology

**How did you conduct your project?**  
- **Designed** a full game flow: create/join party → choose store and mode (Teams vs Singular) → lobby → rounds → scan products → results.  
- **Built** the app with React and Vite; used Firebase Realtime Database so multiple devices see the same game state.  
- **Tested** on one device (multiple tabs) and across devices (phone + laptop) to verify joining, scanning, and scoring.

**What materials did you use?**  
- **Tech:** React, Vite, Firebase Realtime Database, React Router, HTML5 barcode scanning library.  
- **Data:** Product lists (e.g. from Walmart and Target) for item names and barcodes.  
- **Devices:** Smartphones and computers with cameras and browsers (HTTPS for camera access).

**Slide idea:**  
- **Title:** “How We Built It” or “Methodology”  
- **Content:** 3–4 short bullets (e.g. Design → Build → Test; React + Firebase + barcode scanning).  
- **Image:** Simple diagram: “Design” → “Build (React + Firebase)” → “Test (multi-device).” Or a screenshot of your app (home screen or lobby).

---

## 4. Results

**What were your results?**  
- A **working web app** where a host creates a game, others join with a code, and everyone plays rounds by finding and scanning products.  
- **Two modes:** Teams (compete as teams) and Singular (everyone for themselves).  
- **Real-time sync:** Lobby, round starts, and scores update for all players when using Firebase.  
- **Play Again:** After a game, the host can start a new game with the same group and a new code so more people can join.

**Analysis — were they what you expected?**  
- **Yes:** We got a playable, multi-device scavenger hunt that makes the store the “board.”  
- **Challenges:** Camera permissions and HTTPS for scanning; making sure join flow and codes work clearly for first-time users.  
- **Takeaway:** Real-time databases and barcode APIs make it feasible to turn a physical store into a shared game space.

**Slide idea:**  
- **Title:** “Results” or “What We Achieved”  
- **Content:** 2–3 bullets (e.g. Working multiplayer game; Teams + Singular; Real-time sync).  
- **Image:** Screenshots of your app: lobby with code, game screen with scan button, final results or podium.

---

## 5. Impact

**How does your project contribute to combating a real-world issue?**  
- **Engagement:** Turns passive shopping into an active, goal-based experience.  
- **Connection:** Encourages groups to work together or compete in the same physical space instead of being on separate screens.  
- **Accessibility:** Uses stores people already visit; no extra cost to play beyond a phone and internet.  
- **Scalability:** Same idea could extend to other stores, events, or education (e.g. learning product categories or store layout).

**Slide idea:**  
- **Title:** “Impact” or “Why It Matters”  
- **Content:** One sentence (e.g. “Turning everyday stores into spaces for connection and play.”).  
- **Image:** Diagram or photo: “Before: solo errands” vs “After: group game in the same store,” or a simple impact graphic (engagement, connection, accessibility).

---

## 6. Images — Checklist

Use these to keep slides visual and engaging:

| Section       | Suggestion |
|---------------|------------|
| Problem       | Store aisle photo or “boring vs fun” diagram |
| Hypothesis    | Simple “if → then” or input → output diagram |
| Methodology   | App screenshot (home/lobby) + tech stack icons (React, Firebase) |
| Results       | 2–3 app screenshots: lobby, game/scan, results screen |
| Impact        | Before/after or “engagement + connection” graphic |
| Title slide   | App logo or phone showing Retail Roulette home screen |

**Tips:**  
- One main idea per slide; use a single strong image per slide when possible.  
- If you use graphs, keep them simple (e.g. “Design → Build → Test” or “Solo trip vs group game”).  
- End with a slide that has your app URL or QR code so people can try it.

---

## Quick reference — one sentence per section

- **Purpose:** Turn store trips into a real-time, social scavenger hunt.  
- **Hypothesis:** A phone-based, in-store scavenger hunt will increase engagement and group interaction.  
- **Methodology:** Designed and built with React and Firebase; tested on multiple devices.  
- **Results:** Working multiplayer game with two modes and real-time sync.  
- **Impact:** Uses everyday stores to create connection and engagement for groups.

You can copy these into slide titles or speaker notes and expand with the details above.
