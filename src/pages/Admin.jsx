import { useEffect, useState } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import RekomendasiFlexible from "../components/ui/Output";
import DetailInputView from "../components/ui/DetailInputView";

export default function Admin() {
  const [searchParams] = useSearchParams();
  const passwordParam = searchParams.get("pass");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  if (passwordParam !== "password123") {
    return <Navigate to="/pemantapan-karir" replace />;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_URL_API}/kkn-kabandungan/get`,
        );
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Gagal fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Pemantapan Karier
      </h1>

      {loading ? (
        <p className="text-center text-blue-500">Sedang memuat data...</p>
      ) : (
        <div className="overflow-x-auto border border-gray-200 rounded-xl">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100 text-gray-700 text-sm font-semibold">
              <tr>
                <th className="p-4 text-left">#</th>
                <th className="p-4 text-left">Tanggal</th>
                <th className="p-4 text-left">Nama</th>
                <th className="p-4 text-left">Minat</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {data.map((item, index) => (
                <>
                  <tr
                    key={`main-${index}`}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-4 align-top">{index + 1}</td>
                    <td className="p-4 align-top">
                      {new Date(item.createdAt).toLocaleString()}
                    </td>
                    <td className="p-4 align-top">
                      {item.inputKalimat?.nama || "-"}
                    </td>
                    <td className="p-4 align-top">
                      <ul className="list-disc ml-5 space-y-1">
                        {(item.inputKalimat?.luang || []).map((minat, i) => (
                          <li key={i}>{minat}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>

                  <tr key={`detail-${index}`} className="border-b bg-gray-50">
                    <td colSpan={4} className="p-4 space-y-4">
                      {/* DETAIL INPUT */}
                      <details className="group border border-indigo-300 rounded-lg transition-all duration-300 shadow-sm open:shadow-md open:border-indigo-500">
                        <summary className="cursor-pointer px-4 py-2 bg-indigo-50 rounded-t-lg text-indigo-700 font-semibold group-open:rounded-b-none hover:bg-indigo-100 transition-colors">
                          🔍 Lihat Detail Input
                        </summary>
                        <div className="px-4 py-3 bg-white border-t border-indigo-200 text-sm text-gray-800 space-y-2 rounded-b-lg">
                          <DetailInputView data={item.inputKalimat} />
                        </div>
                      </details>

                      {/* DETAIL OUTPUT */}
                      <details className="bg-white border border-gray-200 p-4 rounded shadow-sm">
                        <summary className="cursor-pointer text-blue-600 font-medium hover:underline">
                          Lihat Detail Output Gemini
                        </summary>
                        <div className="mt-4 space-y-2 text-sm text-gray-800">
                          <RekomendasiFlexible data={item.outputAI} />
                        </div>
                      </details>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
