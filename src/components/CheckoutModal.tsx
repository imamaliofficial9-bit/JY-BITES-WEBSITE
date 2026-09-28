import React, { useState } from 'react';
import { X, CheckCircle2, CreditCard, DollarSign, Smartphone, Clock, MapPin, Receipt, ArrowRight } from 'lucide-react';
import { CartItem, OrderType } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  orderType: OrderType;
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  orderType,
  onClearCart,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'applepay' | 'cash'>('applepay');
  const [orderId, setOrderId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? (subtotal > 30 ? 0 : 3.99) : 0;
  const tax = subtotal * 0.08875;
  const total = subtotal + deliveryFee + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone) return;
    if (orderType === 'delivery' && !address) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `JY-${Math.floor(1000 + Math.random() * 9000)}`;
      setOrderId(generatedId);
      setIsSubmitting(false);
      setStep('success');
      onClearCart();
    }, 800);
  };

  const handleResetAndClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={handleResetAndClose}
      />

      <div className="relative w-full max-w-xl bg-[#14141a] rounded-3xl border border-white/[0.12] shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden z-10 my-8">
        
        {/* Header */}
        <div className="p-6 bg-[#181822] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Receipt className="w-5 h-5 text-[#f35c16]" />
            <h3 className="font-display font-black text-xl text-white">
              {step === 'form' ? 'Checkout & Details' : 'Order Confirmed!'}
            </h3>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-2 rounded-xl text-[#9e9a94] hover:text-white hover:bg-white/[0.06]"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Order Type Notice */}
            <div className="p-3.5 rounded-xl bg-[#1c1c28] border border-white/[0.08] flex items-center justify-between text-xs text-[#c4c0b8]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f35c16]" />
                <span className="font-semibold uppercase tracking-wider text-white">
                  {orderType === 'delivery' ? 'Fast Delivery' : orderType === 'takeaway' ? 'Express Takeaway' : 'Dine-In Table Service'}
                </span>
              </div>
              <span className="font-mono text-[#f35c16] font-bold">
                {items.length} {items.length === 1 ? 'item' : 'items'} · ${total.toFixed(2)}
              </span>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                Contact Information
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="customer-name-input" className="block text-xs font-semibold text-[#9e9a94] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="customer-name-input"
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-[#1b1b24] border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#68655e] focus:outline-none focus:border-[#f35c16]"
                  />
                </div>

                <div>
                  <label htmlFor="customer-phone-input" className="block text-xs font-semibold text-[#9e9a94] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    id="customer-phone-input"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 000-0000"
                    className="w-full bg-[#1b1b24] border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#68655e] focus:outline-none focus:border-[#f35c16]"
                  />
                </div>
              </div>

              {orderType === 'delivery' && (
                <div>
                  <label htmlFor="delivery-address-input" className="block text-xs font-semibold text-[#9e9a94] mb-1.5">
                    Delivery Address *
                  </label>
                  <input
                    id="delivery-address-input"
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Street address, apartment or suite number"
                    className="w-full bg-[#1b1b24] border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#68655e] focus:outline-none focus:border-[#f35c16]"
                  />
                </div>
              )}

              <div>
                <label htmlFor="order-notes-input" className="block text-xs font-semibold text-[#9e9a94] mb-1.5">
                  Kitchen Notes or Pickup Time
                </label>
                <input
                  id="order-notes-input"
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Ring bell twice, ready in 15 min, extra napkins"
                  className="w-full bg-[#1b1b24] border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#68655e] focus:outline-none focus:border-[#f35c16]"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3 pt-2">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                Payment Method
              </h4>

              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('applepay')}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                    paymentMethod === 'applepay'
                      ? 'bg-[#f35c16]/15 border-[#f35c16] text-white'
                      : 'bg-[#1a1a24] border-white/[0.08] text-[#9e9a94] hover:text-white'
                  }`}
                >
                  <Smartphone className="w-4 h-4 text-[#f35c16] mb-2" />
                  <span className="text-xs font-bold block">Digital Pay</span>
                  <span className="text-[10px] text-[#78756e]">Apple / Google</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-[#f35c16]/15 border-[#f35c16] text-white'
                      : 'bg-[#1a1a24] border-white/[0.08] text-[#9e9a94] hover:text-white'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-[#f35c16] mb-2" />
                  <span className="text-xs font-bold block">Card</span>
                  <span className="text-[10px] text-[#78756e]">Credit / Debit</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cash')}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                    paymentMethod === 'cash'
                      ? 'bg-[#f35c16]/15 border-[#f35c16] text-white'
                      : 'bg-[#1a1a24] border-white/[0.08] text-[#9e9a94] hover:text-white'
                  }`}
                >
                  <DollarSign className="w-4 h-4 text-[#f35c16] mb-2" />
                  <span className="text-xs font-bold block">On Arrival</span>
                  <span className="text-[10px] text-[#78756e]">Cash / Terminal</span>
                </button>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-white/[0.08]">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#f35c16] hover:bg-[#ff722c] text-[#0b0b0e] font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_4px_20px_rgba(243,92,22,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending to Kitchen...</span>
                ) : (
                  <>
                    <span>Confirm Order · ${total.toFixed(2)}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Order Confirmation Screen */
          <div className="p-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center text-[#10b981] mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#f35c16]">
                KITCHEN TICKET CONFIRMED
              </span>
              <h3 className="font-display font-black text-3xl text-white mt-1">
                We&apos;re Searing Your Bites!
              </h3>
              <p className="text-sm text-[#c4c0b8] mt-2">
                Order <span className="font-mono font-bold text-white text-base">#{orderId}</span> is being prepared with fresh cuts.
              </p>
            </div>

            {/* Receipt Summary Box */}
            <div className="bg-[#181822] rounded-2xl p-5 border border-white/[0.08] text-left text-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 text-[#9e9a94]">
                  <Clock className="w-4 h-4 text-[#f35c16]" />
                  <span>Estimated Ready:</span>
                </div>
                <span className="font-mono font-bold text-white text-sm">
                  {orderType === 'delivery' ? '25–35 Minutes' : '12–15 Minutes'}
                </span>
              </div>

              {orderType === 'delivery' ? (
                <div className="flex items-start gap-2 text-[#9e9a94]">
                  <MapPin className="w-4 h-4 text-[#f35c16] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">{customerName}</span>
                    <span className="text-[#9e9a94]">{address}</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between text-[#9e9a94]">
                  <span>Pickup Location:</span>
                  <span className="text-white font-medium">JYBITES Express Counter</span>
                </div>
              )}

              <div className="pt-2 border-t border-white/[0.06] flex justify-between font-bold text-white text-sm">
                <span>Total Paid:</span>
                <span className="font-mono text-[#f35c16]">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="w-full py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Done &amp; Return to Home
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
