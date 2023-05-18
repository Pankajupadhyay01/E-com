import Cards from "@/app/Component/Slugscomp/Cards";

async function func(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  await new Promise((resolve) => setTimeout(resolve,1000));
  const result = await res.json();
  return result;

}
const page = async ({ params: { id } }) => {
  const result = await func(id);
  return (
    <div>
      <Cards result={result} id={id}/>
    </div>
  );

}

export default page;
