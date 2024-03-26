import Link from "next/link"

export const Footer = () => (
  <footer className="flex flex-row p-4 gap-4 bg-slate-300 w-full items-center">
    <Link href="/" className="text-2xl font-semibold">
      Home
    </Link>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto dolor illo
      itaque sit et reprehenderit facere explicabo ducimus, repudiandae natus
      fuga dolorem quis eum molestiae excepturi enim aperiam maxime. Cumque!
    </p>
  </footer>
)

export default Footer
