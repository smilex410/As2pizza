# L'As 2 Pizz — refonte du site

Maquette fonctionnelle du nouveau site de **L'As 2 Pizz**, pizzeria au 6 Place Alsace-Lorraine, 07100 Annonay.

## Lancer en local

```bash
python -m http.server 5173
# puis http://localhost:5173/
```

Aucune dépendance, aucun build : HTML / CSS / JS natif.

## Structure

```
index.html              page unique
assets/css/style.css    design system (couleurs, typo, composants)
assets/js/main.js       carte dynamique, filtres, menu mobile, animations
assets/img/             photos + logo
```

## Contenu repris du site actuel

- Les 29 pizzas (base tomate + base crème) avec les deux tailles 33 / 40 cm et les prix exacts
- Les 2 salades avec les tarifs sur place / à emporter
- Tiramisu, boissons, plaque à pizza 60×40
- Offre « 3 pizzas achetées = la 4ᵉ offerte »
- Horaires, adresse, les deux numéros, Facebook, Instagram, itinéraire Google Maps

## Ce que la refonte apporte

| Point | Avant | Maintenant |
|---|---|---|
| Appeler | numéro noyé dans la page | bouton d'appel fixe en haut + barre d'appel collée en bas sur mobile |
| La carte | tableaux bruts illisibles sur téléphone | carte filtrable par catégorie, bascule 33 / 40 cm, lisible à une main |
| Mobile | mise en page cassée | conçu mobile d'abord, testé de 390 px à 1440 px |
| Référencement | titres génériques | title/description travaillés + données structurées `Restaurant` (horaires, adresse, téléphone) pour Google |
| Accessibilité | — | contrastes AA, navigation clavier, `prefers-reduced-motion`, libellés lecteur d'écran |

## À faire avant mise en ligne

1. **Remplacer les photos** par de vraies photos des pizzas de la maison — les visuels actuels sont des photos libres de droits (Unsplash), c'est le point qui fera le plus de différence.
2. Confirmer les **horaires du vendredi** (le site actuel indique 11h–14h & 18h–22h en semaine *et* 18h–22h le vendredi — à trancher avec le gérant).
3. Ajouter les mentions légales et, si besoin, la liste des allergènes.
4. Brancher un vrai nom de domaine et mettre l'URL réelle dans les balises `og:` et le bloc JSON-LD.
