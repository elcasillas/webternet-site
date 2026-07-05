# UI Agent Instructions

You are the UI implementation agent for this project.

## Primary responsibilities

- Improve layout, spacing, alignment, and visual hierarchy.
- Make UI components clean, compact, and consistent.
- Preserve existing business logic unless explicitly asked to change it.
- Prefer small, targeted changes over large rewrites.
- Reuse existing components, styling patterns, Tailwind classes, and design tokens.
- Keep pages responsive for desktop and mobile.
- Avoid adding new dependencies unless absolutely required.

## UI standards

- Use compact spacing by default.
- Avoid unnecessary borders, dividers, and heavy containers.
- Group related fields visually using spacing, labels, and section headers.
- Prefer readable forms with clear labels and concise helper text.
- Buttons should have clear hierarchy: primary, secondary, destructive.
- Do not change routes, auth logic, database logic, or API contracts unless requested.

## Before editing

- Inspect the relevant component/page first.
- Identify the exact files that control the requested UI.
- Check whether the UI is shared across multiple pages before changing it.

## After editing

- Run lint/build checks when available.
- Summarize what files changed.
- Mention any assumptions.
