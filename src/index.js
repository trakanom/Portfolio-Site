import './css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TagManager from 'react-gtm-module';
import { createRoot } from 'react-dom/client';

// Initialize GTM
const tagManagerArgs = {
    gtmId: 'G-X3BC78Y4MZ',
    dataLayer: {
        'gtag.config': {
            'G-X3BC78Y4MZ': {
                'consent': 'default'
            }
        }
    }
};
TagManager.initialize(tagManagerArgs);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

reportWebVitals();
