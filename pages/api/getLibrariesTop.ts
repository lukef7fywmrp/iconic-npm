import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`*[_type == "library" && title == "React.js" || title == "Next.js" || title == "Tailwind CSS"] {
_id,
slug,
title,
description,
logo,
creator -> {
    name,
    slug,
    image
},
documentation
} `;

type Data = {
  librariesTop: Library[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const librariesTop: Library[] = await sanityClient.fetch(query);

  console.log("Libraries Top >>>", librariesTop);
  res.status(200).json({ librariesTop });
}
