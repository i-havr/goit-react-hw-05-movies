import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppStyled } from 'components/App/App.styled';
import Header from 'components/Header/Header';
import { NavLinkStyled } from 'components/Header/Header.styled';
import { Loader } from 'components/Loader/Loader';

export default function SharedLayout() {
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={3000} />
    </AppStyled>
  );
}
