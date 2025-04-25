import { FC } from "react";
import scss from "./Content.module.scss";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Content: FC = () => {
  return (
    <section className={scss.Content}>
      <div className="container">
        <div className={scss.content}>
          <Popular />
          <TopRated />
        </div>
      </div>
    </section>
  );
};

export default Content;
