/**@title {{{name}}} */
export interface Categorie {
  name: string;
  value: string;
}

export interface Props {
  title?: string;
  description?: string;
  categories?: Categorie[];
  /**
   * @format dynamic-options
   * @options {{{categories}}}
   */
  teste?: Categorie;
}

export default function LatestWorks({
  title = "Latest Works",
  description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id lobortis nulla. Curabitur sit amet odio pharetra, porta elit a, fermentum arcu. Nulla interdum quam et consectetur convallis.",
  categories = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Nature",
      value: "nature",
    },
    {
      name: "Street",
      value: "street",
    },
    {
      name: "Lifestyle",
      value: "lifestyle",
    },
    {
      name: "Landscape",
      value: "landscape",
    },
  ],
  teste
}: Props) {
  console.log("🔥 categories", categories);
  console.log("🔥 teste", teste);
  return (
    <section class="container">
      <article class="w-full flex flex-col gap-5">
        <div class="flex align-baseline justify-between">
          <div class="flex flex-col gap-1">
            <h2 class="font-centuryGothic text-3xl">
              {title}
            </h2>
            <p class="font-centuryGothic text-lg">
              {description}
            </p>
          </div>
          <div class="flex gap-5">
            {categories.map(({ name }) => (
              <span class="text-xl">
                {name}
              </span>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
