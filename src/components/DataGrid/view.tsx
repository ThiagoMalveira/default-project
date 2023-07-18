import React from "react";

import Typography, { FontType } from "@components/UI/Typography";
import { generateKey } from "@resources/utils/generateKey";

import { IViewProps } from "./types";
import { Container, Row, Column } from "./styles";
import { formatToMoney } from "@resources/utils/forNumber";

const DataGrid: React.FC<IViewProps> = ({ header, data }) => {
  return (
    <Container>
      <Row>
        {header.map((headerItem) => (
          <Column
            align={headerItem.styles.align}
            grid={headerItem.grid}
            key={generateKey()}
          >
            {typeof headerItem.label === "string" ? (
              <Typography fontType={FontType.bold} size={13}>
                {headerItem.label}
              </Typography>
            ) : (
              <>{headerItem.label}</>
            )}
          </Column>
        ))}
      </Row>
      {data.map((dataItem, dataIndex) => (
        <Row key={`${dataIndex}-${String(dataItem)}`} item>
          {header.map((headerItem, headerIndex) => {
            const element = dataItem.values[headerItem.value];

            return (
              <Column
                align={headerItem.styles.align}
                grid={headerItem.grid}
                key={`${headerIndex}-${String(headerItem.label)}`}
              >
                <>
                  {headerItem.field === "value" && (
                    <Typography
                      fontType={headerItem.styles.fontType}
                      size={headerItem.styles.fontSize}
                    >
                      {typeof element === "number"
                        ? `R$ ${formatToMoney(element)}`
                        : element && element}
                    </Typography>
                  )}

                  {headerItem.field === "select" && <>{dataItem.select}</>}
                  {headerItem.field === "interaction" && <>{dataItem.action}</>}
                </>
              </Column>
            );
          })}
        </Row>
      ))}
    </Container>
  );
};

export default DataGrid;
