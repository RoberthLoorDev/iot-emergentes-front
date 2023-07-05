import images from '../assets/img/img'

function Footer() {
  return (
    <div>
      <div className="background-footer-container">
        <div className="internal-footer-container">
          <img
            src={images.logo_epam_white}
            className="logo-epam-white"
            alt=""
          />
          <span>
            {' '}
            <b>Empresa de aguas públicas </b>de Manta
          </span>
          <p>
            EPAM: Líder en calidad del agua, cuidando la salud de los mantenses.
          </p>
          <div className="icons-networks">
            <a href="https://www.facebook.com/AguasdeManta">
              <img src={images.logo_facebook} className="icon-network" alt="" />
            </a>

            <a href="https://www.instagram.com/aguasdemanta/">
              <img
                src={images.logo_instagram}
                className="icon-network"
                alt=""
              />
            </a>

            <a href="https://www.epam.gob.ec/">
              <img src={images.logo_website} className="icon-network" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
