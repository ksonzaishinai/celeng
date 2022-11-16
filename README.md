# Shortcut

Install dependencies / libs

```
npm install
```

Migrasi database

```
npx sequelize db:migrate
```

Menjalankan server

```
npm run dev
```

# Langkah-langkah

### Clone Repository

```bash
git clone git@github.com:synrgy-5-fsw-1-cihuy/sapi1-sequelize.git
```

### Buka folder yang sudah diclone

Buka pake vscode kalian

### Install dependencies / libs

```
npm install
```

### Ganti config di src/config/database.json

```json
{
  "development": {
    "username": "punyamu",
    "password": "punyamu",
    "database": "punyamu",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

### Migrasi DB

```bash
npx sequelize db:migrate
```

### Menjalankan server

```bash
npm run dev
```

### Tambahkan handler di file src/routes/index.js

Sesuai CRUD

Request / Response lihat di [DOCS](DOCS.md)
