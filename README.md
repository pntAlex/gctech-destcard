# Technical Test - GCTech

## About the Project

This project is a technical test for GCTech. It is a minimal static web application that showcases travel destinations in the form of interactive cards.

## Technologies Used

- Vue.js 3 with Composition API
- Vite
- Tailwind CSS
- Floating Vue for tooltips (minimal configuration)
- Phosphor Icons for icons
- ESLint and Prettier for linting/formatting

## Main Features

- Display of destinations with images, descriptions, and tags
- Interactive rating system with animation
- Image carousel for each destination
- Display of community reviews
- Responsive interface and smooth animations

## Project Structure

The project follows a standard structure for a Vue.js application:

- `src/` : Contains the application source code
  - `components/` : Reusable Vue components
  - `assets/` : Static resources (CSS, fonts)
- `public/` : Static files served directly

## Approach and Technical Choices

1. **Vue 3 with Composition API**: Chosen for its reactivity and performance. The use of `<script setup>` simplifies syntax and improves code readability.

2. **Vite**: Used as a build tool for fast development and simplified configuration.

3. **Tailwind CSS**: Adopted for rapid and consistent styling. Utility classes allow for fine-tuned customization and rapid interface development.

4. **Reusable Components**: The destination card (`DestinationCard.vue`) is designed as a standalone component, facilitating maintenance and reuse.

5. **Animations and Transitions**: Implemented for a smooth user experience, using Vue's transition capabilities and Tailwind animations. (I favored the use of transforms for optimization)

6. **Responsive Design**: Ensured through the use of Tailwind classes and media queries.

7. **State Management**: Use of Vue's `ref` and `computed` for reactive management of component local state.

8. **Performance Optimization**: Use of `shallowRef` for shallow references, optimizing performance for complex objects.

## Configuration and Development Tools

- ESLint and Prettier are configured to ensure code quality and consistency.
- PostCSS is used with Tailwind for CSS processing.
- The project includes VSCode extension recommendations to improve the development experience.

## Installation and Launch

To install and launch the project, follow these steps:

1. Install dependencies:

   ```bash
   bun i
   ```

2. Launch the development server:

   ```bash
   bun dev
   ```

3. Open your browser and go to `http://localhost:5173`

## Assumptions and Future Improvements

- Layout improvement when multiple destinations (horizontal scroll basically)
- Typescript setup
- Destination data would normally be fetched from an API.
- The rating system would be connected to a backend to save votes.
- Images and avatars would be hosted on a CDN in a production environment.
- Internationalization (i18n) could be added to support multiple languages.
- Unit and integration tests could be implemented to ensure code reliability.

## Additional Notes

- The project uses a custom font (Raleway) with weight variations for flexible typography.
- Accessibility has been considered in the design of components but could be further improved.
