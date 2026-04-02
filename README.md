🚗 Plateforme de Covoiturage Local
Une application web complète (Fullstack) permettant de mettre en relation des conducteurs et des passagers pour des trajets locaux. Ce projet vise à simplifier la mobilité urbaine tout en réduisant l'empreinte carbone.

🌟 Fonctionnalités
Authentification : Inscription et connexion sécurisées pour les utilisateurs.

Publication de trajets : Les conducteurs peuvent proposer des itinéraires, des horaires et le nombre de places disponibles.

Recherche de trajets : Les passagers peuvent rechercher des trajets par ville de départ et d'arrivée.

Gestion des réservations : Système de réservation de places en temps réel.

Tableau de bord : Suivi des trajets passés et à venir pour chaque utilisateur.

🛠️ Stack Technique
Backend : Java (Spring Boot) - Gestion de l'API REST et de la logique métier.

Frontend : JavaScript (React.js), HTML5, CSS3 - Interface utilisateur réactive.

Base de données : SQL (PostgreSQL/MySQL) pour la persistance des données.

📂 Structure du Projet
Plaintext
.
├── backend/            # Code source du serveur Java
├── frontend/           # Code source de l'application cliente (JS/CSS)
├── fetch_error.js      # Script utilitaire pour la gestion des erreurs réseau
├── test_delete.js       # Script de test pour les fonctionnalités de suppression
└── .gitignore          # Fichiers et dossiers à exclure de Git
🚀 Installation et Lancement
Prérequis
Java JDK 17 ou supérieur

Node.js et npm

Un gestionnaire de base de données (ex: PostgreSQL)

Étapes
Cloner le dépôt :

Bash
git clone https://github.com/HoussamMarih/Plateforme-de-Covoiturage-Local.git
cd Plateforme-de-Covoiturage-Local
Lancer le Backend :

Accédez au dossier backend.

Configurez votre base de données dans application.properties.

Exécutez l'application via votre IDE ou avec ./mvnw spring-boot:run.

Lancer le Frontend :

Accédez au dossier frontend.

Installez les dépendances : npm install.

Démarrez le serveur de développement : npm start.

🤝 Contribution
Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une Issue ou à soumettre une Pull Request pour améliorer cette plateforme.


Projet développé par Houssam Marih
