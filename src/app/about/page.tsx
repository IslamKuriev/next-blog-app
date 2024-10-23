import Link from "next/link";

export default function About() {
  return (
    <div>
      <Link href={"/"}>
        <button className="bg-gray p-2 rounded-lg outline outline-offset-3 m-10">
          Back
        </button>
      </Link>
      <h1 className="text-2xl font-bold mt-5 mb-3 text-center">Обо мне</h1>
      <p className="text-xl font-bold mt-5 mb-3 p-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga porro,
        quod accusantium quis dolores molestiae iure iste incidunt, harum
        sapiente architecto deserunt, tempora eveniet placeat cumque quibusdam
        commodi non ad.
      </p>
    </div>
  );
}
