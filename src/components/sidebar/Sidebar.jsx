import { useHistory } from "react-router-dom";
import styles from "./Sidebarstyles.module.scss";

const Sidebar = ({ sidebarBtnClick, selectedBtnIndex, filters, routeObj }) => {
  const filter_keys = Object.keys(filters);
  const routeObj_keys = Object.keys(routeObj);
  const sideHeaders = ['Launch Year', 'Successful Launch', 'Successful Landing'];

  let history = useHistory();

  const handleBtnClick = (btnIndex, btntype, btnValue) => {
    let btntype_selected = btntype;

    for (let filter_key of filter_keys) {
      if (btntype === filter_key) {
        let btnparam = `${btntype}_param`;
        routeObj_keys.forEach((value) => {
          if (btnparam === value) routeObj[value] = btnValue;
        });
        if (btnIndex === selectedBtnIndex[`index_${btntype}`]) {
          routeObj[btnparam] = "";
          history.push(`${routeObj.launch_year_param}`);
        } else {
          history.push(`${routeObj.launch_year_param}`);
        }
        btnIndex =
          btnIndex === selectedBtnIndex[`index_${btntype}`] ? null : btnIndex;
      }
    }
    sidebarBtnClick(btnIndex, btntype_selected);
  };

  return (
    <>
      <div className={styles.sidebar}>
        <h4>Filters</h4>
        {filter_keys.map((elm, key) => (
          <div key={key} className={styles.sidebar_content}>
            <div className={styles.side_headers}>
              {sideHeaders[key]}
            </div>
            {filters[elm].map((value, index) => (
              <div className={styles.button_box} key={index}>
                <button
                  className={`${styles.sidebar_btn} ${
                    index === selectedBtnIndex[`index_${elm}`]
                      ? styles.sidebar_btn_active
                      : styles.sidebar_btn_inactive
                  }`}
                  onClick={() => handleBtnClick(index, elm, value)}
                >
                  {value}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
