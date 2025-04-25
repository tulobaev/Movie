import { FC } from 'react';
import scss from './TVshowPage.module.scss'; 
const TVshowPage:FC = () => {
     return (
      <div id={scss.TVshowPage}>
        <div className='container'>
         <div className={scss.content}>
           TVshowPage 
         </div>
        </div>
      </div>
    );
};
export default TVshowPage;