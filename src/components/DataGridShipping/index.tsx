import { FunctionComponent } from 'react'

import Typography, { FontType } from '@components/UI/Typography'
import { generateKey } from '@resources/utils/generateKey'

import { IViewProps } from '@components/DataGridPartners/types'
import Separator from '@components/UI/Separator'
import { formatToMoney } from '@resources/utils/forNumber'
import { AllRows, Column, Container, Row } from './styles'

const DataGridShipping: FunctionComponent<IViewProps> = ({ header, data }) => {
  return (
    <Container>
      <Row>
        {header.map((headerItem) => (
          <Column
            align={headerItem.styles.align}
            grid={headerItem.grid}
            key={generateKey()}
          >
            {typeof headerItem.label === 'string' ? (
              <Typography
                fontType={FontType.bold}
                size={12}
                color={headerItem.styles.color}
                weight="600"
              >
                {headerItem.label}
              </Typography>
            ) : (
              <>{headerItem.label}</>
            )}
          </Column>
        ))}
      </Row>
      {data.map((dataItem, dataIndex) => (
        <AllRows key={`${dataIndex}-${String(dataItem)}`} item>
          {header.map((headerItem, headerIndex) => {
            const element = dataItem.values[headerItem.value]

            return (
              <>
                <Column
                  align={headerItem.styles.align}
                  grid={headerItem.grid}
                  key={`${headerIndex}-${String(headerItem.label)}`}
                >
                  <>
                    {headerItem.field === 'value' && (
                      <Typography
                        fontType={headerItem.styles.fontType}
                        size={headerItem.styles.fontSize}
                        color={headerItem.styles.color}
                      >
                        {typeof element === 'number'
                          ? `R$ ${formatToMoney(element)}`
                          : element && element}
                      </Typography>
                    )}

                    {headerItem.field === 'select' && <>{dataItem.select}</>}
                    {headerItem.field === 'interaction' && (
                      <>{dataItem.action}</>
                    )}
                  </>
                </Column>
                <Separator displayLine={true} verticalSize={100} />
              </>
            )
          })}
        </AllRows>
      ))}
    </Container>
  )
}

export default DataGridShipping
