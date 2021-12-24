export interface CategorySelectProps {
  category: string;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

interface Category {
  key: string;
  name: string;
}
