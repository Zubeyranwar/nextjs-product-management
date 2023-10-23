const { default: EditForm } = require("../../../components/EditForm");

const getProductById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditProduct = async ({ params }) => {
  const { id } = params;
  const { product } = await getProductById(id);
  const { productName,description, price, quantity } = product;
  return (
    <>
      <EditForm id={id} productName={productName} description={description} price={price} quantity={quantity} />
    </>
  );
};

export default EditProduct;
