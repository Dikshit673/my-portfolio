import Hero from './Components/Hero';
import NavbarL from './Components/NavbarL';
import NavbarU from './Components/NavbarU';

const App = () => {

  return (
    <>
      <header>
        <NavbarU />
        <NavbarL />

        <Hero color="yellow" />
        <Hero color="orange" id="intro" />
        <Hero color="blue" id="service" />
        <Hero color="purple" id="blog" />
        <Hero color="green" id="contact" />

      </header>
      {/* <main>
        
      </main> */}
      {/* <footer>
        <div className='container'>Sachin Kumar</div>
      </footer> */}

    </>
  );
}

export default App;
