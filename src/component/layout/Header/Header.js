// Import modules ==============================================================
import React from 'react';
import {connect} from 'react-redux';

// Import styles ===============================================================
import style from './style.scss';

// Import images ===============================================================
import PALogo from 'asset/image/PALogo.png';

// Import components ===========================================================
import {Container, Grid, Image, Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Button from 'component/base/Button';

import {CONTAINER, BOX} from './style.scss';

const Header = ({currentUser, logout}) => {
  const activeItem = 'home';

  return (
    <Menu
      fixed='top'
      pointing
      secondary
      borderless
      style={{backgroundColor: 'white'}}
    >
      <Container>
        <Menu.Item style={{padding: '10 0 10 0'}} fitted header>
          <Image src={PALogo} />
        </Menu.Item>
        <div className={CONTAINER}>
          <Menu.Item>
            <Link to='/customers'>Customers</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/sites'>Sites</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/workorders'>Work Orders</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/schedule'>Schedule</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/settings'>Settings</Link>
          </Menu.Item>
        </div>
        <div
          className={CONTAINER}
          style={{marginRight: '0', marginLeft: '0'}}
        >
          <Menu.Menu position='right'>
            <Menu.Item>Right Side Menu</Menu.Item>
          </Menu.Menu>
        </div>
      </Container>
    </Menu>
  );
};

Header.defaultProps = {
  currentUser: {
    username: '',
  },
};

Header.displayName = 'Layout/Header';

export default Header;
