export default function RekomendasiFlexible({ data }) {
  if (!data || typeof data !== "object") return <p>Data tidak tersedia</p>;

  const rekomendasi = data.rekomendasi || data;

  return (
    <div className="space-y-6">
      {Object.entries(rekomendasi).map(([key, value], index) => (
        <div key={index}>
          <h3 className="text-lg font-bold capitalize text-blue-600 mb-2">
            {formatKey(key)}
          </h3>
          <RenderValue value={value} depth={1} />
        </div>
      ))}
    </div>
  );
}

function RenderValue({ value, depth }) {
  const padding = `pl-${Math.min(depth * 4, 12)}`;
  const baseClass = `text-sm ${padding} leading-relaxed`;

  if (Array.isArray(value)) {
    return (
      <ul className={`list-disc list-inside space-y-1 ${padding}`}>
        {value.map((item, idx) => (
          <li key={idx}>
            {typeof item === "object" && item !== null ? (
              <RenderValue value={item} depth={depth + 1} />
            ) : (
              <span className="text-gray-700">{item}</span>
            )}
          </li>
        ))}
      </ul>
    );
  }

  if (typeof value === "object" && value !== null) {
    return (
      <div
        className={`space-y-2 border-l-4 border-blue-200 bg-blue-50 p-3 my-2 rounded ${padding}`}
      >
        {Object.entries(value).map(([subKey, subVal], i) => (
          <div key={i} className="text-sm">
            <div className="text-blue-700 font-medium">
              {formatKey(subKey)}:
            </div>
            <div className="ml-3">
              {typeof subVal === "object" ? (
                <RenderValue value={subVal} depth={depth + 1} />
              ) : (
                <span className="text-gray-800">{String(subVal)}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return <p className={`${baseClass} text-gray-800`}>{String(value)}</p>;
}

function formatKey(key) {
  return key.replaceAll("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
}
