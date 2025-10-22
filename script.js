document.addEventListener('DOMContentLoaded', () => {
    // تحديد جميع أزرار علامات التبويب
    const tabButtons = document.querySelectorAll('.tabs-nav .tab-button');
    // تحديد جميع محتويات علامات التبويب
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. إزالة حالة النشاط (active) من جميع الأزرار والمحتويات
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // 2. تفعيل الزر الذي تم الضغط عليه
            button.classList.add('active');

            // 3. تحديد المحتوى المرتبط بالزر
            const targetId = button.getAttribute('data-tab');
            const targetContent = document.getElementById(targetId);

            // 4. تفعيل المحتوى المرتبط ليظهر
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});