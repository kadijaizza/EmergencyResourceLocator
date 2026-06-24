import { useNavigate, useLocation } from "react-router-dom";

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className="
        fixed
        bottom-5
        left-1/2
        -translate-x-1/2
        bg-white
        rounded-full
        shadow-lg
        px-8
        py-4
        flex
        gap-8
        z-50
      "
    >
      <button
        onClick={() => navigate("/")}
        className={
          location.pathname === "/"
            ? "text-[#E84A67]"
            : "text-gray-500"
        }
      >
        🏠
      </button>

      <button
        onClick={() => navigate("/hospitals")}
        className={
          location.pathname === "/hospitals"
            ? "text-[#E84A67]"
            : "text-gray-500"
        }
      >
        🏥
      </button>

      <button
        onClick={() => navigate("/sos")}
        className={
          location.pathname === "/sos"
            ? "text-[#E84A67]"
            : "text-gray-500"
        }
      >
        🚨
      </button>
    </div>
  );
}

export default BottomNav;