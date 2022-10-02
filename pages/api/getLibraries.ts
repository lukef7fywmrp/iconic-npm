import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`*[_type == "library"] {
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
  libraries: Library[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const libraries: Library[] = await sanityClient.fetch(query);

  console.log("Libraries >>>", libraries);
  res.status(200).json({ libraries });
}
