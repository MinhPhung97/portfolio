import './App.css';
import 'animate.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-multi-carousel/lib/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-modern-drawer/dist/index.css';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Banner />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
