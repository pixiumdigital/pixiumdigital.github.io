import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons"
import LanguageChanger from './LanguageChanger';
import { useTranslations } from 'next-intl';

const Footer = () => {
// export function Footer() {

  // const t = useTranslations();

  return (<footer className="footer">
  <div className="container">

    <div className="footer-top section">

      <div className="footer-brand">

        <p className="footer-list-title">About Pixium Digital</p>

        <p className="footer-text text-left">
        {/* {t('description')} */}
        Pixium Digital is an agile software development company headquartered in Singapore. 
        Our dedicated focus lies in meticulously shaping our clients' projects 
        from inception to a successful launch, ensuring transformative outcomes.
        </p>

        <ul className="social-list">

          <li>
            <a target="_blank" href="https://www.linkedin.com/company/pixium-digital-pte-ltd" className="social-link">
              <FontAwesomeIcon icon={faLinkedin}/>
            </a>
          </li>

          <li>
            <a target="_blank" href="http://facebook.com/pixiumdigital" className="social-link">
              <FontAwesomeIcon icon={faFacebook}/>
            </a>
          </li>

          <li>
            <a target="_blank" href="https://dev.to/pixiumdigital" className="social-link">
              <FontAwesomeIcon icon={faDev}/>
            </a>
          </li>

        </ul>

      </div>

      <ul className="footer-list">
        <li>
          <p className="footer-list-title">Quick Links</p>
        </li>
        <li>
          <a href="services" className="footer-link">Services</a>
        </li>
        <li>
          <a href="/about-us" className="footer-link">About us</a>
        </li>
        <li>
          <a href="use-case" className="footer-link">Use case</a>
        </li>
        <li>
          <a href="/contact-us" className="footer-link">Contact us</a>
        </li>
      </ul>

      {/* <ul className="footer-list">
        <li>
          <p className="footer-list-title">Community</p>
        </li>
        <li>
          <a href="#" className="footer-link">Help Center</a>
        </li>
        <li>
          <a href="#" className="footer-link">Partners</a>
        </li>
        <li>
          <a href="#" className="footer-link">Suggestions</a>
        </li>
        <li>
          <a href="#" className="footer-link">Blog</a>
        </li>
        <li>
          <a href="#" className="footer-link">Newsletters</a>
        </li>
      </ul> */}

      <ul className="footer-list">

        <li>
          <p className="footer-list-title">Find Us</p>
          <div className="text-right">

            <p className="footer-text">
              Singapore
              #15-02 Peninsula Plaza,
              111 North Bridge Road,<br></br>
              179098 Singapore<br></br>
              Email: contactus@pixiumdigital.com
            </p>

            <p className="footer-text">
              France - Monaco, Beausoleil
              33 boulevard du Général Leclerc, <br></br>
              06240 Beausoleil<br></br>
              Email: contactus@pixiumdigital.com
            </p>

            <p className="footer-text">
              Málaga, Spain<br></br>
              Email: contactus@pixiumdigital.com
            </p>
          </div>
        </li>

      </ul>

    </div>

    <div className="footer-bottom">

      <p className="copyright">
        &copy; {new Date().getFullYear()} Pixium Digital. All Rights Reserved
      </p>

      <div>
        <LanguageChanger />
      </div>
      

      {/* <ul className="footer-bottom-list">

        <li>
          <a href="#" className="footer-bottom-link">Terms and conditions</a>
        </li>

        <li>
          <a href="#" className="footer-bottom-link">Privacy policy</a>
        </li>

        <li>
          <a href="#" className="footer-bottom-link">Login / Signup</a>
        </li>

      </ul> */}

    </div>

  </div>
</footer>
  );
}

export default Footer;
