/*
    index.js
*/
import summonClouds from '../assets/clouds.js';
import summonGrass from '../assets/grass.js';
import { summonSausage1 } from '../assets/sausage1.js';

// make the initial environment for our sausage to frolic in
function createEnvironment() {
    summonGrass();
    summonClouds();
    summonSausage1();
    console.log('summonSausage');
}

// Main execution block
function main() {
    createEnvironment();
}
main();