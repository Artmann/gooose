export default interface ICard {
  id: number;
  blocked: boolean;
  color: string;
  key: string;
  order: number;
  text: string;

  boardId: number;
  columnId: number;
}
