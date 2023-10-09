import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {name, email, phone, id} = user
    const navigate = useNavigate()

    const handleDetails = () =>{
        navigate(`/uses/${id}`)
    }
    return (
      <div className=" border-2 text-center space-y-4	 border-red-900  p-8 rounded-lg">
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
        <div className='space-x-3'>
          <Link to={`/uses/${id}`} className="btn btn-sm btn-accent">
            show details
          </Link>
          <button className="btn btn-sm  btn-primary" onClick={handleDetails}>
            Details
          </button>
        </div>
      </div>
    );
};

User.propTypes = {
    user: PropTypes.object
};

export default User;
