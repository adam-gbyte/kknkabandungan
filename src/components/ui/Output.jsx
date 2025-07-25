export default function RekomendasiFlexible({ data }) {
  if (!data || typeof data !== "object") return <p>Data tidak tersedia</p>;

  const rekomendasi = data.rekomendasi || data;

  return (
    <div className="space-y-4">
      {Object.entries(rekomendasi).map(([key, value], index) => (
        <div key={index}>
          <h3 className="text-lg font-bold capitalize mb-2">
            {formatKey(key)}
          </h3>
          <RenderValue value={value} depth={1} />
        </div>
      ))}
    </div>
  );
}

function RenderValue({ value, depth }) {
  const padding = `pl-${Math.min(depth * 4, 16)}`; // limit indenting to avoid extreme paddings

  if (Array.isArray(value)) {
    return (
      <ul className={`list-disc list-inside space-y-1 ${padding}`}>
        {value.map((item, idx) => (
          <li key={idx}>
            {typeof item === "object" && item !== null ? (
              <RenderValue value={item} depth={depth + 1} />
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
    );
  }

  if (typeof value === "object" && value !== null) {
    return (
      <div className={`space-y-1 border-l-2 border-gray-200 ${padding}`}>
        {Object.entries(value).map(([subKey, subVal], i) => (
          <div key={i}>
            <strong className="capitalize">{formatKey(subKey)}:</strong>{" "}
            {typeof subVal === "object" ? (
              <RenderValue value={subVal} depth={depth + 1} />
            ) : (
              <span>{String(subVal)}</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return <p className={`text-gray-700 ${padding}`}>{String(value)}</p>;
}

function formatKey(key) {
  return key.replaceAll("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
}
