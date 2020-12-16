// Shared fields for all entities and campaigns
export interface EntityBase {
  id: number;
  name: string;
  entry: string;
  image: string | null;
  image_full: string | null;
  image_thumb: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface Entity extends EntityBase {
  entry_parsed: string;
  is_private: boolean;
  entity_id: number;
  tags: any[];
  created_by: number;
  updated_by: number;
}
