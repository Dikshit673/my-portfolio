import React from 'react';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  // const [com, setCom] = React.useState(About);

  // console.log(com);
  return (
    <>
      <Navbar />
      <Hero />

      <main>
        {/* {com} */}
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
