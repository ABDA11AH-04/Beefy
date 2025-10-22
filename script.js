document.addEventListener('DOMContentLoaded', function() {
    // هذا الكود يعمل في كل من صفحة details.html و details_en.html

    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    // إضافة مستمع حدث (Event Listener) لكل زر
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 1. إزالة حالة التفعيل (active) من جميع الأزرار والمحتويات
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // 2. تفعيل الزر الذي تم الضغط عليه
            this.classList.add('active');

            // 3. تحديد رقم/اسم المحتوى المرتبط بالزر
            const targetId = this.getAttribute('data-tab');

            // 4. تفعيل المحتوى المرتبط
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});