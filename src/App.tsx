/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { MenuSection } from './components/MenuSection';
import { SpecialCombo } from './components/SpecialCombo';
import { CrunchHourSpecial } from './components/CrunchHourSpecial';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { OrderCTA } from './components/OrderCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ItemCustomizeModal } from './components/ItemCustomizeModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { DirectionsModal } from './components/DirectionsModal';
import { MENU_ITEMS } from './data/menuData';
import { CartItem, CategoryType, MenuItem, OrderType } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isDirectionsOpen, setIsDirectionsOpen] = useState(false);
  const [itemToCustomize, setItemToCustomize] = useState<MenuItem | null>(null);
  const [orderType, setOrderType] = useState<OrderType>('delivery');

  // Quick add item to cart directly with standard recipe
  const handleQuickAdd = (item: MenuItem) => {
    const existingIndex = cartItems.findIndex(
      (ci) => ci.menuItem.id === item.id && ci.selectedOptions.length === 0 && !ci.specialInstructions
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      setCartItems(updated);
    } else {
      const newCartItem: CartItem = {
        cartItemId: `${item.id}-${Date.now()}`,
        menuItem: item,
        quantity: 1,
        selectedOptions: [],
        unitPrice: item.price,
      };
      setCartItems((prev) => [...prev, newCartItem]);
    }

    setIsCartOpen(true);
  };

  // Add customized item from customize modal
  const handleAddCustomized = (customItem: CartItem) => {
    setCartItems((prev) => [...prev, customItem]);
    setIsCartOpen(true);
  };

  // Stepper updates
  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
        )
      );
    }
  };

  // Remove item
  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  // Clear cart on successful order
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Scroll to menu
  const scrollToMenu = (cat?: CategoryType) => {
    if (cat) setSelectedCategory(cat);
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0b0b0e] text-[#ede8e1] flex flex-col font-sans selection:bg-[#f35c16] selection:text-white">
      {/* Fixed Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOrderNowClick={() => scrollToMenu()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOrderNowClick={() => scrollToMenu()}
          onExploreMenuClick={() => scrollToMenu()}
          onAddSignatureToCart={() => handleQuickAdd(MENU_ITEMS[0])}
        />

        {/* Categories Section */}
        <Categories
          onSelectCategory={(cat) => scrollToMenu(cat)}
        />

        {/* Popular Menu Section with Interactive Filters */}
        <MenuSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onQuickAdd={handleQuickAdd}
          onOpenCustomize={(item) => setItemToCustomize(item)}
        />

        {/* Special Combo Section */}
        <SpecialCombo
          onOrderCombo={(combo) => handleQuickAdd(combo)}
        />

        {/* Limited Time Crunch Hour Special */}
        <CrunchHourSpecial
          onTrySpecial={(special) => handleQuickAdd(special)}
        />

        {/* About JYBITES Section */}
        <AboutSection />

        {/* Why Choose JYBITES */}
        <WhyChooseUs />

        {/* Testimonials */}
        <Testimonials />

        {/* Bottom Conversion Order CTA */}
        <OrderCTA
          onOrderNowClick={() => scrollToMenu()}
          onViewMenuClick={() => scrollToMenu()}
        />

        {/* Contact & Location Section */}
        <ContactSection
          onOpenDirections={() => setIsDirectionsOpen(true)}
          onOrderNowClick={() => scrollToMenu()}
        />
      </main>

      {/* Sophisticated Dark Footer */}
      <Footer
        onSelectCategory={(cat) => scrollToMenu(cat)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        orderType={orderType}
        onChangeOrderType={setOrderType}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onStartBrowsing={() => scrollToMenu()}
      />

      {/* Item Customizer Modal */}
      <ItemCustomizeModal
        item={itemToCustomize}
        onClose={() => setItemToCustomize(null)}
        onAddToCart={handleAddCustomized}
      />

      {/* Checkout & Order Confirmation Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        orderType={orderType}
        onClearCart={handleClearCart}
      />

      {/* Directions Modal */}
      <DirectionsModal
        isOpen={isDirectionsOpen}
        onClose={() => setIsDirectionsOpen(false)}
      />
    </div>
  );
}
