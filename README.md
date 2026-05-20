# 🍰 Site de Recettes - Équipe

Projet de formation **Git + GitHub + Travail en équipe** (Noblette, Omega, Gaella).

## Règles du projet (à respecter absolument)

### Branches
- `main` → Version stable (production)
- `develop` → Branche d'intégration (on travaille dessus)
- `feature/nom-fonction` → Pour chaque nouvelle fonctionnalité
- `bugfix/nom` → Pour les corrections

### Workflow
1. Toujours `git pull origin develop` avant de commencer à travailler.
2. Créer une branche : `git checkout -b feature/ma-fonction`
3. Faire des commits clairs et fréquents.
4. Pousser sa branche et **créer une Pull Request** vers `develop`.
5. **Noblette** (Chef de projet) review et merge.
6. Après merge → tout le monde fait `git pull origin develop`.

### Messages de commit (exemples)
- `feat: ajout de la page recette gâteau au chocolat`
- `style: amélioration responsive des cartes`
- `fix: correction du filtre par catégorie`
- `docs: mise à jour README`

## Structure du projet