import Header from './Components/Header';
import Navbar from './Components/Navbar';

const App = () => {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Header />
      </main>
      <footer>
        <div className='container'>Sachin Kumar</div>
      </footer>

    </>
  );
}

export default App;
