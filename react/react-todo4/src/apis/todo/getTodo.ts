import { api } from "../api";

interface getTodoProps {
  accessToken: string;
  keyword?: string;
}

export const getTodo = async ({ accessToken, keyword }: getTodoProps) => {
  const endPoint = keyword ? `/todos?search=${keyword}` : `todos`;

  try {
    const response = await api.get(endPoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
