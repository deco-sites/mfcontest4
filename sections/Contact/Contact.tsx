import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";

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
  rowImages?: ImageProp[];
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
}: Props) {
  const slideContent = (
    <div class="horizontol-scroller__inner">
      {[...rowImages, ...rowImages]?.map((rowImage) => {
        return (
          <Image
            src={rowImage.src || ""}
            alt={rowImage.altText || ""}
            width={130}
            height={80}
            class="w-[130px] object-cover"
            loading="lazy"
          />
        );
      })}
    </div>
  );

  return (
    <section class="container p-3 sm:px-5 xl:p-0 overflow-hidden bg-custom-primary">
      <article class="flex flex-col gap-8">
        <div
          class="horizontol-scroller h-36 -mt-24"
          data-direction="right"
          data-speed="slow"
        >
          {slideContent}
        </div>
        <div class="flex flex-col gap-3">
          <h2 class="font-centuryGothic text-3xl font-semibold text-custom-primary-inverted">
            {title}
          </h2>
          <p class="font-centuryGothic text-xs text-custom-primary-inverted">
            {subtitle}
          </p>
        </div>
        <div class="flex flex-col gap-6 ">
          <form class="form-control gap-3">
            <input
              placeholder="What's your name"
              class="input-sm text-custom-primary-inverted font-centuryGothic bg-transparent border-b border-b-custom-primary-inverted"
            />
            <input
              placeholder="Your awesome email"
              class="input-sm text-custom-primary-inverted font-centuryGothic bg-transparent border-b border-b-custom-primary-inverted"
            />
            <textarea
              placeholder="Tell me about your photo ideas"
              class="textarea-sm text-custom-primary-inverted font-centuryGothic border-b bg-transparent border-b-custom-primary-inverted"
            />

            <button class="flex items-center gap-1 text-custom-primary-inverted font-centuryGothic bg-transparent self-end justify-end text-xs mt-3">
              Send
              <Icon
                id="Send"
                size={16}
              />
            </button>
          </form>
          <div class="flex gap-3 w-full justify-start">
            {socialLinks.map(({ text }) => (
              <a class="text-xs text-custom-primary-inverted" target="__blank">
                {text}
              </a>
            ))}
          </div>
        </div>
        <div
          class="horizontol-scroller h-36 -mb-24"
          data-direction="left"
          data-speed="slow"
        >
          {slideContent}
        </div>
      </article>
    </section>
  );
}
