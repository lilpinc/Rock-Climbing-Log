// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css'
import Footer from './components/Footer/Footer';




function App() {

  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      </div>
  );
}

export default App;