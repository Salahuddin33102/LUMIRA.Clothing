export interface KhataEntry {
  id: string;
  date: string;
  userName: string;
  phone: string;
  quantity: number;
  quality: string;
  rate: number;
  price: number;
  createdAt: Date;
}

const STORAGE_KEY = "lumira-khata-entries";

const defaultEntries: KhataEntry[] = [
  {
    id: "1",
    date: "2024-04-15",
    userName: "Ahmed Khan",
    phone: "0300-1234567",
    quantity: 100,
    quality: "Premium Cotton",
    rate: 1500,
    price: 150000,
    createdAt: new Date(),
  },
  {
    id: "2",
    date: "2024-04-14",
    userName: "Zubair Textiles",
    phone: "0321-7654321",
    quantity: 50,
    quality: "Standard Silk",
    rate: 2200,
    price: 110000,
    createdAt: new Date(),
  },
];

const isBrowser = () => typeof window !== "undefined";

function loadEntries(): KhataEntry[] {
  if (!isBrowser()) return defaultEntries;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultEntries;
    
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return defaultEntries;

    return parsed.map((e: any) => ({ 
      ...e, 
      createdAt: e.createdAt ? new Date(e.createdAt) : new Date() 
    }));
  } catch (err) {
    console.error("Failed to load entries from localStorage", err);
    return defaultEntries;
  }
}

function saveEntries(entries: KhataEntry[]) {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function getKhataEntries(): KhataEntry[] {
  return loadEntries();
}

export const getUniqueCustomers = () => {
  const entries = loadEntries();
  const customers = entries.map(e => ({ name: e.userName, phone: e.phone }));
  return Array.from(new Map(customers.map(item => [item.name, item])).values());
};

export const addKhataEntry = (entry: Omit<KhataEntry, "id" | "createdAt" | "price">) => {
  const currentEntries = loadEntries();
  const newEntry: KhataEntry = {
    ...entry,
    id: Math.random().toString(36).substr(2, 9),
    price: entry.quantity * entry.rate,
    createdAt: new Date(),
  };
  const updated = [newEntry, ...currentEntries].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  saveEntries(updated);
  return newEntry;
};

export const deleteKhataEntry = (id: string) => {
  const currentEntries = loadEntries();
  const updated = currentEntries.filter((e) => e.id !== id);
  saveEntries(updated);
};
