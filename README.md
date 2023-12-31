# Connecting Frontend and Backend Using API

To integrate your frontend and backend with Laravel and ReactJS, follow these steps:

## Frontend (ReactJS)

1. **Open Project Folder:**
Navigate to the `crudwithapi` folder in your terminal or code editor.

2. **Install Dependencies:**
Run the following command to install project dependencies:
```bash
  npm install
```
<ol>
<li>Start Development Server:</li>
</ol>
Initiate the development server with the following command: 
```bash 
npm run dev
```
##Backend (Laravel)
<ol>
<li>Create a Database:</li>
<p>
Open XAMPP and create a new database named 
```bash 
 restapi
```
 . This database will be
 used by the Laravel backend.
</p>
<li>Navigate to Rest-Api Folder:</li>
<p>Open the Rest-Api folder in your terminal or code editor.</p>
<li>Install PHP Dependencies:</li>
<p>Run the following command to install PHP dependencies:</p>

```bash
composer install
```

<li>Run Database Migrations:</li>
<p>Execute the migration command to set up the database tables:</p>

```bash
php artisan migrate 
```
<li>Start Laravel Server:</li>
<p>Launch the Laravel development server:</p>
```bash 
php artisan serve 
```
</ol>
