import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (<footer className="footer">
  <div className="container">

    <div className="footer-top section">

      <div className="footer-brand">

        <p className="footer-list-title">About Pixium Digital</p>

        <p className="footer-text">
        Pixium Digital is an agile software development company headquartered in Singapore. 
        Our dedicated focus lies in meticulously shaping our clients' 
        projects from inception to a successful launch, ensuring transformative outcomes.
        </p>

        <ul className="social-list">

          <li>
            <a href="#" className="social-link">
              {/* <LogoLinkedin style={{height:"50", width:"50"}} /> */}
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              {/* <ion-icon name="logo-twitter"></ion-icon> */}
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              {/* <ion-icon name="logo-facebook"></ion-icon> */}
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              {/* <ion-icon name="logo-skype"></ion-icon> */}
            </a>
          </li>

        </ul>

      </div>

      <ul className="footer-list">
        <li>
          <p className="footer-list-title">Usefull Links</p>
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

      <ul className="footer-list">

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

      </ul>

      <ul className="footer-list">

        <li>
          <p className="footer-list-title">Find Us</p>

          <p className="footer-text">
            Singapore
            #15-02 Peninsula Plaza,
            111 North Bridge Road,
            179098 Singapore
            Email: contactus@pixiumdigital.com
          </p>

          <p className="footer-text">
            Beausoleil, France - Monaco
            33 boulevard du Général Leclerc, 06240 Beausoleil
            Email: contactus@pixiumdigital.com
          </p>

          <p className="footer-text">
            Málaga, Spain
            Email: contactus@pixiumdigital.com
          </p>
        </li>

      </ul>

    </div>

    <div className="footer-bottom">

      <p className="copyright">
        &copy; {new Date().getFullYear()} Pixium Digital. All Rights Reserved
      </p>

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
