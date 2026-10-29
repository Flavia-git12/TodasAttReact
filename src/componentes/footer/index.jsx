import './index.scss';

export default function Footer(props) {
    return (

        <footer className="footer">
            <p>{props.titulo ?? "© 2026 - Página de Atividades"}</p>
        </footer>
    );
}