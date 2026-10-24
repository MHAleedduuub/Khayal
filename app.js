
"use strict";

const $ = (id) => document.getElementById(id);

const translations = {
  ar: {
    eyebrow: "مساحتك لصناعة الخيال",
    title: "اصنع شخصيتك الخيالية",
    subtitle: "صمّم شخصية، أضف صورتها، واحفظ بطاقتها أو نزّلها كصورة.",
    preferences: "التفضيلات",
    appearance: "المظهر واللغة",
    language: "اللغة",
    theme: "الثيم",
    dark: "داكن",
    light: "فاتح",
    step1: "الخطوة الأولى",
    details: "بيانات الشخصية",
    uploadTitle: "ارفع صورة الشخصية",
    uploadHint: "اضغط هنا لاختيار صورة من جهازك",
    name: "الاسم الكامل",
    nameHint: "مثال: آدم يوسف",
    nickname: "الاسم المستعار",
    nicknameHint: "اكتب اسمًا مستعارًا",
    birth: "تاريخ الميلاد",
    birthHint: "يوم/شهر/سنة",
    gender: "النوع",
    choose: "اختر",
    male: "ذكر",
    female: "أنثى",
    other: "أخرى",
    country: "الدولة",
    countryHint: "اكتب الدولة",
    city: "المدينة",
    cityHint: "اكتب المدينة",
    job: "المهنة",
    jobHint: "اكتب المهنة",
    bio: "نبذة عن الشخصية",
    bioHint: "اكتب نبذة قصيرة عن الشخصية الخيالية...",
    random: "✦ بيانات عشوائية",
    clear: "مسح الحقول",
    save: "حفظ الشخصية",
    download: "تنزيل PNG",
    step2: "الخطوة الثانية",
    previewTitle: "معاينة البطاقة",
    live: "مباشر",
    fictionalProfile: "ملف شخصية خيالية",
    noPhoto: "بدون صورة",
    fullName: "الاسم الكامل",
    alias: "الاسم المستعار",
    fictionNotice: "غير رسمية — للترفيه فقط",
    previewNote: "هذه بطاقة ترفيهية لشخصية خيالية، وليست وثيقة إثبات هوية.",
    yourCollection: "مجموعتك",
    savedTitle: "الشخصيات المحفوظة",
    footerNotice: "مشروع ترفيهي لإنشاء شخصيات خيالية. لا تستخدم البطاقات لانتحال الهوية.",
    emptySaved: "لسه مفيش شخصيات محفوظة.",
    open: "فتح",
    delete: "حذف",
    confirmDelete: "متأكد إنك عايز تحذف الشخصية دي؟",
    enterName: "اكتب اسم الشخصية الأول قبل الحفظ.",
    savedOk: "تم حفظ الشخصية على جهازك.",
    deletedOk: "تم حذف الشخصية.",
    photoError: "مش قادرين نقرأ الصورة. جرّب صورة تانية.",
    imageOnly: "اختار ملف صورة صحيح.",
    storageError: "مساحة الحفظ مش كفاية. احذف بعض الشخصيات أو استخدم صورًا أصغر.",
    downloadError: "تعذر تنزيل الصورة. جرّب متصفحًا تانيًا.",
    opened: "تم فتح الشخصية.",
    emptyName: "شخصية بدون اسم",
    defaultName: "اسم الشخصية",
    defaultNickname: "الاسم المستعار",
    defaultBio: "اكتب نبذة عن الشخصية الخيالية...",
    unknown: "غير محدد",
    fictional: "شخصية خيالية",
    sampleBio: "شخصية خيالية بتحب المغامرات واكتشاف أماكن جديدة.",
    dateExample: "14/05/2001",
    idLabel: "رقم خيالي"
  },
  en: {
    eyebrow: "Your creative space",
    title: "Create a fictional character",
    subtitle: "Design a character, add a photo, save the profile, or download it as an image.",
    preferences: "PREFERENCES",
    appearance: "Appearance & language",
    language: "Language",
    theme: "Theme",
    dark: "Dark",
    light: "Light",
    step1: "STEP ONE",
    details: "Character details",
    uploadTitle: "Upload a character photo",
    uploadHint: "Tap here to choose an image from your device",
    name: "Full name",
    nameHint: "Example: Adam Yousef",
    nickname: "Nickname",
    nicknameHint: "Enter a nickname",
    birth: "Date of birth",
    birthHint: "DD/MM/YYYY",
    gender: "Gender",
    choose: "Choose",
    male: "Male",
    female: "Female",
    other: "Other",
    country: "Country",
    countryHint: "Enter a country",
    city: "City",
    cityHint: "Enter a city",
    job: "Occupation",
    jobHint: "Enter an occupation",
    bio: "Character bio",
    bioHint: "Write a short fictional character bio...",
    random: "✦ Random details",
    clear: "Clear fields",
    save: "Save character",
    download: "Download PNG",
    step2: "STEP TWO",
    previewTitle: "Card preview",
    live: "LIVE",
    fictionalProfile: "FICTIONAL CHARACTER PROFILE",
    noPhoto: "No photo",
    fullName: "FULL NAME",
    alias: "Nickname",
    fictionNotice: "FICTIONAL — FOR ENTERTAINMENT ONLY",
    previewNote: "This is a fictional entertainment card, not an identity document.",
    yourCollection: "YOUR COLLECTION",
    savedTitle: "Saved characters",
    footerNotice: "A creative project for fictional characters. Do not use cards for impersonation.",
    emptySaved: "No saved characters yet.",
    open: "Open",
    delete: "Delete",
    confirmDelete: "Are you sure you want to delete this character?",
    enterName: "Enter a character name before saving.",
    savedOk: "Character saved on this device.",
    deletedOk: "Character deleted.",
    photoError: "Could not read the image. Try another image.",
    imageOnly: "Please select a valid image file.",
    storageError: "Storage is full. Delete some characters or use smaller images.",
    downloadError: "Could not download the image. Try another browser.",
    opened: "Character opened.",
    emptyName: "Unnamed character",
    defaultName: "Character name",
    defaultNickname: "Nickname",
    defaultBio: "Write a fictional character bio...",
    unknown: "Not specified",
    fictional: "Fictional character",
    sampleBio: "A fictional character who loves adventures and discovering new places.",
    dateExample: "14/05/2001",
    idLabel: "Fictional ID"
  }
};

const fields = [
  "name", "nickname", "birth", "gender",
  "country", "city", "job", "bio"
];

const examples = [
  {
    name: "آدم يوسف",
    nickname: "آدم",
    birth: "14/05/2001",
    gender: "ذكر",
    country: "مصر",
    city: "الإسكندرية",
    job: "مصمم خيالي",
    bio: "شخصية خيالية بتحب المغامرات والتصميم."
  },
  {
    name: "ليان أحمد",
    nickname: "ليان",
    birth: "22/09/2003",
    gender: "أنثى",
    country: "الأردن",
    city: "عمّان",
    job: "فنانة خيالية",
    bio: "شخصية خيالية بتحب الرسم واكتشاف الأماكن."
  },
  {
    name: "نور سامي",
    nickname: "نور",
    birth: "03/12/2000",
    gender: "أخرى",
    country: "المغرب",
    city: "الرباط",
    job: "كاتبة خيالية",
    bio: "شخصية خيالية بتحب الكتب والقصص."
  },
  {
    name: "يوسف خالد",
    nickname: "جو",
    birth: "18/03/1998",
    gender: "ذكر",
    country: "السعودية",
    city: "جدة",
    job: "مستكشف خيالي",
    bio: "شخصية خيالية بتحب السفر والتجارب الجديدة."
  }
];

let currentLanguage = localStorage.getItem("khayalLanguage") || "ar";
let currentTheme = localStorage.getItem("khayalTheme") || "dark";
let photoData = "";
let currentNumber = makeNumber();
let savedCards = [];

try {
  const parsed = JSON.parse(localStorage.getItem("khayalCards") || "[]");
  savedCards = Array.isArray(parsed) ? parsed : [];
} catch (_) {
  savedCards = [];
}

function makeNumber() {
  return "FIC-" + Math.random().toString(36).slice(2, 10).toUpperCase();
}

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function setStatus(message) {
  const element = $("status");
  if (element) element.textContent = message || "";
}

function applyLanguage() {
  const lang = currentLanguage === "en" ? "en" : "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-placeholder]").forEach((element) => {
    const key = element.dataset.placeholder;
    if (translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  const langSelect = $("languageSelect");
  if (langSelect) langSelect.value = lang;

  const langButton = $("languageBtn");
  if (langButton) langButton.textContent = lang === "ar" ? "EN" : "عربي";

  updatePreview();
  renderSavedCards();
}

function applyTheme() {
  const theme = currentTheme === "light" ? "light" : "dark";
  document.body.dataset.theme = theme;

  const themeSelect = $("themeSelect");
  if (themeSelect) themeSelect.value = theme;

  const themeButton = $("themeBtn");
  if (themeButton) {
    themeButton.textContent = theme === "dark" ? "☀️" : "🌙";
    themeButton.title = theme === "dark" ? t("light") : t("dark");
  }

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.content = theme === "dark" ? "#17152d" : "#f4f2fb";
  }
}

function getValue(id) {
  const element = $(id);
  return element ? element.value.trim() : "";
}

function updatePreview() {
  const values = {
    outName: getValue("name") || t("defaultName"),
    outNickname: getValue("nickname") || "—",
    outBirth: getValue("birth") || "—",
    outGender: getValue("gender") ? translatedGender(getValue("gender")) : "—",
    outCountry: getValue("country") || "—",
    outCity: getValue("city") || "—",
    outJob: getValue("job") || "—",
    outBio: getValue("bio") || t("defaultBio"),
    outNumber: currentNumber
  };

  Object.entries(values).forEach(([id, value]) => {
    const element = $(id);
    if (element) element.textContent = value;
  });
}

function translatedGender(value) {
  const map = {
    "ذكر": "male",
    "أنثى": "female",
    "أخرى": "other"
  };

  return map[value] ? t(map[value]) : value;
}

function showPhoto(data) {
  const image = $("previewPhoto");
  const placeholder = $("placeholder");

  if (data && image) {
    image.src = data;
    image.hidden = false;
    if (placeholder) placeholder.hidden = true;
  } else {
    if (image) {
      image.removeAttribute("src");
      image.hidden = true;
    }
    if (placeholder) placeholder.hidden = false;
  }
}

function getCardData() {
  const data = {};
  fields.forEach((id) => data[id] = getValue(id));

  return {
    ...data,
    photo: photoData,
    number: currentNumber,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    createdAt: new Date().toISOString()
  };
}

function applyCard(data) {
  fields.forEach((id) => {
    const element = $(id);
    if (element) {
      let value = data[id] || "";

      if (id === "gender") {
        const options = Array.from(element.options).map((option) => option.value);
        if (!options.includes(value)) {
          const reverseMap = { Male: "ذكر", Female: "أنثى", Other: "أخرى" };
          value = reverseMap[value] || "";
        }
      }

      element.value = value;
    }
  });

  photoData = data.photo || "";
  currentNumber = data.number || makeNumber();

  showPhoto(photoData);
  updatePreview();
  setStatus(t("opened"));
}

function randomCharacter() {
  const item = examples[Math.floor(Math.random() * examples.length)];

  fields.forEach((id) => {
    const element = $(id);
    if (element) element.value = item[id] || "";
  });

  photoData = "";
  const photoInput = $("photo");
  if (photoInput) photoInput.value = "";

  currentNumber = makeNumber();
  showPhoto("");
  updatePreview();
  setStatus("");
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
  setStatus("");
}

function readAndResizeImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () => reject(new Error(t("photoError")));

    reader.onload = () => {
      const image = new Image();

      image.onerror = () => reject(new Error(t("photoError")));

      image.onload = () => {
        const maxSize = 600;
        const ratio = Math.min(1, maxSize / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");

        canvas.width = Math.max(1, Math.round(image.width * ratio));
        canvas.height = Math.max(1, Math.round(image.height * ratio));

        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error(t("photoError")));
          return;
        }

        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.78));
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
    setStatus(t("imageOnly"));
    event.target.value = "";
    return;
  }

  try {
    photoData = await readAndResizeImage(file);
    showPhoto(photoData);
    setStatus("");
  } catch (error) {
    setStatus(error.message || t("photoError"));
    event.target.value = "";
  }
}

function saveCardsToStorage() {
  try {
    localStorage.setItem("khayalCards", JSON.stringify(savedCards));
    return true;
  } catch (_) {
    setStatus(t("storageError"));
    return false;
  }
}

function saveCard() {
  const data = getCardData();

  if (!data.name) {
    setStatus(t("enterName"));
    return;
  }

  const oldCards = savedCards.slice();
  savedCards.unshift(data);

  if (savedCards.length > 30) {
    savedCards = savedCards.slice(0, 30);
  }

  if (saveCardsToStorage()) {
    renderSavedCards();
    setStatus(t("savedOk"));
  } else {
    savedCards = oldCards;
  }
}

function deleteCard(id) {
  if (!window.confirm(t("confirmDelete"))) return;

  const oldCards = savedCards.slice();
  savedCards = savedCards.filter((item) => item.id !== id);

  if (saveCardsToStorage()) {
    renderSavedCards();
    setStatus(t("deletedOk"));
  } else {
    savedCards = oldCards;
  }
}

function renderSavedCards() {
  const container = $("saved");
  if (!container) return;

  container.replaceChildren();

  const count = $("savedCount");
  if (count) count.textContent = String(savedCards.length);

  if (!savedCards.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = t("emptySaved");
    container.appendChild(empty);
    return;
  }

  savedCards.forEach((item) => {
    const wrapper = document.createElement("article");
    wrapper.className = "saved-item";

    const title = document.createElement("div");
    title.className = "saved-name";
    title.textContent = item.name || t("emptyName");

    const meta = document.createElement("p");
    meta.className = "saved-meta";
    meta.textContent = item.number || "";

    const actions = document.createElement("div");
    actions.className = "saved-actions";

    const openButton = document.createElement("button");
    openButton.type = "button";
    openButton.textContent = t("open");
    openButton.addEventListener("click", () => {
      applyCard(item);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-btn";
    deleteButton.textContent = t("delete");
    deleteButton.addEventListener("click", () => deleteCard(item.id));

    actions.append(openButton, deleteButton);
    wrapper.append(title, meta, actions);
    container.appendChild(wrapper);
  });
}

function wrapText(context, text, x, y, maxWidth, lineHeight, maxLines) {
  const words = String(text || "").split(/\s+/);
  let line = "";
  let lines = 0;

  for (const word of words) {
    const test = line ? line + " " + word : word;

    if (context.measureText(test).width > maxWidth && line) {
      context.fillText(line, x, y);
      y += lineHeight;
      lines++;
      line = word;

      if (lines >= maxLines - 1) break;
    } else {
      line = test;
    }
  }

  if (line && lines < maxLines) context.fillText(line, x, y);
}

function loadImage(data) {
  return new Promise((resolve) => {
    if (!data) return resolve(null);

    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = data;
  });
}

async function downloadCard() {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 800;

  const context = canvas.getContext("2d");
  if (!context) {
    setStatus(t("downloadError"));
    return;
  }

  const en = currentLanguage === "en";
  const rtl = !en;
  const align = rtl ? "right" : "left";
  const right = rtl ? 1140 : 60;
  const left = rtl ? 60 : 1140;

  const gradient = context.createLinearGradient(0, 0, 1200, 800);
  gradient.addColorStop(0, "#17152d");
  gradient.addColorStop(1, "#302653");

  context.fillStyle = gradient;
  context.fillRect(0, 0, 1200, 800);

  context.strokeStyle = "#8875cc";
  context.lineWidth = 5;
  context.strokeRect(18, 18, 1164, 764);

  context.direction = rtl ? "rtl" : "ltr";
  context.textAlign = align;
  context.fillStyle = "#c5b7ff";
  context.font = "bold 34px Tahoma, Arial";
  context.fillText("KHAYAL STUDIO", right, 75);

  context.fillStyle = "#f7f4ff";
  context.font = "bold 39px Tahoma, Arial";
  context.fillText(getValue("name") || t("defaultName"), right, 150);

  context.fillStyle = "#d0c9e9";
  context.font = "25px Tahoma, Arial";

  const labels = en ? [
    ["Nickname", getValue("nickname")],
    ["Date of birth", getValue("birth")],
    ["Gender", getValue("gender") ? translatedGender(getValue("gender")) : ""],
    ["Country", getValue("country")],
    ["City", getValue("city")],
    ["Occupation", getValue("job")]
  ] : [
    ["الاسم المستعار", getValue("nickname")],
    ["تاريخ الميلاد", getValue("birth")],
    ["النوع", getValue("gender") ? translatedGender(getValue("gender")) : ""],
    ["الدولة", getValue("country")],
    ["المدينة", getValue("city")],
    ["المهنة", getValue("job")]
  ];

  let y = 210;

  for (const [label, value] of labels) {
    context.fillText(label + ": " + (value || "—"), right, y);
    y += 48;
  }

  const portrait = await loadImage(photoData);

  context.fillStyle = "#332d58";
  context.fillRect(65, 125, 300, 375);

  if (portrait) {
    const scale = Math.max(300 / portrait.width, 375 / portrait.height);
    const width = portrait.width * scale;
    const height = portrait.height * scale;

    context.save();
    context.beginPath();
    context.rect(65, 125, 300, 375);
    context.clip();
    context.drawImage(
      portrait,
      65 + (300 - width) / 2,
      125 + (375 - height) / 2,
      width,
      height
    );
    context.restore();
  } else {
    context.textAlign = "center";
    context.fillStyle = "#d0c5ff";
    context.font = "27px Tahoma, Arial";
    context.fillText(t("noPhoto"), 215, 320);
  }

  context.textAlign = align;
  context.direction = rtl ? "rtl" : "ltr";
  context.fillStyle = "#ffffff";
  context.font = "bold 24px Tahoma, Arial";
  wrapText(
    context,
    (en ? "Bio: " : "نبذة: ") + (getValue("bio") || t("defaultBio")),
    right,
    550,
    650,
    34,
    4
  );

  context.textAlign = "left";
  context.direction = "ltr";
  context.fillStyle = "#bdb1ee";
  context.font = "20px Arial";
  context.fillText(currentNumber, 60, 735);

  context.textAlign = "center";
  context.fillStyle = "#ffe29a";
  context.font = "bold 24px Tahoma, Arial";
  context.fillText(t("fictionNotice"), 600, 765);

  try {
    const link = document.createElement("a");
    link.download = "khayal-character.png";
    link.href = canvas.toDataURL("image/png");
    document.body.appendChild(link);
    link.click();
    link.remove();
    setStatus("");
  } catch (_) {
    setStatus(t("downloadError"));
  }
}

function init() {
  const languageSelect = $("languageSelect");
  const themeSelect = $("themeSelect");

  if (languageSelect) {
    languageSelect.value = currentLanguage;
    languageSelect.addEventListener("change", () => {
      currentLanguage = languageSelect.value === "en" ? "en" : "ar";
      try {
        localStorage.setItem("khayalLanguage", currentLanguage);
      } catch (_) {}
      applyLanguage();
      applyTheme();
    });
  }

  if (themeSelect) {
    themeSelect.value = currentTheme;
    themeSelect.addEventListener("change", () => {
      currentTheme = themeSelect.value === "light" ? "light" : "dark";
      try {
        localStorage.setItem("khayalTheme", currentTheme);
      } catch (_) {}
      applyTheme();
    });
  }

  if ($("languageBtn")) {
    $("languageBtn").addEventListener("click", () => {
      currentLanguage = currentLanguage === "ar" ? "en" : "ar";
      try {
        localStorage.setItem("khayalLanguage", currentLanguage);
      } catch (_) {}
      applyLanguage();
      applyTheme();
    });
  }

  if ($("themeBtn")) {
    $("themeBtn").addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("khayalTheme", currentTheme);
      } catch (_) {}
      applyTheme();
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
  if ($("save")) $("save").addEventListener("click", saveCard);
  if ($("download")) $("download").addEventListener("click", downloadCard);

  applyLanguage();
  applyTheme();
  showPhoto("");
  updatePreview();
  renderSavedCards();
}

init();
