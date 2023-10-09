import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Uses = () => {
    const users = useLoaderData()

    return (
      <div>
        <h2>Uses Section {users.length}</h2>
        <div className="grid grid-cols-4 gap-4">
          {users.map((user, inx) => (
            <User user={user} key={inx}></User>
          ))}
        </div>
      </div>
    );
};

export default Uses;