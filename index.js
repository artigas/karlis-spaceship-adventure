// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = 
`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta lang="en-us">
    <title>Space Shooter</title>
    <script src="js/phaser.js"></script> <!-- the file name should be the same as the Phaser script you added. -->
  </head>

  <body>
    <script src="js/SceneMainMenu.js"></script>
    <script src="js/SceneMain.js"></script>
    <script src="js/SceneGameOver.js"></script>
    <script src="js/game.js"></script>
  </body>
</html>
`;