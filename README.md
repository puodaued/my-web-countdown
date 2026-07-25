# Minimal Countdown

เว็บไซต์นับถอยหลังสู่วันที่ **15 มีนาคม 2027 เวลา 00:00 น. ตามเวลาไทย**

## ไฟล์

- `index.html` — โครงสร้างหน้าเว็บ
- `style.css` — รูปแบบมินิมอลและ responsive
- `script.js` — ระบบนับถอยหลัง

## เปิดดูบนเครื่อง

เปิดไฟล์ `index.html` ในเว็บเบราว์เซอร์ได้ทันที

## Deploy ด้วย Cloudflare Pages

1. สร้าง repository ใหม่บน GitHub
2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้
3. เข้า Cloudflare Dashboard
4. ไปที่ **Workers & Pages**
5. เลือก **Create application > Pages > Connect to Git**
6. เลือก repository นี้
7. ตั้งค่า:
   - Framework preset: `None`
   - Build command: เว้นว่าง
   - Build output directory: `/`
8. กด Deploy

## เปลี่ยนวันสิ้นสุด

แก้บรรทัดนี้ใน `script.js`

```js
const TARGET_DATE = new Date("2027-03-15T00:00:00+07:00");
```
