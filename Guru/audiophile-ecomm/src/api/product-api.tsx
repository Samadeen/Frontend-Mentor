import { ReactNode, createContext, useEffect, useState } from 'react';
import { useShoppingCart } from '../contexts/cart-context';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  image: {
    desktop: string;
  };
  gallery: {
    first: {
      desktop: string;
    };
    second: {
      desktop: string;
    };
    third: {
      desktop: string;
    };
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  others: {
    slug: string;
    name: string;
    image: {
      desktop: string;
    };
  }[];
}

interface ProductContextType {
  selectedItems: Product[];
}

export const ProductContext = createContext<ProductContextType | null>(null);

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [items, setItems] = useState<Product[]>([]);
  const { cartItems } = useShoppingCart();
  const ids = cartItems.map((item) => item.id);

  useEffect(() => {
    axios
      .get<Product[]>(`http://localhost:3000/data`)
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  const selectedItems = items.filter((item) => ids.includes(item.id));

  //   if (selectedItems.length === 0) {
  //     // Optional: Render a loading state or handle the empty case
  //     return <div>Your Cart is Empty</div>;
  //   }

  //   console.log(selectedItems);

  return (
    <ProductContext.Provider value={{ selectedItems }}>
      {children}
    </ProductContext.Provider>
  );
};
