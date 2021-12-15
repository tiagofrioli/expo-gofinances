export interface PropsCard{
 title: string;
 amount: string;
 lastTransaction: string;
 type: 'income' | 'outcome' | 'total';
}

export interface PropsType{
 type: 'income' | 'outcome' | 'total';
}