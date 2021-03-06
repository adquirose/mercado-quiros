import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartContextProvider from "./components/CartContext";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import GlobalStyle from "./theme/globalStyle";
import Styled from "styled-components";
import NotFound from "./components/NotFound";
const AppContainer = Styled.div`
  display:grid;
  grid-template:[top] 100px [row1] 1fr [bottom] / [izq] 1fr [der];
  width:100vw;
  height:100%;
  min-height:100vh;
  background:#CEBCAF;
`;
function App() {
	return (
		<CartContextProvider value={[]}>
			<BrowserRouter>
				<GlobalStyle />
				<AppContainer>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<ItemListContainer />
						</Route>
						<Route exact path="/item/:id">
							<ItemDetailContainer />
						</Route>
						<Route exact path="/category/:id">
							<ItemListContainer />
						</Route>
						<Route exact path="/cart">
							<Cart />
						</Route>
						<Route exact path="/checkout">
							<Checkout />
						</Route>
						<Route path="/">
							<NotFound />
						</Route>
					</Switch>
				</AppContainer>
			</BrowserRouter>
		</CartContextProvider>
	);
}
export default App;
