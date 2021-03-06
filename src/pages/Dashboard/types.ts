import { PropsTransactionCard } from "../../components/TransactionCard/types";

export interface ListProps {
  id: string;
  type: "outcome" | "income";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Category {
  name: string;
  icon: string;
}

export interface HighLightProps {
  entries: EntriesExpensiveProps;
  expensive: EntriesExpensiveProps;
  totalAmount: EntriesExpensiveProps;
}

interface EntriesExpensiveProps {
  total: string;
}
