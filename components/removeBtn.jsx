"use client"
import { useRouter } from "next/navigation";

const RemoveBtn = ({id}) => {
    const router = useRouter();
    const removeProduct = async () => {
      const confirmed = confirm("Are you sure?");
  
      if (confirmed) {
        const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
          method: "DELETE",
        });
  
        if (res.ok) {
          router.refresh();
        }
      }
    };
  return (
    <>
      <button className="py-3 px-4 ml-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" onClick={removeProduct}>Delete</button>
    </>
  );
};

export default RemoveBtn;
