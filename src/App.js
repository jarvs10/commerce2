import { GlobalStyle } from "./globalStyles";
import { BrowserRouter } from 'react-router-dom'
import Navigation from "./pages/Navigation";
import { CartContextStore } from "./contexts/CartContext";
import { UserContextStore } from "./contexts/UserContext";

function App() {

  return (
    <BrowserRouter className="App">
      <UserContextStore>
        <CartContextStore>
          <GlobalStyle />
          <Navigation />
        </CartContextStore>
      </UserContextStore>
    </BrowserRouter>
  );
}

export default App;
