export default function RekomendasiFlexible({ data }) {
  if (!data || typeof data !== "object") return <p>Data tidak tersedia</p>;

  const rekomendasi = data.rekomendasi || data;

  return (
    <div className="">
      {Object.entries(rekomendasi).map(([key, value], index) => (
        <div key={index}>
          <h3 className="text-lg font-bold capitalize">{formatKey(key)}</h3>

          {Array.isArray(value) ? (
            <ul className="list-disc list-inside space-y-1">
              {value.map((item, idx) => (
                <li key={idx}>{item.nama || JSON.stringify(item)}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">{value}</p>
          )}
        </div>
      ))}
    </div>
  );
}

function formatKey(key) {
  return key.replaceAll("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
}
