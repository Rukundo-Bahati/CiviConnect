
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";

import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";

// Public pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import SubmitComplaint from "./pages/SubmitComplaint";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import LearnMore from "./pages/LearnMore";
import NotFound from "./pages/NotFound";

// Admin pages
import Admin from "./pages/Admin";
import ComplaintsAdmin from "./pages/admin/Complaints";
import CitizensAdmin from "./pages/admin/Citizens";
import PreferencesAdmin from "./pages/admin/Preferences";
import AccountAdmin from "./pages/admin/Account";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" defaultLanguage="en">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="submit" element={<SubmitComplaint />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
              <Route path="learn-more" element={<LearnMore />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout><Admin /></AdminLayout>} />
            <Route path="/admin/complaints" element={<AdminLayout><ComplaintsAdmin /></AdminLayout>} />
            <Route path="/admin/citizens" element={<AdminLayout><CitizensAdmin /></AdminLayout>} />
            <Route path="/admin/preferences" element={<AdminLayout><PreferencesAdmin /></AdminLayout>} />
            <Route path="/admin/account" element={<AdminLayout><AccountAdmin /></AdminLayout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
