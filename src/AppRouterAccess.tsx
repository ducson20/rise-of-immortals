import { lazy, ReactNode, Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout, Footer } from '@/components/layouts';
import { useAppSelector } from './hooks';
import { store } from '@/store';

export interface IAppRouterAccessProps {}

const Home = lazy(() => import('@/views/home/Home'));
const AboutUs = lazy(() => import('@/views/about-us/AboutUs'));
const WhitePaper = lazy(() => import('@/views/white-paper/WhitePaper'));
const GameDeck = lazy(() => import('@/views/game-deck/GameDeck'));
const Stacking = lazy(() => import('@/views/stacking/Stacking'));
const OurTeam = lazy(() => import('@/views/our-team/OurTeam'));
const Guide = lazy(() => import('@/views/guide/Guide'));
const HelpAndSupport = lazy(() => import('@/views/help-and-support/HelpAndSupport'));
const FAQ = lazy(() => import('@/views/faq/FAQView'));
const PrivacyPolicy = lazy(() => import('@/views/privacy-policy/PrivacyPolicy'));
const Disclaimer = lazy(() => import('@/views/disclaimer/Disclaimer'));
const TermAndConditions = lazy(() => import('@/views/term-and-conditions/TermAndConditions'));
const NotFound = lazy(() => import('@/views/errors/404Page'));
const LoadingLayout = lazy(() => import('@/components/layouts/loading-layout'));

export default function AppRouterAccess(props: IAppRouterAccessProps) {
  const { isFirstLoading } = useAppSelector((state) => state.LayoutReducer);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            index
            element={
              <DefaultLayout>
                {isFirstLoading ? (
                  <LazyLoadComponent>
                    <LoadingLayout seconds={1}>
                      <LazyLoadComponent>
                        <Home />
                      </LazyLoadComponent>
                    </LoadingLayout>
                  </LazyLoadComponent>
                ) : (
                  <LazyLoadComponent>
                    <Home />
                  </LazyLoadComponent>
                )}
              </DefaultLayout>
            }
          />
          <Route
            path="/about-us"
            element={
              <DefaultLayout>
                <LazyLoadComponent>
                  <AboutUs />
                </LazyLoadComponent>
              </DefaultLayout>
            }
          />
          <Route
            path="/white-paper"
            element={
              <DefaultLayout>
                <LazyLoadComponent>
                  <WhitePaper />
                </LazyLoadComponent>
              </DefaultLayout>
            }
          />
          <Route
            path="/game-deck"
            element={
              <DefaultLayout>
                <LazyLoadComponent>
                  <GameDeck />
                </LazyLoadComponent>
              </DefaultLayout>
            }
          />
          <Route
            path="/stacking"
            element={
              <DefaultLayout>
                <LazyLoadComponent>
                  <Stacking />
                </LazyLoadComponent>
              </DefaultLayout>
            }
          />
          <Route
            path="/our-team"
            element={
              <DefaultLayout>
                <LazyLoadComponent>
                  <OurTeam />
                </LazyLoadComponent>
              </DefaultLayout>
            }
          />
          <Route
            path="/guide"
            element={
              <DefaultLayout>
                <LazyLoadComponent>
                  <Guide />
                </LazyLoadComponent>
              </DefaultLayout>
            }
          />
          <Route
            path="/help&support"
            element={
              <DefaultLayout>
                <LazyLoadComponent>
                  <HelpAndSupport />
                </LazyLoadComponent>
              </DefaultLayout>
            }
          />
          <Route
            path="/faq"
            element={
              <DefaultLayout>
                <LazyLoadComponent>
                  <FAQ />
                </LazyLoadComponent>
              </DefaultLayout>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <DefaultLayout>
                <LazyLoadComponent>
                  <PrivacyPolicy />
                </LazyLoadComponent>
              </DefaultLayout>
            }
          />
          <Route
            path="/disclaimer"
            element={
              <DefaultLayout>
                <LazyLoadComponent>
                  <Disclaimer />
                </LazyLoadComponent>
              </DefaultLayout>
            }
          />
          <Route
            path="/term&condition"
            element={
              <DefaultLayout>
                <LazyLoadComponent>
                  <TermAndConditions />
                </LazyLoadComponent>
              </DefaultLayout>
            }
          />
          {/* No other routes match */}
          <Route
            path="*"
            element={
              <LazyLoadComponent>
                <NotFound />
              </LazyLoadComponent>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export interface ILazyLoadComponent {
  children: ReactNode;
}
export const LazyLoadComponent = ({ children }: ILazyLoadComponent) => {
  return (
    <Suspense
      fallback={
        <Box
          component="div"
          sx={{
            minHeight: '100vh',
            background: 'linear-gradient(#34263b, #01091f)',
          }}
        ></Box>
      }
    >
      {children}
    </Suspense>
  );
};

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
