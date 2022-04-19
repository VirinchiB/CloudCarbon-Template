import React from 'react';
import { Grid, Row, Column } from 'carbon-components-react';
import { ProductiveCard } from '@carbon/ibm-products';
import { TrashCan16, Edit16 } from '@carbon/icons-react';
import { DonutChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import './CardWithChart.scss';

export const CardWithCharts = () => {
    const action = () => {
        console.log('action');
    };
   const  data = [
        {
            "group": "2V2N 9KYPM version 1",
            "value": 20000
        },
        {
            "group": "L22I P66EP L22I P66EP L22I P66EP",
            "value": 65000
        },
        {
            "group": "JQAI 2M4L1",
            "value": 75000
        },
        {
            "group": "J9DZ F37AP",
            "value": 1200
        },
        {
            "group": "YEL48 Q6XK YEL48",
            "value": 10000
        },
        {
            "group": "Misc",
            "value": 25000
        }
    ]
    const options = {
        "title": "Donut",
        "resizable": true,
        "donut": {
            "center": {
                "label": "Browsers"
            }
        },
        "height": "400px"
    }
    const defaultProps = {
        title: 'Title',
        children: (
            <>
                <DonutChart
                    data={data}
                    options={options}>
                </DonutChart>
            </>
        ),
        actionIcons: [
            {
                id: '1',
                icon: Edit16,
                onClick: action,
                onKeyDown: action,
                iconDescription: 'Edit',
            },
            {
                id: '2',
                icon: TrashCan16,
                onClick: action,
                onKeyDown: action,
                iconDescription: 'Delete',
            },
        ],
    };
    return (
        <Grid>
            <Row>
                <Column lg={8}>
                    <ProductiveCard {...defaultProps} />
                </Column>
            </Row>
        </Grid>
    );
};

export default CardWithCharts;