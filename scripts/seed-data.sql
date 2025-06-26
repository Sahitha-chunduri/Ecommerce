-- Insert sample users
INSERT INTO users (name, email, password, role) VALUES
('Admin User', 'admin@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin'),
('John Doe', 'user@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'user');

-- Insert sample products
INSERT INTO products (name, description, price, image, category, stock, featured) VALUES
('Wireless Headphones', 'High-quality wireless headphones with noise cancellation', 199.99, '/placeholder.svg?height=300&width=300', 'Electronics', 50, true),
('Smart Watch', 'Feature-rich smartwatch with health tracking', 299.99, '/placeholder.svg?height=300&width=300', 'Electronics', 30, true),
('Running Shoes', 'Comfortable running shoes for all terrains', 129.99, '/placeholder.svg?height=300&width=300', 'Sports', 75, false),
('Coffee Maker', 'Automatic coffee maker with programmable settings', 89.99, '/placeholder.svg?height=300&width=300', 'Home', 25, false),
('Laptop Backpack', 'Durable laptop backpack with multiple compartments', 59.99, '/placeholder.svg?height=300&width=300', 'Accessories', 40, false),
('Bluetooth Speaker', 'Portable Bluetooth speaker with excellent sound quality', 79.99, '/placeholder.svg?height=300&width=300', 'Electronics', 60, true);
