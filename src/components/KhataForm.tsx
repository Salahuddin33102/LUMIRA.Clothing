import { useState, useEffect } from "react";
import { X, Calendar, User, Phone, Package, ShieldCheck, DollarSign, BarChart2, Check } from "lucide-react";
import { KhataEntry, addKhataEntry, getUniqueCustomers } from "@/lib/mock-khata";
import toast from "react-hot-toast";

interface KhataFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  initialData?: {
    userName: string;
    phone: string;
  };
}

export default function KhataForm({ isOpen, onClose, onSuccess, initialData }: KhataFormProps) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    userName: initialData?.userName || "",
    phone: initialData?.phone || "",
    quantity: 0,
    quality: "Standard",
    rate: 0,
  });

  const [suggestions, setSuggestions] = useState<{name: string, phone: string}[]>([]);

  // Reset to today's date and pre-fill data when opening
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        date: new Date().toISOString().split("T")[0],
        userName: initialData?.userName || "",
        phone: initialData?.phone || ""
      }));
      setSuggestions(getUniqueCustomers());
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const selectSuggestion = (sug: {name: string, phone: string}) => {
    setFormData({ ...formData, userName: sug.name, phone: sug.phone });
  };

  const filteredSuggestions = suggestions.filter(s => 
    s.name.toLowerCase().includes(formData.userName.toLowerCase()) && 
    formData.userName.length > 0 && 
    s.name.toLowerCase() !== formData.userName.toLowerCase()
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.userName || !formData.phone || formData.quantity <= 0 || formData.rate <= 0) {
      toast.error("Please fill all fields correctly");
      return;
    }

    addKhataEntry(formData);
    toast.success("Record added successfully!");
    onSuccess();
    onClose();
    // Reset form for next time
    setFormData({
      date: new Date().toISOString().split("T")[0],
      userName: "",
      phone: "",
      quantity: 0,
      quality: "Standard",
      rate: 0,
    });
  };

  const calculatePrice = () => {
    return formData.quantity * formData.rate;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm animate-in">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2rem] shadow-2xl border border-white/20 dark:border-slate-800/50 overflow-hidden scale-in">
        <div className="relative p-8 md:p-12">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">New Khata Entry</h2>
            <p className="text-slate-500 dark:text-slate-400">Fill in the details to record a new transaction</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Calendar size={16} className="text-accent-gold" /> Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-accent-gold outline-none transition-all"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              {/* User Name */}
              <div className="space-y-2 relative">
                <label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <User size={16} className="text-accent-gold" /> User Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ahmed Raza"
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-accent-gold outline-none transition-all"
                  value={formData.userName}
                  onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                />
                {filteredSuggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl max-h-48 overflow-auto">
                    {filteredSuggestions.map((sug) => (
                      <button
                        key={sug.name}
                        type="button"
                        className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 text-sm flex justify-between items-center transition-colors"
                        onClick={() => selectSuggestion(sug)}
                      >
                        <span className="font-semibold">{sug.name}</span>
                        <span className="text-slate-500 text-xs">{sug.phone}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Phone size={16} className="text-accent-gold" /> Phone
                </label>
                <input
                  type="tel"
                  placeholder="0300-1234567"
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-accent-gold outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {/* Quality */}
              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <ShieldCheck size={16} className="text-accent-gold" /> Quality
                </label>
                <select
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-accent-gold outline-none transition-all"
                  value={formData.quality}
                  onChange={(e) => setFormData({ ...formData, quality: e.target.value })}
                >
                  <option>Standard</option>
                  <option>Premium</option>
                  <option>Super Soft</option>
                  <option>Luxury Cotton</option>
                </select>
              </div>

              {/* Quantity */}
              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Package size={16} className="text-accent-gold" /> Quantity
                </label>
                <input
                  type="number"
                  placeholder="0"
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-accent-gold outline-none transition-all"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                />
              </div>

              {/* Rate */}
              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <BarChart2 size={16} className="text-accent-gold" /> Rate
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-accent-gold outline-none transition-all"
                  value={formData.rate}
                  onChange={(e) => setFormData({ ...formData, rate: Number(e.target.value) })}
                />
              </div>
            </div>

            {/* Total Price Display */}
            <div className="p-6 bg-slate-900 dark:bg-slate-950 rounded-2xl flex justify-between items-center text-white">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Total Calculated Price</p>
                <h3 className="text-3xl font-bold text-accent-gold flex items-center gap-1">
                  <DollarSign size={24} />
                  {calculatePrice().toLocaleString()}
                </h3>
              </div>
              <button 
                type="submit"
                className="btn-premium px-10 py-4"
              >
                Save Record
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
