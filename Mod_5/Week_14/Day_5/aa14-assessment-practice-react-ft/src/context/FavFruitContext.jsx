import { createContext, useState, useContext } from 'react';

//Context
export const FavFruitContext = createContext();

//Consumer
export const useFavFruit = () => useContext(FavFruitContext)

//Dynamic Provider
export default function FavFruitProvider(props) {
  const [favFruitId, setFavFruitId] = useState('1');

  return (
    <FavFruitContext.Provider
      value={{
        favFruitId,
        setFavFruitId
      }}
    >
      {props.children}
    </FavFruitContext.Provider>
  )
}