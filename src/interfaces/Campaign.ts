import { EntityBase } from "./Entity";
import { User } from "./User";

export interface Campaign extends EntityBase {
  locale: string | null;
  visibility: "public" | "private";
  members: CampaignMember[];
}

export interface CampaignMember {
  id: number;
  user: User;
}
