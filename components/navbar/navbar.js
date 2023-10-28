
/*comentario */
import React from "react";
import styles from "./navbar.module.scss"; // Corrija a importação

export default function Navbar() {
    return (
        <header className={styles.header}>
          <nav className={styles.nav}>
    
            <a href="/" className={styles.home}>
              <img src="./imgs/Icones/AlgarIcon.png" alt="Home" />
            </a>
   
            <section className={styles.pesquisa}>
              <form className={styles.barra_pesquisa}>
                <input type="text" className={styles.barra_texto} placeholder="" />
                <a href="#" className={styles.botao_pesquisa}>
                  <img src="./imgs/Icones/lupa.png" ealt="Pesquisar" />
                </a>
              </form>
            </section>        
  
            <ul className={styles.menu}>
              <li className={styles.li}><a href="/contato" className={styles.botao_nav} >Contatos</a></li>
              <li className={styles.li}><a href="/home_logado" className={styles.botao_nav}>Vagas</a></li>
            </ul>
  
          </nav>
        </header>
      );
}