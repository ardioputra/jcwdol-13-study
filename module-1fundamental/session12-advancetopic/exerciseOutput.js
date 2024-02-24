const FoodOrderQueue = require("./exercise.js");

const orderQueue = new FoodOrderQueue();

orderQueue.addOrder("Rendang");
orderQueue.addOrder("Nasi");
orderQueue.addOrder("Telur Dadar");
orderQueue.addOrder("Sayur Hijau");

orderQueue.processQueue();
