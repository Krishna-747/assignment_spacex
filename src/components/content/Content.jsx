import { useEffect } from "react";
import styles from "./Contentstyles.module.scss";
import axios from "axios";
import Card from "../card/Card";

const Content = ({
  get_data,
  setGetData,
  selectedBtnIndex,
  filters,
  routeObj,
  setrouteObj,
}) => {

  routeObj.launch_year_param = filters.launch_year[
    selectedBtnIndex.index_launch_year
  ]
    ? filters.launch_year[selectedBtnIndex.index_launch_year]
    : "";
  routeObj.launch_successful_param = filters.launch_successful[
    selectedBtnIndex.index_launch_successful
  ]
    ? filters.launch_successful[selectedBtnIndex.index_launch_successful]
    : "";
  routeObj.landing_successful_param = filters.landing_successful[
    selectedBtnIndex.index_landing_successful
  ]
    ? filters.landing_successful[selectedBtnIndex.index_landing_successful]
    : "";

  let {
    launch_year_param,
    launch_successful_param,
    landing_successful_param,
  } = routeObj;
  launch_successful_param = launch_successful_param.toLowerCase();
  landing_successful_param = landing_successful_param.toLowerCase();

  const passRouteObj = () => {
    setrouteObj(routeObj);
  };

  useEffect(async () => {
    try {
      const { data: spacex_data } = await axios.get(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch_successful_param}&land_success=${landing_successful_param}&launch_year=${launch_year_param}`
      );
      setGetData(spacex_data, passRouteObj);
    } catch (err) {
      console.log(err, "error");
    }
  }, [
    routeObj.launch_year_param,
    routeObj.launch_successful_param,
    routeObj.landing_successful_param,
  ]);

  return (
    <>
      <div className={styles.content_box}>
        <Card class_name={styles["card_container"]} card_data={get_data} />
      </div>
    </>
  );
};

export default Content;
