import {
  BadgeCheck,
  BookOpen,
  User,
  Briefcase,
  Target,
  School,
  MapPin,
} from "lucide-react";

export default function DetailInputView({ data }) {
  if (!data) return <p>Data input tidak ditemukan.</p>;

  const Section = ({ icon, title, children }) => (
    <div className="bg-white rounded-xl shadow p-5 space-y-2 border border-gray-100">
      <div className="flex items-center gap-2 mb-2 text-indigo-600">
        {icon}
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  );

  const renderList = (arr) =>
    Array.isArray(arr) && arr.length > 0 ? (
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {arr.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-400 italic">-</p>
    );

  const renderText = (text) =>
    typeof text === "string" && text.trim() !== "" ? (
      <p>{text}</p>
    ) : typeof text === "number" ? (
      <p>{text}</p>
    ) : (
      <p className="text-gray-400 italic">-</p>
    );

  return (
    <div className="grid md:grid-cols-2 gap-6 text-sm">
      <Section icon={<User size={18} />} title="Nama">
        {renderText(data.nama)}
      </Section>

      <Section icon={<BookOpen size={18} />} title="Minat dan Hobi">
        <p className="font-medium text-gray-600">Luang:</p>
        {renderList(data.luang)}
        <p className="font-medium text-gray-600 mt-2">Pelajaran:</p>
        {renderText(data.pelajaran)}
        <p className="font-medium text-gray-600 mt-2">Topik:</p>
        {renderText(data.topik)}
      </Section>

      <Section icon={<BadgeCheck size={18} />} title="Keterampilan">
        <p className="font-medium text-gray-600">Skill:</p>
        {renderList(data.skill)}
        <p className="font-medium text-gray-600 mt-2">Skor Skill:</p>
        {renderText(data.skorSkill)}
        <p className="font-medium text-gray-600 mt-2">Belajar:</p>
        {renderText(data.belajar)}
      </Section>

      <Section icon={<User size={18} />} title="Kepribadian & Gaya Belajar">
        <p className="font-medium text-gray-600">Kepribadian:</p>
        {renderText(data.kepribadian)}
        <p className="font-medium text-gray-600 mt-2">Gaya Belajar:</p>
        {renderText(data.gayaBelajar)}
        <p className="font-medium text-gray-600 mt-2">Tentang Diri:</p>
        {renderText(data.mySelf)}
      </Section>

      <Section icon={<Target size={18} />} title="Tujuan & Harapan Karier">
        {renderList(data.karier)}
      </Section>

      <Section
        icon={<School size={18} />}
        title="Aktivitas Sekolah & Non-Formal"
      >
        {renderList(data.kegiatan)}
      </Section>

      <Section icon={<Briefcase size={18} />} title="Preferensi Karier">
        <p className="font-medium text-gray-600">Karir:</p>
        {renderList(data.karir)}
        <p className="font-medium text-gray-600 mt-2">Setelah Lulus:</p>
        {renderText(data.lulus)}
      </Section>
    </div>
  );
}
