import TicketList from '../ticket-list/ticket-list';
import FormList from '../form-list/form-list';
import { Tickets } from '../../types/ticket';

type MainScreenProps = {
  tickets: Tickets;
};

function MainScreen({ tickets }: MainScreenProps): JSX.Element {
  return (
    <main>
      <div className='header__wrapper'>
        <a className='header__logo' href='#'>
          <img src='../../img/logo.jpg' alt='Логотип Turkish Airlines' />
        </a>
      </div>

      <div className='main__wrapper'>
        <TicketList tickets={tickets} />
        <FormList />
      </div>
    </main>
  );
}

export default MainScreen;
