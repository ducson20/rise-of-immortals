import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/utils/theme';

import AppRouterAccess from './AppRouterAccess';

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppRouterAccess />
      </ThemeProvider>
    </div>
  );
}
