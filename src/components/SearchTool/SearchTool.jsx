import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Loading from "../Loading/Loading";
import styles from "./searchtool.module.scss";
import { SEARCH_LEADS } from "./../../graphql/queries";

const SearchTool = ({ user }) => {
  const [keyType, setKeyType] = useState("businessName");
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, data } = useQuery(SEARCH_LEADS, {
    variables: {
      key: keyType,
      searchTerm: searchTerm,
    },
  });

  if (loading) console.log(loading);
  if (data) console.log(data);

  const onRadioSelect = (type) => {
    setKeyType(type);
  };

  return (
    <div className={styles.searchTool}>
      {user ? (
        <>
          <form className={styles.searchToolRadioGroup}>
            <div>
              <input
                name="businessName"
                id="businessName"
                type="radio"
                checked={keyType === "businessName"}
                onChange={(e) => onRadioSelect(e.target.name)}
              />
              <label className={styles.searchToolRadioLabel}>Company</label>
            </div>
            <div>
              <input
                name="category"
                id="category"
                type="radio"
                checked={keyType === "category"}
                onChange={(e) => onRadioSelect(e.target.name)}
              />
              <label className={styles.searchToolRadioLabel}>Category</label>
            </div>
            <div>
              <input
                name="city"
                id="city"
                type="radio"
                checked={keyType === "city"}
                onChange={(e) => onRadioSelect(e.target.name)}
              />
              <label className={styles.searchToolRadioLabel}>City</label>
            </div>
            <div>
              <input
                name="state"
                id="state"
                type="radio"
                checked={keyType === "state"}
                onChange={(e) => onRadioSelect(e.target.name)}
              />
              <label className={styles.searchToolRadioLabel}>State</label>
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
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SearchTool;
