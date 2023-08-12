import Link from "next/link";
import Image from "next/image";

import { CustomButton } from ".";

const Navbar = () => {
	return (
		<header className="w-full absolute z-10 ">
			<nav className="flex justify-between mx-auto max-w-[1440px] sm:px-16 px-6 py-4">
				<Link href={"/"} className="flex justify-center items-center">
					<Image
						src="/logo.svg"
						alt="Logo"
						width={118}
						height={18}
						className="object-contain"
					/>
				</Link>
				<CustomButton
					title="Sign In"
					containerStyles="text-primery-blue rounded-full bg-white min-w-[130px]"
				/>
			</nav>
		</header>
	);
};

export default Navbar;
