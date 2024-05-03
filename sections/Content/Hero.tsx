import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Section } from "deco/blocks/section.ts";

/**@title {{{title}}} */
export interface Image {
  src?: ImageWidget;
  title?: string;
}

export interface Props {
  header: Section
  supTitle?: string;
  title?: string;
  images?: Image[];
  mobileImage?: Image;
}

export default function Hero({
  header,
  supTitle = "through the lens of photographer lorem ipsum",
  title = "Capturing the essence of life, one moment at a time.",
  images = [
    {
      src: "https://fakeimg.pl/819x1196",
      title: "Album awesome",
    },
    {
      src: "https://fakeimg.pl/819x1196",
      title: "Album awesome",
    },
    {
      src: "https://fakeimg.pl/819x1196",
      title: "Album awesome",
    },
  ],
}: Props) {
  const Component = header?.Component
  return (
    <section class="w-full bg-custom-primary min-h-screen overflow-hidden flex justify-stretch items-stretch">
      <div class="fixed top-0 left-0 w-full z-30">
        {Component && (
          <Component {...header?.props} />
        )}
      </div>
      <div class="w-full grid grid-cols-3 grid-rows-1 overflow-hidden relative">
        {images.map(({ src, title }) => (
          <Image
            src={src || ""}
            alt={title || ""}
            width={819}
            height={1196}
            class="w-full object-cover max-h-full brightness-75"
            loading="eager"
            fetchPriority="high"
          />
        ))}
        <div class="absolute top-0 left-0 w-full h-full flex items-stretch">
          <div class="flex w-full items-center justify-center">
            <h1 class="text-pretty font-centuryGothic text-8xl max-w-5xl highlight-text text-center font-extrabold leading-normal uppercase">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
