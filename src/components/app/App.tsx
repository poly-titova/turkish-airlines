import MainScreen from '../main-screen/main-screen';
import { Tickets } from '../../types/ticket';

type AppScreenProps = {
  tickets: Tickets;
}

function App({ tickets }: AppScreenProps): JSX.Element {
  return (
    <MainScreen tickets={tickets} />
  );
}

export default App;
