import React from "react";
import NavigationLink from "../components/NavigationLink";
// import LogoLink from "../components/LogoLink";
import ProductCard from "../components/ProductCard"; // Créez ce composant pour afficher les produits

const Meubles = () => {
  return (
    <>
      <NavigationLink />
      <header id="header-meubles">
        <h2>Meubles Enfants</h2>
        <p>
          Créez des Espaces Magiques Explorez notre gamme de meubles
          spécialement conçus pour les petites étoiles. Chaque meuble est une
          invitation à créer des espaces magiques où l'apprentissage et le jeu
          se rejoignent.
        </p>
        <p>
          Chaque meuble que nous proposons est une pièce du puzzle pour créer
          une chambre qui incite à l'apprentissage, au jeu et à la créativité.
          Découvrez notre collection et transformez chaque coin en une aventure
          enchanteresse.
        </p>
        {/* <LogoLink /> */}
      </header>
      <main id="pageMeubles">
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

export default Meubles;
