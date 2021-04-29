import renderApp from './framework/render';
import dataStore from './data/dataStore';
import App from './components/App';
import { performSearch, validateAndLoadData } from './data/weatherData';

if (module.hot) {
  module.hot.accept();
}

window.dataStore = dataStore;
window.validateAndLoadData = validateAndLoadData;
window.performSearch = performSearch;

// pass a component function itself so that `renderApp` could invoke it as needed
renderApp(App, document.getElementById('app-root'));
