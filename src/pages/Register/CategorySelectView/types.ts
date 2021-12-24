export interface CategorySelectProps {
  category: CategoryProps;
  setCategory: (category: CategoryProps) => void;
  closeSelectCategory: () => void;
}

export interface CategoryProps {
  key: string;
  name: string;
}
