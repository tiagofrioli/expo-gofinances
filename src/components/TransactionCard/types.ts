export interface PropsTransactionCard {
  data: {
    type: "outcome" | "income";
    name: string;
    amount: string;
    category: string;
    date: string;
  };
}

interface Category {
  name: string;
  icon: string;
}

export interface TransactionProps {
  type: "outcome" | "income";
}
