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
    }, {
        label: 'Administração',
        to: '/administracao'
    }

    ]



    return (
        <div className={style.module}>
            <ul    >
                {rotas.map((rota, index) => (
                    <li key={index}>
                        <Link to={rota.to}>
                            {rota.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <ol>
                <li><a href="#p1">Ir para o primeiro parágrafo!</a></li>
                <li><a href="#p2">Ir para o segundo parágrafo!</a></li>
            </ol>

            <h3>Meu artigo divertido</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!vLorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim! Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident aspernatur quae facere saepe ea eaque tempora quo? Ratione cupiditate excepturi similique animi praesentium possimus magni laboriosam obcaecati maiores enim!
            <p id="p1">Você pode definir este parágrafo como alvo usando um fragmento de URL.</p>
            <p id="p2">Esse é <i>outro parágrafo</i>, também acessível
                pelos links acima.</p>

        </div>
    )
}