import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getDriverDetail,
  clearDriverDetaiL,
} from "../../redux/actions/actions";
import styles from "./DetailPage.module.css";
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
    <div className={styles.container}>
      <div className={styles.items}>
        <h4>Driver Id: {driverDetail?.id}</h4>
        <h4>Name: {driverDetail?.name}</h4>
        <h4>Last name: {driverDetail?.lastName}</h4>
        <img
          src={driverDetail?.image}
          alt={driverDetail?.lastName}
          className={styles.img}
        />
        <h4>Nationality: {driverDetail?.nationality}</h4>
        <h4>Date of birth: {driverDetail?.dob}</h4>
        <h4>Teams: {driverDetail?.teams}</h4>

        <h4 className={styles.h4}>{driverDetail?.description}</h4>
      </div>
    </div>
  );
};
export default DetailPage;
