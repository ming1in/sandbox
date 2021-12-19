import sharp, { Sharp } from "sharp";

export default async function main() {
  const images = [
    "./images/bailey-burton-O1EY30IbYzQ-unsplash.jpeg",
    "./images/dave-hoefler-PAbUr-Hw9YM-unsplash.jpeg",
    "./images/espolon-tequila-n7jhQekauy8-unsplash.jpeg",
    "./images/giuseppe-famiani-eHuZCoFGIpY-unsplash.jpeg",
    "./images/sehoon-ye-uUDVky2mfoQ-unsplash.jpeg",
  ];

  const sharpImages: Sharp[] = await Promise.all([
    await sharp(images[0]),
    await sharp(images[1]),
    await sharp(images[2]),
    await sharp(images[3]),
    await sharp(images[4]),
  ]);

  sharpImages.forEach(async (image, idx) => {
    const metadata = await image.metadata();

    await image
      .toFormat("jpeg", { mozjpeg: true })
      .jpeg({ quality: 60 })
      .toFile(`${images[idx]}-compressed.jpeg`);

    console.log(images[idx], metadata);
  });
}

main();
