import { api } from "../api";

interface AddTodoProps {
  accessToken: string;
  todo: string;
}

export const addTodo = async ({ accessToken, todo }: AddTodoProps) => {
  if (!accessToken) return;
  try {
    const response = await api.post(
      `/todo`,
      {
        todo,
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
