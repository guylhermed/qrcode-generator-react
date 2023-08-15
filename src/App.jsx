import { useState } from 'react'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'
import Logo from './assets/logo_eltok.png'
import './App.css'

function App() {

  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url,{
      width: 600,
      margin: 3,
    }, function (err, url){
      setQrcodeLink(url)
    })
  }

  function handleQrcode(e){
    setLink(e.target.value)    
    handleGenerate(e.target.value)
  }

  return (
    <>
      <div className='container'>

        <div className='logo'>
          <img src={Logo} alt="" />
        </div>

        <QRCode 
          className='qrcode'
          value={link}
        />
        
        <input
          className='input'
          placeholder='Digite seu link'
          value={link}
          onChange={ (e) => handleQrcode(e) }
        />

        <a className='button-link' href={qrcodeLink} download={'qrcode.png'}>Baixar o QrCode</a>
        
      </div>

      <footer>        
          <a href="http://instagram.com/guylhermed" target="_blank">Feito com ❤️ por Guy</a>
      </footer>
    </>
  )
}

export default App
