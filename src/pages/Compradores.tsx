
import React, { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { useIsMobile } from '@/hooks/use-mobile';

// Fallback component for loading states
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-valoraBlue text-xl">Cargando...</div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode, fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode, fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div className="p-4">Algo salió mal. Por favor, recargue la página.</div>;
    }
    return this.props.children;
  }
}

const Compradores = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      
      <Suspense fallback={<LoadingFallback />}>
        {/* On mobile, show Contact form after Hero section */}
        {isMobile && (
          <ErrorBoundary>
            <div className="bg-white py-6">
              <Contact showCompactVersion={true} />
            </div>
          </ErrorBoundary>
        )}
        
        <ErrorBoundary>
          <Services />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <FAQ />
        </ErrorBoundary>
        
        {/* On desktop or when we need the full contact form */}
        {!isMobile && (
          <ErrorBoundary>
            <Contact />
          </ErrorBoundary>
        )}
        
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

export default Compradores;
