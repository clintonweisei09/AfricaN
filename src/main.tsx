import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthorProvider } from './context/AuthorContext';

createRoot(document.getElementById('root')!).render(
  <AuthorProvider>
    <App />
  </AuthorProvider>
);
