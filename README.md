# Commandes:

`npm dev`
Ouvrir `http://localhost:5173`

# Test des différents profils

Profil complet classique: `http://localhost:5173/profil/12`
Profil où le champ score n'est pas présent / erroné: `http://localhost:5173/profil/18`
Profil où plusieur champs sont erroné pour tester le formatage des données avant l'affichage: `http://localhost:5173/profil/99`, `http://localhost:5173/profil/100`

# Formatage des données

- Le formatage des données se fait dans les serializers
  Ce sont des fonctions qui formattent, reformule les réponses api directement dans les fonctions asynchrones avant toutes entrée dans React.
  Leur rôles est de s'assurer que la donnée reçu par React existe bien et ne pas afficher des Nan, undefined ou encore des erreurs silencieuses

# Switch mode: Mock / API

- Le switch entre le mode API et le mode mock se fait via la variable d'environnement VITE_ENVIRONNEMENT qui peut prendre les valeurs suivante: api, mock
- Lorsqu'elle vaut mock alors les requêtes fetch se feront directement sur les fichiers json statique dans /public/data du front.
- Lorsqu'elle vaut api alors les requêtes se feront sur `http://localhost:3000` qui correspond à l'api.
