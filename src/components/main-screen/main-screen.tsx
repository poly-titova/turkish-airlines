import TicketList from '../ticket-list/ticket-list';
import FormList from '../form-list/form-list';

function MainScreen(): JSX.Element {
  return (
    <main>
      <div className="header__wrapper"></div>

      <div className="main__wrapper">
        <TicketList />
        <FormList />
      </div>
    </main>
  );
}

export default MainScreen;
