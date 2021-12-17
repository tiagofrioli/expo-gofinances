export interface PropsTransactionCard {
  data: {
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
