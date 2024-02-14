import ReactGA from 'react-ga';

export const initGA = () => {  
  ReactGA.initialize('G-1Y72TLXX95'); 
}

export const logPageView = () => {  
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}