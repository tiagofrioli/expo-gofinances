export interface PropsTransactionCard {
  data: {
    type: "negative" | "positive";
    title: string;
    amount: string;
    category: Category;
    date: string;
  };
}

interface Category {
  name: string;
  icon: string;
}

export interface TransactionProps {
  type: "positive" | "negative";
}
