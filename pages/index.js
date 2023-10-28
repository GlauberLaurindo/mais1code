import styles from './index.module.scss';

export default function Home() {
    return <>
        <div className={styles['principal']}>
            <div className={styles['corpo']}>
                <section className={styles['ads']}>
                    <img src='./imgs/Icones/banner.jpg' />
                    <input type='button' value="Inscreva-se" />
                </section>

                <section className={styles['welcome']}>
                    <h2>Bem vindo ao portal Conexão Futuro!</h2>
                    <p>Estamos muito felizes em tê-lo conosco! Este portal foi criado para ajudá-los a se conectar com os seus colegas, tutores e novas oportunidades de trabalho na área de programação.</p>
                    <p>Aqui, você encontrará uma comunidade de jovens programadores que estão todos comprometidos em aprender e crescer. Você também terá acesso a uma variedade de recursos, como cursos, tutoriais e eventos, que o ajudarão a desenvolver suas habilidades de programação.</p>
                    <p>Além disso, você poderá se conectar com tutores experientes que podem ajudá-lo a superar os desafios e aprender coisas novas. Você também poderar encontrar novas oportunidades de trabalho na área de programação, através de vagas publicadas por empresas parceiras.</p>
                    <p>Estamos confiantes de que este portal será uma ferramenta valiosa para você em sua jornada como programador. Esperamos que você aproveite ao máximo todos os recursos que ele oferece.</p>
                </section>

                <section className={styles['depoimentos']}>
                    <h2>Continue aprendendo, obtendo inspirações de seus colegas e compartilhando um pouco da sua jornada conosco.</h2>
                    <p>Veja os comentátios de alunos que utilizam a plataforma:</p>

                    <div className={styles['depoimento']}>
                        <img src="./imgs/Icones/osmar-melo.jpg" />
                        <h3>Osmar Melo</h3>
                        <p>"Estou muito animado com o futuro! Estou sempre aprendendo coisas novas e estou sempre me desafiando. Estou muito inspirado pelos relatos no blog e pelas vagas legais postadas no portal. Vejo que há muitas oportunidades na área da programação e estou confiante e disposto. Estou muito animado para começar minha carreira na programação e estou ansioso para ver o que o futuro me reserva!"</p>
                    </div><br/>

                    <div className={styles['depoimento']}>
                        <img src="./imgs/Icones/ana-paula.jpg" />
                        <h3>Ana Paula</h3>
                        <p>"Estou muito feliz por ter encontrado este portal. Foi uma ótima maneira de me conectar com meus colegas, tutores e oportunidades do mercado. Aprendi muito com meus colegas e tutores, e consegui encontrar um emprego na área da programação graças às oportunidades que encontrei aqui. Estou muito grata por poder participado desta grande jornada!"</p>
                    </div><br/>

                    <div className={styles['depoimento']}>
                        <img src="./imgs/Icones/elma-maria.jpg" />
                        <h3>Elma Maria</h3>
                        <p>"Estou muito feliz por poder continuar a ter uma conexão com meus colegas, ex-tutores e oportunidades do mercado. Este portal é uma ótima maneira de compartilhar minhas conquistas e ver as conquistas de todos da minha conexão. Estou aprendendo muito com todos e estou muito animada com o futuro da minha carreira na programação."</p>
                    </div>
                </section>
            </div>
        </div>

    </>

}