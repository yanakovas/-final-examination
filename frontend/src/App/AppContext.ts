import { createContext, Dispatch } from 'react';
import ItemsState from '../features/items/types/State';

type AppContextType = {
  state: ItemsState;
  // dispatch: Dispatch<>;
};

const AppContext = createContext<AppContextType>(undefined as any);

export default AppContext;
