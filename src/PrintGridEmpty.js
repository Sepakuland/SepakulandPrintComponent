import React, { useEffect, useState, useRef } from "react";
import "./default-main-dark.css";
import "./default-ocean-blue.css";
import "./style.css";
import { loadLangMsg } from "./loadLangMsg";

import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { LocalizationProvider } from "@progress/kendo-react-intl";

export default function PrintGrid({
  printData,
  columnList,
  t,
  language,
  direction,
}) {
  const [gridW, setGridW] = useState();
  const gridContainer = useRef();

  let tempColumn = columnList;

  let pObj = {};

  tempColumn.forEach((item) => {
    pObj[item.field] = true;
  });

  const [fields, setFields] = useState(pObj);

  useEffect(() => {
    loadLangMsg(language);
  }, [language]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const handleResize = async () => {
    await timeout(500);
    setGridW(gridContainer?.current?.offsetWidth - 20);
  };

  useEffect(() => {
    setGridW(gridContainer?.current?.offsetWidth - 20);
  }, []);

  return (
    <div className="row justify-content-center">
      <div className="col-lg-11 col-md-12 col-sm-12 col-12">
        <div style={{ direction: direction }}>
          <div className="grid">
            <div
              className={`print-grid ${direction === "ltr" ? "ltr-p" : ""}`}
              ref={gridContainer}
            >
              <LocalizationProvider
                language={`${
                  language === "fa" ? "fa-IR" : language === "ar" ? "ar" : "en"
                }`}
              >
                <Grid
                  total={printData.length}
                  take={printData.length}
                  data={printData}
                  pageable={false}
                  sortable={false}
                  filterable={false}
                  reorderable={false}
                  className={`main-grid ${language === "en" ? "ltr" : "rtl"}`}
                >
                  {tempColumn?.map((column, index) => {
                    if (!column?.children?.length) {
                      return (
                        fields[column.field] && (
                          <GridColumn
                            {...column}
                            key={index}
                            title={t(`${column.name}`)}
                          />
                        )
                      );
                    } else {
                      return (
                        fields[column.field] && (
                          <GridColumn
                            key={index}
                            {...column}
                            title={t(`${column.name}`)}
                          >
                            {column?.children.map((children, indexC) => {
                              return (
                                <GridColumn
                                  {...children}
                                  key={indexC}
                                  title={t(`${children.name}`)}
                                />
                              );
                            })}
                          </GridColumn>
                        )
                      );
                    }
                  })}
                </Grid>
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
