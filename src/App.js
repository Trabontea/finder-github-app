import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import {GithubProvider} from './context/github/GithubContext'
import {AlertProvider} from './context/alert/AlertContext'

 
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className='container mx-auto pb-12 px-3'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>

            <Footer/>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}
export default App;
