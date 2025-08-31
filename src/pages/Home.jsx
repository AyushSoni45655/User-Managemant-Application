import { useContext, useState } from "react";
import Card from "../component/Card";
import { AppContext } from "../contextService/Context";
import CustomLoader from "../component/CustomLoader";

const Home = () => {
  const {
    isEmpty,
    user,
    setUser,
    loading,
    error,
    filterUsers,
    handlesubmit,
    searchUser,
    setSearchUser,
    handleUpdate,
    handleDelete,
    addData,
    handleAddSubmit,
    hadledataAdd,
  } = useContext(AppContext);

  return (
    <div className="w-[90%] m-auto pt-10 flex flex-col items-center justify-center">
      <div>
        {/* search code here */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <form onSubmit={handlesubmit} className="flex flex-row mb-10">
            <div className="w-52 h-8 rounded-tl-xl rounded-bl-xl overflow-hidden border-2 border-white">
              <input
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)}
                type="text"
                name="search"
                placeholder="Search User here..."
                className="w-full outline-none border-none h-full pl-2"
              />
            </div>
            <button className=" h-8  px-4 rounded-tr-xl rounded-br-xl border-2 border-white">
              Search
            </button>
          </form>

          {/* updatetion code */}

          <form onSubmit={handleAddSubmit} className="flex gap-6 flex-col md:flex-row mb-8">
            <div className=" items-center justify-center flex flex-col md:flex-row gap-6">
              <div className="w-40 h-8 rounded-md overflow-hidden border-2 border-white">
                <input
                  value={addData.name}
                  onChange={hadledataAdd}
                  type="text"
                  name="name"
                  placeholder="Add Name here..."
                  className="w-full outline-none border-none h-full pl-2"
                />
              </div>
              <div className="w-40 h-8 rounded-md overflow-hidden border-2 border-white">
                <input
                  value={addData.email}
                  onChange={hadledataAdd}
                  type="text"
                  name="email"
                  placeholder="Add Email here..."
                  className="w-full outline-none border-none h-full pl-2"
                />
              </div>
              <div className="w-40 h-8 rounded-md overflow-hidden border-2 border-white">
                <input
                  value={addData.phone}
                  onChange={hadledataAdd}
                  type="text"
                  name="phone"
                  placeholder="Add Phone here..."
                  className="w-full outline-none border-none h-full pl-2"
                />
              </div>
            </div>
            <button
              type="submit"
              value={isEmpty ? "Add" : "Edit"}
              className=" h-8  px-4 rounded-md border-2 border-white"
            >
              {isEmpty ? "Add" : "Edit"}
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-10 items-center justify-center">
        {loading ? (
          <CustomLoader />
        ) : error ? (
          <h2 className="font-bold text-xl text-red-700">{error}</h2>
        ) : filterUsers.length === 0 ? (
          <h2 className="text-gray-400 font-medium text-lg">No Data Found</h2>
        ) : (
          filterUsers.map((values) => {
            return (
              <Card
                key={values.id}
                data={values}
                handledelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
