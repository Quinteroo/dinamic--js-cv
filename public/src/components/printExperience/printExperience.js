

import './printExperience.css'
import { expInfo } from '../dataBase/dataBase'


export const printExperience = () => {
  const main = document.querySelector('main')

  const sectionExperience = document.createElement('section')
  sectionExperience.classList.add('experience')

  sectionExperience.innerHTML = `
  <div>
    <h2>${expInfo.title}</h2>
    <p>${expInfo.description}</p>
  </div>
  `
  main.appendChild(sectionExperience)

}