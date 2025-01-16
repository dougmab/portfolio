import Nav from '@/components/Nav';
import Home from '@/components/sections/Home';
import Stack from '@/components/sections/Stack';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function App() {
  return (
    <div>
      <Nav/>
      <div className="space-y-16">
        <Home/>
        <Stack/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
