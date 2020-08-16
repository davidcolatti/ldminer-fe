import React, { useState } from "react";
import Loading from "../Loading/Loading";
import styles from "./searchtool.module.scss";

const SearchTool = ({ user }) => {
  const [keyType, setKeyType] = useState("businessName");
  const [searchTerm, setSearchTerm] = useState("");

  const onRadioSelect = (type) => {
    setKeyType(type);
  };

  return (
    <div className={styles.searchTool}>
      <form>
        <div>
          <input
            name="businessName"
            id="businessName"
            type="radio"
            checked={keyType === "businessName"}
            onChange={(e) => onRadioSelect(e.target.name)}
          />
          <label>Company</label>
        </div>
        <div>
          <input
            name="category"
            id="category"
            type="radio"
            checked={keyType === "category"}
            onChange={(e) => onRadioSelect(e.target.name)}
          />
          <label>Category</label>
        </div>
        <div>
          <input
            name="city"
            id="city"
            type="radio"
            checked={keyType === "city"}
            onChange={(e) => onRadioSelect(e.target.name)}
          />
          <label>City</label>
        </div>
        <div>
          <input
            name="state"
            id="state"
            type="radio"
            checked={keyType === "state"}
            onChange={(e) => onRadioSelect(e.target.name)}
          />
          <label>State</label>
        </div>
      </form>

      <div className={styles.searchToolSearchContainer}>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search..."
          className={styles.searchToolBar}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <i className={`fas fa-search ${styles.searchToolIcon}`} />
      </div>
    </div>
  );
};

export default SearchTool;
