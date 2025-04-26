import { useState } from 'react';
import ImgModal from '../../assets/imgs/fiap-next.jpg';
import './educacaotech.css';

export default function EducacaoTech() {
    const [isOpen, setIsOpen] = useState(false); 

    return (
        <>
            <section id="educacao-tech" className="bg-educacao container">
                <h1 className='titulo title'>EDUCAÇÃO E TECH</h1>
                <div className="educacao-content">
                    <div className='div-img'>
                        <p className='paragrafo'>
                            A FIAP é muito mais do que uma faculdade de tecnologia, é um verdadeiro ecossistema de inovação e aprendizado. Conhecida por sua abordagem moderna e focada no mercado, a instituição é referência quando se trata de formar profissionais capacitados para os desafios do futuro. Seja na graduação, pós-graduação ou cursos livres, a FIAP entrega um ensino que mistura teoria e prática, preparando os alunos para atuar em empresas de ponta ou até mesmo empreender.
                        </p>

                        <img 
                            src={ImgModal} 
                            alt="Imagem FIAP Next" 
                            className="modal-img"
                            onClick={() => setIsOpen(true)}
                        />

                        <span>Figura 1 - Logotipo da FIAP NEXT</span>
                    </div>

                    <div className='areas-fiap paragrafo'>
                        <p>Com um corpo docente formado por profissionais atuantes no mercado, a FIAP não ensina apenas tecnologia, mas também negócios, inovação e liderança. Seus cursos abrangem diversas áreas, incluindo:</p>

                        <div className="area">
                            <div>
                                <h3><span>/</span> Tecnologia e Desenvolvimento</h3>
                                <ul className='lista listas'>
                                    <li>Desenvolvimento de Software</li>
                                    <li>Inteligência Artificial</li>
                                    <li>Data Science</li>
                                    <li>Cibersegurança</li>
                                </ul>
                            </div>

                            <h3><span>/</span> UX/UI, Marketing Digital</h3>
                            <h3><span>/</span> Metodologias e Gestão</h3>
                        </div>

                        <p>Além disso, a instituição incentiva fortemente o uso dessas metodologias e outras abordagens inovadoras que fazem parte do dia a dia de grandes empresas.</p>
                    </div>
                </div>
            </section>

            {isOpen && (
                <div className="modal" onClick={() => setIsOpen(false)}>
                    <div className="modal-content">
                        <img src={ImgModal} alt="Imagem ampliada FIAP Next" />
                    </div>
                </div>
            )}
        </>
    );
}
