import { NotFoundStyled, TitleStyled, TextStyled } from './NotFound.styled';
import { IconButton } from './IconButton/IconButton';
import { ReactComponent as NotFoundIcon } from '../../icons/not-found.svg';

export default function NotFound() {
  return (
    <NotFoundStyled>
      <NotFoundIcon width="240" height="240" />
      <TitleStyled>Whoops, something went wrong :(</TitleStyled>
      <TextStyled>Try to reload the page</TextStyled>
      <IconButton
        type="button"
        class="button button--medium button--green"
        onclick="location.reload()"
      >
        Reload
      </IconButton>
    </NotFoundStyled>
  );
}
