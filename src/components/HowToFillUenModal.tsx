import React from "react";
import { UEN_ENTITY_TYPE_INDICATORS } from "../data/uenmetadata";

interface UenModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HowToFillUenModal: React.FC<UenModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg border border-gray-200 max-w-5xl w-full p-6 space-y-4 shadow-lg flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-3 shrink-0">
          <h2 className="font-bold text-gray-900 text-base">
            UEN Structure & Entity Type Indicator Reference
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-sm font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Side-by-Side Content Body */}
        <div className="grid grid-cols-2 gap-6 overflow-hidden flex-1">
          {/* LEFT COLUMN: Static UEN Formats*/}
          <div className="space-y-4 overflow-y-auto pr-1">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider">
              1. General UEN Formats
            </h3>

            {/* Format 1: Businesses */}
            <div className="p-3 bg-gray-50 border border-gray-200 rounded space-y-1 text-xs">
              <div className="flex justify-between items-start">
                <span className="font-semibold text-gray-900">
                  Businesses (ACRA)
                </span>
                <span className="font-mono bg-white px-1.5 py-0.5 border border-gray-300 rounded text-gray-800">
                  nnnnnnnnX (9 digits)
                </span>
              </div>
              <p className="text-gray-500">
                Sole proprietorships and partnerships registered with ACRA.
              </p>
              <div className="bg-white p-2 border border-gray-200 rounded space-y-0.5 font-mono text-[11px] text-gray-600">
                <div>
                  <span className="font-semibold text-gray-800">nnnnnnnn</span>{" "}
                  = Sequential running number
                </div>
                <div>
                  <span className="font-semibold text-gray-800">X</span> = Check
                  alphabet
                </div>
              </div>
              <p className="font-mono text-gray-800">
                <span className="font-semibold">Example:</span> 12345678A
              </p>
            </div>

            {/* Format 2: Local Companies */}
            <div className="p-3 bg-gray-50 border border-gray-200 rounded space-y-1 text-xs">
              <div className="flex justify-between items-start">
                <span className="font-semibold text-gray-900">
                  Local Companies (ACRA)
                </span>
                <span className="font-mono bg-white px-1.5 py-0.5 border border-gray-300 rounded text-gray-800">
                  yyyynnnnnX (10 digits)
                </span>
              </div>
              <p className="text-gray-500">
                Local companies incorporated under ACRA.
              </p>
              <div className="bg-white p-2 border border-gray-200 rounded space-y-0.5 font-mono text-[11px] text-gray-600">
                <div>
                  <span className="font-semibold text-gray-800">yyyy</span> =
                  Year of issuance (within 1800 to 2099)
                </div>

                <div>
                  <span className="font-semibold text-gray-800">nnnnn</span> =
                  Sequential running number
                </div>
                <div>
                  <span className="font-semibold text-gray-800">X</span> = Check
                  alphabet
                </div>
              </div>
              <p className="font-mono text-gray-800">
                <span className="font-semibold">Example:</span> 199012345X
              </p>
            </div>

            {/* Format 3: Other Entities */}
            <div className="p-3 bg-gray-50 border border-gray-200 rounded space-y-2 text-xs">
              <div className="flex justify-between items-start">
                <span className="font-semibold text-gray-900">
                  Other Entities (LLPs, Societies...)
                </span>
                <span className="font-mono bg-white px-1.5 py-0.5 border border-gray-300 rounded text-gray-800">
                  TyyPQnnnnX (10 digits)
                </span>
              </div>
              <p className="text-gray-500">New format implemented after 2008</p>
              <div className="bg-white p-2 border border-gray-200 rounded space-y-0.5 font-mono text-[11px] text-gray-600">
                <div>
                  <span className="font-semibold text-gray-800">Tyy</span> =
                  Year of issuance (e.g., R50= 1850, S88 = 1988, T08 = 2008)
                </div>
                <div>
                  <span className="font-semibold text-gray-800">PQ</span> =
                  Entity type code (see right table)
                </div>
                <div>
                  <span className="font-semibold text-gray-800">nnnn</span> =
                  Sequential running number
                </div>
                <div>
                  <span className="font-semibold text-gray-800">X</span> = Check
                  alphabet
                </div>
              </div>

              <p className="font-mono text-gray-800">
                <span className="font-semibold">Example:</span> T08LL1234A (LLP)
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Independently Scrolling Entity Type Indicators Table */}
          <div className="flex flex-col h-full overflow-hidden space-y-2">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider shrink-0">
              2. Entity Type Indicators (PQ Codes)
            </h3>

            <div className="border border-gray-200 rounded overflow-y-auto flex-1 text-xs bg-white">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100 sticky top-0 border-b border-gray-200 text-gray-700 z-10">
                  <tr>
                    <th className="px-3 py-2 font-semibold bg-gray-100">
                      Code
                    </th>
                    <th className="px-3 py-2 font-semibold bg-gray-100">
                      Entity Type
                    </th>
                    <th className="px-3 py-2 font-semibold bg-gray-100">
                      Issuing Agency
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {Object.entries(UEN_ENTITY_TYPE_INDICATORS).map(
                    ([code, meta]) => (
                      <tr key={code} className="hover:bg-gray-50">
                        <td className="px-3 py-2 font-mono font-bold text-gray-900 align-top">
                          {code}
                        </td>
                        <td className="px-3 py-2 text-gray-700 align-top">
                          {meta.entityType}
                        </td>
                        <td className="px-3 py-2 text-gray-500 align-top text-[11px]">
                          {meta.issuanceAgency}
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end pt-3 border-t border-gray-200 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-black text-white text-xs font-medium rounded hover:bg-gray-800 cursor-pointer"
          >
            Close Reference
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToFillUenModal;
