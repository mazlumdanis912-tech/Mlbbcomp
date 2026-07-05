import fetch from "node-fetch";
import * as cheerio from "cheerio";

export interface Tournament {
  name: string;
  date: string;
  prize: string;
  status: "CANLI" | "YAKINDA" | "GEÇMİŞ";
}

export class MobileLegendsApp {
  private tournamentPortalUrl: string = "https://liquipedia.net/mobilelegends/Portal:Tournaments";

  async fetchTournamentInfo(): Promise<Tournament[]> {
    const response = await fetch(this.tournamentPortalUrl);
    const html = await response.text();
    const $ = cheerio.load(html);

    const tournaments: Tournament[] = [];

    $("table tbody tr").each((i, el) => {
      const name = $(el).find("td:nth-child(2)").text().trim();
      const date = $(el).find("td:nth-child(3)").text().trim();
      const prize = $(el).find("td:nth-child(4)").text().trim();

      let status: "CANLI" | "YAKINDA" | "GEÇMİŞ" = "YAKINDA";
      if (new Date(date) < new Date()) status = "GEÇMİŞ";

      tournaments.push({ name, date, prize, status });
    });

    return tournaments;
  }
}