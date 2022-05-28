import { AxiosError } from "axios";
import client from "../axiosClient";
import { ServerResponse, PhotoObject, PhotoAPIResponse } from "./types";

export const getPhotosData = async (): Promise<ServerResponse<Array<PhotoObject>>> => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await client.get<PhotoAPIResponse>(
      `/photos`,
      {
        headers,
      },
    );
    const responseData = response.data;
    return {
      key: "success",
      data: responseData,
    };
  } catch (error) {
    const typedError = error as AxiosError;
    return {
      key: "error",
      error: typedError.message,
    };
  }
};