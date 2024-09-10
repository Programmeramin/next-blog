import Link from "next/link";
import "./globals.css";
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>


     <div className="menu shadow ">
       <ul className="flex gap-2 p-4 justify-center font-bold">
        <li className="">
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href="/team">Team</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
       </ul>
      
     </div>

        {children}
      </body>
    </html>
  );
}
