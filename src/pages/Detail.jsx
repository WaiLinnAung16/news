import React from "react";
import { useParams } from "react-router-dom";
import bgImg from "../assets/inthepit.jpg";
import img1 from "../assets/OPAQUE.png";
import { MdOutlineSportsSoccer } from "react-icons/md";
import logo from "../assets/OPAQUE.png";
const Detail = () => {
  const { id } = useParams();
  return (
    <div className="">
      <img
        src={bgImg}
        alt="Big img"
        className=" object-cover h-[500px] w-full"
      />
      <div className="max-w-[1300px] mx-auto bg-slate-100/70 backdrop-blur-md rounded-md p-5 -mt-28 flex flex-col gap-3  justify-center items-center text-center">
        <div className="flex gap-2 items-center bg-white px-5 py-1 rounded-md shadow-md">
          <MdOutlineSportsSoccer />
          <h1>Sport</h1>
        </div>
        <h1 className="w-[80%] text-2xl font-bold">Blog Title</h1>
        <div className="flex items-center gap-2">
          <p>Author Name /</p>
          <p>Sep 11 2023 /</p>
          <p>2m read time</p>
        </div>
        <p className="text-start indent-5">
          <span className="text-5xl font-bold">L</span>orem ipsum dolor sit amet
          consectetur adipisicing elit. A aliquam, odit aut nihil soluta
          mollitia vel quidem, blanditiis iusto cum sunt, maxime quisquam ipsa
          est praesentium beatae error quos alias laborum? Facere nostrum,
          magnam repellendus cupiditate consequatur expedita voluptate veniam
          mollitia hic nisi sit ratione rerum rem atque eius cum dolores
          voluptatibus nobis saepe similique ex culpa. Tempore harum tenetur
          repellat qui dignissimos! Illo sint odio at voluptates ab! Possimus
          eos a accusantium vitae architecto iure quis quam tenetur reiciendis
          atque maiores ex blanditiis sit quibusdam asperiores mollitia, odit
          molestias sequi eius. Saepe hic quasi cumque facere voluptas officia
          modi dolor et iste amet, praesentium eligendi voluptatibus cupiditate
          quos deserunt quae iusto magnam labore dolores accusantium dolorum
          aspernatur animi. Ab sapiente fugit aut ad consequuntur deleniti
          deserunt non necessitatibus odio tempora? Nostrum ex laborum dolorem
          aspernatur, odit unde explicabo officiis porro, quisquam dolore facere
          neque cumque repudiandae non obcaecati aut sequi ea quas ad harum
          perspiciatis eum? Ratione nisi ipsam aut adipisci iusto quo omnis,
          nostrum consequatur, quasi deleniti doloremque amet tenetur
          perferendis nam hic facere modi nihil, facilis odit repellendus
          exercitationem explicabo cumque quaerat praesentium? Mollitia qui
          placeat vitae adipisci! Quos suscipit provident incidunt, impedit
          excepturi itaque adipisci omnis repudiandae in modi ratione ad esse
          quia dicta quo sequi aut voluptate, voluptatum nihil fugit reiciendis
          praesentium nemo commodi culpa? Impedit sequi, consequatur non esse
          suscipit debitis hic quas alias, ex libero officia corrupti, quis aut?
          Aliquid consequuntur sapiente aspernatur nulla consectetur, iste nisi
          eius dolorem eos omnis voluptates doloremque quod, libero possimus
          quaerat ut nam iusto maiores laudantium inventore consequatur tenetur
        </p>
        <div className="grid grid-cols-12 gap-5">
          <img src={img1} alt="demo img" className="col-span-3 h-[350px]" />
          <img src={bgImg} alt="demo img" className="col-span-3 h-[350px]" />
        </div>
        <div className="flex items-center gap-3 w-full mt-10">
          <div className="w-[50%] h-[2px] bg-slate-600"></div>
          <img src={logo} alt="opaque logo" className="h-[50px]" />
          <div className="w-[50%] h-[2px] bg-slate-600"></div>
        </div>
        <div>
          <h1 className="text-xl font-bold">Author Name</h1>
          <p className="">Second title</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
