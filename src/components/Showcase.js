import Console from "./Console";

const Showcase = ({ setTimerOn }) => {
  return (
    <div className="mt-20 mb-[46px] flex items-center justify-center">
      {" "}
      <div className="mt-28 flex h-full items-center justify-center ">
        <Console
          imgName={"Cyberpunk City"}
          characName1={"Alien Queen"}
          characDesc1={"Xenomorph Queen"}
          characName2={"Ghost Buster Slimer"}
          characDesc2={"Green Ghost"}
          charac
          Name3={"Among Us "}
          characDesc3={"Space Betrayal"}
          setTimerOn={setTimerOn}
        />
      </div>{" "}
    </div>
  );
};

export default Showcase;
