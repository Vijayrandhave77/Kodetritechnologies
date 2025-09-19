import slug from "slug";

export async function slugGenerator(name, model) {
  let baseSlug = slug(name, "-");
  let newSlug = baseSlug;
  let counter = 1;

  while (await model.findOne({ slug: newSlug })) {
    newSlug = `${baseSlug}-${counter}`;
    counter++;
  }

  return newSlug;
}

// import slug from "slug";

// export async function slugGenerator(name, model) {
//   const genSlug = slug(name, "-");
//   const existSlug = await model.findOne({ slug: genSlug });
//   if (existSlug) {
//     const Random = Math.floor(Math.random() * 999999);

//     const updateSlug = slug(`${existSlug.slug}-${Random}`, "-");
//     if (updateSlug) {
//       const result = await slugGenerator(updateSlug, model);
//       return result;
//     }
//   } else {
//     return genSlug;
//   }
// }
