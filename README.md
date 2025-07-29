# 🏠 Airbnb Autofill Extension

This Chrome extension allows you to automatically extract reservation details from Airbnb host stay page (guest name, accommodation, and dates) and easily inject them into your custom HTML contract form (`contract.html`).

---

## ✨ Features

- ✅ Extracts guest name, room description, and check-in/check-out dates.
- 📋 Copies data to clipboard or stores it in `chrome.storage`.
- 📥 Seamless integration with your local contract file (`contract.html`).
- ⚡ Works on Airbnb host pages like `https://www.airbnb.es/hosting/stay/HMXXXX`.

---

## 📁 Project Structure  
airbnb-autofill-extension/  
├── manifest.json  
├── content.js  
├── popup.html  
├── popup.js  
└── icons/  
         └── icon.png

---

## 🧩 How to Install

1. Download or clone this repo.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer mode** (top right).
4. Click **“Load unpacked”** and select the `airbnb-autofill-extension/` folder.

---

## 🚀 How to Use It

### Step 1: Open Airbnb Reservation
- Go to any reservation page on Airbnb:  
  `https://www.airbnb.es/hosting/stay/HMXXXX`

### Step 2: Click the Extension Icon
- The popup will show a "Copy to clipboard" button.
- Data is also saved to `chrome.storage.local`.

### Step 3: Open your Contract Template
- In your `contract.html`, click the button **📥 Import data**.
- Fields are automatically filled:
  - 👤 Guest Name
  - 🏠 Accommodation
  - 📅 Start and End Dates

---

## 📄 Integration with `contract.html`

The HTML contract template (`contract.html`) allows guests to digitally sign and export a PDF, which can then be uploaded to S3 or sent via WhatsApp.

This extension helps populate that contract instantly with data pulled from Airbnb.

---

## 🛑 Limitations

- 🖥️ Desktop only (Chrome).  
- ❌ Does **not** work on mobile due to CORS and browser security.
- Airbnb must be open and you must be logged in.

---

## ✅ Requirements

- Logged-in Airbnb host account.
- Chrome browser with extensions enabled.
- Access to Airbnb's hosting reservation pages.

---

## 🙋‍♂️ Author

Built by [Pablo Torrente](https://github.com/pableitor)  
Crafted with 💙 using ChatGPT.
