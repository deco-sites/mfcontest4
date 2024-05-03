import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";
import type { SectionProps } from "deco/types.ts";
import { deviceOf } from "deco/utils/userAgent.ts";
export interface ImageProp {
  src?: ImageWidget;
  /** @description text alternative */
  altText?: string;
}

/**@title {{{text}}} */
export interface SocialLink {
  text?: string;
  url?: string;
}

export interface Props {
  title?: string;
  subtitle?: string;
  /**@title Imagens em linha (mobile) */
  rowImages?: ImageProp[];
  /**@title Imagens em coluna (desktop)*/
  colImages?: {
    firsCol?: ImageProp[];
    secondCol?: ImageProp[];
  };
  socialLinks?: SocialLink[];
}

const IMG_PLACEHODLER = Array(8).fill(0).map((_, index) => ({
  // src:
  //   "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/03fbcc78-ca86-4616-a59a-b8aa18331a9c",
  src: `https://source.unsplash.com/random/${index}`,
  altText: "Logo",
}));

export default function Contact({
  title = "Contact me",
  subtitle = "Enter your information to send a message",
  rowImages = IMG_PLACEHODLER,
  socialLinks = [
    {
      text: "behance",
      url: "#",
    },
    {
      text: "dribble",
      url: "#",
    },
    {
      text: "instagram",
      url: "#",
    },
    {
      text: "twitter / x",
      url: "#",
    },
  ],
  isMobile,
  colImages = {
    firsCol: [
      {
        src:
          `https://images.unsplash.com/photo-1709495354982-9f630e166088?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        altText: "Image",
      },
      {
        src:
          `https://images.unsplash.com/photo-1686067578689-f104fde1a768?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        altText: "Image",
      },
      {
        src:
          `https://images.unsplash.com/photo-1714225455567-3b999e6ad124?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        altText: "Image",
      },
      {
        src:
          `https://images.unsplash.com/photo-1570302976654-1df0a7b3e52c?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        altText: "Image",
      },
    ],
    secondCol: [
      {
        src:
          `https://images.unsplash.com/photo-1702550484181-8321ef193e77?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        altText: "Image",
      },
      {
        src:
          `https://images.unsplash.com/photo-1714224554929-e6930b00781f?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        altText: "Image",
      },
      {
        src:
          `https://images.unsplash.com/photo-1714062923368-38c68aebaafc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        altText: "Image",
      },
      {
        src:
          `https://images.unsplash.com/photo-1714182356074-99c7c843e197?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        altText: "Image",
      },
    ],
  },
}: SectionProps<ReturnType<typeof loader>>) {
  const slideContent = (
    <div class="horizontol-scroller__inner">
      {[...rowImages, ...rowImages]?.map((rowImage) => {
        return (
          <Image
            src={rowImage.src || ""}
            alt={rowImage.altText || ""}
            width={130}
            height={80}
            class="w-[130px] object-cover h-36"
            loading="lazy"
          />
        );
      })}
    </div>
  );

  const slideContentDesktop = (images: ImageProp[] | undefined) => {
    if (!images) return null;

    return (
      <div class="vertical-scroller__inner">
        {[...images, ...images]?.map((image) => {
          return (
            <Image
              src={image.src || ""}
              alt={image.altText || ""}
              width={360}
              height={479}
              class="w-full max-w-full"
              loading="lazy"
            />
          );
        })}
      </div>
    );
  };

  return (
    <section class=" bg-custom-primary w-full">
      <div class="container p-3 sm:px-5 xl:p-0 overflow-hidden lg:!max-w-full">
        <article class="flex flex-col lg:flex-row gap-8">
          {isMobile && (
            <div
              class="horizontol-scroller h-36 -mt-24 lg:hidden"
              data-direction="right"
              data-speed="slow"
            >
              {slideContent}
            </div>
          )}
          <div class="flex flex-col gap-8 lg:flex-1 lg:justify-center lg:pl-9">
            <div class="flex flex-col gap-3">
              <h2 class="font-centuryGothic text-2xl font-semibold text-custom-primary-inverted lg:text-6xl">
                {title}
              </h2>
              <p class="font-centuryGothic text-xs text-custom-primary-inverted lg:text-xl">
                {subtitle}
              </p>
            </div>
            <div class="flex flex-col gap-6 ">
              <form class="form-control gap-3">
                <input
                  placeholder="What's your name"
                  class="input-sm text-custom-primary-inverted font-centuryGothic bg-transparent border-b border-b-custom-primary-inverted lg:text-base"
                />
                <input
                  placeholder="Your awesome email"
                  class="input-sm text-custom-primary-inverted font-centuryGothic bg-transparent border-b border-b-custom-primary-inverted lg:text-base"
                />
                <textarea
                  placeholder="Tell me about your photo ideas"
                  class="textarea-sm text-custom-primary-inverted font-centuryGothic border-b bg-transparent border-b-custom-primary-inverted lg:text-base"
                />

                <button class="flex items-center gap-1 text-custom-primary-inverted font-centuryGothic bg-transparent self-end justify-end text-xs mt-3 lg:text-base">
                  Send
                  <Icon
                    id="Send"
                    size={16}
                    class="w-7 h-7"
                  />
                </button>
              </form>
              <div class="flex gap-3 w-full justify-start">
                {socialLinks.map(({ text, url }) => (
                  <a
                    class="text-xs text-custom-primary-inverted lg:text-base font-centuryGothic"
                    target="__blank"
                    href={url}
                  >
                    {text}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {!isMobile && (
            <div class="flex-1 flex items-stretch overflow-hidden gap-6 relative flex-nowrap lg:min-h-[600px] lg:max-h-[600px]">
              <div class="vertical-scroller flex-1">
                {slideContentDesktop(colImages?.firsCol)}
              </div>
              <div class="vertical-scroller flex-1" data-direction="down">
                {slideContentDesktop(colImages?.secondCol)}
              </div>
              <div class="w-12 overflow-hidden">
                <div class="vertical-scroller w-[280px]">
                  {slideContentDesktop(colImages?.firsCol)}
                </div>
              </div>
            </div>
          )}
          {isMobile && (
            <div
              class="horizontol-scroller h-36 -mb-24 lg:hidden"
              data-direction="left"
              data-speed="slow"
            >
              {slideContent}
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

export const loader = (props: Props, req: Request) => {
  const isMobile = deviceOf(req) === "mobile";

  return {
    ...props,
    isMobile,
  };
};
