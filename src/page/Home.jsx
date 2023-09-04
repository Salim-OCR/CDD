import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main id="home">
        <section id="presentation">
          <h2>
            Bienvenue sur Classic Dream Déco - Où l'Imagination Prend Vie !
          </h2>
          <p>
            Plongez dans un univers enchanté dédié à la création de chambres
            d'enfants exceptionnelles. Chez C.D.D, nous croyons en la magie de
            l'enfance et en la transformation des espaces en rêves éveillés.
            Explorez notre collection soigneusement sélectionnée de meubles, de
            décorations et de jouets pour offrir à vos petits une expérience
            inoubliable.
          </p>
          <p>
            Notre mission est de vous accompagner dans la création d'espaces où
            les histoires prennent vie, où les aventures commencent et où
            l'apprentissage est infini. Chaque meuble, chaque détail est pensé
            pour susciter l'inspiration et émerveiller les esprits curieux.
            Grâce à notre partenariat avec Amazon, votre expérience de
            magasinage est pratique et sécurisée. Joignez-vous à nous pour
            offrir à vos enfants le cadeau d'une chambre qui reflète leur
            personnalité unique et qui les transporte vers des mondes
            fantastiques.
          </p>
        </section>

        <section id="links">
          <ul>
            <li>
              <Link to="/lits">Lits Enchantés</Link> : Découvrez notre gamme
              de lits créatifs conçus pour stimuler l'imagination et garantir
              des nuits remplies de rêves magiques.
            </li>
            <li>
              <Link to="/meubles">Meubles Enfants</Link> : Explorez notre
              sélection de meubles fonctionnels et esthétiques qui s'adaptent
              parfaitement aux besoins changeants de vos enfants.
            </li>
            <li>
              <Link to="/jouets">Jouets Ludiques</Link> : Laissez les rires et
              les aventures remplir leur monde grâce à nos jouets qui
              encouragent le jeu créatif et le développement.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Home;
