type ImageUploadedCallback = (url: string) => void;
type ImageUploadErrorCallback = (error: Error) => void;

export default class ImageUploader {
  private readonly boardId: string;
  private readonly uploadFunction: Function;

  constructor(boardId: string, uploadFunction: Function) {
    this.boardId = boardId;
    this.uploadFunction = uploadFunction;
  }

  upload(file: File, successCallback: ImageUploadedCallback, errorCallback: ImageUploadErrorCallback): void {
    this.uploadFunction({
      variables: {
        boardId: this.boardId,
        image: file
      }
    }).then((response: any) => {
      const { url } = response.data.uploadImage;

      successCallback(url);
    }).catch((error: Error) => {
      console.error(error);
      errorCallback(error);
    });
  }
}
