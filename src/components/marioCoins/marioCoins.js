import './marioCoins.css'
import { marioCoinsDataBase } from '../dataBase/dataBase';

const coinAudio = new Audio('./assets/sounds/sonidoMoneda.mp3')

export const marioCoins = () => {

  const body = document.querySelector('body')

  const imgCajaCoin = document.createElement('img');
  imgCajaCoin.src = marioCoinsDataBase.image
  imgCajaCoin.classList.add('cajaMario')



  imgCajaCoin.addEventListener('click', () => {
    coinAudio.play();
  })

  body.appendChild(imgCajaCoin)

}