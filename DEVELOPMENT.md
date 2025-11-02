# دليل التطوير

## 🚀 البدء السريع

### المتطلبات
- متصفح حديث يدعم ES6+
- خادم محلي (Python, Node.js, PHP, أو Live Server)

### التشغيل المحلي
```bash
# استنساخ المشروع
git clone https://github.com/youssef20807y/portfolio-website.git
cd portfolio-website

# تشغيل خادم محلي
python -m http.server 8000
# أو
npx serve .

# فتح المتصفح
open http://localhost:8000
```

## 🔧 حل المشاكل الشائعة

### مشكلة CORS
**الخطأ:** `Access to script at 'file://...' has been blocked by CORS policy`

**الحل:** 
- لا تفتح `index.html` مباشرة
- استخدم خادم محلي دائماً
- في VS Code: استخدم Live Server extension

### مشكلة Service Worker
**الخطأ:** `Failed to register a ServiceWorker: The URL protocol of the current origin ('null') is not supported`

**الحل:**
- Service Worker يعمل فقط مع `https://` أو `localhost`
- تم إضافة شرط في الكود للتحقق من البروتوكول

### مشكلة Firebase
**الخطأ:** `Firebase configuration not found`

**الحل:**
- تأكد من وجود ملف `firebase-config.js`
- تأكد من تحميل الملف قبل Firebase SDK

## 📁 هيكل الملفات

```
portfolio-website/
├── 📄 index.html              # الصفحة الرئيسية
├── 🎨 style.css               # التنسيق الرئيسي
├── ⚡ script.js               # الوظائف التفاعلية
├── 🔧 sw.js                   # Service Worker
├── 🔥 firebase-config.js      # تكوين Firebase
├── 🔥 firebase.json           # إعدادات Firebase Hosting
├── 🔥 firestore.rules         # قواعد أمان Firestore
├── 🔥 firestore.indexes.json  # فهارس Firestore
├── 📝 README.md               # التوثيق الرئيسي
├── 🔒 SECURITY.md             # إرشادات الأمان
├── 👨‍💻 DEVELOPMENT.md          # دليل التطوير (هذا الملف)
├── 📜 LICENSE                 # رخصة المشروع
├── 🚫 .gitignore              # ملفات Git المتجاهلة
├── 🖼️ images/                 # الصور والرسوميات
│   ├── profile.jpg
│   ├── portfolio-1.png
│   ├── portfolio-2.jpg
│   └── portfolio-3.png
└── 📁 assets/                 # الملفات الإضافية
    └── cv.pdf
```

## 🛠️ التطوير

### إضافة مشروع جديد
1. أضف صورة المشروع في مجلد `images/`
2. عدّل مصفوفة `portfolioData` في `script.js`
3. أضف التصنيف المناسب (`web`, `design`, `branding`, `social`)

### تخصيص الألوان
عدّل متغيرات CSS في بداية `style.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #06b6d4;
    /* ... */
}
```

### إضافة مهارة جديدة
عدّل مصفوفات المهارات في `script.js`:
```javascript
const skillsData = {
    programming: [...],
    design: [...],
    other: [...]
};
```

## 🔥 Firebase

### إعداد مشروع جديد
1. أنشئ مشروع Firebase جديد
2. فعّل Firestore Database
3. حدّث `firebase-config.js` بالمفاتيح الجديدة
4. انشر قواعد الأمان: `firebase deploy --only firestore:rules`

### نشر على Firebase Hosting
```bash
# تسجيل الدخول
firebase login

# تهيئة المشروع
firebase init hosting

# النشر
firebase deploy
```

## 📱 اختبار التوافق

### المتصفحات المدعومة
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### اختبار الاستجابة
- 📱 Mobile: 320px - 768px
- 📟 Tablet: 768px - 1024px
- 💻 Desktop: 1024px+

### اختبار الأداء
```bash
# Lighthouse في Chrome DevTools
# أو استخدم
npm install -g lighthouse
lighthouse http://localhost:8000
```

## 🐛 تتبع الأخطاء

### Console Logs
- افتح Developer Tools (F12)
- تحقق من تبويب Console للأخطاء
- تحقق من تبويب Network للطلبات الفاشلة

### أخطاء شائعة
1. **404 على الصور:** تحقق من مسارات الملفات
2. **Firebase errors:** تحقق من التكوين والاتصال
3. **CSS لا يعمل:** تحقق من مسار `style.css`
4. **JavaScript errors:** تحقق من Console

## 📈 تحسين الأداء

### الصور
- استخدم تنسيقات حديثة (WebP, AVIF)
- ضغط الصور قبل الرفع
- استخدم أحجام مناسبة للشاشات

### CSS/JS
- تجميع الملفات في الإنتاج
- تصغير الكود (minification)
- استخدام CDN للمكتبات

### Firebase
- تحسين قواعد Firestore
- استخدام التخزين المؤقت
- مراقبة الاستخدام والتكلفة
