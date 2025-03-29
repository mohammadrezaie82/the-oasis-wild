import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-x-4 gap-y-16 text-lg items-center px-1 md:px-8 lg:px-16">
      <div className="md:col-span-3 ">
        <h1 className="text-3xl md:text-4xl mb-6 md:mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>
        <div className="space-y-6 md:space-y-8">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home.
          </p>
          <p>
            Our {cabins.length} luxury cabins provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding mountains.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor.
          </p>
        </div>
      </div>

      <div className="md:col-span-2 flex justify-center">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
          className="w-full max-w-sm md:max-w-full rounded-lg"
        />
      </div>

      <div className="relative aspect-square col-span-1 md:col-span-2 flex justify-center">
        <Image
          src={image2}
          alt="Family that manages The Wild Oasis"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="md:col-span-3">
        <h1 className="text-3xl md:text-4xl mb-6 md:mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>
        <div className="space-y-6 md:space-y-8">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with a personal touch.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-6 py-4 text-primary-800 text-lg font-semibold rounded-lg hover:bg-accent-600 transition-all text-center"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
