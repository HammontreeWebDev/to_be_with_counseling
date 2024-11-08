import { useState } from "react";
import Image from "next/image";

export default function Resources({ productList, title }) {
  const products = productList
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div className="flex flex-col justify-center items-center bg-[var(--trans-teal)] rounded-2xl">
          <h2 className="mx-auto max-w-2xl lg:max-w-7xl big-body-text text-[var(--forest-green)]">
            {title}
          </h2>

          {
            isOpen ?
              <button className="flex items-center body-text text-[var(--forest-green)] mb-3 px-1 py-1 rounded hover:animate-pulse" onClick={handleOpen}>
                Close
                <Image
                  src='/img/Close.svg'
                  height={35}
                  width={35}
                  alt="down arrow"
                />
              </button>
              :
              <button className="flex items-center body-text text-[var(--forest-green)] mb-3 px-1 py-1 rounded hover:animate-pulse" onClick={handleOpen}>
                View
                <Image
                  src='/img/expand.svg'
                  height={35}
                  width={35}
                  alt="down arrow"
                />
              </button>
          }

        </div>
        {
          isOpen ?
            <div className="bg-white rounded-2xl px-6 py-6 mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id}>
                  <div className="relative">
                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="relative mt-4">
                      <h3 className="body-text text-[var(--forest-green)]">{product.name}</h3>
                      <p className="mt-1 copyright text-[var(--medium-brown)]">{product.author}</p>
                    </div>
                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                      />
                      <p className="relative text-lg font-semibold text-white">{product.price}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href={product.href}
                      className="relative customButton flex items-center justify-center rounded-md border border-transparent body-text"
                    >
                      View On Amazon<span className="sr-only">, {product.name}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            :
            null
        }
      </div>
    </div>
  )
}
