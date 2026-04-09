# NEC Developer Test

A small Next.js app built as part of a take-home technical test. It lets you add users via a form with validation.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000/users/new](http://localhost:3000/users/new) to see the form.

## Libraries Used

- **React Hook Form** - handles form state and submission without manually managing `useState` for every field
- **Zod** - schema-based validation that keeps rules separate from the UI and gives TypeScript types for free via `z.infer`
- **@hookform/resolvers** - connects Zod to React Hook Form

## Decisions and Trade-offs

### Component structure

Due to the time constraint, form fields are written inline rather than extracted into reusable components. In a production codebase this would be the first thing I'd change. A shared `<FormField>` component wrapping the label, input, and error message would make each field a single clean line and keep styling consistent across the app.

### Mock data

User data lives in `lib/mockUsers.ts` as a plain array. Nothing persists and the list resets on page refresh. For this test that keeps the focus on the front-end, but a real version would hit a database or API.

### State management

For a production version I'd reach for Zustand. It would let users added via the form persist across pages and make add, edit, and delete straightforward to wire up. I considered Redux but it felt like the wrong tool here. Redux makes sense for large apps where multiple teams need strict, predictable state patterns. This isn't that.

One thing worth being clear on: Zustand is in-memory, so it disappears on page refresh. Real persistence means form submissions need to go somewhere, an API route that writes to a database. Zustand then sits in front of that as a client-side cache, keeping navigation fast without refetching on every page.

### Styling

Tailwind CSS v4 was already configured in the project. It lets you style directly in the markup without a separate CSS file, which suits a project at this scale.

### Fetching real data

If this app were hitting a real API it would look like this:

```tsx
export default async function UsersListingPage() {
  const res = await fetch("https://api.example.com/users");
  const users = await res.json();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.fullName}</Link>
        </li>
      ))}
    </ul>
  );
}
```

### Accessibility

The form has basic accessibility in place. Labels are linked to inputs via `htmlFor`, errors use `role="alert"` so screen readers pick them up immediately, and the checkboxes sit in a `<fieldset>` with a `<legend>`. I looked at adding a global error summary at the top but left it out. The form is short enough that everything is visible at once, so inline errors do the job. On a longer form I'd include one.

## What I Would Do With More Time

- Extract form fields into a reusable `<FormField>` component
- Add a user list page and user profile page
- Add persistence (localStorage at minimum, a proper API route ideally)
- Expand test coverage
