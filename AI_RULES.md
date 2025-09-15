# AI Development Rules

This document outlines the tech stack and specific rules for developing this application. Following these guidelines ensures consistency, maintainability, and leverages the strengths of our chosen libraries.

## Tech Stack

This project is built with a modern, component-based architecture. Key technologies include:

-   **Framework**: React with Vite for a fast development experience.
-   **Language**: TypeScript for type safety and improved developer experience.
-   **Styling**: Tailwind CSS for a utility-first styling approach.
-   **UI Components**: shadcn/ui, a collection of beautifully designed, accessible, and customizable components.
-   **Routing**: React Router (`react-router-dom`) for all client-side navigation.
-   **Data Fetching & State**: TanStack Query (`@tanstack/react-query`) for managing server state, caching, and asynchronous operations.
-   **Forms**: React Hook Form for performant and flexible form handling, paired with Zod for schema validation.
-   **Icons**: Lucide React for a comprehensive and consistent set of icons.
-   **Notifications**: Sonner and a custom Toast implementation for user feedback.

## Library Usage Rules

To maintain a clean and consistent codebase, please adhere to the following rules:

1.  **Styling**:
    -   **ALWAYS** use Tailwind CSS utility classes for styling.
    -   **AVOID** writing custom CSS in `.css` files. All styling should be handled through Tailwind.
    -   For dynamic classes, use the `cn` utility function from `src/lib/utils.ts`.

2.  **UI Components**:
    -   **PRIORITIZE** using components from the `src/components/ui` directory (shadcn/ui).
    -   If a required component does not exist in shadcn/ui, create a new, reusable component in `src/components/`.
    -   **DO NOT** add new components to existing files. Each component should have its own file.

3.  **Routing**:
    -   All application routes **MUST** be defined in `src/App.tsx` using `react-router-dom`.
    -   Create new page components inside the `src/pages/` directory.

4.  **State Management**:
    -   For server state, data fetching, caching, and mutations, **ALWAYS** use `@tanstack/react-query`.
    -   For simple, local component state, use React's built-in hooks (`useState`, `useReducer`).
    -   For global client-side state that needs to be shared across components, use `React.Context`.

5.  **Forms**:
    -   **ALL** forms must be built using `react-hook-form`.
    -   **ALWAYS** use `zod` for schema definition and validation.
    -   Integrate `react-hook-form` with shadcn/ui `Form` components for a seamless user experience.

6.  **Icons**:
    -   Use icons exclusively from the `lucide-react` library. This ensures visual consistency.

7.  **File Structure**:
    -   **Pages**: Place all page-level components in `src/pages/`.
    -   **Components**: Place all reusable UI components in `src/components/`. Shadcn components are in `src/components/ui/`.
    -   **Hooks**: Custom hooks should be placed in `src/hooks/`.
    -   **Utilities**: General utility functions should be placed in `src/lib/`.
    -   **Assets**: Static assets like images and fonts go in `src/assets/`.