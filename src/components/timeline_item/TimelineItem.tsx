import React from "react";
import { ReactNode } from "react";
import styles from "./TimelineItem.module.scss";

interface TimelineItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className={styles.timelineItemContainer}>
      <h1>{title}</h1>
    </div>
  );
};

export default TimelineItem;
