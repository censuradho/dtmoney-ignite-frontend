
import RootRoutes from 'routes'

import ThemeProvider from 'theme'

function App() {
  
  return (
    <ThemeProvider> 
      <RootRoutes />
    </ThemeProvider>
  );
}

export default App;
