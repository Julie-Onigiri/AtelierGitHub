# Atelier GitHub
Projet de spécialisation React  réalisé en cours de formation chez O'Clock
## Description
Le projet consiste à créer une application React qui utilise l'API de GitHub pour rechercher des dépôts (repositories). Les utilisateurs peuvent entrer le nom d'un dépôt qu'ils souhaitent rechercher, et l'application affichera les résultats sous forme de cartes.

## Objectifs
1. **Interagir avec l'API GitHub** : Utiliser l'API GitHub à l'adresse `https://api.github.com/search/repositories?q=REPOACHERCHER` pour récupérer des dépôts en fonction de la recherche de l'utilisateur.
2. **Créer des composants React** :
   - `<SearchBar />` : pour le formulaire de recherche.
   - `<ReposResults />` : pour afficher les dépôts correspondant à la recherche.
   - `<Message />` : pour afficher les erreurs et informations.
3. **Gérer le comportement de recherche** :
   - Lors de la soumission du formulaire (en appuyant sur Entrée), effectuer une requête pour récupérer les résultats.
   - Afficher les résultats sous forme de cartes en dessous de la barre de recherche.
4. **Utilisation de Semantic UI** (optionnel) : Intégrer Semantic UI pour faciliter la mise en forme des composants.
5. **Utilisation d'Axios** : Pour effectuer des requêtes HTTP vers l'API GitHub et gérer les résultats dans l'état de l'application.
6. **Tester avec des données statiques** : Commencer par utiliser des données fournies dans le dossier `data` pour tester l'affichage des composants.
