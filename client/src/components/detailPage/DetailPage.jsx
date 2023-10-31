import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getDriverDetail,
  clearDriverDetaiL,
} from "../../redux/actions/actions";

const DetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const driverDetail = useSelector((state) => state.driverDetail);
  useEffect(() => {
    dispatch(getDriverDetail(params?.id));
    return () => {
      dispatch(clearDriverDetaiL());
    };
  }, [params?.id]);
  return (
    <div>
      <h4>Driver Id: {driverDetail?.id}</h4>
      <h4>Forename: {driverDetail?.name}</h4>
      <h4>Surname: {driverDetail?.lastName}</h4>
      <h4>Nationality: {driverDetail?.nationality}</h4>
      <img src={driverDetail?.image} alt={driverDetail?.lastName} />
      <h4>{driverDetail?.description}</h4>
      <h4>Day of birth: {driverDetail?.dob}</h4>
      <h4>Teams: {driverDetail?.teams}</h4>
    </div>
  );
};
export default DetailPage;
