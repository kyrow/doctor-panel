const express = require("express");
const multer = require("multer");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 3001;
app.use(cors());

// Настройка хранения файлов с помощью multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Создайте папку uploads, если она не существует
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// Маршрут для приема данных
app.post("/client", upload.single("file"), async (req, res) => {
  const { fio } = req.body;
  const file = req.file;

  if (!fio || !file) {
    return res.status(400).send("fio and file are required");
  }

  try {
    const form = await prisma.form.create({
      data: {
        fio,
        client_file: file.path,
      },
    });
    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/doctor/:id", upload.single("file"), async (req, res) => {
  const { id } = req.params;
  const { doctor_diagnosis, doctor_description } = req.body;
  const doctor_file = req.file;

  try {
    const form = await prisma.form.update({
      where: {
        id: parseInt(id),
      },
      data: {
        type: "DOCTOR",
        doctor_file: doctor_file.path,
        doctor_description: doctor_description,
        doctor_diagnosis: doctor_diagnosis,
      },
    });
    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/clients", async (req, res) => {
  try {
    const clients = await prisma.form.findMany({
      where: {
        type: "CLIENT",
      },
    });
    res.status(201).json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get("/doctors", async (req, res) => {
  try {
    const clients = await prisma.form.findMany({
      where: {
        type: "DOCTOR",
      },
    });
    res.status(201).json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get("/file/:filename", (req, res) => {
  const { filename } = req.params;
  const imagePath = path.join(__dirname, "uploads", filename);

  // Проверяем существует ли файл
  if (fs.existsSync(imagePath)) {
    // Отправляем файл
    res.sendFile(imagePath);
  } else {
    res.status(404).send("Image not found");
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
