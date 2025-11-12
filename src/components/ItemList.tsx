import React, { useContext } from 'react';
import Item from '../components/Item';
import NoResultsImg from '../components/NoResultsImg';
import { v4 as uuidv4 } from 'uuid';
import { Animated } from 'react-animated-css';
import { AppContext } from '../App';
import { Drink } from '../types';

interface ItemListProps {
  items: Drink[] | null;
}

export default function ItemList({ items }: ItemListProps) {
  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const { loading } = context;

  return (
    <Animated animationIn="fadeIn" isVisible={!loading} animationInDuration={1000}>
      <div>
        {items && items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
              <Item key={uuidv4()} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-12">
            <NoResultsImg />
          </div>
        )}
      </div>
    </Animated>
  );
}
