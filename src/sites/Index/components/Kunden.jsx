import Button from "../../../components/Button";

export default function Kunden() {
  return (
    <section className="border-b border-blue-300 w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20">
      <div className="flex flex-col gap-4 max-w-[1200px] mx-auto">
        <div className="flex w-full justify-between items-end">
          <h2 className="leading-none tracking-tight">Unsere Kunden</h2>
          <Button variant="secondary" text="Projekt starten" />
        </div>

        <div>
          <div className="flex flex-col gap-2 items-start pt-8">
            <p className="text-blue-600 text-5xl tracking-tight instrument-serif-regular">
              <span className="text-blue-700">
                "Lorem ipsum dolor sit amet.
              </span>{" "}
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam."
            </p>
            <p className="text-sm tracking-tight">Your Music</p>
            <p className="text-sm tracking-tight">
              - Michael Schneider, Co-Founder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
