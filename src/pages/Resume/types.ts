export interface TransactionsProps {
  type: "income" | "outcome";
  name: string;
  amount: string;
  category: string;
  data: string;
}

export interface CategoryProps {
  name: string;
  total: string;
  totalRaw: number;
  color: string;
}
