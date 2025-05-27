import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <img src='/imagens/fb.png' alt='icon redes' />
                        </a>
                    </li>
                    <li>
                        <a href='x.com' target='_blank'>
                            <img src='/imagens/tw.png' alt='icon redes' />
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com' target='_blank'>
                            <img src='/imagens/ig.png' alt='icon redes' />
                        </a>
                    </li>
                </ul>
                <div className='redes'>
                </div>
            </section>
            <section>
                <img src='/imagens/logo.png' alt='logo' />
            </section>
            <section>
                <p>Desenvolvido por Guxxis.</p>
            </section>
        </footer>
    )
}

export default Footer