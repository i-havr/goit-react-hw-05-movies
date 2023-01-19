import {
  NotFoundStyled,
  TitleStyled,
  TextStyled,
  LinkStyled,
} from './NotFound.styled';
import { Button } from '../../components/Button/Button';
import { ReactComponent as NotFoundIcon } from '../../icons/not-found.svg';

export default function NotFound() {
  return (
    <NotFoundStyled>
      <NotFoundIcon width="240" height="240" />
      <TitleStyled>Whoops, something went wrong :(</TitleStyled>
      <TextStyled>Try starting from the home page</TextStyled>
      <LinkStyled to={'/'}>
        <Button type="button">To home page</Button>
      </LinkStyled>
    </NotFoundStyled>
  );
}
