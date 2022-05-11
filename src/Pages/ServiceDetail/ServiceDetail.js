import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";

const ServiceDetail = () => {
  const { serviceID } = useParams();
  const [service] = useServiceDetail(serviceID);
  // useEffect(()=>{
  //     const url = `https://pacific-shelf-11036.herokuapp.com/service/${serviceID}`
  //     fetch(url)
  //     .then(res => res.json())
  //     .then(data => setService(data))
  // },[])
  return (
    <div className="text-center">
      <h2>Wellcome to Detail {service.name}</h2>
      <Link to={`/checkout/${serviceID}`}>
        <button className="btn btn-primary">Proceed Checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
