export interface IHaveError {
  error: string;
}

export type Success<T> = {
  key: "success";
  data: T;
};
export type Error = {
  key: "error";
  error: string;
};

export type ServerResponse<T> = Success<T> | Error;
export type AsyncActionResult<T> = Success<T> | Error;

export type PhotoObject = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type PhotoAPIResponse = Array<PhotoObject>;
