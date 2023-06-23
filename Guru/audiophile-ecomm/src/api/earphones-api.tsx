import axios from 'axios';
import { createContext, useEffect, useState, ReactNode } from 'react';

interface Earphone {
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

interface EarphonesContextType {
  earphones: Earphone[];
}

export const EarphonesContext = createContext<EarphonesContextType | null>(
  null
);

interface EarphonesProviderProps {
  children: ReactNode;
}

export const EarphonesProvider: React.FC<EarphonesProviderProps> = ({
  children,
}) => {
  const [earphones, setEarphones] = useState<Earphone[] | null>(null);

  useEffect(() => {
    axios
      .get<Earphone[]>('http://localhost:3000/data?category=earphones')
      .then((res) => {
        setEarphones(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (earphones === null) {
    // Optional: Render a loading state or handle the null case
    return <div>Loading...</div>;
  }

  return (
    <EarphonesContext.Provider value={{ earphones }}>
      {children}
    </EarphonesContext.Provider>
  );
};
