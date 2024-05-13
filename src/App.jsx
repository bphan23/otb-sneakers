import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Inventory from "./pages/Inventory";
import Support from "./pages/SupportPage";
import Orders from "./pages/Orders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import PreHomePage from "./pages/PreHomePage";

// Sets up cache behind the scenes
// data will automatically become stale --> so data is automatically fetched
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {/* wrap routes with AppLayout */}
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="support" element={<Support />} />
            {/* add more routes */}
            <Route path="orders" element={<Orders />} />
          </Route>

          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<PreHomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="create-account" element={<CreateAccountPage />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duation: 5000,
          },
          style: {
            fontSize: "1.8rem",
            maxWidth: "50rem",
            padding: "1.6rem 2.4rem",
            backgroundColor: "",
            color: "",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
