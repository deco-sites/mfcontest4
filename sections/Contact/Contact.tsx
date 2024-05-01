import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface ImageProp {
  src?: ImageWidget;
  /** @description text alternative */
  altText?: string;
}

export interface Props {
  title?: string;
  rowImages?: ImageProp[];
}

const IMG_PLACEHODLER = Array(5).fill(0).map(() => ({
  // src:
  //   "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/03fbcc78-ca86-4616-a59a-b8aa18331a9c",
  src: "https://source.unsplash.com/random/1",
  altText: "Logo",
}));

export default function Contact({
  title = "Contact Form",
  rowImages = IMG_PLACEHODLER,
}: Props) {
  const slideContent = (
    <div class="flex items-center gap-20">
      {rowImages?.map((rowImage) => {
        return (
          <Image
            src={rowImage.src || ""}
            alt={rowImage.altText || ""}
            width={110}
            height={25}
          />
        );
      })}
    </div>
  );

  return (
    <section class="container p-3 sm:px-5 xl:p-0 overflow-hidden">
      <article class="flex flex-col gap-8">
        <div class="relative w-full overflow-hidden h-11">
          <div class="animate-sliding absolute top-0 left-0 flex flex-nowrap h-11">
            {slideContent}
          </div>
        </div>
        <div class="flex flex-col">
          <h2 class="font-centuryGothic text-4xl font-semibold">
            {title}
          </h2>
        </div>
      </article>
    </section>
  );
}
