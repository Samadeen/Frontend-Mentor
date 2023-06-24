import axios from 'axios';
import { createContext, useEffect, useState, ReactNode } from 'react';

interface Speaker {
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

interface SpeakersContextType {
  speakers: Speaker[];
}

export const SpeakersContext = createContext<SpeakersContextType | null>(null);

interface SpeakersProviderProps {
  children: ReactNode;
}

export const SpeakersProvider: React.FC<SpeakersProviderProps> = ({
  children,
}) => {
  const [speakers, setSpeakers] = useState<Speaker[] | null>(null);

  useEffect(() => {
    axios
      .get<Speaker[]>('http://localhost:3000/data?category=speakers')
      .then((res) => {
        setSpeakers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (speakers === null) {
    // Optional: Render a loading state or handle the null case
    return <div>Loading...</div>;
  }

  return (
    <SpeakersContext.Provider value={{ speakers }}>
      {children}
    </SpeakersContext.Provider>
  );
};
