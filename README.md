# NEC Developer Test

A small Next.js application built as part of a take-home technical test. It allows you to add users via a form with validation.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/users/new](http://localhost:3000/users/new) to see the form.

## Libraries Used

- **React Hook Form** - handles form state and submission without the boilerplate of managing `useState` for every field
- **Zod** - schema-based validation, keeps validation rules separate from the UI and gives us TypeScript types for free via `z.infer`
- **@hookform/resolvers** - connects Zod to React Hook Form

## Decisions and Trade-offs

### Component structure

Given the time budget, the form fields are written inline rather than extracted into reusable components. In a production codebase this would be the first thing to address. You would typically have a shared `<FormField>` component that wraps a label, input, and error message together, so each field in the form is a single clean line rather than a repeated block of markup. This keeps the form readable and makes styling consistent across the whole app.

### Mock data

User data is stored in memory as a plain array in `lib/mockUsers.ts`. There is no persistence and the list resets on page refresh. A real implementation would use a database or API, but for the purposes of this test it keeps the focus on the front-end behaviour.

### State management

In a production version of this app, I would use Zustand to manage global user state. This would allow users added via the form to be persisted in memory across pages (list, profile), and would make add, edit, and delete operations straightforward to implement. Redux was considered but felt like unnecessary overhead for an app of this size. It is better suited to large applications with complex state interactions and teams that need strict, predictable patterns.

It is worth noting that Zustand alone is not sufficient for real persistence. It is in-memory state and is lost on page refresh. In a production app, form submissions would be sent to a Next.js API route (`app/api/`), which would write to a database. Zustand would then act as a client-side cache of that data, keeping the UI fast and avoiding unnecessary refetches between page navigations. The database remains the source of truth.

### Styling

Tailwind CSS (v4) is used for styling. It is already configured in the project and allows styling directly in the markup without writing separate CSS files.

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

Basic accessibility has been applied to the form. Labels are associated with inputs via `htmlFor`, error messages use `role="alert"` so screen readers announce them immediately, and the interests checkboxes are wrapped in a `<fieldset>` with a `<legend>`. A global error summary at the top of the form was considered but omitted. For a short form like this, inline errors are sufficient as all fields are visible at once. For longer or more complex forms a summary would be appropriate, particularly for screen reader users who benefit from a single place to review all errors.

## What I Would Do With More Time

- Extract form fields into a reusable `<FormField>` component
- Add a user list page and user profile page
- Add persistence (localStorage at minimum, an API route with a proper data store ideally)
- Expand test coverage
