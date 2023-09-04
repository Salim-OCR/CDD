import React from "react";
import NavigationLink from "../components/NavigationLink";
// import LogoLink from "../components/LogoLink";
import ProductCard from "../components/ProductCard"; // Créez ce composant pour afficher les produits

const Jouets = () => {
  return (
    <>
      <NavigationLink />
      <header id="header-jouets">
        <h2>Jouets Ludiques</h2>
        <p>
          Jouets Ludiques : Laissez l'Imagination Prendre le Vol Découvrez notre
          sélection de jouets conçus pour éveiller la créativité, encourager le
          jeu actif et offrir des heures de divertissement aux enfants de tous
          âges.
        </p>
        <p>
          Créez des Aventures Ludiques Chaque jouet que nous proposons est un
          moyen d'ouvrir la porte à de nouvelles aventures, de renforcer les
          compétences et de laisser l'imagination s'épanouir. Explorez notre
          collection et offrez à vos enfants des expériences qui les feront
          grandir.
        </p>
        {/* <LogoLink /> */}
      </header>
      <main id="pageJouets">
        <section className="collections">
          <h2>Nos Collections :</h2>
          <h3>Entre 0 - 6 mois</h3>
          <ul>
            <ProductCard
              title="Lit Super Héros"
              description="Transformez la chambre de votre petite princesse en un véritable royaume enchanté avec cette cabane lit aux couleurs douces et aux détails royaux."
              amazonLink="votre-lien-d-affiliation-princesse-ici"
            />
            <ProductCard
              title="Lit Super Héros"
              description="Transformez la chambre de votre petite princesse en un véritable royaume enchanté avec cette cabane lit aux couleurs douces et aux détails royaux."
              amazonLink="votre-lien-d-affiliation-princesse-ici"
            />
            <ProductCard
              title="Lit Super Héros"
              description="Transformez la chambre de votre petite princesse en un véritable royaume enchanté avec cette cabane lit aux couleurs douces et aux détails royaux."
              amazonLink="votre-lien-d-affiliation-princesse-ici"
            />
          </ul>
        </section>
        <section className="collections">
          <h3>Entre 6 mois - 12 mois</h3>
          <ul>
            <ProductCard
              title="Lit Super Héros"
              description="Transformez la chambre de votre petite princesse en un véritable royaume enchanté avec cette cabane lit aux couleurs douces et aux détails royaux."
              amazonLink="votre-lien-d-affiliation-princesse-ici"
            />
            <ProductCard
              title="Lit Super Héros"
              description="Transformez la chambre de votre petite princesse en un véritable royaume enchanté avec cette cabane lit aux couleurs douces et aux détails royaux."
              amazonLink="votre-lien-d-affiliation-princesse-ici"
            />
            <ProductCard
              title="Lit Super Héros"
              description="Transformez la chambre de votre petite princesse en un véritable royaume enchanté avec cette cabane lit aux couleurs douces et aux détails royaux."
              amazonLink="votre-lien-d-affiliation-princesse-ici"
            />
          </ul>
        </section>
        <section className="collections">
          <h3>Entre 12 mois - 24 mois</h3>
          <ul>
            <ProductCard
              title="Lit Super Héros"
              description="Transformez la chambre de votre petite princesse en un véritable royaume enchanté avec cette cabane lit aux couleurs douces et aux détails royaux."
              amazonLink="votre-lien-d-affiliation-princesse-ici"
            />
            <ProductCard
              title="Lit Super Héros"
              description="Transformez la chambre de votre petite princesse en un véritable royaume enchanté avec cette cabane lit aux couleurs douces et aux détails royaux."
              amazonLink="votre-lien-d-affiliation-princesse-ici"
            />
            <ProductCard
              title="Lit Super Héros"
              description="Transformez la chambre de votre petite princesse en un véritable royaume enchanté avec cette cabane lit aux couleurs douces et aux détails royaux."
              amazonLink="votre-lien-d-affiliation-princesse-ici"
            />
          </ul>
        </section>

        <section className="accessoires">
          <h2>Accesoires: </h2>
          <ul>
            <ProductCard
              title="Lit Super Héros"
              description="Transformez la chambre de votre petite princesse en un véritable royaume enchanté avec cette cabane lit aux couleurs douces et aux détails royaux."
              amazonLink="votre-lien-d-affiliation-princesse-ici"
            />{" "}
            <ProductCard
              title="Lit Super Héros"
              description="Transformez la chambre de votre petite princesse en un véritable royaume enchanté avec cette cabane lit aux couleurs douces et aux détails royaux."
              amazonLink="votre-lien-d-affiliation-princesse-ici"
            />{" "}
            <ProductCard
              title="Lit Super Héros"
              description="Transformez la chambre de votre petite princesse en un véritable royaume enchanté avec cette cabane lit aux couleurs douces et aux détails royaux."
              amazonLink="votre-lien-d-affiliation-princesse-ici"
            />
          </ul>
        </section>
      </main>
    </>
  );
};

export default Jouets;
