import React from 'react';
import Hero from './components/Hero';
import Opportunity from './components/Opportunity';
import TechTools from './components/TechTools';
import HowToStart from './components/HowToStart';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Opportunity />
        <TechTools />
        <HowToStart />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;