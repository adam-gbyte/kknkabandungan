import Footer from "../components/Footer";

export default function PenguatanKarir() {
  return (
    <>
      <div className="min-h-screen shadow-xl flex flex-col md:flex-row items-center justify-between px-15 md:px-16 py-10 bg-gradient-to-b rounded-2xl from-white to-blue-50">
        {/* Kiri: Teks */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">Penguatan Karir</h1>
        </div>
      </div>

      <Footer />
    </>
  );
}
