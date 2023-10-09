import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const ShowDetelis = () => {
  const user = useLoaderData();
  const navigate = useNavigate();
  const { userId } = useParams();
  console.log(userId);

  const handleGoBack = () => {
    navigate(-1);
  };

  const { id, name, email, website, address } = user;
  return (
    <div className="border border-sky-500 p-6 space-y-3 text-center w-1/4">
      <h2>{id}</h2>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{website}</p>
      <p>{address.street}</p>
      <button onClick={handleGoBack} className="btn btn-info">
        Go Back
      </button>
    </div>
  );
};

export default ShowDetelis;
