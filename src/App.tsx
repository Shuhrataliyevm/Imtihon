import { Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import About from './pages/About/about';
import Register from './pages/Register/register';
import Login from './pages/Login/login';
import Error from './pages/Error/error';
import Home from './pages/Home/home';
import LibraryDetail from './pages/LibraryDetail/libraryDetail';
import LibraryProfile from './pages/LibraryProfile/libraryProfile';
const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/login" />;
    }
    return <>{children}</>;
};


const App = () => {

    const content = (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <ProtectedRoute>
                            <About />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/librarydetail"
                    element={
                        <ProtectedRoute>
                            <LibraryDetail />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/libraryprofile"
                    element={
                        <ProtectedRoute>
                            <LibraryProfile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/error"
                    element={
                        <ProtectedRoute>
                            <Error />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/error" />} />
            </Routes>
        </QueryClientProvider>
    );

    return content;
};

export default App;