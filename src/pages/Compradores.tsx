
import React, { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import CompradoresHero from './compradores/components/CompradoresHero';
import CompradoresServices from './compradores/components/CompradoresServices';
import CompradoresAbout from './compradores/components/CompradoresAbout';
import CompradoresFAQ from './compradores/components/CompradoresFAQ';
import CompradoresContact from './compradores/components/CompradoresContact';

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
        <CompradoresHero />
      </ErrorBoundary>
      
      <Suspense fallback={<LoadingFallback />}>
        {/* On mobile, show Contact form after Hero section */}
        {isMobile && (
          <ErrorBoundary>
            <div className="bg-white py-6">
              <CompradoresContact showCompactVersion={true} />
            </div>
          </ErrorBoundary>
        )}
        
        <ErrorBoundary>
          <CompradoresServices />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <CompradoresAbout />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <CompradoresFAQ />
        </ErrorBoundary>
        
        {/* On desktop or when we need the full contact form */}
        {!isMobile && (
          <ErrorBoundary>
            <CompradoresContact />
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
