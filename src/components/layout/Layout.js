import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Content from "../content/Content";
import styles from "./Layoutstyles.module.scss";

const Layout = () => {
  const [state, setState] = useState({
    filters: {
      launch_year: [
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
      ],
      launch_successful: ["True", "False"],
      landing_successful: ["True", "False"],
    },
    selectedBtnIndex: {
      index_launch_year: null,
      index_launch_successful: null,
      index_landing_successful: null,
    },
    spacex_data: [],
    route_Function: () => {},
    routeObj: {
      launch_year_param: "",
      launch_successful_param: "",
      landing_successful_param: "",
    },
  });

  const sidebarBtnClick = (getBtnIndex, getBtnType) => {
    let getState = { ...state };
    let getSelectedIndex = getState.selectedBtnIndex;

    if (getBtnType === "launch_year")
      getSelectedIndex.index_launch_year = getBtnIndex;
    else if (getBtnType === "launch_successful")
      getSelectedIndex.index_launch_successful = getBtnIndex;
    else if (getBtnType === "landing_successful")
      getSelectedIndex.index_landing_successful = getBtnIndex;

    setState(getState);
    state.route_Function();
  };

  const setGetData = (passed, passRouteObj) => {
    setState({
      ...state,
      spacex_data: passed,
      route_Function: passRouteObj,
    });
  };

  const setrouteObj = (routeObj) => {
    setState({
      ...state,
      routeObj: routeObj,
    });
  };

  return (
    <div style={{ height: '100vh' }}>
      <header className={styles.header_box}>
        <h2 className={styles.header_txt}>SpaceX Launch Programs</h2>
      </header>
      <section className={styles.section_container}>
        <div className={styles.sidebar_container}>
          <Sidebar
            sidebarBtnClick={sidebarBtnClick}
            selectedBtnIndex={state.selectedBtnIndex}
            filters={state.filters}
            routeObj={state.routeObj}
          />
        </div>
        <div className={styles.content_container}>
          <Content
            get_data={state.spacex_data}
            setGetData={setGetData}
            selectedBtnIndex={state.selectedBtnIndex}
            filters={state.filters}
            routeObj={state.routeObj}
            setrouteObj={setrouteObj}
          />
        </div>
      </section>
      <footer style={{ position: 'fixed', bottom: '0', background:'#f2f2f2', width: '100%' }}>
        <h4 style={{ textAlign: "center" }}>Developed By : Krishna Chaitanya</h4>
      </footer>
    </div>
  );
};

export default Layout;
