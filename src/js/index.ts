import summonClouds from "../assets/clouds.js";
import summonGrass from "../assets/grass.js";
import { summonSausage1 } from "../assets/sausages.js";
import { screenTitle } from "../assets/title.js";

function titleScreen(): void {
  summonGrass();
  summonClouds();
  screenTitle();
}

// Main execution block
function main(): void {
  titleScreen();
}

main();
