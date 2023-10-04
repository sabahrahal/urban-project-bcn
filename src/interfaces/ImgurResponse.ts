import type { Image } from "./image";

export interface ImgurResponse {
    data: Image[];
    success: boolean;
    status: number;
  }