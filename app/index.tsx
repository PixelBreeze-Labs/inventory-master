import { Redirect } from 'expo-router';
import { useAuth } from '../hooks/useAuth';

if (__DEV__) {
    //@ts-ignore
        import('../reactotron').then(() =>
          console.log('Reactotron Configured')
        );
  }
    
  
export default function Index() {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return null; // Or return a loading component
    }

    // const isAuthenticated = true;

    if (isAuthenticated) {
        return <Redirect href="/dashboard" />;
    }

    return <Redirect href="/login" />;
}