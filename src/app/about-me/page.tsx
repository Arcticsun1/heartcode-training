
import Image from "next/image";
import photo from "@/assets/camphoto_684387517.jpg";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function AboutMe() {
  return (
    <main>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/Info">Info</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>About-me</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

        <div className = "px-5">
        <div className="text-3xl font-bold text-[#000000]">About me</div>
      <Image
        src = {photo}
        alt = "test image"
        width = {300}
        height = {300}
      />
      <div className= "flex gap-2"> <p className= "font-bold" >Name :</p> Dylan</div>
      <div className= "flex gap-2"> <p className= "font-bold" >Major :</p> CS (Y2)</div>
      <div className= "flex gap-2"> <p className= "font-bold" >Why Heartcode:</p> the lols</div>
        </div>


    </main>
  );
}
