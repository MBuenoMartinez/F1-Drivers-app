import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getDriverDetail,
  clearDriverDetaiL,
} from "../../redux/actions/actions";
import Button from "../button/Button";
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
      <Button link={"/drivers"} text={"home"} />
      <h4>{driverDetail?.name}</h4>
      <h4>{driverDetail?.lastName}</h4>
      <img src={driverDetail?.image} alt={driverDetail?.lastName} />
      <h4>{driverDetail?.description}</h4>
      <h4>{driverDetail?.nationality}</h4>
      <h4>{driverDetail?.dob}</h4>
    </div>
  );
};
export default DetailPage;
