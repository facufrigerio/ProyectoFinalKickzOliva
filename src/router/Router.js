import NavBar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Cart from '../components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/producto/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                {/* <Route path="/order" element={< Order />} /> */}
            </Routes>
        </BrowserRouter>
    )
}