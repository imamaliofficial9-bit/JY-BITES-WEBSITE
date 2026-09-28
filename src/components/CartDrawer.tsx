import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, Bike, Store, Utensils } from 'lucide-react';
import { CartItem, OrderType } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  orderType: OrderType;
  onChangeOrderType: (type: OrderType) => void;
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onProceedToCheckout: () => void;
  onStartBrowsing: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  orderType,
  onChangeOrderType,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onStartBrowsing,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);
  const [selectedTip, setSelectedTip] = useState<number>(2.00);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? (subtotal > 30 ? 0 : 3.99) : 0;
  const tax = subtotal * 0.08875;
  const finalTotal = Math.max(0, subtotal - appliedDiscount + deliveryFee + tax + selectedTip);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'JYBITES10' || code === 'CRUNCH' || code === 'BOLD') {
      setAppliedDiscount(3.00);
      setPromoMessage({ text: 'Promo code applied: $3.00 OFF!', isError: false });
    } else if (code === '') {
      setAppliedDiscount(0);
      setPromoMessage(null);
    } else {
      setPromoMessage({ text: 'Invalid code. Try "JYBITES10" or "CRUNCH"', isError: true });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111116] border-l border-white/[0.1] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-6 border-b border-white/[0.08] flex items-center justify-between bg-[#14141b]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#f35c16]" />
              <h2 className="font-display font-black text-xl text-white">Your Crave Bag</h2>
              <span className="font-mono text-xs bg-[#f35c16]/15 text-[#f35c16] font-bold px-2 py-0.5 rounded-full">
                {items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-[#9e9a94] hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Order Type Toggle */}
          <div className="px-6 py-3 bg-[#0d0d12] border-b border-white/[0.06]">
            <div className="grid grid-cols-3 gap-1 p-1 bg-[#181822] rounded-xl border border-white/[0.06]">
              <button
                type="button"
                onClick={() => onChangeOrderType('delivery')}
                className={`py-2 px-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  orderType === 'delivery'
                    ? 'bg-[#f35c16] text-[#0b0b0e] shadow-sm'
                    : 'text-[#9e9a94] hover:text-white'
                }`}
              >
                <Bike className="w-3.5 h-3.5" />
                <span>Delivery</span>
              </button>
              <button
                type="button"
                onClick={() => onChangeOrderType('takeaway')}
                className={`py-2 px-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  orderType === 'takeaway'
                    ? 'bg-[#f35c16] text-[#0b0b0e] shadow-sm'
                    : 'text-[#9e9a94] hover:text-white'
                }`}
              >
                <Store className="w-3.5 h-3.5" />
                <span>Takeaway</span>
              </button>
              <button
                type="button"
                onClick={() => onChangeOrderType('dine-in')}
                className={`py-2 px-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  orderType === 'dine-in'
                    ? 'bg-[#f35c16] text-[#0b0b0e] shadow-sm'
                    : 'text-[#9e9a94] hover:text-white'
                }`}
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>Dine-In</span>
              </button>
            </div>
            {orderType === 'delivery' && (
              <div className="mt-2 text-[11px] text-[#9e9a94] flex items-center justify-between">
                <span>Free delivery on orders over $30.00</span>
                <span className="text-[#f35c16] font-medium">Est. 25-35 min</span>
              </div>
            )}
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#78756e] mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  Your bag is currently empty
                </h3>
                <p className="text-xs text-[#9e9a94] max-w-xs mb-6">
                  Ready to satisfy your cravings? Explore our juicy smash burgers, crispy chicken, and loaded sides.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onStartBrowsing();
                  }}
                  className="px-6 py-3 rounded-xl bg-[#f35c16] text-[#0b0b0e] font-bold text-xs uppercase tracking-wider hover:bg-[#ff722c] transition-colors"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="p-3.5 rounded-2xl bg-[#16161e] border border-white/[0.06] flex gap-3.5 items-start justify-between"
                  >
                    {/* Thumbnail */}
                    <img
                      src={item.menuItem.image}
                      alt={item.menuItem.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 border border-white/[0.08]"
                      referrerPolicy="no-referrer"
                    />

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-display font-bold text-sm text-white truncate">
                          {item.menuItem.name}
                        </h4>
                        <span className="font-mono font-bold text-xs text-[#f35c16] tabular-nums shrink-0">
                          ${(item.unitPrice * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      {/* Options list */}
                      {item.selectedOptions.length > 0 && (
                        <div className="text-[11px] text-[#9e9a94] mt-0.5 line-clamp-1">
                          {item.selectedOptions.map((o) => o.name).join(', ')}
                        </div>
                      )}

                      {/* Note */}
                      {item.specialInstructions && (
                        <div className="text-[10px] text-[#f59e0b] italic mt-0.5 truncate">
                          &ldquo;{item.specialInstructions}&rdquo;
                        </div>
                      )}

                      {/* Stepper + Remove */}
                      <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/[0.04]">
                        <div className="flex items-center gap-2 bg-[#1c1c26] rounded-lg p-0.5 border border-white/[0.06]">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                            className="p-1 rounded text-[#9e9a94] hover:text-white"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-xs font-bold text-white w-4 text-center tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                            className="p-1 rounded text-[#9e9a94] hover:text-white"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.cartItemId)}
                          className="text-[#78756e] hover:text-red-400 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="pt-2">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 text-[#78756e] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Promo code (e.g. CRUNCH)"
                        className="w-full bg-[#16161e] border border-white/[0.08] text-xs text-white placeholder-[#78756e] rounded-xl pl-8 pr-3 py-2.5 focus:outline-none focus:border-[#f35c16]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-white/[0.08] hover:bg-white/[0.14] text-xs font-bold text-white rounded-xl transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  {promoMessage && (
                    <p className={`text-[11px] mt-1.5 ${promoMessage.isError ? 'text-red-400' : 'text-[#10b981]'}`}>
                      {promoMessage.text}
                    </p>
                  )}
                </form>

                {/* Tip Selector */}
                <div className="pt-3 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between text-xs text-[#9e9a94] mb-2">
                    <span>Add Tip for the Crew</span>
                    <span className="font-mono text-white tabular-nums">${selectedTip.toFixed(2)}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[0, 2.00, 3.00, 5.00].map((tip) => (
                      <button
                        key={tip}
                        type="button"
                        onClick={() => setSelectedTip(tip)}
                        className={`py-1.5 text-xs font-mono font-bold rounded-lg border transition-colors ${
                          selectedTip === tip
                            ? 'bg-[#f35c16]/20 border-[#f35c16] text-[#f35c16]'
                            : 'bg-[#181822] border-white/[0.06] text-[#9e9a94] hover:text-white'
                        }`}
                      >
                        {tip === 0 ? 'None' : `$${tip}`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-[#14141b] border-t border-white/[0.08] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#9e9a94]">
                  <span>Subtotal</span>
                  <span className="font-mono text-white tabular-nums">${subtotal.toFixed(2)}</span>
                </div>

                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-[#10b981]">
                    <span>Discount</span>
                    <span className="font-mono tabular-nums">-${appliedDiscount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#9e9a94]">
                  <span>{orderType === 'delivery' ? 'Delivery Fee' : 'Packaging'}</span>
                  <span className="font-mono text-white tabular-nums">
                    {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between text-[#9e9a94]">
                  <span>Estimated Tax</span>
                  <span className="font-mono text-white tabular-nums">${tax.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/[0.08]">
                  <span>Total</span>
                  <span className="font-mono text-[#f35c16] text-xl tabular-nums font-black">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onProceedToCheckout}
                className="w-full py-4 rounded-xl bg-[#f35c16] hover:bg-[#ff722c] text-[#0b0b0e] font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_4px_20px_rgba(243,92,22,0.4)] flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-[#78756e]">
                Instant kitchen order routing · Freshly prepared within minutes
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
