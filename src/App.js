import ParentStories from './components/stories/ParentStories';
import ParentNovels from './components/novels/ParentNovels';
import ParentCharacters from './components/characters/ParentCharacters';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { News } from './components/News';
import { Footer } from './components/Footer';
import Svg from './components/Svg';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <News/>
      <ParentStories/>
      <ParentNovels/>
      <ParentCharacters/>
      <Footer/>
      <Svg/>
    </>
  );
}

export default App;
