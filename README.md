# Système de Gestion de Commandes

Ce projet est un système de gestion de commandes permettant de gérer les clients, les produits, les détails de commande et les commandes elles-mêmes.Conçu pour faciliter la gestion des commandes clients dans un environnement commercial. Il permet de créer, modifier et suivre les clients, les produits et les commandes.



## Prérequis

- Node.js (version recommandée : 14.x ou supérieure)
- npm (généralement installé avec Node.js)

## Structure du Projet

Le projet est composé de plusieurs classes JavaScript :

- `Customer.js` : Gère les informations relatives aux clients
- `Product.js` : Gère les informations relatives aux produits
- `OrderDetail.js` : Représente les détails d'une commande
- `Order.js` : Gère les commandes, y compris leurs détails et les relations avec les clients

## Fonctionnalités

1. Gestion des Clients :
   - Créer un nouveau client
   - Modifier les informations d'un client
   - Obtenir les informations d'un client
   - Supprimer un client

2. Gestion des Produits :
   - Créer un nouveau produit
   - Modifier les informations d'un produit
   - Obtenir les informations d'un produit
   - Supprimer un produit

3. Gestion des Commandes :
   - Créer une nouvelle commande
   - Modifier une commande existante
   - Obtenir les informations d'une commande
   - Supprimer une commande

4. Détails de Commande :
   - Associer des produits à une commande avec leur quantité et prix

## Installation

1. Clonez le dépôt :
```bash
   git clone https://github.com/MohamedSoumare/exo1-express.git
```

2. **Naviguez dans le répertoire du projet :**

```bash
   cd  exo1-express.git
```

3. Installez les dépendances :

```bash
   npm install
```

## Utilisation

Pour démarrer le serveur :

```bash
  npm start
```

Le serveur démarrera sur `http://localhost:8081`.

## Diagramme de Classe

[Diagramme de Classe du Système de Gestion de Commandes](./assets/images/diag_gestion_commande.jpg)

Ce diagramme illustre la structure et les relations entre les classes `Customer`, `Order`, `OrderDetail`, et `Product` dans notre système.



## Contact
Mohamed Soumaré - soumare17763@gmail.com

Lien du projet : [https://github.com/MohamedSoumare/exo1-express.git](https://github.com/MohamedSoumare/exo1-express.git)
