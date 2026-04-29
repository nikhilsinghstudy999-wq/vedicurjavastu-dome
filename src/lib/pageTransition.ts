/**
 * Client‑side page transition utility.
 * Sets a flag in sessionStorage before navigation so the destination
 * page knows to show the loader.
 */
const TRANSITION_KEY = 'vedicurja_page_transition';

export function markTransition(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(TRANSITION_KEY, 'true');
  }
}

export function consumeTransition(): boolean {
  if (typeof window === 'undefined') return false;
  const val = sessionStorage.getItem(TRANSITION_KEY);
  if (val === 'true') {
    sessionStorage.removeItem(TRANSITION_KEY);
    return true;
  }
  return false;
}
