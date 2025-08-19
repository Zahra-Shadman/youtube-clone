import { Categories } from "@/components/category";
import { Navbar } from "@/components/nav";
import { ToggleMenu } from "@/components/toggleMenu";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-row-reverse">
        <div className="w-20 ">
          <ToggleMenu />
        </div>
        <div className="flex-1">
          <Categories />
        </div>
      </div>
    </div>
  );
}
