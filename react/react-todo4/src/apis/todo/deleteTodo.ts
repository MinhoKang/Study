import { api } from "../api";

interface DeleteTodo {
  accessToken: string;
  id: number;
}

export const deleteTodo = async ({ accessToken, id }: DeleteTodo) => {
  if (!accessToken) return;
  try {
    const response = await api.delete(`/todo?id=${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
