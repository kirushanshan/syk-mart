import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to syk-mart',
  description: 'we sell the best products for chep',
  keywords:
    'electronics, buy electronic,chep price , chep electronic , northern , jaffna, jaffna people',
}

export default Meta
