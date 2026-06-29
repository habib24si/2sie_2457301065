import { useState } from "react";

export default function HitungGaji() {
  const [gajiPokok, setGajiPokok] = useState("");
  const [tunjangan, setTunjangan] = useState("");
  const [potongan, setPotongan] = useState("");
  const [totalGaji, setTotalGaji] = useState(null);

  const hitung = () => {
    const pokok = Number(gajiPokok) || 0;
    const tunj = Number(tunjangan) || 0;
    const pot = Number(potongan) || 0;
    setTotalGaji(pokok + tunj - pot);
  };

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Hitung Gaji</h2>

        <div className="mb-3">
          <label className="block text-gray-700 font-medium mb-1">Gaji Pokok</label>
          <input
            type="number"
            placeholder="Masukkan gaji pokok"
            value={gajiPokok}
            onChange={(e) => setGajiPokok(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-3">
          <label className="block text-gray-700 font-medium mb-1">Tunjangan</label>
          <input
            type="number"
            placeholder="Masukkan tunjangan"
            value={tunjangan}
            onChange={(e) => setTunjangan(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-3">
          <label className="block text-gray-700 font-medium mb-1">Potongan</label>
          <input
            type="number"
            placeholder="Masukkan potongan"
            value={potongan}
            onChange={(e) => setPotongan(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          onClick={hitung}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Hitung
        </button>

        {totalGaji !== null && (
          <div className="mt-4 p-3 bg-green-100 rounded text-center">
            <p className="text-lg font-semibold text-green-700">
              Total Gaji: Rp {totalGaji.toLocaleString("id-ID")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
