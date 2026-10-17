export type ToolCategory = "image" | "video" | "audio" | "3d";

export type ToolFilter = {
  label: string;
  category?: ToolCategory;
};

export type Tool = {
  title: string;
  description: string;
  icon: string;
  category: ToolCategory;
};
