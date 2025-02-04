import ReactDOM from 'react-dom/client';
import Welcome from  './components/Welcome';
import JsonViewer from './components/JsonViewer';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/json" element={<JsonViewer json={window.jsonData} />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
}

const renderApp = () => {
  const appRoot = document.getElementById('root');

  if (appRoot) {
    ReactDOM.createRoot(appRoot).render(<App />);
  }
}

renderApp();
