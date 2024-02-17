import './printContact.css'
import { personalInfo } from '../dataBase/dataBase'


export const printContact = () => {
  const main = document.querySelector('main')

  const sectionContact = document.createElement('section')
  sectionContact.classList.add('contact')

  sectionContact.innerHTML = `
    <div class="divAvatar">
      <img class="avatar" src="${personalInfo.avatar}" alt="${personalInfo.name}">
    </div>
    <div class="divUl">
      <ul>
        <li>${personalInfo.name}</li>
        <li><a href="${personalInfo.email}">${personalInfo.email}</a></li>
        <li><a href="${personalInfo.github}">github</a></li>
        <li><a href="${personalInfo.linkedIn}">LinkedIn</a></li>
        <li><img src="${personalInfo.codewars}" alt="codewars level"></li>
      </ul>
    </div>
  `
  main.appendChild(sectionContact)


  const avatar = document.querySelector('.avatar');
  avatar.addEventListener('click', () => {
    avatar.src = personalInfo.squirtle
  })
}
