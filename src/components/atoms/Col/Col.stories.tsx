import { Typography } from '@mui/material'
import { Story } from '@storybook/react'

import { Col, ColProps } from './index'
import { Card } from '../Card'
import { Container } from '../Container'
import { Layout } from '../Layout'

interface ColStoryProps extends ColProps {
  numberOfCols: number
  columnWidth: number
}

const Template: Story<ColStoryProps> = args => {
  const { numberOfCols = 4, ...rest } = args

  return (
    <Container style={{ border: '1px solid gray', height: '200px' }} background="opaque">
      <Layout mode="grid" width="12">
        {new Array(numberOfCols).fill(0).map((_, idx) => (
          <Col key={idx} {...rest}>
            <Card padding="24">
              <Typography variant={'h6'}>This is a card in a {rest.width} width column</Typography>
            </Card>
          </Col>
        ))}
      </Layout>
    </Container>
  )
}
export const Default = Template.bind({})

export default {
  title: 'Atoms/Col',
  component: Col,
  argTypes: {
    numberOfCols: {
      defaultValue: 4,
      control: {
        type: 'number',
      },
    },
    width: {
      defaultValue: 3,
      control: {
        type: 'number',
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
}
