import React, { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileContactBar from './components/MobileContactBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import IndividualService from './pages/IndividualService';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';
import Logo from './assets/Logo-optimized.png';
import { SERVICES } from './constants';
import { DEFAULT_SOCIAL_DESCRIPTION, ROUTE_META, getOrganizationSchema, getServiceMeta } from './seo';
import { SITE_NAME, SITE_URL } from './site';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RouteMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const service = pathname.startsWith('/services/')
      ? SERVICES.find(({ id }) => pathname === `/services/${id}`)
      : undefined;
    const metadata = service ? getServiceMeta(service) : (ROUTE_META[pathname] ?? ROUTE_META['/']);
    const canonicalUrl = `${SITE_URL}${metadata.path}`;

    document.title = metadata.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', metadata.description);
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', canonicalUrl);
    }

    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    ogTitleTag?.setAttribute('content', metadata.title);

    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    ogDescriptionTag?.setAttribute('content', metadata.description || DEFAULT_SOCIAL_DESCRIPTION);

    const ogUrlTag = document.querySelector('meta[property="og:url"]');
    ogUrlTag?.setAttribute('content', canonicalUrl);

    const ogImageTag = document.querySelector('meta[property="og:image"]');
    ogImageTag?.setAttribute('content', Logo);

    const twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
    twitterTitleTag?.setAttribute('content', metadata.title);

    const twitterDescriptionTag = document.querySelector('meta[name="twitter:description"]');
    twitterDescriptionTag?.setAttribute('content', metadata.description || DEFAULT_SOCIAL_DESCRIPTION);

    const twitterImageTag = document.querySelector('meta[name="twitter:image"]');
    twitterImageTag?.setAttribute('content', Logo);

    const schemaTag = document.getElementById('organization-schema');
    if (schemaTag) {
      schemaTag.textContent = JSON.stringify(getOrganizationSchema());
    }
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-primary focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ScrollToTop />
        <RouteMetadata />
        <Navbar />
        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<IndividualService />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <MobileContactBar />
      </div>
    </Router>
  );
}
