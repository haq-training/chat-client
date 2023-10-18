import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ApolloProvider } from '@apollo/client';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// mock api
import './_apis_';
import './locales/i18n';
import './utils/highlight';
import 'simplebar/src/simplebar.css';
import 'react-image-lightbox/style.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-quill/dist/quill.snow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import React from 'react';
import { persistor, store } from './redux/store';

import { AuthProvider } from './contexts/JWTContext';
import apolloConnection from './apolloServer';
import Router from './routes';
import ThemeProvider from './theme';
import { ThemeSettings } from './components/settings';
import SettingsProvider from './components/settings/SettingsContext';
import { ChartStyle } from './components/chart';
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';
import ThemeLocalization from './components/ThemeLocalization';
import MotionLazyContainer from './components/animate/MotionLazyContainer';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ApolloProvider client={apolloConnection}>
      <AuthProvider>
        <HelmetProvider>
          <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <SettingsProvider>
                <BrowserRouter>
                  <ScrollToTop />
                  <MotionLazyContainer>
                    <ThemeProvider>
                      <ThemeSettings>
                        <ThemeLocalization>
                          <ProgressBarStyle />
                          <ChartStyle />
                          <Router />
                        </ThemeLocalization>
                      </ThemeSettings>
                    </ThemeProvider>
                  </MotionLazyContainer>
                </BrowserRouter>
              </SettingsProvider>
            </PersistGate>
          </ReduxProvider>
        </HelmetProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}
