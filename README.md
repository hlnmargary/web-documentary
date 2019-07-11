# Quand la vie se terre - Chapitre 1 : New York

Un web-documentaire de :

<ul>
  <li> Rami Cakir </li>
  <li> Sarah Güngör </li>
  <li> Hélène Margary </li>
  <li> Pierre Secher </li>
  <li> Félix Robaglia </li>
</ul>

<strong> Prérequis : mongo, node </strong>

# Lancer le projet en local

<code>git clone https://github.com/FRobaglia/mole-people</code>

<br>

<code>cd mole-people</code>
  
<br>
  
<code>npm install</code>

<br>

<code>npm run dev</code>

<br>

Ouvrir un autre terminal : 

<code>cd mole-people/api/</code>

<br>

<code>npm install</code> 

<br>

<code>npm run-script setupBDD</code> <em> Crée la base de donnée par défaut sur mongo. </em>

<br>

<code>nodemon server</code> <em> Lance l'API à l'URL : <code>localhost:4000</code> </em>

Se rendre sur <code> localhost:1234 </code> depuis le navigateur.

<strong>Back Office</strong>
<br>
Vous pouvez y accéder via la route /create si vous souhaitez ajouter un profil et la route /edit si vous voulez le modifier.
