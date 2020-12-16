import axios, { AxiosInstance } from "axios";
import { Campaign } from "./interfaces/Campaign";
import { ListResponse } from "./interfaces/Meta";

class Kanka {
  private api: AxiosInstance;
  private campaignId: number = -1;
  private baseUrl: string;

  constructor(
    apiKey: string,
    baseUrl: string = "https://kanka.io/api/",
    apiVersion: string = "1.0"
  ) {
    this.api = axios.create({
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });
    this.baseUrl = `${baseUrl}${apiVersion}/`;
  }

  public selectCampaign(id: number): void {
    this.campaignId = id;
  }

  public async listCampaigns(
    prev?: ListResponse<Campaign>
  ): Promise<ListResponse<Campaign>> {
    return await this.listEntities("campaigns", prev);
  }

  public async getCampaign(): Promise<Campaign> {
    return (
      await this.api.get<Campaign>(
        `${this.baseUrl}campaigns/${this.campaignId}`
      )
    ).data;
  }

  private async listEntities<T>(
    entityType: string,
    prev?: ListResponse<T>
  ): Promise<ListResponse<T>> {
    return await this.getNext<T>(`${this.baseUrl}${entityType}`, prev);
  }

  private async getNext<T>(
    url: string,
    prev?: ListResponse<T>
  ): Promise<ListResponse<T>> {
    if (prev && prev.links.next !== null) {
      return (await this.api.get<ListResponse<T>>(prev.links.next)).data;
    }
    return (await this.api.get<ListResponse<T>>(url)).data;
  }
}

export default Kanka;
