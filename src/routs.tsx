import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu';
import PaginaInicial from './pages';
import NotFound from './pages/NotFound';
import Prato from './pages/Prato';
import Restaurante from './pages/Restaurante';
export default function RotasWeb() {
    return (
        <main>
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element={<PaginaInicial />} />
                    <Route path='/prato' element={<Prato />} />
                    <Route path='restaurante' element={<Restaurante />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>

        </main>
    )
}