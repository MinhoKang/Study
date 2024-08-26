"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function createReviewAction(state: any, formData: FormData) {
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();
  const bookId = formData.get("bookId")?.toString();

  if (!content || !author || !bookId)
    return {
      status: false,
      error: "리뷰 내용과 작성자를 입력해주세요.",
    };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
      }
    );

    if (!response.ok) throw new Error(response.statusText);

    revalidateTag(`review-${bookId}`);

    return {
      status: true,
      err: "",
    };
    // revalidatePath(`/book/${bookId}`);
  } catch (err) {
    return {
      statue: false,
      error: `리뷰 저장에 실패했습니다. : ${err}`,
    };
  }
}
