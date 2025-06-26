"use client"

import { Header } from "@/components/header"
import { CartItems } from "@/components/cart-items"
import { CartSummary } from "@/components/cart-summary"
import { useCart } from "@/components/cart-provider"

export default function CartPage() {
  const { items } = useCart()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Your cart is empty</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CartItems />
            </div>
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
