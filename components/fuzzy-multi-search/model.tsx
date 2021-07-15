export interface FuzzyOption {
  name: string;
  company: string;
  species: string;
}

export interface FuzzyOptions {
  options: Array<FuzzyOption>;
}

export declare type props = {
  options: Array<FuzzyOption>;
  keys: Array<string>;
  fuseThreshold: number;
  minChars: number;
};
