import ProductList from "../components/ProductList";


export default function Home() {
  return (
    <main className="flex flex-wrap mt-3 sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
      <ProductList/>
    </main>
  )
}
