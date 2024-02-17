import './estructure.css'


const appDiv = document.querySelector('#app');

export const estructure = () => {
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');
  const footerText = document.createElement('p')
  footerText.textContent = '¿A quién no le va a gustar un baptistero romano del siglo primero?';
  footer.appendChild(footerText)

  appDiv.appendChild(header);
  appDiv.appendChild(main);
  appDiv.appendChild(footer);

}