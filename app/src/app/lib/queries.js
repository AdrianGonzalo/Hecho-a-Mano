export const postsQuery = `
*[_type == "post"] | order(_createdAt desc) {
_id,
title,
description,
category,
"image": image.asset->url
}
`