export type BubbleAlign = "left" | "right";

export interface AisatsuItem {
  kana: string;
  romaji: string;
  meaning: string;
  align: BubbleAlign;
  situation?: string;
}
