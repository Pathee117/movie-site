import { NextResponse } from "next/server";
import { getMovie } from "@/lib/tmdb";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const movie = await getMovie(params.id);
  return NextResponse.json(movie);
}