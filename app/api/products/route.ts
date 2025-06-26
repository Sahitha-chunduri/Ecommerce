import { type NextRequest, NextResponse } from "next/server"

// Mock product data
const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    stock: 50,
    featured: true,
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health tracking",
    price: 299.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    stock: 30,
    featured: true,
  },
  {
    id: "3",
    name: "Running Shoes",
    description: "Comfortable running shoes for all terrains",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Sports",
    stock: 75,
    featured: false,
  },
  {
    id: "4",
    name: "Coffee Maker",
    description: "Automatic coffee maker with programmable settings",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home",
    stock: 25,
    featured: false,
  },
  {
    id: "5",
    name: "Laptop Backpack",
    description: "Durable laptop backpack with multiple compartments",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    stock: 40,
    featured: false,
  },
  {
    id: "6",
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with excellent sound quality",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    stock: 60,
    featured: true,
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get("search")
  const category = searchParams.get("category")
  const minPrice = searchParams.get("minPrice")
  const maxPrice = searchParams.get("maxPrice")

  let filteredProducts = [...products]

  if (search) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()),
    )
  }

  if (category && category !== "all") {
    filteredProducts = filteredProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase())
  }

  if (minPrice) {
    filteredProducts = filteredProducts.filter((product) => product.price >= Number.parseFloat(minPrice))
  }

  if (maxPrice) {
    filteredProducts = filteredProducts.filter((product) => product.price <= Number.parseFloat(maxPrice))
  }

  return NextResponse.json(filteredProducts)
}

export async function POST(request: NextRequest) {
  try {
    const product = await request.json()
    const newProduct = {
      ...product,
      id: Date.now().toString(),
    }
    products.push(newProduct)
    return NextResponse.json(newProduct)
  } catch (error) {
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
