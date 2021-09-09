import { useState } from "react";
import { Affix } from "antd";
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
  }
];

const Footer = () => {
  const [isAffixed, setIsAffixed] = useState();

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
        <Affix offsetBottom={20} className={isAffixed ? "affixed-whatsapp" : null} onChange={affixed => setIsAffixed(affixed)}>
          <SocialIcon
            key={SOCIAL_NETWORKS_URL[SOCIAL_NETWORKS.WHATSAPP]}
            network={SOCIAL_NETWORKS.WHATSAPP}
            fgColor="white"
            url={SOCIAL_NETWORKS_URL[SOCIAL_NETWORKS.WHATSAPP]}
            target="_blank"
          />
        </Affix>
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
