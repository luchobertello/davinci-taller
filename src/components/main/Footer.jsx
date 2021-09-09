import { SocialIcon } from "react-social-icons";
import {
  ALT_MAP,
  MAP_URL,
  SOCIAL_NETWORKS,
  SOCIAL_NETWORKS_URL
} from "../../helpers/consts";
import "./Footer.less";

const socialIconsInfo = [
  {
    network: SOCIAL_NETWORKS.INSTAGRAM,
    url: SOCIAL_NETWORKS_URL[SOCIAL_NETWORKS.INSTAGRAM]
  },
  {
    network: SOCIAL_NETWORKS.TIKTOK,
    url: SOCIAL_NETWORKS_URL[SOCIAL_NETWORKS.TIKTOK]
  },
  {
    network: SOCIAL_NETWORKS.FACEBOOK,
    url: SOCIAL_NETWORKS_URL[SOCIAL_NETWORKS.FACEBOOK]
  },
  {
    network: SOCIAL_NETWORKS.WHATSAPP,
    url: SOCIAL_NETWORKS_URL[SOCIAL_NETWORKS.WHATSAPP]
  }
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        {socialIconsInfo.map(socialIconInfo => {
          return (
            <SocialIcon
              key={socialIconInfo.url}
              network={socialIconInfo.network}
              fgColor="white"
              url={socialIconInfo.url}
              target="_blank"
            />
          );
        })}
      </div>
      <div className="map-location">
        <iframe src={MAP_URL} width="700" height="400" title={ALT_MAP} />
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
