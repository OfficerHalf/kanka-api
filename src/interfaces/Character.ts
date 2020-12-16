import { Entity } from "./Entity";

export interface Character extends Entity {
  has_custom_image: boolean;
  title: string | null;
  age: string | null;
  sex: string | null;
  race_id: number | null;
  type: string | null;
  family_id: number | null;
  is_dead: boolean;
  traits: Trait[];
}

export interface Trait {
  id: number;
  name: string;
  entry: string;
  section: "personality" | "appearance";
  is_private: boolean;
  default_order: number;
}
