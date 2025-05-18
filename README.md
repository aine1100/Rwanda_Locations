# Rwanda Location API

A simple RESTful API serving detailed location data for Rwanda, including provinces, districts, sectors, cells, and villages.
Ideal for apps needing hierarchical geographic data for Rwanda.

---

## Features

* Retrieve all location data
* Get a list of all provinces
* Fetch districts by province
* Fetch sectors by province and district
* Fetch cells by province, district, and sector
* Fetch villages by province, district, sector, and cell

---

## Getting Started

### Prerequisites

* Node.js (v14+ recommended)
* npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/rwanda-location-api.git
   cd rwanda-location-api
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file (optional) to set your PORT or other env variables:

   ```
   PORT=3000
   ```

4. Start the server

   ```bash
   npm start
   # or
   yarn start
   ```

---

## API Endpoints

### Base URL

```
http://localhost:3000/api/location
```

### Endpoints

* `GET /`
  Get the full nested location data

* `GET /provinces`
  Get a list of all provinces in Rwanda

* `GET /province/:province/districts`
  Get districts in a specific province

* `GET /province/:province/district/:district/sector`
  Get sectors in a specific district and province

* `GET /province/:province/district/:district/sector/:sector/cells`
  Get cells in a specific sector, district, and province

* `GET /province/:province/district/:district/sector/:sector/cell/:cell/villages`
  Get villages in a specific cell, sector, district, and province

---

## Example Requests

Get all provinces:

```bash
curl http://localhost:3000/api/location/provinces
```

Get districts in the "amajyepfo" province:

```bash
curl http://localhost:3000/api/location/province/amajyepfo/districts
```

Get sectors in "nyanza" district of "amajyepfo" province:

```bash
curl http://localhost:3000/api/location/province/amajyepfo/district/nyanza/sector
```

---

## Project Structure

```
├── controller/
│   └── location.js         # Controller functions for location endpoints
├── data/
│   └── location.json       # Rwanda location hierarchical data
├── routes/
│   └── location.js         # API routes
├── server.js               # Main server entry point
├── package.json
└── README.md
```

---

## Contributing

Contributions and suggestions are welcome! Feel free to open issues or pull requests.

---

## License

MIT License © \[ainedushimire]

