import { api } from "../api";

interface EditTodo {
  accessToken: string;
  id: number;
  editedTodo: string;
}

export const editTodo = async ({ accessToken, id, editedTodo }: EditTodo) => {
  if (!accessToken) return;
  try {
    const response = await api.put(
      `/todo?id=${id}`,
      {
        editedTodo,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
