import { useSearchParams, Navigate } from "react-router-dom";

export default function Admin() {
  const [searchParams] = useSearchParams();
  const passwordParam = searchParams.get("pass");

  if (passwordParam !== "password123") {
    return <Navigate to="/pemantapan-karir" replace />;
  }

  return <p>Ini adalah admin</p>;
}
