==============================================
Multilingual & RTL Support (العربية / English)
==============================================

**Noori Sphinx Theme** includes native, first-class support for both **Left-to-Right (LTR)** and **Right-to-Left (RTL)** languages, such as **Arabic (العربية)**, **Persian/Farsi (فارسی)**, **Urdu (اردو)**, and **Hebrew (עברית)**.

Overview of RTL Features
========================

* **Automatic Direction Detection**: When you set ``language = 'ar'`` (or ``fa``, ``ur``, ``he``, ``ps``) in Sphinx's ``conf.py``, the theme automatically applies ``dir="rtl"`` to the document and switches to optimized Arabic typography.
* **Modern Arabic Typography**: Includes Google's **Cairo** and **Vazirmatn** web fonts, engineered specifically for high readability in technical documentation and code interfaces.
* **Mirrored Layout Components**: The sidebar, search bar, navigation tree, on-page table of contents, breadcrumbs, and callout borders automatically mirror seamlessly.
* **Code Preservation**: All code snippets (Python, Bash, JSON, C++) automatically maintain strict LTR orientation with correct token syntax highlighting.
* **Interactive Live Toggle**: Users can click the **[ عربي / EN ]** toggle in the header navbar to switch directions on the fly.

Configuring Arabic in Sphinx
============================

To build your documentation in Arabic or another RTL language:

.. code-block:: python

   # conf.py

   # Set project language to Arabic
   language = "ar"

   html_theme = "noori_sphinx_theme"

   html_theme_options = {
       "project_name": "نوري",
       "logo_text": "توثيق نوري",
       "tagline": "نظام توثيق حديث وعالي الأداء",
       
       # Explicit direction setting (optional; auto-detected if language is 'ar')
       "direction": "rtl",
       "show_direction_toggle": True,
       
       # Ecosystem navigation in Arabic
       "show_ecosystem_bar": True,
       "ecosystem_title": "منظومة نوري",
       "ecosystem_links": [
           {"name": "النواة الرئيسية", "url": "#", "active": True},
           {"name": "الحوسبة الموزعة", "url": "https://example.com/compute", "badge": "جديد"},
           {"name": "الذكاء الاصطناعي", "url": "https://example.com/ai"},
       ],
   }

Supported RTL Languages
=======================

The theme automatically sets ``dir="rtl"`` for the following ISO language codes:

.. list-table::
   :widths: 20 30 50
   :header-rows: 1

   * - Code
     - Language Name
     - Native Script
   * - ``ar``
     - Arabic
     - العربية
   * - ``fa``
     - Persian / Farsi
     - فارسی
   * - ``ur``
     - Urdu
     - اردو
   * - ``ps``
     - Pashto
     - پښتو
   * - ``he``
     - Hebrew
     - עברית
   * - ``ckb``
     - Central Kurdish / Sorani
     - کوردی

---

نموذج عرض باللغة العربية (Arabic Showcase)
===========================================

فيما يلي مثال حي على كيفية ظهور التوثيق والتنبيهات باللغة العربية:

.. note::
   **ملاحظة هامة:** هذا تنبيه توضيحي مكتوب باللغة العربية. تم تصميم الخطوط والمحاذاة لتبدأ بسلاسة من اليمين إلى اليسار مع الاحتفاظ بجمالية واجهة المستخدم.

.. tip::
   **نصيحة تقنية:** يمكنك الضغط على زر التبديل **[ عربي / EN ]** في الشريط العلوي لتجربة التبديل الفوري بين اتجاهي اليمين واليسار دون الحاجة لإعادة تحميل الصفحة.

أكواد برمجية ثنائية اللغة
------------------------------------------------

تظل كتل الأكواد البرمجية دائماً باتجاه اليسار إلى اليمين (LTR) لضمان صحة بناء الجمل البرمجية:

.. code-block:: python
   :caption: مثال بايثون / Python Example

   from noori import Engine

   # تهيئة المحرك باللغة العربية والإنجليزية
   app = Engine(language="ar", direction="rtl")
   app.run(workers=8)
   print("تم تشغيل النظام بنجاح!")
