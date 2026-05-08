import Button from "../components/Button";
import Slider from "../components/Slider";

export default function DefaultSection(props) {
  return (
    <section className="xs:p-8 p-10 md:p-12 lg:p-48 flex justify-center items-center w-[95vw] overflow-hidden bg-gray-800 rounded-4xl">
      <div className="flex flex-col w-[1200px] gap-4 text-white">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl  tracking-tight">Unsere Projekte</h2>
          <Button variant="secondary-white" text="Projekte ansehen"></Button>
        </div>
        <div>
          <Slider />
        </div>
      </div>
    </section>
  );
}
