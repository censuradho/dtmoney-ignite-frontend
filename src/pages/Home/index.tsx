import { HomeComponent } from './Home'
import { TransactionProvider,} from "Provider/TransactionProvider";


export function Home () {

  return (
    <TransactionProvider>
      <HomeComponent />
    </TransactionProvider>
  );
}
