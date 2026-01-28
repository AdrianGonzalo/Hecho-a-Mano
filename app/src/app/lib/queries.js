export const postsQuery = `
*[_type == "post" && defined(image.asset)] | order(_createdAt desc) {
_id,
title,
description,
category,
"image": image.asset->url
}
`