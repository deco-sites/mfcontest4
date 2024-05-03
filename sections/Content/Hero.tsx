import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Section } from "deco/blocks/section.ts";
import { scriptAsDataURI } from "apps/utils/dataURI.ts";

/**@title {{{title}}} */
export interface Image {
  src?: ImageWidget;
  title?: string;
}

export interface Props {
  sectionId?: string;
  header: Section;
  supTitle?: string;
  title?: string;
  images?: Image[];
  mobileImage?: Image;
}

const script = () => {
  // Define a largura do corte invisível como um terço da largura total da janela
  const clipWidth = 100 / 3;
  const maxLimit = 66.666;

  // Função para calcular as proporções de corte do inset
  const calculateClip = (percentage: number) => {
    let left = Math.max(0, percentage - clipWidth / 2);
    const right = Math.min(100, percentage + clipWidth / 2);

    if (left >= maxLimit) left = maxLimit;
    let currentRightCrop = 100 - right;
    if (currentRightCrop >= maxLimit) currentRightCrop = maxLimit;

    return { left, currentRightCrop };
  };

  function initTrack() {
    // Seleciona o elemento
    const $targetElement = document.querySelector<HTMLElement>(
      ".stack-clip-image-text",
    );
    if (!$targetElement) return;

    // Adiciona o evento de movimento do mouse ao documento
    document.addEventListener("mousemove", (e) => {
      // Calcula a porcentagem da posição do mouse em relação à largura total da janela
      const percentage = e.clientX / innerWidth * 100;

      // Calcula as proporções de corte do inset
      const { left, currentRightCrop } = calculateClip(percentage);

      // Atualiza as propriedades CSS
      $targetElement.style.setProperty("--clip-l", `${currentRightCrop}%`);
      $targetElement.style.setProperty("--clip-r", `${left}%`);
    });
  }

  const $triggerTrack = document.querySelector("[data-trigger-mouseMove]");

  $triggerTrack?.addEventListener("click", () => {
    initTrack();
    $triggerTrack.remove();
  });
};

export default function Hero({
  sectionId = "home",
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
  const Component = header?.Component;
  return (
    <section
      id={sectionId}
      class="w-full bg-custom-primary min-h-screen overflow-hidden flex justify-stretch items-stretch relative"
    >
      <div class="absolute top-0 left-0 w-full z-50">
        {Component && <Component {...header?.props} />}
      </div>
      <div class="absolute top-[85px] left-0 w-full z-50 flex items-center justify-center">
        <h2 class="text-pretty font-centuryGothic text-base max-w-5xl text-center font-extrabold leading-normal uppercase z-50 tracking-[10px] text-custom-secondary">
          {supTitle}
        </h2>
      </div>
      <div class="relative flex justify-stretch items-stretch">
        <div
          class="w-full grid grid-cols-3 grid-rows-1 overflow-hidden relative opacity-0"
          style={{ "clip-path": "inset(0 33.333% 0 33.333%)" }}
        >
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
        </div>
        <div
          class="absolute top-0 left-0 w-full h-full flex items-stretch z-30 stack-clip-image-text"
          style={{ "clip-path": "inset(0 var(--clip-l) 0 var(--clip-r))" }}
        >
          <div class="flex w-full items-center justify-center relative">
            <h1 class="text-pretty font-centuryGothic text-8xl max-w-5xl highlight-text text-center font-extrabold leading-normal uppercase z-10">
              {title}
            </h1>
            <div class="w-full grid grid-cols-3 grid-rows-1 overflow-hidden h-full absolute top-0 left-0">
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
            </div>
          </div>
        </div>
        <div class="absolute top-0 left-0 w-full h-full flex items-stretch z-20">
          <div class="flex w-full items-center justify-center">
            <h1 class="text-pretty font-centuryGothic text-8xl max-w-5xl text-center font-extrabold leading-normal uppercase text-custom-secondary">
              {title}
            </h1>
          </div>
        </div>
      </div>
      <div
        class="absolute w-8 h-8 z-50 rounded-full bottom-24 right-16 group hover:scale-[3.5] transition-all duration-500 ease-linear cursor-pointer"
        data-trigger-mouseMove
      >
        <div class="w-8 h-8 flex items-center justify-center">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-custom-secondary opacity-75 group-hover:animation-duration-2000">
          </span>
          <span class="relative flex items-center justify-center rounded-full h-7 w-7 bg-custom-secondary">
            <span class="text-[6px] scale-0 group-hover:scale-100 transition-all duration-500 ease-linear font-centuryGothic font-semibold text-center">
              click <br /> me
            </span>
          </span>
        </div>
      </div>
      <script defer src={scriptAsDataURI(script)} />
    </section>
  );
}
