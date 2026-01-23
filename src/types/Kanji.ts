export interface ExampleWord {
  word: string;
  reading: string;
  meaning: string;
}

export interface KanjiData {
  char: string;
  level: string;
  onyomi: string;
  kunyomi: string;
  meaning: string;
  examples: ExampleWord[];
}
