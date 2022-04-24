// ============= SETTINGS OF THE GAME AND THE MAPS ================

// function to decide that you lose if HeroLifeBar = 0
function KillHero() {

    if (heroLifeBar.value == 0) {
        document.location.href = "../game-over.html";
    }
}

// On load, we display spaceship map : 
function LoadGame() {

    // We display the map container itself:
    map.style.display = "grid";

    // We hide other containers: 
    dialogueContainer.style.display = "none";
    dialogueContainerGuardian.style.display = "none";
    playGames.style.display = "none";
    shuttleImage.style.display = "none";
    userInfoOnShip.style.display = "block";
    
    // We load the map and the hero image
    mapImage.src = mapShipURL;
    heroImage.src = heroImageURL.fromSky;

    // We position the hero 
    ligne = 10;
    colonne = 8;
    hero.style.gridRow = 10;
    hero.style.gridColumn = 8;

    console.log("la map est chargée!");
    console.log("url de la map chargée:" + mapImage.src)

    document.addEventListener('keyup', moveHeroMapShip);

}

// ========== After loading, every maps are displayed and their challenges, dialogues and pnj/objects set with this function:

function newMap(mapPlace) {

    switch (mapPlace) {

        case "exitShip":

            // We position elements on the map
            ligne = 8;
            colonne = 8;
            hero.style.gridRow = 8;
            hero.style.gridColumn = 8;

            // hero lose life due to lack of oxygene in the world
            heroLifeBar.value -= 10;
            console.log("Life value " + heroLifeBar.value);

            // We display the image and hide dialogue popups
            mapImage.src = FallingShipImage;
            dialogueContainer.style.display = "none";
            dialogueContainerGuardian.style.display = "none";

            // We display the message that explain the crash and hide the hero:
            hero.style.display = "none";
            crashText.style.display = "block";

            // We change map movements settings
            document.removeEventListener('keyup', moveHeroMapShip, false);
            document.removeEventListener('keyup', moveHeroMapShip, true);
            document.addEventListener('keyup', moveHeroMapCrash);
            break;

        case "exitToFinal":
            // Positioning the hero on the map
            ligne = 8;
            colonne = 1;
            hero.style.gridRow = 8;
            hero.style.gridColumn = 1;

             // Displaying the map
            mapImage.src = mapBeforeFinalURL;

            // We hide elements on the map
            dialogueContainer.style.display = "none";
            dialogueContainerGuardian.style.display = "none";
            pnj01.style.display = "none";
            pnj02.style.display = "none";

             // We display element on the map
            object01.style.display = "block";
            imageObject01.src = "ressources/objects/goodfood.png";
            object01.style.gridRow = 7;
            object01.style.gridColumn = 7;

            userInfoCrash.style.display = "none"; 
           
            // hero lose life due to lack of oxygene in the world
            heroLifeBar.value -= 10;
            console.log("Life value " + heroLifeBar.value);

            document.removeEventListener('keyup', moveHeroMapCrash_2, false);
            document.removeEventListener('keyup', moveHeroMapCrash_2, true);
            document.addEventListener('keyup', moveHeroMapBeforeFinal);
            break;

        case "exitToCamp":
            // Positioning the hero on the map
            ligne = 1;
            colonne = 8;
            hero.style.gridRow = 1;
            hero.style.gridColumn = 8;

            // Displaying the map
            mapImage.src = mapBeforeCampURL;

            // Hiding every items that aren't on the map we display
            dialogueContainer.style.display = "none";
            dialogueContainerGuardian.style.display = "none";
            shuttleImage.style.display = "none";
            playGames.style.display = "none";
            pnj01.style.display = "none";
            pnj02.style.display = "none";
            object01.style.display = "none";
        
            userInfoCrash.style.display = "none";
            
            // We display the information to the user:
            userInfoBeforeCamp.style.display = "block"; 
           
            // hero lose life due to lack of oxygene in the world
            heroLifeBar.value -= 10;
            console.log("Life value in case exitShip after" + heroLifeBar.value);

            document.removeEventListener('keyup', moveHeroMapCrash, false);
            document.removeEventListener('keyup', moveHeroMapCrash, true);
            document.addEventListener('keyup', moveHeroMapBeforeCamp);
            break;

        case "exitBeforeFinal":

            // We position the hero on the map
            ligne = 1;
            colonne = 8;
            hero.style.gridRow = 1;
            hero.style.gridColumn = 8;
            mapImage.src = mapFinalURL;

            // Hiding every items that aren't on the map we display
            dialogueContainer.style.display = "none";
            dialogueContainerGuardian.style.display = "none";
            shuttleImage.style.display = "none";
            playGames.style.display = "none";
            pnj01.style.display = "none";
            pnj02.style.display = "none";
            object01.style.display = "none";
  
        
            // hero lose life due to lack of pure air in the world
            heroLifeBar.value -= 30;
            console.log("Life value " + heroLifeBar.value);
        
            userInfoFinal.style.display = "block";
         
            // We call new map settings and remove old map settings (we remove capturing and bubbling mode)
            document.removeEventListener('keyup', moveHeroMapBeforeFinal, false);
            document.removeEventListener('keyup', moveHeroMapBeforeFinal, true);
            document.addEventListener('keyup', moveHeroMapFinal);
            break;

        case "exitBeforeCamp":

            // We position the hero on the camp map 
            ligne = 10;
            colonne = 1;
            hero.style.gridRow = 10;
            hero.style.gridColumn = 1;

            // We display camp map image
            mapImage.src = mapCampURL;

            // We need to hide these items on the camp map:
            dialogueContainer.style.display = "none";
            dialogueContainerGuardian.style.display = "none";
            shuttleImage.style.display = "none";
            pnj02.style.display = "none";
            userInfoCamp.style.display = "block";
            userInfoBeforeCamp.style.display = "none"; 

            // Position and display the transhuman pnj
            pnj01.style.display = "block";
            pnj01Image.src = pnjTranshumanURL;
            pnj01.style.gridRow = 5;
            pnj01.style.gridColumn = 10;

            // hero lose life due to lack of pur air in the world
            heroLifeBar.value -= 30;
            console.log("Life value " + heroLifeBar.value);

            // We display and position the object to regain life (good food):
            imageObject01.src = "./ressources/objects/goodfood.png";
            object01.style.gridRow = 8;
            object01.style.gridColumn = 8;
            object01.style.display = "block";

            // We call new map settings and remove old map settings (we remove capturing and bubbling mode)
            document.removeEventListener('keyup', moveHeroMapBeforeCamp, false);
            document.removeEventListener('keyup', moveHeroMapBeforeCamp, true);
            document.addEventListener('keyup', moveHeroMapCamp);
            break;

        case "returnToBeforeCamp":


            ligne = 10;
            colonne = 15;
            hero.style.gridRow = 10;
            hero.style.gridColumn = 15;

            mapImage.src = mapBeforeCampURL;

            // We need to hide these items on the camp map:
            dialogueContainer.style.display = "none";
            dialogueContainerGuardian.style.display = "none";
            shuttleImage.style.display = "none";
            pnj02.style.display = "none";
            pnj01.style.display = "none";
            object01.style.display = "none";
            userInfoCamp.style.display = "none"; 

            heroLifeBar.value -= 10;
            console.log("Life value " + heroLifeBar.value);

            // We call new map settings and remove old map settings (we remove capturing and bubbling mode)
            document.removeEventListener('keyup', moveHeroMapCamp, false);
            document.removeEventListener('keyup', moveHeroMapCamp, true);
            document.addEventListener('keyup', moveHeroMapBeforeCamp_2);
            break;

        case "returnToCrash":
            ligne = 15;
            colonne = 8;
            hero.style.gridRow = 15;
            hero.style.gridColumn = 8;

            mapImage.src = mapCrashURL;

            // We need to hide these items on the camp map (we didn't hide the shuttle):
            dialogueContainer.style.display = "none";
            dialogueContainerGuardian.style.display = "none";
            pnj02.style.display = "none";
            pnj01.style.display = "none";
            object01.style.display = "none";

            // Here we display the shuttle as it was when we crashed
            shuttleImage.style.display = "block";
            shuttleImage.style.gridRow = "10 / span 2";
            shuttleImage.style.gridColumn = "6 / span 2";

            heroLifeBar.value -= 10;
            console.log("Life value " + heroLifeBar.value);

            // We call new map settings and remove old map settings (we remove capturing and bubbling mode)
            document.removeEventListener('keyup', moveHeroMapBeforeCamp_2, false);
            document.removeEventListener('keyup', moveHeroMapBeforeCamp_2, true);
            document.addEventListener('keyup', moveHeroMapCrash_2);
            break;
       
        case "toShip":

            mapImage.src = ShipImage;

            // Objects and containers we hide:
            dialogueContainer.style.display = "none";
            dialogueContainerGuardian.style.display = "none";
            shuttleImage.style.display = "none";
            playGames.style.display = "none";
            pnj01.style.display = "none";
            pnj02.style.display = "none";
            object01.style.display = "none";
            userInfoFinal.style.display = "none";
            
            userInfoEnd.style.display = "block"; 
          
            heroLifeBar.value -= 10;
            console.log("Life value " + heroLifeBar.value);

            // We call new map settings and remove old map settings (we remove capturing and bubbling mode)
            document.removeEventListener('keyup', moveHeroMapFinal, false);
            document.removeEventListener('keyup', moveHeroMapFinal, true);
            document.addEventListener('keyup', moveHeroMapEnd);
            break;
    }
}

// Lorsque l'on rafraîchis la page ou que l'on charge: se retrouver sur la première map.
window.addEventListener("load", LoadGame);