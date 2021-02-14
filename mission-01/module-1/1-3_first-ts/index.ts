// interface - generic

interface Developer<T, X = null> {
  name: string;
  computer: {
    cpu: string;
    motherboard: string;
    ram: number;
  };
  smartWatch: T;
  bike?: X;
}

interface PoorDevWatch {
  brand: string;
  model: string;
  display: string;
}

const poorDeveloper: Developer<PoorDevWatch> = {
  name: "abul",
  computer: {
    cpu: "intel",
    motherboard: "asus",
    ram: 16,
  },
  smartWatch: {
    brand: "apple",
    model: "ap11",
    display: "oled",
  },
};

interface RichDevWatch {
  brand: string;
  model: string;
  heartTrack: boolean;
  sleepTrack: boolean;
}

interface RichDevBike {
  model: string;
  version: string;
}

const richDeveloper: Developer<RichDevWatch, RichDevBike> = {
  name: "abul",
  computer: {
    cpu: "ryzn",
    motherboard: "asus",
    ram: 32,
  },
  smartWatch: {
    brand: "apple 15",
    model: "apl15",
    heartTrack: true,
    sleepTrack: true,
  },
  bike: {
    model: "r15",
    version: "2024",
  },
};
