
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

Start Development Server:


Initiate the development server with the following command: 

```bash
npm run dev
```

## Backend (Laravel)

1. **Create a Database:**

Open XAMPP and create a new database named `restapi` . This database will be used by the Laravel backend.

2. **Navigate to Rest-Api Folder:**

Open the Rest-Api folder in your terminal or code editor.

3. **Install PHP Dependencies:**

Run the following command to install PHP dependencies:

```bash
composer install
```
  
4. **Run Database Migrations:**
Execute the migration command to set up the database tables:

```bash
php artisan migrate 
```
5. **Start Laravel Server:** 

Launch the Laravel development server:
```bash
php artisan serve
```

