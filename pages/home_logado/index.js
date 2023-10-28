import styles from './index.module.scss';

export default function HomeLogado() {
  return (
    <main className={styles['corpo']}>
      <section className={styles['criarPublicacao']}>

        <img src="./imgs/Icones/usuario-de-perfil.png" alt="#" className={styles['fotoPerfil']}/>

        <form action="#" method="get">
          <input type="text" className={styles['publicacao']} size="70" placeholder="Como você deseja se inspirar hoje?" />
        </form>

        <img src="./imgs/Icones/carregar.png" alt="#" className={styles['midia']} />
        <img src="./imgs/Icones/pasta(Verde).png" alt="#" className={styles['vagas']} />

        <input type='submit' value="Postar" className={styles['botaoPostar']}/>

      </section>

      <section className={styles['post']}>
        <div className={styles['usuarioPost']}>
          <img src="./imgs/Icones/usuario-de-perfil.png" alt="#" className={styles['fotoPerfil']}/>
          <span className={styles['nomeUsuario']}>Amanda Nunes</span>
          <p className={styles['horaPost']}>15h</p>
        </div>
        <img src="./imgs/Icones/amanda.png" alt="" className={styles['fotoPost']}/>
        
        <p className={styles['textoPost']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          feugiat, dui vitae fringilla mollis, lacus augue tristique est, id
          venenatis nisl sapien sit amet metus. Maecenas vitae risus nibh.
          Vestibulum ac tempor est. Donec nec ligula metus. Maecenas enim orci,
          faucibus id consectetur quis, luctus a ante. Curabitur odio felis.
        </p>
        <img src="./imgs/Icones/gostar.png" alt="#" className={styles['curtida']}/>
        <img src="./imgs/Icones/Comentar.png" alt="" className={styles['comentar']}/>
        <form action="#" method="get">
          <input type="text" className={styles['comentario']} />
        </form>
        <img src="./imgs/Icones/compartilhar.png" alt="#" className={styles['compartilhar']}/>
      </section>

      <section className={styles['post']}>
        <div className={styles['usuarioPost']}>
          <img src="./imgs/Icones/usuario-de-perfil.png" alt="#" className={styles['fotoPerfil']}/>
          <span className={styles['nomeUsuario']}>Joses Sova Silva</span>
          <p className={styles['horaPost']}>3d</p>
        </div>
        <img src="./imgs/Icones/joses.png" alt="" className={styles['fotoPost2']}/>
        <p className={styles['textoPost']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          feugiat, dui vitae fringilla mollis, lacus augue tristique est, id
          venenatis nisl sapien sit amet metus. Maecenas vitae risus nibh.
          Vestibulum ac tempor est. Donec nec ligula metus. Maecenas enim orci,
          faucibus id consectetur quis, luctus a ante.
        </p>
        <img src="./imgs/Icones/gostar.png" alt="#" className={styles['curtida']}/>
        <img src="./imgs/Icones/Comentar.png" alt="" className={styles['comentar']}/>
        <form action="#" method="get">
          <input type="text" className={styles['comentario']} />
        </form>
        <img src="./imgs/Icones/compartilhar.png" alt="#" className={styles['compartilhar']}/>
      </section>
    </main>
  );
}
