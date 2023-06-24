import axios from 'axios';
import { createContext, useEffect, useState, ReactNode } from 'react';

interface Headphone {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
}

interface HeadphonesContextType {
  headphones: Headphone[];
}

export const HeadphonesContext = createContext<HeadphonesContextType | null>(
  null
);

interface HeadphonesProviderProps {
  children: ReactNode;
}

export const HeadphonesProvider: React.FC<HeadphonesProviderProps> = ({
  children,
}) => {
  const [headphones, setHeadphones] = useState<Headphone[] | null>(null);

  useEffect(() => {
    axios
      .get<Headphone[]>('http://localhost:3000/data?category=headphones')
      .then((res) => {
        setHeadphones(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (headphones === null) {
    // Optional: Render a loading state or handle the null case
    return <div>Loading...</div>;
  }

  return (
    <HeadphonesContext.Provider value={{ headphones }}>
      {children}
    </HeadphonesContext.Provider>
  );
};
