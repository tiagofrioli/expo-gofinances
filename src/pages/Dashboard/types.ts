import { PropsTransactionCard } from "../../components/TransactionCard/types";

export interface ListProps {
  id: string;
  type: "negative" | "positive";
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Category {
  name: string;
  icon: string;
}
