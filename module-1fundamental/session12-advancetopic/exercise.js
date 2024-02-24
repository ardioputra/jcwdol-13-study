class FoodOrderQueue {
  constructor() {
    this.queue = [];
  }

  addOrder(order) {
    this.queue.push(order);
    console.log(`[Log] Order added to the queue: ${order}`);
    this.printQueue();
  }

  processQueue() {
    let queueIndex = 1;

    const processOrder = (order) => {
      return new Promise((resolve) => {
        const processingTime = Math.floor(Math.random() * 10) + 1;

        setTimeout(() => {
          console.log(
            `[Log] Queue ${queueIndex} Done in ${processingTime} seconds`
          );
          queueIndex++;
          resolve();
        }, processingTime * 1000);
      });
    };

    const processNextOrder = async () => {
      if (this.queue.length > 0) {
        const order = this.queue.shift();
        await processOrder(order);
        this.printQueue();
        processNextOrder();
      }
    };

    processNextOrder();
  }

  printQueue() {
    console.log("[Log] Current Queue:", this.queue);
  }
}

// const { FoodOrderQueue } = require("./exercise.js");

// const orderQueue = new FoodOrderQueue();

// orderQueue.addOrder("Rendang");
// orderQueue.addOrder("Nasi");
// orderQueue.addOrder("Telur Dadar");
// orderQueue.addOrder("Sayur Hijau");

// console.log(orderQueue.processQueue());

module.exports = FoodOrderQueue ;
