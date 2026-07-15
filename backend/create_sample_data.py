import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from products.models import Category, Product, ProductImage, Review
from django.contrib.auth.models import User

def create_sample_data():
    # Create categories
    categories_data = [
        {'name': 'Smartphones', 'description': 'Latest smartphones from top brands'},
        {'name': 'Laptops', 'description': 'Powerful laptops for work and gaming'},
        {'name': 'Tablets', 'description': 'Tablets for productivity and entertainment'},
        {'name': 'Headphones', 'description': 'Premium audio experience'},
        {'name': 'Cameras', 'description': 'Professional and amateur cameras'},
        {'name': 'Gaming', 'description': 'Gaming consoles and accessories'},
        {'name': 'Accessories', 'description': 'All your tech accessories'},
        {'name': 'Smart Home', 'description': 'Smart home devices'},
        {'name': 'Wearables', 'description': 'Smartwatches and fitness trackers'},
        {'name': 'Audio', 'description': 'Speakers and audio equipment'},
    ]

    categories = []
    for cat_data in categories_data:
        category, created = Category.objects.get_or_create(
            name=cat_data['name'],
            defaults={'description': cat_data['description']}
        )
        categories.append(category)
        print(f" {'Created' if created else 'Exists'} category: {category.name}")

    # Create products
    products_data = [
        {
            'name': 'iPhone 15 Pro Max',
            'description': 'Experience the future of smartphones with the iPhone 15 Pro Max. Featuring the powerful A17 Pro chip, titanium design, and advanced camera system.',
            'price': 1199.00,
            'category': 'smartphones',
            'stock': 15,
            'image': 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
            'brand': 'Apple',
            'rating': 4.8,
            'featured': True,
        },
        {
            'name': 'Samsung Galaxy S24 Ultra',
            'description': 'The ultimate Galaxy experience with AI-powered features, stunning display, and professional-grade camera.',
            'price': 1299.00,
            'category': 'smartphones',
            'stock': 20,
            'image': 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
            'brand': 'Samsung',
            'rating': 4.7,
            'featured': True,
        },
        {
            'name': 'MacBook Pro 16"',
            'description': 'The most powerful MacBook Pro ever with M3 Pro chip, stunning Liquid Retina XDR display, and all-day battery life.',
            'price': 2499.00,
            'category': 'laptops',
            'stock': 10,
            'image': 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
            'brand': 'Apple',
            'rating': 4.9,
            'featured': True,
        },
        {
            'name': 'Dell XPS 15',
            'description': 'Premium Windows laptop with stunning 4K display, powerful performance, and sleek design.',
            'price': 1899.00,
            'category': 'laptops',
            'stock': 12,
            'image': 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400',
            'brand': 'Dell',
            'rating': 4.6,
            'featured': False,
        },
        {
            'name': 'Sony WH-1000XM5',
            'description': 'Industry-leading noise canceling headphones with exceptional sound quality and comfort.',
            'price': 349.00,
            'category': 'headphones',
            'stock': 25,
            'image': 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400',
            'brand': 'Sony',
            'rating': 4.8,
            'featured': True,
        },
        {
            'name': 'Bose QuietComfort Ultra',
            'description': 'The best noise canceling headphones with immersive audio and premium comfort.',
            'price': 429.00,
            'category': 'headphones',
            'stock': 18,
            'image': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
            'brand': 'Bose',
            'rating': 4.7,
            'featured': False,
        },
        {
            'name': 'Canon EOS R5',
            'description': 'Professional mirrorless camera with 8K video recording and 45MP full-frame sensor.',
            'price': 3899.00,
            'category': 'cameras',
            'stock': 8,
            'image': 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400',
            'brand': 'Canon',
            'rating': 4.9,
            'featured': True,
        },
        {
            'name': 'Sony A7 IV',
            'description': 'Versatile full-frame mirrorless camera perfect for both photography and videography.',
            'price': 2499.00,
            'category': 'cameras',
            'stock': 10,
            'image': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400',
            'brand': 'Sony',
            'rating': 4.8,
            'featured': False,
        },
        {
            'name': 'PlayStation 5',
            'description': 'Next-gen gaming console with ultra-high speed SSD and stunning graphics.',
            'price': 499.00,
            'category': 'gaming',
            'stock': 30,
            'image': 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400',
            'brand': 'Sony',
            'rating': 4.9,
            'featured': True,
        },
        {
            'name': 'Xbox Series X',
            'description': 'Most powerful Xbox ever with true 4K gaming and quick resume.',
            'price': 499.00,
            'category': 'gaming',
            'stock': 25,
            'image': 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400',
            'brand': 'Microsoft',
            'rating': 4.8,
            'featured': False,
        },
    ]

    for prod_data in products_data:
        category_obj = next((c for c in categories if c.name.lower() == prod_data['category']), categories[0])
        product, created = Product.objects.get_or_create(
            name=prod_data['name'],
            defaults={
                'description': prod_data['description'],
                'price': prod_data['price'],
                'category': prod_data['category'],
                'category_model': category_obj,
                'stock': prod_data['stock'],
                'image': prod_data['image'],
                'brand': prod_data['brand'],
                'rating': prod_data['rating'],
                'featured': prod_data['featured'],
            }
        )
        print(f" {'Created' if created else 'Exists'} product: {product.name}")

    # Create admin user
    if not User.objects.filter(username='admin').exists():
        User.objects.create_superuser('admin', 'admin@webtech.com', 'admin123')
        print("Created admin user (username: admin, password: admin123)")
    else:
        print("Admin user already exists")

    print("\nSample data creation completed!")

if __name__ == '__main__':
    create_sample_data()
