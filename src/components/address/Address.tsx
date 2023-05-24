import { Address } from "../../types/Address";
// export address component that accepts Address prop
// Path: src/components/address/Address.tsx

export function Address(address: Address) {
  return (
    <div className="Address">
      <h4 className="text-xl font-semibold mb-2">Address</h4>
      <p className="text-gray-700">{address.line1}</p>
      <p className="text-gray-700">{address.city}</p>
      <p className="text-gray-700">{address.region}</p>
      <p className="text-gray-700">{address.postalCode}</p>
      <p className="text-gray-700">US</p>
      <div className="flex flex-col">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
          Get Directions
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
          Call
        </button>
      </div>
    </div>
  );
}