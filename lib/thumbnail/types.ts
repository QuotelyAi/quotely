export type Template = "speed" | "conversion" | "comparison" | "feature" | "trust";

export interface TitleAnalysis {
  template: Template;
  headline: string;
  subtext: string;
  metric: string;
  metricLabel: string;
  imagePrompt: string;
  reasoning: string;
}

export interface ThumbnailConfig {
  template: Template;
  headline: string;
  subtext: string;
  metric: string;
  metricLabel: string;
}

export interface GenerateRequest {
  title: string;
  overrides?: Partial<ThumbnailConfig>;
}

export interface GenerateResponse {
  image: string; // base64 PNG
  config: ThumbnailConfig;
  reasoning: string;
  bgProvider: string;
}
