import { books } from "../db";

export async function Get() {
  console.log(books);
  return Response.json(books);
}

export async function Post(request: Request) {
  const book = await request.json();
  books.push(book);
  return Response.json(books);
}
