# كيف تشغل مشروع WEBTECH

## المتطلبات الأساسية

قبل البدء، تأكد من تثبيت:
- Python 3.8 أو أحدث
- Node.js 18 أو أحدث
- Git

## خطوات التشغيل الكاملة

### الخطوة 1: تشغيل الباك إند (Backend - Django)

افتح terminal واتبع الخطوات التالية:

```bash
# 1. ادخل لمجلد الباك إند
cd e:\finalproject\WEBTECH\backend

# 2. أنشئ virtual environment (إذا لم يكن موجود)
python -m venv venv

# 3. فعّل virtual environment
venv\Scripts\activate

# 4. ثبت المكتبات المطلوبة
pip install -r requirements.txt

# 5. نفذ الـ migrations لإنشاء قاعدة البيانات
python manage.py makemigrations
python manage.py migrate

# 6. أنشئ super user للدخول للـ admin panel (اختياري)
python manage.py createsuperuser

# 7. شغل السيرفر
python manage.py runserver
```

الباك إند سيعمل على: `http://localhost:8000`

**API Endpoints الرئيسية:**
- Admin Panel: `http://localhost:8000/admin`
- API Base: `http://localhost:8000/api`
- Auth: `http://localhost:8000/api/auth/`
- Products: `http://localhost:8000/api/products/`
- Cart: `http://localhost:8000/api/cart/`
- Orders: `http://localhost:8000/api/orders/`

### الخطوة 2: تشغيل الفرونت إند (Frontend - React)

افتح terminal **جديد** واتبع الخطوات التالية:

```bash
# 1. ادخل لمجلد الفرونت إند
cd e:\finalproject\WEBTECH\frontend

# 2. ثبت المكتبات المطلوبة (أول مرة فقط)
npm install

# 3. شغل السيرفر
npm run dev
```

الفرونت إند سيعمل على: `http://localhost:3000`

## ربط الفرونت إند بالباك إند

الفرونت إند مربوط بالباك إند تلقائياً. تأكد من:
1. الباك إند يعمل على `http://localhost:8000`
2. الفرونت إند يعمل على `http://localhost:3000`
3. CORS مفعّل في Django settings (مفعّل بالفعل)

## كيفية استخدام المشروع

### 1. إنشاء حساب جديد
- افتح `http://localhost:3000/register`
- أدخل بياناتك وسجل حساب جديد

### 2. تسجيل الدخول
- افتح `http://localhost:3000/login`
- أدخل البريد الإلكتروني وكلمة المرور

### 3. تصفح المنتجات
- افتح `http://localhost:3000/products`
- يمكنك البحث والفلترة حسب الفئة والسعر

### 4. إضافة للسلة
- اضغط على "Add to Cart" لأي منتج
- افتح السلة من القائمة العلوية

### 5. إتمام الطلب
- افتح السلة واضغط "Checkout"
- أدخل بيانات الشحن
- أكمل الطلب

### 6. إدارة المنتجات (Admin)
- افتح `http://localhost:8000/admin`
- سجل الدخول بـ super user
- يمكنك إضافة/تعديل المنتجات والفئات والعلامات التجارية

## حل المشاكل الشائعة

### مشكلة: ModuleNotFoundError
**الحل:** تأكد من تفعيل virtual environment
```bash
venv\Scripts\activate
pip install -r requirements.txt
```

### مشكلة: npm install فشل
**الحل:** احذف node_modules وأعد التثبيت
```bash
rmdir /s /q node_modules
npm install
```

### مشكلة: CORS Error
**الحل:** تأكد أن الباك إند يعمل وأن CORS مفعّل في settings.py

### مشكلة: Database Error
**الحل:** احذف ملف db.sqlite3 وأعد الـ migrations
```bash
del db.sqlite3
python manage.py makemigrations
python manage.py migrate
```

### مشكلة: Port 8000 أو 3000 مستخدم
**الحل:** استخدم منفذ آخر
```bash
# للباك إند
python manage.py runserver 8001

# للفرونت إند
npm run dev -- --port 3001
```

## هيكل المشروع

```
WEBTECH/
├── backend/              # Django Backend
│   ├── accounts/        # User Authentication
│   ├── categories/      # Product Categories
│   ├── brands/          # Product Brands
│   ├── products/        # Products Management
│   ├── cart/            # Shopping Cart
│   ├── orders/          # Order Management
│   ├── reviews/         # Product Reviews
│   ├── wishlist/        # User Wishlist
│   ├── coupons/         # Discount Coupons
│   └── config/          # Django Settings
└── frontend/            # React Frontend
    ├── src/
    │   ├── pages/       # Page Components
    │   ├── components/  # Reusable Components
    │   ├── api/         # API Calls
    │   └── context/     # State Management
    └── package.json
```

## ملاحظات مهمة

1. **يجب تشغيل الباك إند أولاً** قبل الفرونت إند
2. **لا تغلق الـ terminal** أثناء العمل (سيتم إيقاف السيرفر)
3. **لإيقاف السيرفر**: اضغط `Ctrl + C` في الـ terminal
4. **للتطوير**: استخدم `npm run dev` للفرونت إند (hot reload)
5. **للإنتاج**: استخدم `npm run build` ثم `npm run preview`

## الدعم الفني

إذا واجهت أي مشاكل:
1. تأكد من قراءة رسائل الخطأ في terminal
2. تأكد من تثبيت جميع المتطلبات
3. تأكد من تشغيل كلا السيرفرين
