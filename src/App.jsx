import './App.css';
import './index.css';
import Hero from './Hero';
import Navbar from './NavBar';
import { useEffect, useState } from 'react';
import PracticeSection from './PracticeSection';
import InterviewSection from './InterviewSection';
import DailyQuizSection from './DailyQuizSection';
import LevelsSection from './LevelsSection';
import CTASection from './CTASection';
import Footer from './Footer';

function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    import('./content/content.json')
      .then((data) => setContent(data))
      .catch((error) => console.error('Error loading content:', error));
  }, []);

  if (!content) {
    return <div className="min-h-screen bg-[#1A1E23] text-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-[#1A1E23] text-white">
      <Navbar {...content.nav} />
      <Hero {...content.hero} />
      <PracticeSection {...content.practice} />
      <InterviewSection {...content.interview} />
      <DailyQuizSection {...content.dailyQuiz} />
      <LevelsSection {...content.levels} />
      <CTASection {...content.cta} />
      <Footer {...content.footer} />
    </main>
  );
}

export default App;
