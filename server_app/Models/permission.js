// Models/permission.js
const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
    permission: { type: String, required: true }
});

const Permission = mongoose.model('Permission', permissionSchema, 'permission');

module.exports = Permission;