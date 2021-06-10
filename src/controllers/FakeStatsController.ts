import { Request, Response } from "express";
import path from "path";

class FakeStatsController {
  dashboardPlot(request: Request, response: Response) {
    const auxPath = path.resolve(__dirname, "..", "..");
    const plot = auxPath + `/uploads/graphics.png`;

    response.sendFile(plot);
  }

  dashboard(request: Request, response: Response) {
    const data = [
      {
        title: "Published articles",
        amount: 15,
        color: "#21C8D4",
        progress: 25,
      },

      {
        title: "Sales of articles",
        amount: 300,
        color: "#FEC72E",
        progress: 75,
      },

      { title: "Read articles", amount: 10, color: "#FD8453", progress: 50 },

      {
        title: "Purchased articles",
        amount: 8,
        color: "#1E3A6F",
        progress: 25,
      },

      {
        title: "Citations received",
        amount: 30,
        color: "#F697B5",
        progress: 50,
      },
    ];

    return response.json(data);
  }

  purchasedArticles(request: Request, response: Response) {
    const data = [
      {
        title: "Strategy",
        amount: 2,
        color: "#21C8D4",
        progress: 25,
      },

      {
        title: "Design",
        amount: 10,
        color: "#FEC72E",
        progress: 75,
      },

      { title: "Development", amount: 8, color: "#FD8453", progress: 50 },

      {
        title: "Social",
        amount: 6,
        color: "#1E3A6F",
        progress: 25,
      },

      {
        title: "Business",
        amount: 30,
        color: "#F697B5",
        progress: 50,
      },
    ];

    return response.json(data);
  }

  articlesYouWrote(request: Request, response: Response) {
    const data = [
      {
        title: "Strategy",
        amount: 2,
        color: "#21C8D4",
        progress: 25,
      },

      {
        title: "Design",
        amount: 10,
        color: "#FEC72E",
        progress: 75,
      },

      { title: "Development", amount: 8, color: "#FD8453", progress: 50 },

      {
        title: "Social",
        amount: 6,
        color: "#1E3A6F",
        progress: 25,
      },

      {
        title: "Business",
        amount: 30,
        color: "#F697B5",
        progress: 50,
      },
    ];

    return response.json(data);
  }
}

export { FakeStatsController };
// TODO: create fake stats for user
