const express = require("express");
const locationData = require("../data/location.json");

// Get full location data
async function getLocation(req, res) {
  try {
    const location = locationData;
    res.status(200).json({
      status: "success",
      location,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
}

// Get all provinces
async function getProvince(req, res) {
  try {
    const provinces = locationData.provinces.map((province) => province.name);
    res.status(200).json({
      status: "success",
      provinces,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
}

// Get districts by province name
async function getDistrict(req, res) {
  try {
    const provinceName = req.params.province;
    const province = locationData.provinces.find(
      (p) => p.name.toLowerCase() === provinceName.toLowerCase()
    );

    if (!province) {
      return res.status(404).json({
        status: "error",
        message: "Province not found",
      });
    }

    const districts = province.districts.map((district) => district.name);

    res.status(200).json({
      status: "success",
      districts,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
}

// Get sectors by province and district names
async function getSectors(req, res) {
  try {
    const provinceName = req.params.province;
    const districtName = req.params.district;

    const province = locationData.provinces.find(
      (p) => p.name.toLowerCase() === provinceName.toLowerCase()
    );

    if (!province) {
      return res.status(404).json({
        status: "error",
        message: "Province not found",
      });
    }

    const district = province.districts.find(
      (d) => d.name.toLowerCase() === districtName.toLowerCase()
    );

    if (!district) {
      return res.status(404).json({
        status: "error",
        message: "District not found",
      });
    }

    const sectors = district.sectors.map((sector) => sector.name);

    res.status(200).json({
      status: "success",
      sectors,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
}

// Get cells by province, district and sector names
async function getCells(req, res) {
  try {
    const { province, district, sector } = req.params;

    const prov = locationData.provinces.find(
      (p) => p.name.toLowerCase() === province.toLowerCase()
    );
    if (!prov)
      return res.status(404).json({
        status: "error",
        message: "Province not found",
      });

    const dist = prov.districts.find(
      (d) => d.name.toLowerCase() === district.toLowerCase()
    );
    if (!dist)
      return res.status(404).json({
        status: "error",
        message: "District not found",
      });

    const sect = dist.sectors.find(
      (s) => s.name.toLowerCase() === sector.toLowerCase()
    );
    if (!sect)
      return res.status(404).json({
        status: "error",
        message: "Sector not found",
      });

    const cells = sect.cells.map((cell) => cell.name);

    res.status(200).json({
      status: "success",
      cells,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
}

// Get villages by province, district, sector, and cell names
async function getVillages(req, res) {
  try {
    const { province, district, sector, cell } = req.params;

    const prov = locationData.provinces.find(
      (p) => p.name.toLowerCase() === province.toLowerCase()
    );
    if (!prov)
      return res.status(404).json({
        status: "error",
        message: "Province not found",
      });

    const dist = prov.districts.find(
      (d) => d.name.toLowerCase() === district.toLowerCase()
    );
    if (!dist)
      return res.status(404).json({
        status: "error",
        message: "District not found",
      });

    const sect = dist.sectors.find(
      (s) => s.name.toLowerCase() === sector.toLowerCase()
    );
    if (!sect)
      return res.status(404).json({
        status: "error",
        message: "Sector not found",
      });

    const c = sect.cells.find(
      (c) => c.name.toLowerCase() === cell.toLowerCase()
    );
    if (!c)
      return res.status(404).json({
        status: "error",
        message: "Cell not found",
      });

    const villages = c.villages.map((v) => v.name);

    res.status(200).json({
      status: "success",
      villages,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
}

module.exports = {
  getLocation,
  getProvince,
  getDistrict,
  getSectors,
  getCells,
  getVillages,
};
