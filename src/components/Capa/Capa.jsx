import IconScroll from '../../assets/svg/scroll-down-arrow.svg';
import './capa.css';

export default function Capa() {
    return (
        <section className="bg-capa">
            <div className="container content">
                <h1 className='titulo'>
                    <span className="linha1 fade-in">A MAIOR FACULDADE</span>
                    <span className="linha2 fade-in-delay">DE TECNOLOGIA</span>
                </h1>

                <div className="text-area">
                    <p className='fade-in-delay2 paragrafo'>
                        Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade que prepara profissionais para o futuro, com um ensino prático, professores atuantes no mercado e desafios reais que conectam os alunos às grandes empresas.
                    </p>
                </div>

                <div className="scroll-down fade-scroll">
                    <h3>SCROLL DOWN</h3>
                    <a href="#educacao-tech">
                        <img src={IconScroll} alt="ícone de scroll down" />
                    </a>
                </div>
            </div>
        </section>


    );
}


