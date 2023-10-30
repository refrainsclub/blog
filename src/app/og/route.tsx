import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");
  const postDescription = searchParams.get("description");
  const geistBoldFontData = await fetch(
    new URL("../../../public/fonts/geist-bold.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());
  const geistRegularFontData = await fetch(
    new URL("../../../public/fonts/geist-regular.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "240 10% 3.9%",
          paddingLeft: 190,
          paddingRight: 190,
          color: "white",
          fontFamily: "Geist",
        }}
      >
        <h1
          style={{
            fontSize: 130,
            fontWeight: 700,
          }}
        >
          {postTitle}
        </h1>
        <p
          style={{
            fontSize: 65,
          }}
        >
          {postDescription}
        </p>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Geist",
          data: geistBoldFontData,
          style: "normal",
          weight: 700,
        },
        {
          name: "Geist",
          data: geistRegularFontData,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
