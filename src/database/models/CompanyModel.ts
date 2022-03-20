import { DataTypes, Model } from "sequelize";
import { db } from "../db";

export const CompanyModel = db.define(
  "Companies",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalTraveledWeek: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "total_traveled_week",
      defaultValue: Math.floor(Math.random() * 10000),
    },
    totalOrder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "total_order",
      defaultValue: Math.floor(Math.random() * 100),
    },
    completedOrders: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "completed_orders",
      defaultValue: Math.floor(Math.random() * 50),
    },
  },
  {
    timestamps: false,
  },
);
