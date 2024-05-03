import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**@title {{{title}}} */
export interface Image {
  src?: ImageWidget;
  title?: string;
}

export interface Props {
  supTitle?: string;
  title?: string;
  images?: Image[];
  mobileImage?: Image;
}

export default function Hero({
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
  return (
    <section class="w-full bg-custom-primary min-h-screen min-h-dvh">
      <div class="w-full h-full flex justify-stretch items-stretch">
        {images.map(({ src, title }) => (
          <Image
            src={src || ""}
            alt={title || ""}
            width={819}
            height={1196}
            class="w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        ))}
      </div>
    </section>
  );
}
