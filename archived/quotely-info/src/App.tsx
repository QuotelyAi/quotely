import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import SessionTimeout from './components/auth/SessionTimeout';

// Public pages
import Home from './pages/Home';
import StatesList from './pages/StatesList';
import StateDetail from './pages/StateDetail';
import CityDetail from './pages/CityDetail';
import AgentProfile from './pages/AgentProfile';
import InsuranceRequirements from './pages/InsuranceRequirements';
import StateRequirements from './pages/StateRequirements';
import AgentLicensing from './pages/AgentLicensing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Accessibility from './pages/Accessibility';
import Demo from './pages/Demo';

// Auth pages
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Callback from './pages/auth/Callback';

// Dashboard pages
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/dashboard/Profile';
import AgencySettings from './pages/dashboard/AgencySettings';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkipLink from './components/SkipLink';
import AccessibilityWidget from './components/AccessibilityWidget';
import CookieConsent from './components/CookieConsent';

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SkipLink />
      <Navbar />
      <main id="main-content" className="flex-grow" role="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SessionTimeout />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Home page has its own Navbar */}
          <Route path="/" element={<Home />} />

          {/* Demo page has its own Navbar */}
          <Route path="/demo" element={<Demo />} />

          {/* Auth routes */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          <Route path="/auth/callback" element={<Callback />} />

          {/* Protected dashboard routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/profile"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Profile />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/agency"
            element={
              <ProtectedRoute requiredPermissions={['agency:settings']}>
                <DashboardLayout>
                  <AgencySettings />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Agent directory routes */}
          <Route
            path="/agents"
            element={
              <AppLayout>
                <StatesList />
              </AppLayout>
            }
          />
          <Route
            path="/agents/:stateCode"
            element={
              <AppLayout>
                <StateDetail />
              </AppLayout>
            }
          />
          <Route
            path="/agents/:stateCode/:citySlug"
            element={
              <AppLayout>
                <CityDetail />
              </AppLayout>
            }
          />
          <Route
            path="/agents/:stateCode/:citySlug/:agentSlug"
            element={
              <AppLayout>
                <AgentProfile />
              </AppLayout>
            }
          />

          {/* Insurance requirements routes */}
          <Route
            path="/requirements"
            element={
              <AppLayout>
                <InsuranceRequirements />
              </AppLayout>
            }
          />
          <Route
            path="/requirements/:stateCode"
            element={
              <AppLayout>
                <StateRequirements />
              </AppLayout>
            }
          />
          <Route
            path="/licensing"
            element={
              <AppLayout>
                <AgentLicensing />
              </AppLayout>
            }
          />

          {/* Legal pages */}
          <Route
            path="/privacy"
            element={
              <AppLayout>
                <PrivacyPolicy />
              </AppLayout>
            }
          />
          <Route
            path="/terms"
            element={
              <AppLayout>
                <TermsOfService />
              </AppLayout>
            }
          />
          <Route
            path="/accessibility"
            element={
              <AppLayout>
                <Accessibility />
              </AppLayout>
            }
          />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
