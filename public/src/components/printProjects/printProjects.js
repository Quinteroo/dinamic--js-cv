import './printProjects.css'
import { projects } from '../dataBase/dataBase'


export const printProjects = () => {
  const main = document.querySelector('main');

  const sectionProjects = document.createElement('section')
  sectionProjects.classList.add('projects')

  const title = document.createElement('h2');
  title.textContent = 'proyectos'
  sectionProjects.appendChild(title)

  const projectsUl = document.createElement('ul');
  for (const project of projects) {
    const li = document.createElement('li')
    li.classList.add('card')
    // const divImg = document.createElement('div')
    const img = document.createElement('img')
    const title = document.createElement('h3')
    const description = document.createElement('p')
    const link = document.createElement('a')

    img.src = project.preview
    title.textContent = project.title
    description.textContent = project.description
    link.href = project.url
    link.textContent = 'ver más'

    // divImg.appendChild(img)

    li.appendChild(img)
    li.appendChild(title)
    li.appendChild(description)
    li.appendChild(link)

    projectsUl.appendChild(li)

  }

  sectionProjects.appendChild(projectsUl)
  main.appendChild(sectionProjects)
}
