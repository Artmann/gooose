import IColumn from './column';

export default interface IBoard {
  id: number;
  columns: IColumn[];
  name: string;
}
