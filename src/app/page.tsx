
import UploadButton from "@/components/UploadButton";


export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-7xl md:p-10 flex flex-col">
        <div className=" mb-5 mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5  sm:items-center sm:gap-0">
          <h1 className="mb-3 font-bold text-5xl text-gray=900">Upload Your Pdf</h1>
        </div>
        <UploadButton />
      </main>
    </>
  );
}
