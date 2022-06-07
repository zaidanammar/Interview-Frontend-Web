export interface IQuestion {
  id: number;
  category: number;
  title: string;
  description: string;
  footer: string;
  createdAt: string;
  tags?: string[];
}
