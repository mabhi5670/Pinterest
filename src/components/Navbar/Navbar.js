import React from 'react';
import PinterestIcon from '@mui/icons-material/Pinterest';
import styles from './Navbar.module.css';
import About from '../../Pages/About/About';
import Business from '../../Pages/Bussiness/Bussiness';
import Press from '../../Pages/Press/Press';
import Login from '../Login/Login';
// import SignUp from '../SignUp/SignUp';
const Navbar = () => {
  return (
    <navbar>
      <div className={styles.nav}>
        <p className={styles.txtlogo}>
          <PinterestIcon
            className={styles.logo}
            sx={{ width: 40, height: 40, position: 'relative', right: '14px' }}
          />
          <span className={styles.text}>Pinterest</span>
        </p>
        <section className={styles.pages}>
          <About />
          <Business />
          <Press />
          <Login />
          {/* <SignUp /> */}
        </section>
      </div>
    </navbar>
  );
};

export default Navbar;
