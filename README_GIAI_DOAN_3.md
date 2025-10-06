# 🛒 GIAI ĐOẠN 3 - ĐẶT HÀNG, BÌNH LUẬN & GIAO HÀNG

> **Branch:** `giai-doan-3`  
> **Mô tả:** Giai đoạn 3 bổ sung chức năng đặt hàng, bình luận sản phẩm và quản lý giao hàng.

---

## 🎯 Tính năng đã triển khai

### ✅ Từ Giai đoạn 1 & 2 (kế thừa)
- **Xem sản phẩm:** Hiển thị danh sách sản phẩm với phân trang
- **Tìm kiếm:** Tìm kiếm sản phẩm theo tên
- **Danh mục:** Lọc sản phẩm theo danh mục
- **Xem chi tiết:** Xem thông tin chi tiết sản phẩm
- **Đăng ký/Đăng nhập:** Quản lý tài khoản người dùng
- **Giỏ hàng (Cart):** Thêm/xóa/cập nhật sản phẩm trong giỏ

### 🆕 Mới trong Giai đoạn 3

#### ✅ Đặt hàng (Order & Checkout):
- Tạo đơn hàng từ giỏ hàng
- Nhập thông tin giao hàng (địa chỉ, số điện thoại)
- Chọn phương thức thanh toán
- Xác nhận đơn hàng
- Xem lịch sử đơn hàng

#### ✅ Bình luận & Đánh giá (Comment):
- Viết bình luận cho sản phẩm
- Đánh giá sao (1-5 sao)
- Xem danh sách bình luận của sản phẩm
- Chỉ người dùng đã đăng nhập mới được bình luận

#### ✅ Quản lý giao hàng (Delivery):
- Lưu thông tin giao hàng
- Theo dõi trạng thái đơn hàng
- Xem chi tiết đơn hàng

---

## 🏗️ Cấu trúc dự án

### Backend (server_app):

```
server_app/
├── API/
│   ├── Controller/
│   │   ├── user.controller.js
│   │   ├── product.controller.js
│   │   ├── category.controller.js
│   │   ├── order.controller.js          # 🆕 Quản lý đơn hàng
│   │   ├── detail_order.controller.js   # 🆕 Chi tiết đơn hàng
│   │   ├── comment.controller.js        # 🆕 Quản lý bình luận
│   │   └── delivery.controller.js       # 🆕 Quản lý giao hàng
│   └── Router/
│       ├── user.router.js
│       ├── product.router.js
│       ├── category.router.js
│       ├── order.router.js              # 🆕
│       ├── detail_order.router.js       # 🆕
│       ├── comment.router.js            # 🆕
│       └── delivery.router.js           # 🆕
├── Models/
│   ├── user.js
│   ├── product.js
│   ├── category.js
│   ├── permission.js
│   ├── cart.js
│   ├── order.js                         # 🆕 Schema Order
│   ├── detail_order.js                  # 🆕 Schema Detail Order
│   ├── comment.js                       # 🆕 Schema Comment
│   ├── delivery.js                      # 🆕 Schema Delivery
│   └── payment.js                       # 🆕 Schema Payment
└── index.js
```

### Frontend Client (client_app):

```
client_app/src/
├── API/
│   ├── axiosClient.jsx
│   ├── User.jsx
│   ├── Product.jsx
│   ├── CartAPI.jsx
│   ├── OrderAPI.jsx                     # 🆕 Order API
│   ├── Detail_OrderAPI.jsx              # 🆕 Detail Order API
│   └── CommentAPI.jsx                   # 🆕 Comment API
├── Auth/
│   ├── SignIn.jsx
│   └── SignUp.jsx
├── Cart/
│   └── Cart.jsx
├── Checkout/                             # 🆕 Trang thanh toán
│   ├── Checkout.jsx
│   ├── Checkout.css
│   ├── MapComponent.jsx
│   ├── MoMo.jsx
│   └── Paypal.jsx
├── DetailProduct/
│   └── Detail_Product.jsx
├── History/                              # 🆕 Lịch sử đơn hàng
│   ├── History.jsx
│   └── Component/
│       ├── MainHistory.jsx
│       ├── DetailHistory.jsx
│       └── History.css
├── Order/                                # 🆕 Kết quả đặt hàng
│   ├── OrderSuccess.jsx
│   ├── OrderFail.jsx
│   └── OrderMomo.jsx
├── Home/
│   └── Home.jsx
├── Shop/
│   └── Shop.jsx
└── Share/
    ├── Header.jsx
    ├── Footer.jsx
    └── CartsLocal.jsx
```

---

## 🚀 Hướng dẫn chạy dự án

### Yêu cầu
- Docker Desktop
- Git

### Các bước

1. **Clone repository và checkout nhánh giai-doan-3:**
   ```bash
   git clone https://github.com/Babyfat012/sgu25_doan_ktpm.git
   cd sgu25_doan_ktpm
   git checkout giai-doan-3
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

### Tài khoản mặc định

**Admin:**
- Username: `admin`
- Password: `123456`

---

## 📋 API Endpoints

### 🆕 Order API:
- `POST /api/Order` - Tạo đơn hàng mới
- `GET /api/Order` - Lấy tất cả đơn hàng (Admin)
- `GET /api/Order/:id` - Lấy chi tiết đơn hàng
- `GET /api/Order/user/:id_user` - Lấy đơn hàng của user
- `PUT /api/Order/:id` - Cập nhật đơn hàng (Admin)
- `DELETE /api/Order/:id` - Xóa đơn hàng (Admin)

### 🆕 Detail Order API:
- `POST /api/Detail_Order` - Thêm chi tiết đơn hàng
- `GET /api/Detail_Order/:id_order` - Lấy chi tiết theo đơn hàng

### 🆕 Comment API:
- `POST /api/Comment` - Tạo bình luận mới
- `GET /api/Comment/:id_product` - Lấy bình luận theo sản phẩm
- `PUT /api/Comment/:id` - Cập nhật bình luận
- `DELETE /api/Comment/:id` - Xóa bình luận (Admin)

### 🆕 Delivery API:
- `POST /api/Delivery` - Tạo thông tin giao hàng
- `GET /api/Delivery/:id_order` - Lấy thông tin giao hàng theo đơn
- `PUT /api/Delivery/:id` - Cập nhật trạng thái giao hàng

### (Các API khác từ Giai đoạn 1 & 2)
- User API, Product API, Category API (giữ nguyên)

---

## 🛠️ Công nghệ sử dụng

### Backend
- **Node.js** v18.20.8
- **Express.js** - Web framework
- **MongoDB Atlas** - Database cloud
- **Mongoose** - ODM
- **Bcrypt** - Mã hóa mật khẩu

### Frontend
- **React** 17
- **React Router DOM** - Routing
- **Redux** - State management
- **Axios** - HTTP client
- **Leaflet** - Maps integration
- **React Slick** - Carousel

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

---

## 📝 Hướng dẫn sử dụng

### 1. Đặt hàng (Checkout):

**Bước 1:** Thêm sản phẩm vào giỏ hàng
- Truy cập trang sản phẩm
- Click **"Add to cart"**

**Bước 2:** Xem giỏ hàng
- Truy cập: http://localhost:3000/cart
- Kiểm tra sản phẩm và số lượng

**Bước 3:** Thanh toán
- Click nút **"Proceed to checkout"**
- Nhập thông tin:
  - Họ tên
  - Email
  - Số điện thoán
  - Địa chỉ giao hàng
- Chọn phương thức thanh toán (COD/MoMo/PayPal)
- Click **"Place Order"**

**Bước 4:** Xác nhận đơn hàng
- Chuyển đến trang **Order Success**
- Nhận mã đơn hàng

### 2. Xem lịch sử đơn hàng:

- Đăng nhập tài khoản
- Truy cập: http://localhost:3000/history
- Xem danh sách đơn hàng
- Click **"View Details"** để xem chi tiết

### 3. Bình luận & Đánh giá:

**Bước 1:** Vào trang chi tiết sản phẩm

**Bước 2:** Scroll xuống phần **Reviews**

**Bước 3:** Click **"Write Your Review!"**

**Bước 4:** Nhập:
- Đánh giá sao (1-5 ⭐)
- Nội dung bình luận

**Bước 5:** Click **"Submit Review"**

**Lưu ý:** Phải đăng nhập để bình luận

---

## 🔄 So sánh với Giai đoạn trước

| Tính năng | Giai đoạn 1 | Giai đoạn 2 | Giai đoạn 3 |
|-----------|-------------|-------------|-------------|
| Xem sản phẩm | ✅ | ✅ | ✅ |
| Tìm kiếm | ✅ | ✅ | ✅ |
| Danh mục | ✅ | ✅ | ✅ |
| Đăng ký/Đăng nhập | ✅ | ✅ | ✅ |
| Giỏ hàng | ❌ | ✅ | ✅ |
| **Đặt hàng (Checkout)** | ❌ | ❌ | ✅ |
| **Lịch sử đơn hàng** | ❌ | ❌ | ✅ |
| **Bình luận** | ❌ | ❌ | ✅ |
| **Giao hàng** | ❌ | ❌ | ✅ |
| Mã giảm giá (Coupon) | ❌ | ❌ | ❌ |
| Sale/Khuyến mãi | ❌ | ❌ | ❌ |
| Live Chat | ❌ | ❌ | ❌ |
| Admin Panel | Product/Category | Product/Category | Product/Category |

---

## 🐛 Lưu ý và hạn chế

### Chức năng chưa hoạt động đầy đủ:
- ❌ Thanh toán MoMo/PayPal (cần cấu hình API key)
- ❌ Google Maps (cần API key)
- ❌ Email notification khi đặt hàng
- ❌ Admin quản lý đơn hàng
- ❌ Cập nhật trạng thái giao hàng

### Lưu ý kỹ thuật:
- Checkout chỉ hỗ trợ COD (thanh toán khi nhận hàng)
- Bình luận chưa có phân trang
- Chưa có notification real-time
- Một số warnings về accessibility (không ảnh hưởng chức năng)

---

## 📊 Database Schema

### Order Schema:
```javascript
{
  id_user: String (ref: Users),
  fullname: String,
  phone: String,
  address: String,
  total: Number,
  status: String,
  id_payment: String (ref: Payment),
  createdAt: Date
}
```

### Detail_Order Schema:
```javascript
{
  id_order: String (ref: Order),
  id_product: String (ref: Products),
  name_product: String,
  price_product: Number,
  count: Number,
  size: String,
  image: String
}
```

### Comment Schema:
```javascript
{
  id_user: String (ref: Users),
  id_product: String (ref: Products),
  content: String,
  star: Number (1-5),
  createdAt: Date
}
```

### Delivery Schema:
```javascript
{
  id_order: String (ref: Order),
  fullname: String,
  phone: String,
  address: String,
  status: String,
  createdAt: Date
}
```

---

## 📅 Kế hoạch Giai đoạn 4

### Tính năng sẽ thêm:
- ✅ **Admin Panel:** Quản lý đơn hàng, user, bình luận
- ✅ **Mã giảm giá (Coupon):** Áp dụng mã giảm giá khi thanh toán
- ✅ **Khuyến mãi (Sale):** Hiển thị sản phẩm giảm giá
- ✅ **Live Chat:** Socket.io chat real-time
- ✅ **PayPal Integration:** Thanh toán qua PayPal
- ✅ **Yêu thích (Favorite):** Lưu sản phẩm yêu thích

---

## 🎥 Demo Screenshots

### Trang Checkout:
- Form nhập thông tin giao hàng
- Tổng tiền đơn hàng
- Phương thức thanh toán

### Trang History:
- Danh sách đơn hàng
- Trạng thái đơn hàng
- Chi tiết đơn hàng

### Trang Review:
- Form viết bình luận
- Đánh giá sao
- Danh sách bình luận

---

## 👨‍💻 Tác giả

- **Repository:** [sgu25_doan_ktpm](https://github.com/Babyfat012/sgu25_doan_ktpm)
- **Branch:** giai-doan-3

---

## 📜 License

Dự án học tập - SGU 2025
