import React from "react";
import ProductCard from "../components/ProductCard"; // Créez ce composant pour afficher les produits
import NavigationLink from "../components/NavigationLink";
// import LogoLink from "../components/LogoLink";

const Lits = () => {
  return (
    <>
      <NavigationLink />
      <header id="header-lit">
        <h2>Lits Enchantés :</h2>
        <p>
          Où les Rêves Prendront Vie Découvrez notre collection de lits conçus
          pour éveiller l'imagination et transformer les nuits de vos enfants en
          aventures magiques. Chaque lit que nous proposons est un pas de plus
          vers la création d'un espace qui encourage la créativité, le jeu et le
          repos paisible. Parcourez notre collection et offrez à vos enfants des
          nuits remplies de rêves enchantés.
        </p>
        <p>
          Proposition de Lits Thématiques : Explorez une variété de lits
          thématiques qui transportent vos enfants dans des mondes de contes de
          fées, de super-héros, d'aventures spatiales et bien plus encore.
          Chaque lit est une œuvre d'art en soi, conçu pour stimuler la
          créativité et encourager le jeu imaginatif.
        </p>
        {/* <LogoLink /> */}
      </header>
      <main id="pageLits">

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

export default Lits;
