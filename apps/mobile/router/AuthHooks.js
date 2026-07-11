import { useAuth } from '@packages/shared/contexts/auth';

export function useIsSignedIn() {
  const { isLoggedIn } = useAuth();
  return !!isLoggedIn;
}

export function useIsSignedOut() {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn;
}
