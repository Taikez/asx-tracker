# ASX Tracker

A modern web application for tracking and analyzing Australian Stock Exchange (ASX) listed companies, featuring sortable listings, financial KPIs, and interactive charts.

Built with a clean, scalable architecture and designed to integrate real financial data pipelines.

---

## ✨ Features

- 🔍 Search companies by code or name
- 🏭 Filter companies by industry
- ↕️ Sort by price, market cap, and financial metrics
- 📊 Interactive charts for price, revenue, and profit trends
- 🧮 Key financial ratios & KPIs
- 📄 Detailed company profile pages
- ⚡ Fast, responsive UI with modern UX

---

## 🧱 Architecture Overview

This project is split into two main layers:

### Frontend (Web App)

- Displays company listings and detail pages
- Handles filtering, sorting, pagination, and visualization

### Data Pipeline (Backend / ETL)

- Python scripts fetch and process ASX financial data
- Data is normalized and stored in Google Sheets
- Frontend consumes data from Google Sheets (API / export)

This separation allows:

- Easy data updates without redeploying frontend
- Future migration to a database or API service
- Rapid prototyping with real market data

---

## 🛠 Tech Stack

### Frontend

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Recharts**
- **React Hooks**

### Data Pipeline

- **Python**
- **Google Sheets API**
- **Pandas**
- **Scheduled data updates (cron / GitHub Actions ready)**

---
