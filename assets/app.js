// كود لجعل زر "تحميل كـ PDF" يعمل
document.addEventListener('DOMContentLoaded', function() {
    // تحديد الزر الذي سيقوم بتصدير المحتوى كـ PDF
    const downloadButton = document.getElementById('download-pdf-button');

    // التأكد من وجود الزر قبل إضافة مستمع الحدث لتجنب الأخطاء
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            // تحديد العنصر الذي يحتوي على المحتوى المراد تصديره
            const element = document.getElementById('content-to-export');
            
            // تحديد خيارات التصدير
            const options = {
                margin: 10, // الهوامش حول المحتوى
                filename: 'document.pdf', // اسم الملف
                image: { type: 'jpeg', quality: 0.98 }, // جودة الصورة
                html2canvas: { scale: 2, useCORS: true }, // تحسين الدقة والسماح بتحميل الصور من مصادر خارجية
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // إعدادات ملف PDF
            };

            // استخدام مكتبة html2pdf لتحويل المحتوى وتنزيله كملف PDF
            html2pdf().from(element).set(options).save();
        });
    }
});