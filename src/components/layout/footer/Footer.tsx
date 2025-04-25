import { FC } from "react";
import scss from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <section className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <h1>
            LOGO <span>представляет!</span>
          </h1>
          <div className={scss.ol}>
            <ol>
              Footer
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
            </ol>
            <ol>
              Footer
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
            </ol>
            <ol>
              Footer
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
            </ol>
            <ol>
              Footer
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
              <li>word is movie and cartoon</li>
            </ol>
          </div>
        </div>
      </div>
          <div className={scss.mini_footer}>
            <p>tulobaevtalgat@gmail.com 099958872876642</p>
          </div>
    </section>
  );
};

export default Footer;
