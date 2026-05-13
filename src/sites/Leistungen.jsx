import Button from "../components/Button";

export default function Leistungen() {
  return (
    <main className="flex items-center flex-col pb-10">
      {/* Unsere Projekte */}
      <section className="xs:p-8 p-10 md:p-12 lg:p-48 flex justify-center items-center w-[95vw]">
        <div className="flex flex-col w-[1200px] gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl tracking-tight">Unsere Projekte</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
