import { Link } from "react-router-dom";
import UENValidatorPanel from "../components/UENValidatorPanel";

export const UenPage = () => {
  return (
    <div className="space-y-6">
      <Link to="/" className="text-sm font-medium text-blue-600">
        &larr; Back to Home
      </Link>
      <div>
        <h1 className="text-3xl font-bold">UEN Validator</h1>
        <p className="text-sm text-gray-700 mt-2">
          Verify entity number formats and issuing authorities.
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <UENValidatorPanel />
      </div>
    </div>
  );
};

export default UenPage;
