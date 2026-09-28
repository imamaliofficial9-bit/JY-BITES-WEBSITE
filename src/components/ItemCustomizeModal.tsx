import React, { useState } from 'react';
import { X, Plus, Minus, Check } from 'lucide-react';
import { MenuItem, CartItem, CartItemOption } from '../types';

interface ItemCustomizeModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (customizedItem: CartItem) => void;
}

export const ItemCustomizeModal: React.FC<ItemCustomizeModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<CartItemOption[]>([]);
  const [instructions, setInstructions] = useState('');

  const addonChoices: CartItemOption[] = [
    { name: 'Extra Melted Cheddar Slice', price: 1.50 },
    { name: 'Smoked Beef Bacon Crunch', price: 2.00 },
    { name: 'Extra JY Secret Sauce Side', price: 0.75 },
    { name: 'Pickled Fire Jalapeños', price: 0.75 },
    { name: 'Cold Craft Soda (16oz)', price: 2.50 },
  ];

  const toggleOption = (option: CartItemOption) => {
    const exists = selectedOptions.some((o) => o.name === option.name);
    if (exists) {
      setSelectedOptions(selectedOptions.filter((o) => o.name !== option.name));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const extraTotal = selectedOptions.reduce((acc, curr) => acc + curr.price, 0);
  const unitPrice = item.price + extraTotal;
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    const cartItem: CartItem = {
      cartItemId: `${item.id}-${Date.now()}`,
      menuItem: item,
      quantity,
      selectedOptions,
      specialInstructions: instructions.trim() || undefined,
      unitPrice,
    };
    onAddToCart(cartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-[#14141a] rounded-3xl border border-white/[0.12] shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[90vh] z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Image & Close */}
        <div className="relative h-48 w-full bg-[#1b1b24] overflow-hidden shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14141a] via-transparent to-black/40" />

          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
            aria-label="Close customization dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-5 right-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#f35c16] block">
              {item.category}
            </span>
            <h3 className="font-display font-black text-2xl text-white">
              {item.name}
            </h3>
          </div>
        </div>

        {/* Scrollable Options */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          <div>
            <p className="text-[#9e9a94] text-xs sm:text-sm leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Add-ons & Sauces */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                Popular Upgrades &amp; Sauces
              </h4>
              <span className="text-[11px] text-[#9e9a94]">Optional</span>
            </div>

            <div className="space-y-2">
              {addonChoices.map((opt) => {
                const isSelected = selectedOptions.some((o) => o.name === opt.name);
                return (
                  <label
                    key={opt.name}
                    onClick={() => toggleOption(opt)}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#f35c16]/10 border-[#f35c16] text-white'
                        : 'bg-[#181822] border-white/[0.06] text-[#c4c0b8] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                          isSelected
                            ? 'bg-[#f35c16] border-[#f35c16] text-[#0b0b0e]'
                            : 'border-white/20 bg-transparent'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="font-medium text-xs sm:text-sm">{opt.name}</span>
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#f35c16]">
                      +${opt.price.toFixed(2)}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Special Instructions */}
          <div>
            <label htmlFor="modal-special-instructions" className="font-display font-bold text-white text-sm uppercase tracking-wider block mb-2">
              Special Instructions
            </label>
            <input
              id="modal-special-instructions"
              type="text"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="e.g. Extra crispy, sauce on the side, no onions"
              className="w-full bg-[#181822] border border-white/[0.08] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#78756e] focus:outline-none focus:border-[#f35c16]"
              maxLength={120}
            />
          </div>
        </div>

        {/* Footer: Quantity + Add CTA */}
        <div className="p-5 border-t border-white/[0.08] bg-[#111116] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2.5 bg-[#181822] border border-white/[0.08] rounded-xl p-1">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              className="p-1.5 rounded-lg text-white hover:bg-white/[0.08] disabled:opacity-30 disabled:hover:bg-transparent"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-mono font-bold text-white w-7 text-center text-sm tabular-nums">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="p-1.5 rounded-lg text-white hover:bg-white/[0.08]"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="flex-1 py-3.5 px-5 rounded-xl bg-[#f35c16] hover:bg-[#ff722c] text-[#0b0b0e] font-extrabold text-sm uppercase tracking-wider transition-colors flex items-center justify-between shadow-lg cursor-pointer active:scale-[0.98]"
          >
            <span>Add to Order</span>
            <span className="font-mono tabular-nums font-black text-base">
              ${totalPrice.toFixed(2)}
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};
