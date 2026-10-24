
"use strict";

const $ = (id) => document.getElementById(id);

const fields = [
  "name", "nickname", "birth", "country",
  "city", "job", "gender", "bio"
];

const examples = [
  {
    name: "آدم يوسف",
    nickname: "آدم",
    birth: "2001-05-14",
    country: "مصر",
    city: "الإسكندرية",
    job: "مصمم خيالي",
    gender: "ذكر",
    bio: "شخصية خيالية بتحب المغامرات والتصميم."
  },
  {
    name: "ليان أحمد",
    nickname: "ليان",
    birth: "2003-09-22",
    country: "الأردن",
    city: "عمّان",
    job: "فنانة خيالية",
    gender: "أنثى",
    bio: "شخصية خيالية بتحب الرسم واكتشاف الأماكن."
  },
  {
    name: "نور سامي",
    nickname: "نور",
    birth: "2000-12-03",
    country: "المغرب",
    city: "الرباط",
    job: "كاتبة خيالية",
    gender: "أخرى",
    bio: "شخصية خيالية بتحب الكتب والقصص."
  },
  {
    name: "يوسف خالد",
    nickname: "جو",
    birth: "1998-03-18",
    country: "السعودية",
    city: "جدة",
    job: "مستكشف خيالي",
    gender: "ذكر",
    bio: "شخصية خيالية بتحب السفر والتجارب الجديدة."
  }
];

let photoData = "";
let savedCards = [];

try {
  savedCards = JSON.parse(localStorage.getItem("khayalCards") || "[]");
  if (!Array.isArray(savedCards)) savedCards = [];
} catch (error) {
  savedCards = [];
}

function getValue(id) {
  const element = $(id);
  return element ? element.value.trim() : "";
}

function makeNumber() {
  return "FIC-" + Math.random().toString(36).slice(2, 10).toUpperCase();
}

let currentNumber = makeNumber();

function updatePreview() {
  const values = {
    outName: getValue("name") || "اسم الشخصية",
    outNickname: getValue("nickname") || "الاسم المستعار",
    outBirth: getValue("birth") || "غير محدد",
    outGender: getValue("gender") || "غير محدد",
    outCountry: getValue("country") || "غير محدد",
    outCity: getValue("city") || "غير محدد",
    outJob: getValue("job") || "غير محدد",
    outNumber: currentNumber,
    outBio: getValue("bio") || "اكتب نبذة عن الشخصية الخيالية..."
  };

  Object.keys(values).forEach((id) => {
    const element = $(id);
    if (element) element.textContent = values[id];
  });
}

function showPhoto(data) {
  const image = $("previewPhoto");
  const placeholder = $("placeholder");

  if (data && image) {
    image.src = data;
    image.style.display = "block";
    if (placeholder) placeholder.style.display = "none";
  } else {
    if (image) {
      image.removeAttribute("src");
      image.style.display = "none";
    }
    if (placeholder) placeholder.style.display = "";
  }
}

function getCardData() {
  const data = {};
  fields.forEach((id) => {
    data[id] = getValue(id);
  });

  data.photo = photoData;
  data.number = currentNumber;
  data.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  data.createdAt = new Date().toISOString();

  return data;
}

function applyCard(data) {
  fields.forEach((id) => {
    const element = $(id);
    if (element) element.value = data[id] || "";
  });

  photoData = data.photo || "";
  currentNumber = data.number || makeNumber();

  showPhoto(photoData);
  updatePreview();
}

function randomCharacter() {
  const item = examples[Math.floor(Math.random() * examples.length)];

  fields.forEach((id) => {
    const element = $(id);
    if (element) element.value = item[id] || "";
  });

  currentNumber = makeNumber();
  updatePreview();
}

function clearForm() {
  fields.forEach((id) => {
    const element = $(id);
    if (element) element.value = "";
  });

  const photoInput = $("photo");
  if (photoInput) photoInput.value = "";

  photoData = "";
  currentNumber = makeNumber();

  showPhoto("");
  updatePreview();
}

function readAndResizeImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () => reject(new Error("مش قادرين نقرأ الصورة."));
    reader.onload = () => {
      const image = new Image();

      image.onerror = () => reject(new Error("الصورة دي مش مدعومة."));
      image.onload = () => {
        const maxSize = 700;
        const ratio = Math.min(
          1,
          maxSize / Math.max(image.width, image.height)
        );

        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * ratio));
        canvas.height = Math.max(1, Math.round(image.height * ratio));

        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error("تعذر تجهيز الصورة."));
          return;
        }

        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };

      image.src = reader.result;
    };

    reader.readAsDataURL(file);
  });
}

async function handlePhotoChange(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    alert("اختار ملف صورة صحيح.");
    event.target.value = "";
    return;
  }

  try {
    photoData = await readAndResizeImage(file);
    showPhoto(photoData);
  } catch (error) {
    alert(error.message || "حصل خطأ أثناء تحميل الصورة.");
    event.target.value = "";
  }
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
  const words = String(text || "").split(/\s+/);
  let line = "";
  let lines = 0;

  for (let i = 0; i < words.length; i++) {
    const testLine = line ? line + " " + words[i] : words[i];

    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      y += lineHeight;
      lines++;
      line = words[i];

      if (lines >= maxLines - 1) break;
    } else {
      line = testLine;
    }
  }

  if (line && lines < maxLines) {
    ctx.fillText(line, x, y);
  }
}

function loadImage(data) {
  return new Promise((resolve) => {
    if (!data) {
      resolve(null);
      return;
    }

    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = data;
  });
}

async function downloadCard() {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 760;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    alert("متصفحك مش قادر ينشئ الصورة.");
    return;
  }

  const gradient = ctx.createLinearGradient(0, 0, 1200, 760);
  gradient.addColorStop(0, "#17152d");
  gradient.addColorStop(1, "#28214c");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#8b7cff";
  ctx.lineWidth = 5;
  ctx.strokeRect(18, 18, 1164, 724);

  ctx.textAlign = "right";
  ctx.direction = "rtl";
  ctx.fillStyle = "#b9aaff";
  ctx.font = "bold 36px Tahoma, Arial";
  ctx.fillText("خَيال | شخصية خيالية", 1140, 75);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 42px Tahoma, Arial";
  ctx.fillText(getValue("name") || "اسم الشخصية", 800, 155);

  ctx.fillStyle = "#b8b4d8";
  ctx.font = "26px Tahoma, Arial";
  ctx.fillText("الاسم المستعار: " + (getValue("nickname") || "غير محدد"), 800, 215);
  ctx.fillText("تاريخ الميلاد: " + (getValue("birth") || "غير محدد"), 800, 265);
  ctx.fillText("النوع: " + (getValue("gender") || "غير محدد"), 800, 315);
  ctx.fillText("الدولة: " + (getValue("country") || "غير محدد"), 800, 365);
  ctx.fillText("المدينة: " + (getValue("city") || "غير محدد"), 800, 415);
  ctx.fillText("المهنة: " + (getValue("job") || "غير محدد"), 800, 465);

  ctx.fillStyle = "#ffffff";
  ctx.font = "24px Tahoma, Arial";
  drawWrappedText(
    ctx,
    "نبذة: " + (getValue("bio") || "لا توجد نبذة."),
    800, 530, 650, 35, 3
  );

  ctx.textAlign = "left";
  ctx.fillStyle = "#a9a0d7";
  ctx.font = "22px Arial";
  ctx.fillText("CODE: " + currentNumber, 60, 690);

  const portrait = await loadImage(photoData);

  ctx.fillStyle = "#332d58";
  ctx.fillRect(65, 125, 300, 370);

  if (portrait) {
    const scale = Math.max(300 / portrait.width, 370 / portrait.height);
    const width = portrait.width * scale;
    const height = portrait.height * scale;

    ctx.save();
    ctx.beginPath();
    ctx.rect(65, 125, 300, 370);
    ctx.clip();
    ctx.drawImage(
      portrait,
      65 + (300 - width) / 2,
      125 + (370 - height) / 2,
      width,
      height
    );
    ctx.restore();
  } else {
    ctx.textAlign = "center";
    ctx.fillStyle = "#c5baff";
    ctx.font = "30px Tahoma, Arial";
    ctx.fillText("بدون صورة", 215, 315);
  }

  ctx.textAlign = "center";
  ctx.fillStyle = "#ffdc85";
  ctx.font = "bold 25px Tahoma, Arial";
  ctx.fillText("غير رسمية — للترفيه فقط", 600, 720);

  try {
    const link = document.createElement("a");
    link.download = "khayal-character.png";
    link.href = canvas.toDataURL("image/png");
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    alert("تعذر تنزيل الصورة. جرّب متصفحًا تانيًا.");
  }
}

function saveCardsToStorage() {
  try {
    localStorage.setItem("khayalCards", JSON.stringify(savedCards));
    return true;
  } catch (error) {
    alert("مساحة الحفظ في المتصفح مش كفاية. احذف بعض البطاقات أو استخدم صورًا أصغر.");
    return false;
  }
}

function saveCard() {
  const data = getCardData();

  if (!data.name) {
    alert("اكتب اسم الشخصية الأول قبل الحفظ.");
    return;
  }

  savedCards.unshift(data);

  if (savedCards.length > 30) {
    savedCards = savedCards.slice(0, 30);
  }

  if (saveCardsToStorage()) {
    renderSavedCards();
    alert("تم حفظ الشخصية على الجهاز.");
  } else {
    savedCards.shift();
  }
}

function deleteCard(id) {
  if (!confirm("متأكد إنك عايز تحذف الشخصية دي؟")) return;

  const oldCards = savedCards.slice();
  savedCards = savedCards.filter((item) => item.id !== id);

  if (saveCardsToStorage()) {
    renderSavedCards();
  } else {
    savedCards = oldCards;
  }
}

function renderSavedCards() {
  const container = $("saved");
  if (!container) return;

  container.replaceChildren();

  if (!savedCards.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "لسه مفيش شخصيات محفوظة.";
    container.appendChild(empty);
    return;
  }

  savedCards.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "saved-item";

    const title = document.createElement("div");
    title.className = "saved-name";
    title.textContent = item.name || "شخصية بدون اسم";

    const openButton = document.createElement("button");
    openButton.type = "button";
    openButton.textContent = "فتح";
    openButton.addEventListener("click", () => {
      applyCard(item);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "حذف";
    deleteButton.addEventListener("click", () => deleteCard(item.id));

    wrapper.append(title, openButton, deleteButton);
    container.appendChild(wrapper);
  });
}

fields.forEach((id) => {
  const element = $(id);
  if (element) {
    element.addEventListener("input", updatePreview);
    element.addEventListener("change", updatePreview);
  }
});

if ($("photo")) {
  $("photo").addEventListener("change", handlePhotoChange);
}

if ($("random")) $("random").addEventListener("click", randomCharacter);
if ($("clear")) $("clear").addEventListener("click", clearForm);
if ($("download")) $("download").addEventListener("click", downloadCard);
if ($("save")) $("save").addEventListener("click", saveCard);

updatePreview();
showPhoto("");
renderSavedCards();
