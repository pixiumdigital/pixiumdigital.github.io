import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons"
// import LanguageChanger from './LanguageChanger';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './languageSwithcer';
// import LanguageSwitcher from './';

type Props = {
  locale: string;
}

export default async function Footer({locale} : Props) {
// export function Footer() {

  // const t = useTranslations();

  const messages = await import(`@/messages/${locale}.json`); 

  return (<footer className="footer">
  <div className="container">

      <div className="footer-top section">

          <div className="footer-brand">

              <p className="footer-list-title text-left">{messages.footer.title_about}</p>

              <p className="footer-text text-left">
                {messages.home.description}
              </p>

              <ul className="social-list">
                  <li>
                      <a rel="canonical" target="_blank" href="https://www.linkedin.com/company/pixium-digital-pte-ltd" className="social-link">
                          <FontAwesomeIcon icon={faLinkedin}/>
                      </a>
                  </li>

                  <li>
                      <a rel="canonical" target="_blank" href="http://facebook.com/pixiumdigital" className="social-link">
                          <FontAwesomeIcon icon={faFacebook}/>
                      </a>
                  </li>

                  <li>
                      <a rel="canonical" target="_blank" href="https://dev.to/pixiumdigital" className="social-link">
                          <FontAwesomeIcon icon={faDev}/>
                      </a>
                  </li>

              </ul>

              <p className="footer-list-title text-left mt-4">{messages.footer.title_language}</p>
              <LanguageSwitcher locale={locale} />

          </div>

          <ul className="footer-list  text-left">
              <li>
                <p className="footer-list-title">{messages.footer.title_links}</p>
              </li>
              <li>
                  <a rel="canonical" href={"/"+locale+"/services"} className="footer-link">{messages ? messages.navigation.services : ""}</a>
              </li>
              <li>
                <a rel="canonical" href={"/"+locale+"/about-us"} className="footer-link">{messages.navigation.about}</a>
              </li>
              <li>
                  <a rel="canonical" href={"/"+locale+"/use-case"} className="footer-link">{messages.navigation.usecase}</a>
              </li>
              <li>
                  <a rel="canonical" href={"/"+locale+"/blog"} className="footer-link">{messages.navigation.blog}</a>
              </li>
              <li>
                  <a rel="canonical" href={"/"+locale+"/contact-us"} className="footer-link">{messages.navigation.contact}</a>
              </li>
              <li>
                  <a rel="canonical" href={"/"+locale+"/reviews"} className="footer-link">{messages.navigation.review}</a>
              </li>
          </ul>

        
          <ul className="footer-list  text-left">

            <li>
              <p className="footer-list-title">{messages.footer.title_contact}</p>
              <div className="">

                <p className="footer-text">
                  Singapore
                  Blk 584, #08-3087,
                  Ang Mo Kio Ave 3,<br></br>
                  560584 Singapore<br></br>
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
          <a rel="canonical" href="/sitemap.xml" target="_blank" style={{ color:"#777", display:"flex", right:"0px"}}>
              Sitemap
          </a>
          
          
          {/* <div>
            <LanguageChanger />
          </div> */}
          

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
