
// ======= FUNCTIONS USED TO MAKE HERO MOVEMENTS AND MAP EVENTS ================

// The function use to move and make obstacles in the ship at the beginning
function moveHeroMapShip(event) {

    let touche = event.key;

    // We call here the function that go to game over once hero life bar = 0.
    KillHero()

    // We set exit and obstacles coordinates 
    let exit = ["r1c8", "r1c9"]

    obstacle = [
        "r1c5", "r1c6", "r1c7", "r1c10", "r1c11", "r2c12", "r3c12", "r4c12", "r5c13", "r6c13", "r7c13", "r8c13", "r9c13", "r10c13",
        "r2c10", "r9c2", "r9c3", "r9c4", "r9c5", "r9c6", "r9c7", "r9c9", "r9c10", "r9c11", "r9c12", "r10c3", "r10c4", "r10c5", "r10c6", "r10c10", "r10c11", "r10c12",
        "r2c4", "r3c3", "r4c3", "r5c3", "r6c3", "r7c3", "r8c3", "r12c3", "r12c4", "r13c3", "r14c3", "r14c5", "r15c5", "r14c6", "r15c6", "r13c8", "r14c8",
        "r15c8", "r14c10", "r15c10", "r14c11", "r15c11", "r12c12", "r12c13", "r4c8", "r5c8", "r4c9", "r5c9", "r4c4", "r7c12", "r8c12"
    ];


    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {
            // Hero can move only if obstacle isn't on the way (same for every map)
            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;

            }
            // Hero can exit only at these points (same logic for every map)
            if (exit.includes(`r${ligne}c${colonne}`)) {
                newMap("exitShip");
            }

        }
    }

    // fleche bas
    if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;
            }
        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 3) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 13) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
   

}


function moveHeroMapCrash(event) {

    let touche = event.key;

    KillHero()
    // We set here the new settings of the map because we crashed
   
    if (touche == "Enter") {
        mapImage.src = mapCrashURL;
        hero.style.display = "flex";

        pnj01.style.display = "block";
        pnj01Image.src = pnjGuardURL;
        pnj01.style.gridRow = 4;
        pnj01.style.gridColumn = 14;

        pnj02.style.display = "block";
        pnj02Image.src = pnjGuideURL;
        pnj02.style.gridRow = 9;
        pnj02.style.gridColumn = 9;

        shuttleImage.style.display = "block";
        shuttleImage.style.gridRow = "10 / span 2";
        shuttleImage.style.gridColumn = "6 / span 2";

        crashText.style.display = "none";
        userInfoOnShip.style.display = "none";
        userInfoCrash.style.display = "block";

    }

   
    obstaclePurpleTrees = [
        "r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6", "r1c7", "r1c8", "r1c9", "r1c10", "r1c11", "r1c12", "r1c13", "r1c14", "r1c15",
        "r14c1", "r14c2", "r14c3", "r14c4", "r14c5", "r14c6", "r14c7", "r14c10", "r14c11", "r14c12", "r14c13", "r14c14", "r14c15",
        "r15c1", "r15c2", "r15c3", "r15c4", "r15c5", "r15c6", "r15c7", "r15c10", "r15c11", "r15c12", "r15c13", "r15c14", "r15c15",
        "r13c1", "r13c2", "r13c14", "r13c15", "r12c1", "r12c2", "r12c14", "r12c15", "r11c1", "r11c2", "r11c14", "r11c15", "r10c14", "r11c15",
        "r9c14", "r9c15", "r8c14", "r8c15",
        "r8c1", "r7c1", "r6c1", "r5c1", "r4c1", "r3c1", "r2c1"
    ];

    obstacleDeadTree = [
        "r3c4", "r3c10", "r3c7", "r3c11",
        "r6c2", "r6c5",
        "r8c4",
        "r6c15",
        "r10c10", "r10c11",
        "r11c3", "r11c13",
    ];

    house = ["r6c8", "r6c9", "r5c9", "r5c8"];

    obstacle = obstaclePurpleTrees.concat(obstacleDeadTree, house);


    let pnjGuide = ["r9c9"];
    let pnjGuard = ["r4c14"];
    objectFoundArray = ["r3c2", "r4c3", "r2c7"];

    exitToCamp = ["r15c8", "r15c9"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;

                if (pnjGuide.includes(`r${ligne}c${colonne}`)) {

                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
           


                    if (dialogueContainer.style.display == "block") {
                        ligne++;
                    }

                } else if (pnjGuard.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainerGuardian.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
         


                    if (dialogueContainerGuardian.style.display == "block") {
                        ligne++;
                    }
                }
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;

                if (pnjGuide.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
         

                    if (dialogueContainer.style.display == "block") {
                        ligne--;
                    }
                } else if (pnjGuard.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainerGuardian.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
               


                    if (dialogueContainerGuardian.style.display == "block") {
                        ligne++;
                    }


                }
                if (exitToCamp.includes(`r${ligne}c${colonne}`)) {
                    newMap("exitToCamp");
                }
            }
        }


        // fleche gauche
    } else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;

                if (pnjGuide.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
      

                    if (dialogueContainer.style.display == "block") {
                        colonne++;
                    }

                } else if (pnjGuard.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainerGuardian.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
         


                    if (dialogueContainerGuardian.style.display == "block") {
                        ligne++;
                    }

                }
            }
        }

        // fleche droite
    } else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;

                if (pnjGuide.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
       


                    if (dialogueContainer.style.display == "block") {
                        colonne--;
                    }
                } else if (pnjGuard.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainerGuardian.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
           


                    if (dialogueContainerGuardian.style.display == "block") {
                        ligne++;
                    }
                }

            }

        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("You are on the crash map")

}


function moveHeroMapCrash_2(event) {


    let touche = event.key;

    KillHero()

    obstaclePurpleTrees = [
        "r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6", "r1c7", "r1c8", "r1c9", "r1c10", "r1c11", "r1c12", "r1c13", "r1c14", "r1c15",
        "r14c1", "r14c2", "r14c3", "r14c4", "r14c5", "r14c6", "r14c7", "r14c10", "r14c11", "r14c12", "r14c13", "r14c14", "r14c15",
        "r15c1", "r15c2", "r15c3", "r15c4", "r15c5", "r15c6", "r15c7", "r15c10", "r15c11", "r15c12", "r15c13", "r15c14", "r15c15",
        "r13c1", "r13c2", "r13c14", "r13c15", "r12c1", "r12c2", "r12c14", "r12c15", "r11c1", "r11c2", "r11c14", "r11c15", "r10c14", "r11c15",
        "r9c14", "r9c15", "r8c14", "r8c15",
        "r8c1", "r7c1", "r6c1", "r5c1", "r4c1", "r3c1", "r2c1"
    ];

    obstacleDeadTree = [
        "r3c4", "r3c10", "r3c7", "r3c11",
        "r6c2", "r6c5",
        "r8c4",
        "r6c15",
        "r10c10", "r10c11",
        "r11c3", "r11c13",
    ];

    house = ["r6c8", "r6c9", "r5c9", "r5c8"];

    obstacle = obstaclePurpleTrees.concat(obstacleDeadTree, house);

    pnjMeetArray = ["r3c3", "r3c6", "r3c8"];
    objectFoundArray = ["r3c2", "r4c3", "r2c7"];
    exitToFinal = ["r4c15", "r3c15"];
    exitToCamp = ["r15c8"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
           

                    if (dialogueContainer.style.display == "block") {
                        ligne++;
                    }
                }
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
  


                    if (dialogueContainer.style.display == "block") {
                        ligne--;
                    }
                }
            }
        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
     

                    if (dialogueContainer.style.display == "block") {
                        colonne++;
                    }
                }
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
 


                    if (dialogueContainer.style.display == "block") {
                        colonne--;
                    }
                }

                if (exitToFinal.includes(`r${ligne}c${colonne}`)) {
                    newMap("exitToFinal");
                }
            }

        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;

}



function moveHeroMapBeforeCamp(event) {

    let touche = event.key;

    KillHero()

    obstacle = [
        "r2c2", "r2c3", "r2c4", "r2c5", "r2c6", "r2c9", "r2c10", "r2c11", "r2c12", "r2c13", "r2c14", "r3c2", "r4c2", "r5c2", "r6c2", "r7c2",
        "r8c2", "r9c2", "r10c2", "r11c2", "r12c2", "r13c2", "r3c4", "r4c4", "r5c4", "r5c3", "r14c3", "r14c4", "r14c5", "r14c6", "r14c7", "r14c8",
        "r14c9", "r14c10", "r14c11", "r14c12", "r14c13", "r14c14", "r13c15", "r7c15", "r6c15", "r5c15", "r4c15", "r3c15", "r4c14", "r5c14", "r9c7",
        "r8c7", "r11c13"
    ];



    exitToCamp = ["r8c15", "r9c15", "r10c15", "r11c15"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;
            }

        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;

                if (exitToCamp.includes(`r${ligne}c${colonne}`)) {
                    newMap("exitBeforeCamp")
                }

            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    
}

function moveHeroMapBeforeCamp_2(event) {

    let touche = event.key;

    KillHero()

    obstacle = [
        "r2c2", "r2c3", "r2c4", "r2c5", "r2c6", "r2c9", "r2c10", "r2c11", "r2c12", "r2c13", "r2c14", "r3c2", "r4c2", "r5c2", "r6c2", "r7c2",
        "r8c2", "r9c2", "r10c2", "r11c2", "r12c2", "r13c2", "r3c4", "r4c4", "r5c4", "r5c3", "r14c3", "r14c4", "r14c5", "r14c6", "r14c7", "r14c8",
        "r14c9", "r14c10", "r14c11", "r14c12", "r14c13", "r14c14", "r13c15", "r7c15", "r6c15", "r5c15", "r4c15", "r3c15", "r4c14", "r5c14", "r9c7",
        "r8c7", "r11c13"
    ];


    exitToCrash = ["r1c7", "r1c8"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;

                if (exitToCrash.includes(`r${ligne}c${colonne}`)) {
                    newMap("returnToCrash");
                }
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;
            }

        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("You are on the map that is before the camp but after having visiting camp")
}



function moveHeroMapCamp(event) {

    let touche = event.key;
    mapImage.style.opacity = 1;

    KillHero()

    obstacle = [
        "r8c1", "r11c1", "r3c2", "r4c2", "r5c2", "r6c2", "r7c2", "r12c2", "r13c2", "r2c3", "r2c4", "r2c5", "r2c6", "r2c7", "r2c8", "r2c9",
        "r2c10", "r2c11", "r2c12", "r2c13", "r2c14", "r13c3", "r14c6", "r14c7", "r14c8", "r14c9", "r14c10", "r14c11", "r14c12", "r14c13",
        "r14c14", "r4c4", "r10c4", "r12c4", "r13c5", "r5c6", "r5c7", "r7c8", "r12c8", "r9c10", "r11c10", "r12c10", "r6c11", "r12c11", "r6c12",
        "r4c13", "r9c13", "r11c13", "r12c13", "r3c15", "r4c15", "r5c15", "r6c15", "r7c15", "r8c15", "r9c15", "r10c15", "r11c15", "r12c15", "r13c15"
    ];

    exit = ["r9c1", "r10c1"];

    games = ["r5c10","r5c9", "r4c10", "r4c9", "r3c9"];

    goodFood = ["r8c8"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                heroImage.src = heroImageURL.up;

                if (games.includes(`r${ligne}c${colonne}`)) {
                    mapImage.style.opacity = 0.5;
                    playGames.style.display = "block";

                } else {
                    mapImage.style.opacity = 1;
                    playGames.style.display = "none";
                }

                // Life of the hero is better once he goes on this position (goodfood objects):
                if (goodFood.includes(`r${ligne}c${colonne}`)) {
                    if (heroLifeBar.value < 60) {
                        heroLifeBar.value += 5;
                    }

                }
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                heroImage.src = heroImageURL.down;

                // The hero is challenged once he go on this positions:
                if (games.includes(`r${ligne}c${colonne}`)) {
                    mapImage.style.opacity = 0.5;
                    playGames.style.display = "block";

                } else {
                    mapImage.style.opacity = 1;
                    playGames.style.display = "none";
                }
                // Life of the hero is better once he goes on this position (goodfood objects):
                if (goodFood.includes(`r${ligne}c${colonne}`)) {
                    if (heroLifeBar.value < 60) {
                        heroLifeBar.value += 5;
                    }
                }

            }

        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;

                if (games.includes(`r${ligne}c${colonne}`)) {
                    mapImage.style.opacity = 0.5;
                    playGames.style.display = "block";
                } else {
                    mapImage.style.opacity = 1;
                    playGames.style.display = "none";
                }

                // Life of the hero is better once he goes on this position (goodfood objects):
                if (goodFood.includes(`r${ligne}c${colonne}`)) {
                    if (heroLifeBar.value < 60) {
                        heroLifeBar.value += 5;
                    }
                }

                if (exit.includes(`r${ligne}c${colonne}`)) {

                    if (score > 14) {
                        newMap("returnToBeforeCamp");
                    } else {
                       
                        newMap("exitBeforeCamp");
                        mapImage.style.opacity = 0.5;
                        playGames.style.display = "block";

                    }

                }
            }

        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;

                if (games.includes(`r${ligne}c${colonne}`)) {
                    playGames.style.display = "block";

                } else {
                    mapImage.style.opacity = 1;
                    playGames.style.display = "none";
                }

                // Life of the hero is better once he goes on this position (goodfood objects):
                if (goodFood.includes(`r${ligne}c${colonne}`)) {

                    if (heroLifeBar.value < 60) {
                        heroLifeBar.value += 5;
                    }
                }
            }

        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;

}



function moveHeroMapBeforeFinal(event) {

    let touche = event.key;
    shuttleImage.style.display = "none";

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;

    KillHero()

    obstacle = [
        "r3c1", "r4c1", "r5c1", "r6c1", "r7c1", "r12c1", "r3c2", "r4c2", "r7c2", "r12c2", "r5c3", "r6c3", "r7c3", "r12c3", "r12c4",
        "r3c5", "r12c5", "r3c6", "r12c6", "r13c6", "r14c6", "r15c6", "r2c7", "r8c7", "r9c7", "r2c8", "r2c9", "r2c10", "r2c11", "r2c12", "r2c13",
        "r12c9", "r13c9", "r5c12", "r6c12", "r3c14", "r4c14", "r5c14", "r6c14", "r7c14", "r8c14", "r9c14", "r10c14", "r11c14", "r12c14", "r13c14",
        "r14c14", "r15c14", "r16c14"
    ];

    exit = ["r15c7", "r15c8", "r15c9", "r15c10", "r15c11", "r15c12", "r15c13"];

    goodFood = ["r7c7"];

        if (touche === "ArrowUp") {
            if (ligne > 1) {

                if (!obstacle.includes(`r${ligne - 1}c${colonne}`)) {
                    ligne--;
              
                    heroImage.src = heroImageURL.up;

                    if (goodFood.includes(`r${ligne}c${colonne}`)) {

                        if (heroLifeBar.value < 90) {
                            heroLifeBar.value += 5;
                        }

                    }
                }

            }
        }

        if (touche === "ArrowDown"){
            if (ligne < 15) {

                if (!obstacle.includes(`r${ligne + 1}c${colonne}`)) {
                    ligne++;
                  
                    heroImage.src = heroImageURL.down;

                    if (exit.includes(`r${ligne}c${colonne}`)) {
                        newMap("exitBeforeFinal");
                    }
                    if (goodFood.includes(`r${ligne}c${colonne}`)) {

                        if (heroLifeBar.value < 60) {
                            heroLifeBar.value += 5;
                        }
                    }

                }
            }
        }

        if (touche === "ArrowLeft"){
            if (colonne > 1) {

                if (!obstacle.includes(`r${ligne}c${colonne - 1}`)) {
                    colonne--;
                   
                    heroImage.src = heroImageURL.left;

                    if (goodFood.includes(`r${ligne}c${colonne}`)) {

                        if (heroLifeBar.value < 90) {
                            heroLifeBar.value += 5;
                        }
                    }
                }
            }
    }

        if (touche === "ArrowRight"){
            if (colonne < 15) {

                if (!obstacle.includes(`r${ligne}c${colonne + 1}`)) {
                    colonne++;
                    
                    heroImage.src = heroImageURL.right;

                    if (goodFood.includes(`r${ligne}c${colonne}`)) {

                        if (heroLifeBar.value < 90) {
                            heroLifeBar.value += 5;
                        }
                    }
                }

            }
        }


    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    
}
    

    
function moveHeroMapFinal(event) {

    let touche = event.key;

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;

    KillHero()

    // In the "illusion map" obstacle are not on the real obstacle you view...
    obstacle = ["r3c4","r6c5","r7c7"];
    
    exitToShip = ["r14c7", "r14c8", "r13c8", "r13c8"];

    // fleche haut
    if (touche === "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;
            }
        }

    }

    // fleche bas
    else if (touche === "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
               
                heroImage.src = heroImageURL.down;

                if (exitToShip.includes(`r${ligne + 1}c${colonne}`)) {
                    newMap("toShip");
                }
            }

        }
    }

    // fleche gauche
    else if (touche === "ArrowLeft") {
        if (colonne > 5) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
            
                heroImage.src = heroImageURL.left;
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 10) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                heroImage.src = heroImageURL.right;
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;

}


function moveHeroMapEnd(event) {

    let touche = event.key;

    KillHero()

    exitToYourShip = ["r8c8", "r8c7"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;

                if (exitToYourShip.includes(`r${ligne}c${colonne}`)) {
                    document.location.href = "./win.html";
                }
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;

                if (exitToYourShip.includes(`r${ligne}c${colonne}`)) {
                    document.location.href = "../win.html";
                }
            }

        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;

                if (exitToYourShip.includes(`r${ligne}c${colonne}`)) {
                    document.location.href = "../win.html";
                }
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;

                if (exitToYourShip.includes(`r${ligne}c${colonne}`)) {
                    document.location.href = "../win.html";
                }
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
   
}


