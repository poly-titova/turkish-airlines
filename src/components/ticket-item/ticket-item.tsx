import { Ticket } from '../../types/ticket';

type TicketItemProps = {
  ticket: Ticket;
}

function TicketItem({ ticket }: TicketItemProps): JSX.Element {
  return (
    <li className='tickets__item-container ticket'>
      <div className='ticket__buy'>
        <div className='ticket__image-wrapper'>
          <img className='ticket__image' alt='Turkish Airlines' src='../../img/turkish-airlines.jpg' />
        </div>

        <button className='ticket__button-buy'>Купить за {ticket.price}₽</button>
      </div>

      <div className='ticket__description'>
        <div className='ticket__departure-container'>
          <p className='ticket__time'>{ticket.departure_time}</p>
          <p className='ticket__origin'>{ticket.origin}, {ticket.origin_name}</p>
          <p className='ticket__date'>{ticket.departure_date}</p>
        </div>

        <p className='ticket__stops'>{ticket.stops}</p>
        <span className='ticket__stops-icon' />

        <div className='ticket__arrival-container'>
          <p className='ticket__time'>{ticket.arrival_time}</p>
          <p className='ticket__destination'>{ticket.destination}, {ticket.destination_name}</p>
          <p className='ticket__date'>{ticket.arrival_date}</p>
        </div>
      </div>
    </li>
  );
}

export default TicketItem;
