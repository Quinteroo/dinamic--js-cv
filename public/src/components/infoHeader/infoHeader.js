import './infoHeader.css'
import { headerDataBase } from '../dataBase/dataBase';


export const infoHeader = () => {
  const header = document.querySelector('header');
  header.classList.add('flex-column')

  const divLogo = document.createElement('div')
  divLogo.classList.add('div-logo')


  const logo = document.createElement('img');
  logo.classList.add('logo')
  logo.src = headerDataBase.logo.lightMode


  const divSlogan = document.createElement('div')
  divSlogan.classList.add('div-slogan')

  const slogan = document.createElement('p');
  slogan.classList.add('slogan')
  slogan.textContent = headerDataBase.slogan

  const title = document.createElement('h1');
  title.textContent = headerDataBase.title

  divLogo.appendChild(logo)
  divSlogan.appendChild(slogan)
  header.appendChild(divLogo)
  header.appendChild(divSlogan)
  header.appendChild(title)

}

