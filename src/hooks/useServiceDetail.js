import { useEffect, useState } from "react";

const useServiceDetail = (serviceID) => {
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `https://pacific-shelf-11036.herokuapp.com/service/${serviceID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceID]);
  return [service];
};
export default useServiceDetail;
