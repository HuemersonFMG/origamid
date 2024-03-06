import styles from './Contato.module.css';
import foto from '../img/01.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>

        <ul className={styles.dados}>
          <li>contato@origamid.com</li>
          <li>(21) 98765-4321</li>
          <li>Rua Lauro Müller, 116, 32º</li>

        </ul>
      </div>
    </section>
  )
}

export default Contato
