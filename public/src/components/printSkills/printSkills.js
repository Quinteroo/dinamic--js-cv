import './printSkills.css'
import { skillsInfo } from '../dataBase/dataBase'


export const printSkills = () => {
  const main = document.querySelector('main')

  const sectionSkills = document.createElement('section')
  sectionSkills.classList.add('skills')

  const title = document.createElement('h2')
  title.textContent = skillsInfo.title
  sectionSkills.appendChild(title)

  const skillsUl = document.createElement('ul')

  for (const skill in skillsInfo.techno) {
    const li = document.createElement('li')
    const img = document.createElement('img')
    img.src = skillsInfo.techno[skill]

    li.appendChild(img)
    skillsUl.appendChild(li)

  }

  sectionSkills.appendChild(skillsUl)

  main.appendChild(sectionSkills)
}