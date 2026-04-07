@AGENTS.md

# Project Overview

This is a take-home technical test for a NEC job application. The brief is in `TEST.md`.

## What We Are Building

A small Next.js user management app with three pages:

- `/users/new` — a form to add a new user (required)
- `/users` — a list of all users (optional)
- `/users/[id]` — a profile page for a single user (optional)

## Form Fields

The add user form collects:

- Full name (text, required)
- Age (number, required, must be 18+)
- Country (dropdown, required)
- Interests (checkboxes, at least one required)

Validation is handled with **React Hook Form** + **Zod**. See `app/users/new/page.tsx`.

## Mock Data

No real backend. User data lives in `lib/mockUsers.ts` as a plain array. `lib/types.ts` holds the `User` type.

## Key Technical Decisions

- **React Hook Form + Zod** for form validation
- **Tailwind CSS v4** for styling
- **Jest + React Testing Library** for tests — config in `jest.config.ts`, setup in `jest.setup.ts`, tests in `__tests__/`
- No global state management — mock data is static. Zustand would be the right choice if add/edit/delete needed to work across pages

## Stack Versions (Breaking Changes)

- Next.js 16.2.2 — App Router, no Pages Router
- React 19
- Zod v4 — error messages use `{ error: "..." }` not `{ invalid_type_error: "..." }`
- `params` in dynamic routes is now a `Promise` — must be awaited

## File Structure

```
app/
  users/
    new/page.tsx        ← add user form
    page.tsx            ← user list
    profile/[id]/page.tsx       ← user profile
  layout.tsx
  globals.css
lib/
  types.ts              ← User type
  mockUsers.ts          ← mock data, INTERESTS and COUNTRIES constants
__tests__/
  AddUserPage.test.tsx  ← form tests
```
