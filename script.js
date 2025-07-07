// รอให้ DOM (โครงสร้าง HTML) โหลดเสร็จสมบูรณ์ก่อนที่จะรัน JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // อ้างอิงถึงองค์ประกอบ HTML ด้วย ID
    const questionPopup = document.getElementById('questionPopup'); // Pop-up คำถาม
    const closePopupBtn = document.getElementById('closePopup');   // ปุ่มปิด Pop-up
    const menuIcon = document.getElementById('menuIcon');         // ไอคอน Hamburger Menu
    const fullscreenMenu = document.getElementById('fullscreenMenu'); // เมนูเต็มหน้าจอ
    const closeMenuBtn = document.getElementById('closeMenu');     // ปุ่มปิดเมนูเต็มหน้าจอ
    const menuLinks = document.querySelectorAll('.fullscreen-menu ul li a'); // ลิงก์ในเมนูเต็มหน้าจอ

    // แสดง Pop-up เมื่อหน้าเว็บโหลด
    // ใช้ setTimeout เพื่อให้แน่ใจว่าหน้าเว็บแสดงผลก่อนเล็กน้อย
    setTimeout(() => {
        questionPopup.classList.add('active'); // เพิ่มคลาส 'active' เพื่อแสดง Pop-up
    }, 500); // แสดง Pop-up หลังจาก 0.5 วินาที

    // เพิ่ม Event Listener สำหรับปุ่มปิด Pop-up
    closePopupBtn.addEventListener('click', () => {
        questionPopup.classList.remove('active'); // ลบคลาส 'active' เพื่อซ่อน Pop-up
    });

    // เพิ่ม Event Listener สำหรับไอคอน Hamburger Menu (เปิดเมนู)
    menuIcon.addEventListener('click', () => {
        fullscreenMenu.classList.add('active'); // เพิ่มคลาส 'active' เพื่อแสดงเมนูเต็มหน้าจอ
    });

    // เพิ่ม Event Listener สำหรับปุ่มปิดเมนูเต็มหน้าจอ
    closeMenuBtn.addEventListener('click', () => {
        fullscreenMenu.classList.remove('active'); // ลบคลาส 'active' เพื่อซ่อนเมนูเต็มหน้าจอ
    });

    // เพิ่ม Event Listener สำหรับลิงก์ในเมนูเต็มหน้าจอ
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            fullscreenMenu.classList.remove('active'); // ซ่อนเมนูเมื่อคลิกลิงก์
            // Optional: Smooth scroll ไปยังส่วนที่ต้องการ
            const targetId = link.getAttribute('href'); // ดึงค่า href ของลิงก์ (เช่น "#about")
            const targetSection = document.querySelector(targetId); // ค้นหา section นั้นใน DOM
            if (targetSection) {
                // ใช้ scrollIntoView เพื่อเลื่อนไปยัง section นั้นอย่างนุ่มนวล
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
