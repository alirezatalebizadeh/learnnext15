# 🚀 **Next.js 15 Tutorial**

## 📌 **ساختار روت‌بندی (Routing Structure)**

در Next.js 15، **ساختار صفحات** به‌صورت پوشه‌بندی انجام می‌شود. در ادامه ساختار مسیرها را توضیح داده‌ایم:

### **🔹 صفحات استاتیک (Static Routes)**

| فایل                                           | مسیر (URL)             | توضیحات               |
| ---------------------------------------------- | ---------------------- | --------------------- |
| `page.jsx`                                     | `/`                    | صفحه اصلی (Home Page) |
| `folder(about)/page.jsx`                       | `/about`               | صفحه درباره ما        |
| `folder(dashboard)/folder(users)/page.jsx`     | `/dashboard/users`     | صفحه کاربران          |
| `folder(dashboard)/folder(analytics)/page.jsx` | `/dashboard/analytics` | صفحه آنالیز           |

---

### **🔹 روت‌بندی داینامیک (Dynamic Routing)**
<img src="./readmeFiled/usersitemPNG.PNG"/>

اگر بخواهید **آی‌دی هر کاربر** را در مسیر مشخص کنید، باید از **براکت `[ ]`** استفاده کنید:

#### 📌 مثال:

برای نمایش جزئیات کاربران در مسیرهای زیر:

```
/dashboard/users/user-1
/dashboard/users/user-2
/dashboard/users/user-3
```

باید مسیر داینامیک را به این شکل تعریف کنید:

```bash
folder(dashboard)/folder(users)/folder([id])/page.jsx
```

> **این پوشه مشخص می‌کند که هر `id` داینامیک است و مقدار آن تغییر می‌کند.**

---

اینجا یه نسخه مرتب‌تر و خواناتر از متن شما با **ساختار بهتر برای نمایش تصاویر** در README:  

---

# 🔥 **کد نمونه برای صفحه داینامیک کاربر**  

```tsx
const UserItem = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div>
      <h1>User Profile: {id}</h1>
    </div>
  );
};

export default UserItem;
```
✅ در این کد، وقتی کاربر وارد مسیر **`/dashboard/users/[id]`** شود، مقدار `id` نمایش داده خواهد شد.  

---

## 🎨 **لایه‌بندی (Layout)**  

در این بخش، لایه‌بندی پروژه را مشاهده می‌کنید:  

<div align="center">
  <table>
    <tr>
      <td align="center"><img src="./readmeFiled/layout.PNG" width="200"/></td>
      <td align="center"><img src="./readmeFiled/layout2PNG.PNG" width="200"/></td>
      <td align="center"><img src="./readmeFiled/layout3PNG.PNG" width="200"/></td>
      <td align="center"><img src="./readmeFiled/layout4.PNG" width="200"/></td>
    </tr>
  </table>
</div>

📌 **این تصاویر نشان‌دهنده ساختار صفحات و لایه‌بندی پروژه هستند.**  

---

✔ **حالا README مرتب و خواناست! 🚀**