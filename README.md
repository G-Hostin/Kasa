# 🏠 Kasa – Application de location d'appartements entre particuliers

[![Vercel](https://img.shields.io/badge/Déploiement-Vercel-3f51b5?logo=vercel&logoColor=white)](https://kasa-ghostin.vercel.app)

🔗 **Lien vers l’application en ligne** : [kasa-ghostin.vercel.app](https://kasa-ghostin.vercel.app)

Ce projet a été réalisé dans le cadre de ma formation de développeur front-end chez OpenClassrooms.

L'objectif était de refondre entièrement l'interface du site Kasa, une entreprise spécialisée dans la location d'appartements entre particuliers, en utilisant React, Sass et des données fournies sous forme de fichier JSON.

---

## 🚀 Technologies utilisées

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Sass](https://sass-lang.com/)
- Vite (pour initialiser le projet)

Aucune bibliothèque externe n'a été utilisée, conformément aux consignes du projet.

---

## 📦 Fonctionnalités

### Accueil (`/`)

- Affichage dynamique des logements sous forme de cards
- Navigation vers chaque fiche logement en cliquant sur une card

### Fiche logement (`/logement/:id`)

- Slideshow (carrousel) avec flèches, compteur, boucle et défilement automatique
- Affichage des informations du logement : titre, localisation, tags, hôte, note
- Collapses pour la description et la liste des équipements
- Redirection vers la page 404 si l'id est invalide

### À propos (`/about`)

- Bannière dédiée
- Collapses avec contenu statique récupéré depuis un fichier JSON

### Page 404 (`*`)

- Affichage d'une page d'erreur 404 en cas de route invalide
- Lien de retour vers la page d'accueil

---

## 🎨 Design & responsive

L'interface a été développée à partir de maquettes Figma fournies.
Le site est entièrement responsive et s'adapte aux tailles mobiles, tablettes et desktops.

---

## 📁 Structure du projet

```
src/
├── assets/        # Images et icônes
├── components/    # Composants réutilisables (Card, Banner, Collapse, etc.)
├── data/          # Données statiques (logements.json, aboutContent.json)
├── pages/         # Pages (Home, About, Accommodation, NotFound)
├── styles/        # Fichiers SCSS organisés par composants/pages
├── router/        # Gestion des Routes
└── main.jsx       # Entrée de l'application
```

---

## ⚙️ Lancer le projet en local

```bash
# 1. Cloner le repo
git clone https://github.com/G-Hostin/Kasa.git

# 2. Se déplacer dans le dossier
cd Kasa

# 3. Installer les dépendances
npm install

# 4. Lancer le serveur de dev
npm run dev
```

L'application sera disponible sur http://localhost:5173

---

## ✅ Ce que j'ai appris

- Organiser une application React de manière modulaire
- Utiliser React Router pour gérer la navigation
- Gérer l'état local avec les hooks (useState, useEffect, useParams)
- Écrire du code Sass structuré et responsive
- Gérer des comportements dynamiques comme un carrousel ou un collapse
- Valider les routes et afficher des erreurs correctement

---

## 🧠 Bonus

- Le slideshow fonctionne aussi automatiquement avec setTimeout
- Toutes les données (logements, contenus de l'onglet "À propos") sont externes au code et peuvent facilement être remplacées par des appels API
- L'accessibilité et la responsive design ont été prises en compte dans la mise en page

---

## 🙋‍♂️ Auteur

**G-Hostin**

Projet réalisé dans le cadre de la formation OpenClassrooms "Intégrateur Web".

---

# 🏠 Kasa – Apartment Rental Application Between Individuals (English)

[![Vercel](https://img.shields.io/badge/Deployment-Vercel-3f51b5?logo=vercel&logoColor=white)](https://kasa-ghostin.vercel.app)

🔗 **Live Demo**: [kasa-ghostin.vercel.app](https://kasa-ghostin.vercel.app)

This project was completed as part of my front-end developer training at OpenClassrooms.

The objective was to completely redesign the interface of Kasa, a company specialized in apartment rental between individuals, using React, Sass and data provided as JSON files.

---

## 🚀 Technologies Used

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Sass](https://sass-lang.com/)
- Vite (to initialize the project)

No external libraries were used, in accordance with the project requirements.

---

## 📦 Features

### Home (`/`)

- Dynamic display of accommodations as cards
- Navigation to each accommodation page by clicking on a card

### Accommodation Page (`/logement/:id`)

- Slideshow (carousel) with arrows, counter, loop and automatic scrolling
- Display of accommodation information: title, location, tags, host, rating
- Collapses for description and equipment list
- Redirect to 404 page if id is invalid

### About (`/about`)

- Dedicated banner
- Collapses with static content retrieved from a JSON file

### 404 Page (`*`)

- Display of a 404 error page for invalid routes
- Link to return to the home page

---

## 🎨 Design & Responsive

The interface was developed from provided Figma mockups.
The site is fully responsive and adapts to mobile, tablet and desktop sizes.

---

## 📁 Project Structure

```
src/
├── assets/        # Images and icons
├── components/    # Reusable components (Card, Banner, Collapse, etc.)
├── data/          # Static data (logements.json, aboutContent.json)
├── pages/         # Pages (Home, About, Accommodation, NotFound)
├── styles/        # SCSS files organized by components/pages
├── router/        # Route management
└── main.jsx       # Application entry point
```

---

## ⚙️ Run the Project Locally

```bash
# 1. Clone the repo
git clone https://github.com/G-Hostin/Kasa.git

# 2. Navigate to the folder
cd Kasa

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

The application will be available at http://localhost:5173

---

## ✅ What I Learned

- Organize a React application in a modular way
- Use React Router to manage navigation
- Manage local state with hooks (useState, useEffect, useParams)
- Write structured and responsive Sass code
- Handle dynamic behaviors like carousel or collapse
- Validate routes and display errors correctly

---

## 🧠 Bonus

- The slideshow also works automatically with setTimeout
- All data (accommodations, "About" tab content) is external to the code and can easily be replaced by API calls
- Accessibility and responsive design have been taken into account in the layout

---

## 🙋‍♂️ Author

**G-Hostin**

Project completed as part of the OpenClassrooms "Web Integrator" training program.
