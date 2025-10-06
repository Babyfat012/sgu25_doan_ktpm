# 📦 GIAI ĐOẠN 2 - GIỎ HÀNG (CART)

> **Branch:** `giai-doan-2`  
> **Mô tả:** Giai đoạn 2 bổ sung chức năng giỏ hàng, cho phép người dùng thêm sản phẩm vào giỏ và quản lý đơn hàng cơ bản.

---

## 🎯 Tính năng đã triển khai

### ✅ Từ Giai đoạn 1 (kế thừa):
- **Xem sản phẩm:** Hiển thị danh sách sản phẩm với phân trang
- **Tìm kiếm:** Tìm kiếm sản phẩm theo tên
- **Danh mục:** Lọc sản phẩm theo danh mục
- **Xem chi tiết:** Xem thông tin chi tiết sản phẩm
- **Đăng ký/Đăng nhập:** Quản lý tài khoản người dùng

### 🆕 Mới trong Giai đoạn 2:
- **✅ Giỏ hàng (Cart):**
  - Thêm sản phẩm vào giỏ hàng
  - Xem danh sách sản phẩm trong giỏ
  - Cập nhật số lượng sản phẩm
  - Xóa sản phẩm khỏi giỏ
  - Tính tổng giá trị đơn hàng
  - Lưu giỏ hàng vào LocalStorage (cho người dùng chưa đăng nhập)

---

## 🏗️ Cấu trúc dự án

### Backend (server_app):
```
server_app/
├── API/
│   ├── Controller/
│   │   ├── user.controller.js         # Quản lý user
│   │   ├── product.controller.js      # Quản lý sản phẩm
│   │   └── category.controller.js     # Quản lý danh mục
│   └── Router/
│       ├── user.router.js
│       ├── product.router.js
│       └── category.router.js
├── Models/
│   ├── user.js                        # Schema User
│   ├── product.js                     # Schema Product
│   ├── category.js                    # Schema Category
│   ├── permission.js                  # Schema Permission
│   └── cart.js                        # Schema Cart (chưa sử dụng)
└── index.js                           # Server chính
```

### Frontend Client (client_app):
```
client_app/src/
├── API/
│   ├── axiosClient.jsx                # Cấu hình Axios
│   ├── User.jsx                       # User API
│   ├── Product.jsx                    # Product API
│   └── CartAPI.jsx                    # Cart API
├── Auth/
│   ├── SignIn.jsx                     # Trang đăng nhập
│   └── SignUp.jsx                     # Trang đăng ký
├── Cart/
│   └── Cart.jsx                       # Trang giỏ hàng
├── DetailProduct/
│   └── Detail_Product.jsx             # Trang chi tiết sản phẩm
├── Home/
│   └── Home.jsx                       # Trang chủ
├── Shop/
│   └── Shop.jsx                       # Trang danh sách sản phẩm
├── Share/
│   ├── Header.jsx                     # Header
│   ├── Footer.jsx                     # Footer
│   └── CartsLocal.jsx                 # Quản lý Cart LocalStorage
└── Redux/                             # Redux store
```

### Frontend Admin (admin_app):
```
admin_app/src/component/
├── Product/                           # Quản lý sản phẩm
├── Category/                          # Quản lý danh mục
├── Login/                             # Đăng nhập Admin
└── Shared/
    └── Menu.jsx                       # Menu sidebar
```

---

## 🚀 Hướng dẫn chạy dự án

### Yêu cầu:
- Docker Desktop
- Git

### Các bước:

1. **Clone repository và checkout nhánh giai-doan-2:**
   ```bash
   git clone https://github.com/Babyfat012/sgu25_doan_ktpm.git
   cd sgu25_doan_ktpm
   git checkout giai-doan-2
   ```

2. **Chạy Docker Compose:**
   ```bash
   docker compose up --watch
   ```

3. **Truy cập ứng dụng:**
   - **Client:** http://localhost:3000
   - **Admin:** http://localhost:3001
   - **Server API:** http://localhost:8000
   - **MongoDB:** localhost:27017

### Tài khoản mặc định:

**Admin:**
- Username: `admin`
- Password: `123456`

---

## 📋 API Endpoints

### User API:
- `POST /api/User/signup` - Đăng ký
- `POST /api/User/signin` - Đăng nhập
- `GET /api/User` - Lấy danh sách user (Admin)
- `GET /api/User/:id` - Lấy thông tin user
- `PUT /api/User/:id` - Cập nhật user

### Product API:
- `GET /api/Product` - Lấy tất cả sản phẩm
- `GET /api/Product/:id` - Lấy chi tiết sản phẩm
- `GET /api/Product/Pagination/:skip/:limit` - Phân trang
- `POST /api/Product` - Thêm sản phẩm (Admin)
- `PUT /api/Product/:id` - Cập nhật sản phẩm (Admin)
- `DELETE /api/Product/:id` - Xóa sản phẩm (Admin)

### Category API:
- `GET /api/Category` - Lấy tất cả danh mục
- `GET /api/Category/:id` - Lấy chi tiết danh mục
- `POST /api/Category` - Thêm danh mục (Admin)
- `PUT /api/Category/:id` - Cập nhật danh mục (Admin)
- `DELETE /api/Category/:id` - Xóa danh mục (Admin)

---

## 🛠️ Công nghệ sử dụng

### Backend:
- **Node.js** v18.20.8
- **Express.js** - Web framework
- **MongoDB Atlas** - Database cloud
- **Mongoose** - ODM
- **Bcrypt** - Mã hóa mật khẩu
- **Express FileUpload** - Upload file

### Frontend:
- **React** 17
- **React Router DOM** - Routing
- **Redux** - State management
- **Axios** - HTTP client
- **Bootstrap** - UI framework

### DevOps:
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

---

## 📝 Cách sử dụng chức năng Cart

### 1. Thêm sản phẩm vào giỏ hàng:
- Vào trang **Shop** hoặc **Home**
- Click vào sản phẩm để xem chi tiết
- Chọn **Size** và **Số lượng**
- Click **"Add to cart"**
- Thông báo thành công sẽ hiển thị

### 2. Xem giỏ hàng:
- Click vào icon giỏ hàng ở Header (nếu đã kích hoạt)
- Hoặc truy cập: http://localhost:3000/cart

### 3. Quản lý giỏ hàng:
- **Tăng/giảm số lượng:** Click nút +/-
- **Xóa sản phẩm:** Click icon ❌
- **Xem tổng tiền:** Hiển thị ở cuối trang

---

## 🔄 So sánh với Giai đoạn 1

| Tính năng | Giai đoạn 1 | Giai đoạn 2 |
|-----------|-------------|-------------|
| Xem sản phẩm | ✅ | ✅ |
| Tìm kiếm | ✅ | ✅ |
| Danh mục | ✅ | ✅ |
| Đăng ký/Đăng nhập | ✅ | ✅ |
| **Giỏ hàng** | ❌ | ✅ |
| Yêu thích | ❌ | ❌ |
| Đặt hàng | ❌ | ❌ |
| Bình luận | ❌ | ❌ |
| Admin Panel | Chỉ Product/Category | Chỉ Product/Category |

---

## 🐛 Lưu ý và hạn chế

### Chức năng chưa hoạt động:
- ❌ Icon giỏ hàng ở Header (đã comment out)
- ❌ Mã giảm giá (Coupon) - đã vô hiệu hóa
- ❌ Thanh toán (Checkout)
- ❌ Lịch sử đơn hàng

### Lưu ý kỹ thuật:
- Giỏ hàng được lưu ở **LocalStorage** (client-side)
- Chưa đồng bộ giỏ hàng với server
- Chưa có xác thực JWT đầy đủ
- Một số warnings về accessibility (không ảnh hưởng chức năng)

---

## 📅 Kế hoạch Giai đoạn 3

### Tính năng sẽ thêm:
- ✅ **Đặt hàng (Order):** Tạo đơn hàng từ giỏ hàng
- ✅ **Bình luận (Comment):** Đánh giá sản phẩm
- ✅ **Giao hàng (Delivery):** Quản lý thông tin giao hàng

---

## 👨‍💻 Tác giả

- **Repository:** [sgu25_doan_ktpm](https://github.com/Babyfat012/sgu25_doan_ktpm)
- **Branch:** giai-doan-2

---

## 📜 License

Dự án học tập - SGU 2025
