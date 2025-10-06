# 🎯 GIAI ĐOẠN 1 - Chức năng cơ bản

## 📋 Các chức năng đã triển khai

### ✅ Backend (Server)
- **Product (Sản phẩm)**
  - Xem danh sách sản phẩm
  - Xem chi tiết sản phẩm
  - Tìm kiếm sản phẩm
  - Phân trang
  - Lọc theo giới tính
  
- **Category (Danh mục)**
  - Xem danh sách danh mục
  - Lọc sản phẩm theo danh mục

- **User (Người dùng)**
  - Đăng ký tài khoản
  - Đăng nhập
  - Đăng xuất
  - Xem thông tin cá nhân

- **Permission (Phân quyền)**
  - Admin
  - Nhân viên
  - Khách hàng

### ✅ Frontend (Client)
- Trang chủ với danh sách sản phẩm
- Trang chi tiết sản phẩm
- Trang đăng nhập/đăng ký
- Tìm kiếm và lọc sản phẩm
- Responsive design

## 🚀 Hướng dẫn chạy

```bash
# Build Docker containers
docker compose build

# Chạy ứng dụng
docker compose up --watch
```

## 🌐 Truy cập

- **Client App:** http://localhost:3000
- **Admin App:** http://localhost:3001
- **Server API:** http://localhost:8000

## 📊 Database Models sử dụng

- ✅ Product
- ✅ Category
- ✅ User
- ✅ Permission

## 🔐 Tài khoản mặc định

- **Username:** admin
- **Password:** 123456
- **Role:** Admin

## 📝 Ghi chú

Đây là giai đoạn đầu tiên với các chức năng cơ bản nhất. Người dùng có thể:
- Xem và tìm kiếm sản phẩm
- Đăng ký/Đăng nhập tài khoản
- Xem chi tiết sản phẩm

**Các chức năng chưa có trong giai đoạn này:**
- ❌ Giỏ hàng
- ❌ Yêu thích
- ❌ Đặt hàng
- ❌ Đánh giá
- ❌ Admin panel
- ❌ Chat
- ❌ Thanh toán
