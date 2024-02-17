/* DOUBLE CHECK  */
console.log('hello Quinteroo!');

/* IMPORTS */
import './style.css'
import { estructure } from './src/components/estructure/estructure';
import { infoHeader } from './src/components/infoHeader/infoHeader';
import { printContact } from './src/components/printContact/printContact';
import { marioCoins } from './src/components/marioCoins/marioCoins';
import { printExperience } from './src/components/printExperience/printExperience';
import { printSkills } from './src/components/printSkills/printSkills';
import { printProjects } from './src/components/printProjects/printProjects';



/* APP */
const main = () => {
  estructure()
  infoHeader()
  printContact()
  printExperience()
  printSkills()
  printProjects()
  marioCoins()
}

main()