# ⚡ Gym Addict - Hybrid Tracker

**Gym Addict** est une application web de suivi d'entraînement "Hybrid Athlete", conçue pour les pratiquants qui mélangent musculation intense et course à pied. L'accent est mis sur l'expérience utilisateur, la motivation par la donnée et la simplicité de saisie.

---

## 🚀 Fonctionnalités Actuelles

L'application est déjà pleinement fonctionnelle et permet de gérer ses entraînements de A à Z :

### 📋 Gestion de l'Entraînement
- **Programme Hybride Pré-intégré** : Un planning complet alternant séances de musculation (Push, Pull, Legs, Dos/Épaules) et séances de course (Fractionné HIIT, Tempo, Endurance).
- **Suivi Précis des Séries** : Interface intuitive pour saisir les poids et les répétitions en un clic.
- **Détection de Records (PR)** : Alerte visuelle immédiate ("🏆 NOUVEAU RECORD") lorsque vous dépassez vos performances précédentes sur un exercice.
- **Minuteur de Repos** : Chronomètre intégré avec ajout rapide de temps (+30s) pour optimiser la récupération entre les séries.
- **Barre de Progression** : Visualisation en temps réel de l'avancement de votre séance.

## 1. Optimisation de l'Entraînement
- **Mémos "Réglages Machine" & "Ressenti"** : Un champ de texte sous chaque exercice pour noter vos réglages (ex: "Siège cran 4") ou votre RPE (échelle d'effort de 1 à 10).
- **Calculateur de 1RM Automatique** : Calcul de votre charge maximale estimée (formule de Brzycki) dès qu'un record est battu, avec affichage des pourcentages (70%, 80%, etc.).
- **Warm-up Calculator** : Calcul automatique des barres d'échauffement en un clic (ex: 50% x 10, 70% x 5).

## 2. Visualisation de Données Avancée
- **Heatmap de Régularité** : Un calendrier de type GitHub avec des carrés de couleur dont l'intensité varie selon la charge de travail de la séance.
- **Graphique de Tonnage (Chart.js)** : Visualisation de la courbe de "Surcharge Progressive" via l'évolution de votre tonnage total au fil des semaines.

## 3. Gamification et Force Relative
- **Ratio de Force "Bodyweight"** : Calcul automatique de vos performances en fonction de votre poids de corps (ex: "Squat à 1.5x BW").
- **Équivalences de Tonnage "Fun"** : Conversion de votre volume total de séance en objets réels (ex: "Aujourd'hui, vous avez soulevé l'équivalent d'un éléphant d'Afrique !").

## 4. Gestion de la Récupération
- **Readiness Score** : Questionnaire rapide avant séance (Sommeil, Stress, Douleurs sur 5) pour évaluer votre état de forme.
- **Auto-Régulation** : Suggestion automatique de baisse de charge (-10%) si votre score de récupération est trop bas.


### 📊 Statistiques et Motivation
- **Système de "Streak" (🔥)** : Compteur de jours consécutifs d'activité pour encourager la régularité.
- **Score de Régularité** : Calcul du pourcentage d'assiduité sur les 7 derniers jours.
- **Volume par Muscle** : Répartition automatique du tonnage soulevé par groupe musculaire (Pecs, Dos, Jambes, etc.).
- **Historique** : Accès rapide aux performances passées pour chaque exercice.

### 🛠️ Technique
- **Mode Offline (LocalStorage)** : Toutes les données sont stockées localement sur votre navigateur. Pas besoin de connexion internet constante ou de compte.
- **Interface Mobile-First** : Design responsive avec "Drawers" (tiroirs) pour une navigation fluide sur smartphone.
- **Tags d'Exercices** : Classification claire (Compound, Isolation, Optionnel, Superset).

## 📦 Installation

L'application ne nécessite aucune installation de serveur. Elle utilise **HTML5, CSS3 et JavaScript pur**.

1. Téléchargez les fichiers `index.html`, `style.css` et `script.js`.
2. Ouvrez `index.html` dans n'importe quel navigateur moderne.
3. (Optionnel) "Ajoutez à l'écran d'accueil" sur votre smartphone pour l'utiliser comme une application native.

---

## 🧬 Technologies Utilisées
- **HTML5 / CSS3** (Variables CSS, Flexbox, Grid)
- **Vanilla JavaScript** (ES6+)
- **Chart.js** (pour les futurs graphiques)
- **Google Fonts** (Rajdhani, JetBrains Mono, Nunito)