import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

/**@title {{{name}}} */
export interface Categorie {
  name: string;
  value: string;
}

export interface Props {
  title?: string;
  description?: string;
  categoryOptions?: string[]; // Base para o dynamic-options
  images?: {
    desktop?: ImageWidget;
    mobile?: ImageWidget;
    title?: string;
    /**
    * @format dynamic-options
    //  * @options {{{categoryOptions}}}
    * {{#beautifySchemaTitle}}{{{categoryOptions}}}{{/beautifySchemaTitle}}
    */
    category?: string; // Seria usado aqui, em uma interface separada para as images
    type?: "landscape" | "portrait";
  }[];
}

export default function LatestWorks({
  title = "Latest Works",
  description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id lobortis nulla.",
  // categories = [
  //   {
  //     name: "All",
  //     value: "all",
  //   },
  //   {
  //     name: "Nature",
  //     value: "nature",
  //   },
  //   {
  //     name: "Street",
  //     value: "street",
  //   },
  //   {
  //     name: "Lifestyle",
  //     value: "lifestyle",
  //   },
  //   {
  //     name: "Landscape",
  //     value: "landscape",
  //   },
  // ],
  categoryOptions = [
    "All",
    "Fashion",
    "Landscape",
    "Lifestyle",
    "Portrait",
  ],
  images = [
    {
      desktop: "https://fakeimg.pl/400x260",
      mobile: "https://fakeimg.pl/400x260",
      title: "Placeholder image",
      category: "All",
      type: "landscape",
    },
    {
      desktop: "https://fakeimg.pl/360x479?font=bebas",
      mobile: "https://fakeimg.pl/360x479?font=bebas",
      title: "Placeholder image",
      category: "All",
    },
    {
      desktop: "https://fakeimg.pl/400x260",
      mobile: "https://fakeimg.pl/400x260",
      title: "Placeholder image",
      category: "All",
      type: "landscape",
    },
    {
      desktop: "https://fakeimg.pl/400x260",
      mobile: "https://fakeimg.pl/400x260",
      title: "Placeholder image",
      category: "All",
      type: "landscape",
    },
    {
      desktop: "https://fakeimg.pl/360x479?font=bebas",
      mobile: "https://fakeimg.pl/360x479?font=bebas",
      title: "Placeholder image",
      category: "All",
    },
    {
      desktop: "https://fakeimg.pl/400x260",
      mobile: "https://fakeimg.pl/400x260",
      title: "Placeholder image",
      category: "All",
      type: "landscape",
    },
    {
      desktop: "https://fakeimg.pl/360x479?font=bebas",
      mobile: "https://fakeimg.pl/360x479?font=bebas",
      title: "Placeholder image",
      category: "All",
    },
    {
      desktop: "https://fakeimg.pl/400x260",
      mobile: "https://fakeimg.pl/400x260",
      title: "Placeholder image",
      category: "All",
      type: "landscape",
    },
    {
      desktop: "https://fakeimg.pl/400x260",
      mobile: "https://fakeimg.pl/400x260",
      title: "Placeholder image",
      category: "All",
      type: "landscape",
    },
    {
      desktop: "https://fakeimg.pl/360x479?font=bebas",
      mobile: "https://fakeimg.pl/360x479?font=bebas",
      title: "Placeholder image",
      category: "All",
    },
    {
      desktop: "https://fakeimg.pl/400x260",
      mobile: "https://fakeimg.pl/400x260",
      title: "Placeholder image",
      category: "All",
      type: "landscape",
    },
  ],
}: Props) {
  console.log("🔥 categories", categoryOptions);

  return (
    <section class="container p-3 sm:px-5 xl:p-0">
      <article class="w-full flex flex-col gap-7">
        <div class="flex flex-col gap-5 lg:flex-row items-stretch justify-between">
          <div class="flex flex-col gap-1 flex-1">
            <h2 class="font-centuryGothic text-3xl font-semibold">
              {title}
            </h2>
            <p class="font-centuryGothic text-lg text-pretty">
              {description}
            </p>
          </div>
          <div class="flex gap-x-5 gap-y-2 lg:gap-5 justify-start lg:justify-end items-end flex-1 flex-wrap">
            {categoryOptions.map((category) => (
              <span class="text-xl font-centuryGothic">
                {category}
              </span>
            ))}
          </div>
        </div>
        <div class="columns-2 md:columns-3">
          {images.map(({ desktop, mobile, title, type }) => {
            const imageSizeDesktop = {
              landscape: {
                width: 416,
                height: 270,
              },
              portrait: {
                width: 416,
                height: 553,
              },
            };
            const imageSizeMobile = {
              landscape: {
                width: 179,
                height: 121,
              },
              portrait: {
                width: 179,
                height: 248,
              },
            };

            const currentImageSizeDesktop =
              imageSizeDesktop[type ?? "portrait"];
            const currentImageSizeMobile = imageSizeMobile[type ?? "portrait"];

            return (
              <div class="rounded-lg mb-4 overflow-hidden">
                <figure class="relative">
                  <Picture>
                    <Source
                      media="(max-width: 327px)"
                      src={mobile || ""}
                      width={currentImageSizeMobile.width}
                      height={currentImageSizeMobile.height}
                    />
                    <Source
                      media="(min-width: 688px)"
                      src={desktop ? desktop : mobile || ""}
                      width={currentImageSizeDesktop.width}
                      height={currentImageSizeDesktop.height}
                    />
                    <img
                      class="w-full object-cover"
                      sizes="(max-width: 640px) 100vw, 30vw"
                      src={mobile}
                      alt={title ?? "Image"}
                      decoding="async"
                      loading="lazy"
                    />
                  </Picture>
                </figure>
                {/* <img src={desktop} class="w-full object-cover" /> */}
              </div>
            );
          })}
        </div>
        {
          /* <div class="columns-2 md:columns-3">
          <img class="mb-4" src="https://source.unsplash.com/random/1" />
          <img class="mb-4" src="https://source.unsplash.com/random/2" />
          <img class="mb-4" src="https://source.unsplash.com/random/3" />
          <img class="mb-4" src="https://source.unsplash.com/random/4" />
          <img class="mb-4" src="https://source.unsplash.com/random/5" />
          <img class="mb-4" src="https://source.unsplash.com/random/6" />
          <img class="mb-4" src="https://source.unsplash.com/random/7" />
          <img class="mb-4" src="https://source.unsplash.com/random/8" />
          <img class="mb-4" src="https://source.unsplash.com/random/9" />
          <img class="mb-4" src="https://source.unsplash.com/random/10" />
          <img class="mb-4" src="https://source.unsplash.com/random/11" />
        </div> */
        }
      </article>
    </section>
  );
}
