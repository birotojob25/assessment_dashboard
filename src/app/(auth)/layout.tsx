import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex w-full items-center justify-center min-h-screen container '>
      <div className='w-[50%] flex items-center justify-center'>
        <Image src={"/images/loginBg.jpg"} alt='' width={400} height={400} />
      </div>
      <div className='w-[50%] flex items-center justify-center'>{children}</div>
    </div>
  );
}
