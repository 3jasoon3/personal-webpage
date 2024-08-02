import React from "react";
import styles from "./Timeline.module.scss";
import { TimelineItem } from "@/components/timeline_item";

const Timeline: React.FC = () => {
  return (
    <div className={styles.timeLineContainer}>
      <div className={styles.timeLineLeftSide}>
        <TimelineItem
          title="BSc at the Innopolis University"
          description="BSc at the Innopolis University. BSc at the Innopolis University"
          icon=""
        />
      </div>
      <div className={styles.timeLineAxis}>
        <div className={styles.timeLineAxisDot} />
      </div>
      <div className={styles.timeLineRightSide}>
        <TimelineItem
          title="BSc at the Innopolis University"
          description="BSc at the Innopolis University. BSc at the Innopolis University"
          icon=""
        />
      </div>
    </div>
  );
};

export default Timeline;
