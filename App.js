import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import About from './pages/About';
import Faqs from './pages/Faqs';
import Translator from './pages/Translator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}>Login Page</Route>
          <Route path='/home' element={<Home/>}>Home Page</Route>
          <Route path='/chat' element={<Chat/>}>Chat Page</Route>
          <Route path='/about' element={<About/>}>About Page</Route>
          <Route path='/faq' element={<Faqs/>}>FAQs Page</Route>
          <Route path='/translator' element={<Translator/>}>Translator Page</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
