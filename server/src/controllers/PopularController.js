// src/controllers/PopularMenuController.js
module.exports = {
    // ดูรายการเมนูยอดนิยม
    index (req, res) {
        res.send('เรียกดูรายการเมนูยอดนิยมทั้งหมด (PopularMenu)')
    },

    // เพิ่มเมนูยอดนิยมใหม่
    create (req, res) {
        // รับข้อมูล JSON เมนูกาแฟจากหน้าบ้าน
        res.send('สร้างเมนูยอดนิยม: ' + JSON.stringify(req.body))
    },

    // แก้ไขข้อมูลเมนูยอดนิยม (เช่น เพิ่มเมนูใหม่แทนที่เมนูเก่า)
    put (req, res) {
        res.send('แก้ไขเมนูยอดนิยม ID: ' + req.params.PopularMenuId + ' ข้อมูล: ' + JSON.stringify(req.body))
    },

    // ลบเมนูยอดนิยม
    remove (req, res) {
        res.send('ลบเมนูยอดนิยม ID: ' + req.params.PopularMenuId)
    },
}