import Cards from "@/app/Component/Slugscomp/Cards";

async function func(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const result = await res.json();
  return result;

}
const page = async ({ params: { id } }) => {
  const result = await func(id);
  return (
    <div>
      <Cards main_img={result.thumbnail} brand={result.brand} price={result.price} rating={result.rating} stock={result.stock} desc={result.description} title={result.title} />
    </div>
  );

}

export default page;
