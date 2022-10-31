import React from "react";
import ParentDashboardHeader from "../../components/ParentDashboardHeader/ParentDashboardHeader";
import styles from "./ParentDashboard.module.css";

const ParentDashboard = () => {
    return (
        <div id={styles.ParentDashboardContainer} className="flex-auto">
            <ParentDashboardHeader />
        </div>
    );
};

export default ParentDashboard;
