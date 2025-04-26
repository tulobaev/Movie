import { FC } from "react";
import styles from "./Footer.module.scss";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiSolidCameraMovie } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Footer: FC = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { label: "Главная", path: "/" },
    { label: "Фильмы", path: "/movies" },
    { label: "Сериалы", path: "/show" },
  ];

  const socialLinks = [
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/nn.uuuu.r",
      label: "Instagram",
    },
    {
      Icon: FaTelegramPlane,
      href: "https://web.telegram.org/k/#7800691410",
      label: "Telegram",
    },
    { Icon: FaGithub, href: "https://github.com/tulobaev", label: "GitHub" },
  ];

  return (
    <footer
      data-aos="fade-up"
      data-aos-duration="3000"
      className={styles.footer}
    >
      <div className="container">
        <div className={styles.mainContent}>
          <div className={styles.brandSection}>
            <div
              onClick={() => navigate("/")}
              className={styles.logo}
              role="button"
              aria-label="Перейти на главную страницу"
            >
              <BiSolidCameraMovie className={styles.iconMovie} />
              <h1>Movie Zone</h1>
            </div>
            <p className={styles.description}>
              Ваш лучший источник кино и сериалов. Откройте мир развлечений с
              нами!
            </p>
          </div>

          <div className={styles.linksSection}>
            <h3>Быстрые ссылки</h3>
            <ul className={styles.quickLinks}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.path)}
                    className={styles.linkButton}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.socialSection}>
            <h3>Следите за нами</h3>
            <div className={styles.socialIcons}>
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.contactInfo}>
            <p>Email: tulobaevtalgat@gmail.com</p>
            <p>Телефон: +996 999 588 728</p>
          </div>
          <div className={styles.copyright}>
            <p>© {new Date().getFullYear()} Movie Zone. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
