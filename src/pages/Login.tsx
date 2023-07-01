import images from '../assets/img/img'

function Login() {
  return (
    <div>
      <div className="login-background">
        <div className="login-container">
          <div className="form-container">
            <div className="internal-form-container">
              <div className="img-epam-text">
                <img src={images.climate_indicator_icon} alt="" />
                <h2>EPAM</h2>
              </div>
              <h1 className="h1-title-login">Bienvenido</h1>
              <div className="line-text-line">
                <div className="line-text"></div>
                <span className="text-between-lines">Inicio de sesión</span>
                <div className="line-text"></div>
              </div>
              <form className="login-form">
                <label id="form-label-user">Usuario</label>
                <input id="id_input-user" type="text" autoComplete="off" />
                <label id="form-label-password">Contraseña</label>
                <input id="id_input-password" type="text" autoComplete="off" />
                <input type="submit" value="Iniciar sesión"></input>
              </form>
            </div>
          </div>
          <div className="image-container">
            <img className="login-image" src={images.login_image} alt="" />
          </div>
        </div>
        <div className="description-app">
          <div className="icon-title-description">
            <img src={images.temp_icon_login} className="temp-icon-login" />
            <h3 className="h3-description">
              Sistema de <br /> Monitoreo
            </h3>
          </div>
          <p className="description">
            Control de temperatura <br />y humedad
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
