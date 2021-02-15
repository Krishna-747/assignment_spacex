import styles from "./Cardstyles.module.scss";

const Card = ({ class_name, card_data }) => {
  return (
    <>
      {card_data.map((elm, key) => (
        <div className={class_name} key={key}>
          <div className={styles.img_box}>
            <img src={elm.links.mission_patch_small} className={styles.img} />
          </div>
          <div className={styles.details_box}>
          <div><span className={styles.label_text_name}>{elm.mission_name} #{elm.flight_number}</span></div>
            <div><span className={styles.label_text}>Mission Ids : </span><span className={styles.details_text}>{elm.mission_id}</span></div>
            <div><span className={styles.label_text}>Successful Launch : </span><span className={styles.details_text}>{elm.launch_year}</span></div>
            <div><span className={styles.label_text}>Successful Landing : </span><span className={styles.details_text}>{elm.launch_success ? "True" : "False"}</span></div>
            <div><span className={styles.label_text}>Mission Ids : </span><span className={styles.details_text}>{elm.rocket.first_stage.cores[0].land_success ? "True" : "False"}</span></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
