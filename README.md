# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/db7ade02-e265-4e52-a556-114e05290e7b

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/db7ade02-e265-4e52-a556-114e05290e7b) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/db7ade02-e265-4e52-a556-114e05290e7b) and click on Share -> Publish.

---

## النشر على Netlify (موصى به)

اتّبع الخطوات التالية لنشر المشروع على Netlify:

1) ربط المستودع (Git) مباشرةً على Netlify
- سجّل الدخول إلى Netlify ثم اختر: Add new site → Import an existing project.
- اختر المستودع الذي يحتوي على المشروع.
- Build command: `npm run build`
- Publish directory: `dist`
- لا حاجة لمتغيرات بيئة.
- أنشئ الموقع وسيقوم Netlify بعملية البناء التلقائي في كل دفع (push).

2) النشر بالسحب والإفلات (Drag & Drop)
- محليًا: `npm i && npm run build`
- بعد الانتهاء، اسحب مجلد `dist` وأفلته في https://app.netlify.com/drop

3) التوجيه لواجهات SPA
- تمت إضافة `netlify.toml` و`public/_redirects` تلقائيًا لتمكين توجيه جميع المسارات إلى `index.html` (status 200).

ملاحظات هامة
- تم ضبط Vite ليستخدم مسارات نسبية في الإنتاج (`base: './'`) ليعمل على أي دومين.
- جميع الروابط داخل التطبيق عميلة (client-side) باستخدام React Router، ولا يوجد أي backend.

---

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
