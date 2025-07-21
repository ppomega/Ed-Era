import { useNavigate } from "react-router";
function Navbar({ user }) {
  const navigate = useNavigate();

  return (
    <nav
      className="backdrop-blur-[2px] bg-transparent z-10 sticky top-2
 w-full py-1 h-10 rounded-lg "
    >
      <div className=" w-full flex justify-between px-8  ">
        <div className="baffle text-white text-lg font-metaluna font-bold">
          ED-ERA
        </div>
        <div
          onClick={() => {
            navigate("/");
          }}
          className="font-bunken text-white text-sm"
        >
          HOME
        </div>
        <div
          onClick={() => {
            user != null ? navigate("/batches") : navigate("/login");
          }}
          className="font-bunken text-white text-sm"
        >
          BATCHES
        </div>
        <div
          onClick={() => {
            navigate("/aboutus");
          }}
          className="font-bunken text-white text-sm"
        >
          ABOUT US
        </div>
        <div
          onClick={() => {
            user != null ? navigate("/batches") : navigate("/login");
          }}
          className="font-bunken text-white text-sm"
        >
          PURCHASES
        </div>
        {user ? (
          <div className="bg-amber-300 text-black text-xs px-4 py-1  font-bunken">
            Welcome {user[0].Username}
          </div>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="bg-amber-300 text-black text-xs px-4 py-1  font-bunken"
          >
            LOGIN
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
