# إعداد فهارس Firebase للردود

## المشكلة
عند استخدام نظام الردود، قد تواجه خطأ يتطلب إنشاء فهرس مركب في Firebase Firestore.

## الحل

### الطريقة الأولى: إنشاء الفهرس تلقائياً
1. انسخ الرابط الذي يظهر في رسالة الخطأ في وحدة التحكم
2. افتح الرابط في المتصفح
3. اضغط على "Create Index"
4. انتظر حتى يكتمل إنشاء الفهرس (قد يستغرق بضع دقائق)

### الطريقة الثانية: إنشاء الفهرس يدوياً
1. اذهب إلى [Firebase Console](https://console.firebase.google.com)
2. اختر مشروعك
3. اذهب إلى Firestore Database
4. اضغط على تبويب "Indexes"
5. اضغط على "Create Index"
6. أدخل المعلومات التالية:
   - Collection ID: `replies`
   - Fields:
     - `parentCommentId` (Ascending)
     - `timestamp` (Ascending)
7. اضغط على "Create"

### الطريقة الثالثة: استخدام Firebase CLI
```bash
# إنشاء ملف firestore.indexes.json
{
  "indexes": [
    {
      "collectionGroup": "replies",
      "queryScope": "COLLECTION",
      "fields": [
        {
          "fieldPath": "parentCommentId",
          "order": "ASCENDING"
        },
        {
          "fieldPath": "timestamp",
          "order": "ASCENDING"
        }
      ]
    }
  ]
}

# نشر الفهارس
firebase deploy --only firestore:indexes
```

## ملاحظات مهمة
- إنشاء الفهرس قد يستغرق بضع دقائق
- بعد إنشاء الفهرس، ستعمل الردود بشكل طبيعي
- الكود الحالي يتضمن حلول بديلة تعمل بدون فهرس

## هيكل البيانات المطلوب
```javascript
// مجموعة replies
{
  "name": "اسم المستخدم",
  "email": "email@example.com", // اختياري
  "reply": "نص الرد",
  "parentCommentId": "معرف التعليق الأصلي",
  "timestamp": "وقت الإنشاء",
  "approved": true
}
```

## استكشاف الأخطاء
- إذا استمر الخطأ، تأكد من أن الفهرس تم إنشاؤه بنجاح
- تحقق من أن قواعد Firestore تسمح بالقراءة والكتابة للمجموعة `replies`
- تأكد من أن مشروع Firebase متصل بشكل صحيح
