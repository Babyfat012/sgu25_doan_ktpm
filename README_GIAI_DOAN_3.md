# 🛒 GIAI ĐOẠN 3 - ĐẶT HÀNG & ĐÁNH GIÁ

> **Branch:** `giai-doan-3`  
> **Mô tả:** Giai đoạn 3 bổ sung chức năng đặt hàng, đánh giá sản phẩm và quản lý giao hàng với **ADMIN PANEL đầy đủ**.

---

## 🎯 Tính năng đã triển khai

### ✅ Từ Giai đoạn 2 (kế thừa)
- **Xem sản phẩm:** Hiển thị danh sách sản phẩm với phân trang
- **Tìm ki| **⭐ Admin Panel** | ❌ | ❌ | ✅ |
| **⭐ Sale/Khuyến mãi** | ❌ | ❌ | ✅ |* Tìm kiếm sản phẩm theo tên
- **Danh mục:** Lọc sản phẩm theo danh mục
- **Xem chi tiết:** Xem thông tin chi tiết sản phẩm
- **Đăng ký/Đăng nhập:** Quản lý tài khoản người dùng
- **Giỏ hàng (Cart):** Thêm/xóa/cập nhật sản phẩm trong giỏ

### 🆕 Mới trong Giai đoạn 3

#### ✅ Đặt hàng (Order + Detail_Order):
- Tạo đơn hàng từ giỏ hàng với thông tin chi tiết sản phẩm
- Lưu trữ thông tin đơn hàng và chi tiết từng sản phẩm
- Quản lý trạng thái đơn hàng
- Tích hợp với hệ thống thanh toán

#### ✅ Xem lịch sử đơn hàng:
- Người dùng có thể xem tất cả đơn hàng đã đặt
- Hiển thị trạng thái và thông tin chi tiết từng đơn
- Lọc đơn hàng theo trạng thái

#### ✅ Ghi chú đơn hàng (Note):
- Thêm ghi chú cho đơn hàng
- Lưu thông tin liên hệ và yêu cầu đặc biệt
- Quản lý thông tin giao hàng

#### ✅ Tính phí vận chuyển (Delivery):
- Tích hợp Leaflet API để tính khoảng cách
- Tính phí ship theo khoảng cách thực tế
- Hiển thị thông tin giao hàng chi tiết

#### ✅ Thanh toán COD (Payment):
- Hỗ trợ thanh toán tiền mặt khi giao hàng
- Tích hợp PayPal và MoMo
- Xử lý thanh toán an toàn

#### ✅ Gửi email xác nhận đơn hàng:
- Gửi email xác nhận sau khi đặt hàng thành công
- Email chứa thông tin chi tiết đơn hàng
- Sử dụng **Nodemailer** với SMTP Gmail

#### ✅ Đánh giá sản phẩm (Comment):
- Viết bình luận và đánh giá sao (1-5 sao) cho sản phẩm
- Xem danh sách bình luận của từng sản phẩm
- Chỉ người dùng đã đăng nhập mới được bình luận

#### ✅ Admin Panel (Quản trị viên): ⭐ MỚI!

- **Dashboard:** Thống kê tổng quan (sản phẩm, người dùng, đơn hàng, doanh thu)
- **Quản lý sản phẩm:** CRUD sản phẩm, upload hình ảnh, quản lý tồn kho
- **Quản lý danh mục:** CRUD danh mục sản phẩm
- **Quản lý người dùng:** Xem danh sách user, phân quyền, khóa/mở tài khoản
- **Quản lý đơn hàng:** Xem, cập nhật trạng thái đơn hàng, hủy đơn
- **Quản lý bình luận:** Duyệt, xóa bình luận không phù hợp
- **Quản lý khuyến mãi:** Tạo, quản lý chương trình sale
- **Báo cáo & thống kê:** Doanh thu theo thời gian, sản phẩm bán chạy
- **Cài đặt hệ thống:** Quản lý quyền, cấu hình website

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
│   │   ├── order.controller.js          # 🆕 Quản lý đơn hàng (có send_mail)
│   │   ├── detail_order.controller.js   # 🆕 Chi tiết đơn hàng
│   │   ├── comment.controller.js        # 🆕 Quản lý bình luận
│   │   ├── delivery.controller.js       # 🆕 Quản lý giao hàng
│   │   ├── note.controller.js           # 🆕 Quản lý ghi chú
│   │   ├── sale.controller.js           # ⭐ Quản lý khuyến mãi (Admin)
│   │   └── permission.controller.js     # ⭐ Quản lý quyền (Admin)
│   └── Router/
│       ├── user.router.js
│       ├── product.router.js
│       ├── category.router.js
│       ├── order.router.js              # 🆕 Route: /api/Payment
│       ├── detail_order.router.js       # 🆕
│       ├── comment.router.js            # 🆕
│       ├── delivery.router.js           # 🆕
│       ├── note.router.js               # 🆕
│       ├── sale.router.js               # ⭐ Route: /api/sale (Admin)
│       └── permission.router.js         # ⭐ Route: /api/permission (Admin)
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
│   ├── note.js                          # 🆕 Schema Note
│   ├── payment.js                       # 🆕 Schema Payment
│   ├── sale.js                          # ⭐ Schema Sale (Admin)
│   └── favorite.js                      # ⭐ Schema Favorite (Admin)
├── mailer.js                            # ⭐ Email service (Nodemailer)
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

### 🆕 Order API (Payment):
- `POST /api/Payment/order` - Tạo đơn hàng mới
- `GET /api/Payment/order/:id` - Lấy đơn hàng của user
- `GET /api/Payment/order/detail/:id` - Lấy chi tiết đơn hàng
- `POST /api/Payment/email` - ⭐ Gửi email xác nhận đơn hàng
- `POST /api/Payment/momo` - Xử lý callback MoMo

### 🆕 Detail Order API:
- `POST /api/detail_order` - Thêm chi tiết đơn hàng
- `GET /api/detail_order/:id_order` - Lấy chi tiết theo đơn hàng

### 🆕 Comment API:
- `POST /api/comment` - Tạo bình luận mới
- `GET /api/comment/:id_product` - Lấy bình luận theo sản phẩm
- `PUT /api/comment/:id` - Cập nhật bình luận
- `DELETE /api/comment/:id` - Xóa bình luận (Admin)

### 🆕 Delivery API:
- `POST /api/delivery` - Tạo thông tin giao hàng
- `GET /api/delivery/:id_order` - Lấy thông tin giao hàng theo đơn
- `PUT /api/delivery/:id` - Cập nhật trạng thái giao hàng

### 🆕 Note API:
- `POST /api/note` - Tạo ghi chú đơn hàng
- `GET /api/note/:id` - Lấy ghi chú theo ID

### ⭐ Admin APIs (MỚI):

#### Sale API:
- `GET /api/admin/Sale` - Lấy danh sách khuyến mãi (Admin)
- `POST /api/admin/Sale` - Tạo khuyến mãi mới (Admin)
- `PUT /api/admin/Sale/:id` - Cập nhật khuyến mãi (Admin)
- `DELETE /api/admin/Sale/:id` - Xóa khuyến mãi (Admin)

#### Admin Product API:
- `GET /api/admin/Product` - Lấy danh sách sản phẩm (Admin)
- `POST /api/admin/Product` - Tạo sản phẩm mới (Admin)
- `PUT /api/admin/Product/:id` - Cập nhật sản phẩm (Admin)
- `DELETE /api/admin/Product/:id` - Xóa sản phẩm (Admin)

#### Admin Order API:
- `GET /api/admin/Order` - Lấy danh sách đơn hàng (Admin)
- `PUT /api/admin/Order/:id` - Cập nhật trạng thái đơn hàng (Admin)
- `DELETE /api/admin/Order/:id` - Hủy đơn hàng (Admin)

#### Admin User API:
- `GET /api/admin/User` - Lấy danh sách người dùng (Admin)
- `PUT /api/admin/User/:id` - Cập nhật thông tin user (Admin)
- `DELETE /api/admin/User/:id` - Khóa tài khoản user (Admin)

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
- **⭐ Nhận email xác nhận đơn hàng** (mới)

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
| **⭐ Email thông báo** | ❌ | ❌ | ✅ |
| **⭐ Admin Panel** | ❌ | ❌ | ✅ |
| **⭐ Mã giảm giá (Coupon)** | ❌ | ❌ | ✅ |
| **⭐ Sale/Khuyến mãi** | ❌ | ❌ |❌  |
| Live Chat | ❌ | ❌ | ❌ |
| PayPal Integration | ❌ | ❌ | ⚠️ |

---

## 🐛 Lưu ý và hạn chế

### Chức năng hoạt động đầy đủ:
- ✅ Thanh toán tiền mặt (COD)
- ✅ Email notification khi đặt hàng (Nodemailer + Gmail SMTP)
- ✅ Tính phí ship theo khoảng cách (Google Maps API)
- ✅ **Admin Panel hoàn chỉnh** (Quản lý sản phẩm, đơn hàng, user, sale)
- ✅ **Sale management** (Quản lý khuyến mãi, giảm giá sản phẩm)
- ✅ **Dashboard thống kê** (Doanh thu, đơn hàng, sản phẩm bán chạy)
- ✅ Bình luận và đánh giá sản phẩm

### Chức năng cần cấu hình:
- ⚠️ Thanh toán MoMo (cần cấu hình API key MoMo)
- ⚠️ Thanh toán PayPal (cần PayPal API credentials)
- ⚠️ Google Maps API (cần Google API key cho production)
- ⚠️ Email SMTP (hiện dùng Gmail, cần thay email/password trong `mailer.js`)

### Chức năng chưa có (dành cho Giai đoạn 4):
- ❌ Live Chat real-time
- ❌ Socket.io notifications
- ❌ Advanced analytics & reporting
- ❌ Multi-language support
- ❌ Live Chat
- ❌ Socket.io real-time notification

### Lưu ý kỹ thuật:
- Checkout hỗ trợ COD, MoMo, PayPal (cần config)
- Bình luận chưa có phân trang
- Socket.io đã comment (để Giai đoạn 4)
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
