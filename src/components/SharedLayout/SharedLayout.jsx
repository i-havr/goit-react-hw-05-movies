import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppStyled } from 'components/App/App.styled';
import Header from 'components/Header/Header';
import { NavLinkStyled } from 'components/Header/Header.styled';

export const SharedLayout = () => {
  return (
    <AppStyled>
      <Header>
        <nav>
          <NavLinkStyled to="/" end>
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </nav>
      </Header>
      <Outlet />
      <ToastContainer autoClose={3000} />
    </AppStyled>
  );
};
