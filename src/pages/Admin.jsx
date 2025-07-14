import { useSearchParams, Navigate } from "react-router-dom";

export default function Admin() {
  const [searchParams] = useSearchParams();
  const adminParam = searchParams.get("admin");

  if (adminParam !== "admin123") {
    // Redirect ke halaman lain jika tidak ada query param yang benar
    return <Navigate to="/" replace />;
  }

  return <p>Ini adalah admin</p>;
}
