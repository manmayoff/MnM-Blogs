import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                MnM Blogs
              </h1>

              <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
                Read, Share, Enjoy!
              </p>
            </div>

            <div className="flex items-center gap-4">
            <Link href="/signup">
                <div className="group inline-block rounded-full bg-indigo-900 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
                  <span className="block rounded-full bg-indigo-500 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                    Sign Up
                  </span>
                </div>
              </Link>              <Link href="/login">
                <div className="group inline-block rounded-full bg-indigo-900 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
                  <span className="block rounded-full bg-indigo-500 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                    Login
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 p-5">
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="h-56 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
            <time
              // datetime="2022-10-10"
              className="block text-xs text-gray-500 dark:text-gray-400"
            >
              10th Oct 2022
            </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                How to position your furniture for positivity
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
