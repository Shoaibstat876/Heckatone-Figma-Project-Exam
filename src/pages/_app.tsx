// File Path: src/pages/_app.tsx

// Import global styles for consistent styling across the app
import '../styles/globals.css';

// Import `AppProps` type from Next.js for type safety
import { AppProps } from 'next/app';

// Import Header for potential global use (e.g., site-wide navigation)
import Header from '@/components/layout/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* 
        Wrapper for all pages:
        - The `Component` represents the active page being rendered.
        - `pageProps` are the initial props that were preloaded for the page.
      */}
      <Component {...pageProps} />
      {/* 
        If needed, you can add global components like <Header /> and <Footer />
        directly here to make them available on every page without including them
        in individual page components.
      */}
    </>
  );
}

export default MyApp; // Exporting the custom App component


