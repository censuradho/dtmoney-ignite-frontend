
import RootRoutes from 'routes'

import ThemeProvider from 'theme'
import { Notification } from 'Provider/Notifications';

function App() {
  
  return (
    <ThemeProvider> 
      <RootRoutes />
      <Notification />
    </ThemeProvider>
  );
}

export default App;
