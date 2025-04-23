import { FC } from "react";
import scss from "./HomePage.module.scss";

const HomePage: FC = () => {
  return (
    <section className={scss.HomePage}>
      <div className="container">
        <div className={scss.content}>HomePage</div>
      </div>
    </section>
  );
};

export default HomePage;
