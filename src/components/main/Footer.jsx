import { SocialIcon } from "react-social-icons";
import "./Footer.less";

const socialIconsInfo = [
  { network: "instagram", url: "https://www.instagram.com/davincitaller" },
  { network: "tiktok", url: "https://vm.tiktok.com/ZMRA3hNtL"  },
  { network: "facebook", url: "https://www.facebook.com/Davincitaller.cba/"  },
  { network: "whatsapp", url: "https://wa.me/5493512510898"  }
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        {socialIconsInfo.map(socialIconInfo => {
          return <SocialIcon
            key={socialIconInfo.url}
            network={socialIconInfo.network}
            fgColor="white"
            url={socialIconInfo.url}
            target="_blank"
          />
        })}
      </div>
      <div className="map-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.86638457263064!2d-64.1636526342362!3d-31.390364228313253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329816ec269f2d%3A0x9f5c6357bec1f7d8!2sTaller%20Chapa%20y%20Pintura%20Da%20Vinci!5e0!3m2!1ses!2sar!4v1630536322084!5m2!1ses!2sar"
          width="700"
          height="400"
          title="Da Vinci Taller Map"
        />
      </div>
      <div className="contact-info">
        <p>Informaci&oacute;n de contacto</p>
        <label>Avenida Leandro N. Alem 1119</label>
        <label>Lunes a Viernes - 8 a 19hs</label>
        <label>0351 472-5759</label>
      </div>
    </div>
  );
};

export default Footer;
