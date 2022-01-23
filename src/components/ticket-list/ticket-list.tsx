import TicketItem from '../ticket-item/ticket-item';
import { Tickets } from '../../types/ticket';

type TicketListProps = {
  tickets: Tickets;
}

function TicketList({ tickets }: TicketListProps): JSX.Element {
  return (
    <section className='tickets'>
      <h2 className='visually-hidden'>Билеты</h2>
      <ul className='tickets__list'>
        {tickets.map((ticket, index) => {
          const keyValue = `${index}`;
          return (
            <TicketItem key={keyValue} ticket={ticket} />
          );
        })}
      </ul>
    </section>
  );
}

export default TicketList;
