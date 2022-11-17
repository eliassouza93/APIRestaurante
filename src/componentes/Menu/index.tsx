import { Link } from "react-router-dom"
import style from './Menu.module.scss'

export default function Menu() {
    const rotas = [{
        label: 'Inicio',
        to: '/'
    }, {
        label: 'Prato',
        to: '/prato'
    }, {
        label: 'Restaurante',
        to: '/restaurante'
    },{
        label: 'Administração',
        to:'/administracao'
    }

    ]

    return (
        <div className={style.module}>
            <ul >
                {rotas.map((rota, index) => (
                    <li key={index}>
                        <Link to={rota.to}>
                            {rota.label}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}