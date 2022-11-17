import React from "react";
import ConceptSection from "../../components/ConceptSection/ConceptSection";
import ParentDashboardHeader from "../../components/ParentDashboardHeader/ParentDashboardHeader";
import styles from "./ParentDashboard.module.css";

const ParentDashboard = () => {
    return (
        <div
            id={styles.ParentDashboardContainer}
            className="flex-auto w-11/12 ml-auto"
        >
            <ParentDashboardHeader />
            <ConceptSection />
        </div>
    );
};

export default ParentDashboard;
