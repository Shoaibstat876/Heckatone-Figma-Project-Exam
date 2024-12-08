// File Path: src/pages/_app.tsx

// Import global styles for consistent styling across the app
import '../styles/globals.css';

// Import `AppProps` type from Next.js for type safety
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Wrapper for all pages */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; // Exporting the custom App component
