# 🛒 WEBTECH

![Django](https://img.shields.io/badge/Django-6.0.7-green?style=for-the-badge&logo=django)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

A modern e-commerce platform built with Django REST Framework and React, featuring a beautiful UI with animations and a complete shopping experience.

## ✨ Features

- **🎨 Modern UI/UX**: Beautiful dark theme with smooth animations using Framer Motion
- **🛍️ Full E-commerce**: Product browsing, cart management, checkout process
- **👤 User Authentication**: Login, registration, profile management
- **📦 Order Management**: Order history, tracking, and status updates
- **❤️ Wishlist**: Save favorite products for later
- **🔍 Advanced Search**: Filter products by category, price, and ratings
- **💳 Secure Checkout**: Multi-step checkout process with payment integration
- **📱 Responsive Design**: Works perfectly on all devices
- **🎁 Gift Guide**: Special section for gift recommendations
- **🏷️ Coupons & Deals**: Discount codes and promotional offers
- **⭐ Reviews & Ratings**: Customer feedback system
- **📊 Product Comparison**: Compare products side by side
- **🛡️ Admin Panel**: Django admin for content management

## 📁 Project Structure

```
WEBTECH/
├── backend/                 # Django REST Framework Backend
│   ├── config/             # Django project configuration
│   │   ├── settings.py     # Project settings with CORS
│   │   ├── urls.py         # Main URL configuration
│   │   └── wsgi.py         # WSGI configuration
│   ├── products/           # Products app
│   │   ├── models.py       # Product, Category, Review models
│   │   ├── serializers.py  # REST Framework serializers
│   │   ├── views.py        # API viewsets
│   │   ├── urls.py         # Product URLs
│   │   └── admin.py        # Admin configuration
│   ├── orders/             # Orders app
│   │   ├── models.py       # Cart, Order models
│   │   ├── serializers.py  # Order serializers
│   │   ├── views.py        # Order viewsets
│   │   ├── urls.py         # Order URLs
│   │   └── admin.py        # Admin configuration
│   ├── users/              # Users app
│   ├── venv/               # Python virtual environment
│   ├── manage.py           # Django management script
│   └── create_sample_data.py # Sample data generator
├── frontend/               # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   └── Layout.jsx  # Main layout with navigation
│   │   ├── pages/          # Page components (27 pages)
│   │   │   ├── Splash.jsx          # Splash screen
│   │   │   ├── Home.jsx            # Home page
│   │   │   ├── Products.jsx        # All products
│   │   │   ├── ProductDetail.jsx   # Product details
│   │   │   ├── Categories.jsx      # Category listing
│   │   │   ├── Cart.jsx            # Shopping cart
│   │   │   ├── Wishlist.jsx        # Wishlist
│   │   │   ├── Profile.jsx         # User profile
│   │   │   ├── Orders.jsx          # Order history
│   │   │   ├── Search.jsx          # Search page
│   │   │   ├── Compare.jsx         # Product comparison
│   │   │   ├── Reviews.jsx         # Customer reviews
│   │   │   ├── Deals.jsx           # Deals & discounts
│   │   │   ├── Checkout.jsx        # Checkout process
│   │   │   ├── OrderTracking.jsx   # Order tracking
│   │   │   ├── Login.jsx           # Login page
│   │   │   ├── Register.jsx        # Registration
│   │   │   ├── ForgotPassword.jsx  # Password reset
│   │   │   ├── ReturnPolicy.jsx    # Return policy
│   │   │   ├── Terms.jsx           # Terms & conditions
│   │   │   ├── Privacy.jsx         # Privacy policy
│   │   │   ├── FAQ.jsx             # FAQ page
│   │   │   ├── Support.jsx         # Help center
│   │   │   ├── Contact.jsx         # Contact form
│   │   │   ├── About.jsx           # About us
│   │   │   ├── Gifts.jsx           # Gift guide
│   │   │   └── Coupons.jsx         # Coupon codes
│   │   ├── context/          # State management
│   │   │   └── StoreContext.jsx    # Zustand store
│   │   ├── services/         # API services
│   │   │   └── api.js             # Axios API client
│   │   ├── utils/            # Utility functions
│   │   ├── assets/           # Static assets
│   │   ├── App.jsx           # Main app with routing
│   │   ├── main.jsx          # Entry point
│   │   └── index.css         # Global styles
│   ├── package.json          # Dependencies
│   ├── vite.config.js        # Vite configuration
│   ├── tailwind.config.js    # Tailwind configuration
│   └── index.html            # HTML template
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## 🚀 Installation

### Prerequisites

- Python 3.8+
- Node.js 18+
- npm or yarn

### Backend Setup

1. **Navigate to backend directory**
```bash
cd backend
```

2. **Create and activate virtual environment**
```bash
python -m venv venv
venv\Scripts\activate  # On Windows
source venv/bin/activate  # On Linux/Mac
```

3. **Install dependencies**
```bash
pip install django djangorestframework django-cors-headers django-filter
```

4. **Run migrations**
```bash
python manage.py migrate
```

5. **Create sample data**
```bash
python create_sample_data.py
```

6. **Create superuser**
```bash
python manage.py createsuperuser
```

7. **Start Django server**
```bash
python manage.py runserver
```

Backend will run on `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

Frontend will run on `http://localhost:3000`

## 📱 Pages Overview

| Page | Description |
|------|-------------|
| **Splash** | Animated splash screen with logo |
| **Home** | Hero section, featured products, categories |
| **Products** | Product listing with filters and search |
| **Product Detail** | Detailed product view with specs and reviews |
| **Categories** | Browse products by category |
| **Cart** | Shopping cart with quantity management |
| **Wishlist** | Saved favorite products |
| **Profile** | User profile and account settings |
| **Orders** | Order history and status |
| **Search** | Advanced product search |
| **Compare** | Compare products side by side |
| **Reviews** | Customer reviews and ratings |
| **Deals** | Flash sales and discount offers |
| **Gifts** | Gift recommendations guide |
| **Coupons** | Available discount codes |
| **Checkout** | Multi-step checkout process |
| **Order Tracking** | Track order status |
| **Login** | User authentication |
| **Register** | New user registration |
| **Forgot Password** | Password reset |
| **Return Policy** | Return and refund policy |
| **Terms** | Terms and conditions |
| **Privacy** | Privacy policy |
| **FAQ** | Frequently asked questions |
| **Support** | Help center and support |
| **Contact** | Contact form and information |
| **About** | Company information |

## 🔌 API Endpoints

### Products
- `GET /api/products/` - List all products
- `GET /api/products/:id/` - Get product details
- `GET /api/products/featured/` - Get featured products
- `GET /api/products/by_category/?category=name` - Filter by category

### Categories
- `GET /api/categories/` - List all categories
- `GET /api/categories/:id/` - Get category details

### Cart
- `GET /api/cart/` - Get user's cart
- `POST /api/cart/add_item/` - Add item to cart
- `POST /api/cart/remove_item/` - Remove item from cart

### Orders
- `GET /api/orders/` - List user's orders
- `GET /api/orders/:id/` - Get order details
- `POST /api/orders/` - Create new order

## 🛠️ Technologies Used

### Backend
- **Django 6.0.7** - Web framework
- **Django REST Framework** - API framework
- **django-cors-headers** - CORS support
- **django-filter** - Query filtering
- **SQLite** - Database

### Frontend
- **React 18.2.0** - UI library
- **Vite 5.0** - Build tool
- **React Router 6.20** - Routing
- **Tailwind CSS 3.4** - Styling
- **Framer Motion 10.16** - Animations
- **Zustand 4.4** - State management
- **Axios 1.6** - HTTP client
- **Lucide React 0.294** - Icons
- **React Hot Toast 2.4** - Notifications

## 🔐 Default Credentials

- **Admin Panel**: `http://localhost:8000/admin`
  - Username: `admin`
  - Password: `admin123`

## 📝 Environment Variables

No environment variables required for development. For production, configure:

- `DJANGO_SECRET_KEY` - Django secret key
- `DATABASE_URL` - Production database URL
- `ALLOWED_HOSTS` - Allowed hosts for Django

## 🚢 Deployment

### Backend Deployment

1. Set `DEBUG = False` in settings
2. Configure production database (PostgreSQL recommended)
3. Set `ALLOWED_HOSTS`
4. Use Gunicorn for production server
5. Configure Nginx as reverse proxy

### Frontend Deployment

1. Run `npm run build`
2. Deploy `dist/` folder to hosting service
3. Configure API proxy for production

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email support@webtech.com or open an issue in the repository.

---

Made with ❤️ by WEBTECH Team
