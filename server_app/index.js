const express = require('express')
const app = express()
const http = require('http').Server(app);

const cors = require("cors");

var upload = require('express-fileupload');
const port = 8000

const ProductAPI = require('./API/Router/product.router')
const UserAPI = require('./API/Router/user.router')
const CategoryAPI = require('./API/Router/category.router')
const OrderAPI = require('./API/Router/order.router') // GIAI ĐOẠN 3: Thêm Order
const DetailOrderAPI = require('./API/Router/detail_order.router') // GIAI ĐOẠN 3: Thêm Detail Order
const CommentAPI = require('./API/Router/comment.router') // GIAI ĐOẠN 3: Thêm Comment
const DeliveryAPI = require('./API/Router/delivery.router') // GIAI ĐOẠN 3: Thêm Delivery

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Users = require('./Models/user');
const Permission = require('./Models/permission'); // chỉ require 1 lần

const USER = "toantra349";
const PASS = encodeURIComponent("toantoan123");
const DB = "mydb";
const HOST = "ktpm.dwb8wtz.mongodb.net";

const uri = `mongodb+srv://${USER}:${PASS}@${HOST}/${DB}?retryWrites=true&w=majority`;


mongoose.connect(uri)
    .then(async() => {
        console.log("✅ Kết nối MongoDB Atlas");

        // ===== Permission =====
        let adminPerm = await Permission.findOne({ permission: 'Admin' });
        if (!adminPerm) {
            adminPerm = new Permission({ permission: 'Admin' });
            await adminPerm.save();
            console.log("🌱 Permission 'Admin' đã được tạo");
        }

        let staffPerm = await Permission.findOne({ permission: 'Nhân Viên' });
        if (!staffPerm) {
            staffPerm = new Permission({ permission: 'Nhân Viên' });
            await staffPerm.save();
            console.log("🌱 Permission 'Nhân Viên' đã được tạo");
        }

        let customerPerm = await Permission.findOne({ permission: 'Khách Hàng' });
        if (!customerPerm) {
            customerPerm = new Permission({ permission: 'Khách Hàng' });
            await customerPerm.save();
            console.log("🌱 Permission 'Khách Hàng' đã được tạo");
        }

        // ===== User (admin) =====
        let admin = await Users.findOne({ username: "admin" });
        if (!admin) {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash("123456", salt);

            admin = new Users({
                username: "admin",
                password: hashedPassword,
                fullname: "Administrator",
                gender: "Nam",
                email: "admin@example.com",
                phone: "0123456789",
                id_permission: adminPerm._id
            });
            await admin.save();
            console.log("🌱 Admin đã được tạo với mật khẩu hash");
        } else {
            console.log("ℹ️ Admin đã tồn tại");
        }

        // ===== Category =====
        const Category = require('./Models/category');
        let category = await Category.findOne({ category: 'Áo' });
        if (!category) {
            category = new Category({ category: 'Áo' });
            await category.save();
            console.log("🌱 Category 'Áo' đã được tạo");
        }

        let category2 = await Category.findOne({ category: 'Quần' });
        if (!category2) {
            category2 = new Category({ category: 'Quần' });
            await category2.save();
            console.log("🌱 Category 'Quần' đã được tạo");
        }

        // ===== Product =====
        const Products = require('./Models/product');
        let product = await Products.findOne({ name_product: 'Áo Thun Trắng' });
        if (!product) {
            product = new Products({
                id_category: category._id,
                name_product: 'Áo Thun Trắng',
                price_product: '199000',
                image: 'aothuntrang.jpg',
                describe: 'Áo thun cotton 100%',
                gender: 'Unisex'
            });
            await product.save();
            console.log("🌱 Product 'Áo Thun Trắng' đã được tạo");
        }

        // 🌱 Đồng bộ user chưa có permission
        const allUsers = await Users.find();
        for (let user of allUsers) {
            if (!user.id_permission) {
                if (user.username === 'admin') {
                    user.id_permission = adminPerm._id;
                } else {
                    user.id_permission = customerPerm._id;
                }
                await user.save();
                console.log(`✅ Đã cập nhật permission cho user: ${user.username}`);
            }
        }

        console.log("✅ Hoàn tất seed dữ liệu - GIAI ĐOẠN 1");
    })
    .catch(err => console.error("❌ Lỗi:", err));





app.use('/', express.static('public'))
app.use(upload());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use('/api/Product', ProductAPI)
app.use('/api/User', UserAPI)
app.use('/api/Category', CategoryAPI)
app.use('/api/Order', OrderAPI) // GIAI ĐOẠN 3: Thêm Order
app.use('/api/Detail_Order', DetailOrderAPI) // GIAI ĐOẠN 3: Thêm Detail Order
app.use('/api/Comment', CommentAPI) // GIAI ĐOẠN 3: Thêm Comment
app.use('/api/Delivery', DeliveryAPI) // GIAI ĐOẠN 3: Thêm Delivery


http.listen(port, () => {
    console.log('🚀 Server đang chạy trên port: ' + port + ' - GIAI ĐOẠN 3');
});