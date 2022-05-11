import { useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Checkout = () => {
  const { serviceID } = useParams();
  const [service] = useServiceDetail(serviceID);
  const [user] = useAuthState(auth);
  // const [user, setUser] = useState({
  //     name:'Hero Pro Alom',
  //     email:'heroalom.hotmail.com',
  //     address:'las vegas',
  //     phone:'0151122112211'
  // });
  // const handleAddressChange = e =>{
  //     // console.log(e.target.value);
  //     const {address, ...rest} = user;
  //     const newAddress = e.target.value;
  //     const newUser =  {address: newAddress, ...rest};
  //     console.log(address, rest);
  //     setUser(newUser);
  // }

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };
    axios
      .post("https://pacific-shelf-11036.herokuapp.com/order", order)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("Your Order is Booked!!");
          e.target.reset();
        }
      });
  };
  return (
    <div className="w-50 mx-auto mt-5">
      <h2 className="text-center my-3">Please Order: {service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-3 ps-3 py-2 border rounded"
          value={user?.displayName}
          type="text"
          name="name"
          placeholder="Name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-3 ps-3 py-2 border rounded"
          value={user?.email}
          type="email"
          name="email"
          placeholder="Email"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-3 ps-3 py-2 border rounded"
          value={service.name}
          type="text"
          name="service"
          placeholder="Service"
          required
          readOnly
        />
        <br />
        <input
          className="w-100 mb-3 ps-3 py-2 border rounded"
          type="text"
          name="address"
          placeholder="Address"
          autoComplete="off"
          required
        />
        <br />
        <input
          className="w-100 mb-3 ps-3 py-2 border rounded"
          type="text"
          name="phone"
          placeholder="Phone"
          required
        />
        <br />
        <input
          className="btn btn-primary d-block mx-auto"
          type="submit"
          value="Place Order"
        />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Checkout;
